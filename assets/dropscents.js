var nd = Object.defineProperty;
var sd = (s, t, i) => t in s ? nd(s, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : s[t] = i;
var Z = (s, t, i) => sd(s, typeof t != "symbol" ? t + "" : t, i);
function Yi(s) {
  if (s === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return s;
}
function Bu(s, t) {
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
}, ws = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, vl, ye, $t, yi = 1e8, Nt = 1 / yi, ka = Math.PI * 2, od = ka / 4, ad = 0, $u = Math.sqrt, ld = Math.cos, cd = Math.sin, fe = function(t) {
  return typeof t == "string";
}, Ht = function(t) {
  return typeof t == "function";
}, Ki = function(t) {
  return typeof t == "number";
}, wl = function(t) {
  return typeof t > "u";
}, $i = function(t) {
  return typeof t == "object";
}, Xe = function(t) {
  return t !== !1;
}, xl = function() {
  return typeof window < "u";
}, zs = function(t) {
  return Ht(t) || fe(t);
}, zu = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, ke = Array.isArray, ud = /random\([^)]+\)/g, fd = /,\s*/g, cc = /(?:-?\.?\d|\.)+/gi, Yu = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, on = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, qo = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Xu = /[+-]=-?[.\d]+/, hd = /[^,'"\[\]\s]+/gi, dd = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, Xt, Oi, Pa, bl, li = {}, mo = {}, Wu, Vu = function(t) {
  return (mo = bn(t, li)) && Ue;
}, Sl = function(t, i) {
  return console.warn("Invalid property", t, "set to", i, "Missing plugin? gsap.registerPlugin()");
}, xs = function(t, i) {
  return !i && console.warn(t);
}, Hu = function(t, i) {
  return t && (li[t] = i) && mo && (mo[t] = i) || li;
}, bs = function() {
  return 0;
}, pd = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, ro = {
  suppressEvents: !0,
  kill: !1
}, _d = {
  suppressEvents: !0
}, Tl = {}, hr = [], Ma = {}, qu, ti = {}, Uo = {}, uc = 30, no = [], El = "", Cl = function(t) {
  var i = t[0], e, r;
  if ($i(i) || Ht(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
    for (r = no.length; r-- && !no[r].targetTest(i); )
      ;
    e = no[r];
  }
  for (r = t.length; r--; )
    t[r] && (t[r]._gsap || (t[r]._gsap = new _f(t[r], e))) || t.splice(r, 1);
  return t;
}, Ar = function(t) {
  return t._gsap || Cl(vi(t))[0]._gsap;
}, Uu = function(t, i, e) {
  return (e = t[i]) && Ht(e) ? t[i]() : wl(e) && t.getAttribute && t.getAttribute(i) || e;
}, We = function(t, i) {
  return (t = t.split(",")).forEach(i) || t;
}, Gt = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, Yt = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0;
}, fn = function(t, i) {
  var e = i.charAt(0), r = parseFloat(i.substr(2));
  return t = parseFloat(t), e === "+" ? t + r : e === "-" ? t - r : e === "*" ? t * r : t / r;
}, gd = function(t, i) {
  for (var e = i.length, r = 0; t.indexOf(i[r]) < 0 && ++r < e; )
    ;
  return r < e;
}, yo = function() {
  var t = hr.length, i = hr.slice(0), e, r;
  for (Ma = {}, hr.length = 0, e = 0; e < t; e++)
    r = i[e], r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
}, kl = function(t) {
  return !!(t._initted || t._startAt || t.add);
}, Gu = function(t, i, e, r) {
  hr.length && !ye && yo(), t.render(i, e, !!(ye && i < 0 && kl(t))), hr.length && !ye && yo();
}, ju = function(t) {
  var i = parseFloat(t);
  return (i || i === 0) && (t + "").match(hd).length < 2 ? i : fe(t) ? t.trim() : t;
}, Ku = function(t) {
  return t;
}, ci = function(t, i) {
  for (var e in i)
    e in t || (t[e] = i[e]);
  return t;
}, md = function(t) {
  return function(i, e) {
    for (var r in e)
      r in i || r === "duration" && t || r === "ease" || (i[r] = e[r]);
  };
}, bn = function(t, i) {
  for (var e in i)
    t[e] = i[e];
  return t;
}, fc = function s(t, i) {
  for (var e in i)
    e !== "__proto__" && e !== "constructor" && e !== "prototype" && (t[e] = $i(i[e]) ? s(t[e] || (t[e] = {}), i[e]) : i[e]);
  return t;
}, vo = function(t, i) {
  var e = {}, r;
  for (r in t)
    r in i || (e[r] = t[r]);
  return e;
}, ts = function(t) {
  var i = t.parent || Xt, e = t.keyframes ? md(ke(t.keyframes)) : ci;
  if (Xe(t.inherit))
    for (; i; )
      e(t, i.vars.defaults), i = i.parent || i._dp;
  return t;
}, yd = function(t, i) {
  for (var e = t.length, r = e === i.length; r && e-- && t[e] === i[e]; )
    ;
  return e < 0;
}, Qu = function(t, i, e, r, n) {
  var o = t[r], a;
  if (n)
    for (a = i[n]; o && o[n] > a; )
      o = o._prev;
  return o ? (i._next = o._next, o._next = i) : (i._next = t[e], t[e] = i), i._next ? i._next._prev = i : t[r] = i, i._prev = o, i.parent = i._dp = t, i;
}, Io = function(t, i, e, r) {
  e === void 0 && (e = "_first"), r === void 0 && (r = "_last");
  var n = i._prev, o = i._next;
  n ? n._next = o : t[e] === i && (t[e] = o), o ? o._prev = n : t[r] === i && (t[r] = n), i._next = i._prev = i.parent = null;
}, gr = function(t, i) {
  t.parent && (!i || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0;
}, Rr = function(t, i) {
  if (t && (!i || i._end > t._dur || i._start < 0))
    for (var e = t; e; )
      e._dirty = 1, e = e.parent;
  return t;
}, vd = function(t) {
  for (var i = t.parent; i && i.parent; )
    i._dirty = 1, i.totalDuration(), i = i.parent;
  return t;
}, Da = function(t, i, e, r) {
  return t._startAt && (ye ? t._startAt.revert(ro) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(i, !0, r));
}, wd = function s(t) {
  return !t || t._ts && s(t.parent);
}, hc = function(t) {
  return t._repeat ? Sn(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, Sn = function(t, i) {
  var e = Math.floor(t = Yt(t / i));
  return t && e === t ? e - 1 : e;
}, wo = function(t, i) {
  return (t - i._start) * i._ts + (i._ts >= 0 ? 0 : i._dirty ? i.totalDuration() : i._tDur);
}, Bo = function(t) {
  return t._end = Yt(t._start + (t._tDur / Math.abs(t._ts || t._rts || Nt) || 0));
}, $o = function(t, i) {
  var e = t._dp;
  return e && e.smoothChildTiming && t._ts && (t._start = Yt(e._time - (t._ts > 0 ? i / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - i) / -t._ts)), Bo(t), e._dirty || Rr(e, t)), t;
}, Zu = function(t, i) {
  var e;
  if ((i._time || !i._dur && i._initted || i._start < t._time && (i._dur || !i.add)) && (e = wo(t.rawTime(), i), (!i._dur || Ns(0, i.totalDuration(), e) - i._tTime > Nt) && i.render(e, !0)), Rr(t, i)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration())
      for (e = t; e._dp; )
        e.rawTime() >= 0 && e.totalTime(e._tTime), e = e._dp;
    t._zTime = -Nt;
  }
}, Ni = function(t, i, e, r) {
  return i.parent && gr(i), i._start = Yt((Ki(e) ? e : e || t !== Xt ? _i(t, e, i) : t._time) + i._delay), i._end = Yt(i._start + (i.totalDuration() / Math.abs(i.timeScale()) || 0)), Qu(t, i, "_first", "_last", t._sort ? "_start" : 0), Oa(i) || (t._recent = i), r || Zu(t, i), t._ts < 0 && $o(t, t._tTime), t;
}, Ju = function(t, i) {
  return (li.ScrollTrigger || Sl("scrollTrigger", i)) && li.ScrollTrigger.create(i, t);
}, tf = function(t, i, e, r, n) {
  if (Ml(t, i, n), !t._initted)
    return 1;
  if (!e && t._pt && !ye && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && qu !== ii.frame)
    return hr.push(t), t._lazy = [n, r], 1;
}, xd = function s(t) {
  var i = t.parent;
  return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || s(i));
}, Oa = function(t) {
  var i = t.data;
  return i === "isFromStart" || i === "isStart";
}, bd = function(t, i, e, r) {
  var n = t.ratio, o = i < 0 || !i && (!t._start && xd(t) && !(!t._initted && Oa(t)) || (t._ts < 0 || t._dp._ts < 0) && !Oa(t)) ? 0 : 1, a = t._rDelay, c = 0, u, f, h;
  if (a && t._repeat && (c = Ns(0, t._tDur, i), f = Sn(c, a), t._yoyo && f & 1 && (o = 1 - o), f !== Sn(t._tTime, a) && (n = 1 - o, t.vars.repeatRefresh && t._initted && t.invalidate())), o !== n || ye || r || t._zTime === Nt || !i && t._zTime) {
    if (!t._initted && tf(t, i, r, e, c))
      return;
    for (h = t._zTime, t._zTime = i || (e ? Nt : 0), e || (e = i && !h), t.ratio = o, t._from && (o = 1 - o), t._time = 0, t._tTime = c, u = t._pt; u; )
      u.r(o, u.d), u = u._next;
    i < 0 && Da(t, i, e, !0), t._onUpdate && !e && si(t, "onUpdate"), c && t._repeat && !e && t.parent && si(t, "onRepeat"), (i >= t._tDur || i < 0) && t.ratio === o && (o && gr(t, 1), !e && !ye && (si(t, o ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
  } else t._zTime || (t._zTime = i);
}, Sd = function(t, i, e) {
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
}, Tn = function(t, i, e, r) {
  var n = t._repeat, o = Yt(i) || 0, a = t._tTime / t._tDur;
  return a && !r && (t._time *= o / t._dur), t._dur = o, t._tDur = n ? n < 0 ? 1e10 : Yt(o * (n + 1) + t._rDelay * n) : o, a > 0 && !r && $o(t, t._tTime = t._tDur * a), t.parent && Bo(t), e || Rr(t.parent, t), t;
}, dc = function(t) {
  return t instanceof Ye ? Rr(t) : Tn(t, t._dur);
}, Td = {
  _start: 0,
  endTime: bs,
  totalDuration: bs
}, _i = function s(t, i, e) {
  var r = t.labels, n = t._recent || Td, o = t.duration() >= yi ? n.endTime(!1) : t._dur, a, c, u;
  return fe(i) && (isNaN(i) || i in r) ? (c = i.charAt(0), u = i.substr(-1) === "%", a = i.indexOf("="), c === "<" || c === ">" ? (a >= 0 && (i = i.replace(/=/, "")), (c === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(i.substr(1)) || 0) * (u ? (a < 0 ? n : e).totalDuration() / 100 : 1)) : a < 0 ? (i in r || (r[i] = o), r[i]) : (c = parseFloat(i.charAt(a - 1) + i.substr(a + 1)), u && e && (c = c / 100 * (ke(e) ? e[0] : e).totalDuration()), a > 1 ? s(t, i.substr(0, a - 1), e) + c : o + c)) : i == null ? o : +i;
}, es = function(t, i, e) {
  var r = Ki(i[1]), n = (r ? 2 : 1) + (t < 2 ? 0 : 1), o = i[n], a, c;
  if (r && (o.duration = i[1]), o.parent = e, t) {
    for (a = o, c = e; c && !("immediateRender" in a); )
      a = c.vars.defaults || {}, c = Xe(c.vars.inherit) && c.parent;
    o.immediateRender = Xe(a.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = i[n - 1];
  }
  return new te(i[0], o, i[n + 1]);
}, wr = function(t, i) {
  return t || t === 0 ? i(t) : i;
}, Ns = function(t, i, e) {
  return e < t ? t : e > i ? i : e;
}, Ee = function(t, i) {
  return !fe(t) || !(i = dd.exec(t)) ? "" : i[1];
}, Ed = function(t, i, e) {
  return wr(e, function(r) {
    return Ns(t, i, r);
  });
}, La = [].slice, ef = function(t, i) {
  return t && $i(t) && "length" in t && (!i && !t.length || t.length - 1 in t && $i(t[0])) && !t.nodeType && t !== Oi;
}, Cd = function(t, i, e) {
  return e === void 0 && (e = []), t.forEach(function(r) {
    var n;
    return fe(r) && !i || ef(r, 1) ? (n = e).push.apply(n, vi(r)) : e.push(r);
  }) || e;
}, vi = function(t, i, e) {
  return $t && !i && $t.selector ? $t.selector(t) : fe(t) && !e && (Pa || !En()) ? La.call((i || bl).querySelectorAll(t), 0) : ke(t) ? Cd(t, e) : ef(t) ? La.call(t, 0) : t ? [t] : [];
}, Aa = function(t) {
  return t = vi(t)[0] || xs("Invalid scope") || {}, function(i) {
    var e = t.current || t.nativeElement || t;
    return vi(i, e.querySelectorAll ? e : e === t ? xs("Invalid scope") || bl.createElement("div") : t);
  };
}, rf = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, nf = function(t) {
  if (Ht(t))
    return t;
  var i = $i(t) ? t : {
    each: t
  }, e = Nr(i.ease), r = i.from || 0, n = parseFloat(i.base) || 0, o = {}, a = r > 0 && r < 1, c = isNaN(r) || a, u = i.axis, f = r, h = r;
  return fe(r) ? f = h = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[r] || 0 : !a && c && (f = r[0], h = r[1]), function(d, l, _) {
    var p = (_ || i).length, g = o[p], w, T, x, b, m, M, E, C, D;
    if (!g) {
      if (D = i.grid === "auto" ? 0 : (i.grid || [1, yi])[1], !D) {
        for (E = -yi; E < (E = _[D++].getBoundingClientRect().left) && D < p; )
          ;
        D < p && D--;
      }
      for (g = o[p] = [], w = c ? Math.min(D, p) * f - 0.5 : r % D, T = D === yi ? 0 : c ? p * h / D - 0.5 : r / D | 0, E = 0, C = yi, M = 0; M < p; M++)
        x = M % D - w, b = T - (M / D | 0), g[M] = m = u ? Math.abs(u === "y" ? b : x) : $u(x * x + b * b), m > E && (E = m), m < C && (C = m);
      r === "random" && rf(g), g.max = E - C, g.min = C, g.v = p = (parseFloat(i.amount) || parseFloat(i.each) * (D > p ? p - 1 : u ? u === "y" ? p / D : D : Math.max(D, p / D)) || 0) * (r === "edges" ? -1 : 1), g.b = p < 0 ? n - p : n, g.u = Ee(i.amount || i.each) || 0, e = e && p < 0 ? $d(e) : e;
    }
    return p = (g[d] - g.min) / g.max || 0, Yt(g.b + (e ? e(p) : p) * g.v) + g.u;
  };
}, Ra = function(t) {
  var i = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(e) {
    var r = Yt(Math.round(parseFloat(e) / t) * t * i);
    return (r - r % 1) / i + (Ki(e) ? 0 : Ee(e));
  };
}, sf = function(t, i) {
  var e = ke(t), r, n;
  return !e && $i(t) && (r = e = t.radius || yi, t.values ? (t = vi(t.values), (n = !Ki(t[0])) && (r *= r)) : t = Ra(t.increment)), wr(i, e ? Ht(t) ? function(o) {
    return n = t(o), Math.abs(n - o) <= r ? n : o;
  } : function(o) {
    for (var a = parseFloat(n ? o.x : o), c = parseFloat(n ? o.y : 0), u = yi, f = 0, h = t.length, d, l; h--; )
      n ? (d = t[h].x - a, l = t[h].y - c, d = d * d + l * l) : d = Math.abs(t[h] - a), d < u && (u = d, f = h);
    return f = !r || u <= r ? t[f] : o, n || f === o || Ki(o) ? f : f + Ee(o);
  } : Ra(t));
}, of = function(t, i, e, r) {
  return wr(ke(t) ? !i : e === !0 ? !!(e = 0) : !r, function() {
    return ke(t) ? t[~~(Math.random() * t.length)] : (e = e || 1e-5) && (r = e < 1 ? Math.pow(10, (e + "").length - 2) : 1) && Math.floor(Math.round((t - e / 2 + Math.random() * (i - t + e * 0.99)) / e) * e * r) / r;
  });
}, kd = function() {
  for (var t = arguments.length, i = new Array(t), e = 0; e < t; e++)
    i[e] = arguments[e];
  return function(r) {
    return i.reduce(function(n, o) {
      return o(n);
    }, r);
  };
}, Pd = function(t, i) {
  return function(e) {
    return t(parseFloat(e)) + (i || Ee(e));
  };
}, Md = function(t, i, e) {
  return lf(t, i, 0, 1, e);
}, af = function(t, i, e) {
  return wr(e, function(r) {
    return t[~~i(r)];
  });
}, Dd = function s(t, i, e) {
  var r = i - t;
  return ke(t) ? af(t, s(0, t.length), i) : wr(e, function(n) {
    return (r + (n - t) % r) % r + t;
  });
}, Od = function s(t, i, e) {
  var r = i - t, n = r * 2;
  return ke(t) ? af(t, s(0, t.length - 1), i) : wr(e, function(o) {
    return o = (n + (o - t) % n) % n || 0, t + (o > r ? n - o : o);
  });
}, Ss = function(t) {
  return t.replace(ud, function(i) {
    var e = i.indexOf("[") + 1, r = i.substring(e || 7, e ? i.indexOf("]") : i.length - 1).split(fd);
    return of(e ? r : +r[0], e ? 0 : +r[1], +r[2] || 1e-5);
  });
}, lf = function(t, i, e, r, n) {
  var o = i - t, a = r - e;
  return wr(n, function(c) {
    return e + ((c - t) / o * a || 0);
  });
}, Ld = function s(t, i, e, r) {
  var n = isNaN(t + i) ? 0 : function(l) {
    return (1 - l) * t + l * i;
  };
  if (!n) {
    var o = fe(t), a = {}, c, u, f, h, d;
    if (e === !0 && (r = 1) && (e = null), o)
      t = {
        p: t
      }, i = {
        p: i
      };
    else if (ke(t) && !ke(i)) {
      for (f = [], h = t.length, d = h - 2, u = 1; u < h; u++)
        f.push(s(t[u - 1], t[u]));
      h--, n = function(_) {
        _ *= h;
        var p = Math.min(d, ~~_);
        return f[p](_ - p);
      }, e = i;
    } else r || (t = bn(ke(t) ? [] : {}, t));
    if (!f) {
      for (c in i)
        Pl.call(a, t, c, "get", i[c]);
      n = function(_) {
        return Ll(_, a) || (o ? t.p : t);
      };
    }
  }
  return wr(e, n);
}, pc = function(t, i, e) {
  var r = t.labels, n = yi, o, a, c;
  for (o in r)
    a = r[o] - i, a < 0 == !!e && a && n > (a = Math.abs(a)) && (c = o, n = a);
  return c;
}, si = function(t, i, e) {
  var r = t.vars, n = r[i], o = $t, a = t._ctx, c, u, f;
  if (n)
    return c = r[i + "Params"], u = r.callbackScope || t, e && hr.length && yo(), a && ($t = a), f = c ? n.apply(u, c) : n.call(u), $t = o, f;
}, Xn = function(t) {
  return gr(t), t.scrollTrigger && t.scrollTrigger.kill(!!ye), t.progress() < 1 && si(t, "onInterrupt"), t;
}, an, cf = [], uf = function(t) {
  if (t)
    if (t = !t.name && t.default || t, xl() || t.headless) {
      var i = t.name, e = Ht(t), r = i && !e && t.init ? function() {
        this._props = [];
      } : t, n = {
        init: bs,
        render: Ll,
        add: Pl,
        kill: jd,
        modifier: Gd,
        rawVars: 0
      }, o = {
        targetTest: 0,
        get: 0,
        getSetter: Ol,
        aliases: {},
        register: 0
      };
      if (En(), t !== r) {
        if (ti[i])
          return;
        ci(r, ci(vo(t, n), o)), bn(r.prototype, bn(n, vo(t, o))), ti[r.prop = i] = r, t.targetTest && (no.push(r), Tl[i] = 1), i = (i === "css" ? "CSS" : i.charAt(0).toUpperCase() + i.substr(1)) + "Plugin";
      }
      Hu(i, r), t.register && t.register(Ue, r, Ve);
    } else
      cf.push(t);
}, Lt = 255, Wn = {
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
}, Go = function(t, i, e) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? i + (e - i) * t * 6 : t < 0.5 ? e : t * 3 < 2 ? i + (e - i) * (2 / 3 - t) * 6 : i) * Lt + 0.5 | 0;
}, ff = function(t, i, e) {
  var r = t ? Ki(t) ? [t >> 16, t >> 8 & Lt, t & Lt] : 0 : Wn.black, n, o, a, c, u, f, h, d, l, _;
  if (!r) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), Wn[t])
      r = Wn[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (n = t.charAt(1), o = t.charAt(2), a = t.charAt(3), t = "#" + n + n + o + o + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9)
        return r = parseInt(t.substr(1, 6), 16), [r >> 16, r >> 8 & Lt, r & Lt, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), r = [t >> 16, t >> 8 & Lt, t & Lt];
    } else if (t.substr(0, 3) === "hsl") {
      if (r = _ = t.match(cc), !i)
        c = +r[0] % 360 / 360, u = +r[1] / 100, f = +r[2] / 100, o = f <= 0.5 ? f * (u + 1) : f + u - f * u, n = f * 2 - o, r.length > 3 && (r[3] *= 1), r[0] = Go(c + 1 / 3, n, o), r[1] = Go(c, n, o), r[2] = Go(c - 1 / 3, n, o);
      else if (~t.indexOf("="))
        return r = t.match(Yu), e && r.length < 4 && (r[3] = 1), r;
    } else
      r = t.match(cc) || Wn.transparent;
    r = r.map(Number);
  }
  return i && !_ && (n = r[0] / Lt, o = r[1] / Lt, a = r[2] / Lt, h = Math.max(n, o, a), d = Math.min(n, o, a), f = (h + d) / 2, h === d ? c = u = 0 : (l = h - d, u = f > 0.5 ? l / (2 - h - d) : l / (h + d), c = h === n ? (o - a) / l + (o < a ? 6 : 0) : h === o ? (a - n) / l + 2 : (n - o) / l + 4, c *= 60), r[0] = ~~(c + 0.5), r[1] = ~~(u * 100 + 0.5), r[2] = ~~(f * 100 + 0.5)), e && r.length < 4 && (r[3] = 1), r;
}, hf = function(t) {
  var i = [], e = [], r = -1;
  return t.split(dr).forEach(function(n) {
    var o = n.match(on) || [];
    i.push.apply(i, o), e.push(r += o.length + 1);
  }), i.c = e, i;
}, _c = function(t, i, e) {
  var r = "", n = (t + r).match(dr), o = i ? "hsla(" : "rgba(", a = 0, c, u, f, h;
  if (!n)
    return t;
  if (n = n.map(function(d) {
    return (d = ff(d, i, 1)) && o + (i ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : d.join(",")) + ")";
  }), e && (f = hf(t), c = e.c, c.join(r) !== f.c.join(r)))
    for (u = t.replace(dr, "1").split(on), h = u.length - 1; a < h; a++)
      r += u[a] + (~c.indexOf(a) ? n.shift() || o + "0,0,0,0)" : (f.length ? f : n.length ? n : e).shift());
  if (!u)
    for (u = t.split(dr), h = u.length - 1; a < h; a++)
      r += u[a] + n[a];
  return r + u[h];
}, dr = function() {
  var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in Wn)
    s += "|" + t + "\\b";
  return new RegExp(s + ")", "gi");
}(), Ad = /hsl[a]?\(/, df = function(t) {
  var i = t.join(" "), e;
  if (dr.lastIndex = 0, dr.test(i))
    return e = Ad.test(i), t[1] = _c(t[1], e), t[0] = _c(t[0], e, hf(t[1])), !0;
}, Ts, ii = function() {
  var s = Date.now, t = 500, i = 33, e = s(), r = e, n = 1e3 / 240, o = n, a = [], c, u, f, h, d, l, _ = function p(g) {
    var w = s() - r, T = g === !0, x, b, m, M;
    if ((w > t || w < 0) && (e += w - i), r += w, m = r - e, x = m - o, (x > 0 || T) && (M = ++h.frame, d = m - h.time * 1e3, h.time = m = m / 1e3, o += x + (x >= n ? 4 : n - x), b = 1), T || (c = u(p)), b)
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
      Wu && (!Pa && xl() && (Oi = Pa = window, bl = Oi.document || {}, li.gsap = Ue, (Oi.gsapVersions || (Oi.gsapVersions = [])).push(Ue.version), Vu(mo || Oi.GreenSockGlobals || !Oi.gsap && Oi || {}), cf.forEach(uf)), f = typeof requestAnimationFrame < "u" && requestAnimationFrame, c && h.sleep(), u = f || function(g) {
        return setTimeout(g, o - h.time * 1e3 + 1 | 0);
      }, Ts = 1, _(2));
    },
    sleep: function() {
      (f ? cancelAnimationFrame : clearTimeout)(c), Ts = 0, u = bs;
    },
    lagSmoothing: function(g, w) {
      t = g || 1 / 0, i = Math.min(w || 33, t);
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
  return !Ts && ii.wake();
}, vt = {}, Rd = /^[\d.\-M][\d.\-,\s]/, Nd = /["']/g, Fd = function(t) {
  for (var i = {}, e = t.substr(1, t.length - 3).split(":"), r = e[0], n = 1, o = e.length, a, c, u; n < o; n++)
    c = e[n], a = n !== o - 1 ? c.lastIndexOf(",") : c.length, u = c.substr(0, a), i[r] = isNaN(u) ? u.replace(Nd, "").trim() : +u, r = c.substr(a + 1).trim();
  return i;
}, Id = function(t) {
  var i = t.indexOf("(") + 1, e = t.indexOf(")"), r = t.indexOf("(", i);
  return t.substring(i, ~r && r < e ? t.indexOf(")", e + 1) : e);
}, Bd = function(t) {
  var i = (t + "").split("("), e = vt[i[0]];
  return e && i.length > 1 && e.config ? e.config.apply(null, ~t.indexOf("{") ? [Fd(i[1])] : Id(t).split(",").map(ju)) : vt._CE && Rd.test(t) ? vt._CE("", t) : e;
}, $d = function(t) {
  return function(i) {
    return 1 - t(1 - i);
  };
}, Nr = function(t, i) {
  return t && (Ht(t) ? t : vt[t] || Bd(t)) || i;
}, Ur = function(t, i, e, r) {
  e === void 0 && (e = function(c) {
    return 1 - i(1 - c);
  }), r === void 0 && (r = function(c) {
    return c < 0.5 ? i(c * 2) / 2 : 1 - i((1 - c) * 2) / 2;
  });
  var n = {
    easeIn: i,
    easeOut: e,
    easeInOut: r
  }, o;
  return We(t, function(a) {
    vt[a] = li[a] = n, vt[o = a.toLowerCase()] = e;
    for (var c in n)
      vt[o + (c === "easeIn" ? ".in" : c === "easeOut" ? ".out" : ".inOut")] = vt[a + "." + c] = n[c];
  }), n;
}, pf = function(t) {
  return function(i) {
    return i < 0.5 ? (1 - t(1 - i * 2)) / 2 : 0.5 + t((i - 0.5) * 2) / 2;
  };
}, jo = function s(t, i, e) {
  var r = i >= 1 ? i : 1, n = (e || (t ? 0.3 : 0.45)) / (i < 1 ? i : 1), o = n / ka * (Math.asin(1 / r) || 0), a = function(f) {
    return f === 1 ? 1 : r * Math.pow(2, -10 * f) * cd((f - o) * n) + 1;
  }, c = t === "out" ? a : t === "in" ? function(u) {
    return 1 - a(1 - u);
  } : pf(a);
  return n = ka / n, c.config = function(u, f) {
    return s(t, u, f);
  }, c;
}, Ko = function s(t, i) {
  i === void 0 && (i = 1.70158);
  var e = function(o) {
    return o ? --o * o * ((i + 1) * o + i) + 1 : 0;
  }, r = t === "out" ? e : t === "in" ? function(n) {
    return 1 - e(1 - n);
  } : pf(e);
  return r.config = function(n) {
    return s(t, n);
  }, r;
};
We("Linear,Quad,Cubic,Quart,Quint,Strong", function(s, t) {
  var i = t < 5 ? t + 1 : t;
  Ur(s + ",Power" + (i - 1), t ? function(e) {
    return Math.pow(e, i);
  } : function(e) {
    return e;
  }, function(e) {
    return 1 - Math.pow(1 - e, i);
  }, function(e) {
    return e < 0.5 ? Math.pow(e * 2, i) / 2 : 1 - Math.pow((1 - e) * 2, i) / 2;
  });
});
vt.Linear.easeNone = vt.none = vt.Linear.easeIn;
Ur("Elastic", jo("in"), jo("out"), jo());
(function(s, t) {
  var i = 1 / t, e = 2 * i, r = 2.5 * i, n = function(a) {
    return a < i ? s * a * a : a < e ? s * Math.pow(a - 1.5 / t, 2) + 0.75 : a < r ? s * (a -= 2.25 / t) * a + 0.9375 : s * Math.pow(a - 2.625 / t, 2) + 0.984375;
  };
  Ur("Bounce", function(o) {
    return 1 - n(1 - o);
  }, n);
})(7.5625, 2.75);
Ur("Expo", function(s) {
  return Math.pow(2, 10 * (s - 1)) * s + s * s * s * s * s * s * (1 - s);
});
Ur("Circ", function(s) {
  return -($u(1 - s * s) - 1);
});
Ur("Sine", function(s) {
  return s === 1 ? 1 : -ld(s * od) + 1;
});
Ur("Back", Ko("in"), Ko("out"), Ko());
vt.SteppedEase = vt.steps = li.SteppedEase = {
  config: function(t, i) {
    t === void 0 && (t = 1);
    var e = 1 / t, r = t + (i ? 0 : 1), n = i ? 1 : 0, o = 1 - Nt;
    return function(a) {
      return ((r * Ns(0, o, a) | 0) + n) * e;
    };
  }
};
ws.ease = vt["quad.out"];
We("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(s) {
  return El += s + "," + s + "Params,";
});
var _f = function(t, i) {
  this.id = ad++, t._gsap = this, this.target = t, this.harness = i, this.get = i ? i.get : Uu, this.set = i ? i.getSetter : Ol;
}, Es = /* @__PURE__ */ function() {
  function s(i) {
    this.vars = i, this._delay = +i.delay || 0, (this._repeat = i.repeat === 1 / 0 ? -2 : i.repeat || 0) && (this._rDelay = i.repeatDelay || 0, this._yoyo = !!i.yoyo || !!i.yoyoEase), this._ts = 1, Tn(this, +i.duration, 1, 1), this.data = i.data, $t && (this._ctx = $t, $t.data.push(this)), Ts || ii.wake();
  }
  var t = s.prototype;
  return t.delay = function(e) {
    return e || e === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay), this._delay = e, this) : this._delay;
  }, t.duration = function(e) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur;
  }, t.totalDuration = function(e) {
    return arguments.length ? (this._dirty = 0, Tn(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, t.totalTime = function(e, r) {
    if (En(), !arguments.length)
      return this._tTime;
    var n = this._dp;
    if (n && n.smoothChildTiming && this._ts) {
      for ($o(this, e), !n._dp || n.parent || Zu(n, this); n && n.parent; )
        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && Ni(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== e || !this._dur && !r || this._initted && Math.abs(this._zTime) === Nt || !this._initted && this._dur && e || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e), Gu(this, e, r)), this;
  }, t.time = function(e, r) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + hc(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), r) : this._time;
  }, t.totalProgress = function(e, r) {
    return arguments.length ? this.totalTime(this.totalDuration() * e, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, t.progress = function(e, r) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - e : e) + hc(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, t.iteration = function(e, r) {
    var n = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (e - 1) * n, r) : this._repeat ? Sn(this._tTime, n) + 1 : 1;
  }, t.timeScale = function(e, r) {
    if (!arguments.length)
      return this._rts === -Nt ? 0 : this._rts;
    if (this._rts === e)
      return this;
    var n = this.parent && this._ts ? wo(this.parent._time, this) : this._tTime;
    return this._rts = +e || 0, this._ts = this._ps || e === -Nt ? 0 : this._rts, this.totalTime(Ns(-Math.abs(this._delay), this.totalDuration(), n), r !== !1), Bo(this), vd(this);
  }, t.paused = function(e) {
    return arguments.length ? (this._ps !== e && (this._ps = e, e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (En(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== Nt && (this._tTime -= Nt)))), this) : this._ps;
  }, t.startTime = function(e) {
    if (arguments.length) {
      this._start = Yt(e);
      var r = this.parent || this._dp;
      return r && (r._sort || !this.parent) && Ni(r, this, this._start - this._delay), this;
    }
    return this._start;
  }, t.endTime = function(e) {
    return this._start + (Xe(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, t.rawTime = function(e) {
    var r = this.parent || this._dp;
    return r ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? wo(r.rawTime(e), this) : this._tTime : this._tTime;
  }, t.revert = function(e) {
    e === void 0 && (e = _d);
    var r = ye;
    return ye = e, kl(this) && (this.timeline && this.timeline.revert(e), this.totalTime(-0.01, e.suppressEvents)), this.data !== "nested" && e.kill !== !1 && this.kill(), ye = r, this;
  }, t.globalTime = function(e) {
    for (var r = this, n = arguments.length ? e : r.rawTime(); r; )
      n = r._start + n / (Math.abs(r._ts) || 1), r = r._dp;
    return !this.parent && this._sat ? this._sat.globalTime(e) : n;
  }, t.repeat = function(e) {
    return arguments.length ? (this._repeat = e === 1 / 0 ? -2 : e, dc(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(e) {
    if (arguments.length) {
      var r = this._time;
      return this._rDelay = e, dc(this), r ? this.time(r) : this;
    }
    return this._rDelay;
  }, t.yoyo = function(e) {
    return arguments.length ? (this._yoyo = e, this) : this._yoyo;
  }, t.seek = function(e, r) {
    return this.totalTime(_i(this, e), Xe(r));
  }, t.restart = function(e, r) {
    return this.play().totalTime(e ? -this._delay : 0, Xe(r)), this._dur || (this._zTime = -Nt), this;
  }, t.play = function(e, r) {
    return e != null && this.seek(e, r), this.reversed(!1).paused(!1);
  }, t.reverse = function(e, r) {
    return e != null && this.seek(e || this.totalDuration(), r), this.reversed(!0).paused(!1);
  }, t.pause = function(e, r) {
    return e != null && this.seek(e, r), this.paused(!0);
  }, t.resume = function() {
    return this.paused(!1);
  }, t.reversed = function(e) {
    return arguments.length ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -Nt : 0)), this) : this._rts < 0;
  }, t.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -Nt, this;
  }, t.isActive = function() {
    var e = this.parent || this._dp, r = this._start, n;
    return !!(!e || this._ts && this._initted && e.isActive() && (n = e.rawTime(!0)) >= r && n < this.endTime(!0) - Nt);
  }, t.eventCallback = function(e, r, n) {
    var o = this.vars;
    return arguments.length > 1 ? (r ? (o[e] = r, n && (o[e + "Params"] = n), e === "onUpdate" && (this._onUpdate = r)) : delete o[e], this) : o[e];
  }, t.then = function(e) {
    var r = this, n = r._prom;
    return new Promise(function(o) {
      var a = Ht(e) ? e : Ku, c = function() {
        var f = r.then;
        r.then = null, n && n(), Ht(a) && (a = a(r)) && (a.then || a === r) && (r.then = f), o(a), r.then = f;
      };
      r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? c() : r._prom = c;
    });
  }, t.kill = function() {
    Xn(this);
  }, s;
}();
ci(Es.prototype, {
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
  _zTime: -Nt,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var Ye = /* @__PURE__ */ function(s) {
  Bu(t, s);
  function t(e, r) {
    var n;
    return e === void 0 && (e = {}), n = s.call(this, e) || this, n.labels = {}, n.smoothChildTiming = !!e.smoothChildTiming, n.autoRemoveChildren = !!e.autoRemoveChildren, n._sort = Xe(e.sortChildren), Xt && Ni(e.parent || Xt, Yi(n), r), e.reversed && n.reverse(), e.paused && n.paused(!0), e.scrollTrigger && Ju(Yi(n), e.scrollTrigger), n;
  }
  var i = t.prototype;
  return i.to = function(r, n, o) {
    return es(0, arguments, this), this;
  }, i.from = function(r, n, o) {
    return es(1, arguments, this), this;
  }, i.fromTo = function(r, n, o, a) {
    return es(2, arguments, this), this;
  }, i.set = function(r, n, o) {
    return n.duration = 0, n.parent = this, ts(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new te(r, n, _i(this, o), 1), this;
  }, i.call = function(r, n, o) {
    return Ni(this, te.delayedCall(0, r, n), o);
  }, i.staggerTo = function(r, n, o, a, c, u, f) {
    return o.duration = n, o.stagger = o.stagger || a, o.onComplete = u, o.onCompleteParams = f, o.parent = this, new te(r, o, _i(this, c)), this;
  }, i.staggerFrom = function(r, n, o, a, c, u, f) {
    return o.runBackwards = 1, ts(o).immediateRender = Xe(o.immediateRender), this.staggerTo(r, n, o, a, c, u, f);
  }, i.staggerFromTo = function(r, n, o, a, c, u, f, h) {
    return a.startAt = o, ts(a).immediateRender = Xe(a.immediateRender), this.staggerTo(r, n, a, c, u, f, h);
  }, i.render = function(r, n, o) {
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
      if (this._hasPause && !this._forcing && this._lock < 2 && (T = Sd(this, Yt(a), Yt(d)), T && (f -= d - (d = T._start))), this._tTime = f, this._time = d, this._act = !!x, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = r, a = 0), !a && f && u && !n && !m && (si(this, "onStart"), this._tTime !== f))
        return this;
      if (d >= a && r >= 0)
        for (l = this._first; l; ) {
          if (_ = l._next, (l._act || d >= l._start) && l._ts && T !== l) {
            if (l.parent !== this)
              return this.render(r, n, o);
            if (l.render(l._ts > 0 ? (d - l._start) * l._ts : (l._dirty ? l.totalDuration() : l._tDur) + (d - l._start) * l._ts, n, o), d !== this._time || !this._ts && !w) {
              T = 0, _ && (f += this._zTime = -Nt);
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
            if (l.render(l._ts > 0 ? (P - l._start) * l._ts : (l._dirty ? l.totalDuration() : l._tDur) + (P - l._start) * l._ts, n, o || ye && kl(l)), d !== this._time || !this._ts && !w) {
              T = 0, _ && (f += this._zTime = P ? -Nt : Nt);
              break;
            }
          }
          l = _;
        }
      }
      if (T && !n && (this.pause(), T.render(d >= a ? 0 : -Nt)._zTime = d >= a ? 1 : -1, this._ts))
        return this._start = b, Bo(this), this.render(r, n, o);
      this._onUpdate && !n && si(this, "onUpdate", !0), (f === c && this._tTime >= this.totalDuration() || !f && a) && (b === this._start || Math.abs(x) !== Math.abs(this._ts)) && (this._lock || ((r || !u) && (f === c && this._ts > 0 || !f && this._ts < 0) && gr(this, 1), !n && !(r < 0 && !a) && (f || a || !c) && (si(this, f === c && r >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(f < c && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, i.add = function(r, n) {
    var o = this;
    if (Ki(n) || (n = _i(this, n, r)), !(r instanceof Es)) {
      if (ke(r))
        return r.forEach(function(a) {
          return o.add(a, n);
        }), this;
      if (fe(r))
        return this.addLabel(r, n);
      if (Ht(r))
        r = te.delayedCall(0, r);
      else
        return this;
    }
    return this !== r ? Ni(this, r, n) : this;
  }, i.getChildren = function(r, n, o, a) {
    r === void 0 && (r = !0), n === void 0 && (n = !0), o === void 0 && (o = !0), a === void 0 && (a = -yi);
    for (var c = [], u = this._first; u; )
      u._start >= a && (u instanceof te ? n && c.push(u) : (o && c.push(u), r && c.push.apply(c, u.getChildren(!0, n, o)))), u = u._next;
    return c;
  }, i.getById = function(r) {
    for (var n = this.getChildren(1, 1, 1), o = n.length; o--; )
      if (n[o].vars.id === r)
        return n[o];
  }, i.remove = function(r) {
    return fe(r) ? this.removeLabel(r) : Ht(r) ? this.killTweensOf(r) : (r.parent === this && Io(this, r), r === this._recent && (this._recent = this._last), Rr(this));
  }, i.totalTime = function(r, n) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Yt(ii.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))), s.prototype.totalTime.call(this, r, n), this._forcing = 0, this) : this._tTime;
  }, i.addLabel = function(r, n) {
    return this.labels[r] = _i(this, n), this;
  }, i.removeLabel = function(r) {
    return delete this.labels[r], this;
  }, i.addPause = function(r, n, o) {
    var a = te.delayedCall(0, n || bs, o);
    return a.data = "isPause", this._hasPause = 1, Ni(this, a, _i(this, r));
  }, i.removePause = function(r) {
    var n = this._first;
    for (r = _i(this, r); n; )
      n._start === r && n.data === "isPause" && gr(n), n = n._next;
  }, i.killTweensOf = function(r, n, o) {
    for (var a = this.getTweensOf(r, o), c = a.length; c--; )
      or !== a[c] && a[c].kill(r, n);
    return this;
  }, i.getTweensOf = function(r, n) {
    for (var o = [], a = vi(r), c = this._first, u = Ki(n), f; c; )
      c instanceof te ? gd(c._targets, a) && (u ? (!or || c._initted && c._ts) && c.globalTime(0) <= n && c.globalTime(c.totalDuration()) > n : !n || c.isActive()) && o.push(c) : (f = c.getTweensOf(a, n)).length && o.push.apply(o, f), c = c._next;
    return o;
  }, i.tweenTo = function(r, n) {
    n = n || {};
    var o = this, a = _i(o, r), c = n, u = c.startAt, f = c.onStart, h = c.onStartParams, d = c.immediateRender, l, _ = te.to(o, ci({
      ease: n.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: a,
      overwrite: "auto",
      duration: n.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale()) || Nt,
      onStart: function() {
        if (o.pause(), !l) {
          var g = n.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale());
          _._dur !== g && Tn(_, g, 0, 1).render(_._time, !0, !0), l = 1;
        }
        f && f.apply(_, h || []);
      }
    }, n));
    return d ? _.render(0) : _;
  }, i.tweenFromTo = function(r, n, o) {
    return this.tweenTo(n, ci({
      startAt: {
        time: _i(this, r)
      }
    }, o));
  }, i.recent = function() {
    return this._recent;
  }, i.nextLabel = function(r) {
    return r === void 0 && (r = this._time), pc(this, _i(this, r));
  }, i.previousLabel = function(r) {
    return r === void 0 && (r = this._time), pc(this, _i(this, r), 1);
  }, i.currentLabel = function(r) {
    return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + Nt);
  }, i.shiftChildren = function(r, n, o) {
    o === void 0 && (o = 0);
    var a = this._first, c = this.labels, u;
    for (r = Yt(r); a; )
      a._start >= o && (a._start += r, a._end += r), a = a._next;
    if (n)
      for (u in c)
        c[u] >= o && (c[u] += r);
    return Rr(this);
  }, i.invalidate = function(r) {
    var n = this._first;
    for (this._lock = 0; n; )
      n.invalidate(r), n = n._next;
    return s.prototype.invalidate.call(this, r);
  }, i.clear = function(r) {
    r === void 0 && (r = !0);
    for (var n = this._first, o; n; )
      o = n._next, this.remove(n), n = o;
    return this._dp && (this._time = this._tTime = this._pTime = 0), r && (this.labels = {}), Rr(this);
  }, i.totalDuration = function(r) {
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
    if (Xt._ts && (Gu(Xt, wo(r, Xt)), qu = ii.frame), ii.frame >= uc) {
      uc += ai.autoSleep || 120;
      var n = Xt._first;
      if ((!n || !n._ts) && ai.autoSleep && ii._listeners.length < 2) {
        for (; n && !n._ts; )
          n = n._next;
        n || ii.sleep();
      }
    }
  }, t;
}(Es);
ci(Ye.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var zd = function(t, i, e, r, n, o, a) {
  var c = new Ve(this._pt, t, i, 0, 1, xf, null, n), u = 0, f = 0, h, d, l, _, p, g, w, T;
  for (c.b = e, c.e = r, e += "", r += "", (w = ~r.indexOf("random(")) && (r = Ss(r)), o && (T = [e, r], o(T, t, i), e = T[0], r = T[1]), d = e.match(qo) || []; h = qo.exec(r); )
    _ = h[0], p = r.substring(u, h.index), l ? l = (l + 1) % 5 : p.substr(-5) === "rgba(" && (l = 1), _ !== d[f++] && (g = parseFloat(d[f - 1]) || 0, c._pt = {
      _next: c._pt,
      p: p || f === 1 ? p : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: g,
      c: _.charAt(1) === "=" ? fn(g, _) - g : parseFloat(_) - g,
      m: l && l < 4 ? Math.round : 0
    }, u = qo.lastIndex);
  return c.c = u < r.length ? r.substring(u, r.length) : "", c.fp = a, (Xu.test(r) || w) && (c.e = 0), this._pt = c, c;
}, Pl = function(t, i, e, r, n, o, a, c, u, f) {
  Ht(r) && (r = r(n || 0, t, o));
  var h = t[i], d = e !== "get" ? e : Ht(h) ? u ? t[i.indexOf("set") || !Ht(t["get" + i.substr(3)]) ? i : "get" + i.substr(3)](u) : t[i]() : h, l = Ht(h) ? u ? Hd : vf : Dl, _;
  if (fe(r) && (~r.indexOf("random(") && (r = Ss(r)), r.charAt(1) === "=" && (_ = fn(d, r) + (Ee(d) || 0), (_ || _ === 0) && (r = _))), !f || d !== r || Na)
    return !isNaN(d * r) && r !== "" ? (_ = new Ve(this._pt, t, i, +d || 0, r - (d || 0), typeof h == "boolean" ? Ud : wf, 0, l), u && (_.fp = u), a && _.modifier(a, this, t), this._pt = _) : (!h && !(i in t) && Sl(i, r), zd.call(this, t, i, d, r, l, c || ai.stringFilter, u));
}, Yd = function(t, i, e, r, n) {
  if (Ht(t) && (t = is(t, n, i, e, r)), !$i(t) || t.style && t.nodeType || ke(t) || zu(t))
    return fe(t) ? is(t, n, i, e, r) : t;
  var o = {}, a;
  for (a in t)
    o[a] = is(t[a], n, i, e, r);
  return o;
}, gf = function(t, i, e, r, n, o) {
  var a, c, u, f;
  if (ti[t] && (a = new ti[t]()).init(n, a.rawVars ? i[t] : Yd(i[t], r, n, o, e), e, r, o) !== !1 && (e._pt = c = new Ve(e._pt, n, t, 0, 1, a.render, a, 0, a.priority), e !== an))
    for (u = e._ptLookup[e._targets.indexOf(n)], f = a._props.length; f--; )
      u[a._props[f]] = c;
  return a;
}, or, Na, Ml = function s(t, i, e) {
  var r = t.vars, n = r.ease, o = r.startAt, a = r.immediateRender, c = r.lazy, u = r.onUpdate, f = r.runBackwards, h = r.yoyoEase, d = r.keyframes, l = r.autoRevert, _ = t._dur, p = t._startAt, g = t._targets, w = t.parent, T = w && w.data === "nested" ? w.vars.targets : g, x = t._overwrite === "auto" && !vl, b = t.timeline, m = r.easeReverse || h, M, E, C, D, P, B, A, R, X, $, V, Y, nt;
  if (b && (!d || !n) && (n = "none"), t._ease = Nr(n, ws.ease), t._rEase = m && (Nr(m) || t._ease), t._from = !b && !!r.runBackwards, t._from && (t.ratio = 1), !b || d && !r.stagger) {
    if (R = g[0] ? Ar(g[0]).harness : 0, Y = R && r[R.prop], M = vo(r, Tl), p && (p._zTime < 0 && p.progress(1), i < 0 && f && a && !l ? p.render(-1, !0) : p.revert(f && _ ? ro : pd), p._lazy = 0), o) {
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
      }, o))), t._startAt._dp = 0, t._startAt._sat = t, i < 0 && (ye || !a && !l) && t._startAt.revert(ro), a && _ && i <= 0 && e <= 0) {
        i && (t._zTime = i);
        return;
      }
    } else if (f && _ && !p) {
      if (i && (a = !1), C = ci({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: a && !p && Xe(c),
        immediateRender: a,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: w
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, M), Y && (C[R.prop] = Y), gr(t._startAt = te.set(g, C)), t._startAt._dp = 0, t._startAt._sat = t, i < 0 && (ye ? t._startAt.revert(ro) : t._startAt.render(-1, !0)), t._zTime = i, !a)
        s(t._startAt, Nt, Nt);
      else if (!i)
        return;
    }
    for (t._pt = t._ptCache = 0, c = _ && Xe(c) || c && !_, E = 0; E < g.length; E++) {
      if (P = g[E], A = P._gsap || Cl(g)[E]._gsap, t._ptLookup[E] = $ = {}, Ma[A.id] && hr.length && yo(), V = T === g ? E : T.indexOf(P), R && (X = new R()).init(P, Y || M, t, V, T) !== !1 && (t._pt = D = new Ve(t._pt, P, X.name, 0, 1, X.render, X, 0, X.priority), X._props.forEach(function(st) {
        $[st] = D;
      }), X.priority && (B = 1)), !R || Y)
        for (C in M)
          ti[C] && (X = gf(C, M, t, V, P, T)) ? X.priority && (B = 1) : $[C] = D = Pl.call(t, P, C, "get", M[C], V, T, 0, r.stringFilter);
      t._op && t._op[E] && t.kill(P, t._op[E]), x && t._pt && (or = t, Xt.killTweensOf(P, $, t.globalTime(i)), nt = !t.parent, or = 0), t._pt && c && (Ma[A.id] = 1);
    }
    B && bf(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = u, t._initted = (!t._op || t._pt) && !nt, d && i <= 0 && b.render(yi, !0, !0);
}, Xd = function(t, i, e, r, n, o, a, c) {
  var u = (t._pt && t._ptCache || (t._ptCache = {}))[i], f, h, d, l;
  if (!u)
    for (u = t._ptCache[i] = [], d = t._ptLookup, l = t._targets.length; l--; ) {
      if (f = d[l][i], f && f.d && f.d._pt)
        for (f = f.d._pt; f && f.p !== i && f.fp !== i; )
          f = f._next;
      if (!f)
        return Na = 1, t.vars[i] = "+=0", Ml(t, a), Na = 0, c ? xs(i + " not eligible for reset. Try splitting into individual properties") : 1;
      u.push(f);
    }
  for (l = u.length; l--; )
    h = u[l], f = h._pt || h, f.s = (r || r === 0) && !n ? r : f.s + (r || 0) + o * f.c, f.c = e - f.s, h.e && (h.e = Gt(e) + Ee(h.e)), h.b && (h.b = f.s + Ee(h.b));
}, Wd = function(t, i) {
  var e = t[0] ? Ar(t[0]).harness : 0, r = e && e.aliases, n, o, a, c;
  if (!r)
    return i;
  n = bn({}, i);
  for (o in r)
    if (o in n)
      for (c = r[o].split(","), a = c.length; a--; )
        n[c[a]] = n[o];
  return n;
}, Vd = function(t, i, e, r) {
  var n = i.ease || r || "power1.inOut", o, a;
  if (ke(i))
    a = e[t] || (e[t] = []), i.forEach(function(c, u) {
      return a.push({
        t: u / (i.length - 1) * 100,
        v: c,
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
}, is = function(t, i, e, r, n) {
  return Ht(t) ? t.call(i, e, r, n) : fe(t) && ~t.indexOf("random(") ? Ss(t) : t;
}, mf = El + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert", yf = {};
We(mf + ",id,stagger,delay,duration,paused,scrollTrigger", function(s) {
  return yf[s] = 1;
});
var te = /* @__PURE__ */ function(s) {
  Bu(t, s);
  function t(e, r, n, o) {
    var a;
    typeof r == "number" && (n.duration = r, r = n, n = null), a = s.call(this, o ? r : ts(r)) || this;
    var c = a.vars, u = c.duration, f = c.delay, h = c.immediateRender, d = c.stagger, l = c.overwrite, _ = c.keyframes, p = c.defaults, g = c.scrollTrigger, w = r.parent || Xt, T = (ke(e) || zu(e) ? Ki(e[0]) : "length" in r) ? [e] : vi(e), x, b, m, M, E, C, D, P;
    if (a._targets = T.length ? Cl(T) : xs("GSAP target " + e + " not found. https://gsap.com", !ai.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = l, _ || d || zs(u) || zs(f)) {
      r = a.vars;
      var B = r.easeReverse || r.yoyoEase;
      if (x = a.timeline = new Ye({
        data: "nested",
        defaults: p || {},
        targets: w && w.data === "nested" ? w.vars.targets : T
      }), x.kill(), x.parent = x._dp = Yi(a), x._start = 0, d || zs(u) || zs(f)) {
        if (M = T.length, D = d && nf(d), $i(d))
          for (E in d)
            ~mf.indexOf(E) && (P || (P = {}), P[E] = d[E]);
        for (b = 0; b < M; b++)
          m = vo(r, yf), m.stagger = 0, B && (m.easeReverse = B), P && bn(m, P), C = T[b], m.duration = +is(u, Yi(a), b, C, T), m.delay = (+is(f, Yi(a), b, C, T) || 0) - a._delay, !d && M === 1 && m.delay && (a._delay = f = m.delay, a._start += f, m.delay = 0), x.to(C, m, D ? D(b, C, T) : 0), x._ease = vt.none;
        x.duration() ? u = f = 0 : a.timeline = 0;
      } else if (_) {
        ts(ci(x.vars.defaults, {
          ease: "none"
        })), x._ease = Nr(_.ease || r.ease || "none");
        var A = 0, R, X, $;
        if (ke(_))
          _.forEach(function(V) {
            return x.to(T, V, ">");
          }), x.duration();
        else {
          m = {};
          for (E in _)
            E === "ease" || E === "easeEach" || Vd(E, _[E], m, _.easeEach);
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
    return l === !0 && !vl && (or = Yi(a), Xt.killTweensOf(T), or = 0), Ni(w, Yi(a), n), r.reversed && a.reverse(), r.paused && a.paused(!0), (h || !u && !_ && a._start === Yt(w._time) && Xe(h) && wd(Yi(a)) && w.data !== "nested") && (a._tTime = -Nt, a.render(Math.max(0, -f) || 0)), g && Ju(Yi(a), g), a;
  }
  var i = t.prototype;
  return i.render = function(r, n, o) {
    var a = this._time, c = this._tDur, u = this._dur, f = r < 0, h = r > c - Nt && !f ? c : r < Nt ? 0 : r, d, l, _, p, g, w, T, x;
    if (!u)
      bd(this, r, n, o);
    else if (h !== this._tTime || !r || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== f || this._lazy) {
      if (d = h, x = this.timeline, this._repeat) {
        if (p = u + this._rDelay, this._repeat < -1 && f)
          return this.totalTime(p * 100 + r, n, o);
        if (d = Yt(h % p), h === c ? (_ = this._repeat, d = u) : (g = Yt(h / p), _ = ~~g, _ && _ === g ? (d = u, _--) : d > u && (d = u)), w = this._yoyo && _ & 1, w && (d = u - d), g = Sn(this._tTime, p), d === a && !o && this._initted && _ === g)
          return this._tTime = h, this;
        _ !== g && this.vars.repeatRefresh && !w && !this._lock && d !== p && this._initted && (this._lock = o = 1, this.render(Yt(p * _), !0).invalidate()._lock = 0);
      }
      if (!this._initted) {
        if (tf(this, f ? r : d, o, n, h))
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
      x && x.render(r < 0 ? r : x._dur * x._ease(d / this._dur), n, o) || this._startAt && (this._zTime = r), this._onUpdate && !n && (f && Da(this, r, n, o), si(this, "onUpdate")), this._repeat && _ !== g && this.vars.onRepeat && !n && this.parent && si(this, "onRepeat"), (h === this._tDur || !h) && this._tTime === h && (f && !this._onUpdate && Da(this, r, !0, !0), (r || !u) && (h === this._tDur && this._ts > 0 || !h && this._ts < 0) && gr(this, 1), !n && !(f && !a) && (h || a || w) && (si(this, h === c ? "onComplete" : "onReverseComplete", !0), this._prom && !(h < c && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, i.targets = function() {
    return this._targets;
  }, i.invalidate = function(r) {
    return (!r || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(r), s.prototype.invalidate.call(this, r);
  }, i.resetTo = function(r, n, o, a, c) {
    Ts || ii.wake(), this._ts || this.play();
    var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts), f;
    return this._initted || Ml(this, u), f = this._ease(u / this._dur), Xd(this, r, n, o, a, f, u, c) ? this.resetTo(r, n, o, a, 1) : ($o(this, 0), this.parent || Qu(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, i.kill = function(r, n) {
    if (n === void 0 && (n = "all"), !r && (!n || n === "all"))
      return this._lazy = this._pt = 0, this.parent ? Xn(this) : this.scrollTrigger && this.scrollTrigger.kill(!!ye), this;
    if (this.timeline) {
      var o = this.timeline.totalDuration();
      return this.timeline.killTweensOf(r, n, or && or.vars.overwrite !== !0)._first || Xn(this), this.parent && o !== this.timeline.totalDuration() && Tn(this, this._dur * this.timeline._tDur / o, 0, 1), this;
    }
    var a = this._targets, c = r ? vi(r) : a, u = this._ptLookup, f = this._pt, h, d, l, _, p, g, w;
    if ((!n || n === "all") && yd(a, c))
      return n === "all" && (this._pt = 0), Xn(this);
    for (h = this._op = this._op || [], n !== "all" && (fe(n) && (p = {}, We(n, function(T) {
      return p[T] = 1;
    }), n = p), n = Wd(a, n)), w = a.length; w--; )
      if (~c.indexOf(a[w])) {
        d = u[w], n === "all" ? (h[w] = n, _ = d, l = {}) : (l = h[w] = h[w] || {}, _ = n);
        for (p in _)
          g = d && d[p], g && ((!("kill" in g.d) || g.d.kill(p) === !0) && Io(this, g, "_pt"), delete d[p]), l !== "all" && (l[p] = 1);
      }
    return this._initted && !this._pt && f && Xn(this), this;
  }, t.to = function(r, n) {
    return new t(r, n, arguments[2]);
  }, t.from = function(r, n) {
    return es(1, arguments);
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
    return es(2, arguments);
  }, t.set = function(r, n) {
    return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(r, n);
  }, t.killTweensOf = function(r, n, o) {
    return Xt.killTweensOf(r, n, o);
  }, t;
}(Es);
ci(te.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
We("staggerTo,staggerFrom,staggerFromTo", function(s) {
  te[s] = function() {
    var t = new Ye(), i = La.call(arguments, 0);
    return i.splice(s === "staggerFromTo" ? 5 : 4, 0, 0), t[s].apply(t, i);
  };
});
var Dl = function(t, i, e) {
  return t[i] = e;
}, vf = function(t, i, e) {
  return t[i](e);
}, Hd = function(t, i, e, r) {
  return t[i](r.fp, e);
}, qd = function(t, i, e) {
  return t.setAttribute(i, e);
}, Ol = function(t, i) {
  return Ht(t[i]) ? vf : wl(t[i]) && t.setAttribute ? qd : Dl;
}, wf = function(t, i) {
  return i.set(i.t, i.p, Math.round((i.s + i.c * t) * 1e6) / 1e6, i);
}, Ud = function(t, i) {
  return i.set(i.t, i.p, !!(i.s + i.c * t), i);
}, xf = function(t, i) {
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
}, Ll = function(t, i) {
  for (var e = i._pt; e; )
    e.r(t, e.d), e = e._next;
}, Gd = function(t, i, e, r) {
  for (var n = this._pt, o; n; )
    o = n._next, n.p === r && n.modifier(t, i, e), n = o;
}, jd = function(t) {
  for (var i = this._pt, e, r; i; )
    r = i._next, i.p === t && !i.op || i.op === t ? Io(this, i, "_pt") : i.dep || (e = 1), i = r;
  return !e;
}, Kd = function(t, i, e, r) {
  r.mSet(t, i, r.m.call(r.tween, e, r.mt), r);
}, bf = function(t) {
  for (var i = t._pt, e, r, n, o; i; ) {
    for (e = i._next, r = n; r && r.pr > i.pr; )
      r = r._next;
    (i._prev = r ? r._prev : o) ? i._prev._next = i : n = i, (i._next = r) ? r._prev = i : o = i, i = e;
  }
  t._pt = n;
}, Ve = /* @__PURE__ */ function() {
  function s(i, e, r, n, o, a, c, u, f) {
    this.t = e, this.s = n, this.c = o, this.p = r, this.r = a || wf, this.d = c || this, this.set = u || Dl, this.pr = f || 0, this._next = i, i && (i._prev = this);
  }
  var t = s.prototype;
  return t.modifier = function(e, r, n) {
    this.mSet = this.mSet || this.set, this.set = Kd, this.m = e, this.mt = n, this.tween = r;
  }, s;
}();
We(El + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse", function(s) {
  return Tl[s] = 1;
});
li.TweenMax = li.TweenLite = te;
li.TimelineLite = li.TimelineMax = Ye;
Xt = new Ye({
  sortChildren: !1,
  defaults: ws,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
ai.stringFilter = df;
var Fr = [], so = {}, Qd = [], gc = 0, Zd = 0, Qo = function(t) {
  return (so[t] || Qd).map(function(i) {
    return i();
  });
}, Fa = function() {
  var t = Date.now(), i = [];
  t - gc > 2 && (Qo("matchMediaInit"), Fr.forEach(function(e) {
    var r = e.queries, n = e.conditions, o, a, c, u;
    for (a in r)
      o = Oi.matchMedia(r[a]).matches, o && (c = 1), o !== n[a] && (n[a] = o, u = 1);
    u && (e.revert(), c && i.push(e));
  }), Qo("matchMediaRevert"), i.forEach(function(e) {
    return e.onMatch(e, function(r) {
      return e.add(null, r);
    });
  }), gc = t, Qo("matchMedia"));
}, Sf = /* @__PURE__ */ function() {
  function s(i, e) {
    this.selector = e && Aa(e), this.data = [], this._r = [], this.isReverted = !1, this.id = Zd++, i && this.add(i);
  }
  var t = s.prototype;
  return t.add = function(e, r, n) {
    Ht(e) && (n = r, r = e, e = Ht);
    var o = this, a = function() {
      var u = $t, f = o.selector, h;
      return u && u !== o && u.data.push(o), n && (o.selector = Aa(n)), $t = o, h = r.apply(o, arguments), Ht(h) && o._r.push(h), $t = u, o.selector = f, o.isReverted = !1, h;
    };
    return o.last = a, e === Ht ? a(o, function(c) {
      return o.add(null, c);
    }) : e ? o[e] = a : a;
  }, t.ignore = function(e) {
    var r = $t;
    $t = null, e(this), $t = r;
  }, t.getTweens = function() {
    var e = [];
    return this.data.forEach(function(r) {
      return r instanceof s ? e.push.apply(e, r.getTweens()) : r instanceof te && !(r.parent && r.parent.data === "nested") && e.push(r);
    }), e;
  }, t.clear = function() {
    this._r.length = this.data.length = 0;
  }, t.kill = function(e, r) {
    var n = this;
    if (e ? function() {
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
        return f.t.revert(e);
      }), c = n.data.length; c--; )
        u = n.data[c], u instanceof Ye ? u.data !== "nested" && (u.scrollTrigger && u.scrollTrigger.revert(), u.kill()) : !(u instanceof te) && u.revert && u.revert(e);
      n._r.forEach(function(f) {
        return f(e, n);
      }), n.isReverted = !0;
    }() : this.data.forEach(function(a) {
      return a.kill && a.kill();
    }), this.clear(), r)
      for (var o = Fr.length; o--; )
        Fr[o].id === this.id && Fr.splice(o, 1);
  }, t.revert = function(e) {
    this.kill(e || {});
  }, s;
}(), Jd = /* @__PURE__ */ function() {
  function s(i) {
    this.contexts = [], this.scope = i, $t && $t.data.push(this);
  }
  var t = s.prototype;
  return t.add = function(e, r, n) {
    $i(e) || (e = {
      matches: e
    });
    var o = new Sf(0, n || this.scope), a = o.conditions = {}, c, u, f;
    $t && !o.selector && (o.selector = $t.selector), this.contexts.push(o), r = o.add("onMatch", r), o.queries = e;
    for (u in e)
      u === "all" ? f = 1 : (c = Oi.matchMedia(e[u]), c && (Fr.indexOf(o) < 0 && Fr.push(o), (a[u] = c.matches) && (f = 1), c.addListener ? c.addListener(Fa) : c.addEventListener("change", Fa)));
    return f && r(o, function(h) {
      return o.add(null, h);
    }), this;
  }, t.revert = function(e) {
    this.kill(e || {});
  }, t.kill = function(e) {
    this.contexts.forEach(function(r) {
      return r.kill(e, !0);
    });
  }, s;
}(), xo = {
  registerPlugin: function() {
    for (var t = arguments.length, i = new Array(t), e = 0; e < t; e++)
      i[e] = arguments[e];
    i.forEach(function(r) {
      return uf(r);
    });
  },
  timeline: function(t) {
    return new Ye(t);
  },
  getTweensOf: function(t, i) {
    return Xt.getTweensOf(t, i);
  },
  getProperty: function(t, i, e, r) {
    fe(t) && (t = vi(t)[0]);
    var n = Ar(t || {}).get, o = e ? Ku : ju;
    return e === "native" && (e = ""), t && (i ? o((ti[i] && ti[i].get || n)(t, i, e, r)) : function(a, c, u) {
      return o((ti[a] && ti[a].get || n)(t, a, c, u));
    });
  },
  quickSetter: function(t, i, e) {
    if (t = vi(t), t.length > 1) {
      var r = t.map(function(f) {
        return Ue.quickSetter(f, i, e);
      }), n = r.length;
      return function(f) {
        for (var h = n; h--; )
          r[h](f);
      };
    }
    t = t[0] || {};
    var o = ti[i], a = Ar(t), c = a.harness && (a.harness.aliases || {})[i] || i, u = o ? function(f) {
      var h = new o();
      an._pt = 0, h.init(t, e ? f + e : f, an, 0, [t]), h.render(1, h), an._pt && Ll(1, an);
    } : a.set(t, c);
    return o ? u : function(f) {
      return u(t, c, e ? f + e : f, a, 1);
    };
  },
  quickTo: function(t, i, e) {
    var r, n = Ue.to(t, ci((r = {}, r[i] = "+=0.1", r.paused = !0, r.stagger = 0, r), e || {})), o = function(c, u, f) {
      return n.resetTo(i, c, u, f);
    };
    return o.tween = n, o;
  },
  isTweening: function(t) {
    return Xt.getTweensOf(t, !0).length > 0;
  },
  defaults: function(t) {
    return t && t.ease && (t.ease = Nr(t.ease, ws.ease)), fc(ws, t || {});
  },
  config: function(t) {
    return fc(ai, t || {});
  },
  registerEffect: function(t) {
    var i = t.name, e = t.effect, r = t.plugins, n = t.defaults, o = t.extendTimeline;
    (r || "").split(",").forEach(function(a) {
      return a && !ti[a] && !li[a] && xs(i + " effect requires " + a + " plugin.");
    }), Uo[i] = function(a, c, u) {
      return e(vi(a), ci(c || {}, n), u);
    }, o && (Ye.prototype[i] = function(a, c, u) {
      return this.add(Uo[i](a, $i(c) ? c : (u = c) && {}, this), u);
    });
  },
  registerEase: function(t, i) {
    vt[t] = Nr(i);
  },
  parseEase: function(t, i) {
    return arguments.length ? Nr(t, i) : vt;
  },
  getById: function(t) {
    return Xt.getById(t);
  },
  exportRoot: function(t, i) {
    t === void 0 && (t = {});
    var e = new Ye(t), r, n;
    for (e.smoothChildTiming = Xe(t.smoothChildTiming), Xt.remove(e), e._dp = 0, e._time = e._tTime = Xt._time, r = Xt._first; r; )
      n = r._next, (i || !(!r._dur && r instanceof te && r.vars.onComplete === r._targets[0])) && Ni(e, r, r._start - r._delay), r = n;
    return Ni(Xt, e, 0), e;
  },
  context: function(t, i) {
    return t ? new Sf(t, i) : $t;
  },
  matchMedia: function(t) {
    return new Jd(t);
  },
  matchMediaRefresh: function() {
    return Fr.forEach(function(t) {
      var i = t.conditions, e, r;
      for (r in i)
        i[r] && (i[r] = !1, e = 1);
      e && t.revert();
    }) || Fa();
  },
  addEventListener: function(t, i) {
    var e = so[t] || (so[t] = []);
    ~e.indexOf(i) || e.push(i);
  },
  removeEventListener: function(t, i) {
    var e = so[t], r = e && e.indexOf(i);
    r >= 0 && e.splice(r, 1);
  },
  utils: {
    wrap: Dd,
    wrapYoyo: Od,
    distribute: nf,
    random: of,
    snap: sf,
    normalize: Md,
    getUnit: Ee,
    clamp: Ed,
    splitColor: ff,
    toArray: vi,
    selector: Aa,
    mapRange: lf,
    pipe: kd,
    unitize: Pd,
    interpolate: Ld,
    shuffle: rf
  },
  install: Vu,
  effects: Uo,
  ticker: ii,
  updateRoot: Ye.updateRoot,
  plugins: ti,
  globalTimeline: Xt,
  core: {
    PropTween: Ve,
    globals: Hu,
    Tween: te,
    Timeline: Ye,
    Animation: Es,
    getCache: Ar,
    _removeLinkedListItem: Io,
    reverting: function() {
      return ye;
    },
    context: function(t) {
      return t && $t && ($t.data.push(t), t._ctx = $t), $t;
    },
    suppressOverwrites: function(t) {
      return vl = t;
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
var tp = function(t, i) {
  for (var e = t._pt; e && e.p !== i && e.op !== i && e.fp !== i; )
    e = e._next;
  return e;
}, ep = function(t, i) {
  var e = t._targets, r, n, o;
  for (r in i)
    for (n = e.length; n--; )
      o = t._ptLookup[n][r], o && (o = o.d) && (o._pt && (o = tp(o, r)), o && o.modifier && o.modifier(i[r], t, e[n], r));
}, Zo = function(t, i) {
  return {
    name: t,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(r, n, o) {
      o._onInit = function(a) {
        var c, u;
        if (fe(n) && (c = {}, We(n, function(f) {
          return c[f] = 1;
        }), n = c), i) {
          c = {};
          for (u in n)
            c[u] = i(n[u]);
          n = c;
        }
        ep(a, n);
      };
    }
  };
}, Ue = xo.registerPlugin({
  name: "attr",
  init: function(t, i, e, r, n) {
    var o, a, c;
    this.tween = e;
    for (o in i)
      c = t.getAttribute(o) || "", a = this.add(t, "setAttribute", (c || 0) + "", i[o], r, n, 0, 0, o), a.op = o, a.b = c, this._props.push(o);
  },
  render: function(t, i) {
    for (var e = i._pt; e; )
      ye ? e.set(e.t, e.p, e.b, e) : e.r(t, e.d), e = e._next;
  }
}, {
  name: "endArray",
  headless: 1,
  init: function(t, i) {
    for (var e = i.length; e--; )
      this.add(t, e, t[e] || 0, i[e], 0, 0, 0, 0, 0, 1);
  }
}, Zo("roundProps", Ra), Zo("modifiers"), Zo("snap", sf)) || xo;
te.version = Ye.version = Ue.version = "3.15.0";
Wu = 1;
xl() && En();
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
var mc, ar, hn, Al, Or, yc, Rl, ip = function() {
  return typeof window < "u";
}, Qi = {}, kr = 180 / Math.PI, dn = Math.PI / 180, Gr = Math.atan2, vc = 1e8, Nl = /([A-Z])/g, rp = /(left|right|width|margin|padding|x)/i, np = /[\s,\(]\S/, Fi = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, Ia = function(t, i) {
  return i.set(i.t, i.p, Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u, i);
}, sp = function(t, i) {
  return i.set(i.t, i.p, t === 1 ? i.e : Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u, i);
}, op = function(t, i) {
  return i.set(i.t, i.p, t ? Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u : i.b, i);
}, ap = function(t, i) {
  return i.set(i.t, i.p, t === 1 ? i.e : t ? Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u : i.b, i);
}, lp = function(t, i) {
  var e = i.s + i.c * t;
  i.set(i.t, i.p, ~~(e + (e < 0 ? -0.5 : 0.5)) + i.u, i);
}, Tf = function(t, i) {
  return i.set(i.t, i.p, t ? i.e : i.b, i);
}, Ef = function(t, i) {
  return i.set(i.t, i.p, t !== 1 ? i.b : i.e, i);
}, cp = function(t, i, e) {
  return t.style[i] = e;
}, up = function(t, i, e) {
  return t.style.setProperty(i, e);
}, fp = function(t, i, e) {
  return t._gsap[i] = e;
}, hp = function(t, i, e) {
  return t._gsap.scaleX = t._gsap.scaleY = e;
}, dp = function(t, i, e, r, n) {
  var o = t._gsap;
  o.scaleX = o.scaleY = e, o.renderTransform(n, o);
}, pp = function(t, i, e, r, n) {
  var o = t._gsap;
  o[i] = e, o.renderTransform(n, o);
}, Wt = "transform", He = Wt + "Origin", _p = function s(t, i) {
  var e = this, r = this.target, n = r.style, o = r._gsap;
  if (t in Qi && n) {
    if (this.tfm = this.tfm || {}, t !== "transform")
      t = Fi[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(a) {
        return e.tfm[a] = Xi(r, a);
      }) : this.tfm[t] = o.x ? o[t] : Xi(r, t), t === He && (this.tfm.zOrigin = o.zOrigin);
    else
      return Fi.transform.split(",").forEach(function(a) {
        return s.call(e, a, i);
      });
    if (this.props.indexOf(Wt) >= 0)
      return;
    o.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(He, i, "")), t = Wt;
  }
  (n || i) && this.props.push(t, i, n[t]);
}, Cf = function(t) {
  t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
}, gp = function() {
  var t = this.props, i = this.target, e = i.style, r = i._gsap, n, o;
  for (n = 0; n < t.length; n += 3)
    t[n + 1] ? t[n + 1] === 2 ? i[t[n]](t[n + 2]) : i[t[n]] = t[n + 2] : t[n + 2] ? e[t[n]] = t[n + 2] : e.removeProperty(t[n].substr(0, 2) === "--" ? t[n] : t[n].replace(Nl, "-$1").toLowerCase());
  if (this.tfm) {
    for (o in this.tfm)
      r[o] = this.tfm[o];
    r.svg && (r.renderTransform(), i.setAttribute("data-svg-origin", this.svgo || "")), n = Rl(), (!n || !n.isStart) && !e[Wt] && (Cf(e), r.zOrigin && e[He] && (e[He] += " " + r.zOrigin + "px", r.zOrigin = 0, r.renderTransform()), r.uncache = 1);
  }
}, kf = function(t, i) {
  var e = {
    target: t,
    props: [],
    revert: gp,
    save: _p
  };
  return t._gsap || Ue.core.getCache(t), i && t.style && t.nodeType && i.split(",").forEach(function(r) {
    return e.save(r);
  }), e;
}, Pf, Ba = function(t, i) {
  var e = ar.createElementNS ? ar.createElementNS((i || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : ar.createElement(t);
  return e && e.style ? e : ar.createElement(t);
}, oi = function s(t, i, e) {
  var r = getComputedStyle(t);
  return r[i] || r.getPropertyValue(i.replace(Nl, "-$1").toLowerCase()) || r.getPropertyValue(i) || !e && s(t, Cn(i) || i, 1) || "";
}, wc = "O,Moz,ms,Ms,Webkit".split(","), Cn = function(t, i, e) {
  var r = i || Or, n = r.style, o = 5;
  if (t in n && !e)
    return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); o-- && !(wc[o] + t in n); )
    ;
  return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? wc[o] : "") + t;
}, $a = function() {
  ip() && window.document && (mc = window, ar = mc.document, hn = ar.documentElement, Or = Ba("div") || {
    style: {}
  }, Ba("div"), Wt = Cn(Wt), He = Wt + "Origin", Or.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Pf = !!Cn("perspective"), Rl = Ue.core.reverting, Al = 1);
}, xc = function(t) {
  var i = t.ownerSVGElement, e = Ba("svg", i && i.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = t.cloneNode(!0), n;
  r.style.display = "block", e.appendChild(r), hn.appendChild(e);
  try {
    n = r.getBBox();
  } catch {
  }
  return e.removeChild(r), hn.removeChild(e), n;
}, bc = function(t, i) {
  for (var e = i.length; e--; )
    if (t.hasAttribute(i[e]))
      return t.getAttribute(i[e]);
}, Mf = function(t) {
  var i, e;
  try {
    i = t.getBBox();
  } catch {
    i = xc(t), e = 1;
  }
  return i && (i.width || i.height) || e || (i = xc(t)), i && !i.width && !i.x && !i.y ? {
    x: +bc(t, ["x", "cx", "x1"]) || 0,
    y: +bc(t, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : i;
}, Df = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Mf(t));
}, mr = function(t, i) {
  if (i) {
    var e = t.style, r;
    i in Qi && i !== He && (i = Wt), e.removeProperty ? (r = i.substr(0, 2), (r === "ms" || i.substr(0, 6) === "webkit") && (i = "-" + i), e.removeProperty(r === "--" ? i : i.replace(Nl, "-$1").toLowerCase())) : e.removeAttribute(i);
  }
}, lr = function(t, i, e, r, n, o) {
  var a = new Ve(t._pt, i, e, 0, 1, o ? Ef : Tf);
  return t._pt = a, a.b = r, a.e = n, t._props.push(e), a;
}, Sc = {
  deg: 1,
  rad: 1,
  turn: 1
}, mp = {
  grid: 1,
  flex: 1
}, yr = function s(t, i, e, r) {
  var n = parseFloat(e) || 0, o = (e + "").trim().substr((n + "").length) || "px", a = Or.style, c = rp.test(i), u = t.tagName.toLowerCase() === "svg", f = (u ? "client" : "offset") + (c ? "Width" : "Height"), h = 100, d = r === "px", l = r === "%", _, p, g, w;
  if (r === o || !n || Sc[r] || Sc[o])
    return n;
  if (o !== "px" && !d && (n = s(t, i, e, "px")), w = t.getCTM && Df(t), (l || o === "%") && (Qi[i] || ~i.indexOf("adius")))
    return _ = w ? t.getBBox()[c ? "width" : "height"] : t[f], Gt(l ? n / _ * h : n / 100 * _);
  if (a[c ? "width" : "height"] = h + (d ? o : r), p = r !== "rem" && ~i.indexOf("adius") || r === "em" && t.appendChild && !u ? t : t.parentNode, w && (p = (t.ownerSVGElement || {}).parentNode), (!p || p === ar || !p.appendChild) && (p = ar.body), g = p._gsap, g && l && g.width && c && g.time === ii.time && !g.uncache)
    return Gt(n / g.width * h);
  if (l && (i === "height" || i === "width")) {
    var T = t.style[i];
    t.style[i] = h + r, _ = t[f], T ? t.style[i] = T : mr(t, i);
  } else
    (l || o === "%") && !mp[oi(p, "display")] && (a.position = oi(t, "position")), p === t && (a.position = "static"), p.appendChild(Or), _ = Or[f], p.removeChild(Or), a.position = "absolute";
  return c && l && (g = Ar(p), g.time = ii.time, g.width = p[f]), Gt(d ? _ * n / h : _ && n ? h / _ * n : 0);
}, Xi = function(t, i, e, r) {
  var n;
  return Al || $a(), i in Fi && i !== "transform" && (i = Fi[i], ~i.indexOf(",") && (i = i.split(",")[0])), Qi[i] && i !== "transform" ? (n = ks(t, r), n = i !== "transformOrigin" ? n[i] : n.svg ? n.origin : So(oi(t, He)) + " " + n.zOrigin + "px") : (n = t.style[i], (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) && (n = bo[i] && bo[i](t, i, e) || oi(t, i) || Uu(t, i) || (i === "opacity" ? 1 : 0))), e && !~(n + "").trim().indexOf(" ") ? yr(t, i, n, e) + e : n;
}, yp = function(t, i, e, r) {
  if (!e || e === "none") {
    var n = Cn(i, t, 1), o = n && oi(t, n, 1);
    o && o !== e ? (i = n, e = o) : i === "borderColor" && (e = oi(t, "borderTopColor"));
  }
  var a = new Ve(this._pt, t.style, i, 0, 1, xf), c = 0, u = 0, f, h, d, l, _, p, g, w, T, x, b, m;
  if (a.b = e, a.e = r, e += "", r += "", r.substring(0, 6) === "var(--" && (r = oi(t, r.substring(4, r.indexOf(")")))), r === "auto" && (p = t.style[i], t.style[i] = r, r = oi(t, i) || r, p ? t.style[i] = p : mr(t, i)), f = [e, r], df(f), e = f[0], r = f[1], d = e.match(on) || [], m = r.match(on) || [], m.length) {
    for (; h = on.exec(r); )
      g = h[0], T = r.substring(c, h.index), _ ? _ = (_ + 1) % 5 : (T.substr(-5) === "rgba(" || T.substr(-5) === "hsla(") && (_ = 1), g !== (p = d[u++] || "") && (l = parseFloat(p) || 0, b = p.substr((l + "").length), g.charAt(1) === "=" && (g = fn(l, g) + b), w = parseFloat(g), x = g.substr((w + "").length), c = on.lastIndex - x.length, x || (x = x || ai.units[i] || b, c === r.length && (r += x, a.e += x)), b !== x && (l = yr(t, i, p, x) || 0), a._pt = {
        _next: a._pt,
        p: T || u === 1 ? T : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: l,
        c: w - l,
        m: _ && _ < 4 || i === "zIndex" ? Math.round : 0
      });
    a.c = c < r.length ? r.substring(c, r.length) : "";
  } else
    a.r = i === "display" && r === "none" ? Ef : Tf;
  return Xu.test(r) && (a.e = 0), this._pt = a, a;
}, Tc = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, vp = function(t) {
  var i = t.split(" "), e = i[0], r = i[1] || "50%";
  return (e === "top" || e === "bottom" || r === "left" || r === "right") && (t = e, e = r, r = t), i[0] = Tc[e] || e, i[1] = Tc[r] || r, i.join(" ");
}, wp = function(t, i) {
  if (i.tween && i.tween._time === i.tween._dur) {
    var e = i.t, r = e.style, n = i.u, o = e._gsap, a, c, u;
    if (n === "all" || n === !0)
      r.cssText = "", c = 1;
    else
      for (n = n.split(","), u = n.length; --u > -1; )
        a = n[u], Qi[a] && (c = 1, a = a === "transformOrigin" ? He : Wt), mr(e, a);
    c && (mr(e, Wt), o && (o.svg && e.removeAttribute("transform"), r.scale = r.rotate = r.translate = "none", ks(e, 1), o.uncache = 1, Cf(r)));
  }
}, bo = {
  clearProps: function(t, i, e, r, n) {
    if (n.data !== "isFromStart") {
      var o = t._pt = new Ve(t._pt, i, e, 0, 0, wp);
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
}, Cs = [1, 0, 0, 1, 0, 0], Of = {}, Lf = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, Ec = function(t) {
  var i = oi(t, Wt);
  return Lf(i) ? Cs : i.substr(7).match(Yu).map(Gt);
}, Fl = function(t, i) {
  var e = t._gsap || Ar(t), r = t.style, n = Ec(t), o, a, c, u;
  return e.svg && t.getAttribute("transform") ? (c = t.transform.baseVal.consolidate().matrix, n = [c.a, c.b, c.c, c.d, c.e, c.f], n.join(",") === "1,0,0,1,0,0" ? Cs : n) : (n === Cs && !t.offsetParent && t !== hn && !e.svg && (c = r.display, r.display = "block", o = t.parentNode, (!o || !t.offsetParent && !t.getBoundingClientRect().width) && (u = 1, a = t.nextElementSibling, hn.appendChild(t)), n = Ec(t), c ? r.display = c : mr(t, "display"), u && (a ? o.insertBefore(t, a) : o ? o.appendChild(t) : hn.removeChild(t))), i && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
}, za = function(t, i, e, r, n, o) {
  var a = t._gsap, c = n || Fl(t, !0), u = a.xOrigin || 0, f = a.yOrigin || 0, h = a.xOffset || 0, d = a.yOffset || 0, l = c[0], _ = c[1], p = c[2], g = c[3], w = c[4], T = c[5], x = i.split(" "), b = parseFloat(x[0]) || 0, m = parseFloat(x[1]) || 0, M, E, C, D;
  e ? c !== Cs && (E = l * g - _ * p) && (C = b * (g / E) + m * (-p / E) + (p * T - g * w) / E, D = b * (-_ / E) + m * (l / E) - (l * T - _ * w) / E, b = C, m = D) : (M = Mf(t), b = M.x + (~x[0].indexOf("%") ? b / 100 * M.width : b), m = M.y + (~(x[1] || x[0]).indexOf("%") ? m / 100 * M.height : m)), r || r !== !1 && a.smooth ? (w = b - u, T = m - f, a.xOffset = h + (w * l + T * p) - w, a.yOffset = d + (w * _ + T * g) - T) : a.xOffset = a.yOffset = 0, a.xOrigin = b, a.yOrigin = m, a.smooth = !!r, a.origin = i, a.originIsAbsolute = !!e, t.style[He] = "0px 0px", o && (lr(o, a, "xOrigin", u, b), lr(o, a, "yOrigin", f, m), lr(o, a, "xOffset", h, a.xOffset), lr(o, a, "yOffset", d, a.yOffset)), t.setAttribute("data-svg-origin", b + " " + m);
}, ks = function(t, i) {
  var e = t._gsap || new _f(t);
  if ("x" in e && !i && !e.uncache)
    return e;
  var r = t.style, n = e.scaleX < 0, o = "px", a = "deg", c = getComputedStyle(t), u = oi(t, He) || "0", f, h, d, l, _, p, g, w, T, x, b, m, M, E, C, D, P, B, A, R, X, $, V, Y, nt, st, v, G, H, ht, J, ot;
  return f = h = d = p = g = w = T = x = b = 0, l = _ = 1, e.svg = !!(t.getCTM && Df(t)), c.translate && ((c.translate !== "none" || c.scale !== "none" || c.rotate !== "none") && (r[Wt] = (c.translate !== "none" ? "translate3d(" + (c.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (c.rotate !== "none" ? "rotate(" + c.rotate + ") " : "") + (c.scale !== "none" ? "scale(" + c.scale.split(" ").join(",") + ") " : "") + (c[Wt] !== "none" ? c[Wt] : "")), r.scale = r.rotate = r.translate = "none"), E = Fl(t, e.svg), e.svg && (e.uncache ? (nt = t.getBBox(), u = e.xOrigin - nt.x + "px " + (e.yOrigin - nt.y) + "px", Y = "") : Y = !i && t.getAttribute("data-svg-origin"), za(t, Y || u, !!Y || e.originIsAbsolute, e.smooth !== !1, E)), m = e.xOrigin || 0, M = e.yOrigin || 0, E !== Cs && (B = E[0], A = E[1], R = E[2], X = E[3], f = $ = E[4], h = V = E[5], E.length === 6 ? (l = Math.sqrt(B * B + A * A), _ = Math.sqrt(X * X + R * R), p = B || A ? Gr(A, B) * kr : 0, T = R || X ? Gr(R, X) * kr + p : 0, T && (_ *= Math.abs(Math.cos(T * dn))), e.svg && (f -= m - (m * B + M * R), h -= M - (m * A + M * X))) : (ot = E[6], ht = E[7], v = E[8], G = E[9], H = E[10], J = E[11], f = E[12], h = E[13], d = E[14], C = Gr(ot, H), g = C * kr, C && (D = Math.cos(-C), P = Math.sin(-C), Y = $ * D + v * P, nt = V * D + G * P, st = ot * D + H * P, v = $ * -P + v * D, G = V * -P + G * D, H = ot * -P + H * D, J = ht * -P + J * D, $ = Y, V = nt, ot = st), C = Gr(-R, H), w = C * kr, C && (D = Math.cos(-C), P = Math.sin(-C), Y = B * D - v * P, nt = A * D - G * P, st = R * D - H * P, J = X * P + J * D, B = Y, A = nt, R = st), C = Gr(A, B), p = C * kr, C && (D = Math.cos(C), P = Math.sin(C), Y = B * D + A * P, nt = $ * D + V * P, A = A * D - B * P, V = V * D - $ * P, B = Y, $ = nt), g && Math.abs(g) + Math.abs(p) > 359.9 && (g = p = 0, w = 180 - w), l = Gt(Math.sqrt(B * B + A * A + R * R)), _ = Gt(Math.sqrt(V * V + ot * ot)), C = Gr($, V), T = Math.abs(C) > 2e-4 ? C * kr : 0, b = J ? 1 / (J < 0 ? -J : J) : 0), e.svg && (Y = t.getAttribute("transform"), e.forceCSS = t.setAttribute("transform", "") || !Lf(oi(t, Wt)), Y && t.setAttribute("transform", Y))), Math.abs(T) > 90 && Math.abs(T) < 270 && (n ? (l *= -1, T += p <= 0 ? 180 : -180, p += p <= 0 ? 180 : -180) : (_ *= -1, T += T <= 0 ? 180 : -180)), i = i || e.uncache, e.x = f - ((e.xPercent = f && (!i && e.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-f) ? -50 : 0))) ? t.offsetWidth * e.xPercent / 100 : 0) + o, e.y = h - ((e.yPercent = h && (!i && e.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-h) ? -50 : 0))) ? t.offsetHeight * e.yPercent / 100 : 0) + o, e.z = d + o, e.scaleX = Gt(l), e.scaleY = Gt(_), e.rotation = Gt(p) + a, e.rotationX = Gt(g) + a, e.rotationY = Gt(w) + a, e.skewX = T + a, e.skewY = x + a, e.transformPerspective = b + o, (e.zOrigin = parseFloat(u.split(" ")[2]) || !i && e.zOrigin || 0) && (r[He] = So(u)), e.xOffset = e.yOffset = 0, e.force3D = ai.force3D, e.renderTransform = e.svg ? bp : Pf ? Af : xp, e.uncache = 0, e;
}, So = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, Jo = function(t, i, e) {
  var r = Ee(i);
  return Gt(parseFloat(i) + parseFloat(yr(t, "x", e + "px", r))) + r;
}, xp = function(t, i) {
  i.z = "0px", i.rotationY = i.rotationX = "0deg", i.force3D = 0, Af(t, i);
}, Sr = "0deg", Fn = "0px", Tr = ") ", Af = function(t, i) {
  var e = i || this, r = e.xPercent, n = e.yPercent, o = e.x, a = e.y, c = e.z, u = e.rotation, f = e.rotationY, h = e.rotationX, d = e.skewX, l = e.skewY, _ = e.scaleX, p = e.scaleY, g = e.transformPerspective, w = e.force3D, T = e.target, x = e.zOrigin, b = "", m = w === "auto" && t && t !== 1 || w === !0;
  if (x && (h !== Sr || f !== Sr)) {
    var M = parseFloat(f) * dn, E = Math.sin(M), C = Math.cos(M), D;
    M = parseFloat(h) * dn, D = Math.cos(M), o = Jo(T, o, E * D * -x), a = Jo(T, a, -Math.sin(M) * -x), c = Jo(T, c, C * D * -x + x);
  }
  g !== Fn && (b += "perspective(" + g + Tr), (r || n) && (b += "translate(" + r + "%, " + n + "%) "), (m || o !== Fn || a !== Fn || c !== Fn) && (b += c !== Fn || m ? "translate3d(" + o + ", " + a + ", " + c + ") " : "translate(" + o + ", " + a + Tr), u !== Sr && (b += "rotate(" + u + Tr), f !== Sr && (b += "rotateY(" + f + Tr), h !== Sr && (b += "rotateX(" + h + Tr), (d !== Sr || l !== Sr) && (b += "skew(" + d + ", " + l + Tr), (_ !== 1 || p !== 1) && (b += "scale(" + _ + ", " + p + Tr), T.style[Wt] = b || "translate(0, 0)";
}, bp = function(t, i) {
  var e = i || this, r = e.xPercent, n = e.yPercent, o = e.x, a = e.y, c = e.rotation, u = e.skewX, f = e.skewY, h = e.scaleX, d = e.scaleY, l = e.target, _ = e.xOrigin, p = e.yOrigin, g = e.xOffset, w = e.yOffset, T = e.forceCSS, x = parseFloat(o), b = parseFloat(a), m, M, E, C, D;
  c = parseFloat(c), u = parseFloat(u), f = parseFloat(f), f && (f = parseFloat(f), u += f, c += f), c || u ? (c *= dn, u *= dn, m = Math.cos(c) * h, M = Math.sin(c) * h, E = Math.sin(c - u) * -d, C = Math.cos(c - u) * d, u && (f *= dn, D = Math.tan(u - f), D = Math.sqrt(1 + D * D), E *= D, C *= D, f && (D = Math.tan(f), D = Math.sqrt(1 + D * D), m *= D, M *= D)), m = Gt(m), M = Gt(M), E = Gt(E), C = Gt(C)) : (m = h, C = d, M = E = 0), (x && !~(o + "").indexOf("px") || b && !~(a + "").indexOf("px")) && (x = yr(l, "x", o, "px"), b = yr(l, "y", a, "px")), (_ || p || g || w) && (x = Gt(x + _ - (_ * m + p * E) + g), b = Gt(b + p - (_ * M + p * C) + w)), (r || n) && (D = l.getBBox(), x = Gt(x + r / 100 * D.width), b = Gt(b + n / 100 * D.height)), D = "matrix(" + m + "," + M + "," + E + "," + C + "," + x + "," + b + ")", l.setAttribute("transform", D), T && (l.style[Wt] = D);
}, Sp = function(t, i, e, r, n) {
  var o = 360, a = fe(n), c = parseFloat(n) * (a && ~n.indexOf("rad") ? kr : 1), u = c - r, f = r + u + "deg", h, d;
  return a && (h = n.split("_")[1], h === "short" && (u %= o, u !== u % (o / 2) && (u += u < 0 ? o : -o)), h === "cw" && u < 0 ? u = (u + o * vc) % o - ~~(u / o) * o : h === "ccw" && u > 0 && (u = (u - o * vc) % o - ~~(u / o) * o)), t._pt = d = new Ve(t._pt, i, e, r, u, sp), d.e = f, d.u = "deg", t._props.push(e), d;
}, Cc = function(t, i) {
  for (var e in i)
    t[e] = i[e];
  return t;
}, Tp = function(t, i, e) {
  var r = Cc({}, e._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", o = e.style, a, c, u, f, h, d, l, _;
  r.svg ? (u = e.getAttribute("transform"), e.setAttribute("transform", ""), o[Wt] = i, a = ks(e, 1), mr(e, Wt), e.setAttribute("transform", u)) : (u = getComputedStyle(e)[Wt], o[Wt] = i, a = ks(e, 1), o[Wt] = u);
  for (c in Qi)
    u = r[c], f = a[c], u !== f && n.indexOf(c) < 0 && (l = Ee(u), _ = Ee(f), h = l !== _ ? yr(e, c, u, _) : parseFloat(u), d = parseFloat(f), t._pt = new Ve(t._pt, a, c, h, d - h, Ia), t._pt.u = _ || 0, t._props.push(c));
  Cc(a, r);
};
We("padding,margin,Width,Radius", function(s, t) {
  var i = "Top", e = "Right", r = "Bottom", n = "Left", o = (t < 3 ? [i, e, r, n] : [i + n, i + e, r + e, r + n]).map(function(a) {
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
var Rf = {
  name: "css",
  register: $a,
  targetTest: function(t) {
    return t.style && t.nodeType;
  },
  init: function(t, i, e, r, n) {
    var o = this._props, a = t.style, c = e.vars.startAt, u, f, h, d, l, _, p, g, w, T, x, b, m, M, E, C, D;
    Al || $a(), this.styles = this.styles || kf(t), C = this.styles.props, this.tween = e;
    for (p in i)
      if (p !== "autoRound" && (f = i[p], !(ti[p] && gf(p, i, e, r, t, n)))) {
        if (l = typeof f, _ = bo[p], l === "function" && (f = f.call(e, r, t, n), l = typeof f), l === "string" && ~f.indexOf("random(") && (f = Ss(f)), _)
          _(this, t, p, f, e) && (E = 1);
        else if (p.substr(0, 2) === "--")
          u = (getComputedStyle(t).getPropertyValue(p) + "").trim(), f += "", dr.lastIndex = 0, dr.test(u) || (g = Ee(u), w = Ee(f), w ? g !== w && (u = yr(t, p, u, w) + w) : g && (f += g)), this.add(a, "setProperty", u, f, r, n, 0, 0, p), o.push(p), C.push(p, 0, a[p]);
        else if (l !== "undefined") {
          if (c && p in c ? (u = typeof c[p] == "function" ? c[p].call(e, r, t, n) : c[p], fe(u) && ~u.indexOf("random(") && (u = Ss(u)), Ee(u + "") || u === "auto" || (u += ai.units[p] || Ee(Xi(t, p)) || ""), (u + "").charAt(1) === "=" && (u = Xi(t, p))) : u = Xi(t, p), d = parseFloat(u), T = l === "string" && f.charAt(1) === "=" && f.substr(0, 2), T && (f = f.substr(2)), h = parseFloat(f), p in Fi && (p === "autoAlpha" && (d === 1 && Xi(t, "visibility") === "hidden" && h && (d = 0), C.push("visibility", 0, a.visibility), lr(this, a, "visibility", d ? "inherit" : "hidden", h ? "inherit" : "hidden", !h)), p !== "scale" && p !== "transform" && (p = Fi[p], ~p.indexOf(",") && (p = p.split(",")[0]))), x = p in Qi, x) {
            if (this.styles.save(p), D = f, l === "string" && f.substring(0, 6) === "var(--") {
              if (f = oi(t, f.substring(4, f.indexOf(")"))), f.substring(0, 5) === "calc(") {
                var P = t.style.perspective;
                t.style.perspective = f, f = oi(t, "perspective"), P ? t.style.perspective = P : mr(t, "perspective");
              }
              h = parseFloat(f);
            }
            if (b || (m = t._gsap, m.renderTransform && !i.parseTransform || ks(t, i.parseTransform), M = i.smoothOrigin !== !1 && m.smooth, b = this._pt = new Ve(this._pt, a, Wt, 0, 1, m.renderTransform, m, 0, -1), b.dep = 1), p === "scale")
              this._pt = new Ve(this._pt, m, "scaleY", m.scaleY, (T ? fn(m.scaleY, T + h) : h) - m.scaleY || 0, Ia), this._pt.u = 0, o.push("scaleY", p), p += "X";
            else if (p === "transformOrigin") {
              C.push(He, 0, a[He]), f = vp(f), m.svg ? za(t, f, 0, M, 0, this) : (w = parseFloat(f.split(" ")[2]) || 0, w !== m.zOrigin && lr(this, m, "zOrigin", m.zOrigin, w), lr(this, a, p, So(u), So(f)));
              continue;
            } else if (p === "svgOrigin") {
              za(t, f, 1, M, 0, this);
              continue;
            } else if (p in Of) {
              Sp(this, m, p, d, T ? fn(d, T + f) : f);
              continue;
            } else if (p === "smoothOrigin") {
              lr(this, m, "smooth", m.smooth, f);
              continue;
            } else if (p === "force3D") {
              m[p] = f;
              continue;
            } else if (p === "transform") {
              Tp(this, f, t);
              continue;
            }
          } else p in a || (p = Cn(p) || p);
          if (x || (h || h === 0) && (d || d === 0) && !np.test(f) && p in a)
            g = (u + "").substr((d + "").length), h || (h = 0), w = Ee(f) || (p in ai.units ? ai.units[p] : g), g !== w && (d = yr(t, p, u, w)), this._pt = new Ve(this._pt, x ? m : a, p, d, (T ? fn(d, T + h) : h) - d, !x && (w === "px" || p === "zIndex") && i.autoRound !== !1 ? lp : Ia), this._pt.u = w || 0, x && D !== f ? (this._pt.b = u, this._pt.e = D, this._pt.r = ap) : g !== w && w !== "%" && (this._pt.b = u, this._pt.r = op);
          else if (p in a)
            yp.call(this, t, p, u, T ? T + f : f);
          else if (p in t)
            this.add(t, p, u || t[p], T ? T + f : f, r, n);
          else if (p !== "parseTransform") {
            Sl(p, f);
            continue;
          }
          x || (p in a ? C.push(p, 0, a[p]) : typeof t[p] == "function" ? C.push(p, 2, t[p]()) : C.push(p, 1, u || t[p])), o.push(p);
        }
      }
    E && bf(this);
  },
  render: function(t, i) {
    if (i.tween._time || !Rl())
      for (var e = i._pt; e; )
        e.r(t, e.d), e = e._next;
    else
      i.styles.revert();
  },
  get: Xi,
  aliases: Fi,
  getSetter: function(t, i, e) {
    var r = Fi[i];
    return r && r.indexOf(",") < 0 && (i = r), i in Qi && i !== He && (t._gsap.x || Xi(t, "x")) ? e && yc === e ? i === "scale" ? hp : fp : (yc = e || {}) && (i === "scale" ? dp : pp) : t.style && !wl(t.style[i]) ? cp : ~i.indexOf("-") ? up : Ol(t, i);
  },
  core: {
    _removeProperty: mr,
    _getMatrix: Fl
  }
};
Ue.utils.checkPrefix = Cn;
Ue.core.getStyleSaver = kf;
(function(s, t, i, e) {
  var r = We(s + "," + t + "," + i, function(n) {
    Qi[n] = 1;
  });
  We(t, function(n) {
    ai.units[n] = "deg", Of[n] = 1;
  }), Fi[r[13]] = s + "," + t, We(e, function(n) {
    var o = n.split(":");
    Fi[o[1]] = r[o[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
We("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(s) {
  ai.units[s] = "px";
});
Ue.registerPlugin(Rf);
var Rt = Ue.registerPlugin(Rf) || Ue;
Rt.core.Tween;
function Ep(s, t) {
  for (var i = 0; i < t.length; i++) {
    var e = t[i];
    e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(s, e.key, e);
  }
}
function Cp(s, t, i) {
  return t && Ep(s.prototype, t), s;
}
/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var me, oo, ri, cr, ur, pn, Nf, Pr, _n, Ff, Hi, bi, If, Bf = function() {
  return me || typeof window < "u" && (me = window.gsap) && me.registerPlugin && me;
}, $f = 1, ln = [], _t = [], Bi = [], rs = Date.now, Ya = function(t, i) {
  return i;
}, kp = function() {
  var t = _n.core, i = t.bridge || {}, e = t._scrollers, r = t._proxies;
  e.push.apply(e, _t), r.push.apply(r, Bi), _t = e, Bi = r, Ya = function(o, a) {
    return i[o](a);
  };
}, pr = function(t, i) {
  return ~Bi.indexOf(t) && Bi[Bi.indexOf(t) + 1][i];
}, ns = function(t) {
  return !!~Ff.indexOf(t);
}, Oe = function(t, i, e, r, n) {
  return t.addEventListener(i, e, {
    passive: r !== !1,
    capture: !!n
  });
}, Me = function(t, i, e, r) {
  return t.removeEventListener(i, e, !!r);
}, Ys = "scrollLeft", Xs = "scrollTop", Xa = function() {
  return Hi && Hi.isPressed || _t.cache++;
}, To = function(t, i) {
  var e = function r(n) {
    if (n || n === 0) {
      $f && (ri.history.scrollRestoration = "manual");
      var o = Hi && Hi.isPressed;
      n = r.v = Math.round(n) || (Hi && Hi.iOS ? 1 : 0), t(n), r.cacheID = _t.cache, o && Ya("ss", n);
    } else (i || _t.cache !== r.cacheID || Ya("ref")) && (r.cacheID = _t.cache, r.v = t());
    return r.v + r.offset;
  };
  return e.offset = 0, t && e;
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
}, ze = function(t, i) {
  return (i && i._ctx && i._ctx.selector || me.utils.toArray)(t)[0] || (typeof t == "string" && me.config().nullTargetWarn !== !1 ? console.warn("Element not found:", t) : null);
}, Pp = function(t, i) {
  for (var e = i.length; e--; )
    if (i[e] === t || i[e].contains(t))
      return !0;
  return !1;
}, vr = function(t, i) {
  var e = i.s, r = i.sc;
  ns(t) && (t = cr.scrollingElement || ur);
  var n = _t.indexOf(t), o = r === ae.sc ? 1 : 2;
  !~n && (n = _t.push(t) - 1), _t[n + o] || Oe(t, "scroll", Xa);
  var a = _t[n + o], c = a || (_t[n + o] = To(pr(t, e), !0) || (ns(t) ? r : To(function(u) {
    return arguments.length ? t[e] = u : t[e];
  })));
  return c.target = t, a || (c.smooth = me.getProperty(t, "scrollBehavior") === "smooth"), c;
}, Wa = function(t, i, e) {
  var r = t, n = t, o = rs(), a = o, c = i || 50, u = Math.max(500, c * 3), f = function(_, p) {
    var g = rs();
    p || g - o > c ? (n = r, r = _, a = o, o = g) : e ? r += _ : r = n + (_ - n) / (g - a) * (o - a);
  }, h = function() {
    n = r = e ? 0 : r, a = o = 0;
  }, d = function(_) {
    var p = a, g = n, w = rs();
    return (_ || _ === 0) && _ !== r && f(_), o === a || w - a > u ? 0 : (r + (e ? g : -g)) / ((e ? w : o) - p) * 1e3;
  };
  return {
    update: f,
    reset: h,
    getVelocity: d
  };
}, In = function(t, i) {
  return i && !t._gsapAllow && t.cancelable !== !1 && t.preventDefault(), t.changedTouches ? t.changedTouches[0] : t;
}, kc = function(t) {
  var i = Math.max.apply(Math, t), e = Math.min.apply(Math, t);
  return Math.abs(i) >= Math.abs(e) ? i : e;
}, zf = function() {
  _n = me.core.globals().ScrollTrigger, _n && _n.core && kp();
}, Yf = function(t) {
  return me = t || Bf(), !oo && me && typeof document < "u" && document.body && (ri = window, cr = document, ur = cr.documentElement, pn = cr.body, Ff = [ri, cr, ur, pn], me.utils.clamp, If = me.core.context || function() {
  }, Pr = "onpointerenter" in pn ? "pointer" : "mouse", Nf = jt.isTouch = ri.matchMedia && ri.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in ri || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, bi = jt.eventTypes = ("ontouchstart" in ur ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in ur ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
    return $f = 0;
  }, 500), oo = 1), _n || zf(), oo;
};
Ne.op = ae;
_t.cache = 0;
var jt = /* @__PURE__ */ function() {
  function s(i) {
    this.init(i);
  }
  var t = s.prototype;
  return t.init = function(e) {
    oo || Yf(me) || console.warn("Please gsap.registerPlugin(Observer)"), _n || zf();
    var r = e.tolerance, n = e.dragMinimum, o = e.type, a = e.target, c = e.lineHeight, u = e.debounce, f = e.preventDefault, h = e.onStop, d = e.onStopDelay, l = e.ignore, _ = e.wheelSpeed, p = e.event, g = e.onDragStart, w = e.onDragEnd, T = e.onDrag, x = e.onPress, b = e.onRelease, m = e.onRight, M = e.onLeft, E = e.onUp, C = e.onDown, D = e.onChangeX, P = e.onChangeY, B = e.onChange, A = e.onToggleX, R = e.onToggleY, X = e.onHover, $ = e.onHoverEnd, V = e.onMove, Y = e.ignoreCheck, nt = e.isNormalizer, st = e.onGestureStart, v = e.onGestureEnd, G = e.onWheel, H = e.onEnable, ht = e.onDisable, J = e.onClick, ot = e.scrollSpeed, et = e.capture, wt = e.allowClicks, at = e.lockAxis, It = e.onLockAxis;
    this.target = a = ze(a) || ur, this.vars = e, l && (l = me.utils.toArray(l)), r = r || 1e-9, n = n || 0, _ = _ || 1, ot = ot || 1, o = o || "wheel,touch,pointer", u = u !== !1, c || (c = parseFloat(ri.getComputedStyle(pn).lineHeight) || 22);
    var Dt, xt, Ot, K, tt, it, Qt, k = this, St = 0, ee = 0, Fe = e.passive || !f && e.passive !== !1, Ct = vr(a, Ne), j = vr(a, ae), Ie = Ct(), ui = j(), qt = ~o.indexOf("touch") && !~o.indexOf("pointer") && bi[0] === "pointerdown", ie = ns(a), kt = a.ownerDocument || cr, Pe = [0, 0, 0], Be = [0, 0, 0], Ge = 0, xr = function() {
      return Ge = rs();
    }, Vt = function(O, I) {
      return (k.event = O) && l && Pp(O.target, l) || I && qt && O.pointerType !== "touch" || Y && Y(O, I);
    }, Ji = function() {
      k._vx.reset(), k._vy.reset(), xt.pause(), h && h(k);
    }, fi = function() {
      var O = k.deltaX = kc(Pe), I = k.deltaY = kc(Be), L = Math.abs(O) >= r, z = Math.abs(I) >= r;
      B && (L || z) && B(k, O, I, Pe, Be), L && (m && k.deltaX > 0 && m(k), M && k.deltaX < 0 && M(k), D && D(k), A && k.deltaX < 0 != St < 0 && A(k), St = k.deltaX, Pe[0] = Pe[1] = Pe[2] = 0), z && (C && k.deltaY > 0 && C(k), E && k.deltaY < 0 && E(k), P && P(k), R && k.deltaY < 0 != ee < 0 && R(k), ee = k.deltaY, Be[0] = Be[1] = Be[2] = 0), (K || Ot) && (V && V(k), Ot && (g && Ot === 1 && g(k), T && T(k), Ot = 0), K = !1), it && !(it = !1) && It && It(k), tt && (G(k), tt = !1), Dt = 0;
    }, xi = function(O, I, L) {
      Pe[L] += O, Be[L] += I, k._vx.update(O), k._vy.update(I), u ? Dt || (Dt = requestAnimationFrame(fi)) : fi();
    }, hi = function(O, I) {
      at && !Qt && (k.axis = Qt = Math.abs(O) > Math.abs(I) ? "x" : "y", it = !0), Qt !== "y" && (Pe[2] += O, k._vx.update(O, !0)), Qt !== "x" && (Be[2] += I, k._vy.update(I, !0)), u ? Dt || (Dt = requestAnimationFrame(fi)) : fi();
    }, ki = function(O) {
      if (!Vt(O, 1)) {
        O = In(O, f);
        var I = O.clientX, L = O.clientY, z = I - k.x, N = L - k.y, W = k.isDragging;
        k.x = I, k.y = L, (W || (z || N) && (Math.abs(k.startX - I) >= n || Math.abs(k.startY - L) >= n)) && (Ot || (Ot = W ? 2 : 1), W || (k.isDragging = !0), hi(z, N));
      }
    }, je = k.onPress = function(S) {
      Vt(S, 1) || S && S.button || (k.axis = Qt = null, xt.pause(), k.isPressed = !0, S = In(S), St = ee = 0, k.startX = k.x = S.clientX, k.startY = k.y = S.clientY, k._vx.reset(), k._vy.reset(), Oe(nt ? a : kt, bi[1], ki, Fe, !0), k.deltaX = k.deltaY = 0, x && x(k));
    }, lt = k.onRelease = function(S) {
      if (!Vt(S, 1)) {
        Me(nt ? a : kt, bi[1], ki, !0);
        var O = !isNaN(k.y - k.startY), I = k.isDragging, L = I && (Math.abs(k.x - k.startX) > 3 || Math.abs(k.y - k.startY) > 3), z = In(S);
        !L && O && (k._vx.reset(), k._vy.reset(), f && wt && me.delayedCall(0.08, function() {
          if (rs() - Ge > 300 && !S.defaultPrevented) {
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
    }, we = function(O) {
      if (!Vt(O)) {
        var I = Ct(), L = j();
        xi((I - Ie) * ot, (L - ui) * ot, 1), Ie = I, ui = L, h && xt.restart(!0);
      }
    }, $e = function(O) {
      if (!Vt(O)) {
        O = In(O, f), G && (tt = !0);
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
      return Vt(O) || In(O, f) && J(k);
    };
    xt = k._dc = me.delayedCall(d || 0.25, Ji).pause(), k.deltaX = k.deltaY = 0, k._vx = Wa(0, 50, !0), k._vy = Wa(0, 50, !0), k.scrollX = Ct, k.scrollY = j, k.isDragging = k.isGesturing = k.isPressed = !1, If(this), k.enable = function(S) {
      return k.isEnabled || (Oe(ie ? kt : a, "scroll", Xa), o.indexOf("scroll") >= 0 && Oe(ie ? kt : a, "scroll", we, Fe, et), o.indexOf("wheel") >= 0 && Oe(a, "wheel", $e, Fe, et), (o.indexOf("touch") >= 0 && Nf || o.indexOf("pointer") >= 0) && (Oe(a, bi[0], je, Fe, et), Oe(kt, bi[2], lt), Oe(kt, bi[3], lt), wt && Oe(a, "click", xr, !0, !0), J && Oe(a, "click", F), st && Oe(kt, "gesturestart", Ke), v && Oe(kt, "gestureend", zt), X && Oe(a, Pr + "enter", Q), $ && Oe(a, Pr + "leave", y), V && Oe(a, Pr + "move", Pi)), k.isEnabled = !0, k.isDragging = k.isGesturing = k.isPressed = K = Ot = !1, k._vx.reset(), k._vy.reset(), Ie = Ct(), ui = j(), S && S.type && je(S), H && H(k)), k;
    }, k.disable = function() {
      k.isEnabled && (ln.filter(function(S) {
        return S !== k && ns(S.target);
      }).length || Me(ie ? kt : a, "scroll", Xa), k.isPressed && (k._vx.reset(), k._vy.reset(), Me(nt ? a : kt, bi[1], ki, !0)), Me(ie ? kt : a, "scroll", we, et), Me(a, "wheel", $e, et), Me(a, bi[0], je, et), Me(kt, bi[2], lt), Me(kt, bi[3], lt), Me(a, "click", xr, !0), Me(a, "click", F), Me(kt, "gesturestart", Ke), Me(kt, "gestureend", zt), Me(a, Pr + "enter", Q), Me(a, Pr + "leave", y), Me(a, Pr + "move", Pi), k.isEnabled = k.isPressed = k.isDragging = !1, ht && ht(k));
    }, k.kill = k.revert = function() {
      k.disable();
      var S = ln.indexOf(k);
      S >= 0 && ln.splice(S, 1), Hi === k && (Hi = 0);
    }, ln.push(k), nt && ns(a) && (Hi = k), k.enable(p);
  }, Cp(s, [{
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
jt.register = Yf;
jt.getAll = function() {
  return ln.slice();
};
jt.getById = function(s) {
  return ln.filter(function(t) {
    return t.vars.id === s;
  })[0];
};
Bf() && me.registerPlugin(jt);
/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var q, rn, pt, Mt, ei, Et, Il, Eo, Ps, ss, Vn, Ws, Se, zo, Va, Ae, Pc, Mc, nn, Xf, ta, Wf, Le, Ha, Vf, Hf, rr, qa, Bl, gn, $l, os, Ua, ea, Vs = 1, Te = Date.now, ia = Te(), wi = 0, Hn = 0, Dc = function(t, i, e) {
  var r = Je(t) && (t.substr(0, 6) === "clamp(" || t.indexOf("max") > -1);
  return e["_" + i + "Clamp"] = r, r ? t.substr(6, t.length - 7) : t;
}, Oc = function(t, i) {
  return i && (!Je(t) || t.substr(0, 6) !== "clamp(") ? "clamp(" + t + ")" : t;
}, Mp = function s() {
  return Hn && requestAnimationFrame(s);
}, Lc = function() {
  return zo = 1;
}, Ac = function() {
  return zo = 0;
}, Li = function(t) {
  return t;
}, qn = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, qf = function() {
  return typeof window < "u";
}, Uf = function() {
  return q || qf() && (q = window.gsap) && q.registerPlugin && q;
}, Wr = function(t) {
  return !!~Il.indexOf(t);
}, Gf = function(t) {
  return (t === "Height" ? $l : pt["inner" + t]) || ei["client" + t] || Et["client" + t];
}, jf = function(t) {
  return pr(t, "getBoundingClientRect") || (Wr(t) ? function() {
    return fo.width = pt.innerWidth, fo.height = $l, fo;
  } : function() {
    return Vi(t);
  });
}, Dp = function(t, i, e) {
  var r = e.d, n = e.d2, o = e.a;
  return (o = pr(t, "getBoundingClientRect")) ? function() {
    return o()[r];
  } : function() {
    return (i ? Gf(n) : t["client" + n]) || 0;
  };
}, Op = function(t, i) {
  return !i || ~Bi.indexOf(t) ? jf(t) : function() {
    return fo;
  };
}, Ii = function(t, i) {
  var e = i.s, r = i.d2, n = i.d, o = i.a;
  return Math.max(0, (e = "scroll" + r) && (o = pr(t, e)) ? o() - jf(t)()[n] : Wr(t) ? (ei[e] || Et[e]) - Gf(r) : t[e] - t["offset" + r]);
}, Hs = function(t, i) {
  for (var e = 0; e < nn.length; e += 3)
    (!i || ~i.indexOf(nn[e + 1])) && t(nn[e], nn[e + 1], nn[e + 2]);
}, Je = function(t) {
  return typeof t == "string";
}, Ce = function(t) {
  return typeof t == "function";
}, Un = function(t) {
  return typeof t == "number";
}, Mr = function(t) {
  return typeof t == "object";
}, Bn = function(t, i, e) {
  return t && t.progress(i ? 0 : 1) && e && t.pause();
}, jr = function(t, i, e) {
  if (t.enabled) {
    var r = t._ctx ? t._ctx.add(function() {
      return i(t, e);
    }) : i(t, e);
    r && r.totalTime && (t.callbackAnimation = r);
  }
}, Kr = Math.abs, Kf = "left", Qf = "top", zl = "right", Yl = "bottom", Ir = "width", Br = "height", as = "Right", ls = "Left", cs = "Top", us = "Bottom", Jt = "padding", gi = "margin", kn = "Width", Xl = "Height", ne = "px", mi = function(t) {
  return pt.getComputedStyle(t.nodeType === Node.DOCUMENT_NODE ? t.scrollingElement : t);
}, Lp = function(t) {
  var i = mi(t).position;
  t.style.position = i === "absolute" || i === "fixed" ? i : "relative";
}, Rc = function(t, i) {
  for (var e in i)
    e in t || (t[e] = i[e]);
  return t;
}, Vi = function(t, i) {
  var e = i && mi(t)[Va] !== "matrix(1, 0, 0, 1, 0, 0)" && q.to(t, {
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
}, Co = function(t, i) {
  var e = i.d2;
  return t["offset" + e] || t["client" + e] || 0;
}, Zf = function(t) {
  var i = [], e = t.labels, r = t.duration(), n;
  for (n in e)
    i.push(e[n] / r);
  return i;
}, Ap = function(t) {
  return function(i) {
    return q.utils.snap(Zf(t), i);
  };
}, Wl = function(t) {
  var i = q.utils.snap(t), e = Array.isArray(t) && t.slice(0).sort(function(r, n) {
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
}, Rp = function(t) {
  return function(i, e) {
    return Wl(Zf(t))(i, e.direction);
  };
}, qs = function(t, i, e, r) {
  return e.split(",").forEach(function(n) {
    return t(i, n, r);
  });
}, ce = function(t, i, e, r, n) {
  return t.addEventListener(i, e, {
    passive: !r,
    capture: !!n
  });
}, le = function(t, i, e, r) {
  return t.removeEventListener(i, e, !!r);
}, Us = function(t, i, e) {
  e = e && e.wheelHandler, e && (t(i, "wheel", e), t(i, "touchmove", e));
}, Nc = {
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
}, ao = function(t, i) {
  if (Je(t)) {
    var e = t.indexOf("="), r = ~e ? +(t.charAt(e - 1) + 1) * parseFloat(t.substr(e + 1)) : 0;
    ~e && (t.indexOf("%") > e && (r *= i / 100), t = t.substr(0, e - 1)), t = r + (t in ko ? ko[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0);
  }
  return t;
}, js = function(t, i, e, r, n, o, a, c) {
  var u = n.startColor, f = n.endColor, h = n.fontSize, d = n.indent, l = n.fontWeight, _ = Mt.createElement("div"), p = Wr(e) || pr(e, "pinType") === "fixed", g = t.indexOf("scroller") !== -1, w = p ? Et : e.tagName === "IFRAME" ? e.contentDocument.body : e, T = t.indexOf("start") !== -1, x = T ? u : f, b = "border-color:" + x + ";font-size:" + h + ";color:" + x + ";font-weight:" + l + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
  return b += "position:" + ((g || c) && p ? "fixed;" : "absolute;"), (g || c || !p) && (b += (r === ae ? zl : Yl) + ":" + (o + parseFloat(d)) + "px;"), a && (b += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), _._isStart = T, _.setAttribute("class", "gsap-marker-" + t + (i ? " marker-" + i : "")), _.style.cssText = b, _.innerText = i || i === 0 ? t + "-" + i : t, w.children[0] ? w.insertBefore(_, w.children[0]) : w.appendChild(_), _._offset = _["offset" + r.op.d2], lo(_, 0, r, T), _;
}, lo = function(t, i, e, r) {
  var n = {
    display: "block"
  }, o = e[r ? "os2" : "p2"], a = e[r ? "p2" : "os2"];
  t._isFlipped = r, n[e.a + "Percent"] = r ? -100 : 0, n[e.a] = r ? "1px" : 0, n["border" + o + kn] = 1, n["border" + a + kn] = 0, n[e.p] = i + "px", q.set(t, n);
}, dt = [], Ga = {}, Ms, Fc = function() {
  return Te() - wi > 34 && (Ms || (Ms = requestAnimationFrame(ji)));
}, Qr = function() {
  (!Le || !Le.isPressed || Le.startX > Et.clientWidth) && (_t.cache++, Le ? Ms || (Ms = requestAnimationFrame(ji)) : ji(), wi || Hr("scrollStart"), wi = Te());
}, ra = function() {
  Hf = pt.innerWidth, Vf = pt.innerHeight;
}, Gn = function(t) {
  _t.cache++, (t === !0 || !Se && !Wf && !Mt.fullscreenElement && !Mt.webkitFullscreenElement && (!Ha || Hf !== pt.innerWidth || Math.abs(pt.innerHeight - Vf) > pt.innerHeight * 0.25)) && Eo.restart(!0);
}, Vr = {}, Np = [], Jf = function s() {
  return le(ct, "scrollEnd", s) || Lr(!0);
}, Hr = function(t) {
  return Vr[t] && Vr[t].map(function(i) {
    return i();
  }) || Np;
}, Ze = [], th = function(t) {
  for (var i = 0; i < Ze.length; i += 5)
    (!t || Ze[i + 4] && Ze[i + 4].query === t) && (Ze[i].style.cssText = Ze[i + 1], Ze[i].getBBox && Ze[i].setAttribute("transform", Ze[i + 2] || ""), Ze[i + 3].uncache = 1);
}, eh = function() {
  return _t.forEach(function(t) {
    return Ce(t) && ++t.cacheID && (t.rec = t());
  });
}, Vl = function(t, i) {
  var e;
  for (Ae = 0; Ae < dt.length; Ae++)
    e = dt[Ae], e && (!i || e._ctx === i) && (t ? e.kill(1) : e.revert(!0, !0));
  os = !0, i && th(i), i || Hr("revert");
}, ih = function(t, i) {
  _t.cache++, (i || !Re) && _t.forEach(function(e) {
    return Ce(e) && e.cacheID++ && (e.rec = 0);
  }), Je(t) && (pt.history.scrollRestoration = Bl = t);
}, Re, $r = 0, Ic, Fp = function() {
  if (Ic !== $r) {
    var t = Ic = $r;
    requestAnimationFrame(function() {
      return t === $r && Lr(!0);
    });
  }
}, rh = function() {
  Et.appendChild(gn), $l = !Le && gn.offsetHeight || pt.innerHeight, Et.removeChild(gn);
}, Bc = function(t) {
  return Ps(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(i) {
    return i.style.display = t ? "none" : "block";
  });
}, Lr = function(t, i) {
  if (ei = Mt.documentElement, Et = Mt.body, Il = [pt, Mt, ei, Et], wi && !t && !os) {
    ce(ct, "scrollEnd", Jf);
    return;
  }
  rh(), Re = ct.isRefreshing = !0, os || eh();
  var e = Hr("refreshInit");
  Xf && ct.sort(), i || Vl(), _t.forEach(function(r) {
    Ce(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
  }), dt.slice(0).forEach(function(r) {
    return r.refresh();
  }), os = !1, dt.forEach(function(r) {
    if (r._subPinOffset && r.pin) {
      var n = r.vars.horizontal ? "offsetWidth" : "offsetHeight", o = r.pin[n];
      r.revert(!0, 1), r.adjustPinSpacing(r.pin[n] - o), r.refresh();
    }
  }), Ua = 1, Bc(!0), dt.forEach(function(r) {
    var n = Ii(r.scroller, r._dir), o = r.vars.end === "max" || r._endClamp && r.end > n, a = r._startClamp && r.start >= n;
    (o || a) && r.setPositions(a ? n - 1 : r.start, o ? Math.max(a ? n : r.start + 1, n) : r.end, !0);
  }), Bc(!1), Ua = 0, e.forEach(function(r) {
    return r && r.render && r.render(-1);
  }), _t.forEach(function(r) {
    Ce(r) && (r.smooth && requestAnimationFrame(function() {
      return r.target.style.scrollBehavior = "smooth";
    }), r.rec && r(r.rec));
  }), ih(Bl, 1), Eo.pause(), $r++, Re = 2, ji(2), dt.forEach(function(r) {
    return Ce(r.vars.onRefresh) && r.vars.onRefresh(r);
  }), Re = ct.isRefreshing = !1, Hr("refresh");
}, ja = 0, co = 1, fs, ji = function(t) {
  if (t === 2 || !Re && !os) {
    ct.isUpdating = !0, fs && fs.update(0);
    var i = dt.length, e = Te(), r = e - ia >= 50, n = i && dt[0].scroll();
    if (co = ja > n ? -1 : 1, Re || (ja = n), r && (wi && !zo && e - wi > 200 && (wi = 0, Hr("scrollEnd")), Vn = ia, ia = e), co < 0) {
      for (Ae = i; Ae-- > 0; )
        dt[Ae] && dt[Ae].update(0, r);
      co = 1;
    } else
      for (Ae = 0; Ae < i; Ae++)
        dt[Ae] && dt[Ae].update(0, r);
    ct.isUpdating = !1;
  }
  Ms = 0;
}, Ka = [Kf, Qf, Yl, zl, gi + us, gi + as, gi + cs, gi + ls, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], uo = Ka.concat([Ir, Br, "boxSizing", "max" + kn, "max" + Xl, "position", gi, Jt, Jt + cs, Jt + as, Jt + us, Jt + ls]), Ip = function(t, i, e) {
  mn(e);
  var r = t._gsap;
  if (r.spacerIsNative)
    mn(r.spacerState);
  else if (t._gsap.swappedIn) {
    var n = i.parentNode;
    n && (n.insertBefore(t, i), n.removeChild(i));
  }
  t._gsap.swappedIn = !1;
}, na = function(t, i, e, r) {
  if (!t._gsap.swappedIn) {
    for (var n = Ka.length, o = i.style, a = t.style, c; n--; )
      c = Ka[n], o[c] = e[c];
    o.position = e.position === "absolute" ? "absolute" : "relative", e.display === "inline" && (o.display = "inline-block"), a[Yl] = a[zl] = "auto", o.flexBasis = e.flexBasis || "auto", o.overflow = "visible", o.boxSizing = "border-box", o[Ir] = Co(t, Ne) + ne, o[Br] = Co(t, ae) + ne, o[Jt] = a[gi] = a[Qf] = a[Kf] = "0", mn(r), a[Ir] = a["max" + kn] = e[Ir], a[Br] = a["max" + Xl] = e[Br], a[Jt] = e[Jt], t.parentNode !== i && (t.parentNode.insertBefore(i, t), i.appendChild(t)), t._gsap.swappedIn = !0;
  }
}, Bp = /([A-Z])/g, mn = function(t) {
  if (t) {
    var i = t.t.style, e = t.length, r = 0, n, o;
    for ((t.t._gsap || q.core.getCache(t.t)).uncache = 1; r < e; r += 2)
      o = t[r + 1], n = t[r], o ? i[n] = o : i[n] && i.removeProperty(n.replace(Bp, "-$1").toLowerCase());
  }
}, Ks = function(t) {
  for (var i = uo.length, e = t.style, r = [], n = 0; n < i; n++)
    r.push(uo[n], e[uo[n]]);
  return r.t = t, r;
}, $p = function(t, i, e) {
  for (var r = [], n = t.length, o = e ? 8 : 0, a; o < n; o += 2)
    a = t[o], r.push(a, a in i ? i[a] : t[o + 1]);
  return r.t = t.t, r;
}, fo = {
  left: 0,
  top: 0
}, $c = function(t, i, e, r, n, o, a, c, u, f, h, d, l, _) {
  Ce(t) && (t = t(c)), Je(t) && t.substr(0, 3) === "max" && (t = d + (t.charAt(4) === "=" ? ao("0" + t.substr(3), e) : 0));
  var p = l ? l.time() : 0, g, w, T;
  if (l && l.seek(0), isNaN(t) || (t = +t), Un(t))
    l && (t = q.utils.mapRange(l.scrollTrigger.start, l.scrollTrigger.end, 0, d, t)), a && lo(a, e, r, !0);
  else {
    Ce(i) && (i = i(c));
    var x = (t || "0").split(" "), b, m, M, E;
    T = ze(i, c) || Et, b = Vi(T) || {}, (!b || !b.left && !b.top) && mi(T).display === "none" && (E = T.style.display, T.style.display = "block", b = Vi(T), E ? T.style.display = E : T.style.removeProperty("display")), m = ao(x[0], b[r.d]), M = ao(x[1] || "0", e), t = b[r.p] - u[r.p] - f + m + n - M, a && lo(a, M, r, e - M < 20 || a._isStart && M > 20), e -= e - M;
  }
  if (_ && (c[_] = t || -1e-3, t < 0 && (t = 0)), o) {
    var C = t + e, D = o._isStart;
    g = "scroll" + r.d2, lo(o, C, r, D && C > 20 || !D && (h ? Math.max(Et[g], ei[g]) : o.parentNode[g]) <= C + 1), h && (u = Vi(a), h && (o.style[r.op.p] = u[r.op.p] - r.op.m - o._offset + ne));
  }
  return l && T && (g = Vi(T), l.seek(d), w = Vi(T), l._caScrollDist = g[r.p] - w[r.p], t = t / l._caScrollDist * d), l && l.seek(p), l ? t : Math.round(t);
}, zp = /(webkit|moz|length|cssText|inset)/i, zc = function(t, i, e, r) {
  if (t.parentNode !== i) {
    var n = t.style, o, a;
    if (i === Et) {
      t._stOrig = n.cssText, a = mi(t);
      for (o in a)
        !+o && !zp.test(o) && a[o] && typeof n[o] == "string" && o !== "0" && (n[o] = a[o]);
      n.top = e, n.left = r;
    } else
      n.cssText = t._stOrig;
    q.core.getCache(t).uncache = 1, i.appendChild(t);
  }
}, nh = function(t, i, e) {
  var r = i, n = r;
  return function(o) {
    var a = Math.round(t());
    return a !== r && a !== n && Math.abs(a - r) > 3 && Math.abs(a - n) > 3 && (o = a, e && e()), n = r, r = Math.round(o), r;
  };
}, Qs = function(t, i, e) {
  var r = {};
  r[i.p] = "+=" + e, q.set(t, r);
}, Yc = function(t, i) {
  var e = vr(t, i), r = "_scroll" + i.p2, n = function o(a, c, u, f, h) {
    var d = o.tween, l = c.onComplete, _ = {};
    u = u || e();
    var p = nh(e, u, function() {
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
  return t[r] = e, e.wheelHandler = function() {
    return n.tween && n.tween.kill() && (n.tween = 0);
  }, ce(t, "wheel", e.wheelHandler), ct.isTouch && ce(t, "touchmove", e.wheelHandler), n;
}, ct = /* @__PURE__ */ function() {
  function s(i, e) {
    rn || s.register(q) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), qa(this), this.init(i, e);
  }
  var t = s.prototype;
  return t.init = function(e, r) {
    if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !Hn) {
      this.update = this.refresh = this.kill = Li;
      return;
    }
    e = Rc(Je(e) || Un(e) || e.nodeType ? {
      trigger: e
    } : e, Gs);
    var n = e, o = n.onUpdate, a = n.toggleClass, c = n.id, u = n.onToggle, f = n.onRefresh, h = n.scrub, d = n.trigger, l = n.pin, _ = n.pinSpacing, p = n.invalidateOnRefresh, g = n.anticipatePin, w = n.onScrubComplete, T = n.onSnapComplete, x = n.once, b = n.snap, m = n.pinReparent, M = n.pinSpacer, E = n.containerAnimation, C = n.fastScrollEnd, D = n.preventOverlaps, P = e.horizontal || e.containerAnimation && e.horizontal !== !1 ? Ne : ae, B = !h && h !== 0, A = ze(e.scroller || pt), R = q.core.getCache(A), X = Wr(A), $ = ("pinType" in e ? e.pinType : pr(A, "pinType") || X && "fixed") === "fixed", V = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack], Y = B && e.toggleActions.split(" "), nt = "markers" in e ? e.markers : Gs.markers, st = X ? 0 : parseFloat(mi(A)["border" + P.p2 + kn]) || 0, v = this, G = e.onRefreshInit && function() {
      return e.onRefreshInit(v);
    }, H = Dp(A, X, P), ht = Op(A, X), J = 0, ot = 0, et = 0, wt = vr(A, P), at, It, Dt, xt, Ot, K, tt, it, Qt, k, St, ee, Fe, Ct, j, Ie, ui, qt, ie, kt, Pe, Be, Ge, xr, Vt, Ji, fi, xi, hi, ki, je, lt, Ke, zt, we, $e, Pi, Q, y;
    if (v._startClamp = v._endClamp = !1, v._dir = P, g *= 45, v.scroller = A, v.scroll = E ? E.time.bind(E) : wt, xt = wt(), v.vars = e, r = r || e.animation, "refreshPriority" in e && (Xf = 1, e.refreshPriority === -9999 && (fs = v)), R.tweenScroll = R.tweenScroll || {
      top: Yc(A, ae),
      left: Yc(A, Ne)
    }, v.tweenTo = at = R.tweenScroll[P.p], v.scrubDuration = function(L) {
      Ke = Un(L) && L, Ke ? lt ? lt.duration(L) : lt = q.to(r, {
        ease: "expo",
        totalProgress: "+=0",
        inherit: !1,
        duration: Ke,
        paused: !0,
        onComplete: function() {
          return w && w(v);
        }
      }) : (lt && lt.progress(1).kill(), lt = 0);
    }, r && (r.vars.lazy = !1, r._initted && !v.isReverted || r.vars.immediateRender !== !1 && e.immediateRender !== !1 && r.duration() && r.render(0, !0, !0), v.animation = r.pause(), r.scrollTrigger = v, v.scrubDuration(h), ki = 0, c || (c = r.vars.id)), b && ((!Mr(b) || b.push) && (b = {
      snapTo: b
    }), "scrollBehavior" in Et.style && q.set(X ? [Et, ei] : A, {
      scrollBehavior: "auto"
    }), _t.forEach(function(L) {
      return Ce(L) && L.target === (X ? Mt.scrollingElement || ei : A) && (L.smooth = !1);
    }), Dt = Ce(b.snapTo) ? b.snapTo : b.snapTo === "labels" ? Ap(r) : b.snapTo === "labelsDirectional" ? Rp(r) : b.directional !== !1 ? function(L, z) {
      return Wl(b.snapTo)(L, Te() - ot < 500 ? 0 : z.direction);
    } : q.utils.snap(b.snapTo), zt = b.duration || {
      min: 0.1,
      max: 2
    }, zt = Mr(zt) ? ss(zt.min, zt.max) : ss(zt, zt), we = q.delayedCall(b.delay || Ke / 2 || 0.1, function() {
      var L = wt(), z = Te() - ot < 500, N = at.tween;
      if ((z || Math.abs(v.getVelocity()) < 10) && !N && !zo && J !== L) {
        var W = (L - K) / Ct, rt = r && !B ? r.totalProgress() : W, U = z ? 0 : (rt - je) / (Te() - Vn) * 1e3 || 0, ft = q.utils.clamp(-W, 1 - W, Kr(U / 2) * U / 0.185), bt = W + (b.inertia === !1 ? 0 : ft), Tt, gt, mt = b, Pt = mt.onStart, ut = mt.onInterrupt, he = mt.onComplete;
        if (Tt = Dt(bt, v), Un(Tt) || (Tt = bt), gt = Math.max(0, Math.round(K + Tt * Ct)), L <= tt && L >= K && gt !== L) {
          if (N && !N._initted && N.data <= Kr(gt - L))
            return;
          b.inertia === !1 && (ft = Tt - W), at(gt, {
            duration: zt(Kr(Math.max(Kr(bt - rt), Kr(Tt - rt)) * 0.185 / U / 0.05 || 0)),
            ease: b.ease || "power3",
            data: Kr(gt - L),
            // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
            onInterrupt: function() {
              return we.restart(!0) && ut && jr(v, ut);
            },
            onComplete: function() {
              v.update(), J = wt(), r && !B && (lt ? lt.resetTo("totalProgress", Tt, r._tTime / r._tDur) : r.progress(Tt)), ki = je = r && !B ? r.totalProgress() : v.progress, T && T(v), he && jr(v, he);
            }
          }, L, ft * Ct, gt - L - ft * Ct), Pt && jr(v, Pt, at.tween);
        }
      } else v.isActive && J !== L && we.restart(!0);
    }).pause()), c && (Ga[c] = v), d = v.trigger = ze(d || l !== !0 && l), y = d && d._gsap && d._gsap.stRevert, y && (y = y(v)), l = l === !0 ? d : ze(l), Je(a) && (a = {
      targets: d,
      className: a
    }), l && (_ === !1 || _ === gi || (_ = !_ && l.parentNode && l.parentNode.style && mi(l.parentNode).display === "flex" ? !1 : Jt), v.pin = l, It = q.core.getCache(l), It.spacer ? j = It.pinState : (M && (M = ze(M), M && !M.nodeType && (M = M.current || M.nativeElement), It.spacerIsNative = !!M, M && (It.spacerState = Ks(M))), It.spacer = qt = M || Mt.createElement("div"), qt.classList.add("pin-spacer"), c && qt.classList.add("pin-spacer-" + c), It.pinState = j = Ks(l)), e.force3D !== !1 && q.set(l, {
      force3D: !0
    }), v.spacer = qt = It.spacer, hi = mi(l), xr = hi[_ + P.os2], kt = q.getProperty(l), Pe = q.quickSetter(l, P.a, ne), na(l, qt, hi), ui = Ks(l)), nt) {
      ee = Mr(nt) ? Rc(nt, Nc) : Nc, k = js("scroller-start", c, A, P, ee, 0), St = js("scroller-end", c, A, P, ee, 0, k), ie = k["offset" + P.op.d2];
      var F = ze(pr(A, "content") || A);
      it = this.markerStart = js("start", c, F, P, ee, ie, 0, E), Qt = this.markerEnd = js("end", c, F, P, ee, ie, 0, E), E && (Q = q.quickSetter([it, Qt], P.a, ne)), !$ && !(Bi.length && pr(A, "fixedMarkers") === !0) && (Lp(X ? Et : A), q.set([k, St], {
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
      var N = L !== !1 || !v.enabled, W = Se;
      N !== v.isReverted && (N && ($e = Math.max(wt(), v.scroll.rec || 0), et = v.progress, Pi = r && r.progress()), it && [it, Qt, k, St].forEach(function(rt) {
        return rt.style.display = N ? "none" : "block";
      }), N && (Se = v, v.update(N)), l && (!m || !v.isActive) && (N ? Ip(l, qt, j) : na(l, qt, mi(l), Vt)), N || v.update(N), Se = W, v.isReverted = N);
    }, v.refresh = function(L, z, N, W) {
      if (!((Se || !v.enabled) && !z)) {
        if (l && L && wi) {
          ce(s, "scrollEnd", Jf);
          return;
        }
        !Re && G && G(v), Se = v, at.tween && !N && (at.tween.kill(), at.tween = 0), lt && lt.pause(), p && r && (r.revert({
          kill: !1
        }).invalidate(), r.getChildren ? r.getChildren(!0, !0, !1).forEach(function(tr) {
          return tr.vars.immediateRender && tr.render(0, !0, !0);
        }) : r.vars.immediateRender && r.render(0, !0, !0)), v.isReverted || v.revert(!0, !0), v._subPinOffset = !1;
        var rt = H(), U = ht(), ft = E ? E.duration() : Ii(A, P), bt = Ct <= 0.01 || !Ct, Tt = 0, gt = W || 0, mt = Mr(N) ? N.end : e.end, Pt = e.endTrigger || d, ut = Mr(N) ? N.start : e.start || (e.start === 0 || !d ? 0 : l ? "0 0" : "0 100%"), he = v.pinnedContainer = e.pinnedContainer && ze(e.pinnedContainer, v), Bt = d && Math.max(0, dt.indexOf(v)) || 0, de = Bt, pe, xe, br, Bs, be, re, Mi, Ho, lc, Rn, Di, Nn, $s;
        for (nt && Mr(N) && (Nn = q.getProperty(k, P.p), $s = q.getProperty(St, P.p)); de-- > 0; )
          re = dt[de], re.end || re.refresh(0, 1) || (Se = v), Mi = re.pin, Mi && (Mi === d || Mi === l || Mi === he) && !re.isReverted && (Rn || (Rn = []), Rn.unshift(re), re.revert(!0, !0)), re !== dt[de] && (Bt--, de--);
        for (Ce(ut) && (ut = ut(v)), ut = Dc(ut, "start", v), K = $c(ut, d, rt, P, wt(), it, k, v, U, st, $, ft, E, v._startClamp && "_startClamp") || (l ? -1e-3 : 0), Ce(mt) && (mt = mt(v)), Je(mt) && !mt.indexOf("+=") && (~mt.indexOf(" ") ? mt = (Je(ut) ? ut.split(" ")[0] : "") + mt : (Tt = ao(mt.substr(2), rt), mt = Je(ut) ? ut : (E ? q.utils.mapRange(0, E.duration(), E.scrollTrigger.start, E.scrollTrigger.end, K) : K) + Tt, Pt = d)), mt = Dc(mt, "end", v), tt = Math.max(K, $c(mt || (Pt ? "100% 0" : ft), Pt, rt, P, wt() + Tt, Qt, St, v, U, st, $, ft, E, v._endClamp && "_endClamp")) || -1e-3, Tt = 0, de = Bt; de--; )
          re = dt[de] || {}, Mi = re.pin, Mi && re.start - re._pinPush <= K && !E && re.end > 0 && (pe = re.end - (v._startClamp ? Math.max(0, re.start) : re.start), (Mi === d && re.start - re._pinPush < K || Mi === he) && isNaN(ut) && (Tt += pe * (1 - re.progress)), Mi === l && (gt += pe));
        if (K += Tt, tt += Tt, v._startClamp && (v._startClamp += Tt), v._endClamp && !Re && (v._endClamp = tt || -1e-3, tt = Math.min(tt, Ii(A, P))), Ct = tt - K || (K -= 0.01) && 1e-3, bt && (et = q.utils.clamp(0, 1, q.utils.normalize(K, tt, $e))), v._pinPush = gt, it && Tt && (pe = {}, pe[P.a] = "+=" + Tt, he && (pe[P.p] = "-=" + wt()), q.set([it, Qt], pe)), l && !(Ua && v.end >= Ii(A, P)))
          pe = mi(l), Bs = P === ae, br = wt(), Be = parseFloat(kt(P.a)) + gt, !ft && tt > 1 && (Di = (X ? Mt.scrollingElement || ei : A).style, Di = {
            style: Di,
            value: Di["overflow" + P.a.toUpperCase()]
          }, X && mi(Et)["overflow" + P.a.toUpperCase()] !== "scroll" && (Di.style["overflow" + P.a.toUpperCase()] = "scroll")), na(l, qt, pe), ui = Ks(l), xe = Vi(l, !0), Ho = $ && vr(A, Bs ? Ne : ae)(), _ ? (Vt = [_ + P.os2, Ct + gt + ne], Vt.t = qt, de = _ === Jt ? Co(l, P) + Ct + gt : 0, de && (Vt.push(P.d, de + ne), qt.style.flexBasis !== "auto" && (qt.style.flexBasis = de + ne)), mn(Vt), he && dt.forEach(function(tr) {
            tr.pin === he && tr.vars.pinSpacing !== !1 && (tr._subPinOffset = !0);
          }), $ && wt($e)) : (de = Co(l, P), de && qt.style.flexBasis !== "auto" && (qt.style.flexBasis = de + ne)), $ && (be = {
            top: xe.top + (Bs ? br - K : Ho) + ne,
            left: xe.left + (Bs ? Ho : br - K) + ne,
            boxSizing: "border-box",
            position: "fixed"
          }, be[Ir] = be["max" + kn] = Math.ceil(xe.width) + ne, be[Br] = be["max" + Xl] = Math.ceil(xe.height) + ne, be[gi] = be[gi + cs] = be[gi + as] = be[gi + us] = be[gi + ls] = "0", be[Jt] = pe[Jt], be[Jt + cs] = pe[Jt + cs], be[Jt + as] = pe[Jt + as], be[Jt + us] = pe[Jt + us], be[Jt + ls] = pe[Jt + ls], Ie = $p(j, be, m), Re && wt(0)), r ? (lc = r._initted, ta(1), r.render(r.duration(), !0, !0), Ge = kt(P.a) - Be + Ct + gt, fi = Math.abs(Ct - Ge) > 1, $ && fi && Ie.splice(Ie.length - 2, 2), r.render(0, !0, !0), lc || r.invalidate(!0), r.parent || r.totalTime(r.totalTime()), ta(0)) : Ge = Ct, Di && (Di.value ? Di.style["overflow" + P.a.toUpperCase()] = Di.value : Di.style.removeProperty("overflow-" + P.a));
        else if (d && wt() && !E)
          for (xe = d.parentNode; xe && xe !== Et; )
            xe._pinOffset && (K -= xe._pinOffset, tt -= xe._pinOffset), xe = xe.parentNode;
        Rn && Rn.forEach(function(tr) {
          return tr.revert(!1, !0);
        }), v.start = K, v.end = tt, xt = Ot = Re ? $e : wt(), !E && !Re && (xt < $e && wt($e), v.scroll.rec = 0), v.revert(!1, !0), ot = Te(), we && (J = -1, we.restart(!0)), Se = 0, r && B && (r._initted || Pi) && r.progress() !== Pi && r.progress(Pi || 0, !0).render(r.time(), !0, !0), (bt || et !== v.progress || E || p || r && !r._initted) && (r && !B && (r._initted || et || r.vars.immediateRender !== !1) && r.totalProgress(E && K < -1e-3 && !et ? q.utils.normalize(K, tt, 0) : et, !0), v.progress = bt || (xt - K) / Ct === et ? 0 : et), l && _ && (qt._pinOffset = Math.round(v.progress * Ge)), lt && lt.invalidate(), isNaN(Nn) || (Nn -= q.getProperty(k, P.p), $s -= q.getProperty(St, P.p), Qs(k, P, Nn), Qs(it, P, Nn - (W || 0)), Qs(St, P, $s), Qs(Qt, P, $s - (W || 0))), bt && !Re && v.update(), f && !Re && !Fe && (Fe = !0, f(v), Fe = !1);
      }
    }, v.getVelocity = function() {
      return (wt() - Ot) / (Te() - Vn) * 1e3 || 0;
    }, v.endAnimation = function() {
      Bn(v.callbackAnimation), r && (lt ? lt.progress(1) : r.paused() ? B || Bn(r, v.direction < 0, 1) : Bn(r, r.reversed()));
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
        var W = Re === !0 ? $e : v.scroll(), rt = L ? 0 : (W - K) / Ct, U = rt < 0 ? 0 : rt > 1 ? 1 : rt || 0, ft = v.progress, bt, Tt, gt, mt, Pt, ut, he, Bt;
        if (z && (Ot = xt, xt = E ? wt() : W, b && (je = ki, ki = r && !B ? r.totalProgress() : U)), g && l && !Se && !Vs && wi && (!U && K < W + (W - Ot) / (Te() - Vn) * g ? U = 1e-4 : U === 1 && tt > W + (W - Ot) / (Te() - Vn) * g && (U = 0.9999)), U !== ft && v.enabled) {
          if (bt = v.isActive = !!U && U < 1, Tt = !!ft && ft < 1, ut = bt !== Tt, Pt = ut || !!U != !!ft, v.direction = U > ft ? 1 : -1, v.progress = U, Pt && !Se && (gt = U && !ft ? 0 : U === 1 ? 1 : ft === 1 ? 2 : 3, B && (mt = !ut && Y[gt + 1] !== "none" && Y[gt + 1] || Y[gt], Bt = r && (mt === "complete" || mt === "reset" || mt in r))), D && (ut || Bt) && (Bt || h || !r) && (Ce(D) ? D(v) : v.getTrailing(D).forEach(function(br) {
            return br.endAnimation();
          })), B || (lt && !Se && !Vs ? (lt._dp._time - lt._start !== lt._time && lt.render(lt._dp._time - lt._start), lt.resetTo ? lt.resetTo("totalProgress", U, r._tTime / r._tDur) : (lt.vars.totalProgress = U, lt.invalidate().restart())) : r && r.totalProgress(U, !!(Se && (ot || L)))), l) {
            if (L && _ && (qt.style[_ + P.os2] = xr), !$)
              Pe(qn(Be + Ge * U));
            else if (Pt) {
              if (he = !L && U > ft && tt + 1 > W && W + 1 >= Ii(A, P), m)
                if (!L && (bt || he)) {
                  var de = Vi(l, !0), pe = W - K;
                  zc(l, Et, de.top + (P === ae ? pe : 0) + ne, de.left + (P === ae ? 0 : pe) + ne);
                } else
                  zc(l, qt);
              mn(bt || he ? Ie : ui), fi && U < 1 && bt || Pe(Be + (U === 1 && !he ? Ge : 0));
            }
          }
          b && !at.tween && !Se && !Vs && we.restart(!0), a && (ut || x && U && (U < 1 || !ea)) && Ps(a.targets).forEach(function(br) {
            return br.classList[bt || x ? "add" : "remove"](a.className);
          }), o && !B && !L && o(v), Pt && !Se ? (B && (Bt && (mt === "complete" ? r.pause().totalProgress(1) : mt === "reset" ? r.restart(!0).pause() : mt === "restart" ? r.restart(!0) : r[mt]()), o && o(v)), (ut || !ea) && (u && ut && jr(v, u), V[gt] && jr(v, V[gt]), x && (U === 1 ? v.kill(!1, 1) : V[gt] = 0), ut || (gt = U === 1 ? 1 : 3, V[gt] && jr(v, V[gt]))), C && !bt && Math.abs(v.getVelocity()) > (Un(C) ? C : 2500) && (Bn(v.callbackAnimation), lt ? lt.progress(1) : Bn(r, mt === "reverse" ? 1 : !U, 1))) : B && o && !Se && o(v);
        }
        if (xi) {
          var xe = E ? W / E.duration() * (E._caScrollDist || 0) : W;
          Ji(xe + (k._isFlipped ? 1 : 0)), xi(xe);
        }
        Q && Q(-W / E.duration() * (E._caScrollDist || 0));
      }
    }, v.enable = function(L, z) {
      v.enabled || (v.enabled = !0, ce(A, "resize", Gn), X || ce(A, "scroll", Qr), G && ce(s, "refreshInit", G), L !== !1 && (v.progress = et = 0, xt = Ot = J = wt()), z !== !1 && v.refresh());
    }, v.getTween = function(L) {
      return L && at ? at.tween : lt;
    }, v.setPositions = function(L, z, N, W) {
      if (E) {
        var rt = E.scrollTrigger, U = E.duration(), ft = rt.end - rt.start;
        L = rt.start + ft * L / U, z = rt.start + ft * z / U;
      }
      v.refresh(!1, !1, {
        start: Oc(L, N && !!v._startClamp),
        end: Oc(z, N && !!v._endClamp)
      }, W), v.update();
    }, v.adjustPinSpacing = function(L) {
      if (Vt && L) {
        var z = Vt.indexOf(P.d) + 1;
        Vt[z] = parseFloat(Vt[z]) + L + ne, Vt[1] = parseFloat(Vt[1]) + L + ne, mn(Vt);
      }
    }, v.disable = function(L, z) {
      if (L !== !1 && v.revert(!0, !0), v.enabled && (v.enabled = v.isActive = !1, z || lt && lt.pause(), $e = 0, It && (It.uncache = 1), G && le(s, "refreshInit", G), we && (we.pause(), at.tween && at.tween.kill() && (at.tween = 0)), !X)) {
        for (var N = dt.length; N--; )
          if (dt[N].scroller === A && dt[N] !== v)
            return;
        le(A, "resize", Gn), X || le(A, "scroll", Qr);
      }
    }, v.kill = function(L, z) {
      v.disable(L, z), lt && !z && lt.kill(), c && delete Ga[c];
      var N = dt.indexOf(v);
      N >= 0 && dt.splice(N, 1), N === Ae && co > 0 && Ae--, N = 0, dt.forEach(function(W) {
        return W.scroller === v.scroller && (N = 1);
      }), N || Re || (v.scroll.rec = 0), r && (r.scrollTrigger = null, L && r.revert({
        kill: !1
      }), z || r.kill()), it && [it, Qt, k, St].forEach(function(W) {
        return W.parentNode && W.parentNode.removeChild(W);
      }), fs === v && (fs = 0), l && (It && (It.uncache = 1), N = 0, dt.forEach(function(W) {
        return W.pin === l && N++;
      }), N || (It.spacer = 0)), e.onKill && e.onKill(v);
    }, dt.push(v), v.enable(!1, !1), y && y(v), r && r.add && !Ct) {
      var I = v.update;
      v.update = function() {
        v.update = I, _t.cache++, K || tt || v.refresh();
      }, q.delayedCall(0.01, v.update), Ct = 0.01, K = tt = 0;
    } else
      v.refresh();
    l && Fp();
  }, s.register = function(e) {
    return rn || (q = e || Uf(), qf() && window.document && s.enable(), rn = Hn), rn;
  }, s.defaults = function(e) {
    if (e)
      for (var r in e)
        Gs[r] = e[r];
    return Gs;
  }, s.disable = function(e, r) {
    Hn = 0, dt.forEach(function(o) {
      return o[r ? "kill" : "disable"](e);
    }), le(pt, "wheel", Qr), le(Mt, "scroll", Qr), clearInterval(Ws), le(Mt, "touchcancel", Li), le(Et, "touchstart", Li), qs(le, Mt, "pointerdown,touchstart,mousedown", Lc), qs(le, Mt, "pointerup,touchend,mouseup", Ac), Eo.kill(), Hs(le);
    for (var n = 0; n < _t.length; n += 3)
      Us(le, _t[n], _t[n + 1]), Us(le, _t[n], _t[n + 2]);
  }, s.enable = function() {
    if (pt = window, Mt = document, ei = Mt.documentElement, Et = Mt.body, q) {
      if (Ps = q.utils.toArray, ss = q.utils.clamp, qa = q.core.context || Li, ta = q.core.suppressOverwrites || Li, Bl = pt.history.scrollRestoration || "auto", ja = pt.pageYOffset || 0, q.core.globals("ScrollTrigger", s), Et) {
        Hn = 1, gn = document.createElement("div"), gn.style.height = "100vh", gn.style.position = "absolute", rh(), Mp(), jt.register(q), s.isTouch = jt.isTouch, rr = jt.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Ha = jt.isTouch === 1, ce(pt, "wheel", Qr), Il = [pt, Mt, ei, Et], q.matchMedia ? (s.matchMedia = function(f) {
          var h = q.matchMedia(), d;
          for (d in f)
            h.add(d, f[d]);
          return h;
        }, q.addEventListener("matchMediaInit", function() {
          eh(), Vl();
        }), q.addEventListener("matchMediaRevert", function() {
          return th();
        }), q.addEventListener("matchMedia", function() {
          Lr(0, 1), Hr("matchMedia");
        }), q.matchMedia().add("(orientation: portrait)", function() {
          return ra(), ra;
        })) : console.warn("Requires GSAP 3.11.0 or later"), ra(), ce(Mt, "scroll", Qr);
        var e = Et.hasAttribute("style"), r = Et.style, n = r.borderTopStyle, o = q.core.Animation.prototype, a, c;
        for (o.revert || Object.defineProperty(o, "revert", {
          value: function() {
            return this.time(-0.01, !0);
          }
        }), r.borderTopStyle = "solid", a = Vi(Et), ae.m = Math.round(a.top + ae.sc()) || 0, Ne.m = Math.round(a.left + Ne.sc()) || 0, n ? r.borderTopStyle = n : r.removeProperty("border-top-style"), e || (Et.setAttribute("style", ""), Et.removeAttribute("style")), Ws = setInterval(Fc, 250), q.delayedCall(0.5, function() {
          return Vs = 0;
        }), ce(Mt, "touchcancel", Li), ce(Et, "touchstart", Li), qs(ce, Mt, "pointerdown,touchstart,mousedown", Lc), qs(ce, Mt, "pointerup,touchend,mouseup", Ac), Va = q.utils.checkPrefix("transform"), uo.push(Va), rn = Te(), Eo = q.delayedCall(0.2, Lr).pause(), nn = [Mt, "visibilitychange", function() {
          var f = pt.innerWidth, h = pt.innerHeight;
          Mt.hidden ? (Pc = f, Mc = h) : (Pc !== f || Mc !== h) && Gn();
        }, Mt, "DOMContentLoaded", Lr, pt, "load", Lr, pt, "resize", Gn], Hs(ce), dt.forEach(function(f) {
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
  }, s.config = function(e) {
    "limitCallbacks" in e && (ea = !!e.limitCallbacks);
    var r = e.syncInterval;
    r && clearInterval(Ws) || (Ws = r) && setInterval(Fc, r), "ignoreMobileResize" in e && (Ha = s.isTouch === 1 && e.ignoreMobileResize), "autoRefreshEvents" in e && (Hs(le) || Hs(ce, e.autoRefreshEvents || "none"), Wf = (e.autoRefreshEvents + "").indexOf("resize") === -1);
  }, s.scrollerProxy = function(e, r) {
    var n = ze(e), o = _t.indexOf(n), a = Wr(n);
    ~o && _t.splice(o, a ? 6 : 2), r && (a ? Bi.unshift(pt, r, Et, r, ei, r) : Bi.unshift(n, r));
  }, s.clearMatchMedia = function(e) {
    dt.forEach(function(r) {
      return r._ctx && r._ctx.query === e && r._ctx.kill(!0, !0);
    });
  }, s.isInViewport = function(e, r, n) {
    var o = (Je(e) ? ze(e) : e).getBoundingClientRect(), a = o[n ? Ir : Br] * r || 0;
    return n ? o.right - a > 0 && o.left + a < pt.innerWidth : o.bottom - a > 0 && o.top + a < pt.innerHeight;
  }, s.positionInViewport = function(e, r, n) {
    Je(e) && (e = ze(e));
    var o = e.getBoundingClientRect(), a = o[n ? Ir : Br], c = r == null ? a / 2 : r in ko ? ko[r] * a : ~r.indexOf("%") ? parseFloat(r) * a / 100 : parseFloat(r) || 0;
    return n ? (o.left + c) / pt.innerWidth : (o.top + c) / pt.innerHeight;
  }, s.killAll = function(e) {
    if (dt.slice(0).forEach(function(n) {
      return n.vars.id !== "ScrollSmoother" && n.kill();
    }), e !== !0) {
      var r = Vr.killAll || [];
      Vr = {}, r.forEach(function(n) {
        return n();
      });
    }
  }, s;
}();
ct.version = "3.15.0";
ct.saveStyles = function(s) {
  return s ? Ps(s).forEach(function(t) {
    if (t && t.style) {
      var i = Ze.indexOf(t);
      i >= 0 && Ze.splice(i, 5), Ze.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), q.core.getCache(t), qa());
    }
  }) : Ze;
};
ct.revert = function(s, t) {
  return Vl(!s, t);
};
ct.create = function(s, t) {
  return new ct(s, t);
};
ct.refresh = function(s) {
  return s ? Gn(!0) : (rn || ct.register()) && Lr(!0);
};
ct.update = function(s) {
  return ++_t.cache && ji(s === !0 ? 2 : 0);
};
ct.clearScrollMemory = ih;
ct.maxScroll = function(s, t) {
  return Ii(s, t ? Ne : ae);
};
ct.getScrollFunc = function(s, t) {
  return vr(ze(s), t ? Ne : ae);
};
ct.getById = function(s) {
  return Ga[s];
};
ct.getAll = function() {
  return dt.filter(function(s) {
    return s.vars.id !== "ScrollSmoother";
  });
};
ct.isScrolling = function() {
  return !!wi;
};
ct.snapDirectional = Wl;
ct.addEventListener = function(s, t) {
  var i = Vr[s] || (Vr[s] = []);
  ~i.indexOf(t) || i.push(t);
};
ct.removeEventListener = function(s, t) {
  var i = Vr[s], e = i && i.indexOf(t);
  e >= 0 && i.splice(e, 1);
};
ct.batch = function(s, t) {
  var i = [], e = {}, r = t.interval || 0.016, n = t.batchMax || 1e9, o = function(u, f) {
    var h = [], d = [], l = q.delayedCall(r, function() {
      f(h, d), h = [], d = [];
    }).pause();
    return function(_) {
      h.length || l.restart(!0), h.push(_.trigger), d.push(_), n <= h.length && l.progress(1);
    };
  }, a;
  for (a in t)
    e[a] = a.substr(0, 2) === "on" && Ce(t[a]) && a !== "onRefreshInit" ? o(a, t[a]) : t[a];
  return Ce(n) && (n = n(), ce(ct, "refresh", function() {
    return n = t.batchMax();
  })), Ps(s).forEach(function(c) {
    var u = {};
    for (a in e)
      u[a] = e[a];
    u.trigger = c, i.push(ct.create(u));
  }), i;
};
var Xc = function(t, i, e, r) {
  return i > r ? t(r) : i < 0 && t(0), e > r ? (r - i) / (e - i) : e < 0 ? i / (i - e) : 1;
}, sa = function s(t, i) {
  i === !0 ? t.style.removeProperty("touch-action") : t.style.touchAction = i === !0 ? "auto" : i ? "pan-" + i + (jt.isTouch ? " pinch-zoom" : "") : "none", t === ei && s(Et, i);
}, Zs = {
  auto: 1,
  scroll: 1
}, Yp = function(t) {
  var i = t.event, e = t.target, r = t.axis, n = (i.changedTouches ? i.changedTouches[0] : i).target, o = n._gsap || q.core.getCache(n), a = Te(), c;
  if (!o._isScrollT || a - o._isScrollT > 2e3) {
    for (; n && n !== Et && (n.scrollHeight <= n.clientHeight && n.scrollWidth <= n.clientWidth || !(Zs[(c = mi(n)).overflowY] || Zs[c.overflowX])); )
      n = n.parentNode;
    o._isScroll = n && n !== e && !Wr(n) && (Zs[(c = mi(n)).overflowY] || Zs[c.overflowX]), o._isScrollT = a;
  }
  (o._isScroll || r === "x") && (i.stopPropagation(), i._gsapAllow = !0);
}, sh = function(t, i, e, r) {
  return jt.create({
    target: t,
    capture: !0,
    debounce: !1,
    lockAxis: !0,
    type: i,
    onWheel: r = r && Yp,
    onPress: r,
    onDrag: r,
    onScroll: r,
    onEnable: function() {
      return e && ce(Mt, jt.eventTypes[0], Vc, !1, !0);
    },
    onDisable: function() {
      return le(Mt, jt.eventTypes[0], Vc, !0);
    }
  });
}, Xp = /(input|label|select|textarea)/i, Wc, Vc = function(t) {
  var i = Xp.test(t.target.tagName);
  (i || Wc) && (t._gsapAllow = !0, Wc = i);
}, Wp = function(t) {
  Mr(t) || (t = {}), t.preventDefault = t.isNormalizer = t.allowClicks = !0, t.type || (t.type = "wheel,touch"), t.debounce = !!t.debounce, t.id = t.id || "normalizer";
  var i = t, e = i.normalizeScrollX, r = i.momentum, n = i.allowNestedScroll, o = i.onRelease, a, c, u = ze(t.target) || ei, f = q.core.globals().ScrollSmoother, h = f && f.get(), d = rr && (t.content && ze(t.content) || h && t.content !== !1 && !h.smooth() && h.content()), l = vr(u, ae), _ = vr(u, Ne), p = 1, g = (jt.isTouch && pt.visualViewport ? pt.visualViewport.scale * pt.visualViewport.width : pt.outerWidth) / pt.innerWidth, w = 0, T = Ce(r) ? function() {
    return r(a);
  } : function() {
    return r || 2.8;
  }, x, b, m = sh(u, t.type, !0, n), M = function() {
    return b = !1;
  }, E = Li, C = Li, D = function() {
    c = Ii(u, ae), C = ss(rr ? 1 : 0, c), e && (E = ss(0, Ii(u, Ne))), x = $r;
  }, P = function() {
    d._gsap.y = qn(parseFloat(d._gsap.y) + l.offset) + "px", d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(d._gsap.y) + ", 0, 1)", l.offset = l.cacheID = 0;
  }, B = function() {
    if (b) {
      requestAnimationFrame(M);
      var nt = qn(a.deltaY / 2), st = C(l.v - nt);
      if (d && st !== l.v + l.offset) {
        l.offset = st - l.v;
        var v = qn((parseFloat(d && d._gsap.y) || 0) - l.offset);
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
    p = qn((pt.visualViewport && pt.visualViewport.scale || 1) / g), A.pause(), Y !== p && sa(u, p > 1.01 ? !0 : e ? !1 : "x"), R = _(), X = l(), D(), x = $r;
  }, t.onRelease = t.onGestureStart = function(Y, nt) {
    if (l.offset && P(), !nt)
      $.restart(!0);
    else {
      _t.cache++;
      var st = T(), v, G;
      e && (v = _(), G = v + st * 0.05 * -Y.velocityX / 0.227, st *= Xc(_, v, G, Ii(u, Ne)), A.vars.scrollX = E(G)), v = l(), G = v + st * 0.05 * -Y.velocityY / 0.227, st *= Xc(l, v, G, Ii(u, ae)), A.vars.scrollY = C(G), A.invalidate().duration(st).play(0.01), (rr && A.vars.scrollY >= c || v >= c - 1) && q.to({}, {
        onUpdate: V,
        duration: st
      });
    }
    o && o(Y);
  }, t.onWheel = function() {
    A._ts && A.pause(), Te() - w > 1e3 && (x = 0, w = Te());
  }, t.onChange = function(Y, nt, st, v, G) {
    if ($r !== x && D(), nt && e && _(E(v[2] === nt ? R + (Y.startX - Y.x) : _() + nt - v[1])), st) {
      l.offset && P();
      var H = G[2] === st, ht = H ? X + Y.startY - Y.y : l() + st - G[1], J = C(ht);
      H && ht !== J && (X += J - ht), l(J);
    }
    (st || nt) && ji();
  }, t.onEnable = function() {
    sa(u, e ? !1 : "x"), ct.addEventListener("refresh", V), ce(pt, "resize", V), l.smooth && (l.target.style.scrollBehavior = "auto", l.smooth = _.smooth = !1), m.enable();
  }, t.onDisable = function() {
    sa(u, !0), le(pt, "resize", V), ct.removeEventListener("refresh", V), m.kill();
  }, t.lockAxis = t.lockAxis !== !1, a = new jt(t), a.iOS = rr, rr && !l() && l(1), rr && q.ticker.add(Li), $ = a._dc, A = q.to(a, {
    ease: "power4",
    paused: !0,
    inherit: !1,
    scrollX: e ? "+=0.1" : "+=0",
    scrollY: "+=0.1",
    modifiers: {
      scrollY: nh(l, l(), function() {
        return A.pause();
      })
    },
    onUpdate: ji,
    onComplete: $.vars.onComplete
  }), a;
};
ct.sort = function(s) {
  if (Ce(s))
    return dt.sort(s);
  var t = pt.pageYOffset || 0;
  return ct.getAll().forEach(function(i) {
    return i._sortY = i.trigger ? t + i.trigger.getBoundingClientRect().top : i.start + pt.innerHeight;
  }), dt.sort(s || function(i, e) {
    return (i.vars.refreshPriority || 0) * -1e6 + (i.vars.containerAnimation ? 1e6 : i._sortY) - ((e.vars.containerAnimation ? 1e6 : e._sortY) + (e.vars.refreshPriority || 0) * -1e6);
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
  var t = s instanceof jt ? s : Wp(s);
  return Le && Le.target === t.target && Le.kill(), Wr(t.target) && (Le = t), t;
};
ct.core = {
  // smaller file size way to leverage in ScrollSmoother and Observer
  _getVelocityProp: Wa,
  _inputObserver: sh,
  _scrollers: _t,
  _proxies: Bi,
  bridge: {
    // when normalizeScroll sets the scroll position (ss = setScroll)
    ss: function() {
      wi || Hr("scrollStart"), wi = Te();
    },
    // a way to get the _refreshing value in Observer
    ref: function() {
      return Se;
    }
  }
};
Uf() && q.registerPlugin(ct);
var Hc = "1.3.26";
function oh(s, t, i) {
  return Math.max(s, Math.min(t, i));
}
function Vp(s, t, i) {
  return (1 - i) * s + i * t;
}
function Hp(s, t, i, e) {
  return Vp(s, t, 1 - Math.exp(-i * e));
}
function qp(s, t) {
  return (s % t + t) % t;
}
var Up = class {
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
      const i = oh(0, this.currentTime / this.duration, 1);
      t = i >= 1;
      const e = t ? 1 : this.easing(i);
      this.value = this.from + (this.to - this.from) * e;
    } else this.lerp ? (this.value = Hp(this.value, this.to, this.lerp * 60, s), Math.round(this.value) === Math.round(this.to) && (this.value = this.to, t = !0)) : (this.value = this.to, t = !0);
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
function Gp(s, t) {
  let i;
  return function(...e) {
    clearTimeout(i), i = setTimeout(() => {
      i = void 0, s.apply(this, e);
    }, t);
  };
}
var jp = class {
  constructor(s, t, { autoResize: i = !0, debounce: e = 250 } = {}) {
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
    this.wrapper = s, this.content = t, i && (this.debouncedResize = Gp(this.resize, e), this.wrapper instanceof Window ? window.addEventListener("resize", this.debouncedResize) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize();
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
}, ah = class {
  constructor() {
    Z(this, "events", {});
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
const Kp = 100 / 6, er = { passive: !1 };
function qc(s, t) {
  return s === 1 ? Kp : s === 2 ? t : 1;
}
var Qp = class {
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
    Z(this, "emitter", new ah());
    /**
    * Event handler for 'touchstart' event
    *
    * @param event Touch event
    */
    Z(this, "onTouchStart", (s) => {
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
    Z(this, "onTouchMove", (s) => {
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
    Z(this, "onTouchEnd", (s) => {
      this.emitter.emit("scroll", {
        deltaX: this.lastDelta.x,
        deltaY: this.lastDelta.y,
        event: s
      });
    });
    /** Event handler for 'wheel' event */
    Z(this, "onWheel", (s) => {
      let { deltaX: t, deltaY: i, deltaMode: e } = s;
      const r = qc(e, this.window.width), n = qc(e, this.window.height);
      t *= r, i *= n, t *= this.options.wheelMultiplier, i *= this.options.wheelMultiplier, this.emitter.emit("scroll", {
        deltaX: t,
        deltaY: i,
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
const Uc = (s) => Math.min(1, 1.001 - 2 ** (-10 * s));
var Zp = class {
  constructor({ wrapper: s = window, content: t = document.documentElement, eventsTarget: i = s, smoothWheel: e = !0, syncTouch: r = !1, syncTouchLerp: n = 0.075, touchInertiaExponent: o = 1.7, duration: a, easing: c, lerp: u = 0.1, infinite: f = !1, orientation: h = "vertical", gestureOrientation: d = h === "horizontal" ? "both" : "vertical", touchMultiplier: l = 1, wheelMultiplier: _ = 1, autoResize: p = !0, prevent: g, virtualScroll: w, overscroll: T = !0, autoRaf: x = !1, anchors: b = !1, autoToggle: m = !1, allowNestedScroll: M = !1, __experimental__naiveDimensions: E = !1, naiveDimensions: C = E, stopInertiaOnNavigate: D = !1, respectReducedMotion: P = !0 } = {}) {
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
    Z(this, "animate", new Up());
    Z(this, "emitter", new ah());
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
    Z(this, "onPointerDown", (s) => {
      s.button === 1 && this.reset();
    });
    Z(this, "onVirtualScroll", (s) => {
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
      let c = e.composedPath();
      c = c.slice(0, c.indexOf(this.rootElement));
      const u = this.options.prevent, f = Math.abs(t) >= Math.abs(i) ? "horizontal" : "vertical";
      if (c.find((_) => _ instanceof HTMLElement && (typeof u == "function" && u?.(_) || _.hasAttribute?.("data-lenis-prevent") || f === "vertical" && _.hasAttribute?.("data-lenis-prevent-vertical") || f === "horizontal" && _.hasAttribute?.("data-lenis-prevent-horizontal") || r && _.hasAttribute?.("data-lenis-prevent-touch") || n && _.hasAttribute?.("data-lenis-prevent-wheel") || this.options.allowNestedScroll && this.hasNestedScroll(_, {
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
      let h = i;
      this.options.gestureOrientation === "both" ? h = Math.abs(i) > Math.abs(t) ? i : t : this.options.gestureOrientation === "horizontal" && (h = t), (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && this.limit > 0 && (this.animatedScroll > 0 && this.animatedScroll < this.limit || this.animatedScroll === 0 && i > 0 || this.animatedScroll === this.limit && i < 0)) && (e.lenisStopPropagation = !0), e.cancelable && e.preventDefault();
      const d = r && this.options.syncTouch, l = r && e.type === "touchend";
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
    window.lenisVersion = Hc, window.lenis || (window.lenis = {}), window.lenis.version = Hc, h === "horizontal" && (window.lenis.horizontal = !0), r === !0 && (window.lenis.touch = !0), this.isIos = /(iPad|iPhone|iPod)/g.test(navigator.userAgent), (!s || s === document.documentElement) && (s = window), typeof a == "number" && typeof c != "function" ? c = Uc : typeof c == "function" && typeof a != "number" && (a = 1), this.options = {
      wrapper: s,
      content: t,
      eventsTarget: i,
      smoothWheel: e,
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
    }, this.dimensions = new jp(s, t, { autoResize: p }), this.updateClassName(), this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll), this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, { capture: !0 }), (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.addEventListener("click", this.onClick), this.options.wrapper.addEventListener("pointerdown", this.onPointerDown), this.virtualScroll = new Qp(i, {
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
    const i = s.targetTouches[0] ?? s.changedTouches[0];
    if (!i) return !1;
    const e = t.getRangeAt(0).getClientRects();
    if (e.length === 0) return !1;
    const r = e[0], n = e[e.length - 1], o = 40, a = Math.hypot(i.clientX - r.left, i.clientY - r.top) <= o, c = Math.hypot(i.clientX - n.right, i.clientY - n.bottom) <= o;
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
  scrollTo(s, { offset: t = 0, immediate: i = !1, lock: e = !1, programmatic: r = !0, lerp: n = r ? this.options.lerp : void 0, duration: o = r ? this.options.duration : void 0, easing: a = r ? this.options.easing : void 0, onStart: c, onComplete: u, force: f = !1, userData: h } = {}) {
    if (this.prefersReducedMotion && (r ? i = !0 : (n = 1, o = void 0, a = void 0)), (this.isStopped || this.isLocked) && !f) return;
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
      } else d = oh(0, d, this.limit);
      if (d === this.targetScroll) {
        c?.(this), u?.(this);
        return;
      }
      if (this.userData = h ?? {}, i) {
        this.animatedScroll = this.targetScroll = d, this.setScroll(this.scroll), this.reset(), this.preventNextNativeScrollEvent(), this.emit(), u?.(this), this.userData = {}, requestAnimationFrame(() => {
          this.dispatchScrollendEvent();
        });
        return;
      }
      r || (this.targetScroll = d), typeof o == "number" && typeof a != "function" ? a = Uc : typeof a == "function" && typeof o != "number" && (o = 1), this.animate.fromTo(this.animatedScroll, d, {
        duration: o,
        easing: a,
        lerp: n,
        onStart: () => {
          e && (this.isLocked = !0), this.isScrolling = "smooth", c?.(this);
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
    let n, o, a, c, u, f, h, d, l, _;
    if (e - (r.time ?? 0) > 2e3) {
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
    const p = Math.abs(t) >= Math.abs(i) ? "horizontal" : "vertical";
    let g, w, T, x, b, m;
    if (p === "horizontal")
      g = Math.round(s.scrollLeft), w = h - l, T = t, x = n, b = a, m = u;
    else if (p === "vertical")
      g = Math.round(s.scrollTop), w = d - _, T = i, x = o, b = c, m = f;
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
    return this.options.infinite ? qp(this.animatedScroll, this.limit) : this.animatedScroll;
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
const Kt = (s, t = document) => t.querySelector(s), Fs = (s, t = document) => [...t.querySelectorAll(s)], Gc = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function Jp(s) {
  const t = Kt("[data-facetas-panel]", s), i = Kt("[data-facetas-abrir]", s);
  if (!t || !i) return;
  let e = null;
  const r = () => {
    e = document.activeElement, t.classList.add("is-on"), i.setAttribute("aria-expanded", "true"), document.documentElement.style.overflow = "hidden", window.DropScentsLenis?.stop(), lh(s), Kt(".faceta > summary", t)?.focus();
  }, n = () => {
    t.classList.remove("is-on"), i.setAttribute("aria-expanded", "false"), document.documentElement.style.overflow = "", window.DropScentsLenis?.start(), e?.focus();
  };
  return i.addEventListener("click", () => {
    t.classList.contains("is-on") ? n() : r();
  }), Fs("[data-facetas-cerrar]", t).forEach((o) => o.addEventListener("click", n)), t.__cerrar = n, n;
}
typeof document < "u" && !document.__facetasEsc && (document.__facetasEsc = !0, document.addEventListener("keydown", (s) => {
  if (s.key !== "Escape") return;
  document.querySelector("[data-facetas-panel].is-on")?.__cerrar?.();
}));
function t_(s, t) {
  Fs("[data-precio]", s).forEach((i) => {
    const e = Kt('[data-precio-rango="min"]', i), r = Kt('[data-precio-rango="max"]', i), n = Kt('[data-precio-campo="min"]', i), o = Kt('[data-precio-campo="max"]', i), a = Number(i.dataset.tope) || 0;
    if (!e || !r) return;
    const c = () => {
      i.style.setProperty("--desde", e.value), i.style.setProperty("--hasta", r.value);
    }, u = (h) => {
      let d = Number(e.value), l = Number(r.value);
      d > l && (h === "min" ? l = d : d = l, e.value = String(d), r.value = String(l)), n && (n.value = d === 0 ? "" : String(d)), o && (o.value = l === a ? "" : String(l)), c();
    };
    e.addEventListener("input", () => u("min")), r.addEventListener("input", () => u("max")), e.addEventListener("change", t), r.addEventListener("change", t);
    const f = () => {
      const h = n.value === "" ? 0 : Math.max(0, Math.min(a, Number(n.value))), d = o.value === "" ? a : Math.max(0, Math.min(a, Number(o.value)));
      e.value = String(Math.min(h, d)), r.value = String(Math.max(h, d)), c();
    };
    [n, o].forEach((h) => {
      h && (h.addEventListener("input", f), h.addEventListener("change", t));
    }), u("init");
  });
}
let oa = 0;
async function ho(s, t, i) {
  const e = ++oa, r = Kt("[data-facetas-resultados]", i);
  if (!r) {
    window.location.href = s;
    return;
  }
  r.classList.add("facetas-cargando");
  try {
    const [n, o] = s.split("#"), a = n.includes("?") ? "&" : "?", c = await fetch(`${n}${a}section_id=${encodeURIComponent(t)}`);
    if (!c.ok) throw new Error(c.status);
    const u = await c.text();
    if (e !== oa) return;
    const f = new DOMParser().parseFromString(u, "text/html").querySelector("[data-facetas-resultados]");
    if (!f) throw new Error("la respuesta no trae resultados");
    const h = e_(i);
    r.innerHTML = f.innerHTML, history.pushState({ facetas: !0 }, "", s), ch(i), i_(i, h), h.abierto && lh(i);
    const d = Kt("[data-facetas-rejilla]", i) || r, l = window.scrollY + d.getBoundingClientRect().top - 140;
    l < window.scrollY && (window.DropScentsLenis ? window.DropScentsLenis.scrollTo(l, { duration: Gc ? 0 : 0.8 }) : window.scrollTo({ top: l, behavior: Gc ? "auto" : "smooth" })), o && (location.hash = o);
  } catch {
    window.location.href = s;
  } finally {
    e === oa && r.classList.remove("facetas-cargando");
  }
}
function e_(s) {
  const t = Kt("[data-facetas-panel]", s), i = Kt(".panel-filtros__cuerpo", s), e = document.activeElement;
  return {
    abierto: !!t?.classList.contains("is-on"),
    desplegadas: Fs(".faceta", s).map((r) => r.open),
    scroll: i ? i.scrollTop : 0,
    /* El foco se devuelve por nombre+valor, no por referencia: el elemento
       que tenia el foco ya no existe despues del reemplazo. */
    foco: e && s.contains(e) && e.name ? { name: e.name, value: e.value } : null
  };
}
function i_(s, t) {
  if (!t) return;
  const i = Kt("[data-facetas-panel]", s);
  t.abierto && i && (i.classList.add("is-on"), Kt("[data-facetas-abrir]", s)?.setAttribute("aria-expanded", "true")), Fs(".faceta", s).forEach((r, n) => {
    t.desplegadas[n] !== void 0 && (r.open = t.desplegadas[n]);
  });
  const e = Kt(".panel-filtros__cuerpo", s);
  e && (e.scrollTop = t.scroll), t.foco && (s.querySelector(
    `[name="${CSS.escape(t.foco.name)}"][value="${CSS.escape(t.foco.value)}"]`
  ) || s.querySelector(`[name="${CSS.escape(t.foco.name)}"]`))?.focus({ preventScroll: !0 });
}
function lh(s) {
  const t = Kt("[data-facetas-cuenta]", s)?.textContent.trim(), i = Kt('[data-facetas-form] button[type="submit"]', s);
  t && i && (i.textContent = t);
}
function aa(s) {
  const t = new FormData(s), i = new URLSearchParams();
  for (const [n, o] of t.entries())
    String(o).trim() !== "" && i.append(n, o);
  const e = s.getAttribute("action") || window.location.pathname, r = i.toString();
  return r ? `${e}?${r}` : e;
}
function ch(s) {
  const t = Kt("[data-facetas]", s), i = s.dataset.seccionId || t?.dataset.seccion;
  if (!i) return;
  const e = Jp(s), r = Kt("[data-facetas-form]", s), n = () => {
    r && ho(aa(r), i, s);
  };
  r && (r.addEventListener("change", (a) => {
    a.target.matches('input[type="checkbox"], input[type="number"]') && n();
  }), r.addEventListener("submit", (a) => {
    a.preventDefault(), n(), window.innerWidth < 900 && e?.();
  }), t_(r, n));
  const o = Kt("[data-facetas-orden]", s);
  o && (o.addEventListener("change", (a) => {
    a.preventDefault(), ho(aa(o), i, s);
  }), o.addEventListener("submit", (a) => {
    a.preventDefault(), ho(aa(o), i, s);
  })), s.addEventListener("click", r_);
}
function r_(s) {
  const t = s.target.closest("[data-facetas-enlace]");
  if (!t || s.metaKey || s.ctrlKey || s.shiftKey || t.target === "_blank") return;
  const i = t.closest("[data-seccion-id]");
  i && (s.preventDefault(), ho(t.href, i.dataset.seccionId, i));
}
function n_(s = document) {
  Fs("[data-seccion-id]", s).forEach((t) => {
    Kt("[data-facetas-resultados]", t) && ch(t);
  }), window.__facetasPop || (window.__facetasPop = !0, window.addEventListener("popstate", (t) => {
    (t.state?.facetas || Kt("[data-facetas-resultados]")) && window.location.reload();
  }));
}
const Hl = window.matchMedia("(prefers-reduced-motion: reduce)").matches, qe = (s, t = document) => t.querySelector(s), ue = (s, t = document) => [...t.querySelectorAll(s)], s_ = '[data-chatty-widget="trigger"], #Avada-FAQ_WidgetTrigger', o_ = ".Avada-Faqs_Button.opened, .Avada-Faqs_Button--opened";
function jc() {
  if (qe(o_)) return !0;
  const s = qe(s_);
  return s ? (s.click(), !0) : typeof window.ChattyJS?.openWidget == "function" ? (window.ChattyJS.openWidget(), !0) : typeof window.avadaFaqTrigger == "function" ? (window.avadaFaqTrigger(), !0) : !1;
}
function Kc() {
  return typeof window.DropScentsChat == "function" ? (window.DropScentsChat(), !0) : window.$crisp ? (window.$crisp.push(["do", "chat:open"]), !0) : window.Tawk_API?.maximize ? (window.Tawk_API.maximize(), !0) : window.tidioChatApi?.open ? (window.tidioChatApi.open(), !0) : window.Intercom ? (window.Intercom("show"), !0) : window.zE ? (window.zE("messenger", "open"), !0) : window.Shopify?.chat?.open ? (window.Shopify.chat.open(), !0) : !1;
}
function a_() {
  if (typeof window.DropScentsChat == "function") {
    window.DropScentsChat();
    return;
  }
  if (jc() || Kc()) return;
  let s = 0;
  const t = setInterval(() => {
    s += 1, (jc() || Kc() || s > 24) && (clearInterval(t), s > 24 && l_());
  }, 250);
}
let Qc = 0;
function l_() {
  const s = window.DropScentsTextos || {};
  let t = qe(".toast");
  if (!t) {
    t = document.createElement("div"), t.className = "toast", t.setAttribute("role", "status");
    const i = document.documentElement.dataset.instagram;
    if (t.textContent = s.chatFallo || "El chat no está respondiendo ahora mismo.", i) {
      const e = document.createElement("a");
      e.href = i, e.target = "_blank", e.rel = "noopener", e.textContent = s.chatInstagram || "Escríbenos por Instagram", t.append(" ", e);
    }
    document.body.appendChild(t);
  }
  requestAnimationFrame(() => t.classList.add("is-on")), clearTimeout(Qc), Qc = setTimeout(() => t.classList.remove("is-on"), 6e3);
}
function c_() {
  document.addEventListener("click", (s) => {
    s.target.closest("[data-chat]") && (s.preventDefault(), qe("#menu-lateral:not([hidden]) [data-drawer-cerrar]")?.click(), a_());
  });
}
function u_(s = document) {
  ue("[data-galeria]", s).forEach((t) => {
    const i = ue(".card__slide", t);
    if (i.length < 2) return;
    let e = 0;
    const r = (n) => {
      e = (n + i.length) % i.length, i.forEach((o, a) => o.classList.toggle("is-on", a === e));
    };
    ue("[data-galeria-paso]", t).forEach((n) => {
      n.addEventListener("click", (o) => {
        o.preventDefault(), o.stopPropagation(), r(e + Number(n.dataset.galeriaPaso));
      });
    });
  });
}
function f_() {
  const s = qe("#menu-lateral");
  if (!s) return;
  const t = qe(".drawer__panel", s), i = qe("[data-drawer-abrir]");
  let e = null;
  const r = () => ue('a[href], button:not([disabled]), select, input, [tabindex]:not([tabindex="-1"])', t).filter((a) => a.offsetParent !== null);
  function n() {
    e = document.activeElement, s.hidden = !1, requestAnimationFrame(() => s.classList.add("is-on")), i?.setAttribute("aria-expanded", "true"), document.documentElement.style.overflow = "hidden", window.DropScentsLenis?.stop(), r()[0]?.focus();
  }
  function o() {
    s.classList.remove("is-on"), i?.setAttribute("aria-expanded", "false"), document.documentElement.style.overflow = "", window.DropScentsLenis?.start();
    const a = () => {
      s.hidden = !0;
    };
    Hl ? a() : setTimeout(a, 420), e?.focus();
  }
  i?.addEventListener("click", n), ue("[data-drawer-cerrar]", s).forEach((a) => a.addEventListener("click", o)), ue("a", t).forEach((a) => a.addEventListener("click", o)), document.addEventListener("keydown", (a) => {
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
function h_(s = document) {
  ue("[data-carrusel]", s).forEach((t) => {
    const i = qe("[data-carrusel-pista]", t);
    if (!i) return;
    const e = ue("[data-carrusel-paso]", t), r = qe("[data-carrusel-progreso]", t), n = () => {
      const a = i.firstElementChild;
      if (!a) return i.clientWidth;
      const c = parseFloat(getComputedStyle(i).columnGap) || 0;
      return a.getBoundingClientRect().width + c;
    };
    e.forEach((a) => {
      a.addEventListener("click", () => {
        i.scrollBy({
          left: n() * Number(a.dataset.carruselPaso),
          behavior: Hl ? "auto" : "smooth"
        });
      });
    });
    function o() {
      const a = i.scrollWidth - i.clientWidth, c = i.scrollLeft;
      if (e.forEach((u) => {
        const f = Number(u.dataset.carruselPaso);
        u.disabled = f < 0 ? c <= 2 : c >= a - 2;
      }), r && a > 0) {
        const u = i.clientWidth / i.scrollWidth;
        r.style.width = `${Math.max(u * 100, 8)}%`, r.style.transform = `translateX(${c / a * (100 / Math.max(u, 0.08) - 100)}%)`;
      }
    }
    i.addEventListener("scroll", o, { passive: !0 }), window.addEventListener("resize", o), o();
  });
}
function d_(s = document) {
  Hl || window.matchMedia("(hover: hover) and (pointer: fine)").matches && ue("[data-indice]", s).forEach((t) => {
    const i = qe("[data-indice-vista]", t), e = ue("[data-indice-fila]", t);
    if (!i || !e.length) return;
    const r = ue(".indice__vista-img", i), n = i.parentElement, o = Rt.quickTo(i, "x", { duration: 0.5, ease: "power3.out" }), a = Rt.quickTo(i, "y", { duration: 0.5, ease: "power3.out" }), c = (u) => {
      const f = n.getBoundingClientRect(), h = u.clientX - f.left - i.offsetWidth / 2, d = u.clientY - f.top - i.offsetHeight / 2;
      o(Math.min(Math.max(h, 0), f.width - i.offsetWidth)), a(Math.min(Math.max(d, 0), f.height - i.offsetHeight));
    };
    e.forEach((u) => {
      u.addEventListener("pointerenter", (f) => {
        const h = Number(u.dataset.i);
        r.forEach((d, l) => d.classList.toggle("is-on", l === h)), i.classList.add("is-on"), c(f);
      }), u.addEventListener("pointermove", c);
    }), t.addEventListener("pointerleave", () => i.classList.remove("is-on"));
  });
}
function p_(s = document) {
  const t = qe("[data-pdp]", s);
  if (!t) return;
  const i = ue(".pdp__img", t), e = ue("[data-pdp-mini]", t), r = qe("[data-pdp-precio]", t), n = qe("[data-pdp-antes]", t), o = window.DropScentsTextos?.formatoDinero || "";
  function a(c) {
    c < 0 || c >= i.length || (i.forEach((u, f) => u.classList.toggle("is-on", f === c)), e.forEach((u, f) => u.classList.toggle("is-on", f === c)));
  }
  e.forEach((c) => c.addEventListener("click", () => a(Number(c.dataset.pdpMini)))), ue("[data-pdp-paso]", t).forEach((c) => {
    c.addEventListener("click", () => {
      const u = i.findIndex((h) => h.classList.contains("is-on")), f = u < 0 ? 0 : u;
      a((f + Number(c.dataset.pdpPaso) + i.length) % i.length);
    });
  }), ue(".pres input", t).forEach((c) => {
    c.addEventListener("change", () => {
      if (r && c.dataset.precio && (r.textContent = Zc(Number(c.dataset.precio), o)), n) {
        const f = Number(c.dataset.antes || 0), h = Number(c.dataset.precio || 0);
        f > h ? (n.textContent = Zc(f, o), n.hidden = !1) : n.hidden = !0;
      }
      const u = Number(c.dataset.imagen);
      !Number.isNaN(u) && u >= 0 && a(u);
    });
  });
}
function Zc(s, t) {
  const i = Number(s) / 100, e = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }), r = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });
  return t ? t.replace(/\{\{\s*(\w+)\s*\}\}/g, (n, o) => o.includes("no_decimals") ? r.format(Math.round(i)) : e.format(i)) : `$${e.format(i)}`;
}
function __(s = document) {
  ue(".cantidad", s).forEach((t) => {
    const i = qe(".cantidad__i", t);
    i && ue("[data-cantidad]", t).forEach((e) => {
      e.addEventListener("click", () => {
        const r = Number(i.min || 0), n = Math.max(r, (Number(i.value) || 0) + Number(e.dataset.cantidad));
        i.value = String(n), i.dispatchEvent(new Event("change", { bubbles: !0 }));
      });
    });
  });
}
function g_(s = document) {
  ue("[data-envia-al-cambiar]", s).forEach((t) => {
    t.closest("[data-facetas-orden]") || t.addEventListener("change", () => t.form?.submit());
  });
}
function uh(s = document) {
  n_(s), u_(s), h_(s), d_(s), p_(s), __(s), g_(s);
}
const m_ = (s, t = document) => t.querySelector(s), fh = (s, t = document) => [...t.querySelectorAll(s)], y_ = 80, Po = /* @__PURE__ */ new WeakMap();
function hh(s = document) {
  fh("[data-recorrido]", s).forEach((t) => {
    if (Po.has(t)) return;
    const i = m_("[data-carrusel-pista]", t), e = t.closest(".carrusel-sec");
    if (!i || !e) return;
    const r = Rt.matchMedia();
    Po.set(t, r), r.add("(min-width: 900px) and (prefers-reduced-motion: no-preference)", () => {
      const n = () => Math.max(i.scrollWidth - i.clientWidth, 0);
      if (n() < y_) return;
      e.classList.add("is-recorrido");
      const o = () => Math.round(
        parseFloat(getComputedStyle(document.body).paddingTop) || 0
      ), a = (u) => {
        i.scrollLeft = u.progress * n();
      }, c = ct.create({
        trigger: e,
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
        c.kill(), e.classList.remove("is-recorrido"), i.scrollLeft = 0;
      };
    });
  });
}
function v_(s = document) {
  fh("[data-recorrido]", s).forEach((t) => {
    const i = Po.get(t);
    i && (i.revert(), Po.delete(t));
  });
}
/*!
 * SplitText 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2026, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
 * @author: Jack Doyle
 */
let $n, zn, Jc = typeof Symbol == "function" ? Symbol() : "_split", Qa, w_ = () => Qa || ql.register(window.gsap), tu = typeof Intl < "u" && "Segmenter" in Intl ? new Intl.Segmenter() : 0, Ds = (s) => s ? typeof s == "string" ? Ds(document.querySelectorAll(s)) : "length" in s ? Array.from(s).reduce((t, i) => (typeof i == "string" ? t.push(...Ds(i)) : t.push(i), t), []) : [s] : [], eu = (s) => Ds(s).filter((t) => t && t.nodeType === 1), Za = [], la = function() {
}, x_ = { add: (s) => s() }, b_ = /\s+/g, iu = new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.", "gu"), Mo = { left: 0, top: 0, width: 0, height: 0 }, S_ = (s, t) => {
  for (; ++t < s.length && s[t] === Mo; )
    ;
  return s[t] || Mo;
}, ru = ({ element: s, html: t, ariaL: i, ariaH: e }) => {
  s.innerHTML = t, i ? s.setAttribute("aria-label", i) : s.removeAttribute("aria-label"), e ? s.setAttribute("aria-hidden", e) : s.removeAttribute("aria-hidden");
}, nu = (s, t) => {
  if (t) {
    let i = new Set(s.join("").match(t) || Za), e = s.length, r, n, o, a;
    if (i.size)
      for (; --e > -1; ) {
        n = s[e];
        for (o of i)
          if (o.startsWith(n) && o.length > n.length) {
            for (r = 0, a = n; o.startsWith(a += s[e + ++r]) && a.length < o.length; )
              ;
            if (r && a.length === o.length) {
              s[e] = o, s.splice(e + 1, r);
              break;
            }
          }
      }
  }
  return s;
}, su = (s) => window.getComputedStyle(s).display === "inline" && (s.style.display = "inline-block"), Zr = (s, t, i) => t.insertBefore(typeof s == "string" ? document.createTextNode(s) : s, i), Ja = (s, t, i) => {
  let e = t[s + "sClass"] || "", { tag: r = "div", aria: n = "auto", propIndex: o = !1 } = t, a = s === "line" ? "block" : "inline-block", c = e.indexOf("++") > -1, u = (f) => {
    let h = document.createElement(r), d = i.length + 1;
    return e && (h.className = e + (c ? " " + e + d : "")), o && h.style.setProperty("--" + s, d + ""), n !== "none" && h.setAttribute("aria-hidden", "true"), r !== "span" && (h.style.position = "relative", h.style.display = a), h.textContent = f, i.push(h), h;
  };
  return c && (e = e.replace("++", "")), u.collection = i, u;
}, T_ = (s, t, i, e) => {
  let r = Ja("line", i, e), n = window.getComputedStyle(s).textAlign || "left";
  return (o, a) => {
    let c = r("");
    for (c.style.textAlign = n, s.insertBefore(c, t[o]); o < a; o++)
      c.appendChild(t[o]);
    c.normalize();
  };
}, dh = (s, t, i, e, r, n, o, a, c, u) => {
  var f;
  let h = Array.from(s.childNodes), d = 0, { wordDelimiter: l, reduceWhiteSpace: _ = !0, prepareText: p } = t, g = s.getBoundingClientRect(), w = g, T = !_ && window.getComputedStyle(s).whiteSpace.substring(0, 3) === "pre", x = 0, b = i.collection, m, M, E, C, D, P, B, A, R, X, $, V, Y, nt, st, v, G, H;
  for (typeof l == "object" ? (E = l.delimiter || l, M = l.replaceWith || "") : M = l === "" ? "" : l || " ", m = M !== " "; d < h.length; d++)
    if (C = h[d], C.nodeType === 3) {
      for (st = C.textContent || "", _ ? st = st.replace(b_, " ") : T && (st = st.replace(/\n/g, M + `
`)), p && (st = p(st, s)), C.textContent = st, D = M || E ? st.split(E || M) : st.match(a) || Za, G = D[D.length - 1], A = m ? G.slice(-1) === " " : !G, G || D.pop(), w = g, B = m ? D[0].charAt(0) === " " : !D[0], B && Zr(" ", s, C), D[0] || D.shift(), nu(D, c), n && u || (C.textContent = ""), R = 1; R <= D.length; R++)
        if (v = D[R - 1], !_ && T && v.charAt(0) === `
` && ((f = C.previousSibling) == null || f.remove(), Zr(document.createElement("br"), s, C), v = v.slice(1)), !_ && v === "")
          Zr(M, s, C);
        else if (v === " ")
          s.insertBefore(document.createTextNode(" "), C);
        else {
          if (m && v.charAt(0) === " " && Zr(" ", s, C), x && R === 1 && !B && b.indexOf(x.parentNode) > -1 ? (P = b[b.length - 1], P.appendChild(document.createTextNode(e ? "" : v))) : (P = i(e ? "" : v), Zr(P, s, C), x && R === 1 && !B && P.insertBefore(x, P.firstChild)), e)
            for ($ = tu ? nu([...tu.segment(v)].map((ht) => ht.segment), c) : v.match(a) || Za, H = 0; H < $.length; H++)
              P.appendChild($[H] === " " ? document.createTextNode(" ") : e($[H]));
          if (n && u) {
            if (st = C.textContent = st.substring(v.length + 1, st.length), X = P.getBoundingClientRect(), X.top > w.top && X.left <= w.left) {
              for (V = s.cloneNode(), Y = s.childNodes[0]; Y && Y !== P; )
                nt = Y, Y = Y.nextSibling, V.appendChild(nt);
              s.parentNode.insertBefore(V, s), r && su(V);
            }
            w = X;
          }
          (R < D.length || A) && Zr(R >= D.length ? " " : m && v.slice(-1) === " " ? " " + M : M, s, C);
        }
      s.removeChild(C), x = 0;
    } else C.nodeType === 1 && (o && o.indexOf(C) > -1 ? (b.indexOf(C.previousSibling) > -1 && b[b.length - 1].appendChild(C), x = C) : (dh(C, t, i, e, r, n, o, a, c, !0), x = 0), r && su(C));
};
const ph = class _h {
  constructor(t, i) {
    this.isSplit = !1, w_(), this.elements = eu(t), this.chars = [], this.words = [], this.lines = [], this.masks = [], this.vars = i, this.elements.forEach((o) => {
      var a;
      i.overwrite !== !1 && ((a = o[Jc]) == null || a._data.orig.filter(({ element: c }) => c === o).forEach(ru)), o[Jc] = this;
    }), this._split = () => this.isSplit && this.split(this.vars);
    let e = [], r, n = () => {
      let o = e.length, a;
      for (; o--; ) {
        a = e[o];
        let c = a.element.offsetWidth;
        if (c !== a.width) {
          a.width = c, this._split();
          return;
        }
      }
    };
    this._data = { orig: e, obs: typeof ResizeObserver < "u" && new ResizeObserver(() => {
      clearTimeout(r), r = setTimeout(n, 200);
    }) }, la(this), this.split(i);
  }
  split(t) {
    return (this._ctx || x_).add(() => {
      this.isSplit && this.revert(), this.vars = t = t || this.vars || {};
      let { type: i = "chars,words,lines", aria: e = "auto", deepSlice: r = !0, smartWrap: n, onSplit: o, autoSplit: a = !1, specialChars: c, mask: u } = this.vars, f = i.indexOf("lines") > -1, h = i.indexOf("chars") > -1, d = i.indexOf("words") > -1, l = h && !d && !f, _ = c && ("push" in c ? new RegExp("(?:" + c.join("|") + ")", "gu") : c), p = _ ? new RegExp(_.source + "|" + iu.source, "gu") : iu, g = !!t.ignore && eu(t.ignore), { orig: w, animTime: T, obs: x } = this._data, b;
      (h || d || f) && (this.elements.forEach((m, M) => {
        w[M] = {
          element: m,
          html: m.innerHTML,
          ariaL: m.getAttribute("aria-label"),
          ariaH: m.getAttribute("aria-hidden")
        }, e === "auto" ? m.setAttribute("aria-label", (m.textContent || "").trim()) : e === "hidden" && m.setAttribute("aria-hidden", "true");
        let E = [], C = [], D = [], P = h ? Ja("char", t, E) : null, B = Ja("word", t, C), A, R, X, $;
        if (dh(m, t, B, P, l, r && (f || l), g, p, _, !1), f) {
          let V = Ds(m.childNodes), Y = T_(m, V, t, D), nt, st = [], v = 0, G = V.map((J) => J.nodeType === 1 ? J.getBoundingClientRect() : Mo), H = Mo, ht;
          for (A = 0; A < V.length; A++)
            nt = V[A], nt.nodeType === 1 && (nt.nodeName === "BR" ? ((!A || V[A - 1].nodeName !== "BR") && (st.push(nt), Y(v, A + 1)), v = A + 1, H = S_(G, A)) : (ht = G[A], A && ht.top > H.top && ht.left < H.left + H.width - 1 && (Y(v, A), v = A), H = ht));
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
      }))), this.isSplit = !0, zn && f && a && zn.addEventListener("loadingdone", this._split), (b = o && o(this)) && b.totalTime && (this._data.anim = T ? b.totalTime(T) : b), f && a && this.elements.forEach((m, M) => {
        w[M].width = m.offsetWidth, x && x.observe(m);
      });
    }), this;
  }
  kill() {
    let { obs: t } = this._data;
    t && t.disconnect(), zn?.removeEventListener("loadingdone", this._split);
  }
  revert() {
    var t, i;
    if (this.isSplit) {
      let { orig: e, anim: r } = this._data;
      this.kill(), e.forEach(ru), this.chars.length = this.words.length = this.lines.length = e.length = this.masks.length = 0, this.isSplit = !1, r && (this._data.animTime = r.totalTime(), r.revert()), (i = (t = this.vars).onRevert) == null || i.call(t, this);
    }
    return this;
  }
  static create(t, i) {
    return new _h(t, i);
  }
  static register(t) {
    $n = $n || t || window.gsap, $n && (Ds = $n.utils.toArray, la = $n.core.context || la), !Qa && window.innerWidth > 0 && (zn = document.fonts, Qa = !0);
  }
};
ph.version = "3.15.0";
let ql = ph;
/*!
 * matrix 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var qi, zr, Ul, Yo, jn, po, Do, hs, Ti = "transform", tl = Ti + "Origin", gh, Gl = function(t) {
  var i = t.ownerDocument || t;
  for (!(Ti in t.style) && ("msTransform" in t.style) && (Ti = "msTransform", tl = Ti + "Origin"); i.parentNode && (i = i.parentNode); )
    ;
  if (zr = window, Do = new Zi(), i) {
    qi = i, Ul = i.documentElement, Yo = i.body, hs = qi.createElementNS("http://www.w3.org/2000/svg", "g"), hs.style.transform = "none";
    var e = i.createElement("div"), r = i.createElement("div"), n = i && (i.body || i.firstElementChild);
    n && n.appendChild && (n.appendChild(e), e.appendChild(r), e.style.position = "static", e.style.transform = "translate3d(0,0,1px)", gh = r.offsetParent !== e, n.removeChild(e));
  }
  return i;
}, E_ = function(t) {
  for (var i, e; t && t !== Yo; )
    e = t._gsap, e && e.uncache && e.get(t, "x"), e && !e.scaleX && !e.scaleY && e.renderTransform && (e.scaleX = e.scaleY = 1e-4, e.renderTransform(1, e), i ? i.push(e) : i = [e]), t = t.parentNode;
  return i;
}, mh = [], yh = [], jl = function() {
  return zr.pageYOffset || qi.scrollTop || Ul.scrollTop || Yo.scrollTop || 0;
}, Kl = function() {
  return zr.pageXOffset || qi.scrollLeft || Ul.scrollLeft || Yo.scrollLeft || 0;
}, Ql = function(t) {
  return t.ownerSVGElement || ((t.tagName + "").toLowerCase() === "svg" ? t : null);
}, C_ = function s(t) {
  if (zr.getComputedStyle(t).position === "fixed")
    return !0;
  if (t = t.parentNode, t && t.nodeType === 1)
    return s(t);
}, ca = function s(t, i) {
  if (t.parentNode && (qi || Gl(t))) {
    var e = Ql(t), r = e ? e.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", n = e ? i ? "rect" : "g" : "div", o = i !== 2 ? 0 : 100, a = i === 3 ? 100 : 0, c = {
      position: "absolute",
      display: "block",
      pointerEvents: "none",
      margin: "0",
      padding: "0"
    }, u = qi.createElementNS ? qi.createElementNS(r.replace(/^https/, "http"), n) : qi.createElement(n);
    return i && (e ? (po || (po = s(t)), u.setAttribute("width", 0.01), u.setAttribute("height", 0.01), u.setAttribute("transform", "translate(" + o + "," + a + ")"), u.setAttribute("fill", "transparent"), po.appendChild(u)) : (jn || (jn = s(t), Object.assign(jn.style, c)), Object.assign(u.style, c, {
      width: "0.1px",
      height: "0.1px",
      top: a + "px",
      left: o + "px"
    }), jn.appendChild(u))), u;
  }
  throw "Need document and parent.";
}, k_ = function(t) {
  for (var i = new Zi(), e = 0; e < t.numberOfItems; e++)
    i.multiply(t.getItem(e).matrix);
  return i;
}, vh = function(t) {
  var i = t.getCTM(), e;
  return i || (e = t.style[Ti], t.style[Ti] = "none", t.appendChild(hs), i = hs.getCTM(), t.removeChild(hs), e ? t.style[Ti] = e : t.style.removeProperty(Ti.replace(/([A-Z])/g, "-$1").toLowerCase())), i || Do.clone();
}, P_ = function(t, i) {
  var e = Ql(t), r = t === e, n = e ? mh : yh, o = t.parentNode, a = o && !e && o.shadowRoot && o.shadowRoot.appendChild ? o.shadowRoot : o, c, u, f, h, d, l;
  if (t === zr)
    return t;
  if (n.length || n.push(ca(t, 1), ca(t, 2), ca(t, 3)), c = e ? po : jn, e)
    r ? (f = vh(t), h = -f.e / f.a, d = -f.f / f.d, u = Do) : t.getBBox ? (f = t.getBBox(), u = t.transform ? t.transform.baseVal : {}, u = u.numberOfItems ? u.numberOfItems > 1 ? k_(u) : u.getItem(0).matrix : Do, h = u.a * f.x + u.c * f.y, d = u.b * f.x + u.d * f.y) : (u = new Zi(), h = d = 0), i && t.tagName.toLowerCase() === "g" && (h = d = 0), (r || !t.getBoundingClientRect().width ? e : o).appendChild(c), c.setAttribute("transform", "matrix(" + u.a + "," + u.b + "," + u.c + "," + u.d + "," + (u.e + h) + "," + (u.f + d) + ")");
  else {
    if (h = d = 0, gh)
      for (u = t.offsetParent, f = t; f && (f = f.parentNode) && f !== u && f.parentNode; )
        (zr.getComputedStyle(f)[Ti] + "").length > 4 && (h = f.offsetLeft, d = f.offsetTop, f = 0);
    if (l = zr.getComputedStyle(t), l.position !== "absolute" && l.position !== "fixed")
      for (u = t.offsetParent; o && o !== u; )
        h += o.scrollLeft || 0, d += o.scrollTop || 0, o = o.parentNode;
    f = c.style, f.top = t.offsetTop - d + "px", f.left = t.offsetLeft - h + "px", f[Ti] = l[Ti], f[tl] = l[tl], f.position = l.position === "fixed" ? "fixed" : "absolute", a.appendChild(c);
  }
  return c;
}, ua = function(t, i, e, r, n, o, a) {
  return t.a = i, t.b = e, t.c = r, t.d = n, t.e = o, t.f = a, t;
}, Zi = /* @__PURE__ */ function() {
  function s(i, e, r, n, o, a) {
    i === void 0 && (i = 1), e === void 0 && (e = 0), r === void 0 && (r = 0), n === void 0 && (n = 1), o === void 0 && (o = 0), a === void 0 && (a = 0), ua(this, i, e, r, n, o, a);
  }
  var t = s.prototype;
  return t.inverse = function() {
    var e = this.a, r = this.b, n = this.c, o = this.d, a = this.e, c = this.f, u = e * o - r * n || 1e-10;
    return ua(this, o / u, -r / u, -n / u, e / u, (n * c - o * a) / u, -(e * c - r * a) / u);
  }, t.multiply = function(e) {
    var r = this.a, n = this.b, o = this.c, a = this.d, c = this.e, u = this.f, f = e.a, h = e.c, d = e.b, l = e.d, _ = e.e, p = e.f;
    return ua(this, f * r + d * o, f * n + d * a, h * r + l * o, h * n + l * a, c + _ * r + p * o, u + _ * n + p * a);
  }, t.clone = function() {
    return new s(this.a, this.b, this.c, this.d, this.e, this.f);
  }, t.equals = function(e) {
    var r = this.a, n = this.b, o = this.c, a = this.d, c = this.e, u = this.f;
    return r === e.a && n === e.b && o === e.c && a === e.d && c === e.e && u === e.f;
  }, t.apply = function(e, r) {
    r === void 0 && (r = {});
    var n = e.x, o = e.y, a = this.a, c = this.b, u = this.c, f = this.d, h = this.e, d = this.f;
    return r.x = n * a + o * u + h || 0, r.y = n * c + o * f + d || 0, r;
  }, s;
}();
function ge(s, t, i, e) {
  if (!s || !s.parentNode || (qi || Gl(s)).documentElement === s)
    return new Zi();
  var r = E_(s), n = Ql(s), o = n ? mh : yh, a = P_(s, i), c = o[0].getBoundingClientRect(), u = o[1].getBoundingClientRect(), f = o[2].getBoundingClientRect(), h = a.parentNode, d = !e && C_(s), l = new Zi((u.left - c.left) / 100, (u.top - c.top) / 100, (f.left - c.left) / 100, (f.top - c.top) / 100, c.left + (d ? 0 : Kl()), c.top + (d ? 0 : jl()));
  if (h.removeChild(a), r)
    for (c = r.length; c--; )
      u = r[c], u.scaleX = u.scaleY = 0, u.renderTransform(1, u);
  return t ? l.inverse() : l;
}
function ou(s) {
  if (s === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return s;
}
function M_(s, t) {
  s.prototype = Object.create(t.prototype), s.prototype.constructor = s, s.__proto__ = t;
}
var yt, At, ni, Ei, Ui, fa, Wi, el, Kn, fr, wh, il, Os, Zl, Qn, Qe, Zn, _o, xh, rl, Oo = 0, bh = function() {
  return typeof window < "u";
}, Sh = function() {
  return yt || bh() && (yt = window.gsap) && yt.registerPlugin && yt;
}, nr = function(t) {
  return typeof t == "function";
}, ds = function(t) {
  return typeof t == "object";
}, Si = function(t) {
  return typeof t > "u";
}, go = function() {
  return !1;
}, ps = "transform", nl = "transformOrigin", De = function(t) {
  return Math.round(t * 1e4) / 1e4;
}, Yn = Array.isArray, Js = function(t, i) {
  var e = ni.createElementNS ? ni.createElementNS("http://www.w3.org/1999/xhtml".replace(/^https/, "http"), t) : ni.createElement(t);
  return e.style ? e : ni.createElement(t);
}, au = 180 / Math.PI, Er = 1e20, D_ = new Zi(), ir = Date.now || function() {
  return (/* @__PURE__ */ new Date()).getTime();
}, Yr = [], yn = {}, O_ = 0, L_ = /^(?:a|input|textarea|button|select)$/i, lu = 0, Jr = {}, zi = {}, Th = function(t, i) {
  var e = {}, r;
  for (r in t)
    e[r] = i ? t[r] * i : t[r];
  return e;
}, A_ = function(t, i) {
  for (var e in i)
    e in t || (t[e] = i[e]);
  return t;
}, cu = function s(t, i) {
  for (var e = t.length, r; e--; )
    i ? t[e].style.touchAction = i : t[e].style.removeProperty("touch-action"), r = t[e].children, r && r.length && s(r, i);
}, Eh = function() {
  return Yr.forEach(function(t) {
    return t();
  });
}, R_ = function(t) {
  Yr.push(t), Yr.length === 1 && yt.ticker.add(Eh);
}, uu = function() {
  return !Yr.length && yt.ticker.remove(Eh);
}, fu = function(t) {
  for (var i = Yr.length; i--; )
    Yr[i] === t && Yr.splice(i, 1);
  yt.to(uu, {
    overwrite: !0,
    delay: 15,
    duration: 0,
    onComplete: uu,
    data: "_draggable"
  });
}, N_ = function(t, i) {
  for (var e in i)
    e in t || (t[e] = i[e]);
  return t;
}, se = function(t, i, e, r) {
  if (t.addEventListener) {
    var n = Os[i];
    r = r || (wh ? {
      passive: !1
    } : null), t.addEventListener(n || i, e, r), n && i !== n && t.addEventListener(i, e, r);
  }
}, Zt = function(t, i, e, r) {
  if (t.removeEventListener) {
    var n = Os[i];
    t.removeEventListener(n || i, e, r), n && i !== n && t.removeEventListener(i, e, r);
  }
}, di = function(t) {
  t.preventDefault && t.preventDefault(), t.preventManipulation && t.preventManipulation();
}, F_ = function(t, i) {
  for (var e = t.length; e--; )
    if (t[e].identifier === i)
      return !0;
}, I_ = function s(t) {
  Zl = t.touches && Oo < t.touches.length, Zt(t.target, "touchend", s);
}, hu = function(t) {
  Zl = t.touches && Oo < t.touches.length, se(t.target, "touchend", I_);
}, vn = function(t) {
  return At.pageYOffset || t.scrollTop || t.documentElement.scrollTop || t.body.scrollTop || 0;
}, wn = function(t) {
  return At.pageXOffset || t.scrollLeft || t.documentElement.scrollLeft || t.body.scrollLeft || 0;
}, du = function s(t, i) {
  se(t, "scroll", i), Pn(t.parentNode) || s(t.parentNode, i);
}, pu = function s(t, i) {
  Zt(t, "scroll", i), Pn(t.parentNode) || s(t.parentNode, i);
}, Pn = function(t) {
  return !t || t === Ei || t.nodeType === 9 || t === ni.body || t === At || !t.nodeType || !t.parentNode;
}, _u = function(t, i) {
  var e = i === "x" ? "Width" : "Height", r = "scroll" + e, n = "client" + e;
  return Math.max(0, Pn(t) ? Math.max(Ei[r], Ui[r]) - (At["inner" + e] || Ei[n] || Ui[n]) : t[r] - t[n]);
}, ha = function s(t, i) {
  var e = _u(t, "x"), r = _u(t, "y");
  Pn(t) ? t = zi : s(t.parentNode, i), t._gsMaxScrollX = e, t._gsMaxScrollY = r, i || (t._gsScrollX = t.scrollLeft || 0, t._gsScrollY = t.scrollTop || 0);
}, da = function(t, i, e) {
  var r = t.style;
  r && (Si(r[i]) && (i = Kn(i, t) || i), e == null ? r.removeProperty && r.removeProperty(i.replace(/([A-Z])/g, "-$1").toLowerCase()) : r[i] = e);
}, Ls = function(t) {
  return At.getComputedStyle(t instanceof Element ? t : t.host || (t.parentNode || {}).host || t);
}, Cr = {}, tn = function(t) {
  if (t === At)
    return Cr.left = Cr.top = 0, Cr.width = Cr.right = Ei.clientWidth || t.innerWidth || Ui.clientWidth || 0, Cr.height = Cr.bottom = (t.innerHeight || 0) - 20 < Ei.clientHeight ? Ei.clientHeight : t.innerHeight || Ui.clientHeight || 0, Cr;
  var i = t.ownerDocument || ni, e = Si(t.pageX) ? !t.nodeType && !Si(t.left) && !Si(t.top) ? t : fr(t)[0].getBoundingClientRect() : {
    left: t.pageX - wn(i),
    top: t.pageY - vn(i),
    right: t.pageX - wn(i) + 1,
    bottom: t.pageY - vn(i) + 1
  };
  return Si(e.right) && !Si(e.width) ? (e.right = e.left + e.width, e.bottom = e.top + e.height) : Si(e.width) && (e = {
    width: e.right - e.left,
    height: e.bottom - e.top,
    right: e.right,
    left: e.left,
    bottom: e.bottom,
    top: e.top
  }), e;
}, Ut = function(t, i, e) {
  var r = t.vars, n = r[e], o = t._listeners[i], a;
  return nr(n) && (a = n.apply(r.callbackScope || t, r[e + "Params"] || [t.pointerEvent])), o && t.dispatchEvent(i) === !1 && (a = !1), a;
}, gu = function(t, i) {
  var e = fr(t)[0], r, n, o;
  return !e.nodeType && e !== At ? Si(t.left) ? (n = t.min || t.minX || t.minRotation || 0, r = t.min || t.minY || 0, {
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
  }) : B_(e, i);
}, pi = {}, B_ = function(t, i) {
  i = fr(i)[0];
  var e = t.getBBox && t.ownerSVGElement, r = t.ownerDocument || ni, n, o, a, c, u, f, h, d, l, _, p, g, w;
  if (t === At)
    a = vn(r), n = wn(r), o = n + (r.documentElement.clientWidth || t.innerWidth || r.body.clientWidth || 0), c = a + ((t.innerHeight || 0) - 20 < r.documentElement.clientHeight ? r.documentElement.clientHeight : t.innerHeight || r.body.clientHeight || 0);
  else {
    if (i === At || Si(i))
      return t.getBoundingClientRect();
    n = a = 0, e ? (_ = t.getBBox(), p = _.width, g = _.height) : (t.viewBox && (_ = t.viewBox.baseVal) && (n = _.x || 0, a = _.y || 0, p = _.width, g = _.height), p || (w = Ls(t), _ = w.boxSizing === "border-box", p = (parseFloat(w.width) || t.clientWidth || 0) + (_ ? 0 : parseFloat(w.borderLeftWidth) + parseFloat(w.borderRightWidth)), g = (parseFloat(w.height) || t.clientHeight || 0) + (_ ? 0 : parseFloat(w.borderTopWidth) + parseFloat(w.borderBottomWidth)))), o = p, c = g;
  }
  return t === i ? {
    left: n,
    top: a,
    width: o - n,
    height: c - a
  } : (u = ge(i, !0).multiply(ge(t)), f = u.apply({
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
}, pa = function(t, i, e, r, n, o) {
  var a = {}, c, u, f;
  if (i)
    if (n !== 1 && i instanceof Array) {
      if (a.end = c = [], f = i.length, ds(i[0]))
        for (u = 0; u < f; u++)
          c[u] = Th(i[u], n);
      else
        for (u = 0; u < f; u++)
          c[u] = i[u] * n;
      e += 1.1, r -= 1.1;
    } else nr(i) ? a.end = function(h) {
      var d = i.call(t, h), l, _;
      if (n !== 1)
        if (ds(d)) {
          l = {};
          for (_ in d)
            l[_] = d[_] * n;
          d = l;
        } else
          d *= n;
      return d;
    } : a.end = i;
  return (e || e === 0) && (a.max = e), (r || r === 0) && (a.min = r), o && (a.velocity = 0), a;
}, $_ = function s(t) {
  var i;
  return !t || !t.getAttribute || t === Ui ? !1 : (i = t.getAttribute("data-clickable")) === "true" || i !== "false" && (L_.test(t.nodeName + "") || t.getAttribute("contentEditable") === "true") ? !0 : s(t.parentNode);
}, to = function(t, i) {
  for (var e = t.length, r; e--; )
    r = t[e], r.ondragstart = r.onselectstart = i ? null : go, yt.set(r, {
      lazy: !0,
      userSelect: i ? "text" : "none"
    });
}, z_ = function s(t) {
  if (Ls(t).position === "fixed")
    return !0;
  if (t = t.parentNode, t && t.nodeType === 1)
    return s(t);
}, Ch, sl, Y_ = function(t, i) {
  t = yt.utils.toArray(t)[0], i = i || {};
  var e = document.createElement("div"), r = e.style, n = t.firstChild, o = 0, a = 0, c = t.scrollTop, u = t.scrollLeft, f = t.scrollWidth, h = t.scrollHeight, d = 0, l = 0, _ = 0, p, g, w, T, x, b;
  Ch && i.force3D !== !1 ? (x = "translate3d(", b = "px,0px)") : ps && (x = "translate(", b = "px)"), this.scrollTop = function(m, M) {
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
      }), this.left(-u), i.onKill && i.onKill();
      return;
    }
    m = -m, m < 0 ? (a = m - 0.5 | 0, m = 0) : m > l ? (a = m - l | 0, m = l) : a = 0, (a || C) && (this._skip || (r[ps] = x + -a + "px," + -o + b), a + d >= 0 && (r.paddingRight = a + d + "px")), t.scrollLeft = m | 0, u = t.scrollLeft;
  }, this.top = function(m, M) {
    if (!arguments.length)
      return -(t.scrollTop + o);
    var E = t.scrollTop - c, C = o;
    if ((E > 2 || E < -2) && !M) {
      c = t.scrollTop, yt.killTweensOf(this, {
        top: 1,
        scrollTop: 1
      }), this.top(-c), i.onKill && i.onKill();
      return;
    }
    m = -m, m < 0 ? (o = m - 0.5 | 0, m = 0) : m > _ ? (o = m - _ | 0, m = _) : o = 0, (o || C) && (this._skip || (r[ps] = x + -a + "px," + -o + b)), t.scrollTop = m | 0, c = t.scrollTop;
  }, this.maxScrollTop = function() {
    return _;
  }, this.maxScrollLeft = function() {
    return l;
  }, this.disable = function() {
    for (n = e.firstChild; n; )
      T = n.nextSibling, t.appendChild(n), n = T;
    t === e.parentNode && t.removeChild(e);
  }, this.enable = function() {
    if (n = t.firstChild, n !== e) {
      for (; n; )
        T = n.nextSibling, e.appendChild(n), n = T;
      t.appendChild(e), this.calibrate();
    }
  }, this.calibrate = function(m) {
    var M = t.clientWidth === p, E, C, D;
    c = t.scrollTop, u = t.scrollLeft, !(M && t.clientHeight === g && e.offsetHeight === w && f === t.scrollWidth && h === t.scrollHeight && !m) && ((o || a) && (C = this.left(), D = this.top(), this.left(-t.scrollLeft), this.top(-t.scrollTop)), E = Ls(t), (!M || m) && (r.display = "block", r.width = "auto", r.paddingRight = "0px", d = Math.max(0, t.scrollWidth - t.clientWidth), d && (d += parseFloat(E.paddingLeft) + (sl ? parseFloat(E.paddingRight) : 0))), r.display = "inline-block", r.position = "relative", r.overflow = "visible", r.verticalAlign = "top", r.boxSizing = "content-box", r.width = "100%", r.paddingRight = d + "px", sl && (r.paddingBottom = E.paddingBottom), p = t.clientWidth, g = t.clientHeight, f = t.scrollWidth, h = t.scrollHeight, l = t.scrollWidth - p, _ = t.scrollHeight - g, w = e.offsetHeight, r.display = "block", (C || D) && (this.left(C), this.top(D)));
  }, this.content = e, this.element = t, this._skip = !1, this.enable();
}, _a = function(t) {
  if (bh() && document.body) {
    var i = window && window.navigator;
    At = window, ni = document, Ei = ni.documentElement, Ui = ni.body, fa = Js("div"), _o = !!window.PointerEvent, Wi = Js("div"), Wi.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab", Zn = Wi.style.cursor === "grab" ? "grab" : "move", Qn = i && i.userAgent.toLowerCase().indexOf("android") !== -1, il = "ontouchstart" in Ei && "orientation" in At || i && (i.MaxTouchPoints > 0 || i.msMaxTouchPoints > 0), sl = function() {
      var e = Js("div"), r = Js("div"), n = r.style, o = Ui, a;
      return n.display = "inline-block", n.position = "relative", e.style.cssText = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden", e.appendChild(r), o.appendChild(e), a = r.offsetHeight + 18 > e.scrollHeight, o.removeChild(e), a;
    }(), Os = function(e) {
      for (var r = e.split(","), n = ("onpointerdown" in fa ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown" in fa ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : e).split(","), o = {}, a = 4; --a > -1; )
        o[r[a]] = n[a], o[n[a]] = r[a];
      try {
        Ei.addEventListener("test", null, Object.defineProperty({}, "passive", {
          get: function() {
            wh = 1;
          }
        }));
      } catch {
      }
      return o;
    }("touchstart,touchmove,touchend,touchcancel"), se(ni, "touchcancel", go), se(At, "touchmove", go), Ui && Ui.addEventListener("touchstart", go), se(ni, "contextmenu", function() {
      for (var e in yn)
        yn[e].isPressed && yn[e].endDrag();
    }), yt = el = Sh();
  }
  yt ? (Qe = yt.plugins.inertia, xh = yt.core.context || function() {
  }, Kn = yt.utils.checkPrefix, ps = Kn(ps), nl = Kn(nl), fr = yt.utils.toArray, rl = yt.core.getStyleSaver, Ch = !!Kn("perspective")) : t && console.warn("Please gsap.registerPlugin(Draggable)");
}, X_ = /* @__PURE__ */ function() {
  function s(i) {
    this._listeners = {}, this.target = i || this;
  }
  var t = s.prototype;
  return t.addEventListener = function(e, r) {
    var n = this._listeners[e] || (this._listeners[e] = []);
    ~n.indexOf(r) || n.push(r);
  }, t.removeEventListener = function(e, r) {
    var n = this._listeners[e], o = n && n.indexOf(r);
    o >= 0 && n.splice(o, 1);
  }, t.dispatchEvent = function(e) {
    var r = this, n;
    return (this._listeners[e] || []).forEach(function(o) {
      return o.call(r, {
        type: e,
        target: r.target
      }) === !1 && (n = !1);
    }), n;
  }, s;
}(), Ln = /* @__PURE__ */ function(s) {
  M_(t, s);
  function t(i, e) {
    var r;
    r = s.call(this) || this, el || _a(1), i = fr(i)[0], r.styles = rl && rl(i, "transform,left,top"), Qe || (Qe = yt.plugins.inertia), r.vars = e = Th(e || {}), r.target = i, r.x = r.y = r.rotation = 0, r.dragResistance = parseFloat(e.dragResistance) || 0, r.edgeResistance = isNaN(e.edgeResistance) ? 1 : parseFloat(e.edgeResistance) || 0, r.lockAxis = e.lockAxis, r.autoScroll = e.autoScroll || 0, r.lockedAxis = null, r.allowEventDefault = !!e.allowEventDefault, yt.getProperty(i, "x");
    var n = (e.type || "x,y").toLowerCase(), o = ~n.indexOf("x") || ~n.indexOf("y"), a = n.indexOf("rotation") !== -1, c = a ? "rotation" : o ? "x" : "left", u = o ? "y" : "top", f = !!(~n.indexOf("x") || ~n.indexOf("left") || n === "scroll"), h = !!(~n.indexOf("y") || ~n.indexOf("top") || n === "scroll"), d = e.minimumMovement || 2, l = ou(r), _ = fr(e.trigger || e.handle || i), p = {}, g = 0, w = !1, T = e.autoScrollMarginTop || 40, x = e.autoScrollMarginRight || 40, b = e.autoScrollMarginBottom || 40, m = e.autoScrollMarginLeft || 40, M = e.clickableTest || $_, E = 0, C = i._gsap || yt.core.getCache(i), D = z_(i), P = function(y, F) {
      return parseFloat(C.get(i, y, F));
    }, B = i.ownerDocument || ni, A, R, X, $, V, Y, nt, st, v, G, H, ht, J, ot, et, wt, at, It, Dt, xt, Ot, K, tt, it, Qt, k, St, ee, Fe, Ct, j, Ie, ui, qt = function(y) {
      return di(y), y.stopImmediatePropagation && y.stopImmediatePropagation(), !1;
    }, ie = function Q(y) {
      if (l.autoScroll && l.isDragging && (w || at)) {
        var F = i, S = l.autoScroll * 15, O, I, L, z, N, W, rt, U;
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
        a ? (l.deltaX = ft - parseFloat(C.rotation), l.rotation = ft, C.rotation = ft + "deg", C.renderTransform(1, C)) : R ? (h && (l.deltaY = bt - R.top(), R.top(bt)), f && (l.deltaX = ft - R.left(), R.left(ft))) : o ? (h && (l.deltaY = bt - parseFloat(C.y), C.y = bt + "px"), f && (l.deltaX = ft - parseFloat(C.x), C.x = ft + "px"), C.renderTransform(1, C)) : (h && (l.deltaY = bt - parseFloat(i.style.top || 0), i.style.top = bt + "px"), f && (l.deltaX = ft - parseFloat(i.style.left || 0), i.style.left = ft + "px")), st && !y && !ee && (ee = !0, Ut(l, "drag", "onDrag") === !1 && (f && (l.x -= l.deltaX), h && (l.y -= l.deltaY), Q(!0)), ee = !1);
      }
      at = !1;
    }, kt = function(y, F) {
      var S = l.x, O = l.y, I, L;
      i._gsap || (C = yt.core.getCache(i)), C.uncache && yt.getProperty(i, "x"), o ? (l.x = parseFloat(C.x), l.y = parseFloat(C.y)) : a ? l.x = l.rotation = De(parseFloat(C.rotation)) : R ? (l.y = R.top(), l.x = R.left()) : (l.y = parseFloat(i.style.top || (L = Ls(i)) && L.top) || 0, l.x = parseFloat(i.style.left || (L || {}).left) || 0), (Dt || xt || Ot) && !F && (l.isDragging || l.isThrowing) && (Ot && (Jr.x = l.x, Jr.y = l.y, I = Ot(Jr), I.x !== l.x && (l.x = I.x, at = !0), I.y !== l.y && (l.y = I.y, at = !0)), Dt && (I = Dt(l.x), I !== l.x && (l.x = I, a && (l.rotation = I), at = !0)), xt && (I = xt(l.y), I !== l.y && (l.y = I), at = !0)), at && ie(!0), y || (l.deltaX = l.x - S, l.deltaY = l.y - O, Ut(l, "throwupdate", "onThrowUpdate"));
    }, Pe = function(y, F, S, O) {
      return F == null && (F = -Er), S == null && (S = Er), nr(y) ? function(I) {
        var L = l.isPressed ? 1 - l.edgeResistance : 1;
        return y.call(l, (I > S ? S + (I - S) * L : I < F ? F + (I - F) * L : I) * O) * O;
      } : Yn(y) ? function(I) {
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
      } : Yn(y) ? function(N) {
        for (var W = y.length, rt = 0, U = Er, ft, bt, Tt, gt; --W > -1; )
          Tt = y[W], ft = Tt.x - N.x, bt = Tt.y - N.y, gt = ft * ft + bt * bt, gt < U && (rt = W, U = gt);
        return U <= L ? y[rt] : N;
      } : function(N) {
        return N;
      };
    }, Ge = function() {
      var y, F, S, O;
      nt = !1, R ? (R.calibrate(), l.minX = H = -R.maxScrollLeft(), l.minY = J = -R.maxScrollTop(), l.maxX = G = l.maxY = ht = 0, nt = !0) : e.bounds && (y = gu(e.bounds, i.parentNode), a ? (l.minX = H = y.left, l.maxX = G = y.left + y.width, l.minY = J = l.maxY = ht = 0) : !Si(e.bounds.maxX) || !Si(e.bounds.maxY) ? (y = e.bounds, l.minX = H = y.minX, l.minY = J = y.minY, l.maxX = G = y.maxX, l.maxY = ht = y.maxY) : (F = gu(i, i.parentNode), l.minX = H = Math.round(P(c, "px") + y.left - F.left), l.minY = J = Math.round(P(u, "px") + y.top - F.top), l.maxX = G = Math.round(H + (y.width - F.width)), l.maxY = ht = Math.round(J + (y.height - F.height))), H > G && (l.minX = G, l.maxX = G = H, H = l.minX), J > ht && (l.minY = ht, l.maxY = ht = J, J = l.minY), a && (l.minRotation = H, l.maxRotation = G), nt = !0), e.liveSnap && (S = e.liveSnap === !0 ? e.snap || {} : e.liveSnap, O = Yn(S) || nr(S), a ? (Dt = Pe(O ? S : S.rotation, H, G, 1), xt = null) : S.points ? Ot = Be(O ? S : S.points, H, G, J, ht, S.radius, R ? -1 : 1) : (f && (Dt = Pe(O ? S : S.x || S.left || S.scrollLeft, H, G, R ? -1 : 1)), h && (xt = Pe(O ? S : S.y || S.top || S.scrollTop, J, ht, R ? -1 : 1))));
    }, xr = function() {
      l.isThrowing = !1, Ut(l, "throwcomplete", "onThrowComplete");
    }, Vt = function() {
      l.isThrowing = !1;
    }, Ji = function(y, F) {
      var S, O, I, L;
      y && Qe ? (y === !0 && (S = e.snap || e.liveSnap || {}, O = Yn(S) || nr(S), y = {
        resistance: (e.throwResistance || e.resistance || 1e3) / (a ? 10 : 1)
      }, a ? y.rotation = pa(l, O ? S : S.rotation, G, H, 1, F) : (f && (y[c] = pa(l, O ? S : S.points || S.x || S.left, G, H, R ? -1 : 1, F || l.lockedAxis === "x")), h && (y[u] = pa(l, O ? S : S.points || S.y || S.top, ht, J, R ? -1 : 1, F || l.lockedAxis === "y")), (S.points || Yn(S) && ds(S[0])) && (y.linkedProps = c + "," + u, y.radius = S.radius))), l.isThrowing = !0, L = isNaN(e.overshootTolerance) ? e.edgeResistance === 1 ? 0 : 1 - l.edgeResistance + 0.2 : e.overshootTolerance, y.duration || (y.duration = {
        max: Math.max(e.minDuration || 0, "maxDuration" in e ? e.maxDuration : 2),
        min: isNaN(e.minDuration) ? L === 0 || ds(y) && y.resistance > 1e3 ? 0 : 0.5 : e.minDuration,
        overshoot: L
      }), l.tween = I = yt.to(R || i, {
        inertia: y,
        data: "_draggable",
        inherit: !1,
        onComplete: xr,
        onInterrupt: Vt,
        onUpdate: e.fastMode ? Ut : kt,
        onUpdateParams: e.fastMode ? [l, "onthrowupdate", "onThrowUpdate"] : S && S.radius ? [!1, !0] : []
      }), e.fastMode || (R && (R._skip = !0), I.render(1e9, !0, !0), kt(!0, !0), l.endX = l.x, l.endY = l.y, a && (l.endRotation = l.x), I.play(0), kt(!0, !0), R && (R._skip = !1))) : nt && l.applyBounds();
    }, fi = function(y) {
      var F = it, S;
      it = ge(i.parentNode, !0), y && l.isPressed && !it.equals(F || new Zi()) && (S = F.inverse().apply({
        x: X,
        y: $
      }), it.apply(S, S), X = S.x, $ = S.y), it.equals(D_) && (it = null);
    }, xi = function() {
      var y = 1 - l.edgeResistance, F = D ? wn(B) : 0, S = D ? vn(B) : 0, O, I, L;
      o && (C.x = P(c, "px") + "px", C.y = P(u, "px") + "px", C.renderTransform()), fi(!1), pi.x = l.pointerX - F, pi.y = l.pointerY - S, it && it.apply(pi, pi), X = pi.x, $ = pi.y, at && (Ke(l.pointerX, l.pointerY), ie(!0)), Ie = ge(i), R ? (Ge(), Y = R.top(), V = R.left()) : (hi() ? (kt(!0, !0), Ge()) : l.applyBounds(), a ? (O = i.ownerSVGElement ? [C.xOrigin - i.getBBox().x, C.yOrigin - i.getBBox().y] : (Ls(i)[nl] || "0 0").split(" "), wt = l.rotationOrigin = ge(i).apply({
        x: parseFloat(O[0]) || 0,
        y: parseFloat(O[1]) || 0
      }), kt(!0, !0), I = l.pointerX - wt.x - F, L = wt.y - l.pointerY + S, V = l.x, Y = l.y = Math.atan2(L, I) * au) : (Y = P(u, "px"), V = P(c, "px"))), nt && y && (V > G ? V = G + (V - G) / y : V < H && (V = H - (H - V) / y), a || (Y > ht ? Y = ht + (Y - ht) / y : Y < J && (Y = J - (J - Y) / y))), l.startX = V = De(V), l.startY = Y = De(Y);
    }, hi = function() {
      return l.tween && l.tween.isActive();
    }, ki = function() {
      Wi.parentNode && !hi() && !l.isDragging && Wi.parentNode.removeChild(Wi);
    }, je = function(y, F) {
      var S;
      if (!A || l.isPressed || !y || (y.type === "mousedown" || y.type === "pointerdown") && !F && ir() - E < 30 && Os[l.pointerEvent.type]) {
        j && y && A && di(y);
        return;
      }
      if (Qt = hi(), ui = !1, l.pointerEvent = y, Os[y.type] ? (tt = ~y.type.indexOf("touch") ? y.currentTarget || y.target : B, se(tt, "touchend", zt), se(tt, "touchmove", lt), se(tt, "touchcancel", zt), se(B, "touchstart", hu)) : (tt = null, se(B, "mousemove", lt)), St = null, (!_o || !tt) && (se(B, "mouseup", zt), y && y.target && se(y.target, "mouseup", zt)), K = M.call(l, y.target) && e.dragClickables === !1 && !F, K) {
        se(y.target, "change", zt), Ut(l, "pressInit", "onPressInit"), Ut(l, "press", "onPress"), to(_, !0), j = !1;
        return;
      }
      if (k = !tt || f === h || l.vars.allowNativeTouchScrolling === !1 || l.vars.allowContextMenu && y && (y.ctrlKey || y.which > 2) ? !1 : f ? "y" : "x", j = !k && !l.allowEventDefault, j && (di(y), se(At, "touchforcechange", di)), y.changedTouches ? (y = ot = y.changedTouches[0], et = y.identifier) : y.pointerId ? et = y.pointerId : ot = et = null, Oo++, R_(ie), $ = l.pointerY = y.pageY, X = l.pointerX = y.pageX, Ut(l, "pressInit", "onPressInit"), (k || l.autoScroll) && ha(i.parentNode), i.parentNode && l.autoScroll && !R && !a && i.parentNode._gsMaxScrollX && !Wi.parentNode && !i.getBBox && (Wi.style.width = i.parentNode.scrollWidth + "px", i.parentNode.appendChild(Wi)), xi(), l.tween && l.tween.kill(), l.isThrowing = !1, yt.killTweensOf(R || i, p, !0), R && yt.killTweensOf(i, {
        scrollTo: 1
      }, !0), l.tween = l.lockedAxis = null, (e.zIndexBoost || !a && !R && e.zIndexBoost !== !1) && (i.style.zIndex = t.zIndex++), l.isPressed = !0, st = !!(e.onDrag || l._listeners.drag), v = !!(e.onMove || l._listeners.move), e.cursor !== !1 || e.activeCursor)
        for (S = _.length; --S > -1; )
          yt.set(_[S], {
            cursor: e.activeCursor || e.cursor || (Zn === "grab" ? "grabbing" : Zn)
          });
      Ut(l, "press", "onPress"), Qe && Qe.track(R || i, o ? "x,y" : a ? "rotation" : "top,left");
    }, lt = function(y) {
      var F = y, S, O, I, L, z, N;
      if (!A || Zl || !l.isPressed || !y) {
        j && y && A && di(y);
        return;
      }
      if (l.pointerEvent = y, S = y.changedTouches, S) {
        if (y = S[0], y !== ot && y.identifier !== et) {
          for (L = S.length; --L > -1 && (y = S[L]).identifier !== et && y.target !== i; )
            ;
          if (L < 0)
            return;
        }
      } else if (y.pointerId && et && y.pointerId !== et)
        return;
      if (tt && k && !St && (pi.x = y.pageX - (D ? wn(B) : 0), pi.y = y.pageY - (D ? vn(B) : 0), it && it.apply(pi, pi), O = pi.x, I = pi.y, z = Math.abs(O - X), N = Math.abs(I - $), (z !== N && (z > d || N > d) || Qn && k === St) && (St = z > N && f ? "x" : "y", k && St !== k && se(At, "touchforcechange", di), l.vars.lockAxisOnTouchScroll !== !1 && f && h && (l.lockedAxis = St === "x" ? "y" : "x", nr(l.vars.onLockAxis) && l.vars.onLockAxis.call(l, F)), Qn && k === St))) {
        zt(F);
        return;
      }
      !l.allowEventDefault && (!k || St && k !== St) && F.cancelable !== !1 ? (di(F), j = !0) : j && (j = !1), l.autoScroll && (w = !0), Ke(y.pageX, y.pageY, v);
    }, Ke = function(y, F, S) {
      var O = 1 - l.dragResistance, I = 1 - l.edgeResistance, L = l.pointerX, z = l.pointerY, N = Y, W = l.x, rt = l.y, U = l.endX, ft = l.endY, bt = l.endRotation, Tt = at, gt, mt, Pt, ut, he, Bt;
      l.pointerX = y, l.pointerY = F, D && (y -= wn(B), F -= vn(B)), a ? (ut = De(Math.atan2(wt.y - F, y - wt.x) * au), he = l.y - ut, he > 180 ? (Y -= 360, l.y = ut) : he < -180 && (Y += 360, l.y = ut), it && (Bt = y * it.a + F * it.c + it.e, F = y * it.b + F * it.d + it.f, y = Bt), l.x !== V || Math.max(Math.abs(X - y), Math.abs($ - F)) > d ? (l.y = ut, Pt = De(V + (Y - ut) * O)) : Pt = V) : (it && (Bt = y * it.a + F * it.c + it.e, F = y * it.b + F * it.d + it.f, y = Bt), mt = F - $, gt = y - X, mt < d && mt > -d && (mt = 0), gt < d && gt > -d && (gt = 0), (l.lockAxis || l.lockedAxis) && (gt || mt) && (Bt = l.lockedAxis, Bt || (l.lockedAxis = Bt = f && Math.abs(gt) > Math.abs(mt) ? "y" : h ? "x" : null, Bt && nr(l.vars.onLockAxis) && l.vars.onLockAxis.call(l, l.pointerEvent)), Bt === "y" ? mt = 0 : Bt === "x" && (gt = 0)), Pt = De(V + gt * O), ut = De(Y + mt * O)), (Dt || xt || Ot) && (l.x !== Pt || l.y !== ut && !a) && (Ot && (Jr.x = Pt, Jr.y = ut, Bt = Ot(Jr), Pt = De(Bt.x), ut = De(Bt.y)), Dt && (Pt = De(Dt(Pt))), xt && (ut = De(xt(ut)))), nt && (Pt > G ? Pt = G + Math.round((Pt - G) * I) : Pt < H && (Pt = H + Math.round((Pt - H) * I)), a || (ut > ht ? ut = Math.round(ht + (ut - ht) * I) : ut < J && (ut = Math.round(J + (ut - J) * I)))), (l.x !== Pt || l.y !== ut && !a) && (a ? (l.endRotation = l.x = l.endX = De(Pt), at = !0) : (h && (l.y = l.endY = ut, at = !0), f && (l.x = l.endX = Pt, at = !0)), !S || Ut(l, "move", "onMove") !== !1 ? !l.isDragging && l.isPressed && (l.isDragging = ui = !0, Ut(l, "dragstart", "onDragStart")) : (l.pointerX = L, l.pointerY = z, Y = N, l.x = W, l.y = rt, l.endX = U, l.endY = ft, l.endRotation = bt, at = Tt));
    }, zt = function Q(y, F) {
      if (!A || !l.isPressed || y && et != null && !F && (y.pointerId && y.pointerId !== et && y.target !== i || y.changedTouches && !F_(y.changedTouches, et))) {
        j && y && A && di(y);
        return;
      }
      l.isPressed = !1;
      var S = y, O = l.isDragging, I = l.vars.allowContextMenu && y && (y.ctrlKey || y.which > 2), L = yt.delayedCall(1e-3, ki), z, N, W, rt, U;
      if (tt ? (Zt(tt, "touchend", Q), Zt(tt, "touchmove", lt), Zt(tt, "touchcancel", Q), Zt(B, "touchstart", hu)) : Zt(B, "mousemove", lt), Zt(At, "touchforcechange", di), (!_o || !tt) && (Zt(B, "mouseup", Q), y && y.target && Zt(y.target, "mouseup", Q)), at = !1, O && (g = lu = ir(), l.isDragging = !1), fu(ie), K && !I) {
        y && (Zt(y.target, "change", Q), l.pointerEvent = S), to(_, !1), Ut(l, "release", "onRelease"), Ut(l, "click", "onClick"), K = !1;
        return;
      }
      for (N = _.length; --N > -1; )
        da(_[N], "cursor", e.cursor || (e.cursor !== !1 ? Zn : null));
      if (Oo--, y) {
        if (z = y.changedTouches, z && (y = z[0], y !== ot && y.identifier !== et)) {
          for (N = z.length; --N > -1 && (y = z[N]).identifier !== et && y.target !== i; )
            ;
          if (N < 0 && !F)
            return;
        }
        l.pointerEvent = S, l.pointerX = y.pageX, l.pointerY = y.pageY;
      }
      return I && S ? (di(S), j = !0, Ut(l, "release", "onRelease")) : S && !O ? (j = !1, Qt && (e.snap || e.bounds) && Ji(e.inertia || e.throwProps), Ut(l, "release", "onRelease"), (!Qn || S.type !== "touchmove") && S.type.indexOf("cancel") === -1 && (Ut(l, "click", "onClick"), ir() - E < 300 && Ut(l, "doubleclick", "onDoubleClick"), rt = S.target || i, E = ir(), U = function() {
        E !== Fe && l.enabled() && !l.isPressed && !S.defaultPrevented && (rt.click ? rt.click() : B.createEvent && (W = B.createEvent("MouseEvents"), W.initMouseEvent("click", !0, !0, At, 1, l.pointerEvent.screenX, l.pointerEvent.screenY, l.pointerX, l.pointerY, !1, !1, !1, !1, 0, null), rt.dispatchEvent(W)));
      }, !Qn && !S.defaultPrevented && yt.delayedCall(0.05, U))) : (Ji(e.inertia || e.throwProps), !l.allowEventDefault && S && (e.dragClickables !== !1 || !M.call(l, S.target)) && O && (!k || St && k === St) && S.cancelable !== !1 ? (j = !0, di(S)) : j = !1, Ut(l, "release", "onRelease")), hi() && L.duration(l.tween.duration()), O && Ut(l, "dragend", "onDragEnd"), !0;
    }, we = function(y) {
      if (y && l.isDragging && !R) {
        var F = y.target || i.parentNode, S = F.scrollLeft - F._gsScrollX, O = F.scrollTop - F._gsScrollY;
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
    return It = t.get(i), It && It.kill(), r.startDrag = function(Q, y) {
      var F, S, O, I;
      je(Q || l.pointerEvent, !0), y && !l.hitTest(Q || l.pointerEvent) && (F = tn(Q || l.pointerEvent), S = tn(i), O = Pi({
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
      var F = Q === "velocity" && Qe ? Q : ds(Q) && !a ? "element" : "start", S, O, I, L, z, N;
      return F === "element" && (z = tn(l.target), N = tn(Q)), S = F === "start" ? l.x - V : F === "velocity" ? Qe.getVelocity(i, c) : z.left + z.width / 2 - (N.left + N.width / 2), a ? S < 0 ? "counter-clockwise" : "clockwise" : (y = y || 2, O = F === "start" ? l.y - Y : F === "velocity" ? Qe.getVelocity(i, u) : z.top + z.height / 2 - (N.top + N.height / 2), I = Math.abs(S / O), L = I < 1 / y ? "" : S < 0 ? "left" : "right", I < y && (L !== "" && (L += "-"), L += O < 0 ? "up" : "down"), L);
    }, r.applyBounds = function(Q, y) {
      var F, S, O, I, L, z;
      if (Q && e.bounds !== Q)
        return e.bounds = Q, l.update(!0, y);
      if (kt(!0), Ge(), nt && !hi()) {
        if (F = l.x, S = l.y, F > G ? F = G : F < H && (F = H), S > ht ? S = ht : S < J && (S = J), (l.x !== F || l.y !== S) && (O = !0, l.x = l.endX = F, a ? l.endRotation = F : l.y = l.endY = S, at = !0, ie(!0), l.autoScroll && !l.isDragging))
          for (ha(i.parentNode), I = i, zi.scrollTop = At.pageYOffset != null ? At.pageYOffset : B.documentElement.scrollTop != null ? B.documentElement.scrollTop : B.body.scrollTop, zi.scrollLeft = At.pageXOffset != null ? At.pageXOffset : B.documentElement.scrollLeft != null ? B.documentElement.scrollLeft : B.body.scrollLeft; I && !z; )
            z = Pn(I.parentNode), L = z ? zi : I.parentNode, h && L.scrollTop > L._gsMaxScrollY && (L.scrollTop = L._gsMaxScrollY), f && L.scrollLeft > L._gsMaxScrollX && (L.scrollLeft = L._gsMaxScrollX), I = L;
        l.isThrowing && (O || l.endX > G || l.endX < H || l.endY > ht || l.endY < J) && Ji(e.inertia || e.throwProps, O);
      }
      return l;
    }, r.update = function(Q, y, F) {
      if (y && l.isPressed) {
        if (a)
          l.x = l.y = De(parseFloat(C.rotation));
        else {
          var S = ge(i), O = Ie.apply({
            x: l.x - V,
            y: l.y - Y
          }), I = ge(i.parentNode, !0);
          I.apply({
            x: S.e - O.x,
            y: S.f - O.y
          }, O), l.x = De(l.x - (O.x - I.e)), l.y = De(l.y - (O.y - I.f));
        }
        ie(!0), xi();
      }
      var L = l.x, z = l.y;
      return fi(!y), Q ? l.applyBounds() : (at && F && ie(!0), kt(!0)), y && (Ke(l.pointerX, l.pointerY), at && ie(!0)), l.isPressed && !y && (f && Math.abs(L - l.x) > 0.01 || h && Math.abs(z - l.y) > 0.01 && !a) && xi(), l.autoScroll && (ha(i.parentNode, l.isDragging), w = l.isDragging, ie(!0), pu(i, we), du(i, we)), l;
    }, r.enable = function(Q) {
      var y = {
        lazy: !0
      }, F, S, O;
      if (e.cursor !== !1 && (y.cursor = e.cursor || Zn), yt.utils.checkPrefix("touchCallout") && (y.touchCallout = "none"), Q !== "soft") {
        for (cu(_, f === h ? "none" : e.allowNativeTouchScrolling && i.scrollHeight === i.clientHeight == (i.scrollWidth === i.clientHeight) || e.allowEventDefault ? "manipulation" : f ? "pan-y" : "pan-x"), S = _.length; --S > -1; )
          O = _[S], _o || se(O, "mousedown", je), se(O, "touchstart", je), se(O, "click", $e, !0), yt.set(O, y), O.getBBox && O.ownerSVGElement && f !== h && yt.set(O.ownerSVGElement, {
            touchAction: e.allowNativeTouchScrolling || e.allowEventDefault ? "manipulation" : f ? "pan-y" : "pan-x"
          }), e.allowContextMenu || se(O, "contextmenu", qt);
        to(_, !1);
      }
      return du(i, we), A = !0, Qe && Q !== "soft" && Qe.track(R || i, o ? "x,y" : a ? "rotation" : "top,left"), i._gsDragID = F = i._gsDragID || "d" + O_++, yn[F] = l, R && (R.enable(), R.element._gsDragID = F), (e.bounds || a) && xi(), e.bounds && l.applyBounds(), l;
    }, r.disable = function(Q) {
      for (var y = l.isDragging, F = _.length, S; --F > -1; )
        da(_[F], "cursor", null);
      if (Q !== "soft") {
        for (cu(_, null), F = _.length; --F > -1; )
          S = _[F], da(S, "touchCallout", null), Zt(S, "mousedown", je), Zt(S, "touchstart", je), Zt(S, "click", $e, !0), Zt(S, "contextmenu", qt);
        to(_, !0), tt && (Zt(tt, "touchcancel", zt), Zt(tt, "touchend", zt), Zt(tt, "touchmove", lt)), Zt(B, "mouseup", zt), Zt(B, "mousemove", lt);
      }
      return pu(i, we), A = !1, Qe && Q !== "soft" && (Qe.untrack(R || i, o ? "x,y" : a ? "rotation" : "top,left"), l.tween && l.tween.kill()), R && R.disable(), fu(ie), l.isDragging = l.isPressed = K = !1, y && Ut(l, "dragend", "onDragEnd"), l;
    }, r.enabled = function(Q, y) {
      return arguments.length ? Q ? l.enable(y) : l.disable(y) : A;
    }, r.kill = function() {
      return l.isThrowing = !1, l.tween && l.tween.kill(), l.disable(), yt.set(_, {
        clearProps: "userSelect"
      }), delete yn[i._gsDragID], l;
    }, r.revert = function() {
      this.kill(), this.styles && this.styles.revert();
    }, ~n.indexOf("scroll") && (R = r.scrollProxy = new Y_(i, A_({
      onKill: function() {
        l.isPressed && zt(null);
      }
    }, e)), i.style.overflowY = h && !il ? "auto" : "hidden", i.style.overflowX = f && !il ? "auto" : "hidden", i = R.content), a ? p.rotation = 1 : (f && (p[c] = 1), h && (p[u] = 1)), C.force3D = "force3D" in e ? e.force3D : !0, xh(ou(r)), r.enable(), r;
  }
  return t.register = function(e) {
    yt = e, _a();
  }, t.create = function(e, r) {
    return el || _a(!0), fr(e).map(function(n) {
      return new t(n, r);
    });
  }, t.get = function(e) {
    return yn[(fr(e)[0] || {})._gsDragID];
  }, t.timeSinceDrag = function() {
    return (ir() - lu) / 1e3;
  }, t.hitTest = function(e, r, n) {
    if (e === r)
      return !1;
    var o = tn(e), a = tn(r), c = o.top, u = o.left, f = o.right, h = o.bottom, d = o.width, l = o.height, _ = a.left > f || a.right < u || a.top > h || a.bottom < c, p, g, w;
    return _ || !n ? !_ : (w = (n + "").indexOf("%") !== -1, n = parseFloat(n) || 0, p = {
      left: Math.max(u, a.left),
      top: Math.max(c, a.top)
    }, p.width = Math.min(f, a.right) - p.left, p.height = Math.min(h, a.bottom) - p.top, p.width < 0 || p.height < 0 ? !1 : w ? (n *= 0.01, g = p.width * p.height, g >= d * l * n || g >= a.width * a.height * n) : p.width > n && p.height > n);
  }, t;
}(X_);
N_(Ln.prototype, {
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
Sh() && yt.registerPlugin(Ln);
/*!
 * VelocityTracker: 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var Ai, ol, _s, kh, sn, Dr, al, Ph, Mh = function() {
  return Ai || typeof window < "u" && (Ai = window.gsap);
}, ll = {}, W_ = function(t) {
  return Math.round(t * 1e4) / 1e4;
}, cl = function(t) {
  return Ph(t).id;
}, Jn = function(t) {
  return ll[cl(typeof t == "string" ? _s(t)[0] : t)];
}, mu = function(t) {
  var i = sn, e;
  if (t - al >= 0.05)
    for (al = t; i; )
      e = i.g(i.t, i.p), (e !== i.v1 || t - i.t1 > 0.2) && (i.v2 = i.v1, i.v1 = e, i.t2 = i.t1, i.t1 = t), i = i._next;
}, V_ = {
  deg: 360,
  rad: Math.PI * 2
}, ga = function() {
  Ai = Mh(), Ai && (_s = Ai.utils.toArray, kh = Ai.utils.getUnit, Ph = Ai.core.getCache, Dr = Ai.ticker, ol = 1);
}, H_ = function(t, i, e, r) {
  this.t = t, this.p = i, this.g = t._gsap.get, this.rCap = V_[e || kh(this.g(t, i))], this.v1 = this.v2 = this.g(t, i), this.t1 = this.t2 = Dr.time, r && (this._next = r, r._prev = this);
}, Is = /* @__PURE__ */ function() {
  function s(i, e) {
    ol || ga(), this.target = _s(i)[0], ll[cl(this.target)] = this, this._props = {}, e && this.add(e);
  }
  s.register = function(e) {
    Ai = e, ga();
  };
  var t = s.prototype;
  return t.get = function(e, r) {
    var n = this._props[e] || console.warn("Not tracking " + e + " velocity."), o, a, c;
    return o = parseFloat(r ? n.v1 : n.g(n.t, n.p)), a = o - parseFloat(n.v2), c = n.rCap, c && (a = a % c, a !== a % (c / 2) && (a = a < 0 ? a + c : a - c)), W_(a / ((r ? n.t1 : Dr.time) - n.t2));
  }, t.getAll = function() {
    var e = {}, r = this._props, n;
    for (n in r)
      e[n] = this.get(n);
    return e;
  }, t.isTracking = function(e) {
    return e in this._props;
  }, t.add = function(e, r) {
    var n = this._props[e];
    n ? (n.v1 = n.v2 = n.g(n.t, n.p), n.t1 = n.t2 = Dr.time) : (sn || (Dr.add(mu), al = Dr.time), sn = this._props[e] = new H_(this.target, e, r, sn));
  }, t.remove = function(e) {
    var r = this._props[e], n, o;
    r && (n = r._prev, o = r._next, n && (n._next = o), o ? o._prev = n : sn === r && (Dr.remove(mu), sn = 0), delete this._props[e]);
  }, t.kill = function(e) {
    for (var r in this._props)
      this.remove(r);
    e || delete ll[cl(this.target)];
  }, s.track = function(e, r, n) {
    ol || ga();
    for (var o = [], a = _s(e), c = r.split(","), u = (n || "").split(","), f = a.length, h, d; f--; ) {
      for (h = Jn(a[f]) || new s(a[f]), d = c.length; d--; )
        h.add(c[d], u[d] || u[0]);
      o.push(h);
    }
    return o;
  }, s.untrack = function(e, r) {
    var n = r && r.split(",");
    _s(e).forEach(function(o) {
      var a = Jn(o);
      a && (n ? n.forEach(function(c) {
        return a.remove(c);
      }) : a.kill(1));
    });
  }, s.isTracking = function(e, r) {
    var n = Jn(e);
    return n && n.isTracking(r);
  }, s.getVelocity = function(e, r) {
    var n = Jn(e);
    return !n || !n.isTracking(r) ? console.warn("Not tracking velocity of " + r) : n.get(r);
  }, s;
}();
Is.getByTarget = Jn;
Mh() && Ai.registerPlugin(Is);
/*!
 * InertiaPlugin 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var oe, Dh, yu, Oh, ul, gs, Lh, Ah, Rh, Jl, Nh, ms, fl, Fh, Lo = Is.getByTarget, Ih = function() {
  return oe || typeof window < "u" && (oe = window.gsap) && oe.registerPlugin && oe;
}, q_ = function(t) {
  return typeof t == "string";
}, As = function(t) {
  return typeof t == "number";
}, _r = function(t) {
  return typeof t == "object";
}, hl = function(t) {
  return typeof t == "function";
}, U_ = 1, Bh = Array.isArray, G_ = function(t) {
  return t;
}, Xr = 1e10, vu = 1 / Xr, $h = 0.05, j_ = function(t) {
  return Math.round(t * 1e4) / 1e4;
}, K_ = function(t, i, e) {
  for (var r in i)
    !(r in t) && r !== e && (t[r] = i[r]);
  return t;
}, Q_ = function s(t) {
  var i = {}, e, r;
  for (e in t)
    i[e] = _r(r = t[e]) && !Bh(r) ? s(r) : r;
  return i;
}, wu = function(t, i, e, r, n) {
  var o = i.length, a = 0, c = Xr, u, f, h, d;
  if (_r(t)) {
    for (; o--; ) {
      u = i[o], f = 0;
      for (h in t)
        d = u[h] - t[h], f += d * d;
      f < c && (a = o, c = f);
    }
    if ((n || Xr) < Xr && n < Math.sqrt(c))
      return t;
  } else
    for (; o--; )
      u = i[o], f = u - t, f < 0 && (f = -f), f < c && u >= r && u <= e && (a = o, c = f);
  return i[a];
}, zh = function(t, i, e, r, n, o, a) {
  if (t.end === "auto")
    return t;
  var c = t.end, u, f;
  if (e = isNaN(e) ? Xr : e, r = isNaN(r) ? -Xr : r, _r(i)) {
    if (u = i.calculated ? i : (hl(c) ? c(i, a) : wu(i, c, e, r, o)) || i, !i.calculated) {
      for (f in u)
        i[f] = u[f];
      i.calculated = !0;
    }
    u = u[n];
  } else
    u = hl(c) ? c(i, a) : Bh(c) ? wu(i, c, e, r, o) : parseFloat(c);
  return u > e ? u = e : u < r && (u = r), {
    max: u,
    min: u,
    unitFactor: t.unitFactor
  };
}, Ao = function(t, i, e) {
  return isNaN(t[i]) ? e : +t[i];
}, tc = function(t, i) {
  return i * $h * t / Jl;
}, xu = function(t, i, e) {
  return Math.abs((i - t) * Jl / e / $h);
}, Yh = {
  resistance: 1,
  checkpoint: 1,
  preventOvershoot: 1,
  linkedProps: 1,
  radius: 1,
  duration: 1
}, Xh = function(t, i, e, r) {
  if (i.linkedProps) {
    var n = i.linkedProps.split(","), o = {}, a, c, u, f, h, d;
    for (a = 0; a < n.length; a++)
      c = n[a], u = i[c], u && (As(u.velocity) ? f = u.velocity : (h = h || Lo(t), f = h && h.isTracking(c) ? h.get(c) : 0), d = Math.abs(f / Ao(u, "resistance", r)), o[c] = parseFloat(e(t, c)) + tc(f, d));
    return o;
  }
}, Z_ = function(t, i, e, r, n, o) {
  if (e === void 0 && (e = 10), r === void 0 && (r = 0.2), n === void 0 && (n = 1), q_(t) && (t = Oh(t)[0]), !t)
    return 0;
  var a = 0, c = Xr, u = i.inertia || i, f = Rh(t).get, h = Ao(u, "resistance", gs.resistance), d, l, _, p, g, w, T, x, b, m;
  m = Xh(t, u, f, h);
  for (d in u)
    Yh[d] || (l = u[d], _r(l) || (x = x || Lo(t), x && x.isTracking(d) ? l = As(l) ? {
      velocity: l
    } : {
      velocity: x.get(d)
    } : (p = +l || 0, _ = Math.abs(p / h))), _r(l) && (As(l.velocity) ? p = l.velocity : (x = x || Lo(t), p = x && x.isTracking(d) ? x.get(d) : 0), _ = Nh(r, e, Math.abs(p / Ao(l, "resistance", h))), g = parseFloat(f(t, d)) || 0, w = g + tc(p, _), "end" in l && (l = zh(l, m && d in m ? m : w, l.max, l.min, d, u.radius, p), ms === i && (ms = u = Q_(i)), u[d] = K_(l, u[d], "end")), "max" in l && w > +l.max + vu ? (b = l.unitFactor || gs.unitFactors[d] || 1, T = g > l.max && l.min !== l.max || p * b > -15 && p * b < 45 ? r + (e - r) * 0.1 : xu(g, l.max, p), T + n < c && (c = T + n)) : "min" in l && w < +l.min - vu && (b = l.unitFactor || gs.unitFactors[d] || 1, T = g < l.min && l.min !== l.max || p * b > -45 && p * b < 15 ? r + (e - r) * 0.1 : xu(g, l.min, p), T + n < c && (c = T + n)), T > a && (a = T)), _ > a && (a = _));
  return a > c && (a = c), a > e ? e : a < r ? r : a;
}, bu = function() {
  oe = Ih(), oe && (yu = oe.parseEase, Oh = oe.utils.toArray, Lh = oe.utils.getUnit, Rh = oe.core.getCache, Nh = oe.utils.clamp, fl = oe.core.getStyleSaver, Fh = oe.core.reverting || function() {
  }, ul = yu("power3"), Jl = ul(0.05), Ah = oe.core.PropTween, oe.config({
    resistance: 100,
    unitFactors: {
      time: 1e3,
      totalTime: 1e3,
      progress: 1e3,
      totalProgress: 1e3
    }
  }), gs = oe.config(), oe.registerPlugin(Is), Dh = 1);
}, ec = {
  version: "3.15.0",
  name: "inertia",
  register: function(t) {
    oe = t, bu();
  },
  init: function(t, i, e, r, n) {
    Dh || bu();
    var o = Lo(t);
    if (i === "auto") {
      if (!o) {
        console.warn("No inertia tracking on " + t + ". InertiaPlugin.track(target) first.");
        return;
      }
      i = o.getAll();
    }
    this.styles = fl && typeof t.style == "object" && fl(t), this.target = t, this.tween = e, ms = i;
    var a = t._gsap, c = a.get, u = i.duration, f = _r(u), h = i.preventOvershoot || f && u.overshoot === 0, d = Ao(i, "resistance", gs.resistance), l = As(u) ? u : Z_(t, i, f && u.max || 10, f && u.min || 0.2, f && "overshoot" in u ? +u.overshoot : h ? 0 : 1), _, p, g, w, T, x, b, m, M;
    i = ms, ms = 0, M = Xh(t, i, c, d);
    for (_ in i)
      Yh[_] || (p = i[_], hl(p) && (p = p(r, t, n)), As(p) ? T = p : _r(p) && !isNaN(p.velocity) ? T = +p.velocity : o && o.isTracking(_) ? T = o.get(_) : console.warn("ERROR: No velocity was defined for " + t + " property: " + _), x = tc(T, l), m = 0, g = c(t, _), w = Lh(g), g = parseFloat(g), _r(p) && (b = g + x, "end" in p && (p = zh(p, M && _ in M ? M : b, p.max, p.min, _, i.radius, T)), "max" in p && +p.max < b ? h || p.preventOvershoot ? x = p.max - g : m = p.max - g - x : "min" in p && +p.min > b && (h || p.preventOvershoot ? x = p.min - g : m = p.min - g - x)), this._props.push(_), this.styles && this.styles.save(_), this._pt = new Ah(this._pt, t, _, g, 0, G_, 0, a.set(t, _, this)), this._pt.u = w || 0, this._pt.c1 = x, this._pt.c2 = m);
    return e.duration(l), U_;
  },
  render: function(t, i) {
    var e = i._pt;
    if (t = ul(i.tween._time / i.tween._dur), t || !Fh())
      for (; e; )
        e.set(e.t, e.p, j_(e.s + e.c1 * t + e.c2 * t * t) + e.u, e.d, t), e = e._next;
    else
      i.styles.revert();
  }
};
"track,untrack,isTracking,getVelocity,getByTarget".split(",").forEach(function(s) {
  return ec[s] = Is[s];
});
Ih() && oe.registerPlugin(ec);
/*!
 * Flip 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var J_ = 1, Mn, _e, Ft, ys, sr, Gi, dl, Su = function(t, i) {
  return t.actions.forEach(function(e) {
    return e.vars[i] && e.vars[i](e);
  });
}, pl = {}, Tu = 180 / Math.PI, tg = Math.PI / 180, Ro = {}, Eu = {}, Xo = {}, ic = function(t) {
  return typeof t == "string" ? t.split(" ").join("").split(",") : t;
}, eg = ic("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"), Wo = ic("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"), vs = function(t) {
  return Mn(t)[0] || console.warn("Element not found:", t);
}, cn = function(t) {
  return Math.round(t * 1e4) / 1e4 || 0;
}, ma = function(t, i, e) {
  return t.forEach(function(r) {
    return r.classList[e](i);
  });
}, Cu = {
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
}, Wh = {
  zIndex: 1,
  simple: 1,
  clearProps: 1,
  scale: 1,
  absolute: 1,
  fitChild: 1,
  getVars: 1,
  props: 1
}, Vh = function(t) {
  return t.replace(/([A-Z])/g, "-$1").toLowerCase();
}, un = function(t, i) {
  var e = {}, r;
  for (r in t)
    i[r] || (e[r] = t[r]);
  return e;
}, rc = {}, Hh = function(t) {
  var i = rc[t] = ic(t);
  return Xo[t] = i.concat(Wo), i;
}, ig = function(t) {
  var i = t._gsap || _e.core.getCache(t);
  return i.gmCache === _e.ticker.frame ? i.gMatrix : (i.gmCache = _e.ticker.frame, i.gMatrix = ge(t, !0, !1, !0));
}, rg = function s(t, i, e) {
  e === void 0 && (e = 0);
  for (var r = t.parentNode, n = 1e3 * Math.pow(10, e) * (i ? -1 : 1), o = i ? -n * 900 : 0; t; )
    o += n, t = t.previousSibling;
  return r ? o + s(r, i, e + 1) : o;
}, No = function(t, i, e) {
  return t.forEach(function(r) {
    return r.d = rg(e ? r.element : r.t, i);
  }), t.sort(function(r, n) {
    return r.d - n.d;
  }), t;
}, Rs = function(t, i) {
  for (var e = t.element.style, r = t.css = t.css || [], n = i.length, o, a; n--; )
    o = i[n], a = e[o] || e.getPropertyValue(o), r.push(a ? o : Eu[o] || (Eu[o] = Vh(o)), a);
  return e;
}, Fo = function(t) {
  var i = t.css, e = t.element.style, r = 0;
  for (t.cache.uncache = 1; r < i.length; r += 2)
    i[r + 1] ? e[i[r]] = i[r + 1] : e.removeProperty(i[r]);
  !i[i.indexOf("transform") + 1] && e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, ku = function(t, i) {
  t.forEach(function(e) {
    return e.a.cache.uncache = 1;
  }), i || t.finalStates.forEach(Fo);
}, ya = "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","), nc = function(t, i, e) {
  var r = t.element, n = t.width, o = t.height, a = t.uncache, c = t.getProp, u = r.style, f = 4, h, d, l;
  if (typeof i != "object" && (i = t), Ft && e !== 1)
    return Ft._abs.push({
      t: r,
      b: t,
      a: t,
      sd: 0
    }), Ft._final.push(function() {
      return (t.cache.uncache = 1) && Fo(t);
    }), r;
  for (d = c("display") === "none", (!t.isVisible || d) && (d && (Rs(t, ["display"]).display = i.display), t.matrix = i.matrix, t.width = n = t.width || i.width, t.height = o = t.height || i.height), Rs(t, ya), l = window.getComputedStyle(r); f--; )
    u[ya[f]] = l[ya[f]];
  if (u.gridArea = "1 / 1 / 1 / 1", u.transition = "none", u.position = "absolute", u.width = n + "px", u.height = o + "px", u.top || (u.top = "0px"), u.left || (u.left = "0px"), a)
    h = new qr(r);
  else if (h = un(t, Ro), h.position = "absolute", t.simple) {
    var _ = r.getBoundingClientRect();
    h.matrix = new Zi(1, 0, 0, 1, _.left + Kl(), _.top + jl());
  } else
    h.matrix = ge(r, !1, !1, !0);
  return h = xn(h, t, !0), t.x = Gi(h.x, 0.01), t.y = Gi(h.y, 0.01), r;
}, Pu = function(t, i) {
  return i !== !0 && (i = Mn(i), t = t.filter(function(e) {
    if (i.indexOf((e.sd < 0 ? e.b : e.a).element) !== -1)
      return !0;
    e.t._gsap.renderTransform(1), e.b.isVisible && (e.t.style.width = e.b.width + "px", e.t.style.height = e.b.height + "px");
  })), t;
}, qh = function(t) {
  return No(t, !0).forEach(function(i) {
    return (i.a.isVisible || i.b.isVisible) && nc(i.sd < 0 ? i.b : i.a, i.b, 1);
  });
}, ng = function(t, i) {
  return i && t.idLookup[_l(i).id] || t.elementStates[0];
}, _l = function(t, i, e, r) {
  return t instanceof qr ? t : t instanceof Ci ? ng(t, r) : new qr(typeof t == "string" ? vs(t) || console.warn(t + " not found") : t, i, e);
}, sg = function(t, i) {
  for (var e = _e.getProperty(t.element, null, "native"), r = t.props = {}, n = i.length; n--; )
    r[i[n]] = (e(i[n]) + "").trim();
  return r.zIndex && (r.zIndex = parseFloat(r.zIndex) || 0), t;
}, Uh = function(t, i) {
  var e = t.style || t, r;
  for (r in i)
    e[r] = i[r];
}, og = function(t) {
  var i = t.getAttribute("data-flip-id");
  return i || t.setAttribute("data-flip-id", i = "auto-" + J_++), i;
}, Gh = function(t) {
  return t.map(function(i) {
    return i.element;
  });
}, Mu = function(t, i, e) {
  return t && i.length && e.add(t(Gh(i), e, new Ci(i, 0, !0)), 0);
}, xn = function(t, i, e, r, n, o) {
  var a = t.element, c = t.cache, u = t.parent, f = t.x, h = t.y, d = i.width, l = i.height, _ = i.scaleX, p = i.scaleY, g = i.rotation, w = i.bounds, T = o && dl && dl(a, "transform,width,height"), x = t, b = i.matrix, m = b.e, M = b.f, E = t.bounds.width !== w.width || t.bounds.height !== w.height || t.scaleX !== _ || t.scaleY !== p || t.rotation !== g, C = !E && t.simple && i.simple && !n, D, P, B, A, R, X, $;
  return C || !u ? (_ = p = 1, g = D = 0) : (R = ig(u), X = R.clone().multiply(i.ctm ? i.matrix.clone().multiply(i.ctm) : i.matrix), g = cn(Math.atan2(X.b, X.a) * Tu), D = cn(Math.atan2(X.c, X.d) * Tu + g) % 360, _ = Math.sqrt(Math.pow(X.a, 2) + Math.pow(X.b, 2)), p = Math.sqrt(Math.pow(X.c, 2) + Math.pow(X.d, 2)) * Math.cos(D * tg), n && (n = Mn(n)[0], A = _e.getProperty(n), $ = n.getBBox && typeof n.getBBox == "function" && n.getBBox(), x = {
    scaleX: A("scaleX"),
    scaleY: A("scaleY"),
    width: $ ? $.width : Math.ceil(parseFloat(A("width", "px"))),
    height: $ ? $.height : parseFloat(A("height", "px"))
  }), c.rotation = g + "deg", c.skewX = D + "deg"), e ? (_ *= d === x.width || !x.width ? 1 : d / x.width, p *= l === x.height || !x.height ? 1 : l / x.height, c.scaleX = _, c.scaleY = p) : (d = Gi(d * _ / x.scaleX, 0), l = Gi(l * p / x.scaleY, 0), a.style.width = d + "px", a.style.height = l + "px"), r && Uh(a, i.props), C || !u ? (f += m - t.matrix.e, h += M - t.matrix.f) : E || u !== i.parent ? (c.x = f + "px", c.y = h + "px", c.renderTransform(1, c), X = ge(n || a, !1, !1, !0), P = R.apply({
    x: X.e,
    y: X.f
  }), B = R.apply({
    x: m,
    y: M
  }), f += B.x - P.x, h += B.y - P.y) : (R.e = R.f = 0, B = R.apply({
    x: m - t.matrix.e,
    y: M - t.matrix.f
  }), f += B.x, h += B.y), f = Gi(f, 0.02), h = Gi(h, 0.02), o && !(o instanceof qr) ? T && T.revert() : (c.x = f + "px", c.y = h + "px", c.renderTransform(1, c)), o && (o.x = f, o.y = h, o.rotation = g, o.skewX = D, e ? (o.scaleX = _, o.scaleY = p) : (o.width = d, o.height = l)), o || c;
}, va = function(t, i) {
  return t instanceof Ci ? t : new Ci(t, i);
}, jh = function(t, i, e) {
  var r = t.idLookup[e], n = t.alt[e];
  return n.isVisible && (!(i.getElementState(n.element) || n).isVisible || !r.isVisible) ? n : r;
}, wa = [], xa = "width,height,overflowX,overflowY".split(","), eo, Du = function(t) {
  if (t !== eo) {
    var i = sr.style, e = sr.clientWidth === window.outerWidth, r = sr.clientHeight === window.outerHeight, n = 4;
    if (t && (e || r)) {
      for (; n--; )
        wa[n] = i[xa[n]];
      e && (i.width = sr.clientWidth + "px", i.overflowY = "hidden"), r && (i.height = sr.clientHeight + "px", i.overflowX = "hidden"), eo = t;
    } else if (eo) {
      for (; n--; )
        wa[n] ? i[xa[n]] = wa[n] : i.removeProperty(Vh(xa[n]));
      eo = t;
    }
  }
}, Ou = function(t, i) {
  for (var e = 0; e < t.length; e += 3)
    _e.set(t[e], {
      clearProps: !0
    }), t[e].setAttribute("style", t[e + i]), t[e]._gsap.gmCache = -1;
}, ba = function(t, i, e, r) {
  t instanceof Ci && i instanceof Ci || console.warn("Not a valid state object."), e = e || {};
  var n = e, o = n.clearProps, a = n.onEnter, c = n.onLeave, u = n.absolute, f = n.absoluteOnLeave, h = n.custom, d = n.delay, l = n.paused, _ = n.repeat, p = n.repeatDelay, g = n.yoyo, w = n.toggleClass, T = n.nested, x = n.zIndex, b = n.scale, m = n.fade, M = n.stagger, E = n.spin, C = n.prune, D = ("props" in e ? e : t).props, P = un(e, Cu), B = _e.timeline({
    delay: d,
    paused: l,
    repeat: _,
    repeatDelay: p,
    yoyo: g,
    data: "isFlip"
  }), A = P, R = [], X = [], $ = [], V = [], Y = E === !0 ? 1 : E || 0, nt = typeof E == "function" ? E : function() {
    return Y;
  }, st = t.interrupted || i.interrupted, v = B[r !== 1 ? "to" : "from"], G, H, ht, J, ot, et, wt, at, It, Dt, xt, Ot, K, tt;
  for (H in i.idLookup)
    xt = i.alt[H] ? jh(i, t, H) : i.idLookup[H], ot = xt.element, Dt = t.idLookup[H], t.alt[H] && ot === Dt.element && (t.alt[H].isVisible || !xt.isVisible) && (Dt = t.alt[H]), Dt ? (et = {
      t: ot,
      b: Dt,
      a: xt,
      sd: Dt.element === ot ? 0 : xt.isVisible ? 1 : -1
    }, $.push(et), et.sd && (et.sd < 0 && (et.b = xt, et.a = Dt), st && Rs(et.b, D ? Xo[D] : Wo), m && $.push(et.swap = {
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
  if (D && (rc[D] || Hh(D)).forEach(function(k) {
    return P[k] = function(St) {
      return $[St].a.props[k];
    };
  }), $.finalStates = It = [], Ot = function() {
    No($), Du(!0);
    var St = [];
    for (J = 0; J < $.length; J++)
      et = $[J], K = et.a, tt = et.b, C && !K.isDifferent(tt) && !et.entering ? $.splice(J--, 1) : (ot = et.t, T && !(et.sd < 0) && J && (K = et.a = K.clone({
        matrix: ge(ot, !1, !1, !0)
      })), tt.isVisible && K.isVisible ? (et.sd < 0 ? (T && Ou(St, 1), wt = new qr(ot, D, t.simple), xn(wt, K, b, 0, 0, wt), wt.matrix = ge(ot, !1, !1, !0), wt.bounds = ot.getBoundingClientRect(), wt.css = et.b.css, et.a = K = wt, m && (ot.style.opacity = st ? tt.opacity : K.opacity), M && V.push(ot), T && (Ou(St, 2), St.push(ot, ot.getAttribute("style")))) : et.sd > 0 && m && (ot.style.opacity = st ? K.opacity - tt.opacity : "0"), xn(K, tt, b, D), T && et.sd < 0 && St.push(ot.getAttribute("style"))) : tt.isVisible !== K.isVisible && (tt.isVisible ? K.isVisible || (tt.css = K.css, X.push(tt), $.splice(J--, 1), u && T && xn(K, tt, b, D)) : (K.isVisible && R.push(K), $.splice(J--, 1))), b || (ot.style.maxWidth = Math.max(K.width, tt.width) + "px", ot.style.maxHeight = Math.max(K.height, tt.height) + "px", ot.style.minWidth = Math.min(K.width, tt.width) + "px", ot.style.minHeight = Math.min(K.height, tt.height) + "px"), T && w && ot.classList.add(w)), It.push(K);
    var ee;
    if (w && (ee = It.map(function(j) {
      return j.element;
    }), T && ee.forEach(function(j) {
      return j.classList.remove(w);
    })), Du(!1), b ? (P.scaleX = function(j) {
      return $[j].a.scaleX;
    }, P.scaleY = function(j) {
      return $[j].a.scaleY;
    }) : (P.width = function(j) {
      return $[j].a.width + "px";
    }, P.height = function(j) {
      return $[j].a.height + "px";
    }, P.autoRound = e.autoRound || !1), P.x = function(j) {
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
    }, P.zIndex = x, P.immediateRender = e.immediateRender !== !1), m && (P.opacity = function(j) {
      return $[j].sd < 0 ? 0 : $[j].sd > 0 ? $[j].a.opacity : "+=0";
    }), V.length) {
      M = _e.utils.distribute(M);
      var Fe = at.slice(V.length);
      P.stagger = function(j, Ie) {
        return M(~V.indexOf(Ie) ? at.indexOf($[j].swap.t) : j, Ie, Fe);
      };
    }
    if (eg.forEach(function(j) {
      return e[j] && B.eventCallback(j, e[j], e[j + "Params"]);
    }), h && at.length) {
      A = un(P, Cu), "scale" in h && (h.scaleX = h.scaleY = h.scale, delete h.scale);
      for (H in h)
        G = un(h[H], Wh), G[H] = P[H], !("duration" in G) && "duration" in P && (G.duration = P.duration), G.stagger = P.stagger, v.call(B, at, G, 0), delete A[H];
    }
    (at.length || X.length || R.length) && (w && B.add(function() {
      return ma(ee, w, B._zTime < 0 ? "remove" : "add");
    }, 0) && !l && ma(ee, w, "add"), at.length && v.call(B, at, A, 0)), Mu(a, R, B), Mu(c, X, B);
    var Ct = Ft && Ft.timeline;
    Ct && (Ct.add(B, 0), Ft._final.push(function() {
      return ku($, !o);
    })), ht = B.duration(), B.call(function() {
      var j = B.time() >= ht;
      j && !Ct && ku($, !o), w && ma(ee, w, j ? "remove" : "add");
    });
  }, f && (u = $.filter(function(k) {
    return !k.sd && !k.a.isVisible && k.b.isVisible;
  }).map(function(k) {
    return k.a.element;
  })), Ft) {
    var it;
    u && (it = Ft._abs).push.apply(it, Pu($, u)), Ft._run.push(Ot);
  } else
    u && qh(Pu($, u)), Ot();
  var Qt = Ft ? Ft.timeline : B;
  return Qt.revert = function() {
    return sc(Qt, 1, 1);
  }, Qt;
}, ag = function s(t) {
  t.vars.onInterrupt && t.vars.onInterrupt.apply(t, t.vars.onInterruptParams || []), t.getChildren(!0, !1, !0).forEach(s);
}, sc = function(t, i, e) {
  if (t && t.progress() < 1 && (!t.paused() || e))
    return i && (ag(t), i < 2 && t.progress(1), t.kill()), !0;
}, io = function(t) {
  for (var i = t.idLookup = {}, e = t.alt = {}, r = t.elementStates, n = r.length, o; n--; )
    o = r[n], i[o.id] ? e[o.id] = o : i[o.id] = o;
}, Ci = /* @__PURE__ */ function() {
  function s(i, e, r) {
    if (this.props = e && e.props, this.simple = !!(e && e.simple), r)
      this.targets = Gh(i), this.elementStates = i, io(this);
    else {
      this.targets = Mn(i);
      var n = e && (e.kill === !1 || e.batch && !e.kill);
      Ft && !n && Ft._kill.push(this), this.update(n || !!Ft);
    }
  }
  var t = s.prototype;
  return t.update = function(e) {
    var r = this;
    return this.elementStates = this.targets.map(function(n) {
      return new qr(n, r.props, r.simple);
    }), io(this), this.interrupt(e), this.recordInlineStyles(), this;
  }, t.clear = function() {
    return this.targets.length = this.elementStates.length = 0, io(this), this;
  }, t.fit = function(e, r, n) {
    for (var o = No(this.elementStates.slice(0), !1, !0), a = (e || this).idLookup, c = 0, u, f; c < o.length; c++)
      u = o[c], n && (u.matrix = ge(u.element, !1, !1, !0)), f = a[u.id], f && xn(u, f, r, !0, 0, u), u.matrix = ge(u.element, !1, !1, !0);
    return this;
  }, t.getProperty = function(e, r) {
    var n = this.getElementState(e) || Ro;
    return (r in n ? n : n.props || Ro)[r];
  }, t.add = function(e) {
    for (var r = e.targets.length, n = this.idLookup, o = this.alt, a, c, u; r--; )
      c = e.elementStates[r], u = n[c.id], u && (c.element === u.element || o[c.id] && o[c.id].element === c.element) ? (a = this.elementStates.indexOf(c.element === u.element ? u : o[c.id]), this.targets.splice(a, 1, e.targets[r]), this.elementStates.splice(a, 1, c)) : (this.targets.push(e.targets[r]), this.elementStates.push(c));
    return e.interrupted && (this.interrupted = !0), e.simple || (this.simple = !1), io(this), this;
  }, t.compare = function(e) {
    var r = e.idLookup, n = this.idLookup, o = [], a = [], c = [], u = [], f = [], h = e.alt, d = this.alt, l = function(C, D, P) {
      return (C.isVisible !== D.isVisible ? C.isVisible ? c : u : C.isVisible ? a : o).push(P) && f.push(P);
    }, _ = function(C, D, P) {
      return f.indexOf(P) < 0 && l(C, D, P);
    }, p, g, w, T, x, b, m, M;
    for (w in r)
      x = h[w], b = d[w], p = x ? jh(e, this, w) : r[w], T = p.element, g = n[w], b ? (M = g.isVisible || !b.isVisible && T === g.element ? g : b, m = x && !p.isVisible && !x.isVisible && M.element === x.element ? x : p, m.isVisible && M.isVisible && m.element !== M.element ? ((m.isDifferent(M) ? a : o).push(m.element, M.element), f.push(m.element, M.element)) : l(m, M, m.element), x && m.element === x.element && (x = r[w]), _(m.element !== g.element && x ? x : m, g, g.element), _(x && x.element === b.element ? x : m, b, b.element), x && _(x, b.element === x.element ? b : g, x.element)) : (g ? g.isDifferent(p) ? l(p, g, T) : o.push(T) : c.push(T), x && _(x, g, x.element));
    for (w in n)
      r[w] || (u.push(n[w].element), d[w] && u.push(d[w].element));
    return {
      changed: a,
      unchanged: o,
      enter: c,
      leave: u
    };
  }, t.recordInlineStyles = function() {
    for (var e = Xo[this.props] || Wo, r = this.elementStates.length; r--; )
      Rs(this.elementStates[r], e);
  }, t.interrupt = function(e) {
    var r = this, n = [];
    this.targets.forEach(function(o) {
      var a = o._flip, c = sc(a, e ? 0 : 1);
      e && c && n.indexOf(a) < 0 && a.add(function() {
        return r.updateVisibility();
      }), c && n.push(a);
    }), !e && n.length && this.updateVisibility(), this.interrupted || (this.interrupted = !!n.length);
  }, t.updateVisibility = function() {
    this.elementStates.forEach(function(e) {
      var r = e.element.getBoundingClientRect();
      e.isVisible = !!(r.width || r.height || r.top || r.left), e.uncache = 1;
    });
  }, t.getElementState = function(e) {
    return this.elementStates[this.targets.indexOf(vs(e))];
  }, t.makeAbsolute = function() {
    return No(this.elementStates.slice(0), !0, !0).map(nc);
  }, s;
}(), qr = /* @__PURE__ */ function() {
  function s(i, e, r) {
    i instanceof s ? Object.assign(this, i, e || {}) : (this.element = i, this.update(e, r));
  }
  var t = s.prototype;
  return t.isDifferent = function(e) {
    var r = this.bounds, n = e.bounds;
    return r.top !== n.top || r.left !== n.left || r.width !== n.width || r.height !== n.height || !this.matrix.equals(e.matrix) || this.opacity !== e.opacity || this.props && e.props && JSON.stringify(this.props) !== JSON.stringify(e.props);
  }, t.clone = function(e) {
    return new s(this, e);
  }, t.update = function(e, r) {
    var n = this, o = n.element, a = _e.getProperty(o), c = _e.core.getCache(o), u = o.getBoundingClientRect(), f = o.getBBox && typeof o.getBBox == "function" && o.nodeName.toLowerCase() !== "svg" && o.getBBox(), h = r ? new Zi(1, 0, 0, 1, u.left + Kl(), u.top + jl()) : ge(o, !1, !1, !0);
    c.uncache = 1, n.getProp = a, n.element = o, n.id = og(o), n.matrix = h, n.cache = c, n.bounds = u, n.isVisible = !!(u.width || u.height || u.left || u.top), n.display = a("display"), n.position = a("position"), n.parent = o.parentNode, n.x = a("x", "px"), n.y = a("y", "px"), n.scaleX = c.scaleX, n.scaleY = c.scaleY, n.rotation = a("rotation"), n.skewX = a("skewX"), n.opacity = a("opacity"), n.width = f ? f.width : Gi(a("width", "px"), 0.04), n.height = f ? f.height : Gi(a("height", "px"), 0.04), e && sg(n, rc[e] || Hh(e)), n.ctm = o.getCTM && o.nodeName.toLowerCase() === "svg" && vh(o).inverse(), n.simple = r || cn(h.a) === 1 && !cn(h.b) && !cn(h.c) && cn(h.d) === 1, n.uncache = 0;
  }, s;
}(), lg = /* @__PURE__ */ function() {
  function s(i, e) {
    this.vars = i, this.batch = e, this.states = [], this.timeline = e.timeline;
  }
  var t = s.prototype;
  return t.getStateById = function(e) {
    for (var r = this.states.length; r--; )
      if (this.states[r].idLookup[e])
        return this.states[r];
  }, t.kill = function() {
    this.batch.remove(this);
  }, s;
}(), cg = /* @__PURE__ */ function() {
  function s(i) {
    this.id = i, this.actions = [], this._kill = [], this._final = [], this._abs = [], this._run = [], this.data = {}, this.state = new Ci(), this.timeline = _e.timeline();
  }
  var t = s.prototype;
  return t.add = function(e) {
    var r = this.actions.filter(function(n) {
      return n.vars === e;
    });
    return r.length ? r[0] : (r = new lg(typeof e == "function" ? {
      animate: e
    } : e, this), this.actions.push(r), r);
  }, t.remove = function(e) {
    var r = this.actions.indexOf(e);
    return r >= 0 && this.actions.splice(r, 1), this;
  }, t.getState = function(e) {
    var r = this, n = Ft, o = ys;
    return Ft = this, this.state.clear(), this._kill.length = 0, this.actions.forEach(function(a) {
      a.vars.getState && (a.states.length = 0, ys = a, a.state = a.vars.getState(a)), e && a.states.forEach(function(c) {
        return r.state.add(c);
      });
    }), ys = o, Ft = n, this.killConflicts(), this;
  }, t.animate = function() {
    var e = this, r = Ft, n = this.timeline, o = this.actions.length, a, c;
    for (Ft = this, n.clear(), this._abs.length = this._final.length = this._run.length = 0, this.actions.forEach(function(u) {
      u.vars.animate && u.vars.animate(u);
      var f = u.vars.onEnter, h = u.vars.onLeave, d = u.targets, l, _;
      d && d.length && (f || h) && (l = new Ci(), u.states.forEach(function(p) {
        return l.add(p);
      }), _ = l.compare(Dn.getState(d)), _.enter.length && f && f(_.enter), _.leave.length && h && h(_.leave));
    }), qh(this._abs), this._run.forEach(function(u) {
      return u();
    }), c = n.duration(), a = this._final.slice(0), n.add(function() {
      c <= n.time() && (a.forEach(function(u) {
        return u();
      }), Su(e, "onComplete"));
    }), Ft = r; o--; )
      this.actions[o].vars.once && this.actions[o].kill();
    return Su(this, "onStart"), n.restart(), this;
  }, t.loadState = function(e) {
    e || (e = function() {
      return 0;
    });
    var r = [];
    return this.actions.forEach(function(n) {
      if (n.vars.loadState) {
        var o, a = function c(u) {
          u && (n.targets = u), o = r.indexOf(c), ~o && (r.splice(o, 1), r.length || e());
        };
        r.push(a), n.vars.loadState(a);
      }
    }), r.length || e(), this;
  }, t.setState = function() {
    return this.actions.forEach(function(e) {
      return e.targets = e.vars.setState && e.vars.setState(e);
    }), this;
  }, t.killConflicts = function(e) {
    return this.state.interrupt(e), this._kill.forEach(function(r) {
      return r.interrupt(e);
    }), this;
  }, t.run = function(e, r) {
    var n = this;
    return this !== Ft && (e || this.getState(r), this.loadState(function() {
      n._killed || (n.setState(), n.animate());
    })), this;
  }, t.clear = function(e) {
    this.state.clear(), e || (this.actions.length = 0);
  }, t.getStateById = function(e) {
    for (var r = this.actions.length, n; r--; )
      if (n = this.actions[r].getStateById(e), n)
        return n;
    return this.state.idLookup[e] && this.state;
  }, t.kill = function() {
    this._killed = 1, this.clear(), delete pl[this.id];
  }, s;
}(), Dn = /* @__PURE__ */ function() {
  function s() {
  }
  return s.getState = function(i, e) {
    var r = va(i, e);
    return ys && ys.states.push(r), e && e.batch && s.batch(e.batch).state.add(r), r;
  }, s.from = function(i, e) {
    return e = e || {}, "clearProps" in e || (e.clearProps = !0), ba(i, va(e.targets || i.targets, {
      props: e.props || i.props,
      simple: e.simple,
      kill: !!e.kill
    }), e, -1);
  }, s.to = function(i, e) {
    return ba(i, va(e.targets || i.targets, {
      props: e.props || i.props,
      simple: e.simple,
      kill: !!e.kill
    }), e, 1);
  }, s.fromTo = function(i, e, r) {
    return ba(i, e, r);
  }, s.fit = function(i, e, r) {
    var n = r ? un(r, Wh) : {}, o = r || n, a = o.absolute, c = o.scale, u = o.getVars, f = o.props, h = o.runBackwards, d = o.onComplete, l = o.simple, _ = r && r.fitChild && vs(r.fitChild), p = _l(e, f, l, i), g = _l(i, 0, l, p), w = f ? Xo[f] : Wo, T = _e.context();
    return f && Uh(n, p.props), Rs(g, w), h && ("immediateRender" in n || (n.immediateRender = !0), n.onComplete = function() {
      Fo(g), d && d.apply(this, arguments);
    }), a && nc(g, p), n = xn(g, p, c || _, !n.duration && f, _, n.duration || u ? n : 0), typeof r == "object" && "zIndex" in r && (n.zIndex = r.zIndex), T && !u && T.add(function() {
      return function() {
        return Fo(g);
      };
    }), u ? n : n.duration ? _e.to(g.element, n) : null;
  }, s.makeAbsolute = function(i, e) {
    return (i instanceof Ci ? i : new Ci(i, e)).makeAbsolute();
  }, s.batch = function(i) {
    return i || (i = "default"), pl[i] || (pl[i] = new cg(i));
  }, s.killFlipsOf = function(i, e) {
    (i instanceof Ci ? i.targets : Mn(i)).forEach(function(r) {
      return r && sc(r._flip, e !== !1 ? 1 : 2);
    });
  }, s.isFlipping = function(i) {
    var e = s.getByTarget(i);
    return !!e && e.isActive();
  }, s.getByTarget = function(i) {
    return (vs(i) || Ro)._flip;
  }, s.getElementState = function(i, e) {
    return new qr(vs(i), e);
  }, s.convertCoordinates = function(i, e, r) {
    var n = ge(e, !0, !0).multiply(ge(i));
    return r ? n.apply(r) : n;
  }, s.register = function(i) {
    if (sr = typeof document < "u" && document.body, sr) {
      _e = i, Gl(sr), Mn = _e.utils.toArray, dl = _e.core.getStyleSaver;
      var e = _e.utils.snap(0.1);
      Gi = function(n, o) {
        return e(parseFloat(n) + o);
      };
    }
  }, s;
}();
Dn.version = "3.15.0";
typeof window < "u" && window.gsap && window.gsap.registerPlugin(Dn);
Rt.registerPlugin(ct, ql, Ln, ec, Dn);
const Lu = (s, t = document) => t.querySelector(s), Vo = (s, t = document) => [...t.querySelectorAll(s)], An = window.matchMedia("(prefers-reduced-motion: reduce)").matches, oc = window.matchMedia("(hover: hover) and (pointer: fine)").matches, ug = ".h2, .portada__h, .pdp__titulo-riel, .indice__h1";
function fg(s = document) {
  An || Vo(ug, s).forEach((t) => {
    t.dataset.partido || t.classList.contains("partido") || (t.dataset.partido = "1", ql.create(t, {
      type: "lines",
      mask: "lines",
      autoSplit: !0,
      linesClass: "linea-partida",
      onSplit(i) {
        return Rt.from(i.lines, {
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
const Sa = /* @__PURE__ */ new WeakMap(), gl = /* @__PURE__ */ new Set();
function Kh(s) {
  const t = s.scrollWidth - s.clientWidth >= 40, i = Sa.get(s);
  if (t && !i) {
    const e = document.createElement("div"), r = () => Math.max(s.scrollWidth - s.clientWidth, 0), n = function() {
      s.scrollLeft = -this.x;
    }, [o] = Ln.create(e, {
      type: "x",
      trigger: s,
      inertia: !0,
      dragClickables: !0,
      allowNativeTouchScrolling: !0,
      cursor: "grab",
      activeCursor: "grabbing",
      onPress() {
        Rt.set(e, { x: -s.scrollLeft }), this.update(), this.applyBounds({ minX: -r(), maxX: 0 }), s.dataset.arrastrado = "0";
      },
      onDrag() {
        n.call(this), s.dataset.arrastrado = String(
          Math.max(Number(s.dataset.arrastrado || 0), Math.abs(this.deltaX))
        );
      },
      onThrowUpdate() {
        n.call(this);
      }
    });
    Sa.set(s, o);
  } else !t && i && (i.kill(), Sa.delete(s), s.style.cursor = "");
}
function hg(s = document) {
  An || !oc || Vo("[data-carrusel-pista]", s).forEach((t) => {
    t.closest("[data-recorrido]") || (gl.has(t) || (gl.add(t), t.addEventListener("click", (i) => {
      Number(t.dataset.arrastrado || 0) > 6 && (i.preventDefault(), i.stopPropagation());
    }, !0)), Kh(t));
  });
}
if (!An && oc) {
  let s = null;
  const t = () => {
    clearTimeout(s), s = setTimeout(() => gl.forEach(Kh), 150);
  };
  window.addEventListener("resize", t), window.addEventListener("load", t), document.fonts?.ready.then(t);
}
const dg = ".btn--lg, .carrusel__flecha, .marq__flecha";
function pg(s = document) {
  An || !oc || Vo(dg, s).forEach((t) => {
    if (t.dataset.iman) return;
    t.dataset.iman = "1";
    const i = Rt.quickTo(t, "x", { duration: 0.45, ease: "power3.out" }), e = Rt.quickTo(t, "y", { duration: 0.45, ease: "power3.out" });
    t.addEventListener("pointermove", (r) => {
      const n = t.getBoundingClientRect();
      i((r.clientX - (n.left + n.width / 2)) * 0.2), e((r.clientY - (n.top + n.height / 2)) * 0.2);
    }), t.addEventListener("pointerleave", () => {
      i(0), e(0);
    });
  });
}
function _g(s) {
  if (An || !s) return;
  const t = Lu("[data-abrir-carrito]"), i = s.matches?.("img") ? s : Lu("img", s);
  if (!t || !i || !i.getBoundingClientRect().width) return;
  const e = i.cloneNode(!0);
  e.removeAttribute("loading"), e.removeAttribute("sizes"), e.setAttribute("aria-hidden", "true"), Object.assign(e.style, {
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "90",
    margin: "0",
    pointerEvents: "none",
    borderRadius: "18px",
    objectFit: "contain"
  }), document.body.appendChild(e), Dn.fit(e, i, { scale: !0 }), Rt.timeline({ onComplete: () => e.remove() }).add(Dn.fit(e, t, {
    scale: !0,
    duration: 0.72,
    ease: "power2.inOut"
  }), 0).to(e, { opacity: 0.12, duration: 0.26, ease: "power2.in" }, 0.46).fromTo(t, { scale: 1 }, {
    scale: 1.16,
    duration: 0.16,
    yoyo: !0,
    repeat: 1,
    ease: "power2.out"
  }, 0.64);
}
function Qh(s) {
  if (An || !s) return;
  const t = Vo(".dlinea, .envio, .bundles", s);
  t.length && Rt.from(t, {
    opacity: 0,
    y: 14,
    duration: 0.5,
    ease: "power3.out",
    stagger: 0.05,
    overwrite: !0
  });
}
function Zh(s = document) {
  fg(s), hg(s), pg(s);
}
Rt.registerPlugin(ct);
const ac = window.matchMedia("(prefers-reduced-motion: reduce)").matches, Ri = (s, t = document) => t.querySelector(s), On = (s, t = document) => [...t.querySelectorAll(s)], Au = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }), gg = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
function Ru(s, t) {
  const i = Number(s) / 100;
  return t ? t.replace(/\{\{\s*(\w+)\s*\}\}/g, (e, r) => {
    switch (r) {
      case "amount":
      case "amount_with_comma_separator":
        return gg.format(i);
      case "amount_no_decimals":
      case "amount_no_decimals_with_comma_separator":
      default:
        return Au.format(Math.round(i));
    }
  }) : `$${Au.format(Math.round(i))}`;
}
function Jh() {
  const s = Ri(".picker"), t = Ri("#compare");
  if (!s || !t) return;
  const i = t.dataset.moneyFormat || "", e = Number(t.dataset.envioAfuera || 0), r = {};
  On("[data-f]", t).forEach((f) => {
    r[f.dataset.f] = f;
  });
  function n(f, h, d) {
    if (!f) return;
    const l = Number(f.dataset.centimos ?? h);
    if (f.dataset.centimos = h, !d || ac || l === h) {
      f.textContent = Ru(h, i);
      return;
    }
    const _ = { v: l };
    Rt.to(_, {
      v: h,
      duration: 0.55,
      ease: "power2.out",
      onUpdate: () => {
        f.textContent = Ru(_.v, i);
      }
    });
  }
  function o(f, h = !0) {
    const d = f.dataset, l = Number(d.full || 0), _ = Number(d.envio || 0) || e;
    r.name && (r.name.textContent = d.nombre || ""), r.name2 && (r.name2.textContent = d.nombre || ""), n(r.d5, Number(d.d5 || 0), h), n(r.d10, Number(d.d10 || 0), h), n(r.full, l, h), n(r.full2, l, h), n(r.ship, _, h), n(r.totalUs, l, h), n(r.totalThem, l + _, h), r.link && (r.link.href = d.url || "#");
  }
  const a = On(".chip", s);
  function c(f, h = !0, d = !0) {
    a.forEach((l) => {
      const _ = l === f;
      l.setAttribute("aria-selected", String(_)), l.tabIndex = _ ? 0 : -1;
    }), f.id && t.setAttribute("aria-labelledby", f.id), d && f.focus(), o(f, h);
  }
  a.forEach((f) => {
    f.addEventListener("click", () => c(f, !0, !1)), f.addEventListener("keydown", (h) => {
      const d = a.indexOf(f);
      let l = null;
      h.key === "ArrowRight" || h.key === "ArrowDown" ? l = (d + 1) % a.length : h.key === "ArrowLeft" || h.key === "ArrowUp" ? l = (d - 1 + a.length) % a.length : h.key === "Home" ? l = 0 : h.key === "End" && (l = a.length - 1), l !== null && (h.preventDefault(), c(a[l]));
    });
  });
  const u = a.find((f) => f.getAttribute("aria-selected") === "true") || a[0];
  u && c(u, !1, !1);
}
function td() {
  On(".card__slide, .pdp__img").forEach((s) => {
    const t = () => {
      if (s.parentElement.querySelector(".card__sinfoto")) return;
      const i = document.createElement("span");
      i.className = "card__sinfoto", i.setAttribute("aria-hidden", "true"), s.parentElement.appendChild(i), s.style.display = "none";
    };
    s.addEventListener("error", t), s.complete && s.naturalWidth === 0 && t();
  });
}
let en = null;
function mg() {
  ac || (en = new Zp({ lerp: 0.11, wheelMultiplier: 1, touchMultiplier: 1.6 }), en.on("scroll", ct.update), Rt.ticker.add((s) => en.raf(s * 1e3)), Rt.ticker.lagSmoothing(0), window.DropScentsLenis = en), On('a[href^="#"]').forEach((s) => {
    s.addEventListener("click", (t) => {
      const i = s.getAttribute("href");
      if (!i || i === "#") return;
      const e = i === "#top" ? 0 : Ri(i);
      !e && e !== 0 || (t.preventDefault(), en ? en.scrollTo(e, { offset: -72, duration: 1.15 }) : window.scrollTo({ top: e === 0 ? 0 : e.offsetTop - 72 }));
    });
  });
}
function yg() {
  ac || (Ri("[data-hero-in]") && (Rt.set("[data-hero-in]", { opacity: 0, y: 26 }), Rt.timeline({ delay: 0.15 }).to("[data-hero-in]", {
    opacity: 1,
    y: 0,
    duration: 1.05,
    ease: "expo.out",
    stagger: 0.055
  })), Ri(".step") && Rt.matchMedia().add(
    { ancho: "(min-width: 900px)", angosto: "(max-width: 899px)" },
    (s) => {
      const t = s.conditions.ancho ? 50 : 0;
      On(".step").forEach((i, e) => {
        Rt.from(i, {
          opacity: 0,
          y: 70,
          x: e === 1 ? t : -t,
          rotate: t ? e === 1 ? 1.6 : -1.6 : 0,
          duration: 1.1,
          ease: "expo.out",
          scrollTrigger: { trigger: i, start: "top 88%" }
        }), Rt.to(i, {
          yPercent: -6 - e * 5,
          ease: "none",
          scrollTrigger: { trigger: ".steps", start: "top bottom", end: "bottom top", scrub: 1 }
        });
      });
    }
  ), Ri(".compare") && (Rt.from(".compare__col--us", {
    opacity: 0,
    xPercent: 4,
    scale: 0.97,
    duration: 1,
    ease: "expo.out",
    scrollTrigger: { trigger: ".compare", start: "top 82%" }
  }), Rt.from(".compare__col--them", {
    opacity: 0,
    xPercent: -4,
    scale: 0.97,
    duration: 1,
    ease: "expo.out",
    delay: 0.08,
    scrollTrigger: { trigger: ".compare", start: "top 82%" }
  }), Rt.from(".chip", {
    opacity: 0,
    y: 14,
    duration: 0.6,
    ease: "power3.out",
    stagger: 0.045,
    scrollTrigger: { trigger: ".picker", start: "top 90%" }
  })), Ri("[data-reveal-card]") && ct.batch("[data-reveal-card]", {
    start: "top 92%",
    once: !0,
    onEnter: (s) => Rt.fromTo(
      s,
      { opacity: 0, y: 46, scale: 0.97 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.85,
        ease: "expo.out",
        stagger: 0.07,
        overwrite: "auto",
        clearProps: "transform"
      }
    )
  }), On(".qa__item").forEach((s, t) => {
    Rt.from(s, {
      opacity: 0,
      x: -24,
      duration: 0.7,
      ease: "power3.out",
      delay: t * 0.03,
      scrollTrigger: { trigger: s, start: "top 92%" }
    });
  }), Ri(".bubble") && Rt.from(".bubble", {
    opacity: 0,
    y: 26,
    scale: 0.92,
    transformOrigin: "bottom center",
    duration: 0.6,
    ease: "back.out(1.6)",
    stagger: 0.13,
    scrollTrigger: { trigger: ".chat", start: "top 82%" }
  }), Ri(".cierre__card") && Rt.from(".cierre__card", {
    opacity: 0,
    scale: 0.96,
    y: 40,
    duration: 1.1,
    ease: "expo.out",
    scrollTrigger: { trigger: ".cierre", start: "top 85%" }
  }));
}
function vg() {
  const s = Ri("#nav");
  s && ct.create({
    start: "top -60",
    end: 99999,
    onToggle: (t) => s.classList.toggle("is-stuck", t.isActive)
  });
}
function wg() {
  "scrollRestoration" in history && (history.scrollRestoration = "manual"), window.scrollTo(0, 0), window.addEventListener("pageshow", () => window.scrollTo(0, 0)), c_(), f_(), Jh(), td(), mg(), uh(), yg(), vg(), document.fonts?.ready && document.fonts.ready.then(() => ct.refresh());
}
function xg() {
  window.Shopify?.designMode && (document.addEventListener("shopify:section:load", (s) => {
    uh(s.target), Jh(), td(), hh(s.target), Zh(s.target), ct.refresh();
  }), document.addEventListener("shopify:section:unload", (s) => {
    v_(s.target), ct.refresh();
  }));
}
const ve = (s, t = document) => t.querySelector(s), Nu = (s, t = document) => Array.from(t.querySelectorAll(s)), bg = "carrito-drawer";
async function ml() {
  const s = ve("[data-carrito-drawer]");
  if (!s) return;
  const t = s.classList.contains("is-on"), i = await fetch(`${window.Shopify?.routes?.root || "/"}?section_id=${bg}`);
  if (!i.ok) return;
  const e = await i.text(), r = new DOMParser().parseFromString(e, "text/html").querySelector("[data-carrito-drawer]");
  r && (t && (r.classList.add("is-on"), r.hidden = !1), s.replaceWith(r), t && Qh(r), rd());
}
function ed(s) {
  const t = ve("[data-carrito-drawer] .drawer__panel");
  if (!t || !s) return;
  ve("[data-cart-aviso]")?.remove();
  const i = document.createElement("p");
  i.className = "dcart__aviso", i.setAttribute("data-cart-aviso", ""), i.setAttribute("role", "status"), i.textContent = s, t.querySelector(".dcart__top")?.after(i);
}
async function id(s) {
  try {
    const t = await s.json();
    return t.description || t.message || null;
  } catch {
    return null;
  }
}
function rd() {
  const s = ve("[data-carrito-drawer] [data-cart-count]"), t = s ? s.textContent.trim() : null;
  if (t === null) return;
  Nu("[data-cart-count]").forEach((e) => {
    e.closest("[data-carrito-drawer]") || (e.textContent = t, e.hidden = t === "0");
  });
  const i = ve("[data-carrito-drawer] [data-cart-aria]")?.textContent.trim();
  i && Nu("[data-cart-aria-destino]").forEach((e) => e.setAttribute("aria-label", i));
}
let yl = null;
function Ta() {
  const s = ve("[data-carrito-drawer]");
  return s ? (yl = document.activeElement, s.hidden = !1, requestAnimationFrame(() => {
    s.classList.add("is-on"), Qh(s);
  }), document.documentElement.style.overflow = "hidden", window.DropScentsLenis?.stop(), ve(".drawer__cerrar", s)?.focus(), !0) : !1;
}
function Fu() {
  const s = ve("[data-carrito-drawer]");
  s && (s.classList.remove("is-on"), document.documentElement.style.overflow = "", window.DropScentsLenis?.start(), setTimeout(() => {
    s.hidden = !0;
  }, 320), yl?.focus?.(), yl = null);
}
function Sg() {
  ve("[data-carrito-drawer]") && (document.addEventListener("click", (s) => {
    if (s.target.closest("[data-abrir-carrito]")) {
      if (s.metaKey || s.ctrlKey || s.shiftKey || s.button !== 0) return;
      s.preventDefault(), Ta();
      return;
    }
    s.target.closest("[data-drawer-cerrar]") && s.target.closest("[data-carrito-drawer]") && (s.preventDefault(), Fu());
  }), document.addEventListener("keydown", (s) => {
    if (s.key !== "Escape") return;
    ve("[data-carrito-drawer].is-on") && Fu();
  }), document.addEventListener("submit", async (s) => {
    const t = s.target.closest('form[action*="/cart/add"]');
    if (!t) return;
    s.preventDefault();
    const i = t.querySelector('[type="submit"]');
    i?.classList.add("is-cargando"), _g(Tg(t));
    try {
      const e = await fetch(`${window.Shopify?.routes?.root || "/"}cart/add.js`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(t)
      });
      if (!e.ok) {
        const r = await id(e);
        await ml(), Ta(), r ? ed(r) : t.submit();
        return;
      }
      await ml(), Ta();
    } catch {
      t.submit();
    } finally {
      i?.classList.remove("is-cargando");
    }
  }), document.addEventListener("click", async (s) => {
    if (!s.target.closest("[data-carrito-drawer]")) return;
    const i = s.target.closest("[data-quitar]");
    if (i) {
      s.preventDefault();
      const o = i.closest(".dlinea")?.querySelector("[data-linea]")?.dataset.linea;
      o && await Ea(Number(o), 0);
      return;
    }
    const e = s.target.closest("[data-cantidad]");
    if (!e) return;
    s.preventDefault();
    const r = e.parentElement.querySelector(".cantidad__i");
    if (!r) return;
    const n = Math.max(0, Number(r.value || 0) + Number(e.dataset.cantidad));
    await Ea(Number(r.dataset.linea), n);
  }), document.addEventListener("change", async (s) => {
    const t = s.target.closest("[data-carrito-drawer] .cantidad__i");
    t && await Ea(Number(t.dataset.linea), Math.max(0, Number(t.value || 0)));
  }), rd());
}
function Tg(s) {
  const t = s.closest(".pdp");
  if (t) return ve(".pdp__img.is-on", t) || ve(".pdp__img", t);
  const i = s.closest(".bundle, .tarjeta, article, li");
  return i ? ve("img", i) : null;
}
async function Ea(s, t) {
  if (!s) return;
  ve("[data-carrito-drawer]")?.classList.add("is-ocupado");
  try {
    const e = await fetch(`${window.Shopify?.routes?.root || "/"}cart/change.js`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ line: s, quantity: t })
    }), r = e.ok ? null : await id(e);
    await ml(), r && ed(r);
  } finally {
    ve("[data-carrito-drawer]")?.classList.remove("is-ocupado");
  }
}
function Eg() {
  const s = ve("[data-atc-fija]"), t = ve(".pdp__atc");
  if (!s || !t) return;
  new IntersectionObserver(([e]) => {
    s.classList.toggle("is-on", !e.isIntersecting);
  }, { rootMargin: "0px 0px -8px 0px" }).observe(t);
}
const Iu = (s, t = document) => t.querySelector(s), Ca = (s, t = document) => Array.from(t.querySelectorAll(s));
function Cg() {
  Ca(".marquesina").forEach((s) => {
    const t = Iu("[data-marq-pista]", s), i = Ca("[data-marq-paso]", s);
    if (!t || !i.length) return;
    const e = parseFloat(getComputedStyle(t).animationDuration);
    if (!e) {
      i.forEach((f) => {
        f.hidden = !0;
      });
      return;
    }
    const r = Iu(".marquesina__grupo", s), n = Ca(".marquesina__item", r);
    if (!n.length) return;
    const o = r.getBoundingClientRect().width, a = n[0].getBoundingClientRect().width + parseFloat(getComputedStyle(r).gap || 0), c = e * (a / o);
    let u = 0;
    i.forEach((f) => {
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
wg();
Sg();
Eg();
Cg();
hh();
Zh();
xg();
