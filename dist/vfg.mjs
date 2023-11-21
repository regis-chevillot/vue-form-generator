import { resolveDirective as Tt, withDirectives as le, openBlock as E, createElementBlock as N, normalizeClass as Me, vModelCheckbox as kg, Fragment as Oe, renderList as Je, createElementVNode as Ee, createTextVNode as Ot, toDisplayString as ge, createCommentVNode as ee, vModelSelect as qg, vModelText as Gg, createBlock as Se, withKeys as ot, withModifiers as he, renderSlot as xe, createVNode as pe, vShow as Wn, Transition as $l, withCtx as Br, toRaw as Yg, resolveDynamicComponent as ls, resolveComponent as zg } from "vue";
var dn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Kg(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Pr = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Pr.exports;
(function(r, o) {
  (function() {
    var s, m = "4.17.10", O = 200, p = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", v = "Expected a function", T = "__lodash_hash_undefined__", q = 500, ae = "__lodash_placeholder__", Te = 1, it = 2, ce = 4, ht = 1, Pt = 2, Fe = 1, ct = 2, pn = 4, k = 8, S = 16, C = 32, J = 64, K = 128, _e = 256, $ = 512, Zt = 30, gn = "...", Vt = 800, mn = 16, vn = 1, _n = 2, Jl = 3, $t = 1 / 0, At = 9007199254740991, Xl = 17976931348623157e292, kn = 0 / 0, st = 4294967295, Ql = st - 1, jl = st >>> 1, ea = [
      ["ary", K],
      ["bind", Fe],
      ["bindKey", ct],
      ["curry", k],
      ["curryRight", S],
      ["flip", $],
      ["partial", C],
      ["partialRight", J],
      ["rearg", _e]
    ], Jt = "[object Arguments]", qn = "[object Array]", ta = "[object AsyncFunction]", bn = "[object Boolean]", yn = "[object Date]", na = "[object DOMException]", Gn = "[object Error]", Yn = "[object Function]", fs = "[object GeneratorFunction]", Xe = "[object Map]", wn = "[object Number]", ra = "[object Null]", dt = "[object Object]", hs = "[object Promise]", ia = "[object Proxy]", Sn = "[object RegExp]", Qe = "[object Set]", On = "[object String]", zn = "[object Symbol]", sa = "[object Undefined]", Tn = "[object WeakMap]", ua = "[object WeakSet]", An = "[object ArrayBuffer]", Xt = "[object DataView]", Vr = "[object Float32Array]", $r = "[object Float64Array]", Ur = "[object Int8Array]", Hr = "[object Int16Array]", Wr = "[object Int32Array]", kr = "[object Uint8Array]", qr = "[object Uint8ClampedArray]", Gr = "[object Uint16Array]", Yr = "[object Uint32Array]", la = /\b__p \+= '';/g, aa = /\b(__p \+=) '' \+/g, oa = /(__e\(.*?\)|\b__t\)) \+\n'';/g, cs = /&(?:amp|lt|gt|quot|#39);/g, ds = /[&<>"']/g, fa = RegExp(cs.source), ha = RegExp(ds.source), ca = /<%-([\s\S]+?)%>/g, da = /<%([\s\S]+?)%>/g, ps = /<%=([\s\S]+?)%>/g, pa = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ga = /^\w*$/, ma = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, zr = /[\\^$.*+?()[\]{}|]/g, va = RegExp(zr.source), gs = /^\s+|\s+$/g, ms = /^\s+/, _a = /\s+$/, ba = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, ya = /\{\n\/\* \[wrapped with (.+)\] \*/, wa = /,? & /, Sa = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Oa = /\\(\\)?/g, Ta = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, vs = /\w*$/, Aa = /^[-+]0x[0-9a-f]+$/i, Ca = /^0b[01]+$/i, La = /^\[object .+?Constructor\]$/, Ia = /^0o[0-7]+$/i, xa = /^(?:0|[1-9]\d*)$/, Ea = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Kn = /($^)/, Ma = /['\n\r\u2028\u2029\\]/g, Zn = "\\ud800-\\udfff", Fa = "\\u0300-\\u036f", Da = "\\ufe20-\\ufe2f", Ra = "\\u20d0-\\u20ff", _s = Fa + Da + Ra, bs = "\\u2700-\\u27bf", ys = "a-z\\xdf-\\xf6\\xf8-\\xff", Na = "\\xac\\xb1\\xd7\\xf7", Ba = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Pa = "\\u2000-\\u206f", Va = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", ws = "A-Z\\xc0-\\xd6\\xd8-\\xde", Ss = "\\ufe0e\\ufe0f", Os = Na + Ba + Pa + Va, Kr = "['’]", $a = "[" + Zn + "]", Ts = "[" + Os + "]", Jn = "[" + _s + "]", As = "\\d+", Ua = "[" + bs + "]", Cs = "[" + ys + "]", Ls = "[^" + Zn + Os + As + bs + ys + ws + "]", Zr = "\\ud83c[\\udffb-\\udfff]", Ha = "(?:" + Jn + "|" + Zr + ")", Is = "[^" + Zn + "]", Jr = "(?:\\ud83c[\\udde6-\\uddff]){2}", Xr = "[\\ud800-\\udbff][\\udc00-\\udfff]", Qt = "[" + ws + "]", xs = "\\u200d", Es = "(?:" + Cs + "|" + Ls + ")", Wa = "(?:" + Qt + "|" + Ls + ")", Ms = "(?:" + Kr + "(?:d|ll|m|re|s|t|ve))?", Fs = "(?:" + Kr + "(?:D|LL|M|RE|S|T|VE))?", Ds = Ha + "?", Rs = "[" + Ss + "]?", ka = "(?:" + xs + "(?:" + [Is, Jr, Xr].join("|") + ")" + Rs + Ds + ")*", qa = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Ga = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ns = Rs + Ds + ka, Ya = "(?:" + [Ua, Jr, Xr].join("|") + ")" + Ns, za = "(?:" + [Is + Jn + "?", Jn, Jr, Xr, $a].join("|") + ")", Ka = RegExp(Kr, "g"), Za = RegExp(Jn, "g"), Qr = RegExp(Zr + "(?=" + Zr + ")|" + za + Ns, "g"), Ja = RegExp([
      Qt + "?" + Cs + "+" + Ms + "(?=" + [Ts, Qt, "$"].join("|") + ")",
      Wa + "+" + Fs + "(?=" + [Ts, Qt + Es, "$"].join("|") + ")",
      Qt + "?" + Es + "+" + Ms,
      Qt + "+" + Fs,
      Ga,
      qa,
      As,
      Ya
    ].join("|"), "g"), Xa = RegExp("[" + xs + Zn + _s + Ss + "]"), Qa = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, ja = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], eo = -1, j = {};
    j[Vr] = j[$r] = j[Ur] = j[Hr] = j[Wr] = j[kr] = j[qr] = j[Gr] = j[Yr] = !0, j[Jt] = j[qn] = j[An] = j[bn] = j[Xt] = j[yn] = j[Gn] = j[Yn] = j[Xe] = j[wn] = j[dt] = j[Sn] = j[Qe] = j[On] = j[Tn] = !1;
    var X = {};
    X[Jt] = X[qn] = X[An] = X[Xt] = X[bn] = X[yn] = X[Vr] = X[$r] = X[Ur] = X[Hr] = X[Wr] = X[Xe] = X[wn] = X[dt] = X[Sn] = X[Qe] = X[On] = X[zn] = X[kr] = X[qr] = X[Gr] = X[Yr] = !0, X[Gn] = X[Yn] = X[Tn] = !1;
    var to = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, no = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, ro = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, io = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, so = parseFloat, uo = parseInt, Bs = typeof dn == "object" && dn && dn.Object === Object && dn, lo = typeof self == "object" && self && self.Object === Object && self, me = Bs || lo || Function("return this")(), jr = o && !o.nodeType && o, Ut = jr && !0 && r && !r.nodeType && r, Ps = Ut && Ut.exports === jr, ei = Ps && Bs.process, He = function() {
      try {
        var c = Ut && Ut.require && Ut.require("util").types;
        return c || ei && ei.binding && ei.binding("util");
      } catch {
      }
    }(), Vs = He && He.isArrayBuffer, $s = He && He.isDate, Us = He && He.isMap, Hs = He && He.isRegExp, Ws = He && He.isSet, ks = He && He.isTypedArray;
    function Pe(c, _, g) {
      switch (g.length) {
        case 0:
          return c.call(_);
        case 1:
          return c.call(_, g[0]);
        case 2:
          return c.call(_, g[0], g[1]);
        case 3:
          return c.call(_, g[0], g[1], g[2]);
      }
      return c.apply(_, g);
    }
    function ao(c, _, g, I) {
      for (var R = -1, G = c == null ? 0 : c.length; ++R < G; ) {
        var oe = c[R];
        _(I, oe, g(oe), c);
      }
      return I;
    }
    function We(c, _) {
      for (var g = -1, I = c == null ? 0 : c.length; ++g < I && _(c[g], g, c) !== !1; )
        ;
      return c;
    }
    function oo(c, _) {
      for (var g = c == null ? 0 : c.length; g-- && _(c[g], g, c) !== !1; )
        ;
      return c;
    }
    function qs(c, _) {
      for (var g = -1, I = c == null ? 0 : c.length; ++g < I; )
        if (!_(c[g], g, c))
          return !1;
      return !0;
    }
    function Ct(c, _) {
      for (var g = -1, I = c == null ? 0 : c.length, R = 0, G = []; ++g < I; ) {
        var oe = c[g];
        _(oe, g, c) && (G[R++] = oe);
      }
      return G;
    }
    function Xn(c, _) {
      var g = c == null ? 0 : c.length;
      return !!g && jt(c, _, 0) > -1;
    }
    function ti(c, _, g) {
      for (var I = -1, R = c == null ? 0 : c.length; ++I < R; )
        if (g(_, c[I]))
          return !0;
      return !1;
    }
    function te(c, _) {
      for (var g = -1, I = c == null ? 0 : c.length, R = Array(I); ++g < I; )
        R[g] = _(c[g], g, c);
      return R;
    }
    function Lt(c, _) {
      for (var g = -1, I = _.length, R = c.length; ++g < I; )
        c[R + g] = _[g];
      return c;
    }
    function ni(c, _, g, I) {
      var R = -1, G = c == null ? 0 : c.length;
      for (I && G && (g = c[++R]); ++R < G; )
        g = _(g, c[R], R, c);
      return g;
    }
    function fo(c, _, g, I) {
      var R = c == null ? 0 : c.length;
      for (I && R && (g = c[--R]); R--; )
        g = _(g, c[R], R, c);
      return g;
    }
    function ri(c, _) {
      for (var g = -1, I = c == null ? 0 : c.length; ++g < I; )
        if (_(c[g], g, c))
          return !0;
      return !1;
    }
    var ho = ii("length");
    function co(c) {
      return c.split("");
    }
    function po(c) {
      return c.match(Sa) || [];
    }
    function Gs(c, _, g) {
      var I;
      return g(c, function(R, G, oe) {
        if (_(R, G, oe))
          return I = G, !1;
      }), I;
    }
    function Qn(c, _, g, I) {
      for (var R = c.length, G = g + (I ? 1 : -1); I ? G-- : ++G < R; )
        if (_(c[G], G, c))
          return G;
      return -1;
    }
    function jt(c, _, g) {
      return _ === _ ? Co(c, _, g) : Qn(c, Ys, g);
    }
    function go(c, _, g, I) {
      for (var R = g - 1, G = c.length; ++R < G; )
        if (I(c[R], _))
          return R;
      return -1;
    }
    function Ys(c) {
      return c !== c;
    }
    function zs(c, _) {
      var g = c == null ? 0 : c.length;
      return g ? ui(c, _) / g : kn;
    }
    function ii(c) {
      return function(_) {
        return _ == null ? s : _[c];
      };
    }
    function si(c) {
      return function(_) {
        return c == null ? s : c[_];
      };
    }
    function Ks(c, _, g, I, R) {
      return R(c, function(G, oe, Z) {
        g = I ? (I = !1, G) : _(g, G, oe, Z);
      }), g;
    }
    function mo(c, _) {
      var g = c.length;
      for (c.sort(_); g--; )
        c[g] = c[g].value;
      return c;
    }
    function ui(c, _) {
      for (var g, I = -1, R = c.length; ++I < R; ) {
        var G = _(c[I]);
        G !== s && (g = g === s ? G : g + G);
      }
      return g;
    }
    function li(c, _) {
      for (var g = -1, I = Array(c); ++g < c; )
        I[g] = _(g);
      return I;
    }
    function vo(c, _) {
      return te(_, function(g) {
        return [g, c[g]];
      });
    }
    function Ve(c) {
      return function(_) {
        return c(_);
      };
    }
    function ai(c, _) {
      return te(_, function(g) {
        return c[g];
      });
    }
    function Cn(c, _) {
      return c.has(_);
    }
    function Zs(c, _) {
      for (var g = -1, I = c.length; ++g < I && jt(_, c[g], 0) > -1; )
        ;
      return g;
    }
    function Js(c, _) {
      for (var g = c.length; g-- && jt(_, c[g], 0) > -1; )
        ;
      return g;
    }
    function _o(c, _) {
      for (var g = c.length, I = 0; g--; )
        c[g] === _ && ++I;
      return I;
    }
    var bo = si(to), yo = si(no);
    function wo(c) {
      return "\\" + io[c];
    }
    function So(c, _) {
      return c == null ? s : c[_];
    }
    function en(c) {
      return Xa.test(c);
    }
    function Oo(c) {
      return Qa.test(c);
    }
    function To(c) {
      for (var _, g = []; !(_ = c.next()).done; )
        g.push(_.value);
      return g;
    }
    function oi(c) {
      var _ = -1, g = Array(c.size);
      return c.forEach(function(I, R) {
        g[++_] = [R, I];
      }), g;
    }
    function Xs(c, _) {
      return function(g) {
        return c(_(g));
      };
    }
    function It(c, _) {
      for (var g = -1, I = c.length, R = 0, G = []; ++g < I; ) {
        var oe = c[g];
        (oe === _ || oe === ae) && (c[g] = ae, G[R++] = g);
      }
      return G;
    }
    function fi(c, _) {
      return _ == "__proto__" ? s : c[_];
    }
    function jn(c) {
      var _ = -1, g = Array(c.size);
      return c.forEach(function(I) {
        g[++_] = I;
      }), g;
    }
    function Ao(c) {
      var _ = -1, g = Array(c.size);
      return c.forEach(function(I) {
        g[++_] = [I, I];
      }), g;
    }
    function Co(c, _, g) {
      for (var I = g - 1, R = c.length; ++I < R; )
        if (c[I] === _)
          return I;
      return -1;
    }
    function Lo(c, _, g) {
      for (var I = g + 1; I--; )
        if (c[I] === _)
          return I;
      return I;
    }
    function tn(c) {
      return en(c) ? xo(c) : ho(c);
    }
    function je(c) {
      return en(c) ? Eo(c) : co(c);
    }
    var Io = si(ro);
    function xo(c) {
      for (var _ = Qr.lastIndex = 0; Qr.test(c); )
        ++_;
      return _;
    }
    function Eo(c) {
      return c.match(Qr) || [];
    }
    function Mo(c) {
      return c.match(Ja) || [];
    }
    var Fo = function c(_) {
      _ = _ == null ? me : nn.defaults(me.Object(), _, nn.pick(me, ja));
      var g = _.Array, I = _.Date, R = _.Error, G = _.Function, oe = _.Math, Z = _.Object, hi = _.RegExp, Do = _.String, ke = _.TypeError, er = g.prototype, Ro = G.prototype, rn = Z.prototype, tr = _["__core-js_shared__"], nr = Ro.toString, Q = rn.hasOwnProperty, No = 0, Qs = function() {
        var e = /[^.]+$/.exec(tr && tr.keys && tr.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), rr = rn.toString, Bo = nr.call(Z), Po = me._, Vo = hi(
        "^" + nr.call(Q).replace(zr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), ir = Ps ? _.Buffer : s, xt = _.Symbol, sr = _.Uint8Array, js = ir ? ir.allocUnsafe : s, ur = Xs(Z.getPrototypeOf, Z), eu = Z.create, tu = rn.propertyIsEnumerable, lr = er.splice, nu = xt ? xt.isConcatSpreadable : s, Ln = xt ? xt.iterator : s, Ht = xt ? xt.toStringTag : s, ar = function() {
        try {
          var e = Gt(Z, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), $o = _.clearTimeout !== me.clearTimeout && _.clearTimeout, Uo = I && I.now !== me.Date.now && I.now, Ho = _.setTimeout !== me.setTimeout && _.setTimeout, or = oe.ceil, fr = oe.floor, ci = Z.getOwnPropertySymbols, Wo = ir ? ir.isBuffer : s, ko = _.isFinite, qo = er.join, Go = Xs(Z.keys, Z), fe = oe.max, be = oe.min, Yo = I.now, zo = _.parseInt, ru = oe.random, Ko = er.reverse, di = Gt(_, "DataView"), In = Gt(_, "Map"), pi = Gt(_, "Promise"), sn = Gt(_, "Set"), xn = Gt(_, "WeakMap"), En = Gt(Z, "create"), hr = xn && new xn(), Mn = {}, Zo = Yt(di), Jo = Yt(In), Xo = Yt(pi), Qo = Yt(sn), jo = Yt(xn), cr = xt ? xt.prototype : s, Fn = cr ? cr.valueOf : s, iu = cr ? cr.toString : s;
      function l(e) {
        if (ie(e) && !B(e) && !(e instanceof W)) {
          if (e instanceof qe)
            return e;
          if (Q.call(e, "__wrapped__"))
            return il(e);
        }
        return new qe(e);
      }
      var un = function() {
        function e() {
        }
        return function(t) {
          if (!ne(t))
            return {};
          if (eu)
            return eu(t);
          e.prototype = t;
          var n = new e();
          return e.prototype = s, n;
        };
      }();
      function dr() {
      }
      function qe(e, t) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = s;
      }
      l.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: ca,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: da,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: ps,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: l
        }
      }, l.prototype = dr.prototype, l.prototype.constructor = l, qe.prototype = un(dr.prototype), qe.prototype.constructor = qe;
      function W(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = st, this.__views__ = [];
      }
      function ef() {
        var e = new W(this.__wrapped__);
        return e.__actions__ = De(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = De(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = De(this.__views__), e;
      }
      function tf() {
        if (this.__filtered__) {
          var e = new W(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function nf() {
        var e = this.__wrapped__.value(), t = this.__dir__, n = B(e), i = t < 0, u = n ? e.length : 0, a = mh(0, u, this.__views__), f = a.start, h = a.end, d = h - f, w = i ? h : f - 1, y = this.__iteratees__, A = y.length, L = 0, x = be(d, this.__takeCount__);
        if (!n || !i && u == d && x == d)
          return Iu(e, this.__actions__);
        var D = [];
        e:
          for (; d-- && L < x; ) {
            w += t;
            for (var U = -1, F = e[w]; ++U < A; ) {
              var H = y[U], z = H.iteratee, Le = H.type, Ie = z(F);
              if (Le == _n)
                F = Ie;
              else if (!Ie) {
                if (Le == vn)
                  continue e;
                break e;
              }
            }
            D[L++] = F;
          }
        return D;
      }
      W.prototype = un(dr.prototype), W.prototype.constructor = W;
      function Wt(e) {
        var t = -1, n = e == null ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var i = e[t];
          this.set(i[0], i[1]);
        }
      }
      function rf() {
        this.__data__ = En ? En(null) : {}, this.size = 0;
      }
      function sf(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t;
      }
      function uf(e) {
        var t = this.__data__;
        if (En) {
          var n = t[e];
          return n === T ? s : n;
        }
        return Q.call(t, e) ? t[e] : s;
      }
      function lf(e) {
        var t = this.__data__;
        return En ? t[e] !== s : Q.call(t, e);
      }
      function af(e, t) {
        var n = this.__data__;
        return this.size += this.has(e) ? 0 : 1, n[e] = En && t === s ? T : t, this;
      }
      Wt.prototype.clear = rf, Wt.prototype.delete = sf, Wt.prototype.get = uf, Wt.prototype.has = lf, Wt.prototype.set = af;
      function pt(e) {
        var t = -1, n = e == null ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var i = e[t];
          this.set(i[0], i[1]);
        }
      }
      function of() {
        this.__data__ = [], this.size = 0;
      }
      function ff(e) {
        var t = this.__data__, n = pr(t, e);
        if (n < 0)
          return !1;
        var i = t.length - 1;
        return n == i ? t.pop() : lr.call(t, n, 1), --this.size, !0;
      }
      function hf(e) {
        var t = this.__data__, n = pr(t, e);
        return n < 0 ? s : t[n][1];
      }
      function cf(e) {
        return pr(this.__data__, e) > -1;
      }
      function df(e, t) {
        var n = this.__data__, i = pr(n, e);
        return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this;
      }
      pt.prototype.clear = of, pt.prototype.delete = ff, pt.prototype.get = hf, pt.prototype.has = cf, pt.prototype.set = df;
      function gt(e) {
        var t = -1, n = e == null ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var i = e[t];
          this.set(i[0], i[1]);
        }
      }
      function pf() {
        this.size = 0, this.__data__ = {
          hash: new Wt(),
          map: new (In || pt)(),
          string: new Wt()
        };
      }
      function gf(e) {
        var t = Cr(this, e).delete(e);
        return this.size -= t ? 1 : 0, t;
      }
      function mf(e) {
        return Cr(this, e).get(e);
      }
      function vf(e) {
        return Cr(this, e).has(e);
      }
      function _f(e, t) {
        var n = Cr(this, e), i = n.size;
        return n.set(e, t), this.size += n.size == i ? 0 : 1, this;
      }
      gt.prototype.clear = pf, gt.prototype.delete = gf, gt.prototype.get = mf, gt.prototype.has = vf, gt.prototype.set = _f;
      function kt(e) {
        var t = -1, n = e == null ? 0 : e.length;
        for (this.__data__ = new gt(); ++t < n; )
          this.add(e[t]);
      }
      function bf(e) {
        return this.__data__.set(e, T), this;
      }
      function yf(e) {
        return this.__data__.has(e);
      }
      kt.prototype.add = kt.prototype.push = bf, kt.prototype.has = yf;
      function et(e) {
        var t = this.__data__ = new pt(e);
        this.size = t.size;
      }
      function wf() {
        this.__data__ = new pt(), this.size = 0;
      }
      function Sf(e) {
        var t = this.__data__, n = t.delete(e);
        return this.size = t.size, n;
      }
      function Of(e) {
        return this.__data__.get(e);
      }
      function Tf(e) {
        return this.__data__.has(e);
      }
      function Af(e, t) {
        var n = this.__data__;
        if (n instanceof pt) {
          var i = n.__data__;
          if (!In || i.length < O - 1)
            return i.push([e, t]), this.size = ++n.size, this;
          n = this.__data__ = new gt(i);
        }
        return n.set(e, t), this.size = n.size, this;
      }
      et.prototype.clear = wf, et.prototype.delete = Sf, et.prototype.get = Of, et.prototype.has = Tf, et.prototype.set = Af;
      function su(e, t) {
        var n = B(e), i = !n && zt(e), u = !n && !i && Rt(e), a = !n && !i && !u && hn(e), f = n || i || u || a, h = f ? li(e.length, Do) : [], d = h.length;
        for (var w in e)
          (t || Q.call(e, w)) && !(f && // Safari 9 has enumerable `arguments.length` in strict mode.
          (w == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          u && (w == "offset" || w == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          a && (w == "buffer" || w == "byteLength" || w == "byteOffset") || // Skip index properties.
          bt(w, d))) && h.push(w);
        return h;
      }
      function uu(e) {
        var t = e.length;
        return t ? e[Ai(0, t - 1)] : s;
      }
      function Cf(e, t) {
        return Lr(De(e), qt(t, 0, e.length));
      }
      function Lf(e) {
        return Lr(De(e));
      }
      function gi(e, t, n) {
        (n !== s && !tt(e[t], n) || n === s && !(t in e)) && mt(e, t, n);
      }
      function Dn(e, t, n) {
        var i = e[t];
        (!(Q.call(e, t) && tt(i, n)) || n === s && !(t in e)) && mt(e, t, n);
      }
      function pr(e, t) {
        for (var n = e.length; n--; )
          if (tt(e[n][0], t))
            return n;
        return -1;
      }
      function If(e, t, n, i) {
        return Et(e, function(u, a, f) {
          t(i, u, n(u), f);
        }), i;
      }
      function lu(e, t) {
        return e && lt(t, de(t), e);
      }
      function xf(e, t) {
        return e && lt(t, Ne(t), e);
      }
      function mt(e, t, n) {
        t == "__proto__" && ar ? ar(e, t, {
          configurable: !0,
          enumerable: !0,
          value: n,
          writable: !0
        }) : e[t] = n;
      }
      function mi(e, t) {
        for (var n = -1, i = t.length, u = g(i), a = e == null; ++n < i; )
          u[n] = a ? s : Zi(e, t[n]);
        return u;
      }
      function qt(e, t, n) {
        return e === e && (n !== s && (e = e <= n ? e : n), t !== s && (e = e >= t ? e : t)), e;
      }
      function Ge(e, t, n, i, u, a) {
        var f, h = t & Te, d = t & it, w = t & ce;
        if (n && (f = u ? n(e, i, u, a) : n(e)), f !== s)
          return f;
        if (!ne(e))
          return e;
        var y = B(e);
        if (y) {
          if (f = _h(e), !h)
            return De(e, f);
        } else {
          var A = ye(e), L = A == Yn || A == fs;
          if (Rt(e))
            return Eu(e, h);
          if (A == dt || A == Jt || L && !u) {
            if (f = d || L ? {} : Zu(e), !h)
              return d ? lh(e, xf(f, e)) : uh(e, lu(f, e));
          } else {
            if (!X[A])
              return u ? e : {};
            f = bh(e, A, h);
          }
        }
        a || (a = new et());
        var x = a.get(e);
        if (x)
          return x;
        if (a.set(e, f), Tl(e))
          return e.forEach(function(F) {
            f.add(Ge(F, t, n, F, e, a));
          }), f;
        if (Sl(e))
          return e.forEach(function(F, H) {
            f.set(H, Ge(F, t, n, H, e, a));
          }), f;
        var D = w ? d ? Bi : Ni : d ? Ne : de, U = y ? s : D(e);
        return We(U || e, function(F, H) {
          U && (H = F, F = e[H]), Dn(f, H, Ge(F, t, n, H, e, a));
        }), f;
      }
      function Ef(e) {
        var t = de(e);
        return function(n) {
          return au(n, e, t);
        };
      }
      function au(e, t, n) {
        var i = n.length;
        if (e == null)
          return !i;
        for (e = Z(e); i--; ) {
          var u = n[i], a = t[u], f = e[u];
          if (f === s && !(u in e) || !a(f))
            return !1;
        }
        return !0;
      }
      function ou(e, t, n) {
        if (typeof e != "function")
          throw new ke(v);
        return Un(function() {
          e.apply(s, n);
        }, t);
      }
      function Rn(e, t, n, i) {
        var u = -1, a = Xn, f = !0, h = e.length, d = [], w = t.length;
        if (!h)
          return d;
        n && (t = te(t, Ve(n))), i ? (a = ti, f = !1) : t.length >= O && (a = Cn, f = !1, t = new kt(t));
        e:
          for (; ++u < h; ) {
            var y = e[u], A = n == null ? y : n(y);
            if (y = i || y !== 0 ? y : 0, f && A === A) {
              for (var L = w; L--; )
                if (t[L] === A)
                  continue e;
              d.push(y);
            } else
              a(t, A, i) || d.push(y);
          }
        return d;
      }
      var Et = Nu(ut), fu = Nu(_i, !0);
      function Mf(e, t) {
        var n = !0;
        return Et(e, function(i, u, a) {
          return n = !!t(i, u, a), n;
        }), n;
      }
      function gr(e, t, n) {
        for (var i = -1, u = e.length; ++i < u; ) {
          var a = e[i], f = t(a);
          if (f != null && (h === s ? f === f && !Ue(f) : n(f, h)))
            var h = f, d = a;
        }
        return d;
      }
      function Ff(e, t, n, i) {
        var u = e.length;
        for (n = P(n), n < 0 && (n = -n > u ? 0 : u + n), i = i === s || i > u ? u : P(i), i < 0 && (i += u), i = n > i ? 0 : Cl(i); n < i; )
          e[n++] = t;
        return e;
      }
      function hu(e, t) {
        var n = [];
        return Et(e, function(i, u, a) {
          t(i, u, a) && n.push(i);
        }), n;
      }
      function ve(e, t, n, i, u) {
        var a = -1, f = e.length;
        for (n || (n = wh), u || (u = []); ++a < f; ) {
          var h = e[a];
          t > 0 && n(h) ? t > 1 ? ve(h, t - 1, n, i, u) : Lt(u, h) : i || (u[u.length] = h);
        }
        return u;
      }
      var vi = Bu(), cu = Bu(!0);
      function ut(e, t) {
        return e && vi(e, t, de);
      }
      function _i(e, t) {
        return e && cu(e, t, de);
      }
      function mr(e, t) {
        return Ct(t, function(n) {
          return yt(e[n]);
        });
      }
      function ln(e, t) {
        t = Ft(t, e);
        for (var n = 0, i = t.length; e != null && n < i; )
          e = e[at(t[n++])];
        return n && n == i ? e : s;
      }
      function du(e, t, n) {
        var i = t(e);
        return B(e) ? i : Lt(i, n(e));
      }
      function Ae(e) {
        return e == null ? e === s ? sa : ra : Ht && Ht in Z(e) ? gh(e) : Ih(e);
      }
      function bi(e, t) {
        return e > t;
      }
      function Df(e, t) {
        return e != null && Q.call(e, t);
      }
      function Rf(e, t) {
        return e != null && t in Z(e);
      }
      function Nf(e, t, n) {
        return e >= be(t, n) && e < fe(t, n);
      }
      function yi(e, t, n) {
        for (var i = n ? ti : Xn, u = e[0].length, a = e.length, f = a, h = g(a), d = 1 / 0, w = []; f--; ) {
          var y = e[f];
          f && t && (y = te(y, Ve(t))), d = be(y.length, d), h[f] = !n && (t || u >= 120 && y.length >= 120) ? new kt(f && y) : s;
        }
        y = e[0];
        var A = -1, L = h[0];
        e:
          for (; ++A < u && w.length < d; ) {
            var x = y[A], D = t ? t(x) : x;
            if (x = n || x !== 0 ? x : 0, !(L ? Cn(L, D) : i(w, D, n))) {
              for (f = a; --f; ) {
                var U = h[f];
                if (!(U ? Cn(U, D) : i(e[f], D, n)))
                  continue e;
              }
              L && L.push(D), w.push(x);
            }
          }
        return w;
      }
      function Bf(e, t, n, i) {
        return ut(e, function(u, a, f) {
          t(i, n(u), a, f);
        }), i;
      }
      function Nn(e, t, n) {
        t = Ft(t, e), e = ju(e, t);
        var i = e == null ? e : e[at(ze(t))];
        return i == null ? s : Pe(i, e, n);
      }
      function pu(e) {
        return ie(e) && Ae(e) == Jt;
      }
      function Pf(e) {
        return ie(e) && Ae(e) == An;
      }
      function Vf(e) {
        return ie(e) && Ae(e) == yn;
      }
      function Bn(e, t, n, i, u) {
        return e === t ? !0 : e == null || t == null || !ie(e) && !ie(t) ? e !== e && t !== t : $f(e, t, n, i, Bn, u);
      }
      function $f(e, t, n, i, u, a) {
        var f = B(e), h = B(t), d = f ? qn : ye(e), w = h ? qn : ye(t);
        d = d == Jt ? dt : d, w = w == Jt ? dt : w;
        var y = d == dt, A = w == dt, L = d == w;
        if (L && Rt(e)) {
          if (!Rt(t))
            return !1;
          f = !0, y = !1;
        }
        if (L && !y)
          return a || (a = new et()), f || hn(e) ? Yu(e, t, n, i, u, a) : dh(e, t, d, n, i, u, a);
        if (!(n & ht)) {
          var x = y && Q.call(e, "__wrapped__"), D = A && Q.call(t, "__wrapped__");
          if (x || D) {
            var U = x ? e.value() : e, F = D ? t.value() : t;
            return a || (a = new et()), u(U, F, n, i, a);
          }
        }
        return L ? (a || (a = new et()), ph(e, t, n, i, u, a)) : !1;
      }
      function Uf(e) {
        return ie(e) && ye(e) == Xe;
      }
      function wi(e, t, n, i) {
        var u = n.length, a = u, f = !i;
        if (e == null)
          return !a;
        for (e = Z(e); u--; ) {
          var h = n[u];
          if (f && h[2] ? h[1] !== e[h[0]] : !(h[0] in e))
            return !1;
        }
        for (; ++u < a; ) {
          h = n[u];
          var d = h[0], w = e[d], y = h[1];
          if (f && h[2]) {
            if (w === s && !(d in e))
              return !1;
          } else {
            var A = new et();
            if (i)
              var L = i(w, y, d, e, t, A);
            if (!(L === s ? Bn(y, w, ht | Pt, i, A) : L))
              return !1;
          }
        }
        return !0;
      }
      function gu(e) {
        if (!ne(e) || Oh(e))
          return !1;
        var t = yt(e) ? Vo : La;
        return t.test(Yt(e));
      }
      function Hf(e) {
        return ie(e) && Ae(e) == Sn;
      }
      function Wf(e) {
        return ie(e) && ye(e) == Qe;
      }
      function kf(e) {
        return ie(e) && Dr(e.length) && !!j[Ae(e)];
      }
      function mu(e) {
        return typeof e == "function" ? e : e == null ? Be : typeof e == "object" ? B(e) ? bu(e[0], e[1]) : _u(e) : Pl(e);
      }
      function Si(e) {
        if (!$n(e))
          return Go(e);
        var t = [];
        for (var n in Z(e))
          Q.call(e, n) && n != "constructor" && t.push(n);
        return t;
      }
      function qf(e) {
        if (!ne(e))
          return Lh(e);
        var t = $n(e), n = [];
        for (var i in e)
          i == "constructor" && (t || !Q.call(e, i)) || n.push(i);
        return n;
      }
      function Oi(e, t) {
        return e < t;
      }
      function vu(e, t) {
        var n = -1, i = Re(e) ? g(e.length) : [];
        return Et(e, function(u, a, f) {
          i[++n] = t(u, a, f);
        }), i;
      }
      function _u(e) {
        var t = Vi(e);
        return t.length == 1 && t[0][2] ? Xu(t[0][0], t[0][1]) : function(n) {
          return n === e || wi(n, e, t);
        };
      }
      function bu(e, t) {
        return Ui(e) && Ju(t) ? Xu(at(e), t) : function(n) {
          var i = Zi(n, e);
          return i === s && i === t ? Ji(n, e) : Bn(t, i, ht | Pt);
        };
      }
      function vr(e, t, n, i, u) {
        e !== t && vi(t, function(a, f) {
          if (ne(a))
            u || (u = new et()), Gf(e, t, f, n, vr, i, u);
          else {
            var h = i ? i(fi(e, f), a, f + "", e, t, u) : s;
            h === s && (h = a), gi(e, f, h);
          }
        }, Ne);
      }
      function Gf(e, t, n, i, u, a, f) {
        var h = fi(e, n), d = fi(t, n), w = f.get(d);
        if (w) {
          gi(e, n, w);
          return;
        }
        var y = a ? a(h, d, n + "", e, t, f) : s, A = y === s;
        if (A) {
          var L = B(d), x = !L && Rt(d), D = !L && !x && hn(d);
          y = d, L || x || D ? B(h) ? y = h : se(h) ? y = De(h) : x ? (A = !1, y = Eu(d, !0)) : D ? (A = !1, y = Mu(d, !0)) : y = [] : Hn(d) || zt(d) ? (y = h, zt(h) ? y = Ll(h) : (!ne(h) || i && yt(h)) && (y = Zu(d))) : A = !1;
        }
        A && (f.set(d, y), u(y, d, i, a, f), f.delete(d)), gi(e, n, y);
      }
      function yu(e, t) {
        var n = e.length;
        if (n)
          return t += t < 0 ? n : 0, bt(t, n) ? e[t] : s;
      }
      function wu(e, t, n) {
        var i = -1;
        t = te(t.length ? t : [Be], Ve(M()));
        var u = vu(e, function(a, f, h) {
          var d = te(t, function(w) {
            return w(a);
          });
          return { criteria: d, index: ++i, value: a };
        });
        return mo(u, function(a, f) {
          return sh(a, f, n);
        });
      }
      function Yf(e, t) {
        return Su(e, t, function(n, i) {
          return Ji(e, i);
        });
      }
      function Su(e, t, n) {
        for (var i = -1, u = t.length, a = {}; ++i < u; ) {
          var f = t[i], h = ln(e, f);
          n(h, f) && Pn(a, Ft(f, e), h);
        }
        return a;
      }
      function zf(e) {
        return function(t) {
          return ln(t, e);
        };
      }
      function Ti(e, t, n, i) {
        var u = i ? go : jt, a = -1, f = t.length, h = e;
        for (e === t && (t = De(t)), n && (h = te(e, Ve(n))); ++a < f; )
          for (var d = 0, w = t[a], y = n ? n(w) : w; (d = u(h, y, d, i)) > -1; )
            h !== e && lr.call(h, d, 1), lr.call(e, d, 1);
        return e;
      }
      function Ou(e, t) {
        for (var n = e ? t.length : 0, i = n - 1; n--; ) {
          var u = t[n];
          if (n == i || u !== a) {
            var a = u;
            bt(u) ? lr.call(e, u, 1) : Ii(e, u);
          }
        }
        return e;
      }
      function Ai(e, t) {
        return e + fr(ru() * (t - e + 1));
      }
      function Kf(e, t, n, i) {
        for (var u = -1, a = fe(or((t - e) / (n || 1)), 0), f = g(a); a--; )
          f[i ? a : ++u] = e, e += n;
        return f;
      }
      function Ci(e, t) {
        var n = "";
        if (!e || t < 1 || t > At)
          return n;
        do
          t % 2 && (n += e), t = fr(t / 2), t && (e += e);
        while (t);
        return n;
      }
      function V(e, t) {
        return Wi(Qu(e, t, Be), e + "");
      }
      function Zf(e) {
        return uu(cn(e));
      }
      function Jf(e, t) {
        var n = cn(e);
        return Lr(n, qt(t, 0, n.length));
      }
      function Pn(e, t, n, i) {
        if (!ne(e))
          return e;
        t = Ft(t, e);
        for (var u = -1, a = t.length, f = a - 1, h = e; h != null && ++u < a; ) {
          var d = at(t[u]), w = n;
          if (u != f) {
            var y = h[d];
            w = i ? i(y, d, h) : s, w === s && (w = ne(y) ? y : bt(t[u + 1]) ? [] : {});
          }
          Dn(h, d, w), h = h[d];
        }
        return e;
      }
      var Tu = hr ? function(e, t) {
        return hr.set(e, t), e;
      } : Be, Xf = ar ? function(e, t) {
        return ar(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Qi(t),
          writable: !0
        });
      } : Be;
      function Qf(e) {
        return Lr(cn(e));
      }
      function Ye(e, t, n) {
        var i = -1, u = e.length;
        t < 0 && (t = -t > u ? 0 : u + t), n = n > u ? u : n, n < 0 && (n += u), u = t > n ? 0 : n - t >>> 0, t >>>= 0;
        for (var a = g(u); ++i < u; )
          a[i] = e[i + t];
        return a;
      }
      function jf(e, t) {
        var n;
        return Et(e, function(i, u, a) {
          return n = t(i, u, a), !n;
        }), !!n;
      }
      function _r(e, t, n) {
        var i = 0, u = e == null ? i : e.length;
        if (typeof t == "number" && t === t && u <= jl) {
          for (; i < u; ) {
            var a = i + u >>> 1, f = e[a];
            f !== null && !Ue(f) && (n ? f <= t : f < t) ? i = a + 1 : u = a;
          }
          return u;
        }
        return Li(e, t, Be, n);
      }
      function Li(e, t, n, i) {
        t = n(t);
        for (var u = 0, a = e == null ? 0 : e.length, f = t !== t, h = t === null, d = Ue(t), w = t === s; u < a; ) {
          var y = fr((u + a) / 2), A = n(e[y]), L = A !== s, x = A === null, D = A === A, U = Ue(A);
          if (f)
            var F = i || D;
          else
            w ? F = D && (i || L) : h ? F = D && L && (i || !x) : d ? F = D && L && !x && (i || !U) : x || U ? F = !1 : F = i ? A <= t : A < t;
          F ? u = y + 1 : a = y;
        }
        return be(a, Ql);
      }
      function Au(e, t) {
        for (var n = -1, i = e.length, u = 0, a = []; ++n < i; ) {
          var f = e[n], h = t ? t(f) : f;
          if (!n || !tt(h, d)) {
            var d = h;
            a[u++] = f === 0 ? 0 : f;
          }
        }
        return a;
      }
      function Cu(e) {
        return typeof e == "number" ? e : Ue(e) ? kn : +e;
      }
      function $e(e) {
        if (typeof e == "string")
          return e;
        if (B(e))
          return te(e, $e) + "";
        if (Ue(e))
          return iu ? iu.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -$t ? "-0" : t;
      }
      function Mt(e, t, n) {
        var i = -1, u = Xn, a = e.length, f = !0, h = [], d = h;
        if (n)
          f = !1, u = ti;
        else if (a >= O) {
          var w = t ? null : hh(e);
          if (w)
            return jn(w);
          f = !1, u = Cn, d = new kt();
        } else
          d = t ? [] : h;
        e:
          for (; ++i < a; ) {
            var y = e[i], A = t ? t(y) : y;
            if (y = n || y !== 0 ? y : 0, f && A === A) {
              for (var L = d.length; L--; )
                if (d[L] === A)
                  continue e;
              t && d.push(A), h.push(y);
            } else
              u(d, A, n) || (d !== h && d.push(A), h.push(y));
          }
        return h;
      }
      function Ii(e, t) {
        return t = Ft(t, e), e = ju(e, t), e == null || delete e[at(ze(t))];
      }
      function Lu(e, t, n, i) {
        return Pn(e, t, n(ln(e, t)), i);
      }
      function br(e, t, n, i) {
        for (var u = e.length, a = i ? u : -1; (i ? a-- : ++a < u) && t(e[a], a, e); )
          ;
        return n ? Ye(e, i ? 0 : a, i ? a + 1 : u) : Ye(e, i ? a + 1 : 0, i ? u : a);
      }
      function Iu(e, t) {
        var n = e;
        return n instanceof W && (n = n.value()), ni(t, function(i, u) {
          return u.func.apply(u.thisArg, Lt([i], u.args));
        }, n);
      }
      function xi(e, t, n) {
        var i = e.length;
        if (i < 2)
          return i ? Mt(e[0]) : [];
        for (var u = -1, a = g(i); ++u < i; )
          for (var f = e[u], h = -1; ++h < i; )
            h != u && (a[u] = Rn(a[u] || f, e[h], t, n));
        return Mt(ve(a, 1), t, n);
      }
      function xu(e, t, n) {
        for (var i = -1, u = e.length, a = t.length, f = {}; ++i < u; ) {
          var h = i < a ? t[i] : s;
          n(f, e[i], h);
        }
        return f;
      }
      function Ei(e) {
        return se(e) ? e : [];
      }
      function Mi(e) {
        return typeof e == "function" ? e : Be;
      }
      function Ft(e, t) {
        return B(e) ? e : Ui(e, t) ? [e] : rl(Y(e));
      }
      var eh = V;
      function Dt(e, t, n) {
        var i = e.length;
        return n = n === s ? i : n, !t && n >= i ? e : Ye(e, t, n);
      }
      var th = $o || function(e) {
        return me.clearTimeout(e);
      };
      function Eu(e, t) {
        if (t)
          return e.slice();
        var n = e.length, i = js ? js(n) : new e.constructor(n);
        return e.copy(i), i;
      }
      function Fi(e) {
        var t = new e.constructor(e.byteLength);
        return new sr(t).set(new sr(e)), t;
      }
      function nh(e, t) {
        var n = t ? Fi(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.byteLength);
      }
      function rh(e) {
        var t = new e.constructor(e.source, vs.exec(e));
        return t.lastIndex = e.lastIndex, t;
      }
      function ih(e) {
        return Fn ? Z(Fn.call(e)) : {};
      }
      function Mu(e, t) {
        var n = t ? Fi(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.length);
      }
      function Fu(e, t) {
        if (e !== t) {
          var n = e !== s, i = e === null, u = e === e, a = Ue(e), f = t !== s, h = t === null, d = t === t, w = Ue(t);
          if (!h && !w && !a && e > t || a && f && d && !h && !w || i && f && d || !n && d || !u)
            return 1;
          if (!i && !a && !w && e < t || w && n && u && !i && !a || h && n && u || !f && u || !d)
            return -1;
        }
        return 0;
      }
      function sh(e, t, n) {
        for (var i = -1, u = e.criteria, a = t.criteria, f = u.length, h = n.length; ++i < f; ) {
          var d = Fu(u[i], a[i]);
          if (d) {
            if (i >= h)
              return d;
            var w = n[i];
            return d * (w == "desc" ? -1 : 1);
          }
        }
        return e.index - t.index;
      }
      function Du(e, t, n, i) {
        for (var u = -1, a = e.length, f = n.length, h = -1, d = t.length, w = fe(a - f, 0), y = g(d + w), A = !i; ++h < d; )
          y[h] = t[h];
        for (; ++u < f; )
          (A || u < a) && (y[n[u]] = e[u]);
        for (; w--; )
          y[h++] = e[u++];
        return y;
      }
      function Ru(e, t, n, i) {
        for (var u = -1, a = e.length, f = -1, h = n.length, d = -1, w = t.length, y = fe(a - h, 0), A = g(y + w), L = !i; ++u < y; )
          A[u] = e[u];
        for (var x = u; ++d < w; )
          A[x + d] = t[d];
        for (; ++f < h; )
          (L || u < a) && (A[x + n[f]] = e[u++]);
        return A;
      }
      function De(e, t) {
        var n = -1, i = e.length;
        for (t || (t = g(i)); ++n < i; )
          t[n] = e[n];
        return t;
      }
      function lt(e, t, n, i) {
        var u = !n;
        n || (n = {});
        for (var a = -1, f = t.length; ++a < f; ) {
          var h = t[a], d = i ? i(n[h], e[h], h, n, e) : s;
          d === s && (d = e[h]), u ? mt(n, h, d) : Dn(n, h, d);
        }
        return n;
      }
      function uh(e, t) {
        return lt(e, $i(e), t);
      }
      function lh(e, t) {
        return lt(e, zu(e), t);
      }
      function yr(e, t) {
        return function(n, i) {
          var u = B(n) ? ao : If, a = t ? t() : {};
          return u(n, e, M(i, 2), a);
        };
      }
      function an(e) {
        return V(function(t, n) {
          var i = -1, u = n.length, a = u > 1 ? n[u - 1] : s, f = u > 2 ? n[2] : s;
          for (a = e.length > 3 && typeof a == "function" ? (u--, a) : s, f && Ce(n[0], n[1], f) && (a = u < 3 ? s : a, u = 1), t = Z(t); ++i < u; ) {
            var h = n[i];
            h && e(t, h, i, a);
          }
          return t;
        });
      }
      function Nu(e, t) {
        return function(n, i) {
          if (n == null)
            return n;
          if (!Re(n))
            return e(n, i);
          for (var u = n.length, a = t ? u : -1, f = Z(n); (t ? a-- : ++a < u) && i(f[a], a, f) !== !1; )
            ;
          return n;
        };
      }
      function Bu(e) {
        return function(t, n, i) {
          for (var u = -1, a = Z(t), f = i(t), h = f.length; h--; ) {
            var d = f[e ? h : ++u];
            if (n(a[d], d, a) === !1)
              break;
          }
          return t;
        };
      }
      function ah(e, t, n) {
        var i = t & Fe, u = Vn(e);
        function a() {
          var f = this && this !== me && this instanceof a ? u : e;
          return f.apply(i ? n : this, arguments);
        }
        return a;
      }
      function Pu(e) {
        return function(t) {
          t = Y(t);
          var n = en(t) ? je(t) : s, i = n ? n[0] : t.charAt(0), u = n ? Dt(n, 1).join("") : t.slice(1);
          return i[e]() + u;
        };
      }
      function on(e) {
        return function(t) {
          return ni(Nl(Rl(t).replace(Ka, "")), e, "");
        };
      }
      function Vn(e) {
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return new e();
            case 1:
              return new e(t[0]);
            case 2:
              return new e(t[0], t[1]);
            case 3:
              return new e(t[0], t[1], t[2]);
            case 4:
              return new e(t[0], t[1], t[2], t[3]);
            case 5:
              return new e(t[0], t[1], t[2], t[3], t[4]);
            case 6:
              return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
            case 7:
              return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
          }
          var n = un(e.prototype), i = e.apply(n, t);
          return ne(i) ? i : n;
        };
      }
      function oh(e, t, n) {
        var i = Vn(e);
        function u() {
          for (var a = arguments.length, f = g(a), h = a, d = fn(u); h--; )
            f[h] = arguments[h];
          var w = a < 3 && f[0] !== d && f[a - 1] !== d ? [] : It(f, d);
          if (a -= w.length, a < n)
            return Wu(
              e,
              t,
              wr,
              u.placeholder,
              s,
              f,
              w,
              s,
              s,
              n - a
            );
          var y = this && this !== me && this instanceof u ? i : e;
          return Pe(y, this, f);
        }
        return u;
      }
      function Vu(e) {
        return function(t, n, i) {
          var u = Z(t);
          if (!Re(t)) {
            var a = M(n, 3);
            t = de(t), n = function(h) {
              return a(u[h], h, u);
            };
          }
          var f = e(t, n, i);
          return f > -1 ? u[a ? t[f] : f] : s;
        };
      }
      function $u(e) {
        return _t(function(t) {
          var n = t.length, i = n, u = qe.prototype.thru;
          for (e && t.reverse(); i--; ) {
            var a = t[i];
            if (typeof a != "function")
              throw new ke(v);
            if (u && !f && Ar(a) == "wrapper")
              var f = new qe([], !0);
          }
          for (i = f ? i : n; ++i < n; ) {
            a = t[i];
            var h = Ar(a), d = h == "wrapper" ? Pi(a) : s;
            d && Hi(d[0]) && d[1] == (K | k | C | _e) && !d[4].length && d[9] == 1 ? f = f[Ar(d[0])].apply(f, d[3]) : f = a.length == 1 && Hi(a) ? f[h]() : f.thru(a);
          }
          return function() {
            var w = arguments, y = w[0];
            if (f && w.length == 1 && B(y))
              return f.plant(y).value();
            for (var A = 0, L = n ? t[A].apply(this, w) : y; ++A < n; )
              L = t[A].call(this, L);
            return L;
          };
        });
      }
      function wr(e, t, n, i, u, a, f, h, d, w) {
        var y = t & K, A = t & Fe, L = t & ct, x = t & (k | S), D = t & $, U = L ? s : Vn(e);
        function F() {
          for (var H = arguments.length, z = g(H), Le = H; Le--; )
            z[Le] = arguments[Le];
          if (x)
            var Ie = fn(F), Nt = _o(z, Ie);
          if (i && (z = Du(z, i, u, x)), a && (z = Ru(z, a, f, x)), H -= Nt, x && H < w) {
            var ue = It(z, Ie);
            return Wu(
              e,
              t,
              wr,
              F.placeholder,
              n,
              z,
              ue,
              h,
              d,
              w - H
            );
          }
          var nt = A ? n : this, St = L ? nt[e] : e;
          return H = z.length, h ? z = xh(z, h) : D && H > 1 && z.reverse(), y && d < H && (z.length = d), this && this !== me && this instanceof F && (St = U || Vn(St)), St.apply(nt, z);
        }
        return F;
      }
      function Uu(e, t) {
        return function(n, i) {
          return Bf(n, e, t(i), {});
        };
      }
      function Sr(e, t) {
        return function(n, i) {
          var u;
          if (n === s && i === s)
            return t;
          if (n !== s && (u = n), i !== s) {
            if (u === s)
              return i;
            typeof n == "string" || typeof i == "string" ? (n = $e(n), i = $e(i)) : (n = Cu(n), i = Cu(i)), u = e(n, i);
          }
          return u;
        };
      }
      function Di(e) {
        return _t(function(t) {
          return t = te(t, Ve(M())), V(function(n) {
            var i = this;
            return e(t, function(u) {
              return Pe(u, i, n);
            });
          });
        });
      }
      function Or(e, t) {
        t = t === s ? " " : $e(t);
        var n = t.length;
        if (n < 2)
          return n ? Ci(t, e) : t;
        var i = Ci(t, or(e / tn(t)));
        return en(t) ? Dt(je(i), 0, e).join("") : i.slice(0, e);
      }
      function fh(e, t, n, i) {
        var u = t & Fe, a = Vn(e);
        function f() {
          for (var h = -1, d = arguments.length, w = -1, y = i.length, A = g(y + d), L = this && this !== me && this instanceof f ? a : e; ++w < y; )
            A[w] = i[w];
          for (; d--; )
            A[w++] = arguments[++h];
          return Pe(L, u ? n : this, A);
        }
        return f;
      }
      function Hu(e) {
        return function(t, n, i) {
          return i && typeof i != "number" && Ce(t, n, i) && (n = i = s), t = wt(t), n === s ? (n = t, t = 0) : n = wt(n), i = i === s ? t < n ? 1 : -1 : wt(i), Kf(t, n, i, e);
        };
      }
      function Tr(e) {
        return function(t, n) {
          return typeof t == "string" && typeof n == "string" || (t = Ke(t), n = Ke(n)), e(t, n);
        };
      }
      function Wu(e, t, n, i, u, a, f, h, d, w) {
        var y = t & k, A = y ? f : s, L = y ? s : f, x = y ? a : s, D = y ? s : a;
        t |= y ? C : J, t &= ~(y ? J : C), t & pn || (t &= ~(Fe | ct));
        var U = [
          e,
          t,
          u,
          x,
          A,
          D,
          L,
          h,
          d,
          w
        ], F = n.apply(s, U);
        return Hi(e) && el(F, U), F.placeholder = i, tl(F, e, t);
      }
      function Ri(e) {
        var t = oe[e];
        return function(n, i) {
          if (n = Ke(n), i = i == null ? 0 : be(P(i), 292), i) {
            var u = (Y(n) + "e").split("e"), a = t(u[0] + "e" + (+u[1] + i));
            return u = (Y(a) + "e").split("e"), +(u[0] + "e" + (+u[1] - i));
          }
          return t(n);
        };
      }
      var hh = sn && 1 / jn(new sn([, -0]))[1] == $t ? function(e) {
        return new sn(e);
      } : ts;
      function ku(e) {
        return function(t) {
          var n = ye(t);
          return n == Xe ? oi(t) : n == Qe ? Ao(t) : vo(t, e(t));
        };
      }
      function vt(e, t, n, i, u, a, f, h) {
        var d = t & ct;
        if (!d && typeof e != "function")
          throw new ke(v);
        var w = i ? i.length : 0;
        if (w || (t &= ~(C | J), i = u = s), f = f === s ? f : fe(P(f), 0), h = h === s ? h : P(h), w -= u ? u.length : 0, t & J) {
          var y = i, A = u;
          i = u = s;
        }
        var L = d ? s : Pi(e), x = [
          e,
          t,
          n,
          i,
          u,
          y,
          A,
          a,
          f,
          h
        ];
        if (L && Ch(x, L), e = x[0], t = x[1], n = x[2], i = x[3], u = x[4], h = x[9] = x[9] === s ? d ? 0 : e.length : fe(x[9] - w, 0), !h && t & (k | S) && (t &= ~(k | S)), !t || t == Fe)
          var D = ah(e, t, n);
        else
          t == k || t == S ? D = oh(e, t, h) : (t == C || t == (Fe | C)) && !u.length ? D = fh(e, t, n, i) : D = wr.apply(s, x);
        var U = L ? Tu : el;
        return tl(U(D, x), e, t);
      }
      function qu(e, t, n, i) {
        return e === s || tt(e, rn[n]) && !Q.call(i, n) ? t : e;
      }
      function Gu(e, t, n, i, u, a) {
        return ne(e) && ne(t) && (a.set(t, e), vr(e, t, s, Gu, a), a.delete(t)), e;
      }
      function ch(e) {
        return Hn(e) ? s : e;
      }
      function Yu(e, t, n, i, u, a) {
        var f = n & ht, h = e.length, d = t.length;
        if (h != d && !(f && d > h))
          return !1;
        var w = a.get(e);
        if (w && a.get(t))
          return w == t;
        var y = -1, A = !0, L = n & Pt ? new kt() : s;
        for (a.set(e, t), a.set(t, e); ++y < h; ) {
          var x = e[y], D = t[y];
          if (i)
            var U = f ? i(D, x, y, t, e, a) : i(x, D, y, e, t, a);
          if (U !== s) {
            if (U)
              continue;
            A = !1;
            break;
          }
          if (L) {
            if (!ri(t, function(F, H) {
              if (!Cn(L, H) && (x === F || u(x, F, n, i, a)))
                return L.push(H);
            })) {
              A = !1;
              break;
            }
          } else if (!(x === D || u(x, D, n, i, a))) {
            A = !1;
            break;
          }
        }
        return a.delete(e), a.delete(t), A;
      }
      function dh(e, t, n, i, u, a, f) {
        switch (n) {
          case Xt:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1;
            e = e.buffer, t = t.buffer;
          case An:
            return !(e.byteLength != t.byteLength || !a(new sr(e), new sr(t)));
          case bn:
          case yn:
          case wn:
            return tt(+e, +t);
          case Gn:
            return e.name == t.name && e.message == t.message;
          case Sn:
          case On:
            return e == t + "";
          case Xe:
            var h = oi;
          case Qe:
            var d = i & ht;
            if (h || (h = jn), e.size != t.size && !d)
              return !1;
            var w = f.get(e);
            if (w)
              return w == t;
            i |= Pt, f.set(e, t);
            var y = Yu(h(e), h(t), i, u, a, f);
            return f.delete(e), y;
          case zn:
            if (Fn)
              return Fn.call(e) == Fn.call(t);
        }
        return !1;
      }
      function ph(e, t, n, i, u, a) {
        var f = n & ht, h = Ni(e), d = h.length, w = Ni(t), y = w.length;
        if (d != y && !f)
          return !1;
        for (var A = d; A--; ) {
          var L = h[A];
          if (!(f ? L in t : Q.call(t, L)))
            return !1;
        }
        var x = a.get(e);
        if (x && a.get(t))
          return x == t;
        var D = !0;
        a.set(e, t), a.set(t, e);
        for (var U = f; ++A < d; ) {
          L = h[A];
          var F = e[L], H = t[L];
          if (i)
            var z = f ? i(H, F, L, t, e, a) : i(F, H, L, e, t, a);
          if (!(z === s ? F === H || u(F, H, n, i, a) : z)) {
            D = !1;
            break;
          }
          U || (U = L == "constructor");
        }
        if (D && !U) {
          var Le = e.constructor, Ie = t.constructor;
          Le != Ie && "constructor" in e && "constructor" in t && !(typeof Le == "function" && Le instanceof Le && typeof Ie == "function" && Ie instanceof Ie) && (D = !1);
        }
        return a.delete(e), a.delete(t), D;
      }
      function _t(e) {
        return Wi(Qu(e, s, ll), e + "");
      }
      function Ni(e) {
        return du(e, de, $i);
      }
      function Bi(e) {
        return du(e, Ne, zu);
      }
      var Pi = hr ? function(e) {
        return hr.get(e);
      } : ts;
      function Ar(e) {
        for (var t = e.name + "", n = Mn[t], i = Q.call(Mn, t) ? n.length : 0; i--; ) {
          var u = n[i], a = u.func;
          if (a == null || a == e)
            return u.name;
        }
        return t;
      }
      function fn(e) {
        var t = Q.call(l, "placeholder") ? l : e;
        return t.placeholder;
      }
      function M() {
        var e = l.iteratee || ji;
        return e = e === ji ? mu : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function Cr(e, t) {
        var n = e.__data__;
        return Sh(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
      }
      function Vi(e) {
        for (var t = de(e), n = t.length; n--; ) {
          var i = t[n], u = e[i];
          t[n] = [i, u, Ju(u)];
        }
        return t;
      }
      function Gt(e, t) {
        var n = So(e, t);
        return gu(n) ? n : s;
      }
      function gh(e) {
        var t = Q.call(e, Ht), n = e[Ht];
        try {
          e[Ht] = s;
          var i = !0;
        } catch {
        }
        var u = rr.call(e);
        return i && (t ? e[Ht] = n : delete e[Ht]), u;
      }
      var $i = ci ? function(e) {
        return e == null ? [] : (e = Z(e), Ct(ci(e), function(t) {
          return tu.call(e, t);
        }));
      } : ns, zu = ci ? function(e) {
        for (var t = []; e; )
          Lt(t, $i(e)), e = ur(e);
        return t;
      } : ns, ye = Ae;
      (di && ye(new di(new ArrayBuffer(1))) != Xt || In && ye(new In()) != Xe || pi && ye(pi.resolve()) != hs || sn && ye(new sn()) != Qe || xn && ye(new xn()) != Tn) && (ye = function(e) {
        var t = Ae(e), n = t == dt ? e.constructor : s, i = n ? Yt(n) : "";
        if (i)
          switch (i) {
            case Zo:
              return Xt;
            case Jo:
              return Xe;
            case Xo:
              return hs;
            case Qo:
              return Qe;
            case jo:
              return Tn;
          }
        return t;
      });
      function mh(e, t, n) {
        for (var i = -1, u = n.length; ++i < u; ) {
          var a = n[i], f = a.size;
          switch (a.type) {
            case "drop":
              e += f;
              break;
            case "dropRight":
              t -= f;
              break;
            case "take":
              t = be(t, e + f);
              break;
            case "takeRight":
              e = fe(e, t - f);
              break;
          }
        }
        return { start: e, end: t };
      }
      function vh(e) {
        var t = e.match(ya);
        return t ? t[1].split(wa) : [];
      }
      function Ku(e, t, n) {
        t = Ft(t, e);
        for (var i = -1, u = t.length, a = !1; ++i < u; ) {
          var f = at(t[i]);
          if (!(a = e != null && n(e, f)))
            break;
          e = e[f];
        }
        return a || ++i != u ? a : (u = e == null ? 0 : e.length, !!u && Dr(u) && bt(f, u) && (B(e) || zt(e)));
      }
      function _h(e) {
        var t = e.length, n = new e.constructor(t);
        return t && typeof e[0] == "string" && Q.call(e, "index") && (n.index = e.index, n.input = e.input), n;
      }
      function Zu(e) {
        return typeof e.constructor == "function" && !$n(e) ? un(ur(e)) : {};
      }
      function bh(e, t, n) {
        var i = e.constructor;
        switch (t) {
          case An:
            return Fi(e);
          case bn:
          case yn:
            return new i(+e);
          case Xt:
            return nh(e, n);
          case Vr:
          case $r:
          case Ur:
          case Hr:
          case Wr:
          case kr:
          case qr:
          case Gr:
          case Yr:
            return Mu(e, n);
          case Xe:
            return new i();
          case wn:
          case On:
            return new i(e);
          case Sn:
            return rh(e);
          case Qe:
            return new i();
          case zn:
            return ih(e);
        }
      }
      function yh(e, t) {
        var n = t.length;
        if (!n)
          return e;
        var i = n - 1;
        return t[i] = (n > 1 ? "& " : "") + t[i], t = t.join(n > 2 ? ", " : " "), e.replace(ba, `{
/* [wrapped with ` + t + `] */
`);
      }
      function wh(e) {
        return B(e) || zt(e) || !!(nu && e && e[nu]);
      }
      function bt(e, t) {
        var n = typeof e;
        return t = t ?? At, !!t && (n == "number" || n != "symbol" && xa.test(e)) && e > -1 && e % 1 == 0 && e < t;
      }
      function Ce(e, t, n) {
        if (!ne(n))
          return !1;
        var i = typeof t;
        return (i == "number" ? Re(n) && bt(t, n.length) : i == "string" && t in n) ? tt(n[t], e) : !1;
      }
      function Ui(e, t) {
        if (B(e))
          return !1;
        var n = typeof e;
        return n == "number" || n == "symbol" || n == "boolean" || e == null || Ue(e) ? !0 : ga.test(e) || !pa.test(e) || t != null && e in Z(t);
      }
      function Sh(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
      }
      function Hi(e) {
        var t = Ar(e), n = l[t];
        if (typeof n != "function" || !(t in W.prototype))
          return !1;
        if (e === n)
          return !0;
        var i = Pi(n);
        return !!i && e === i[0];
      }
      function Oh(e) {
        return !!Qs && Qs in e;
      }
      var Th = tr ? yt : rs;
      function $n(e) {
        var t = e && e.constructor, n = typeof t == "function" && t.prototype || rn;
        return e === n;
      }
      function Ju(e) {
        return e === e && !ne(e);
      }
      function Xu(e, t) {
        return function(n) {
          return n == null ? !1 : n[e] === t && (t !== s || e in Z(n));
        };
      }
      function Ah(e) {
        var t = Mr(e, function(i) {
          return n.size === q && n.clear(), i;
        }), n = t.cache;
        return t;
      }
      function Ch(e, t) {
        var n = e[1], i = t[1], u = n | i, a = u < (Fe | ct | K), f = i == K && n == k || i == K && n == _e && e[7].length <= t[8] || i == (K | _e) && t[7].length <= t[8] && n == k;
        if (!(a || f))
          return e;
        i & Fe && (e[2] = t[2], u |= n & Fe ? 0 : pn);
        var h = t[3];
        if (h) {
          var d = e[3];
          e[3] = d ? Du(d, h, t[4]) : h, e[4] = d ? It(e[3], ae) : t[4];
        }
        return h = t[5], h && (d = e[5], e[5] = d ? Ru(d, h, t[6]) : h, e[6] = d ? It(e[5], ae) : t[6]), h = t[7], h && (e[7] = h), i & K && (e[8] = e[8] == null ? t[8] : be(e[8], t[8])), e[9] == null && (e[9] = t[9]), e[0] = t[0], e[1] = u, e;
      }
      function Lh(e) {
        var t = [];
        if (e != null)
          for (var n in Z(e))
            t.push(n);
        return t;
      }
      function Ih(e) {
        return rr.call(e);
      }
      function Qu(e, t, n) {
        return t = fe(t === s ? e.length - 1 : t, 0), function() {
          for (var i = arguments, u = -1, a = fe(i.length - t, 0), f = g(a); ++u < a; )
            f[u] = i[t + u];
          u = -1;
          for (var h = g(t + 1); ++u < t; )
            h[u] = i[u];
          return h[t] = n(f), Pe(e, this, h);
        };
      }
      function ju(e, t) {
        return t.length < 2 ? e : ln(e, Ye(t, 0, -1));
      }
      function xh(e, t) {
        for (var n = e.length, i = be(t.length, n), u = De(e); i--; ) {
          var a = t[i];
          e[i] = bt(a, n) ? u[a] : s;
        }
        return e;
      }
      var el = nl(Tu), Un = Ho || function(e, t) {
        return me.setTimeout(e, t);
      }, Wi = nl(Xf);
      function tl(e, t, n) {
        var i = t + "";
        return Wi(e, yh(i, Eh(vh(i), n)));
      }
      function nl(e) {
        var t = 0, n = 0;
        return function() {
          var i = Yo(), u = mn - (i - n);
          if (n = i, u > 0) {
            if (++t >= Vt)
              return arguments[0];
          } else
            t = 0;
          return e.apply(s, arguments);
        };
      }
      function Lr(e, t) {
        var n = -1, i = e.length, u = i - 1;
        for (t = t === s ? i : t; ++n < t; ) {
          var a = Ai(n, u), f = e[a];
          e[a] = e[n], e[n] = f;
        }
        return e.length = t, e;
      }
      var rl = Ah(function(e) {
        var t = [];
        return e.charCodeAt(0) === 46 && t.push(""), e.replace(ma, function(n, i, u, a) {
          t.push(u ? a.replace(Oa, "$1") : i || n);
        }), t;
      });
      function at(e) {
        if (typeof e == "string" || Ue(e))
          return e;
        var t = e + "";
        return t == "0" && 1 / e == -$t ? "-0" : t;
      }
      function Yt(e) {
        if (e != null) {
          try {
            return nr.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function Eh(e, t) {
        return We(ea, function(n) {
          var i = "_." + n[0];
          t & n[1] && !Xn(e, i) && e.push(i);
        }), e.sort();
      }
      function il(e) {
        if (e instanceof W)
          return e.clone();
        var t = new qe(e.__wrapped__, e.__chain__);
        return t.__actions__ = De(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
      }
      function Mh(e, t, n) {
        (n ? Ce(e, t, n) : t === s) ? t = 1 : t = fe(P(t), 0);
        var i = e == null ? 0 : e.length;
        if (!i || t < 1)
          return [];
        for (var u = 0, a = 0, f = g(or(i / t)); u < i; )
          f[a++] = Ye(e, u, u += t);
        return f;
      }
      function Fh(e) {
        for (var t = -1, n = e == null ? 0 : e.length, i = 0, u = []; ++t < n; ) {
          var a = e[t];
          a && (u[i++] = a);
        }
        return u;
      }
      function Dh() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var t = g(e - 1), n = arguments[0], i = e; i--; )
          t[i - 1] = arguments[i];
        return Lt(B(n) ? De(n) : [n], ve(t, 1));
      }
      var Rh = V(function(e, t) {
        return se(e) ? Rn(e, ve(t, 1, se, !0)) : [];
      }), Nh = V(function(e, t) {
        var n = ze(t);
        return se(n) && (n = s), se(e) ? Rn(e, ve(t, 1, se, !0), M(n, 2)) : [];
      }), Bh = V(function(e, t) {
        var n = ze(t);
        return se(n) && (n = s), se(e) ? Rn(e, ve(t, 1, se, !0), s, n) : [];
      });
      function Ph(e, t, n) {
        var i = e == null ? 0 : e.length;
        return i ? (t = n || t === s ? 1 : P(t), Ye(e, t < 0 ? 0 : t, i)) : [];
      }
      function Vh(e, t, n) {
        var i = e == null ? 0 : e.length;
        return i ? (t = n || t === s ? 1 : P(t), t = i - t, Ye(e, 0, t < 0 ? 0 : t)) : [];
      }
      function $h(e, t) {
        return e && e.length ? br(e, M(t, 3), !0, !0) : [];
      }
      function Uh(e, t) {
        return e && e.length ? br(e, M(t, 3), !0) : [];
      }
      function Hh(e, t, n, i) {
        var u = e == null ? 0 : e.length;
        return u ? (n && typeof n != "number" && Ce(e, t, n) && (n = 0, i = u), Ff(e, t, n, i)) : [];
      }
      function sl(e, t, n) {
        var i = e == null ? 0 : e.length;
        if (!i)
          return -1;
        var u = n == null ? 0 : P(n);
        return u < 0 && (u = fe(i + u, 0)), Qn(e, M(t, 3), u);
      }
      function ul(e, t, n) {
        var i = e == null ? 0 : e.length;
        if (!i)
          return -1;
        var u = i - 1;
        return n !== s && (u = P(n), u = n < 0 ? fe(i + u, 0) : be(u, i - 1)), Qn(e, M(t, 3), u, !0);
      }
      function ll(e) {
        var t = e == null ? 0 : e.length;
        return t ? ve(e, 1) : [];
      }
      function Wh(e) {
        var t = e == null ? 0 : e.length;
        return t ? ve(e, $t) : [];
      }
      function kh(e, t) {
        var n = e == null ? 0 : e.length;
        return n ? (t = t === s ? 1 : P(t), ve(e, t)) : [];
      }
      function qh(e) {
        for (var t = -1, n = e == null ? 0 : e.length, i = {}; ++t < n; ) {
          var u = e[t];
          i[u[0]] = u[1];
        }
        return i;
      }
      function al(e) {
        return e && e.length ? e[0] : s;
      }
      function Gh(e, t, n) {
        var i = e == null ? 0 : e.length;
        if (!i)
          return -1;
        var u = n == null ? 0 : P(n);
        return u < 0 && (u = fe(i + u, 0)), jt(e, t, u);
      }
      function Yh(e) {
        var t = e == null ? 0 : e.length;
        return t ? Ye(e, 0, -1) : [];
      }
      var zh = V(function(e) {
        var t = te(e, Ei);
        return t.length && t[0] === e[0] ? yi(t) : [];
      }), Kh = V(function(e) {
        var t = ze(e), n = te(e, Ei);
        return t === ze(n) ? t = s : n.pop(), n.length && n[0] === e[0] ? yi(n, M(t, 2)) : [];
      }), Zh = V(function(e) {
        var t = ze(e), n = te(e, Ei);
        return t = typeof t == "function" ? t : s, t && n.pop(), n.length && n[0] === e[0] ? yi(n, s, t) : [];
      });
      function Jh(e, t) {
        return e == null ? "" : qo.call(e, t);
      }
      function ze(e) {
        var t = e == null ? 0 : e.length;
        return t ? e[t - 1] : s;
      }
      function Xh(e, t, n) {
        var i = e == null ? 0 : e.length;
        if (!i)
          return -1;
        var u = i;
        return n !== s && (u = P(n), u = u < 0 ? fe(i + u, 0) : be(u, i - 1)), t === t ? Lo(e, t, u) : Qn(e, Ys, u, !0);
      }
      function Qh(e, t) {
        return e && e.length ? yu(e, P(t)) : s;
      }
      var jh = V(ol);
      function ol(e, t) {
        return e && e.length && t && t.length ? Ti(e, t) : e;
      }
      function ec(e, t, n) {
        return e && e.length && t && t.length ? Ti(e, t, M(n, 2)) : e;
      }
      function tc(e, t, n) {
        return e && e.length && t && t.length ? Ti(e, t, s, n) : e;
      }
      var nc = _t(function(e, t) {
        var n = e == null ? 0 : e.length, i = mi(e, t);
        return Ou(e, te(t, function(u) {
          return bt(u, n) ? +u : u;
        }).sort(Fu)), i;
      });
      function rc(e, t) {
        var n = [];
        if (!(e && e.length))
          return n;
        var i = -1, u = [], a = e.length;
        for (t = M(t, 3); ++i < a; ) {
          var f = e[i];
          t(f, i, e) && (n.push(f), u.push(i));
        }
        return Ou(e, u), n;
      }
      function ki(e) {
        return e == null ? e : Ko.call(e);
      }
      function ic(e, t, n) {
        var i = e == null ? 0 : e.length;
        return i ? (n && typeof n != "number" && Ce(e, t, n) ? (t = 0, n = i) : (t = t == null ? 0 : P(t), n = n === s ? i : P(n)), Ye(e, t, n)) : [];
      }
      function sc(e, t) {
        return _r(e, t);
      }
      function uc(e, t, n) {
        return Li(e, t, M(n, 2));
      }
      function lc(e, t) {
        var n = e == null ? 0 : e.length;
        if (n) {
          var i = _r(e, t);
          if (i < n && tt(e[i], t))
            return i;
        }
        return -1;
      }
      function ac(e, t) {
        return _r(e, t, !0);
      }
      function oc(e, t, n) {
        return Li(e, t, M(n, 2), !0);
      }
      function fc(e, t) {
        var n = e == null ? 0 : e.length;
        if (n) {
          var i = _r(e, t, !0) - 1;
          if (tt(e[i], t))
            return i;
        }
        return -1;
      }
      function hc(e) {
        return e && e.length ? Au(e) : [];
      }
      function cc(e, t) {
        return e && e.length ? Au(e, M(t, 2)) : [];
      }
      function dc(e) {
        var t = e == null ? 0 : e.length;
        return t ? Ye(e, 1, t) : [];
      }
      function pc(e, t, n) {
        return e && e.length ? (t = n || t === s ? 1 : P(t), Ye(e, 0, t < 0 ? 0 : t)) : [];
      }
      function gc(e, t, n) {
        var i = e == null ? 0 : e.length;
        return i ? (t = n || t === s ? 1 : P(t), t = i - t, Ye(e, t < 0 ? 0 : t, i)) : [];
      }
      function mc(e, t) {
        return e && e.length ? br(e, M(t, 3), !1, !0) : [];
      }
      function vc(e, t) {
        return e && e.length ? br(e, M(t, 3)) : [];
      }
      var _c = V(function(e) {
        return Mt(ve(e, 1, se, !0));
      }), bc = V(function(e) {
        var t = ze(e);
        return se(t) && (t = s), Mt(ve(e, 1, se, !0), M(t, 2));
      }), yc = V(function(e) {
        var t = ze(e);
        return t = typeof t == "function" ? t : s, Mt(ve(e, 1, se, !0), s, t);
      });
      function wc(e) {
        return e && e.length ? Mt(e) : [];
      }
      function Sc(e, t) {
        return e && e.length ? Mt(e, M(t, 2)) : [];
      }
      function Oc(e, t) {
        return t = typeof t == "function" ? t : s, e && e.length ? Mt(e, s, t) : [];
      }
      function qi(e) {
        if (!(e && e.length))
          return [];
        var t = 0;
        return e = Ct(e, function(n) {
          if (se(n))
            return t = fe(n.length, t), !0;
        }), li(t, function(n) {
          return te(e, ii(n));
        });
      }
      function fl(e, t) {
        if (!(e && e.length))
          return [];
        var n = qi(e);
        return t == null ? n : te(n, function(i) {
          return Pe(t, s, i);
        });
      }
      var Tc = V(function(e, t) {
        return se(e) ? Rn(e, t) : [];
      }), Ac = V(function(e) {
        return xi(Ct(e, se));
      }), Cc = V(function(e) {
        var t = ze(e);
        return se(t) && (t = s), xi(Ct(e, se), M(t, 2));
      }), Lc = V(function(e) {
        var t = ze(e);
        return t = typeof t == "function" ? t : s, xi(Ct(e, se), s, t);
      }), Ic = V(qi);
      function xc(e, t) {
        return xu(e || [], t || [], Dn);
      }
      function Ec(e, t) {
        return xu(e || [], t || [], Pn);
      }
      var Mc = V(function(e) {
        var t = e.length, n = t > 1 ? e[t - 1] : s;
        return n = typeof n == "function" ? (e.pop(), n) : s, fl(e, n);
      });
      function hl(e) {
        var t = l(e);
        return t.__chain__ = !0, t;
      }
      function Fc(e, t) {
        return t(e), e;
      }
      function Ir(e, t) {
        return t(e);
      }
      var Dc = _t(function(e) {
        var t = e.length, n = t ? e[0] : 0, i = this.__wrapped__, u = function(a) {
          return mi(a, e);
        };
        return t > 1 || this.__actions__.length || !(i instanceof W) || !bt(n) ? this.thru(u) : (i = i.slice(n, +n + (t ? 1 : 0)), i.__actions__.push({
          func: Ir,
          args: [u],
          thisArg: s
        }), new qe(i, this.__chain__).thru(function(a) {
          return t && !a.length && a.push(s), a;
        }));
      });
      function Rc() {
        return hl(this);
      }
      function Nc() {
        return new qe(this.value(), this.__chain__);
      }
      function Bc() {
        this.__values__ === s && (this.__values__ = Al(this.value()));
        var e = this.__index__ >= this.__values__.length, t = e ? s : this.__values__[this.__index__++];
        return { done: e, value: t };
      }
      function Pc() {
        return this;
      }
      function Vc(e) {
        for (var t, n = this; n instanceof dr; ) {
          var i = il(n);
          i.__index__ = 0, i.__values__ = s, t ? u.__wrapped__ = i : t = i;
          var u = i;
          n = n.__wrapped__;
        }
        return u.__wrapped__ = e, t;
      }
      function $c() {
        var e = this.__wrapped__;
        if (e instanceof W) {
          var t = e;
          return this.__actions__.length && (t = new W(this)), t = t.reverse(), t.__actions__.push({
            func: Ir,
            args: [ki],
            thisArg: s
          }), new qe(t, this.__chain__);
        }
        return this.thru(ki);
      }
      function Uc() {
        return Iu(this.__wrapped__, this.__actions__);
      }
      var Hc = yr(function(e, t, n) {
        Q.call(e, n) ? ++e[n] : mt(e, n, 1);
      });
      function Wc(e, t, n) {
        var i = B(e) ? qs : Mf;
        return n && Ce(e, t, n) && (t = s), i(e, M(t, 3));
      }
      function kc(e, t) {
        var n = B(e) ? Ct : hu;
        return n(e, M(t, 3));
      }
      var qc = Vu(sl), Gc = Vu(ul);
      function Yc(e, t) {
        return ve(xr(e, t), 1);
      }
      function zc(e, t) {
        return ve(xr(e, t), $t);
      }
      function Kc(e, t, n) {
        return n = n === s ? 1 : P(n), ve(xr(e, t), n);
      }
      function cl(e, t) {
        var n = B(e) ? We : Et;
        return n(e, M(t, 3));
      }
      function dl(e, t) {
        var n = B(e) ? oo : fu;
        return n(e, M(t, 3));
      }
      var Zc = yr(function(e, t, n) {
        Q.call(e, n) ? e[n].push(t) : mt(e, n, [t]);
      });
      function Jc(e, t, n, i) {
        e = Re(e) ? e : cn(e), n = n && !i ? P(n) : 0;
        var u = e.length;
        return n < 0 && (n = fe(u + n, 0)), Rr(e) ? n <= u && e.indexOf(t, n) > -1 : !!u && jt(e, t, n) > -1;
      }
      var Xc = V(function(e, t, n) {
        var i = -1, u = typeof t == "function", a = Re(e) ? g(e.length) : [];
        return Et(e, function(f) {
          a[++i] = u ? Pe(t, f, n) : Nn(f, t, n);
        }), a;
      }), Qc = yr(function(e, t, n) {
        mt(e, n, t);
      });
      function xr(e, t) {
        var n = B(e) ? te : vu;
        return n(e, M(t, 3));
      }
      function jc(e, t, n, i) {
        return e == null ? [] : (B(t) || (t = t == null ? [] : [t]), n = i ? s : n, B(n) || (n = n == null ? [] : [n]), wu(e, t, n));
      }
      var ed = yr(function(e, t, n) {
        e[n ? 0 : 1].push(t);
      }, function() {
        return [[], []];
      });
      function td(e, t, n) {
        var i = B(e) ? ni : Ks, u = arguments.length < 3;
        return i(e, M(t, 4), n, u, Et);
      }
      function nd(e, t, n) {
        var i = B(e) ? fo : Ks, u = arguments.length < 3;
        return i(e, M(t, 4), n, u, fu);
      }
      function rd(e, t) {
        var n = B(e) ? Ct : hu;
        return n(e, Fr(M(t, 3)));
      }
      function id(e) {
        var t = B(e) ? uu : Zf;
        return t(e);
      }
      function sd(e, t, n) {
        (n ? Ce(e, t, n) : t === s) ? t = 1 : t = P(t);
        var i = B(e) ? Cf : Jf;
        return i(e, t);
      }
      function ud(e) {
        var t = B(e) ? Lf : Qf;
        return t(e);
      }
      function ld(e) {
        if (e == null)
          return 0;
        if (Re(e))
          return Rr(e) ? tn(e) : e.length;
        var t = ye(e);
        return t == Xe || t == Qe ? e.size : Si(e).length;
      }
      function ad(e, t, n) {
        var i = B(e) ? ri : jf;
        return n && Ce(e, t, n) && (t = s), i(e, M(t, 3));
      }
      var od = V(function(e, t) {
        if (e == null)
          return [];
        var n = t.length;
        return n > 1 && Ce(e, t[0], t[1]) ? t = [] : n > 2 && Ce(t[0], t[1], t[2]) && (t = [t[0]]), wu(e, ve(t, 1), []);
      }), Er = Uo || function() {
        return me.Date.now();
      };
      function fd(e, t) {
        if (typeof t != "function")
          throw new ke(v);
        return e = P(e), function() {
          if (--e < 1)
            return t.apply(this, arguments);
        };
      }
      function pl(e, t, n) {
        return t = n ? s : t, t = e && t == null ? e.length : t, vt(e, K, s, s, s, s, t);
      }
      function gl(e, t) {
        var n;
        if (typeof t != "function")
          throw new ke(v);
        return e = P(e), function() {
          return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = s), n;
        };
      }
      var Gi = V(function(e, t, n) {
        var i = Fe;
        if (n.length) {
          var u = It(n, fn(Gi));
          i |= C;
        }
        return vt(e, i, t, n, u);
      }), ml = V(function(e, t, n) {
        var i = Fe | ct;
        if (n.length) {
          var u = It(n, fn(ml));
          i |= C;
        }
        return vt(t, i, e, n, u);
      });
      function vl(e, t, n) {
        t = n ? s : t;
        var i = vt(e, k, s, s, s, s, s, t);
        return i.placeholder = vl.placeholder, i;
      }
      function _l(e, t, n) {
        t = n ? s : t;
        var i = vt(e, S, s, s, s, s, s, t);
        return i.placeholder = _l.placeholder, i;
      }
      function bl(e, t, n) {
        var i, u, a, f, h, d, w = 0, y = !1, A = !1, L = !0;
        if (typeof e != "function")
          throw new ke(v);
        t = Ke(t) || 0, ne(n) && (y = !!n.leading, A = "maxWait" in n, a = A ? fe(Ke(n.maxWait) || 0, t) : a, L = "trailing" in n ? !!n.trailing : L);
        function x(ue) {
          var nt = i, St = u;
          return i = u = s, w = ue, f = e.apply(St, nt), f;
        }
        function D(ue) {
          return w = ue, h = Un(H, t), y ? x(ue) : f;
        }
        function U(ue) {
          var nt = ue - d, St = ue - w, Vl = t - nt;
          return A ? be(Vl, a - St) : Vl;
        }
        function F(ue) {
          var nt = ue - d, St = ue - w;
          return d === s || nt >= t || nt < 0 || A && St >= a;
        }
        function H() {
          var ue = Er();
          if (F(ue))
            return z(ue);
          h = Un(H, U(ue));
        }
        function z(ue) {
          return h = s, L && i ? x(ue) : (i = u = s, f);
        }
        function Le() {
          h !== s && th(h), w = 0, i = d = u = h = s;
        }
        function Ie() {
          return h === s ? f : z(Er());
        }
        function Nt() {
          var ue = Er(), nt = F(ue);
          if (i = arguments, u = this, d = ue, nt) {
            if (h === s)
              return D(d);
            if (A)
              return h = Un(H, t), x(d);
          }
          return h === s && (h = Un(H, t)), f;
        }
        return Nt.cancel = Le, Nt.flush = Ie, Nt;
      }
      var hd = V(function(e, t) {
        return ou(e, 1, t);
      }), cd = V(function(e, t, n) {
        return ou(e, Ke(t) || 0, n);
      });
      function dd(e) {
        return vt(e, $);
      }
      function Mr(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function")
          throw new ke(v);
        var n = function() {
          var i = arguments, u = t ? t.apply(this, i) : i[0], a = n.cache;
          if (a.has(u))
            return a.get(u);
          var f = e.apply(this, i);
          return n.cache = a.set(u, f) || a, f;
        };
        return n.cache = new (Mr.Cache || gt)(), n;
      }
      Mr.Cache = gt;
      function Fr(e) {
        if (typeof e != "function")
          throw new ke(v);
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return !e.call(this);
            case 1:
              return !e.call(this, t[0]);
            case 2:
              return !e.call(this, t[0], t[1]);
            case 3:
              return !e.call(this, t[0], t[1], t[2]);
          }
          return !e.apply(this, t);
        };
      }
      function pd(e) {
        return gl(2, e);
      }
      var gd = eh(function(e, t) {
        t = t.length == 1 && B(t[0]) ? te(t[0], Ve(M())) : te(ve(t, 1), Ve(M()));
        var n = t.length;
        return V(function(i) {
          for (var u = -1, a = be(i.length, n); ++u < a; )
            i[u] = t[u].call(this, i[u]);
          return Pe(e, this, i);
        });
      }), Yi = V(function(e, t) {
        var n = It(t, fn(Yi));
        return vt(e, C, s, t, n);
      }), yl = V(function(e, t) {
        var n = It(t, fn(yl));
        return vt(e, J, s, t, n);
      }), md = _t(function(e, t) {
        return vt(e, _e, s, s, s, t);
      });
      function vd(e, t) {
        if (typeof e != "function")
          throw new ke(v);
        return t = t === s ? t : P(t), V(e, t);
      }
      function _d(e, t) {
        if (typeof e != "function")
          throw new ke(v);
        return t = t == null ? 0 : fe(P(t), 0), V(function(n) {
          var i = n[t], u = Dt(n, 0, t);
          return i && Lt(u, i), Pe(e, this, u);
        });
      }
      function bd(e, t, n) {
        var i = !0, u = !0;
        if (typeof e != "function")
          throw new ke(v);
        return ne(n) && (i = "leading" in n ? !!n.leading : i, u = "trailing" in n ? !!n.trailing : u), bl(e, t, {
          leading: i,
          maxWait: t,
          trailing: u
        });
      }
      function yd(e) {
        return pl(e, 1);
      }
      function wd(e, t) {
        return Yi(Mi(t), e);
      }
      function Sd() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return B(e) ? e : [e];
      }
      function Od(e) {
        return Ge(e, ce);
      }
      function Td(e, t) {
        return t = typeof t == "function" ? t : s, Ge(e, ce, t);
      }
      function Ad(e) {
        return Ge(e, Te | ce);
      }
      function Cd(e, t) {
        return t = typeof t == "function" ? t : s, Ge(e, Te | ce, t);
      }
      function Ld(e, t) {
        return t == null || au(e, t, de(t));
      }
      function tt(e, t) {
        return e === t || e !== e && t !== t;
      }
      var Id = Tr(bi), xd = Tr(function(e, t) {
        return e >= t;
      }), zt = pu(function() {
        return arguments;
      }()) ? pu : function(e) {
        return ie(e) && Q.call(e, "callee") && !tu.call(e, "callee");
      }, B = g.isArray, Ed = Vs ? Ve(Vs) : Pf;
      function Re(e) {
        return e != null && Dr(e.length) && !yt(e);
      }
      function se(e) {
        return ie(e) && Re(e);
      }
      function Md(e) {
        return e === !0 || e === !1 || ie(e) && Ae(e) == bn;
      }
      var Rt = Wo || rs, Fd = $s ? Ve($s) : Vf;
      function Dd(e) {
        return ie(e) && e.nodeType === 1 && !Hn(e);
      }
      function Rd(e) {
        if (e == null)
          return !0;
        if (Re(e) && (B(e) || typeof e == "string" || typeof e.splice == "function" || Rt(e) || hn(e) || zt(e)))
          return !e.length;
        var t = ye(e);
        if (t == Xe || t == Qe)
          return !e.size;
        if ($n(e))
          return !Si(e).length;
        for (var n in e)
          if (Q.call(e, n))
            return !1;
        return !0;
      }
      function Nd(e, t) {
        return Bn(e, t);
      }
      function Bd(e, t, n) {
        n = typeof n == "function" ? n : s;
        var i = n ? n(e, t) : s;
        return i === s ? Bn(e, t, s, n) : !!i;
      }
      function zi(e) {
        if (!ie(e))
          return !1;
        var t = Ae(e);
        return t == Gn || t == na || typeof e.message == "string" && typeof e.name == "string" && !Hn(e);
      }
      function Pd(e) {
        return typeof e == "number" && ko(e);
      }
      function yt(e) {
        if (!ne(e))
          return !1;
        var t = Ae(e);
        return t == Yn || t == fs || t == ta || t == ia;
      }
      function wl(e) {
        return typeof e == "number" && e == P(e);
      }
      function Dr(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= At;
      }
      function ne(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function");
      }
      function ie(e) {
        return e != null && typeof e == "object";
      }
      var Sl = Us ? Ve(Us) : Uf;
      function Vd(e, t) {
        return e === t || wi(e, t, Vi(t));
      }
      function $d(e, t, n) {
        return n = typeof n == "function" ? n : s, wi(e, t, Vi(t), n);
      }
      function Ud(e) {
        return Ol(e) && e != +e;
      }
      function Hd(e) {
        if (Th(e))
          throw new R(p);
        return gu(e);
      }
      function Wd(e) {
        return e === null;
      }
      function kd(e) {
        return e == null;
      }
      function Ol(e) {
        return typeof e == "number" || ie(e) && Ae(e) == wn;
      }
      function Hn(e) {
        if (!ie(e) || Ae(e) != dt)
          return !1;
        var t = ur(e);
        if (t === null)
          return !0;
        var n = Q.call(t, "constructor") && t.constructor;
        return typeof n == "function" && n instanceof n && nr.call(n) == Bo;
      }
      var Ki = Hs ? Ve(Hs) : Hf;
      function qd(e) {
        return wl(e) && e >= -At && e <= At;
      }
      var Tl = Ws ? Ve(Ws) : Wf;
      function Rr(e) {
        return typeof e == "string" || !B(e) && ie(e) && Ae(e) == On;
      }
      function Ue(e) {
        return typeof e == "symbol" || ie(e) && Ae(e) == zn;
      }
      var hn = ks ? Ve(ks) : kf;
      function Gd(e) {
        return e === s;
      }
      function Yd(e) {
        return ie(e) && ye(e) == Tn;
      }
      function zd(e) {
        return ie(e) && Ae(e) == ua;
      }
      var Kd = Tr(Oi), Zd = Tr(function(e, t) {
        return e <= t;
      });
      function Al(e) {
        if (!e)
          return [];
        if (Re(e))
          return Rr(e) ? je(e) : De(e);
        if (Ln && e[Ln])
          return To(e[Ln]());
        var t = ye(e), n = t == Xe ? oi : t == Qe ? jn : cn;
        return n(e);
      }
      function wt(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = Ke(e), e === $t || e === -$t) {
          var t = e < 0 ? -1 : 1;
          return t * Xl;
        }
        return e === e ? e : 0;
      }
      function P(e) {
        var t = wt(e), n = t % 1;
        return t === t ? n ? t - n : t : 0;
      }
      function Cl(e) {
        return e ? qt(P(e), 0, st) : 0;
      }
      function Ke(e) {
        if (typeof e == "number")
          return e;
        if (Ue(e))
          return kn;
        if (ne(e)) {
          var t = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = ne(t) ? t + "" : t;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = e.replace(gs, "");
        var n = Ca.test(e);
        return n || Ia.test(e) ? uo(e.slice(2), n ? 2 : 8) : Aa.test(e) ? kn : +e;
      }
      function Ll(e) {
        return lt(e, Ne(e));
      }
      function Jd(e) {
        return e ? qt(P(e), -At, At) : e === 0 ? e : 0;
      }
      function Y(e) {
        return e == null ? "" : $e(e);
      }
      var Xd = an(function(e, t) {
        if ($n(t) || Re(t)) {
          lt(t, de(t), e);
          return;
        }
        for (var n in t)
          Q.call(t, n) && Dn(e, n, t[n]);
      }), Il = an(function(e, t) {
        lt(t, Ne(t), e);
      }), Nr = an(function(e, t, n, i) {
        lt(t, Ne(t), e, i);
      }), Qd = an(function(e, t, n, i) {
        lt(t, de(t), e, i);
      }), jd = _t(mi);
      function ep(e, t) {
        var n = un(e);
        return t == null ? n : lu(n, t);
      }
      var tp = V(function(e, t) {
        e = Z(e);
        var n = -1, i = t.length, u = i > 2 ? t[2] : s;
        for (u && Ce(t[0], t[1], u) && (i = 1); ++n < i; )
          for (var a = t[n], f = Ne(a), h = -1, d = f.length; ++h < d; ) {
            var w = f[h], y = e[w];
            (y === s || tt(y, rn[w]) && !Q.call(e, w)) && (e[w] = a[w]);
          }
        return e;
      }), np = V(function(e) {
        return e.push(s, Gu), Pe(xl, s, e);
      });
      function rp(e, t) {
        return Gs(e, M(t, 3), ut);
      }
      function ip(e, t) {
        return Gs(e, M(t, 3), _i);
      }
      function sp(e, t) {
        return e == null ? e : vi(e, M(t, 3), Ne);
      }
      function up(e, t) {
        return e == null ? e : cu(e, M(t, 3), Ne);
      }
      function lp(e, t) {
        return e && ut(e, M(t, 3));
      }
      function ap(e, t) {
        return e && _i(e, M(t, 3));
      }
      function op(e) {
        return e == null ? [] : mr(e, de(e));
      }
      function fp(e) {
        return e == null ? [] : mr(e, Ne(e));
      }
      function Zi(e, t, n) {
        var i = e == null ? s : ln(e, t);
        return i === s ? n : i;
      }
      function hp(e, t) {
        return e != null && Ku(e, t, Df);
      }
      function Ji(e, t) {
        return e != null && Ku(e, t, Rf);
      }
      var cp = Uu(function(e, t, n) {
        t != null && typeof t.toString != "function" && (t = rr.call(t)), e[t] = n;
      }, Qi(Be)), dp = Uu(function(e, t, n) {
        t != null && typeof t.toString != "function" && (t = rr.call(t)), Q.call(e, t) ? e[t].push(n) : e[t] = [n];
      }, M), pp = V(Nn);
      function de(e) {
        return Re(e) ? su(e) : Si(e);
      }
      function Ne(e) {
        return Re(e) ? su(e, !0) : qf(e);
      }
      function gp(e, t) {
        var n = {};
        return t = M(t, 3), ut(e, function(i, u, a) {
          mt(n, t(i, u, a), i);
        }), n;
      }
      function mp(e, t) {
        var n = {};
        return t = M(t, 3), ut(e, function(i, u, a) {
          mt(n, u, t(i, u, a));
        }), n;
      }
      var vp = an(function(e, t, n) {
        vr(e, t, n);
      }), xl = an(function(e, t, n, i) {
        vr(e, t, n, i);
      }), _p = _t(function(e, t) {
        var n = {};
        if (e == null)
          return n;
        var i = !1;
        t = te(t, function(a) {
          return a = Ft(a, e), i || (i = a.length > 1), a;
        }), lt(e, Bi(e), n), i && (n = Ge(n, Te | it | ce, ch));
        for (var u = t.length; u--; )
          Ii(n, t[u]);
        return n;
      });
      function bp(e, t) {
        return El(e, Fr(M(t)));
      }
      var yp = _t(function(e, t) {
        return e == null ? {} : Yf(e, t);
      });
      function El(e, t) {
        if (e == null)
          return {};
        var n = te(Bi(e), function(i) {
          return [i];
        });
        return t = M(t), Su(e, n, function(i, u) {
          return t(i, u[0]);
        });
      }
      function wp(e, t, n) {
        t = Ft(t, e);
        var i = -1, u = t.length;
        for (u || (u = 1, e = s); ++i < u; ) {
          var a = e == null ? s : e[at(t[i])];
          a === s && (i = u, a = n), e = yt(a) ? a.call(e) : a;
        }
        return e;
      }
      function Sp(e, t, n) {
        return e == null ? e : Pn(e, t, n);
      }
      function Op(e, t, n, i) {
        return i = typeof i == "function" ? i : s, e == null ? e : Pn(e, t, n, i);
      }
      var Ml = ku(de), Fl = ku(Ne);
      function Tp(e, t, n) {
        var i = B(e), u = i || Rt(e) || hn(e);
        if (t = M(t, 4), n == null) {
          var a = e && e.constructor;
          u ? n = i ? new a() : [] : ne(e) ? n = yt(a) ? un(ur(e)) : {} : n = {};
        }
        return (u ? We : ut)(e, function(f, h, d) {
          return t(n, f, h, d);
        }), n;
      }
      function Ap(e, t) {
        return e == null ? !0 : Ii(e, t);
      }
      function Cp(e, t, n) {
        return e == null ? e : Lu(e, t, Mi(n));
      }
      function Lp(e, t, n, i) {
        return i = typeof i == "function" ? i : s, e == null ? e : Lu(e, t, Mi(n), i);
      }
      function cn(e) {
        return e == null ? [] : ai(e, de(e));
      }
      function Ip(e) {
        return e == null ? [] : ai(e, Ne(e));
      }
      function xp(e, t, n) {
        return n === s && (n = t, t = s), n !== s && (n = Ke(n), n = n === n ? n : 0), t !== s && (t = Ke(t), t = t === t ? t : 0), qt(Ke(e), t, n);
      }
      function Ep(e, t, n) {
        return t = wt(t), n === s ? (n = t, t = 0) : n = wt(n), e = Ke(e), Nf(e, t, n);
      }
      function Mp(e, t, n) {
        if (n && typeof n != "boolean" && Ce(e, t, n) && (t = n = s), n === s && (typeof t == "boolean" ? (n = t, t = s) : typeof e == "boolean" && (n = e, e = s)), e === s && t === s ? (e = 0, t = 1) : (e = wt(e), t === s ? (t = e, e = 0) : t = wt(t)), e > t) {
          var i = e;
          e = t, t = i;
        }
        if (n || e % 1 || t % 1) {
          var u = ru();
          return be(e + u * (t - e + so("1e-" + ((u + "").length - 1))), t);
        }
        return Ai(e, t);
      }
      var Fp = on(function(e, t, n) {
        return t = t.toLowerCase(), e + (n ? Dl(t) : t);
      });
      function Dl(e) {
        return Xi(Y(e).toLowerCase());
      }
      function Rl(e) {
        return e = Y(e), e && e.replace(Ea, bo).replace(Za, "");
      }
      function Dp(e, t, n) {
        e = Y(e), t = $e(t);
        var i = e.length;
        n = n === s ? i : qt(P(n), 0, i);
        var u = n;
        return n -= t.length, n >= 0 && e.slice(n, u) == t;
      }
      function Rp(e) {
        return e = Y(e), e && ha.test(e) ? e.replace(ds, yo) : e;
      }
      function Np(e) {
        return e = Y(e), e && va.test(e) ? e.replace(zr, "\\$&") : e;
      }
      var Bp = on(function(e, t, n) {
        return e + (n ? "-" : "") + t.toLowerCase();
      }), Pp = on(function(e, t, n) {
        return e + (n ? " " : "") + t.toLowerCase();
      }), Vp = Pu("toLowerCase");
      function $p(e, t, n) {
        e = Y(e), t = P(t);
        var i = t ? tn(e) : 0;
        if (!t || i >= t)
          return e;
        var u = (t - i) / 2;
        return Or(fr(u), n) + e + Or(or(u), n);
      }
      function Up(e, t, n) {
        e = Y(e), t = P(t);
        var i = t ? tn(e) : 0;
        return t && i < t ? e + Or(t - i, n) : e;
      }
      function Hp(e, t, n) {
        e = Y(e), t = P(t);
        var i = t ? tn(e) : 0;
        return t && i < t ? Or(t - i, n) + e : e;
      }
      function Wp(e, t, n) {
        return n || t == null ? t = 0 : t && (t = +t), zo(Y(e).replace(ms, ""), t || 0);
      }
      function kp(e, t, n) {
        return (n ? Ce(e, t, n) : t === s) ? t = 1 : t = P(t), Ci(Y(e), t);
      }
      function qp() {
        var e = arguments, t = Y(e[0]);
        return e.length < 3 ? t : t.replace(e[1], e[2]);
      }
      var Gp = on(function(e, t, n) {
        return e + (n ? "_" : "") + t.toLowerCase();
      });
      function Yp(e, t, n) {
        return n && typeof n != "number" && Ce(e, t, n) && (t = n = s), n = n === s ? st : n >>> 0, n ? (e = Y(e), e && (typeof t == "string" || t != null && !Ki(t)) && (t = $e(t), !t && en(e)) ? Dt(je(e), 0, n) : e.split(t, n)) : [];
      }
      var zp = on(function(e, t, n) {
        return e + (n ? " " : "") + Xi(t);
      });
      function Kp(e, t, n) {
        return e = Y(e), n = n == null ? 0 : qt(P(n), 0, e.length), t = $e(t), e.slice(n, n + t.length) == t;
      }
      function Zp(e, t, n) {
        var i = l.templateSettings;
        n && Ce(e, t, n) && (t = s), e = Y(e), t = Nr({}, t, i, qu);
        var u = Nr({}, t.imports, i.imports, qu), a = de(u), f = ai(u, a), h, d, w = 0, y = t.interpolate || Kn, A = "__p += '", L = hi(
          (t.escape || Kn).source + "|" + y.source + "|" + (y === ps ? Ta : Kn).source + "|" + (t.evaluate || Kn).source + "|$",
          "g"
        ), x = "//# sourceURL=" + ("sourceURL" in t ? t.sourceURL : "lodash.templateSources[" + ++eo + "]") + `
`;
        e.replace(L, function(F, H, z, Le, Ie, Nt) {
          return z || (z = Le), A += e.slice(w, Nt).replace(Ma, wo), H && (h = !0, A += `' +
__e(` + H + `) +
'`), Ie && (d = !0, A += `';
` + Ie + `;
__p += '`), z && (A += `' +
((__t = (` + z + `)) == null ? '' : __t) +
'`), w = Nt + F.length, F;
        }), A += `';
`;
        var D = t.variable;
        D || (A = `with (obj) {
` + A + `
}
`), A = (d ? A.replace(la, "") : A).replace(aa, "$1").replace(oa, "$1;"), A = "function(" + (D || "obj") + `) {
` + (D ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (h ? ", __e = _.escape" : "") + (d ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + A + `return __p
}`;
        var U = Bl(function() {
          return G(a, x + "return " + A).apply(s, f);
        });
        if (U.source = A, zi(U))
          throw U;
        return U;
      }
      function Jp(e) {
        return Y(e).toLowerCase();
      }
      function Xp(e) {
        return Y(e).toUpperCase();
      }
      function Qp(e, t, n) {
        if (e = Y(e), e && (n || t === s))
          return e.replace(gs, "");
        if (!e || !(t = $e(t)))
          return e;
        var i = je(e), u = je(t), a = Zs(i, u), f = Js(i, u) + 1;
        return Dt(i, a, f).join("");
      }
      function jp(e, t, n) {
        if (e = Y(e), e && (n || t === s))
          return e.replace(_a, "");
        if (!e || !(t = $e(t)))
          return e;
        var i = je(e), u = Js(i, je(t)) + 1;
        return Dt(i, 0, u).join("");
      }
      function eg(e, t, n) {
        if (e = Y(e), e && (n || t === s))
          return e.replace(ms, "");
        if (!e || !(t = $e(t)))
          return e;
        var i = je(e), u = Zs(i, je(t));
        return Dt(i, u).join("");
      }
      function tg(e, t) {
        var n = Zt, i = gn;
        if (ne(t)) {
          var u = "separator" in t ? t.separator : u;
          n = "length" in t ? P(t.length) : n, i = "omission" in t ? $e(t.omission) : i;
        }
        e = Y(e);
        var a = e.length;
        if (en(e)) {
          var f = je(e);
          a = f.length;
        }
        if (n >= a)
          return e;
        var h = n - tn(i);
        if (h < 1)
          return i;
        var d = f ? Dt(f, 0, h).join("") : e.slice(0, h);
        if (u === s)
          return d + i;
        if (f && (h += d.length - h), Ki(u)) {
          if (e.slice(h).search(u)) {
            var w, y = d;
            for (u.global || (u = hi(u.source, Y(vs.exec(u)) + "g")), u.lastIndex = 0; w = u.exec(y); )
              var A = w.index;
            d = d.slice(0, A === s ? h : A);
          }
        } else if (e.indexOf($e(u), h) != h) {
          var L = d.lastIndexOf(u);
          L > -1 && (d = d.slice(0, L));
        }
        return d + i;
      }
      function ng(e) {
        return e = Y(e), e && fa.test(e) ? e.replace(cs, Io) : e;
      }
      var rg = on(function(e, t, n) {
        return e + (n ? " " : "") + t.toUpperCase();
      }), Xi = Pu("toUpperCase");
      function Nl(e, t, n) {
        return e = Y(e), t = n ? s : t, t === s ? Oo(e) ? Mo(e) : po(e) : e.match(t) || [];
      }
      var Bl = V(function(e, t) {
        try {
          return Pe(e, s, t);
        } catch (n) {
          return zi(n) ? n : new R(n);
        }
      }), ig = _t(function(e, t) {
        return We(t, function(n) {
          n = at(n), mt(e, n, Gi(e[n], e));
        }), e;
      });
      function sg(e) {
        var t = e == null ? 0 : e.length, n = M();
        return e = t ? te(e, function(i) {
          if (typeof i[1] != "function")
            throw new ke(v);
          return [n(i[0]), i[1]];
        }) : [], V(function(i) {
          for (var u = -1; ++u < t; ) {
            var a = e[u];
            if (Pe(a[0], this, i))
              return Pe(a[1], this, i);
          }
        });
      }
      function ug(e) {
        return Ef(Ge(e, Te));
      }
      function Qi(e) {
        return function() {
          return e;
        };
      }
      function lg(e, t) {
        return e == null || e !== e ? t : e;
      }
      var ag = $u(), og = $u(!0);
      function Be(e) {
        return e;
      }
      function ji(e) {
        return mu(typeof e == "function" ? e : Ge(e, Te));
      }
      function fg(e) {
        return _u(Ge(e, Te));
      }
      function hg(e, t) {
        return bu(e, Ge(t, Te));
      }
      var cg = V(function(e, t) {
        return function(n) {
          return Nn(n, e, t);
        };
      }), dg = V(function(e, t) {
        return function(n) {
          return Nn(e, n, t);
        };
      });
      function es(e, t, n) {
        var i = de(t), u = mr(t, i);
        n == null && !(ne(t) && (u.length || !i.length)) && (n = t, t = e, e = this, u = mr(t, de(t)));
        var a = !(ne(n) && "chain" in n) || !!n.chain, f = yt(e);
        return We(u, function(h) {
          var d = t[h];
          e[h] = d, f && (e.prototype[h] = function() {
            var w = this.__chain__;
            if (a || w) {
              var y = e(this.__wrapped__), A = y.__actions__ = De(this.__actions__);
              return A.push({ func: d, args: arguments, thisArg: e }), y.__chain__ = w, y;
            }
            return d.apply(e, Lt([this.value()], arguments));
          });
        }), e;
      }
      function pg() {
        return me._ === this && (me._ = Po), this;
      }
      function ts() {
      }
      function gg(e) {
        return e = P(e), V(function(t) {
          return yu(t, e);
        });
      }
      var mg = Di(te), vg = Di(qs), _g = Di(ri);
      function Pl(e) {
        return Ui(e) ? ii(at(e)) : zf(e);
      }
      function bg(e) {
        return function(t) {
          return e == null ? s : ln(e, t);
        };
      }
      var yg = Hu(), wg = Hu(!0);
      function ns() {
        return [];
      }
      function rs() {
        return !1;
      }
      function Sg() {
        return {};
      }
      function Og() {
        return "";
      }
      function Tg() {
        return !0;
      }
      function Ag(e, t) {
        if (e = P(e), e < 1 || e > At)
          return [];
        var n = st, i = be(e, st);
        t = M(t), e -= st;
        for (var u = li(i, t); ++n < e; )
          t(n);
        return u;
      }
      function Cg(e) {
        return B(e) ? te(e, at) : Ue(e) ? [e] : De(rl(Y(e)));
      }
      function Lg(e) {
        var t = ++No;
        return Y(e) + t;
      }
      var Ig = Sr(function(e, t) {
        return e + t;
      }, 0), xg = Ri("ceil"), Eg = Sr(function(e, t) {
        return e / t;
      }, 1), Mg = Ri("floor");
      function Fg(e) {
        return e && e.length ? gr(e, Be, bi) : s;
      }
      function Dg(e, t) {
        return e && e.length ? gr(e, M(t, 2), bi) : s;
      }
      function Rg(e) {
        return zs(e, Be);
      }
      function Ng(e, t) {
        return zs(e, M(t, 2));
      }
      function Bg(e) {
        return e && e.length ? gr(e, Be, Oi) : s;
      }
      function Pg(e, t) {
        return e && e.length ? gr(e, M(t, 2), Oi) : s;
      }
      var Vg = Sr(function(e, t) {
        return e * t;
      }, 1), $g = Ri("round"), Ug = Sr(function(e, t) {
        return e - t;
      }, 0);
      function Hg(e) {
        return e && e.length ? ui(e, Be) : 0;
      }
      function Wg(e, t) {
        return e && e.length ? ui(e, M(t, 2)) : 0;
      }
      return l.after = fd, l.ary = pl, l.assign = Xd, l.assignIn = Il, l.assignInWith = Nr, l.assignWith = Qd, l.at = jd, l.before = gl, l.bind = Gi, l.bindAll = ig, l.bindKey = ml, l.castArray = Sd, l.chain = hl, l.chunk = Mh, l.compact = Fh, l.concat = Dh, l.cond = sg, l.conforms = ug, l.constant = Qi, l.countBy = Hc, l.create = ep, l.curry = vl, l.curryRight = _l, l.debounce = bl, l.defaults = tp, l.defaultsDeep = np, l.defer = hd, l.delay = cd, l.difference = Rh, l.differenceBy = Nh, l.differenceWith = Bh, l.drop = Ph, l.dropRight = Vh, l.dropRightWhile = $h, l.dropWhile = Uh, l.fill = Hh, l.filter = kc, l.flatMap = Yc, l.flatMapDeep = zc, l.flatMapDepth = Kc, l.flatten = ll, l.flattenDeep = Wh, l.flattenDepth = kh, l.flip = dd, l.flow = ag, l.flowRight = og, l.fromPairs = qh, l.functions = op, l.functionsIn = fp, l.groupBy = Zc, l.initial = Yh, l.intersection = zh, l.intersectionBy = Kh, l.intersectionWith = Zh, l.invert = cp, l.invertBy = dp, l.invokeMap = Xc, l.iteratee = ji, l.keyBy = Qc, l.keys = de, l.keysIn = Ne, l.map = xr, l.mapKeys = gp, l.mapValues = mp, l.matches = fg, l.matchesProperty = hg, l.memoize = Mr, l.merge = vp, l.mergeWith = xl, l.method = cg, l.methodOf = dg, l.mixin = es, l.negate = Fr, l.nthArg = gg, l.omit = _p, l.omitBy = bp, l.once = pd, l.orderBy = jc, l.over = mg, l.overArgs = gd, l.overEvery = vg, l.overSome = _g, l.partial = Yi, l.partialRight = yl, l.partition = ed, l.pick = yp, l.pickBy = El, l.property = Pl, l.propertyOf = bg, l.pull = jh, l.pullAll = ol, l.pullAllBy = ec, l.pullAllWith = tc, l.pullAt = nc, l.range = yg, l.rangeRight = wg, l.rearg = md, l.reject = rd, l.remove = rc, l.rest = vd, l.reverse = ki, l.sampleSize = sd, l.set = Sp, l.setWith = Op, l.shuffle = ud, l.slice = ic, l.sortBy = od, l.sortedUniq = hc, l.sortedUniqBy = cc, l.split = Yp, l.spread = _d, l.tail = dc, l.take = pc, l.takeRight = gc, l.takeRightWhile = mc, l.takeWhile = vc, l.tap = Fc, l.throttle = bd, l.thru = Ir, l.toArray = Al, l.toPairs = Ml, l.toPairsIn = Fl, l.toPath = Cg, l.toPlainObject = Ll, l.transform = Tp, l.unary = yd, l.union = _c, l.unionBy = bc, l.unionWith = yc, l.uniq = wc, l.uniqBy = Sc, l.uniqWith = Oc, l.unset = Ap, l.unzip = qi, l.unzipWith = fl, l.update = Cp, l.updateWith = Lp, l.values = cn, l.valuesIn = Ip, l.without = Tc, l.words = Nl, l.wrap = wd, l.xor = Ac, l.xorBy = Cc, l.xorWith = Lc, l.zip = Ic, l.zipObject = xc, l.zipObjectDeep = Ec, l.zipWith = Mc, l.entries = Ml, l.entriesIn = Fl, l.extend = Il, l.extendWith = Nr, es(l, l), l.add = Ig, l.attempt = Bl, l.camelCase = Fp, l.capitalize = Dl, l.ceil = xg, l.clamp = xp, l.clone = Od, l.cloneDeep = Ad, l.cloneDeepWith = Cd, l.cloneWith = Td, l.conformsTo = Ld, l.deburr = Rl, l.defaultTo = lg, l.divide = Eg, l.endsWith = Dp, l.eq = tt, l.escape = Rp, l.escapeRegExp = Np, l.every = Wc, l.find = qc, l.findIndex = sl, l.findKey = rp, l.findLast = Gc, l.findLastIndex = ul, l.findLastKey = ip, l.floor = Mg, l.forEach = cl, l.forEachRight = dl, l.forIn = sp, l.forInRight = up, l.forOwn = lp, l.forOwnRight = ap, l.get = Zi, l.gt = Id, l.gte = xd, l.has = hp, l.hasIn = Ji, l.head = al, l.identity = Be, l.includes = Jc, l.indexOf = Gh, l.inRange = Ep, l.invoke = pp, l.isArguments = zt, l.isArray = B, l.isArrayBuffer = Ed, l.isArrayLike = Re, l.isArrayLikeObject = se, l.isBoolean = Md, l.isBuffer = Rt, l.isDate = Fd, l.isElement = Dd, l.isEmpty = Rd, l.isEqual = Nd, l.isEqualWith = Bd, l.isError = zi, l.isFinite = Pd, l.isFunction = yt, l.isInteger = wl, l.isLength = Dr, l.isMap = Sl, l.isMatch = Vd, l.isMatchWith = $d, l.isNaN = Ud, l.isNative = Hd, l.isNil = kd, l.isNull = Wd, l.isNumber = Ol, l.isObject = ne, l.isObjectLike = ie, l.isPlainObject = Hn, l.isRegExp = Ki, l.isSafeInteger = qd, l.isSet = Tl, l.isString = Rr, l.isSymbol = Ue, l.isTypedArray = hn, l.isUndefined = Gd, l.isWeakMap = Yd, l.isWeakSet = zd, l.join = Jh, l.kebabCase = Bp, l.last = ze, l.lastIndexOf = Xh, l.lowerCase = Pp, l.lowerFirst = Vp, l.lt = Kd, l.lte = Zd, l.max = Fg, l.maxBy = Dg, l.mean = Rg, l.meanBy = Ng, l.min = Bg, l.minBy = Pg, l.stubArray = ns, l.stubFalse = rs, l.stubObject = Sg, l.stubString = Og, l.stubTrue = Tg, l.multiply = Vg, l.nth = Qh, l.noConflict = pg, l.noop = ts, l.now = Er, l.pad = $p, l.padEnd = Up, l.padStart = Hp, l.parseInt = Wp, l.random = Mp, l.reduce = td, l.reduceRight = nd, l.repeat = kp, l.replace = qp, l.result = wp, l.round = $g, l.runInContext = c, l.sample = id, l.size = ld, l.snakeCase = Gp, l.some = ad, l.sortedIndex = sc, l.sortedIndexBy = uc, l.sortedIndexOf = lc, l.sortedLastIndex = ac, l.sortedLastIndexBy = oc, l.sortedLastIndexOf = fc, l.startCase = zp, l.startsWith = Kp, l.subtract = Ug, l.sum = Hg, l.sumBy = Wg, l.template = Zp, l.times = Ag, l.toFinite = wt, l.toInteger = P, l.toLength = Cl, l.toLower = Jp, l.toNumber = Ke, l.toSafeInteger = Jd, l.toString = Y, l.toUpper = Xp, l.trim = Qp, l.trimEnd = jp, l.trimStart = eg, l.truncate = tg, l.unescape = ng, l.uniqueId = Lg, l.upperCase = rg, l.upperFirst = Xi, l.each = cl, l.eachRight = dl, l.first = al, es(l, function() {
        var e = {};
        return ut(l, function(t, n) {
          Q.call(l.prototype, n) || (e[n] = t);
        }), e;
      }(), { chain: !1 }), l.VERSION = m, We(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        l[e].placeholder = l;
      }), We(["drop", "take"], function(e, t) {
        W.prototype[e] = function(n) {
          n = n === s ? 1 : fe(P(n), 0);
          var i = this.__filtered__ && !t ? new W(this) : this.clone();
          return i.__filtered__ ? i.__takeCount__ = be(n, i.__takeCount__) : i.__views__.push({
            size: be(n, st),
            type: e + (i.__dir__ < 0 ? "Right" : "")
          }), i;
        }, W.prototype[e + "Right"] = function(n) {
          return this.reverse()[e](n).reverse();
        };
      }), We(["filter", "map", "takeWhile"], function(e, t) {
        var n = t + 1, i = n == vn || n == Jl;
        W.prototype[e] = function(u) {
          var a = this.clone();
          return a.__iteratees__.push({
            iteratee: M(u, 3),
            type: n
          }), a.__filtered__ = a.__filtered__ || i, a;
        };
      }), We(["head", "last"], function(e, t) {
        var n = "take" + (t ? "Right" : "");
        W.prototype[e] = function() {
          return this[n](1).value()[0];
        };
      }), We(["initial", "tail"], function(e, t) {
        var n = "drop" + (t ? "" : "Right");
        W.prototype[e] = function() {
          return this.__filtered__ ? new W(this) : this[n](1);
        };
      }), W.prototype.compact = function() {
        return this.filter(Be);
      }, W.prototype.find = function(e) {
        return this.filter(e).head();
      }, W.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, W.prototype.invokeMap = V(function(e, t) {
        return typeof e == "function" ? new W(this) : this.map(function(n) {
          return Nn(n, e, t);
        });
      }), W.prototype.reject = function(e) {
        return this.filter(Fr(M(e)));
      }, W.prototype.slice = function(e, t) {
        e = P(e);
        var n = this;
        return n.__filtered__ && (e > 0 || t < 0) ? new W(n) : (e < 0 ? n = n.takeRight(-e) : e && (n = n.drop(e)), t !== s && (t = P(t), n = t < 0 ? n.dropRight(-t) : n.take(t - e)), n);
      }, W.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, W.prototype.toArray = function() {
        return this.take(st);
      }, ut(W.prototype, function(e, t) {
        var n = /^(?:filter|find|map|reject)|While$/.test(t), i = /^(?:head|last)$/.test(t), u = l[i ? "take" + (t == "last" ? "Right" : "") : t], a = i || /^find/.test(t);
        u && (l.prototype[t] = function() {
          var f = this.__wrapped__, h = i ? [1] : arguments, d = f instanceof W, w = h[0], y = d || B(f), A = function(H) {
            var z = u.apply(l, Lt([H], h));
            return i && L ? z[0] : z;
          };
          y && n && typeof w == "function" && w.length != 1 && (d = y = !1);
          var L = this.__chain__, x = !!this.__actions__.length, D = a && !L, U = d && !x;
          if (!a && y) {
            f = U ? f : new W(this);
            var F = e.apply(f, h);
            return F.__actions__.push({ func: Ir, args: [A], thisArg: s }), new qe(F, L);
          }
          return D && U ? e.apply(this, h) : (F = this.thru(A), D ? i ? F.value()[0] : F.value() : F);
        });
      }), We(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var t = er[e], n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", i = /^(?:pop|shift)$/.test(e);
        l.prototype[e] = function() {
          var u = arguments;
          if (i && !this.__chain__) {
            var a = this.value();
            return t.apply(B(a) ? a : [], u);
          }
          return this[n](function(f) {
            return t.apply(B(f) ? f : [], u);
          });
        };
      }), ut(W.prototype, function(e, t) {
        var n = l[t];
        if (n) {
          var i = n.name + "", u = Mn[i] || (Mn[i] = []);
          u.push({ name: t, func: n });
        }
      }), Mn[wr(s, ct).name] = [{
        name: "wrapper",
        func: s
      }], W.prototype.clone = ef, W.prototype.reverse = tf, W.prototype.value = nf, l.prototype.at = Dc, l.prototype.chain = Rc, l.prototype.commit = Nc, l.prototype.next = Bc, l.prototype.plant = Vc, l.prototype.reverse = $c, l.prototype.toJSON = l.prototype.valueOf = l.prototype.value = Uc, l.prototype.first = l.prototype.head, Ln && (l.prototype[Ln] = Pc), l;
    }, nn = Fo();
    Ut ? ((Ut.exports = nn)._ = nn, jr._ = nn) : me._ = nn;
  }).call(dn);
})(Pr, Pr.exports);
var b = Pr.exports;
const ql = {
  methods: {
    // Get style classes of field
    getFieldRowClasses(r) {
      const o = this.fieldErrors(r).length > 0;
      let s = {
        [b.get(this.options, "validationErrorClass", "error")]: o,
        [b.get(this.options, "validationSuccessClass", "valid")]: !o,
        disabled: this.fieldDisabled(r),
        readonly: this.fieldReadonly(r),
        featured: this.fieldFeatured(r),
        required: this.fieldRequired(r)
      };
      return b.isArray(r.styleClasses) ? b.forEach(r.styleClasses, (m) => s[m] = !0) : b.isString(r.styleClasses) && (s[r.styleClasses] = !0), b.isNil(r.type) || (s["field-" + r.type] = !0), s;
    },
    fieldErrors(r) {
      return this.errors.filter((s) => s.field === r).map((s) => s.error);
    },
    // Get disabled attr of field
    fieldDisabled(r) {
      return b.isFunction(r.disabled) ? r.disabled.call(this, this.model, r, this) : b.isNil(r.disabled) ? !1 : r.disabled;
    },
    // Get readonly prop of field
    fieldReadonly(r) {
      return b.isFunction(r.readonly) ? r.readonly.call(this, this.model, r, this) : b.isNil(r.readonly) ? !1 : r.readonly;
    },
    // Get featured prop of field
    fieldFeatured(r) {
      return b.isFunction(r.featured) ? r.featured.call(this, this.model, r, this) : b.isNil(r.featured) ? !1 : r.featured;
    },
    // Get required prop of field
    fieldRequired(r) {
      return b.isFunction(r.required) ? r.required.call(this, this.model, r, this) : b.isNil(r.required) ? !1 : r.required;
    }
  }
}, Zg = (r, o = {}) => (b.each(r.fields, (s) => {
  b.get(o, s.model) === void 0 && s.default !== void 0 && (b.isFunction(s.default) ? b.set(o, s.model, s.default(s, r, o)) : b.isObject(s.default) || b.isArray(s.default) ? b.set(o, s.model, b.cloneDeep(s.default)) : b.set(o, s.model, s.default));
}), o), Gl = (r) => {
  let o = [];
  return b.each(r.fields, (s) => {
    s.multi === !0 && o.push(s);
  }), o;
}, Jg = (r, o) => {
  let s = {}, m = Gl(r);
  return b.each(m, (O) => {
    let p, v = !0, T = O.model;
    b.each(o, (q) => {
      let ae = b.get(q, T);
      v ? (p = ae, v = !1) : p !== ae && (p = void 0);
    }), b.set(s, T, p);
  }), s;
}, os = (r, o = "") => typeof r.id < "u" ? o + r.id : o + (r.inputName || r.label || r.model || "").toString().trim().toLowerCase().replace(/ |_/g, "-").replace(/-{2,}/g, "-").replace(/^-+|-+$/g, "").replace(/([^a-zA-Z0-9-]+)/g, ""), as = (r = "") => r.toString().trim().replace(/ /g, "-").replace(/-{2,}/g, "-").replace(/^-+|-+$/g, "").replace(/([^a-zA-Z0-9-_/./:]+)/g, "");
var Yl = { exports: {} };
(function(r) {
  (function(o) {
    var s = {}, m = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g, O = /\d\d?/, p = /\d{3}/, v = /\d{4}/, T = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, q = /\[([^]*?)\]/gm, ae = function() {
    };
    function Te(S, C) {
      for (var J = [], K = 0, _e = S.length; K < _e; K++)
        J.push(S[K].substr(0, C));
      return J;
    }
    function it(S) {
      return function(C, J, K) {
        var _e = K[S].indexOf(J.charAt(0).toUpperCase() + J.substr(1).toLowerCase());
        ~_e && (C.month = _e);
      };
    }
    function ce(S, C) {
      for (S = String(S), C = C || 2; S.length < C; )
        S = "0" + S;
      return S;
    }
    var ht = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], Pt = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], Fe = Te(Pt, 3), ct = Te(ht, 3);
    s.i18n = {
      dayNamesShort: ct,
      dayNames: ht,
      monthNamesShort: Fe,
      monthNames: Pt,
      amPm: ["am", "pm"],
      DoFn: function(C) {
        return C + ["th", "st", "nd", "rd"][C % 10 > 3 ? 0 : (C - C % 10 !== 10) * C % 10];
      }
    };
    var pn = {
      D: function(S) {
        return S.getDate();
      },
      DD: function(S) {
        return ce(S.getDate());
      },
      Do: function(S, C) {
        return C.DoFn(S.getDate());
      },
      d: function(S) {
        return S.getDay();
      },
      dd: function(S) {
        return ce(S.getDay());
      },
      ddd: function(S, C) {
        return C.dayNamesShort[S.getDay()];
      },
      dddd: function(S, C) {
        return C.dayNames[S.getDay()];
      },
      M: function(S) {
        return S.getMonth() + 1;
      },
      MM: function(S) {
        return ce(S.getMonth() + 1);
      },
      MMM: function(S, C) {
        return C.monthNamesShort[S.getMonth()];
      },
      MMMM: function(S, C) {
        return C.monthNames[S.getMonth()];
      },
      YY: function(S) {
        return String(S.getFullYear()).substr(2);
      },
      YYYY: function(S) {
        return ce(S.getFullYear(), 4);
      },
      h: function(S) {
        return S.getHours() % 12 || 12;
      },
      hh: function(S) {
        return ce(S.getHours() % 12 || 12);
      },
      H: function(S) {
        return S.getHours();
      },
      HH: function(S) {
        return ce(S.getHours());
      },
      m: function(S) {
        return S.getMinutes();
      },
      mm: function(S) {
        return ce(S.getMinutes());
      },
      s: function(S) {
        return S.getSeconds();
      },
      ss: function(S) {
        return ce(S.getSeconds());
      },
      S: function(S) {
        return Math.round(S.getMilliseconds() / 100);
      },
      SS: function(S) {
        return ce(Math.round(S.getMilliseconds() / 10), 2);
      },
      SSS: function(S) {
        return ce(S.getMilliseconds(), 3);
      },
      a: function(S, C) {
        return S.getHours() < 12 ? C.amPm[0] : C.amPm[1];
      },
      A: function(S, C) {
        return S.getHours() < 12 ? C.amPm[0].toUpperCase() : C.amPm[1].toUpperCase();
      },
      ZZ: function(S) {
        var C = S.getTimezoneOffset();
        return (C > 0 ? "-" : "+") + ce(Math.floor(Math.abs(C) / 60) * 100 + Math.abs(C) % 60, 4);
      }
    }, k = {
      D: [O, function(S, C) {
        S.day = C;
      }],
      Do: [new RegExp(O.source + T.source), function(S, C) {
        S.day = parseInt(C, 10);
      }],
      M: [O, function(S, C) {
        S.month = C - 1;
      }],
      YY: [O, function(S, C) {
        var J = /* @__PURE__ */ new Date(), K = +("" + J.getFullYear()).substr(0, 2);
        S.year = "" + (C > 68 ? K - 1 : K) + C;
      }],
      h: [O, function(S, C) {
        S.hour = C;
      }],
      m: [O, function(S, C) {
        S.minute = C;
      }],
      s: [O, function(S, C) {
        S.second = C;
      }],
      YYYY: [v, function(S, C) {
        S.year = C;
      }],
      S: [/\d/, function(S, C) {
        S.millisecond = C * 100;
      }],
      SS: [/\d{2}/, function(S, C) {
        S.millisecond = C * 10;
      }],
      SSS: [p, function(S, C) {
        S.millisecond = C;
      }],
      d: [O, ae],
      ddd: [T, ae],
      MMM: [T, it("monthNamesShort")],
      MMMM: [T, it("monthNames")],
      a: [T, function(S, C, J) {
        var K = C.toLowerCase();
        K === J.amPm[0] ? S.isPm = !1 : K === J.amPm[1] && (S.isPm = !0);
      }],
      ZZ: [/([\+\-]\d\d:?\d\d|Z)/, function(S, C) {
        C === "Z" && (C = "+00:00");
        var J = (C + "").match(/([\+\-]|\d\d)/gi), K;
        J && (K = +(J[1] * 60) + parseInt(J[2], 10), S.timezoneOffset = J[0] === "+" ? K : -K);
      }]
    };
    k.dd = k.d, k.dddd = k.ddd, k.DD = k.D, k.mm = k.m, k.hh = k.H = k.HH = k.h, k.MM = k.M, k.ss = k.s, k.A = k.a, s.masks = {
      default: "ddd MMM DD YYYY HH:mm:ss",
      shortDate: "M/D/YY",
      mediumDate: "MMM D, YYYY",
      longDate: "MMMM D, YYYY",
      fullDate: "dddd, MMMM D, YYYY",
      shortTime: "HH:mm",
      mediumTime: "HH:mm:ss",
      longTime: "HH:mm:ss.SSS"
    }, s.format = function(S, C, J) {
      var K = J || s.i18n;
      if (typeof S == "number" && (S = new Date(S)), Object.prototype.toString.call(S) !== "[object Date]" || isNaN(S.getTime()))
        throw new Error("Invalid Date in fecha.format");
      C = s.masks[C] || C || s.masks.default;
      var _e = [];
      return C = C.replace(q, function($, Zt) {
        return _e.push(Zt), "??";
      }), C = C.replace(m, function($) {
        return $ in pn ? pn[$](S, K) : $.slice(1, $.length - 1);
      }), C.replace(/\?\?/g, function() {
        return _e.shift();
      });
    }, s.parse = function(S, C, J) {
      var K = J || s.i18n;
      if (typeof C != "string")
        throw new Error("Invalid format in fecha.parse");
      if (C = s.masks[C] || C, S.length > 1e3)
        return !1;
      var _e = !0, $ = {};
      if (C.replace(m, function(Vt) {
        if (k[Vt]) {
          var mn = k[Vt], vn = S.search(mn[0]);
          ~vn ? S.replace(mn[0], function(_n) {
            return mn[1]($, _n, K), S = S.substr(vn + _n.length), _n;
          }) : _e = !1;
        }
        return k[Vt] ? "" : Vt.slice(1, Vt.length - 1);
      }), !_e)
        return !1;
      var Zt = /* @__PURE__ */ new Date();
      $.isPm === !0 && $.hour != null && +$.hour != 12 ? $.hour = +$.hour + 12 : $.isPm === !1 && +$.hour == 12 && ($.hour = 0);
      var gn;
      return $.timezoneOffset != null ? ($.minute = +($.minute || 0) - +$.timezoneOffset, gn = new Date(Date.UTC(
        $.year || Zt.getFullYear(),
        $.month || 0,
        $.day || 1,
        $.hour || 0,
        $.minute || 0,
        $.second || 0,
        $.millisecond || 0
      ))) : gn = new Date(
        $.year || Zt.getFullYear(),
        $.month || 0,
        $.day || 1,
        $.hour || 0,
        $.minute || 0,
        $.second || 0,
        $.millisecond || 0
      ), gn;
    }, r.exports ? r.exports = s : o.fecha = s;
  })(dn);
})(Yl);
var Xg = Yl.exports;
const Bt = /* @__PURE__ */ Kg(Xg);
let we = {
  fieldIsRequired: "This field is required!",
  invalidFormat: "Invalid format!",
  numberTooSmall: "The number is too small! Minimum: {0}",
  numberTooBig: "The number is too big! Maximum: {0}",
  invalidNumber: "Invalid number",
  invalidInteger: "The value is not an integer",
  textTooSmall: "The length of text is too small! Current: {0}, Minimum: {1}",
  textTooBig: "The length of text is too big! Current: {0}, Maximum: {1}",
  thisNotText: "This is not a text!",
  thisNotArray: "This is not an array!",
  selectMinItems: "Select minimum {0} items!",
  selectMaxItems: "Select maximum {0} items!",
  invalidDate: "Invalid date!",
  dateIsEarly: "The date is too early! Current: {0}, Minimum: {1}",
  dateIsLate: "The date is too late! Current: {0}, Maximum: {1}",
  invalidEmail: "Invalid e-mail address!",
  invalidURL: "Invalid URL!",
  invalidCard: "Invalid card format!",
  invalidCardNumber: "Invalid card number!",
  invalidTextContainNumber: "Invalid text! Cannot contains numbers or special characters",
  invalidTextContainSpec: "Invalid text! Cannot contains special characters"
};
function Ze(r, o, s = we) {
  return b.isNil(r) || r === "" ? o ? [re(s.fieldIsRequired)] : [] : null;
}
function re(r) {
  if (r != null && arguments.length > 1)
    for (let o = 1; o < arguments.length; o++)
      r = r.replace("{" + (o - 1) + "}", arguments[o]);
  return r;
}
const Kt = {
  resources: we,
  required(r, o, s, m = we) {
    return Ze(r, o.required, m);
  },
  number(r, o, s, m = we) {
    let O = Ze(r, o.required, m);
    if (O != null)
      return O;
    let p = [];
    return b.isFinite(r) ? (!b.isNil(o.min) && r < o.min && p.push(re(m.numberTooSmall, o.min)), !b.isNil(o.max) && r > o.max && p.push(re(m.numberTooBig, o.max))) : p.push(re(m.invalidNumber)), p;
  },
  integer(r, o, s, m = we) {
    let O = Ze(r, o.required, m);
    if (O != null)
      return O;
    let p = Kt.number(r, o, s, m);
    return b.isInteger(r) || p.push(re(m.invalidInteger)), p;
  },
  double(r, o, s, m = we) {
    let O = Ze(r, o.required, m);
    if (O != null)
      return O;
    if (!b.isNumber(r) || isNaN(r))
      return [re(m.invalidNumber)];
  },
  string(r, o, s, m = we) {
    let O = Ze(r, o.required, m);
    if (O != null)
      return O;
    let p = [];
    return b.isString(r) ? (!b.isNil(o.min) && r.length < o.min && p.push(re(m.textTooSmall, r.length, o.min)), !b.isNil(o.max) && r.length > o.max && p.push(re(m.textTooBig, r.length, o.max))) : p.push(re(m.thisNotText)), p;
  },
  array(r, o, s, m = we) {
    if (o.required) {
      if (!b.isArray(r))
        return [re(m.thisNotArray)];
      if (r.length === 0)
        return [re(m.fieldIsRequired)];
    }
    if (!b.isNil(r)) {
      if (!b.isNil(o.min) && r.length < o.min)
        return [re(m.selectMinItems, o.min)];
      if (!b.isNil(o.max) && r.length > o.max)
        return [re(m.selectMaxItems, o.max)];
    }
  },
  date(r, o, s, m = we) {
    let O = Ze(r, o.required, m);
    if (O != null)
      return O;
    let p = new Date(r);
    if (isNaN(p.getDate()))
      return [re(m.invalidDate)];
    let v = [];
    if (!b.isNil(o.min)) {
      let T = new Date(o.min);
      p.valueOf() < T.valueOf() && v.push(re(m.dateIsEarly, Bt.format(p), Bt.format(T)));
    }
    if (!b.isNil(o.max)) {
      let T = new Date(o.max);
      p.valueOf() > T.valueOf() && v.push(re(m.dateIsLate, Bt.format(p), Bt.format(T)));
    }
    return v;
  },
  regexp(r, o, s, m = we) {
    let O = Ze(r, o.required, m);
    if (O != null)
      return O;
    if (!b.isNil(o.pattern) && !new RegExp(o.pattern).test(r))
      return [re(m.invalidFormat)];
  },
  email(r, o, s, m = we) {
    let O = Ze(r, o.required, m);
    if (O != null)
      return O;
    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(r))
      return [re(m.invalidEmail)];
  },
  url(r, o, s, m = we) {
    let O = Ze(r, o.required, m);
    if (O != null)
      return O;
    if (!/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g.test(r))
      return [re(m.invalidURL)];
  },
  creditCard(r, o, s, m = we) {
    let O = Ze(r, o.required, m);
    if (O != null)
      return O;
    const p = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/, v = r.replace(/[^0-9]+/g, "");
    if (!p.test(v))
      return [re(m.invalidCard)];
    let T = 0, q, ae, Te;
    for (let it = v.length - 1; it >= 0; it--)
      q = v.substring(it, it + 1), ae = parseInt(q, 10), Te ? (ae *= 2, ae >= 10 ? T += ae % 10 + 1 : T += ae) : T += ae, Te = !Te;
    if (!(T % 10 === 0 && v))
      return [re(m.invalidCardNumber)];
  },
  alpha(r, o, s, m = we) {
    let O = Ze(r, o.required, m);
    if (O != null)
      return O;
    if (!/^[a-zA-Z]*$/.test(r))
      return [re(m.invalidTextContainNumber)];
  },
  alphaNumeric(r, o, s, m = we) {
    let O = Ze(r, o.required, m);
    if (O != null)
      return O;
    if (!/^[a-zA-Z0-9]*$/.test(r))
      return [re(m.invalidTextContainSpec)];
  }
};
Object.keys(Kt).forEach((r) => {
  const o = Kt[r];
  b.isFunction(o) && (o.locale = (s) => (m, O, p) => o(m, O, p, b.defaults(s, we)));
});
function Ul(r) {
  return b.isString(r) ? Kt[r] != null ? Kt[r] : (console.warn(`'${r}' is not a validator function!`), null) : r;
}
function is(r, o, s) {
  let m = b.get(s.context, "schema.attributes", {}), O = o.value || "input";
  b.isString(O) && (m = b.get(m, O) || m), b.forEach(m, (p, v) => {
    r.setAttribute(v, p);
  });
}
const ft = {
  emits: ["validated", "model-updated"],
  props: ["vfg", "model", "schema", "formOptions", "disabled"],
  data() {
    return {
      errors: [],
      debouncedValidateFunc: null,
      debouncedFormatFunc: null
    };
  },
  directives: {
    attributes: {
      beforeMount: is,
      updated: is,
      componentUpdated: is
    }
  },
  computed: {
    value: {
      cache: !1,
      get() {
        let r;
        return b.isFunction(b.get(this.schema, "get")) ? r = this.schema.get(this.model) : r = b.get(this.model, this.schema.model), this.formatValueToField(r);
      },
      set(r) {
        let o = this.value;
        r = this.formatValueToModel(r), b.isFunction(r) ? r(r, o) : this.updateModelValue(r, o);
      }
    }
  },
  methods: {
    validate(r) {
      this.clearValidationErrors();
      let o = b.get(this.formOptions, "validateAsync", !1), s = [];
      if (this.schema.validator && this.schema.readonly !== !0 && this.disabled !== !0) {
        let O = [];
        b.isArray(this.schema.validator) ? b.forEach(this.schema.validator, (p) => {
          O.push(Ul(p).bind(this));
        }) : O.push(Ul(this.schema.validator).bind(this)), b.forEach(O, (p) => {
          if (o)
            s.push(p(this.value, this.schema, this.model));
          else {
            let v = p(this.value, this.schema, this.model);
            v && b.isFunction(v.then) ? v.then((T) => {
              T && (this.errors = this.errors.concat(T));
              let q = this.errors.length === 0;
              this.$emit("validated", q, this.errors, this);
            }) : v && (s = s.concat(v));
          }
        });
      }
      let m = (O) => {
        let p = [];
        b.forEach(b.uniq(O), (T) => {
          b.isArray(T) && T.length > 0 ? p = p.concat(T) : b.isString(T) && p.push(T);
        }), b.isFunction(this.schema.onValidated) && this.schema.onValidated.call(this, this.model, p, this.schema);
        let v = p.length === 0;
        return r || this.$emit("validated", v, p, this), this.errors = p, p;
      };
      return o ? Promise.all(s).then(m) : m(s);
    },
    debouncedValidate() {
      b.isFunction(this.debouncedValidateFunc) || (this.debouncedValidateFunc = b.debounce(
        this.validate.bind(this),
        b.get(this.schema, "validateDebounceTime", b.get(this.formOptions, "validateDebounceTime", 500))
      )), this.debouncedValidateFunc();
    },
    updateModelValue(r, o) {
      let s = !1;
      b.isFunction(this.schema.set) ? (this.schema.set(this.model, r), s = !0) : this.schema.model && (this.setModelValueByPath(this.schema.model, r), s = !0), s && (this.$emit("model-updated", r, this.schema.model), b.isFunction(this.schema.onChanged) && this.schema.onChanged.call(this, this.model, r, o, this.schema), b.get(this.formOptions, "validateAfterChanged", !1) === !0 && (b.get(this.schema, "validateDebounceTime", b.get(this.formOptions, "validateDebounceTime", 0)) > 0 ? this.debouncedValidate() : this.validate()));
    },
    clearValidationErrors() {
      this.errors.splice(0);
    },
    setModelValueByPath(r, o) {
      let s = r.replace(/\[(\w+)\]/g, ".$1");
      s = s.replace(/^\./, "");
      let m = this.model;
      const O = s.split(".");
      let p = 0;
      const v = O.length;
      for (; p < v; ) {
        let T = O[p];
        if (p < v - 1)
          m[T] !== void 0 || (m[T] = {}), m = m[T];
        else {
          m[T] = o;
          return;
        }
        ++p;
      }
    },
    getFieldID(r, o = !1) {
      const s = b.get(this.formOptions, "fieldIdPrefix", "");
      return os(r, s) + (o ? "-" + b.uniqueId() : "");
    },
    getFieldClasses() {
      return b.get(this.schema, "fieldClasses", []);
    },
    formatValueToField(r) {
      return r;
    },
    formatValueToModel(r) {
      return r;
    }
  }
}, Qg = ["id", "autocomplete", "disabled", "name", "required"];
function jg(r, o, s, m, O, p) {
  const v = Tt("attributes");
  return le((E(), N("input", {
    id: r.getFieldID(r.schema),
    type: "checkbox",
    "onUpdate:modelValue": o[0] || (o[0] = (T) => r.value = T),
    autocomplete: r.schema.autocomplete,
    disabled: r.disabled,
    name: r.schema.inputName,
    class: Me(r.schema.fieldClasses),
    required: r.schema.required
  }, null, 10, Qg)), [
    [kg, r.value],
    [v, "input"]
  ]);
}
const rt = (r, o) => {
  const s = r.__vccOpts || r;
  for (const [m, O] of o)
    s[m] = O;
  return s;
}, em = {
  mixins: [ft]
}, tm = /* @__PURE__ */ rt(em, [["render", jg]]), nm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: tm
}, Symbol.toStringTag, { value: "Module" })), rm = { class: "wrapper" }, im = ["disabled"], sm = ["id", "checked", "disabled", "onChange", "name"], um = ["disabled"], lm = { class: "info" }, am = /* @__PURE__ */ Ee("div", { class: "arrow" }, null, -1), om = {
  key: 0,
  class: "dropList"
}, fm = ["id", "checked", "disabled", "onChange", "name"];
function hm(r, o, s, m, O, p) {
  const v = Tt("attributes");
  return le((E(), N("div", rm, [
    r.schema.listBox ? (E(), N("div", {
      key: 0,
      class: "listbox form-control",
      disabled: r.disabled
    }, [
      (E(!0), N(Oe, null, Je(p.items, (T) => (E(), N("div", {
        class: Me(["list-row", { "is-checked": p.isItemChecked(T) }])
      }, [
        Ee("label", null, [
          le(Ee("input", {
            id: r.getFieldID(r.schema, !0),
            type: "checkbox",
            checked: p.isItemChecked(T),
            disabled: r.disabled,
            onChange: (q) => p.onChanged(q, T),
            name: p.getInputName(T)
          }, null, 40, sm), [
            [v, "input"]
          ]),
          Ot(ge(p.getItemName(T)), 1)
        ])
      ], 2))), 256))
    ], 8, im)) : ee("", !0),
    r.schema.listBox ? ee("", !0) : (E(), N("div", {
      key: 1,
      class: "combobox form-control",
      disabled: r.disabled
    }, [
      Ee("div", {
        class: Me(["mainRow", { expanded: O.comboExpanded }]),
        onClick: o[0] || (o[0] = (...T) => p.onExpandCombo && p.onExpandCombo(...T))
      }, [
        Ee("div", lm, ge(p.selectedCount) + " selected", 1),
        am
      ], 2),
      O.comboExpanded ? (E(), N("div", om, [
        (E(!0), N(Oe, null, Je(p.items, (T) => (E(), N("div", {
          class: Me(["list-row", { "is-checked": p.isItemChecked(T) }])
        }, [
          Ee("label", null, [
            le(Ee("input", {
              id: r.getFieldID(r.schema, !0),
              type: "checkbox",
              checked: p.isItemChecked(T),
              disabled: r.disabled,
              onChange: (q) => p.onChanged(q, T),
              name: p.getInputName(T)
            }, null, 40, fm), [
              [v, "input"]
            ]),
            Ot(ge(p.getItemName(T)), 1)
          ])
        ], 2))), 256))
      ])) : ee("", !0)
    ], 8, um))
  ])), [
    [v, "wrapper"]
  ]);
}
const cm = {
  mixins: [ft],
  data() {
    return {
      comboExpanded: !1
    };
  },
  computed: {
    items() {
      let r = this.schema.values;
      return typeof r == "function" ? r.apply(this, [this.model, this.schema]) : r;
    },
    selectedCount() {
      return this.value ? this.value.length : 0;
    }
  },
  methods: {
    getInputName(r) {
      return this.schema && this.schema.inputName && this.schema.inputName.length > 0 ? as(this.schema.inputName + "_" + this.getItemValue(r)) : as(this.getItemValue(r));
    },
    getItemValue(r) {
      if (b.isObject(r)) {
        if (typeof this.schema.checklistOptions < "u" && typeof this.schema.checklistOptions.value < "u")
          return r[this.schema.checklistOptions.value];
        if (typeof r.value < "u")
          return r.value;
        throw "`value` is not defined. If you want to use another key name, add a `value` property under `checklistOptions` in the schema. https://icebob.gitbooks.io/vueformgenerator/content/fields/checklist.html#checklist-field-with-object-values";
      } else
        return r;
    },
    getItemName(r) {
      if (b.isObject(r)) {
        if (typeof this.schema.checklistOptions < "u" && typeof this.schema.checklistOptions.name < "u")
          return r[this.schema.checklistOptions.name];
        if (typeof r.name < "u")
          return r.name;
        throw "`name` is not defined. If you want to use another key name, add a `name` property under `checklistOptions` in the schema. https://icebob.gitbooks.io/vueformgenerator/content/fields/checklist.html#checklist-field-with-object-values";
      } else
        return r;
    },
    isItemChecked(r) {
      return this.value && this.value.indexOf(this.getItemValue(r)) !== -1;
    },
    onChanged(r, o) {
      if ((b.isNil(this.value) || !Array.isArray(this.value)) && (this.value = []), r.target.checked) {
        const s = b.clone(this.value);
        s.push(this.getItemValue(o)), this.value = s;
      } else {
        const s = b.clone(this.value);
        s.splice(this.value.indexOf(this.getItemValue(o)), 1), this.value = s;
      }
    },
    onExpandCombo() {
      this.comboExpanded = !this.comboExpanded;
    }
  }
}, dm = /* @__PURE__ */ rt(cm, [["render", hm]]), pm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dm
}, Symbol.toStringTag, { value: "Module" })), gm = { class: "wrapper" }, mm = ["id", "type", "value", "disabled", "accept", "alt", "autocomplete", "checked", "dirname", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "height", "list", "max", "maxlength", "min", "minlength", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "src", "step", "width", "files"], vm = {
  key: 0,
  class: "helper"
};
function _m(r, o, s, m, O, p) {
  const v = Tt("attributes");
  return E(), N(Oe, null, [
    le(Ee("div", gm, null, 512), [
      [v, "wrapper"]
    ]),
    le(Ee("input", {
      class: Me(["form-control", r.schema.fieldClasses]),
      id: r.getFieldID(r.schema),
      type: p.inputType,
      value: r.value,
      onInput: o[0] || (o[0] = (...T) => p.onInput && p.onInput(...T)),
      onBlur: o[1] || (o[1] = (...T) => p.onBlur && p.onBlur(...T)),
      onChange: o[2] || (o[2] = (T) => r.schema.onChange || null),
      disabled: r.disabled,
      accept: r.schema.accept,
      alt: r.schema.alt,
      autocomplete: r.schema.autocomplete,
      checked: r.schema.checked,
      dirname: r.schema.dirname,
      formaction: r.schema.formaction,
      formenctype: r.schema.formenctype,
      formmethod: r.schema.formmethod,
      formnovalidate: r.schema.formnovalidate,
      formtarget: r.schema.formtarget,
      height: r.schema.height,
      list: r.schema.list,
      max: r.schema.max,
      maxlength: r.schema.maxlength,
      min: r.schema.min,
      minlength: r.schema.minlength,
      multiple: r.schema.multiple,
      name: r.schema.inputName,
      pattern: r.schema.pattern,
      placeholder: r.schema.placeholder,
      readonly: r.schema.readonly,
      required: r.schema.required,
      size: r.schema.size,
      src: r.schema.src,
      step: r.schema.step,
      width: r.schema.width,
      files: r.schema.files
    }, null, 42, mm), [
      [v, "input"]
    ]),
    r.schema.inputType.toLowerCase() === "color" || r.schema.inputType.toLowerCase() === "range" ? (E(), N("span", vm, ge(r.value), 1)) : ee("", !0)
  ], 64);
}
const Hl = {
  date: "YYYY-MM-DD",
  datetime: "YYYY-MM-DD HH:mm:ss",
  "datetime-local": "YYYY-MM-DDTHH:mm:ss"
}, bm = {
  mixins: [ft],
  computed: {
    inputType() {
      return this.schema && this.schema.inputType === "datetime" ? "datetime-local" : this.schema.inputType;
    }
  },
  methods: {
    formatValueToModel(r) {
      if (r != null)
        switch (this.schema.inputType.toLowerCase()) {
          case "date":
          case "datetime":
          case "datetime-local":
          case "number":
          case "range":
            return (o, s) => {
              this.debouncedFormatFunc(r, s);
            };
        }
      return r;
    },
    formatValueToField(r) {
      switch (this.schema.inputType.toLowerCase()) {
        case "date":
        case "datetime":
        case "datetime-local":
          return this.formatDatetimeValueToField(r);
      }
      return r;
    },
    formatDatetimeToModel(r, o) {
      let s = Hl[this.schema.inputType.toLowerCase()], m = Bt.parse(r, s);
      m !== !1 && (this.schema.format ? r = Bt.format(m, this.schema.format) : r = m.valueOf()), this.updateModelValue(r, o);
    },
    formatDatetimeValueToField(r) {
      if (r == null)
        return null;
      let o = Hl[this.schema.inputType.toLowerCase()], s = r;
      return b.isNumber(r) || (s = Bt.parse(r, o)), s !== !1 ? Bt.format(s, o) : r;
    },
    formatNumberToModel(r, o) {
      b.isNumber(r) || (r = NaN), this.updateModelValue(r, o);
    },
    onInput(r) {
      let o = r.target.value;
      switch (this.schema.inputType.toLowerCase()) {
        case "number":
        case "range":
          b.isNumber(parseFloat(r.target.value)) && (o = parseFloat(r.target.value));
          break;
      }
      this.value = o;
    },
    onBlur() {
      b.isFunction(this.debouncedFormatFunc) && this.debouncedFormatFunc.flush();
    }
  },
  mounted() {
    switch (this.schema.inputType.toLowerCase()) {
      case "number":
      case "range":
        this.debouncedFormatFunc = b.debounce(
          (r, o) => {
            this.formatNumberToModel(r, o);
          },
          parseInt(b.get(this.schema, "debounceFormatTimeout", 1e3)),
          {
            trailing: !0,
            leading: !1
          }
        );
        break;
      case "date":
      case "datetime":
      case "datetime-local":
        this.debouncedFormatFunc = b.debounce(
          (r, o) => {
            this.formatDatetimeToModel(r, o);
          },
          parseInt(b.get(this.schema, "debounceFormatTimeout", 1e3)),
          {
            trailing: !0,
            leading: !1
          }
        );
        break;
    }
  },
  created() {
    this.schema.inputType.toLowerCase() === "file" && console.warn("The 'file' type in input field is deprecated. Use 'file' field instead.");
  }
}, ym = /* @__PURE__ */ rt(bm, [["render", _m]]), wm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ym
}, Symbol.toStringTag, { value: "Module" })), Sm = ["id"];
function Om(r, o, s, m, O, p) {
  const v = Tt("attributes");
  return le((E(), N("span", {
    id: r.getFieldID(r.schema),
    class: Me(r.schema.fieldClasses)
  }, [
    Ot(ge(r.value), 1)
  ], 10, Sm)), [
    [v, "label"]
  ]);
}
const Tm = {
  mixins: [ft]
}, Am = /* @__PURE__ */ rt(Tm, [["render", Om]]), Cm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Am
}, Symbol.toStringTag, { value: "Module" })), Lm = ["disabled"], Im = ["id", "disabled", "name", "onClick", "value", "checked", "required"];
function xm(r, o, s, m, O, p) {
  const v = Tt("attributes");
  return le((E(), N("div", {
    class: "radio-list",
    disabled: r.disabled
  }, [
    (E(!0), N(Oe, null, Je(p.items, (T) => le((E(), N("label", {
      class: Me(p.getItemCssClasses(T))
    }, [
      le(Ee("input", {
        id: r.getFieldID(r.schema, !0),
        type: "radio",
        disabled: p.isItemDisabled(T),
        name: p.id,
        onClick: (q) => p.onSelection(T),
        value: p.getItemValue(T),
        checked: p.isItemChecked(T),
        class: Me(r.schema.fieldClasses),
        required: r.schema.required
      }, null, 10, Im), [
        [v, "input"]
      ]),
      Ot(ge(p.getItemName(T)), 1)
    ], 2)), [
      [v, "label"]
    ])), 256))
  ], 8, Lm)), [
    [v, "wrapper"]
  ]);
}
const Em = {
  mixins: [ft],
  computed: {
    items() {
      let r = this.schema.values;
      return typeof r == "function" ? r.apply(this, [this.model, this.schema]) : r;
    },
    id() {
      return this.schema.model;
    }
  },
  methods: {
    getItemValue(r) {
      if (b.isObject(r)) {
        if (typeof this.schema.radiosOptions < "u" && typeof this.schema.radiosOptions.value < "u")
          return r[this.schema.radiosOptions.value];
        if (typeof r.value < "u")
          return r.value;
        throw "`value` is not defined. If you want to use another key name, add a `value` property under `radiosOptions` in the schema. https://icebob.gitbooks.io/vueformgenerator/content/fields/radios.html#radios-field-with-object-values";
      } else
        return r;
    },
    getItemName(r) {
      if (b.isObject(r)) {
        if (typeof this.schema.radiosOptions < "u" && typeof this.schema.radiosOptions.name < "u")
          return r[this.schema.radiosOptions.name];
        if (typeof r.name < "u")
          return r.name;
        throw "`name` is not defined. If you want to use another key name, add a `name` property under `radiosOptions` in the schema. https://icebob.gitbooks.io/vueformgenerator/content/fields/radios.html#radios-field-with-object-values";
      } else
        return r;
    },
    getItemCssClasses(r) {
      return {
        "is-checked": this.isItemChecked(r),
        "is-disabled": this.isItemDisabled(r)
      };
    },
    onSelection(r) {
      this.value = this.getItemValue(r);
    },
    isItemChecked(r) {
      return this.getItemValue(r) === this.value;
    },
    isItemDisabled(r) {
      if (this.disabled)
        return !0;
      let o = b.get(r, "disabled", !1);
      return b.isFunction(o) ? o(this.model) : o;
    }
  }
}, Mm = /* @__PURE__ */ rt(Em, [["render", xm]]), Fm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Mm
}, Symbol.toStringTag, { value: "Module" })), Dm = ["disabled", "name", "id"], Rm = ["disabled"], Nm = ["label"], Bm = ["value"], Pm = ["value"];
function Vm(r, o, s, m, O, p) {
  const v = Tt("attributes");
  return le((E(), N("select", {
    class: Me(["form-control", r.schema.fieldClasses]),
    "onUpdate:modelValue": o[0] || (o[0] = (T) => r.value = T),
    disabled: r.disabled,
    name: r.schema.inputName,
    id: r.getFieldID(r.schema)
  }, [
    p.selectOptions.hideNoneSelectedText ? ee("", !0) : (E(), N("option", {
      key: 0,
      disabled: r.schema.required,
      value: null
    }, ge(p.selectOptions.noneSelectedText || "<Nothing selected>"), 9, Rm)),
    (E(!0), N(Oe, null, Je(p.items, (T) => (E(), N(Oe, null, [
      T.group ? (E(), N("optgroup", {
        key: 0,
        label: T.group
      }, [
        (E(!0), N(Oe, null, Je(T.ops, (q) => (E(), N("option", {
          value: q.value
        }, ge(q.name), 9, Bm))), 256))
      ], 8, Nm)) : ee("", !0),
      T.group ? ee("", !0) : (E(), N("option", {
        key: 1,
        value: T.value
      }, ge(T.name), 9, Pm))
    ], 64))), 256))
  ], 10, Dm)), [
    [qg, r.value],
    [v, "input"]
  ]);
}
const $m = {
  mixins: [ft],
  computed: {
    selectOptions() {
      return this.schema.selectOptions || {};
    },
    items() {
      let r = this.schema.values;
      return typeof r == "function" ? this.groupValues(r.apply(this, [this.model, this.schema])) : this.groupValues(r);
    }
  },
  methods: {
    formatValueToField(r) {
      return b.isNil(r) ? null : r;
    },
    groupValues(r) {
      let o = [], s = {};
      for (let m of r) {
        let O = o;
        m.group && (s[m.group] || (s[m.group] = { ops: [], name: m.group, group: m.group }, o.push(s[m.group])), O = s[m.group].ops), O.push({ name: m.name, value: m.value });
      }
      return o;
    }
  }
}, Um = /* @__PURE__ */ rt($m, [["render", Vm]]), Hm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Um
}, Symbol.toStringTag, { value: "Module" })), Wm = ["id", "value", "name", "disabled"];
function km(r, o, s, m, O, p) {
  const v = Tt("attributes");
  return le((E(), N("input", {
    id: r.getFieldID(r.schema),
    type: "submit",
    value: r.schema.buttonText,
    onClick: o[0] || (o[0] = (...T) => p.onClick && p.onClick(...T)),
    name: r.schema.inputName,
    disabled: r.disabled,
    class: Me(r.schema.fieldClasses)
  }, null, 10, Wm)), [
    [v, "input"]
  ]);
}
const qm = {
  mixins: [ft],
  methods: {
    onClick(r) {
      if (this.schema.validateBeforeSubmit === !0) {
        r.preventDefault();
        let o = b.get(this.formOptions, "validateAsync", !1), s = this.vfg.validate(), m = (O) => {
          o && !b.isEmpty(O) || !o && !O ? b.isFunction(this.schema.onValidationError) && this.schema.onValidationError(this.model, this.schema, O, r) : b.isFunction(this.schema.onSubmit) && this.schema.onSubmit(this.model, this.schema, r);
        };
        s && b.isFunction(s.then) ? s.then(m) : m(s);
      } else
        b.isFunction(this.schema.onSubmit) && this.schema.onSubmit(this.model, this.schema, r);
    }
  }
}, Gm = /* @__PURE__ */ rt(qm, [["render", km]]), Ym = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Gm
}, Symbol.toStringTag, { value: "Module" })), zm = ["id", "disabled", "maxlength", "minlength", "placeholder", "readonly", "required", "rows", "name"];
function Km(r, o, s, m, O, p) {
  const v = Tt("attributes");
  return le((E(), N("textarea", {
    class: Me(["form-control", r.schema.fieldClasses]),
    "onUpdate:modelValue": o[0] || (o[0] = (T) => r.value = T),
    id: r.getFieldID(r.schema),
    disabled: r.disabled,
    maxlength: r.schema.max,
    minlength: r.schema.min,
    placeholder: r.schema.placeholder,
    readonly: r.schema.readonly,
    required: r.schema.required,
    rows: r.schema.rows || 2,
    name: r.schema.inputName
  }, null, 10, zm)), [
    [Gg, r.value],
    [v, "input"]
  ]);
}
const Zm = {
  mixins: [ft]
}, Jm = /* @__PURE__ */ rt(Zm, [["render", Km]]), Xm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Jm
}, Symbol.toStringTag, { value: "Module" })), Qm = { class: "wrapper" }, jm = ["id", "name", "accept", "multiple", "placeholder", "readonly", "required", "disabled"];
function ev(r, o, s, m, O, p) {
  const v = Tt("attributes");
  return le((E(), N("div", Qm, [
    le(Ee("input", {
      class: "form-control",
      id: r.getFieldID(r.schema),
      type: "file",
      name: r.schema.inputName,
      onChange: o[0] || (o[0] = (...T) => p.onChange && p.onChange(...T)),
      accept: r.schema.accept,
      multiple: r.schema.multiple,
      placeholder: r.schema.placeholder,
      readonly: r.schema.readonly,
      required: r.schema.required,
      disabled: r.disabled
    }, null, 40, jm), [
      [v, "input"]
    ])
  ])), [
    [v, "wrapper"]
  ]);
}
const tv = {
  mixins: [ft],
  methods: {
    onChange(r) {
      b.isFunction(this.schema.onChanged) && this.schema.onChanged.call(this, this.model, this.schema, r, this);
    }
  }
}, nv = /* @__PURE__ */ rt(tv, [["render", ev]]), rv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nv
}, Symbol.toStringTag, { value: "Module" }));
function ss(r) {
  return r === 0 ? !1 : Array.isArray(r) && r.length === 0 ? !0 : !r;
}
function iv(r) {
  return (...o) => !r(...o);
}
function sv(r, o) {
  return r === void 0 && (r = "undefined"), r === null && (r = "null"), r === !1 && (r = "false"), r.toString().toLowerCase().indexOf(o.trim()) !== -1;
}
function zl(r, o, s, m) {
  return o ? r.filter((O) => sv(m(O, s), o)).sort((O, p) => m(O, s).length - m(p, s).length) : r;
}
function uv(r) {
  return r.filter((o) => !o.$isLabel);
}
function us(r, o) {
  return (s) => s.reduce((m, O) => O[r] && O[r].length ? (m.push({
    $groupLabel: O[o],
    $isLabel: !0
  }), m.concat(O[r])) : m, []);
}
function lv(r, o, s, m, O) {
  return (p) => p.map((v) => {
    if (!v[s])
      return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."), [];
    const T = zl(v[s], r, o, O);
    return T.length ? {
      [m]: v[m],
      [s]: T
    } : [];
  });
}
const Wl = (...r) => (o) => r.reduce((s, m) => m(s), o);
var av = {
  data() {
    return {
      search: "",
      isOpen: !1,
      preferredOpenDirection: "below",
      optimizedHeight: this.maxHeight
    };
  },
  props: {
    /**
     * Decide whether to filter the results based on search query.
     * Useful for async filtering, where we search through more complex data.
     * @type {Boolean}
     */
    internalSearch: {
      type: Boolean,
      default: !0
    },
    /**
     * Array of available options: Objects, Strings or Integers.
     * If array of objects, visible label will default to option.label.
     * If `labal` prop is passed, label will equal option['label']
     * @type {Array}
     */
    options: {
      type: Array,
      required: !0
    },
    /**
     * Equivalent to the `multiple` attribute on a `<select>` input.
     * @default false
     * @type {Boolean}
     */
    multiple: {
      type: Boolean,
      default: !1
    },
    /**
     * Key to compare objects
     * @default 'id'
     * @type {String}
     */
    trackBy: {
      type: String
    },
    /**
     * Label to look for in option Object
     * @default 'label'
     * @type {String}
     */
    label: {
      type: String
    },
    /**
     * Enable/disable search in options
     * @default true
     * @type {Boolean}
     */
    searchable: {
      type: Boolean,
      default: !0
    },
    /**
     * Clear the search input after `)
     * @default true
     * @type {Boolean}
     */
    clearOnSelect: {
      type: Boolean,
      default: !0
    },
    /**
     * Hide already selected options
     * @default false
     * @type {Boolean}
     */
    hideSelected: {
      type: Boolean,
      default: !1
    },
    /**
     * Equivalent to the `placeholder` attribute on a `<select>` input.
     * @default 'Select option'
     * @type {String}
     */
    placeholder: {
      type: String,
      default: "Select option"
    },
    /**
     * Allow to remove all selected values
     * @default true
     * @type {Boolean}
     */
    allowEmpty: {
      type: Boolean,
      default: !0
    },
    /**
     * Reset this.internalValue, this.search after this.internalValue changes.
     * Useful if want to create a stateless dropdown.
     * @default false
     * @type {Boolean}
     */
    resetAfter: {
      type: Boolean,
      default: !1
    },
    /**
     * Enable/disable closing after selecting an option
     * @default true
     * @type {Boolean}
     */
    closeOnSelect: {
      type: Boolean,
      default: !0
    },
    /**
     * Function to interpolate the custom label
     * @default false
     * @type {Function}
     */
    customLabel: {
      type: Function,
      default(r, o) {
        return ss(r) ? "" : o ? r[o] : r;
      }
    },
    /**
     * Disable / Enable tagging
     * @default false
     * @type {Boolean}
     */
    taggable: {
      type: Boolean,
      default: !1
    },
    /**
     * String to show when highlighting a potential tag
     * @default 'Press enter to create a tag'
     * @type {String}
    */
    tagPlaceholder: {
      type: String,
      default: "Press enter to create a tag"
    },
    /**
     * By default new tags will appear above the search results.
     * Changing to 'bottom' will revert this behaviour
     * and will proritize the search results
     * @default 'top'
     * @type {String}
    */
    tagPosition: {
      type: String,
      default: "top"
    },
    /**
     * Number of allowed selected options. No limit if 0.
     * @default 0
     * @type {Number}
    */
    max: {
      type: [Number, Boolean],
      default: !1
    },
    /**
     * Will be passed with all events as second param.
     * Useful for identifying events origin.
     * @default null
     * @type {String|Integer}
    */
    id: {
      default: null
    },
    /**
     * Limits the options displayed in the dropdown
     * to the first X options.
     * @default 1000
     * @type {Integer}
    */
    optionsLimit: {
      type: Number,
      default: 1e3
    },
    /**
     * Name of the property containing
     * the group values
     * @default 1000
     * @type {String}
    */
    groupValues: {
      type: String
    },
    /**
     * Name of the property containing
     * the group label
     * @default 1000
     * @type {String}
    */
    groupLabel: {
      type: String
    },
    /**
     * Allow to select all group values
     * by selecting the group label
     * @default false
     * @type {Boolean}
     */
    groupSelect: {
      type: Boolean,
      default: !1
    },
    /**
     * Array of keyboard keys to block
     * when selecting
     * @default 1000
     * @type {String}
    */
    blockKeys: {
      type: Array,
      default() {
        return [];
      }
    },
    /**
     * Prevent from wiping up the search value
     * @default false
     * @type {Boolean}
    */
    preserveSearch: {
      type: Boolean,
      default: !1
    },
    /**
     * Select 1st options if value is empty
     * @default false
     * @type {Boolean}
    */
    preselectFirst: {
      type: Boolean,
      default: !1
    },
    /**
     * Prevent autofocus
     * @default false
     * @type {Boolean}
    */
    preventAutofocus: {
      type: Boolean,
      default: !1
    }
  },
  mounted() {
    !this.multiple && this.max && console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false."), this.preselectFirst && !this.internalValue.length && this.options.length && this.select(this.filteredOptions[0]);
  },
  computed: {
    internalValue() {
      return this.modelValue || this.modelValue === 0 ? Array.isArray(this.modelValue) ? this.modelValue : [this.modelValue] : [];
    },
    filteredOptions() {
      const r = this.search || "", o = r.toLowerCase().trim();
      let s = this.options.concat();
      return this.internalSearch ? s = this.groupValues ? this.filterAndFlat(s, o, this.label) : zl(s, o, this.label, this.customLabel) : s = this.groupValues ? us(this.groupValues, this.groupLabel)(s) : s, s = this.hideSelected ? s.filter(iv(this.isSelected)) : s, this.taggable && o.length && !this.isExistingOption(o) && (this.tagPosition === "bottom" ? s.push({ isTag: !0, label: r }) : s.unshift({ isTag: !0, label: r })), s.slice(0, this.optionsLimit);
    },
    valueKeys() {
      return this.trackBy ? this.internalValue.map((r) => r[this.trackBy]) : this.internalValue;
    },
    optionKeys() {
      return (this.groupValues ? this.flatAndStrip(this.options) : this.options).map((o) => this.customLabel(o, this.label).toString().toLowerCase());
    },
    currentOptionLabel() {
      return this.multiple ? this.searchable ? "" : this.placeholder : this.internalValue.length ? this.getOptionLabel(this.internalValue[0]) : this.searchable ? "" : this.placeholder;
    }
  },
  watch: {
    internalValue: {
      handler() {
        this.resetAfter && this.internalValue.length && (this.search = "", this.$emit("update:modelValue", this.multiple ? [] : null));
      },
      deep: !0
    },
    search() {
      this.$emit("search-change", this.search);
    }
  },
  emits: ["open", "search-change", "close", "select", "update:modelValue", "remove", "tag"],
  methods: {
    /**
     * Returns the internalValue in a way it can be emited to the parent
     * @returns {Object||Array||String||Integer}
     */
    getValue() {
      return this.multiple ? this.internalValue : this.internalValue.length === 0 ? null : this.internalValue[0];
    },
    /**
     * Filters and then flattens the options list
     * @param  {Array}
     * @return {Array} returns a filtered and flat options list
     */
    filterAndFlat(r, o, s) {
      return Wl(
        lv(o, s, this.groupValues, this.groupLabel, this.customLabel),
        us(this.groupValues, this.groupLabel)
      )(r);
    },
    /**
     * Flattens and then strips the group labels from the options list
     * @param  {Array}
     * @return {Array} returns a flat options list without group labels
     */
    flatAndStrip(r) {
      return Wl(
        us(this.groupValues, this.groupLabel),
        uv
      )(r);
    },
    /**
     * Updates the search value
     * @param  {String}
     */
    updateSearch(r) {
      this.search = r;
    },
    /**
     * Finds out if the given query is already present
     * in the available options
     * @param  {String}
     * @return {Boolean} returns true if element is available
     */
    isExistingOption(r) {
      return this.options ? this.optionKeys.indexOf(r) > -1 : !1;
    },
    /**
     * Finds out if the given element is already present
     * in the result value
     * @param  {Object||String||Integer} option passed element to check
     * @returns {Boolean} returns true if element is selected
     */
    isSelected(r) {
      const o = this.trackBy ? r[this.trackBy] : r;
      return this.valueKeys.indexOf(o) > -1;
    },
    /**
     * Finds out if the given option is disabled
     * @param  {Object||String||Integer} option passed element to check
     * @returns {Boolean} returns true if element is disabled
     */
    isOptionDisabled(r) {
      return !!r.$isDisabled;
    },
    /**
     * Returns empty string when options is null/undefined
     * Returns tag query if option is tag.
     * Returns the customLabel() results and casts it to string.
     *
     * @param  {Object||String||Integer} Passed option
     * @returns {Object||String}
     */
    getOptionLabel(r) {
      if (ss(r))
        return "";
      if (r.isTag)
        return r.label;
      if (r.$isLabel)
        return r.$groupLabel;
      const o = this.customLabel(r, this.label);
      return ss(o) ? "" : o;
    },
    /**
     * Add the given option to the list of selected options
     * or sets the option as the selected option.
     * If option is already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} option to select/deselect
     * @param  {Boolean} block removing
     */
    select(r, o) {
      if (r.$isLabel && this.groupSelect) {
        this.selectGroup(r);
        return;
      }
      if (!(this.blockKeys.indexOf(o) !== -1 || this.disabled || r.$isDisabled || r.$isLabel) && !(this.max && this.multiple && this.internalValue.length === this.max) && !(o === "Tab" && !this.pointerDirty)) {
        if (r.isTag)
          this.$emit("tag", r.label, this.id), this.search = "", this.closeOnSelect && !this.multiple && this.deactivate();
        else {
          if (this.isSelected(r)) {
            o !== "Tab" && this.removeElement(r);
            return;
          }
          this.multiple ? this.$emit("update:modelValue", this.internalValue.concat([r])) : this.$emit("update:modelValue", r), this.$emit("select", r, this.id), this.clearOnSelect && (this.search = "");
        }
        this.closeOnSelect && this.deactivate();
      }
    },
    /**
     * Add the given group options to the list of selected options
     * If all group optiona are already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} group to select/deselect
     */
    selectGroup(r) {
      const o = this.options.find((s) => s[this.groupLabel] === r.$groupLabel);
      if (o) {
        if (this.wholeGroupSelected(o)) {
          this.$emit("remove", o[this.groupValues], this.id);
          const s = this.internalValue.filter(
            (m) => o[this.groupValues].indexOf(m) === -1
          );
          this.$emit("update:modelValue", s);
        } else {
          let s = o[this.groupValues].filter(
            (m) => !(this.isOptionDisabled(m) || this.isSelected(m))
          );
          this.max && s.splice(this.max - this.internalValue.length), this.$emit("select", s, this.id), this.$emit(
            "update:modelValue",
            this.internalValue.concat(s)
          );
        }
        this.closeOnSelect && this.deactivate();
      }
    },
    /**
     * Helper to identify if all values in a group are selected
     *
     * @param {Object} group to validated selected values against
     */
    wholeGroupSelected(r) {
      return r[this.groupValues].every(
        (o) => this.isSelected(o) || this.isOptionDisabled(o)
      );
    },
    /**
     * Helper to identify if all values in a group are disabled
     *
     * @param {Object} group to check for disabled values
     */
    wholeGroupDisabled(r) {
      return r[this.groupValues].every(this.isOptionDisabled);
    },
    /**
     * Removes the given option from the selected options.
     * Additionally checks this.allowEmpty prop if option can be removed when
     * it is the last selected option.
     *
     * @param  {type} option description
     * @return {type}        description
     */
    removeElement(r, o = !0) {
      if (this.disabled || r.$isDisabled)
        return;
      if (!this.allowEmpty && this.internalValue.length <= 1) {
        this.deactivate();
        return;
      }
      const s = typeof r == "object" ? this.valueKeys.indexOf(r[this.trackBy]) : this.valueKeys.indexOf(r);
      if (this.multiple) {
        const m = this.internalValue.slice(0, s).concat(this.internalValue.slice(s + 1));
        this.$emit("update:modelValue", m);
      } else
        this.$emit("update:modelValue", null);
      this.$emit("remove", r, this.id), this.closeOnSelect && o && this.deactivate();
    },
    /**
     * Calls this.removeElement() with the last element
     * from this.internalValue (selected element Array)
     *
     * @fires this#removeElement
     */
    removeLastElement() {
      this.blockKeys.indexOf("Delete") === -1 && this.search.length === 0 && Array.isArray(this.internalValue) && this.internalValue.length && this.removeElement(this.internalValue[this.internalValue.length - 1], !1);
    },
    /**
     * Opens the multiselect’s dropdown.
     * Sets this.isOpen to TRUE
     */
    activate() {
      this.isOpen || this.disabled || (this.adjustPosition(), this.groupValues && this.pointer === 0 && this.filteredOptions.length && (this.pointer = 1), this.isOpen = !0, this.searchable ? (this.preserveSearch || (this.search = ""), this.preventAutofocus || this.$nextTick(() => this.$refs.search && this.$refs.search.focus())) : this.preventAutofocus || typeof this.$el < "u" && this.$el.focus(), this.$emit("open", this.id));
    },
    /**
     * Closes the multiselect’s dropdown.
     * Sets this.isOpen to FALSE
     */
    deactivate() {
      this.isOpen && (this.isOpen = !1, this.searchable ? this.$refs.search !== null && typeof this.$refs.search < "u" && this.$refs.search.blur() : typeof this.$el < "u" && this.$el.blur(), this.preserveSearch || (this.search = ""), this.$emit("close", this.getValue(), this.id));
    },
    /**
     * Call this.activate() or this.deactivate()
     * depending on this.isOpen value.
     *
     * @fires this#activate || this#deactivate
     * @property {Boolean} isOpen indicates if dropdown is open
     */
    toggle() {
      this.isOpen ? this.deactivate() : this.activate();
    },
    /**
     * Updates the hasEnoughSpace variable used for
     * detecting where to expand the dropdown
     */
    adjustPosition() {
      if (typeof window > "u")
        return;
      const r = this.$el.getBoundingClientRect().top, o = window.innerHeight - this.$el.getBoundingClientRect().bottom;
      o > this.maxHeight || o > r || this.openDirection === "below" || this.openDirection === "bottom" ? (this.preferredOpenDirection = "below", this.optimizedHeight = Math.min(o - 40, this.maxHeight)) : (this.preferredOpenDirection = "above", this.optimizedHeight = Math.min(r - 40, this.maxHeight));
    }
  }
}, ov = {
  data() {
    return {
      pointer: 0,
      pointerDirty: !1
    };
  },
  props: {
    /**
     * Enable/disable highlighting of the pointed value.
     * @type {Boolean}
     * @default true
     */
    showPointer: {
      type: Boolean,
      default: !0
    },
    optionHeight: {
      type: Number,
      default: 40
    }
  },
  computed: {
    pointerPosition() {
      return this.pointer * this.optionHeight;
    },
    visibleElements() {
      return this.optimizedHeight / this.optionHeight;
    }
  },
  watch: {
    filteredOptions() {
      this.pointerAdjust();
    },
    isOpen() {
      this.pointerDirty = !1;
    },
    pointer() {
      this.$refs.search && this.$refs.search.setAttribute("aria-activedescendant", this.id + "-" + this.pointer.toString());
    }
  },
  methods: {
    optionHighlight(r, o) {
      return {
        "multiselect__option--highlight": r === this.pointer && this.showPointer,
        "multiselect__option--selected": this.isSelected(o)
      };
    },
    groupHighlight(r, o) {
      if (!this.groupSelect)
        return [
          "multiselect__option--disabled",
          { "multiselect__option--group": o.$isLabel }
        ];
      const s = this.options.find((m) => m[this.groupLabel] === o.$groupLabel);
      return s && !this.wholeGroupDisabled(s) ? [
        "multiselect__option--group",
        { "multiselect__option--highlight": r === this.pointer && this.showPointer },
        { "multiselect__option--group-selected": this.wholeGroupSelected(s) }
      ] : "multiselect__option--disabled";
    },
    addPointerElement({ key: r } = "Enter") {
      this.filteredOptions.length > 0 && this.select(this.filteredOptions[this.pointer], r), this.pointerReset();
    },
    pointerForward() {
      this.pointer < this.filteredOptions.length - 1 && (this.pointer++, this.$refs.list.scrollTop <= this.pointerPosition - (this.visibleElements - 1) * this.optionHeight && (this.$refs.list.scrollTop = this.pointerPosition - (this.visibleElements - 1) * this.optionHeight), this.filteredOptions[this.pointer] && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect && this.pointerForward()), this.pointerDirty = !0;
    },
    pointerBackward() {
      this.pointer > 0 ? (this.pointer--, this.$refs.list.scrollTop >= this.pointerPosition && (this.$refs.list.scrollTop = this.pointerPosition), this.filteredOptions[this.pointer] && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect && this.pointerBackward()) : this.filteredOptions[this.pointer] && this.filteredOptions[0].$isLabel && !this.groupSelect && this.pointerForward(), this.pointerDirty = !0;
    },
    pointerReset() {
      this.closeOnSelect && (this.pointer = 0, this.$refs.list && (this.$refs.list.scrollTop = 0));
    },
    pointerAdjust() {
      this.pointer >= this.filteredOptions.length - 1 && (this.pointer = this.filteredOptions.length ? this.filteredOptions.length - 1 : 0), this.filteredOptions.length > 0 && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect && this.pointerForward();
    },
    pointerSet(r) {
      this.pointer = r, this.pointerDirty = !0;
    }
  }
}, fv = {
  name: "vue-multiselect",
  mixins: [av, ov],
  compatConfig: {
    MODE: 3,
    ATTR_ENUMERATED_COERCION: !1
  },
  props: {
    /**
       * name attribute to match optional label element
       * @default ''
       * @type {String}
       */
    name: {
      type: String,
      default: ""
    },
    /**
       * Presets the selected options value.
       * @type {Object||Array||String||Integer}
       */
    modelValue: {
      type: null,
      default() {
        return [];
      }
    },
    /**
       * String to show when pointing to an option
       * @default 'Press enter to select'
       * @type {String}
       */
    selectLabel: {
      type: String,
      default: "Press enter to select"
    },
    /**
       * String to show when pointing to an option
       * @default 'Press enter to select'
       * @type {String}
       */
    selectGroupLabel: {
      type: String,
      default: "Press enter to select group"
    },
    /**
       * String to show next to selected option
       * @default 'Selected'
       * @type {String}
       */
    selectedLabel: {
      type: String,
      default: "Selected"
    },
    /**
       * String to show when pointing to an already selected option
       * @default 'Press enter to remove'
       * @type {String}
       */
    deselectLabel: {
      type: String,
      default: "Press enter to remove"
    },
    /**
       * String to show when pointing to an already selected option
       * @default 'Press enter to remove'
       * @type {String}
       */
    deselectGroupLabel: {
      type: String,
      default: "Press enter to deselect group"
    },
    /**
       * Decide whether to show pointer labels
       * @default true
       * @type {Boolean}
       */
    showLabels: {
      type: Boolean,
      default: !0
    },
    /**
       * Limit the display of selected options. The rest will be hidden within the limitText string.
       * @default 99999
       * @type {Integer}
       */
    limit: {
      type: Number,
      default: 99999
    },
    /**
       * Sets maxHeight style value of the dropdown
       * @default 300
       * @type {Integer}
       */
    maxHeight: {
      type: Number,
      default: 300
    },
    /**
       * Function that process the message shown when selected
       * elements pass the defined limit.
       * @default 'and * more'
       * @param {Int} count Number of elements more than limit
       * @type {Function}
       */
    limitText: {
      type: Function,
      default: (r) => `and ${r} more`
    },
    /**
       * Set true to trigger the loading spinner.
       * @default False
       * @type {Boolean}
       */
    loading: {
      type: Boolean,
      default: !1
    },
    /**
       * Disables the multiselect if true.
       * @default false
       * @type {Boolean}
       */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
       * Fixed opening direction
       * @default ''
       * @type {String}
       */
    openDirection: {
      type: String,
      default: ""
    },
    /**
       * Shows slot with message about empty options
       * @default true
       * @type {Boolean}
       */
    showNoOptions: {
      type: Boolean,
      default: !0
    },
    showNoResults: {
      type: Boolean,
      default: !0
    },
    tabindex: {
      type: Number,
      default: 0
    }
  },
  computed: {
    hasOptionGroup() {
      return this.groupValues && this.groupLabel && this.groupSelect;
    },
    isSingleLabelVisible() {
      return (this.singleValue || this.singleValue === 0) && (!this.isOpen || !this.searchable) && !this.visibleValues.length;
    },
    isPlaceholderVisible() {
      return !this.internalValue.length && (!this.searchable || !this.isOpen);
    },
    visibleValues() {
      return this.multiple ? this.internalValue.slice(0, this.limit) : [];
    },
    singleValue() {
      return this.internalValue[0];
    },
    deselectLabelText() {
      return this.showLabels ? this.deselectLabel : "";
    },
    deselectGroupLabelText() {
      return this.showLabels ? this.deselectGroupLabel : "";
    },
    selectLabelText() {
      return this.showLabels ? this.selectLabel : "";
    },
    selectGroupLabelText() {
      return this.showLabels ? this.selectGroupLabel : "";
    },
    selectedLabelText() {
      return this.showLabels ? this.selectedLabel : "";
    },
    inputStyle() {
      return this.searchable || this.multiple && this.modelValue && this.modelValue.length ? this.isOpen ? { width: "100%" } : { width: "0", position: "absolute", padding: "0" } : "";
    },
    contentStyle() {
      return this.options.length ? { display: "inline-block" } : { display: "block" };
    },
    isAbove() {
      return this.openDirection === "above" || this.openDirection === "top" ? !0 : this.openDirection === "below" || this.openDirection === "bottom" ? !1 : this.preferredOpenDirection === "above";
    },
    showSearchInput() {
      return this.searchable && (this.hasSingleSelectedSlot && (this.visibleSingleValue || this.visibleSingleValue === 0) ? this.isOpen : !0);
    }
  }
};
const hv = {
  ref: "tags",
  class: "multiselect__tags"
}, cv = { class: "multiselect__tags-wrap" }, dv = { class: "multiselect__spinner" }, pv = { key: 0 }, gv = { class: "multiselect__option" }, mv = { class: "multiselect__option" }, vv = /* @__PURE__ */ Ot("No elements found. Consider changing the search query."), _v = { class: "multiselect__option" }, bv = /* @__PURE__ */ Ot("List is empty.");
function yv(r, o, s, m, O, p) {
  return E(), Se("div", {
    tabindex: r.searchable ? -1 : s.tabindex,
    class: [{ "multiselect--active": r.isOpen, "multiselect--disabled": s.disabled, "multiselect--above": p.isAbove, "multiselect--has-options-group": p.hasOptionGroup }, "multiselect"],
    onFocus: o[14] || (o[14] = (v) => r.activate()),
    onBlur: o[15] || (o[15] = (v) => r.searchable ? !1 : r.deactivate()),
    onKeydown: [
      o[16] || (o[16] = ot(he((v) => r.pointerForward(), ["self", "prevent"]), ["down"])),
      o[17] || (o[17] = ot(he((v) => r.pointerBackward(), ["self", "prevent"]), ["up"]))
    ],
    onKeypress: o[18] || (o[18] = ot(he((v) => r.addPointerElement(v), ["stop", "self"]), ["enter", "tab"])),
    onKeyup: o[19] || (o[19] = ot((v) => r.deactivate(), ["esc"])),
    role: "combobox",
    "aria-owns": "listbox-" + r.id
  }, [
    xe(r.$slots, "caret", { toggle: r.toggle }, () => [
      pe(
        "div",
        {
          onMousedown: o[1] || (o[1] = he((v) => r.toggle(), ["prevent", "stop"])),
          class: "multiselect__select"
        },
        null,
        32
        /* HYDRATE_EVENTS */
      )
    ]),
    xe(r.$slots, "clear", { search: r.search }),
    pe(
      "div",
      hv,
      [
        xe(r.$slots, "selection", {
          search: r.search,
          remove: r.removeElement,
          values: p.visibleValues,
          isOpen: r.isOpen
        }, () => [
          le(pe(
            "div",
            cv,
            [
              (E(!0), Se(
                Oe,
                null,
                Je(p.visibleValues, (v, T) => xe(r.$slots, "tag", {
                  option: v,
                  search: r.search,
                  remove: r.removeElement
                }, () => [
                  (E(), Se("span", {
                    class: "multiselect__tag",
                    key: T
                  }, [
                    pe("span", {
                      textContent: ge(r.getOptionLabel(v))
                    }, null, 8, ["textContent"]),
                    pe("i", {
                      tabindex: "1",
                      onKeypress: ot(he((q) => r.removeElement(v), ["prevent"]), ["enter"]),
                      onMousedown: he((q) => r.removeElement(v), ["prevent"]),
                      class: "multiselect__tag-icon"
                    }, null, 40, ["onKeypress", "onMousedown"])
                  ]))
                ])),
                256
                /* UNKEYED_FRAGMENT */
              ))
            ],
            512
            /* NEED_PATCH */
          ), [
            [Wn, p.visibleValues.length > 0]
          ]),
          r.internalValue && r.internalValue.length > s.limit ? xe(r.$slots, "limit", { key: 0 }, () => [
            pe("strong", {
              class: "multiselect__strong",
              textContent: ge(s.limitText(r.internalValue.length - s.limit))
            }, null, 8, ["textContent"])
          ]) : ee("v-if", !0)
        ]),
        pe($l, { name: "multiselect__loading" }, {
          default: Br(() => [
            xe(r.$slots, "loading", {}, () => [
              le(pe(
                "div",
                dv,
                null,
                512
                /* NEED_PATCH */
              ), [
                [Wn, s.loading]
              ])
            ])
          ]),
          _: 3
          /* FORWARDED */
        }),
        r.searchable ? (E(), Se("input", {
          key: 0,
          ref: "search",
          name: s.name,
          id: r.id,
          type: "text",
          autocomplete: "off",
          spellcheck: !1,
          placeholder: r.placeholder,
          style: p.inputStyle,
          value: r.search,
          disabled: s.disabled,
          tabindex: s.tabindex,
          onInput: o[2] || (o[2] = (v) => r.updateSearch(v.target.value)),
          onFocus: o[3] || (o[3] = he((v) => r.activate(), ["prevent"])),
          onBlur: o[4] || (o[4] = he((v) => r.deactivate(), ["prevent"])),
          onKeyup: o[5] || (o[5] = ot((v) => r.deactivate(), ["esc"])),
          onKeydown: [
            o[6] || (o[6] = ot(he((v) => r.pointerForward(), ["prevent"]), ["down"])),
            o[7] || (o[7] = ot(he((v) => r.pointerBackward(), ["prevent"]), ["up"])),
            o[9] || (o[9] = ot(he((v) => r.removeLastElement(), ["stop"]), ["delete"]))
          ],
          onKeypress: o[8] || (o[8] = ot(he((v) => r.addPointerElement(v), ["prevent", "stop", "self"]), ["enter"])),
          class: "multiselect__input",
          "aria-controls": "listbox-" + r.id
        }, null, 44, ["name", "id", "placeholder", "value", "disabled", "tabindex", "aria-controls"])) : ee("v-if", !0),
        p.isSingleLabelVisible ? (E(), Se(
          "span",
          {
            key: 1,
            class: "multiselect__single",
            onMousedown: o[10] || (o[10] = he((...v) => r.toggle && r.toggle(...v), ["prevent"]))
          },
          [
            xe(r.$slots, "singleLabel", { option: p.singleValue }, () => [
              Ot(
                ge(r.currentOptionLabel),
                1
                /* TEXT */
              )
            ])
          ],
          32
          /* HYDRATE_EVENTS */
        )) : ee("v-if", !0),
        p.isPlaceholderVisible ? (E(), Se(
          "span",
          {
            key: 2,
            class: "multiselect__placeholder",
            onMousedown: o[11] || (o[11] = he((...v) => r.toggle && r.toggle(...v), ["prevent"]))
          },
          [
            xe(r.$slots, "placeholder", {}, () => [
              Ot(
                ge(r.placeholder),
                1
                /* TEXT */
              )
            ])
          ],
          32
          /* HYDRATE_EVENTS */
        )) : ee("v-if", !0)
      ],
      512
      /* NEED_PATCH */
    ),
    pe($l, { name: "multiselect" }, {
      default: Br(() => [
        le(pe(
          "div",
          {
            class: "multiselect__content-wrapper",
            onFocus: o[12] || (o[12] = (...v) => r.activate && r.activate(...v)),
            tabindex: "-1",
            onMousedown: o[13] || (o[13] = he(() => {
            }, ["prevent"])),
            style: { maxHeight: r.optimizedHeight + "px" },
            ref: "list"
          },
          [
            pe("ul", {
              class: "multiselect__content",
              style: p.contentStyle,
              role: "listbox",
              id: "listbox-" + r.id
            }, [
              xe(r.$slots, "beforeList"),
              r.multiple && r.max === r.internalValue.length ? (E(), Se("li", pv, [
                pe("span", gv, [
                  xe(r.$slots, "maxElements", {}, () => [
                    Ot(
                      "Maximum of " + ge(r.max) + " options selected. First remove a selected option to select another.",
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ])) : ee("v-if", !0),
              !r.max || r.internalValue.length < r.max ? (E(!0), Se(
                Oe,
                { key: 1 },
                Je(r.filteredOptions, (v, T) => (E(), Se("li", {
                  class: "multiselect__element",
                  key: T,
                  id: r.id + "-" + T,
                  role: v && (v.$isLabel || v.$isDisabled) ? null : "option"
                }, [
                  v && (v.$isLabel || v.$isDisabled) ? ee("v-if", !0) : (E(), Se("span", {
                    key: 0,
                    class: [r.optionHighlight(T, v), "multiselect__option"],
                    onClick: he((q) => r.select(v), ["stop"]),
                    onMouseenter: he((q) => r.pointerSet(T), ["self"]),
                    "data-select": v && v.isTag ? r.tagPlaceholder : p.selectLabelText,
                    "data-selected": p.selectedLabelText,
                    "data-deselect": p.deselectLabelText
                  }, [
                    xe(r.$slots, "option", {
                      option: v,
                      search: r.search,
                      index: T
                    }, () => [
                      pe(
                        "span",
                        null,
                        ge(r.getOptionLabel(v)),
                        1
                        /* TEXT */
                      )
                    ])
                  ], 42, ["onClick", "onMouseenter", "data-select", "data-selected", "data-deselect"])),
                  v && (v.$isLabel || v.$isDisabled) ? (E(), Se("span", {
                    key: 1,
                    "data-select": r.groupSelect && p.selectGroupLabelText,
                    "data-deselect": r.groupSelect && p.deselectGroupLabelText,
                    class: [r.groupHighlight(T, v), "multiselect__option"],
                    onMouseenter: he((q) => r.groupSelect && r.pointerSet(T), ["self"]),
                    onMousedown: he((q) => r.selectGroup(v), ["prevent"])
                  }, [
                    xe(r.$slots, "option", {
                      option: v,
                      search: r.search,
                      index: T
                    }, () => [
                      pe(
                        "span",
                        null,
                        ge(r.getOptionLabel(v)),
                        1
                        /* TEXT */
                      )
                    ])
                  ], 42, ["data-select", "data-deselect", "onMouseenter", "onMousedown"])) : ee("v-if", !0)
                ], 8, ["id", "role"]))),
                128
                /* KEYED_FRAGMENT */
              )) : ee("v-if", !0),
              le(pe(
                "li",
                null,
                [
                  pe("span", mv, [
                    xe(r.$slots, "noResult", { search: r.search }, () => [
                      vv
                    ])
                  ])
                ],
                512
                /* NEED_PATCH */
              ), [
                [Wn, s.showNoResults && r.filteredOptions.length === 0 && r.search && !s.loading]
              ]),
              le(pe(
                "li",
                null,
                [
                  pe("span", _v, [
                    xe(r.$slots, "noOptions", {}, () => [
                      bv
                    ])
                  ])
                ],
                512
                /* NEED_PATCH */
              ), [
                [Wn, s.showNoOptions && (r.options.length === 0 || p.hasOptionGroup === !0 && r.filteredOptions.length === 0) && !r.search && !s.loading]
              ]),
              xe(r.$slots, "afterList")
            ], 12, ["id"])
          ],
          36
          /* STYLE, HYDRATE_EVENTS */
        ), [
          [Wn, r.isOpen]
        ])
      ]),
      _: 3
      /* FORWARDED */
    })
  ], 42, ["tabindex", "aria-owns"]);
}
fv.render = yv;
let kl = /* @__PURE__ */ Object.assign({ "../fields/core/fieldCheckbox.vue": nm, "../fields/core/fieldChecklist.vue": pm, "../fields/core/fieldInput.vue": wm, "../fields/core/fieldLabel.vue": Cm, "../fields/core/fieldRadios.vue": Fm, "../fields/core/fieldSelect.vue": Hm, "../fields/core/fieldSubmit.vue": Ym, "../fields/core/fieldTextArea.vue": Xm, "../fields/core/fieldUpload.vue": rv }), Kl = Object.keys(kl).reduce((r, o) => {
  let s = o.replace(/.*?([^/]+).vue$/, "$1");
  return r[s] = kl[o].default, r;
}, {});
const wv = {
  emits: ["validated", "model-updated"],
  name: "form-group",
  components: Kl,
  mixins: [ql],
  props: {
    vfg: {
      type: Object,
      required: !0
    },
    model: Object,
    options: {
      type: Object
    },
    field: {
      type: Object,
      required: !0
    },
    errors: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    // Should field type have a label?
    fieldTypeHasLabel(r) {
      if (b.isNil(r.label))
        return !1;
      let o = "";
      switch (r.type === "input" ? o = r.inputType : o = r.type, o) {
        case "button":
        case "submit":
        case "reset":
          return !1;
        default:
          return !0;
      }
    },
    getFieldID(r) {
      const o = b.get(this.options, "fieldIdPrefix", "");
      return os(r, o);
    },
    // Get type of field 'field-xxx'. It'll be the name of HTML element
    getFieldType(r) {
      return "field-" + r.type;
    },
    // Get type of button, default to 'button'
    getButtonType(r) {
      return b.get(r, "type", "button");
    },
    // Child field executed validation
    onFieldValidated(r, o, s) {
      this.$emit("validated", r, o, s);
    },
    buttonVisibility(r) {
      return r.buttons && r.buttons.length > 0;
    },
    buttonClickHandler(r, o, s) {
      return r.onclick.call(this, this.model, o, s, this);
    },
    // Get current hint.
    fieldHint(r) {
      return b.isFunction(r.hint) ? r.hint.call(this, this.model, r, this) : r.hint;
    },
    fieldErrors(r) {
      return this.errors.filter((o) => Yg(o.field) === r).map((o) => o.error);
    },
    onModelUpdated(r, o) {
      this.$emit("model-updated", r, o);
    },
    validate(r) {
      return this.$refs.child.validate(r);
    },
    clearValidationErrors() {
      if (this.$refs.child)
        return this.$refs.child.clearValidationErrors();
    }
  }
}, Sv = ["for"], Ov = ["innerHTML"], Tv = {
  key: 0,
  class: "help"
}, Av = /* @__PURE__ */ Ee("i", { class: "icon" }, null, -1), Cv = ["innerHTML"], Lv = { class: "field-wrap" }, Iv = {
  key: 0,
  class: "buttons"
}, xv = ["onClick", "textContent", "type"], Ev = ["innerHTML"], Mv = {
  key: 2,
  class: "errors help-block"
}, Fv = ["innerHTML"];
function Dv(r, o, s, m, O, p) {
  return E(), N("div", {
    class: Me(["form-group", r.getFieldRowClasses(s.field)])
  }, [
    p.fieldTypeHasLabel(s.field) ? (E(), N("label", {
      key: 0,
      for: p.getFieldID(s.field),
      class: Me(s.field.labelClasses)
    }, [
      Ee("span", {
        innerHTML: s.field.label
      }, null, 8, Ov),
      s.field.help ? (E(), N("span", Tv, [
        Av,
        Ee("div", {
          class: "helpText",
          innerHTML: s.field.help
        }, null, 8, Cv)
      ])) : ee("", !0)
    ], 10, Sv)) : ee("", !0),
    Ee("div", Lv, [
      (E(), Se(ls(p.getFieldType(s.field)), {
        ref: "child",
        vfg: s.vfg,
        disabled: r.fieldDisabled(s.field),
        model: s.model,
        schema: s.field,
        formOptions: s.options,
        onModelUpdated: p.onModelUpdated,
        onValidated: p.onFieldValidated
      }, null, 40, ["vfg", "disabled", "model", "schema", "formOptions", "onModelUpdated", "onValidated"])),
      p.buttonVisibility(s.field) ? (E(), N("div", Iv, [
        (E(!0), N(Oe, null, Je(s.field.buttons, (v, T) => (E(), N("button", {
          onClick: (q) => p.buttonClickHandler(v, s.field, q),
          class: Me(v.classes),
          key: T,
          textContent: ge(v.label),
          type: p.getButtonType(v)
        }, null, 10, xv))), 128))
      ])) : ee("", !0)
    ]),
    s.field.hint ? (E(), N("div", {
      key: 1,
      class: "hint",
      innerHTML: p.fieldHint(s.field)
    }, null, 8, Ev)) : ee("", !0),
    p.fieldErrors(s.field).length > 0 ? (E(), N("div", Mv, [
      (E(!0), N(Oe, null, Je(p.fieldErrors(s.field), (v, T) => (E(), N("span", {
        key: T,
        innerHTML: v
      }, null, 8, Fv))), 128))
    ])) : ee("", !0)
  ], 2);
}
const Rv = /* @__PURE__ */ rt(wv, [["render", Dv]]), Nv = {
  key: 0,
  class: "vue-form-generator"
}, Bv = { key: 0 };
function Pv(r, o, s, m, O, p) {
  const v = zg("form-group");
  return s.schema != null ? (E(), N("div", Nv, [
    s.schema.fields ? (E(), Se(ls(s.tag), { key: 0 }, {
      default: Br(() => [
        (E(!0), N(Oe, null, Je(p.fields, (T) => (E(), N(Oe, null, [
          p.fieldVisible(T) ? (E(), Se(v, {
            key: 0,
            ref_for: !0,
            ref: "items",
            vfg: O.vfg,
            field: T,
            errors: O.displayedErrors,
            model: s.model,
            options: s.options,
            onValidated: p.onFieldValidated,
            onModelUpdated: p.onModelUpdated
          }, null, 8, ["vfg", "field", "errors", "model", "options", "onValidated", "onModelUpdated"])) : ee("", !0)
        ], 64))), 256))
      ]),
      _: 1
    })) : ee("", !0),
    (E(!0), N(Oe, null, Je(p.groups, (T) => (E(), Se(ls(s.tag), {
      class: Me(r.getFieldRowClasses(T))
    }, {
      default: Br(() => [
        T.legend ? (E(), N("legend", Bv, ge(T.legend), 1)) : ee("", !0),
        (E(!0), N(Oe, null, Je(T.fields, (q) => (E(), N(Oe, null, [
          p.fieldVisible(q) ? (E(), Se(v, {
            key: 0,
            ref_for: !0,
            ref: "items",
            vfg: O.vfg,
            field: q,
            errors: O.displayedErrors,
            model: s.model,
            options: s.options,
            onValidated: p.onFieldValidated,
            onModelUpdated: p.onModelUpdated
          }, null, 8, ["vfg", "field", "errors", "model", "options", "onValidated", "onModelUpdated"])) : ee("", !0)
        ], 64))), 256))
      ]),
      _: 2
    }, 1032, ["class"]))), 256))
  ])) : ee("", !0);
}
const Vv = {
  emits: ["validated", "model-updated"],
  name: "formGenerator",
  components: { formGroup: Rv },
  mixins: [ql],
  props: {
    schema: Object,
    model: Object,
    options: {
      type: Object,
      default() {
        return {
          validateAfterLoad: !1,
          validateAfterChanged: !1,
          fieldIdPrefix: "",
          validateAsync: !1,
          validationErrorClass: "error",
          validationSuccessClass: ""
        };
      }
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    isNewModel: {
      type: Boolean,
      default: !1
    },
    tag: {
      type: String,
      default: "fieldset",
      validator: function(r) {
        return r.length > 0;
      }
    }
  },
  data() {
    return {
      vfg: this,
      displayedErrors: [],
      // These are the errors currently being displayed
      errors: []
      // These are the errors of the form
    };
  },
  computed: {
    fields() {
      let r = [];
      return this.schema && this.schema.fields && b.forEach(this.schema.fields, (o) => {
        (!this.multiple || o.multi === !0) && r.push(o);
      }), r;
    },
    groups() {
      let r = [];
      return this.schema && this.schema.groups && b.forEach(this.schema.groups.slice(0), (o) => {
        r.push(o);
      }), r;
    }
  },
  watch: {
    // new model loaded
    model: function(r, o) {
      o !== r && r != null && this.$nextTick(() => {
        this.validate(), (!this.options.validateAfterLoad || this.isNewModel) && this.clearValidationErrors();
      });
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.model && (this.validate(), (!this.options.validateAfterLoad || this.isNewModel) && this.clearValidationErrors());
    });
  },
  methods: {
    // Get visible prop of field
    fieldVisible(r) {
      return b.isFunction(r.visible) ? r.visible.call(this, this.model, r, this) : b.isNil(r.visible) ? !0 : r.visible;
    },
    // Child field executed validation
    onFieldValidated(r, o, s) {
      this.displayedErrors = this.displayedErrors.filter((O) => O.field !== s.schema), this.errors = this.errors.filter((O) => O.field !== s.schema), !r && o && o.length > 0 && b.forEach(o, (O) => {
        this.displayedErrors.push({
          field: s.schema,
          error: O
        }), this.errors.push({
          field: s.schema,
          error: O
        });
      });
      let m = this.errors.length === 0;
      this.$emit("validated", m, this.errors, this);
    },
    onModelUpdated(r, o) {
      this.$emit("model-updated", r, o);
    },
    // Validating the model properties
    validate(r = null) {
      r === null && (r = b.get(this.options, "validateAsync", !1)), this.clearValidationErrors();
      let o = [], s = [];
      b.forEach(this.$refs.items, (O) => {
        b.isFunction(O.validate) && (o.push(O.$refs.child), s.push(O.validate(!0)));
      });
      let m = (O) => {
        let p = [];
        b.forEach(O, (T, q) => {
          b.isArray(T) && T.length > 0 && b.forEach(T, (ae) => {
            p.push({
              field: o[q].schema,
              error: ae
            });
          });
        }), this.displayedErrors = p, this.errors = p.slice(0);
        let v = this.errors.length === 0;
        return this.$emit("validated", v, this.errors, this), r ? p : v;
      };
      return r ? Promise.all(s).then(m) : m(s);
    },
    // Clear validation errors
    clearValidationErrors() {
      this.displayedErrors.splice(0), b.forEach(this.$refs.items, (r) => {
        r.clearValidationErrors();
      });
    }
  }
}, Zl = /* @__PURE__ */ rt(Vv, [["render", Pv]]), $v = (r, o) => {
  if (r.component("VueFormGenerator", Zl), o && o.validators)
    for (let s in o.validators)
      ({}).hasOwnProperty.call(o.validators, s) && (Kt[s] = o.validators[s]);
}, Uv = { createDefaultObject: Zg, getMultipleFields: Gl, mergeMultiObjectFields: Jg, slugifyFormID: os, slugify: as }, Wv = {
  component: Zl,
  schema: Uv,
  validators: Kt,
  abstractField: ft,
  fieldComponents: Kl,
  install: $v
};
export {
  ft as abstractField,
  Zl as component,
  Wv as default,
  tm as fieldCheckbox,
  dm as fieldChecklist,
  Kl as fieldComponents,
  ym as fieldInput,
  Am as fieldLabel,
  Mm as fieldRadios,
  Um as fieldSelect,
  Gm as fieldSubmit,
  Jm as fieldTextArea,
  nv as fieldUpload,
  $v as install,
  Uv as schema,
  Kt as validators
};
