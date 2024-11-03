(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function Fl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Xs = { exports: {} },
  Dl = {},
  Gs = { exports: {} },
  I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tr = Symbol.for("react.element"),
  Sf = Symbol.for("react.portal"),
  kf = Symbol.for("react.fragment"),
  Ef = Symbol.for("react.strict_mode"),
  xf = Symbol.for("react.profiler"),
  Cf = Symbol.for("react.provider"),
  _f = Symbol.for("react.context"),
  Pf = Symbol.for("react.forward_ref"),
  Nf = Symbol.for("react.suspense"),
  Of = Symbol.for("react.memo"),
  Tf = Symbol.for("react.lazy"),
  Iu = Symbol.iterator;
function Lf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Iu && e[Iu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Zs = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Js = Object.assign,
  qs = {};
function Un(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = qs),
    (this.updater = n || Zs);
}
Un.prototype.isReactComponent = {};
Un.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Un.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function bs() {}
bs.prototype = Un.prototype;
function Mi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = qs),
    (this.updater = n || Zs);
}
var Ii = (Mi.prototype = new bs());
Ii.constructor = Mi;
Js(Ii, Un.prototype);
Ii.isPureReactComponent = !0;
var Fu = Array.isArray,
  ea = Object.prototype.hasOwnProperty,
  Fi = { current: null },
  ta = { key: !0, ref: !0, __self: !0, __source: !0 };
function na(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      ea.call(t, r) && !ta.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: Tr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Fi.current,
  };
}
function Rf(e, t) {
  return {
    $$typeof: Tr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Di(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Tr;
}
function zf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Du = /\/+/g;
function co(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? zf("" + e.key)
    : t.toString(36);
}
function el(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Tr:
          case Sf:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + co(i, 0) : r),
      Fu(l)
        ? ((n = ""),
          e != null && (n = e.replace(Du, "$&/") + "/"),
          el(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (Di(l) &&
            (l = Rf(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Du, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Fu(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + co(o, u);
      i += el(o, t, n, s, l);
    }
  else if (((s = Lf(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + co(o, u++)), (i += el(o, t, n, s, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function Fr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    el(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function jf(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Re = { current: null },
  tl = { transition: null },
  Mf = {
    ReactCurrentDispatcher: Re,
    ReactCurrentBatchConfig: tl,
    ReactCurrentOwner: Fi,
  };
function ra() {
  throw Error("act(...) is not supported in production builds of React.");
}
I.Children = {
  map: Fr,
  forEach: function (e, t, n) {
    Fr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Fr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Fr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Di(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
I.Component = Un;
I.Fragment = kf;
I.Profiler = xf;
I.PureComponent = Mi;
I.StrictMode = Ef;
I.Suspense = Nf;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mf;
I.act = ra;
I.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Js({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Fi.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      ea.call(t, s) &&
        !ta.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: Tr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
I.createContext = function (e) {
  return (
    (e = {
      $$typeof: _f,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Cf, _context: e }),
    (e.Consumer = e)
  );
};
I.createElement = na;
I.createFactory = function (e) {
  var t = na.bind(null, e);
  return (t.type = e), t;
};
I.createRef = function () {
  return { current: null };
};
I.forwardRef = function (e) {
  return { $$typeof: Pf, render: e };
};
I.isValidElement = Di;
I.lazy = function (e) {
  return { $$typeof: Tf, _payload: { _status: -1, _result: e }, _init: jf };
};
I.memo = function (e, t) {
  return { $$typeof: Of, type: e, compare: t === void 0 ? null : t };
};
I.startTransition = function (e) {
  var t = tl.transition;
  tl.transition = {};
  try {
    e();
  } finally {
    tl.transition = t;
  }
};
I.unstable_act = ra;
I.useCallback = function (e, t) {
  return Re.current.useCallback(e, t);
};
I.useContext = function (e) {
  return Re.current.useContext(e);
};
I.useDebugValue = function () {};
I.useDeferredValue = function (e) {
  return Re.current.useDeferredValue(e);
};
I.useEffect = function (e, t) {
  return Re.current.useEffect(e, t);
};
I.useId = function () {
  return Re.current.useId();
};
I.useImperativeHandle = function (e, t, n) {
  return Re.current.useImperativeHandle(e, t, n);
};
I.useInsertionEffect = function (e, t) {
  return Re.current.useInsertionEffect(e, t);
};
I.useLayoutEffect = function (e, t) {
  return Re.current.useLayoutEffect(e, t);
};
I.useMemo = function (e, t) {
  return Re.current.useMemo(e, t);
};
I.useReducer = function (e, t, n) {
  return Re.current.useReducer(e, t, n);
};
I.useRef = function (e) {
  return Re.current.useRef(e);
};
I.useState = function (e) {
  return Re.current.useState(e);
};
I.useSyncExternalStore = function (e, t, n) {
  return Re.current.useSyncExternalStore(e, t, n);
};
I.useTransition = function () {
  return Re.current.useTransition();
};
I.version = "18.3.1";
Gs.exports = I;
var Q = Gs.exports;
const $u = Fl(Q);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var If = Q,
  Ff = Symbol.for("react.element"),
  Df = Symbol.for("react.fragment"),
  $f = Object.prototype.hasOwnProperty,
  Af = If.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Uf = { key: !0, ref: !0, __self: !0, __source: !0 };
function la(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) $f.call(t, r) && !Uf.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Ff,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Af.current,
  };
}
Dl.Fragment = Df;
Dl.jsx = la;
Dl.jsxs = la;
Xs.exports = Dl;
var M = Xs.exports,
  oa = { exports: {} },
  Qe = {},
  ia = { exports: {} },
  ua = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(O, h) {
    var v = O.length;
    O.push(h);
    e: for (; 0 < v; ) {
      var S = (v - 1) >>> 1,
        C = O[S];
      if (0 < l(C, h)) (O[S] = h), (O[v] = C), (v = S);
      else break e;
    }
  }
  function n(O) {
    return O.length === 0 ? null : O[0];
  }
  function r(O) {
    if (O.length === 0) return null;
    var h = O[0],
      v = O.pop();
    if (v !== h) {
      O[0] = v;
      e: for (var S = 0, C = O.length, N = C >>> 1; S < N; ) {
        var F = 2 * (S + 1) - 1,
          $ = O[F],
          X = F + 1,
          ge = O[X];
        if (0 > l($, v))
          X < C && 0 > l(ge, $)
            ? ((O[S] = ge), (O[X] = v), (S = X))
            : ((O[S] = $), (O[F] = v), (S = F));
        else if (X < C && 0 > l(ge, v)) (O[S] = ge), (O[X] = v), (S = X);
        else break e;
      }
    }
    return h;
  }
  function l(O, h) {
    var v = O.sortIndex - h.sortIndex;
    return v !== 0 ? v : O.id - h.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    c = [],
    g = 1,
    p = null,
    d = 3,
    y = !1,
    E = !1,
    _ = !1,
    D = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(O) {
    for (var h = n(c); h !== null; ) {
      if (h.callback === null) r(c);
      else if (h.startTime <= O)
        r(c), (h.sortIndex = h.expirationTime), t(s, h);
      else break;
      h = n(c);
    }
  }
  function w(O) {
    if (((_ = !1), m(O), !E))
      if (n(s) !== null) (E = !0), rt(x);
      else {
        var h = n(c);
        h !== null && dn(w, h.startTime - O);
      }
  }
  function x(O, h) {
    (E = !1), _ && ((_ = !1), f(R), (R = -1)), (y = !0);
    var v = d;
    try {
      for (
        m(h), p = n(s);
        p !== null && (!(p.expirationTime > h) || (O && !te()));

      ) {
        var S = p.callback;
        if (typeof S == "function") {
          (p.callback = null), (d = p.priorityLevel);
          var C = S(p.expirationTime <= h);
          (h = e.unstable_now()),
            typeof C == "function" ? (p.callback = C) : p === n(s) && r(s),
            m(h);
        } else r(s);
        p = n(s);
      }
      if (p !== null) var N = !0;
      else {
        var F = n(c);
        F !== null && dn(w, F.startTime - h), (N = !1);
      }
      return N;
    } finally {
      (p = null), (d = v), (y = !1);
    }
  }
  var L = !1,
    P = null,
    R = -1,
    V = 5,
    j = -1;
  function te() {
    return !(e.unstable_now() - j < V);
  }
  function Lt() {
    if (P !== null) {
      var O = e.unstable_now();
      j = O;
      var h = !0;
      try {
        h = P(!0, O);
      } finally {
        h ? nt() : ((L = !1), (P = null));
      }
    } else L = !1;
  }
  var nt;
  if (typeof a == "function")
    nt = function () {
      a(Lt);
    };
  else if (typeof MessageChannel < "u") {
    var Vn = new MessageChannel(),
      Mr = Vn.port2;
    (Vn.port1.onmessage = Lt),
      (nt = function () {
        Mr.postMessage(null);
      });
  } else
    nt = function () {
      D(Lt, 0);
    };
  function rt(O) {
    (P = O), L || ((L = !0), nt());
  }
  function dn(O, h) {
    R = D(function () {
      O(e.unstable_now());
    }, h);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (O) {
      O.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      E || y || ((E = !0), rt(x));
    }),
    (e.unstable_forceFrameRate = function (O) {
      0 > O || 125 < O
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (V = 0 < O ? Math.floor(1e3 / O) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (O) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var h = 3;
          break;
        default:
          h = d;
      }
      var v = d;
      d = h;
      try {
        return O();
      } finally {
        d = v;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (O, h) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var v = d;
      d = O;
      try {
        return h();
      } finally {
        d = v;
      }
    }),
    (e.unstable_scheduleCallback = function (O, h, v) {
      var S = e.unstable_now();
      switch (
        (typeof v == "object" && v !== null
          ? ((v = v.delay), (v = typeof v == "number" && 0 < v ? S + v : S))
          : (v = S),
        O)
      ) {
        case 1:
          var C = -1;
          break;
        case 2:
          C = 250;
          break;
        case 5:
          C = 1073741823;
          break;
        case 4:
          C = 1e4;
          break;
        default:
          C = 5e3;
      }
      return (
        (C = v + C),
        (O = {
          id: g++,
          callback: h,
          priorityLevel: O,
          startTime: v,
          expirationTime: C,
          sortIndex: -1,
        }),
        v > S
          ? ((O.sortIndex = v),
            t(c, O),
            n(s) === null &&
              O === n(c) &&
              (_ ? (f(R), (R = -1)) : (_ = !0), dn(w, v - S)))
          : ((O.sortIndex = C), t(s, O), E || y || ((E = !0), rt(x))),
        O
      );
    }),
    (e.unstable_shouldYield = te),
    (e.unstable_wrapCallback = function (O) {
      var h = d;
      return function () {
        var v = d;
        d = h;
        try {
          return O.apply(this, arguments);
        } finally {
          d = v;
        }
      };
    });
})(ua);
ia.exports = ua;
var Bf = ia.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hf = Q,
  We = Bf;
function k(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var sa = new Set(),
  dr = {};
function cn(e, t) {
  jn(e, t), jn(e + "Capture", t);
}
function jn(e, t) {
  for (dr[e] = t, e = 0; e < t.length; e++) sa.add(t[e]);
}
var _t = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Do = Object.prototype.hasOwnProperty,
  Vf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Au = {},
  Uu = {};
function Wf(e) {
  return Do.call(Uu, e)
    ? !0
    : Do.call(Au, e)
    ? !1
    : Vf.test(e)
    ? (Uu[e] = !0)
    : ((Au[e] = !0), !1);
}
function Qf(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Kf(e, t, n, r) {
  if (t === null || typeof t > "u" || Qf(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ze(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var Ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ee[e] = new ze(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ee[t] = new ze(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ee[e] = new ze(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ee[e] = new ze(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ee[e] = new ze(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ee[e] = new ze(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ee[e] = new ze(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ee[e] = new ze(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ee[e] = new ze(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var $i = /[\-:]([a-z])/g;
function Ai(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace($i, Ai);
    Ee[t] = new ze(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace($i, Ai);
    Ee[t] = new ze(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace($i, Ai);
  Ee[t] = new ze(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ee[e] = new ze(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ee.xlinkHref = new ze(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ee[e] = new ze(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ui(e, t, n, r) {
  var l = Ee.hasOwnProperty(t) ? Ee[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Kf(t, n, l, r) && (n = null),
    r || l === null
      ? Wf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Tt = Hf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Dr = Symbol.for("react.element"),
  hn = Symbol.for("react.portal"),
  vn = Symbol.for("react.fragment"),
  Bi = Symbol.for("react.strict_mode"),
  $o = Symbol.for("react.profiler"),
  aa = Symbol.for("react.provider"),
  ca = Symbol.for("react.context"),
  Hi = Symbol.for("react.forward_ref"),
  Ao = Symbol.for("react.suspense"),
  Uo = Symbol.for("react.suspense_list"),
  Vi = Symbol.for("react.memo"),
  zt = Symbol.for("react.lazy"),
  fa = Symbol.for("react.offscreen"),
  Bu = Symbol.iterator;
function Wn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Bu && e[Bu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ee = Object.assign,
  fo;
function qn(e) {
  if (fo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      fo = (t && t[1]) || "";
    }
  return (
    `
` +
    fo +
    e
  );
}
var po = !1;
function mo(e, t) {
  if (!e || po) return "";
  po = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (po = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? qn(e) : "";
}
function Yf(e) {
  switch (e.tag) {
    case 5:
      return qn(e.type);
    case 16:
      return qn("Lazy");
    case 13:
      return qn("Suspense");
    case 19:
      return qn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = mo(e.type, !1)), e;
    case 11:
      return (e = mo(e.type.render, !1)), e;
    case 1:
      return (e = mo(e.type, !0)), e;
    default:
      return "";
  }
}
function Bo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case vn:
      return "Fragment";
    case hn:
      return "Portal";
    case $o:
      return "Profiler";
    case Bi:
      return "StrictMode";
    case Ao:
      return "Suspense";
    case Uo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ca:
        return (e.displayName || "Context") + ".Consumer";
      case aa:
        return (e._context.displayName || "Context") + ".Provider";
      case Hi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Vi:
        return (
          (t = e.displayName || null), t !== null ? t : Bo(e.type) || "Memo"
        );
      case zt:
        (t = e._payload), (e = e._init);
        try {
          return Bo(e(t));
        } catch {}
    }
  return null;
}
function Xf(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Bo(t);
    case 8:
      return t === Bi ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Kt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function da(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Gf(e) {
  var t = da(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function $r(e) {
  e._valueTracker || (e._valueTracker = Gf(e));
}
function pa(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = da(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function dl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ho(e, t) {
  var n = t.checked;
  return ee({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Hu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Kt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function ma(e, t) {
  (t = t.checked), t != null && Ui(e, "checked", t, !1);
}
function Vo(e, t) {
  ma(e, t);
  var n = Kt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Wo(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Wo(e, t.type, Kt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Vu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Wo(e, t, n) {
  (t !== "number" || dl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var bn = Array.isArray;
function Nn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Kt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Qo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return ee({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Wu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (bn(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Kt(n) };
}
function ha(e, t) {
  var n = Kt(t.value),
    r = Kt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Qu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function va(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ko(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? va(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ar,
  ga = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ar = Ar || document.createElement("div"),
          Ar.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ar.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function pr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var nr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Zf = ["Webkit", "ms", "Moz", "O"];
Object.keys(nr).forEach(function (e) {
  Zf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (nr[t] = nr[e]);
  });
});
function ya(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (nr.hasOwnProperty(e) && nr[e])
    ? ("" + t).trim()
    : t + "px";
}
function wa(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = ya(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Jf = ee(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Yo(e, t) {
  if (t) {
    if (Jf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function Xo(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Go = null;
function Wi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Zo = null,
  On = null,
  Tn = null;
function Ku(e) {
  if ((e = zr(e))) {
    if (typeof Zo != "function") throw Error(k(280));
    var t = e.stateNode;
    t && ((t = Hl(t)), Zo(e.stateNode, e.type, t));
  }
}
function Sa(e) {
  On ? (Tn ? Tn.push(e) : (Tn = [e])) : (On = e);
}
function ka() {
  if (On) {
    var e = On,
      t = Tn;
    if (((Tn = On = null), Ku(e), t)) for (e = 0; e < t.length; e++) Ku(t[e]);
  }
}
function Ea(e, t) {
  return e(t);
}
function xa() {}
var ho = !1;
function Ca(e, t, n) {
  if (ho) return e(t, n);
  ho = !0;
  try {
    return Ea(e, t, n);
  } finally {
    (ho = !1), (On !== null || Tn !== null) && (xa(), ka());
  }
}
function mr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Hl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(k(231, t, typeof n));
  return n;
}
var Jo = !1;
if (_t)
  try {
    var Qn = {};
    Object.defineProperty(Qn, "passive", {
      get: function () {
        Jo = !0;
      },
    }),
      window.addEventListener("test", Qn, Qn),
      window.removeEventListener("test", Qn, Qn);
  } catch {
    Jo = !1;
  }
function qf(e, t, n, r, l, o, i, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (g) {
    this.onError(g);
  }
}
var rr = !1,
  pl = null,
  ml = !1,
  qo = null,
  bf = {
    onError: function (e) {
      (rr = !0), (pl = e);
    },
  };
function ed(e, t, n, r, l, o, i, u, s) {
  (rr = !1), (pl = null), qf.apply(bf, arguments);
}
function td(e, t, n, r, l, o, i, u, s) {
  if ((ed.apply(this, arguments), rr)) {
    if (rr) {
      var c = pl;
      (rr = !1), (pl = null);
    } else throw Error(k(198));
    ml || ((ml = !0), (qo = c));
  }
}
function fn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function _a(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Yu(e) {
  if (fn(e) !== e) throw Error(k(188));
}
function nd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = fn(e)), t === null)) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Yu(l), e;
        if (o === r) return Yu(l), t;
        o = o.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function Pa(e) {
  return (e = nd(e)), e !== null ? Na(e) : null;
}
function Na(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Na(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Oa = We.unstable_scheduleCallback,
  Xu = We.unstable_cancelCallback,
  rd = We.unstable_shouldYield,
  ld = We.unstable_requestPaint,
  oe = We.unstable_now,
  od = We.unstable_getCurrentPriorityLevel,
  Qi = We.unstable_ImmediatePriority,
  Ta = We.unstable_UserBlockingPriority,
  hl = We.unstable_NormalPriority,
  id = We.unstable_LowPriority,
  La = We.unstable_IdlePriority,
  $l = null,
  gt = null;
function ud(e) {
  if (gt && typeof gt.onCommitFiberRoot == "function")
    try {
      gt.onCommitFiberRoot($l, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ft = Math.clz32 ? Math.clz32 : cd,
  sd = Math.log,
  ad = Math.LN2;
function cd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((sd(e) / ad) | 0)) | 0;
}
var Ur = 64,
  Br = 4194304;
function er(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function vl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = er(u)) : ((o &= i), o !== 0 && (r = er(o)));
  } else (i = n & ~l), i !== 0 ? (r = er(i)) : o !== 0 && (r = er(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - ft(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function fd(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function dd(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - ft(o),
      u = 1 << i,
      s = l[i];
    s === -1
      ? (!(u & n) || u & r) && (l[i] = fd(u, t))
      : s <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function bo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ra() {
  var e = Ur;
  return (Ur <<= 1), !(Ur & 4194240) && (Ur = 64), e;
}
function vo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Lr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ft(t)),
    (e[t] = n);
}
function pd(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - ft(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function Ki(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ft(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var B = 0;
function za(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ja,
  Yi,
  Ma,
  Ia,
  Fa,
  ei = !1,
  Hr = [],
  $t = null,
  At = null,
  Ut = null,
  hr = new Map(),
  vr = new Map(),
  Mt = [],
  md =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Gu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      $t = null;
      break;
    case "dragenter":
    case "dragleave":
      At = null;
      break;
    case "mouseover":
    case "mouseout":
      Ut = null;
      break;
    case "pointerover":
    case "pointerout":
      hr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      vr.delete(t.pointerId);
  }
}
function Kn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = zr(t)), t !== null && Yi(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function hd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ($t = Kn($t, e, t, n, r, l)), !0;
    case "dragenter":
      return (At = Kn(At, e, t, n, r, l)), !0;
    case "mouseover":
      return (Ut = Kn(Ut, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return hr.set(o, Kn(hr.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), vr.set(o, Kn(vr.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Da(e) {
  var t = bt(e.target);
  if (t !== null) {
    var n = fn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = _a(n)), t !== null)) {
          (e.blockedOn = t),
            Fa(e.priority, function () {
              Ma(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function nl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ti(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Go = r), n.target.dispatchEvent(r), (Go = null);
    } else return (t = zr(n)), t !== null && Yi(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Zu(e, t, n) {
  nl(e) && n.delete(t);
}
function vd() {
  (ei = !1),
    $t !== null && nl($t) && ($t = null),
    At !== null && nl(At) && (At = null),
    Ut !== null && nl(Ut) && (Ut = null),
    hr.forEach(Zu),
    vr.forEach(Zu);
}
function Yn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ei ||
      ((ei = !0),
      We.unstable_scheduleCallback(We.unstable_NormalPriority, vd)));
}
function gr(e) {
  function t(l) {
    return Yn(l, e);
  }
  if (0 < Hr.length) {
    Yn(Hr[0], e);
    for (var n = 1; n < Hr.length; n++) {
      var r = Hr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    $t !== null && Yn($t, e),
      At !== null && Yn(At, e),
      Ut !== null && Yn(Ut, e),
      hr.forEach(t),
      vr.forEach(t),
      n = 0;
    n < Mt.length;
    n++
  )
    (r = Mt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Mt.length && ((n = Mt[0]), n.blockedOn === null); )
    Da(n), n.blockedOn === null && Mt.shift();
}
var Ln = Tt.ReactCurrentBatchConfig,
  gl = !0;
function gd(e, t, n, r) {
  var l = B,
    o = Ln.transition;
  Ln.transition = null;
  try {
    (B = 1), Xi(e, t, n, r);
  } finally {
    (B = l), (Ln.transition = o);
  }
}
function yd(e, t, n, r) {
  var l = B,
    o = Ln.transition;
  Ln.transition = null;
  try {
    (B = 4), Xi(e, t, n, r);
  } finally {
    (B = l), (Ln.transition = o);
  }
}
function Xi(e, t, n, r) {
  if (gl) {
    var l = ti(e, t, n, r);
    if (l === null) Po(e, t, r, yl, n), Gu(e, r);
    else if (hd(l, e, t, n, r)) r.stopPropagation();
    else if ((Gu(e, r), t & 4 && -1 < md.indexOf(e))) {
      for (; l !== null; ) {
        var o = zr(l);
        if (
          (o !== null && ja(o),
          (o = ti(e, t, n, r)),
          o === null && Po(e, t, r, yl, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Po(e, t, r, null, n);
  }
}
var yl = null;
function ti(e, t, n, r) {
  if (((yl = null), (e = Wi(r)), (e = bt(e)), e !== null))
    if (((t = fn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = _a(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (yl = e), null;
}
function $a(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (od()) {
        case Qi:
          return 1;
        case Ta:
          return 4;
        case hl:
        case id:
          return 16;
        case La:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ft = null,
  Gi = null,
  rl = null;
function Aa() {
  if (rl) return rl;
  var e,
    t = Gi,
    n = t.length,
    r,
    l = "value" in Ft ? Ft.value : Ft.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (rl = l.slice(e, 1 < r ? 1 - r : void 0));
}
function ll(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Vr() {
  return !0;
}
function Ju() {
  return !1;
}
function Ke(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Vr
        : Ju),
      (this.isPropagationStopped = Ju),
      this
    );
  }
  return (
    ee(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Vr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Vr));
      },
      persist: function () {},
      isPersistent: Vr,
    }),
    t
  );
}
var Bn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Zi = Ke(Bn),
  Rr = ee({}, Bn, { view: 0, detail: 0 }),
  wd = Ke(Rr),
  go,
  yo,
  Xn,
  Al = ee({}, Rr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ji,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Xn &&
            (Xn && e.type === "mousemove"
              ? ((go = e.screenX - Xn.screenX), (yo = e.screenY - Xn.screenY))
              : (yo = go = 0),
            (Xn = e)),
          go);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : yo;
    },
  }),
  qu = Ke(Al),
  Sd = ee({}, Al, { dataTransfer: 0 }),
  kd = Ke(Sd),
  Ed = ee({}, Rr, { relatedTarget: 0 }),
  wo = Ke(Ed),
  xd = ee({}, Bn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Cd = Ke(xd),
  _d = ee({}, Bn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Pd = Ke(_d),
  Nd = ee({}, Bn, { data: 0 }),
  bu = Ke(Nd),
  Od = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Td = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Ld = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Rd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ld[e]) ? !!t[e] : !1;
}
function Ji() {
  return Rd;
}
var zd = ee({}, Rr, {
    key: function (e) {
      if (e.key) {
        var t = Od[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ll(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Td[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ji,
    charCode: function (e) {
      return e.type === "keypress" ? ll(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ll(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  jd = Ke(zd),
  Md = ee({}, Al, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  es = Ke(Md),
  Id = ee({}, Rr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ji,
  }),
  Fd = Ke(Id),
  Dd = ee({}, Bn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  $d = Ke(Dd),
  Ad = ee({}, Al, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Ud = Ke(Ad),
  Bd = [9, 13, 27, 32],
  qi = _t && "CompositionEvent" in window,
  lr = null;
_t && "documentMode" in document && (lr = document.documentMode);
var Hd = _t && "TextEvent" in window && !lr,
  Ua = _t && (!qi || (lr && 8 < lr && 11 >= lr)),
  ts = " ",
  ns = !1;
function Ba(e, t) {
  switch (e) {
    case "keyup":
      return Bd.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ha(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var gn = !1;
function Vd(e, t) {
  switch (e) {
    case "compositionend":
      return Ha(t);
    case "keypress":
      return t.which !== 32 ? null : ((ns = !0), ts);
    case "textInput":
      return (e = t.data), e === ts && ns ? null : e;
    default:
      return null;
  }
}
function Wd(e, t) {
  if (gn)
    return e === "compositionend" || (!qi && Ba(e, t))
      ? ((e = Aa()), (rl = Gi = Ft = null), (gn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ua && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Qd = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function rs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Qd[e.type] : t === "textarea";
}
function Va(e, t, n, r) {
  Sa(r),
    (t = wl(t, "onChange")),
    0 < t.length &&
      ((n = new Zi("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var or = null,
  yr = null;
function Kd(e) {
  ec(e, 0);
}
function Ul(e) {
  var t = Sn(e);
  if (pa(t)) return e;
}
function Yd(e, t) {
  if (e === "change") return t;
}
var Wa = !1;
if (_t) {
  var So;
  if (_t) {
    var ko = "oninput" in document;
    if (!ko) {
      var ls = document.createElement("div");
      ls.setAttribute("oninput", "return;"),
        (ko = typeof ls.oninput == "function");
    }
    So = ko;
  } else So = !1;
  Wa = So && (!document.documentMode || 9 < document.documentMode);
}
function os() {
  or && (or.detachEvent("onpropertychange", Qa), (yr = or = null));
}
function Qa(e) {
  if (e.propertyName === "value" && Ul(yr)) {
    var t = [];
    Va(t, yr, e, Wi(e)), Ca(Kd, t);
  }
}
function Xd(e, t, n) {
  e === "focusin"
    ? (os(), (or = t), (yr = n), or.attachEvent("onpropertychange", Qa))
    : e === "focusout" && os();
}
function Gd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ul(yr);
}
function Zd(e, t) {
  if (e === "click") return Ul(t);
}
function Jd(e, t) {
  if (e === "input" || e === "change") return Ul(t);
}
function qd(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var pt = typeof Object.is == "function" ? Object.is : qd;
function wr(e, t) {
  if (pt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Do.call(t, l) || !pt(e[l], t[l])) return !1;
  }
  return !0;
}
function is(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function us(e, t) {
  var n = is(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = is(n);
  }
}
function Ka(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Ka(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Ya() {
  for (var e = window, t = dl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = dl(e.document);
  }
  return t;
}
function bi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function bd(e) {
  var t = Ya(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ka(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && bi(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = us(n, o));
        var i = us(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var ep = _t && "documentMode" in document && 11 >= document.documentMode,
  yn = null,
  ni = null,
  ir = null,
  ri = !1;
function ss(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ri ||
    yn == null ||
    yn !== dl(r) ||
    ((r = yn),
    "selectionStart" in r && bi(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ir && wr(ir, r)) ||
      ((ir = r),
      (r = wl(ni, "onSelect")),
      0 < r.length &&
        ((t = new Zi("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = yn))));
}
function Wr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var wn = {
    animationend: Wr("Animation", "AnimationEnd"),
    animationiteration: Wr("Animation", "AnimationIteration"),
    animationstart: Wr("Animation", "AnimationStart"),
    transitionend: Wr("Transition", "TransitionEnd"),
  },
  Eo = {},
  Xa = {};
_t &&
  ((Xa = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete wn.animationend.animation,
    delete wn.animationiteration.animation,
    delete wn.animationstart.animation),
  "TransitionEvent" in window || delete wn.transitionend.transition);
function Bl(e) {
  if (Eo[e]) return Eo[e];
  if (!wn[e]) return e;
  var t = wn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Xa) return (Eo[e] = t[n]);
  return e;
}
var Ga = Bl("animationend"),
  Za = Bl("animationiteration"),
  Ja = Bl("animationstart"),
  qa = Bl("transitionend"),
  ba = new Map(),
  as =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Xt(e, t) {
  ba.set(e, t), cn(t, [e]);
}
for (var xo = 0; xo < as.length; xo++) {
  var Co = as[xo],
    tp = Co.toLowerCase(),
    np = Co[0].toUpperCase() + Co.slice(1);
  Xt(tp, "on" + np);
}
Xt(Ga, "onAnimationEnd");
Xt(Za, "onAnimationIteration");
Xt(Ja, "onAnimationStart");
Xt("dblclick", "onDoubleClick");
Xt("focusin", "onFocus");
Xt("focusout", "onBlur");
Xt(qa, "onTransitionEnd");
jn("onMouseEnter", ["mouseout", "mouseover"]);
jn("onMouseLeave", ["mouseout", "mouseover"]);
jn("onPointerEnter", ["pointerout", "pointerover"]);
jn("onPointerLeave", ["pointerout", "pointerover"]);
cn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
cn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
cn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
cn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
cn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
cn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var tr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  rp = new Set("cancel close invalid load scroll toggle".split(" ").concat(tr));
function cs(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), td(r, t, void 0, e), (e.currentTarget = null);
}
function ec(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          cs(l, u, c), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          cs(l, u, c), (o = s);
        }
    }
  }
  if (ml) throw ((e = qo), (ml = !1), (qo = null), e);
}
function K(e, t) {
  var n = t[si];
  n === void 0 && (n = t[si] = new Set());
  var r = e + "__bubble";
  n.has(r) || (tc(t, e, 2, !1), n.add(r));
}
function _o(e, t, n) {
  var r = 0;
  t && (r |= 4), tc(n, e, r, t);
}
var Qr = "_reactListening" + Math.random().toString(36).slice(2);
function Sr(e) {
  if (!e[Qr]) {
    (e[Qr] = !0),
      sa.forEach(function (n) {
        n !== "selectionchange" && (rp.has(n) || _o(n, !1, e), _o(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Qr] || ((t[Qr] = !0), _o("selectionchange", !1, t));
  }
}
function tc(e, t, n, r) {
  switch ($a(t)) {
    case 1:
      var l = gd;
      break;
    case 4:
      l = yd;
      break;
    default:
      l = Xi;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Jo ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Po(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = bt(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Ca(function () {
    var c = o,
      g = Wi(n),
      p = [];
    e: {
      var d = ba.get(e);
      if (d !== void 0) {
        var y = Zi,
          E = e;
        switch (e) {
          case "keypress":
            if (ll(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = jd;
            break;
          case "focusin":
            (E = "focus"), (y = wo);
            break;
          case "focusout":
            (E = "blur"), (y = wo);
            break;
          case "beforeblur":
          case "afterblur":
            y = wo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = qu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = kd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Fd;
            break;
          case Ga:
          case Za:
          case Ja:
            y = Cd;
            break;
          case qa:
            y = $d;
            break;
          case "scroll":
            y = wd;
            break;
          case "wheel":
            y = Ud;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Pd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = es;
        }
        var _ = (t & 4) !== 0,
          D = !_ && e === "scroll",
          f = _ ? (d !== null ? d + "Capture" : null) : d;
        _ = [];
        for (var a = c, m; a !== null; ) {
          m = a;
          var w = m.stateNode;
          if (
            (m.tag === 5 &&
              w !== null &&
              ((m = w),
              f !== null && ((w = mr(a, f)), w != null && _.push(kr(a, w, m)))),
            D)
          )
            break;
          a = a.return;
        }
        0 < _.length &&
          ((d = new y(d, E, null, n, g)), p.push({ event: d, listeners: _ }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          d &&
            n !== Go &&
            (E = n.relatedTarget || n.fromElement) &&
            (bt(E) || E[Pt]))
        )
          break e;
        if (
          (y || d) &&
          ((d =
            g.window === g
              ? g
              : (d = g.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          y
            ? ((E = n.relatedTarget || n.toElement),
              (y = c),
              (E = E ? bt(E) : null),
              E !== null &&
                ((D = fn(E)), E !== D || (E.tag !== 5 && E.tag !== 6)) &&
                (E = null))
            : ((y = null), (E = c)),
          y !== E)
        ) {
          if (
            ((_ = qu),
            (w = "onMouseLeave"),
            (f = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((_ = es),
              (w = "onPointerLeave"),
              (f = "onPointerEnter"),
              (a = "pointer")),
            (D = y == null ? d : Sn(y)),
            (m = E == null ? d : Sn(E)),
            (d = new _(w, a + "leave", y, n, g)),
            (d.target = D),
            (d.relatedTarget = m),
            (w = null),
            bt(g) === c &&
              ((_ = new _(f, a + "enter", E, n, g)),
              (_.target = m),
              (_.relatedTarget = D),
              (w = _)),
            (D = w),
            y && E)
          )
            t: {
              for (_ = y, f = E, a = 0, m = _; m; m = mn(m)) a++;
              for (m = 0, w = f; w; w = mn(w)) m++;
              for (; 0 < a - m; ) (_ = mn(_)), a--;
              for (; 0 < m - a; ) (f = mn(f)), m--;
              for (; a--; ) {
                if (_ === f || (f !== null && _ === f.alternate)) break t;
                (_ = mn(_)), (f = mn(f));
              }
              _ = null;
            }
          else _ = null;
          y !== null && fs(p, d, y, _, !1),
            E !== null && D !== null && fs(p, D, E, _, !0);
        }
      }
      e: {
        if (
          ((d = c ? Sn(c) : window),
          (y = d.nodeName && d.nodeName.toLowerCase()),
          y === "select" || (y === "input" && d.type === "file"))
        )
          var x = Yd;
        else if (rs(d))
          if (Wa) x = Jd;
          else {
            x = Gd;
            var L = Xd;
          }
        else
          (y = d.nodeName) &&
            y.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (x = Zd);
        if (x && (x = x(e, c))) {
          Va(p, x, n, g);
          break e;
        }
        L && L(e, d, c),
          e === "focusout" &&
            (L = d._wrapperState) &&
            L.controlled &&
            d.type === "number" &&
            Wo(d, "number", d.value);
      }
      switch (((L = c ? Sn(c) : window), e)) {
        case "focusin":
          (rs(L) || L.contentEditable === "true") &&
            ((yn = L), (ni = c), (ir = null));
          break;
        case "focusout":
          ir = ni = yn = null;
          break;
        case "mousedown":
          ri = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ri = !1), ss(p, n, g);
          break;
        case "selectionchange":
          if (ep) break;
        case "keydown":
        case "keyup":
          ss(p, n, g);
      }
      var P;
      if (qi)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        gn
          ? Ba(e, n) && (R = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R &&
        (Ua &&
          n.locale !== "ko" &&
          (gn || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && gn && (P = Aa())
            : ((Ft = g),
              (Gi = "value" in Ft ? Ft.value : Ft.textContent),
              (gn = !0))),
        (L = wl(c, R)),
        0 < L.length &&
          ((R = new bu(R, e, null, n, g)),
          p.push({ event: R, listeners: L }),
          P ? (R.data = P) : ((P = Ha(n)), P !== null && (R.data = P)))),
        (P = Hd ? Vd(e, n) : Wd(e, n)) &&
          ((c = wl(c, "onBeforeInput")),
          0 < c.length &&
            ((g = new bu("onBeforeInput", "beforeinput", null, n, g)),
            p.push({ event: g, listeners: c }),
            (g.data = P)));
    }
    ec(p, t);
  });
}
function kr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function wl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = mr(e, n)),
      o != null && r.unshift(kr(e, o, l)),
      (o = mr(e, t)),
      o != null && r.push(kr(e, o, l))),
      (e = e.return);
  }
  return r;
}
function mn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function fs(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      c !== null &&
      ((u = c),
      l
        ? ((s = mr(n, o)), s != null && i.unshift(kr(n, s, u)))
        : l || ((s = mr(n, o)), s != null && i.push(kr(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var lp = /\r\n?/g,
  op = /\u0000|\uFFFD/g;
function ds(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      lp,
      `
`
    )
    .replace(op, "");
}
function Kr(e, t, n) {
  if (((t = ds(t)), ds(e) !== t && n)) throw Error(k(425));
}
function Sl() {}
var li = null,
  oi = null;
function ii(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ui = typeof setTimeout == "function" ? setTimeout : void 0,
  ip = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ps = typeof Promise == "function" ? Promise : void 0,
  up =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ps < "u"
      ? function (e) {
          return ps.resolve(null).then(e).catch(sp);
        }
      : ui;
function sp(e) {
  setTimeout(function () {
    throw e;
  });
}
function No(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), gr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  gr(t);
}
function Bt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ms(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Hn = Math.random().toString(36).slice(2),
  vt = "__reactFiber$" + Hn,
  Er = "__reactProps$" + Hn,
  Pt = "__reactContainer$" + Hn,
  si = "__reactEvents$" + Hn,
  ap = "__reactListeners$" + Hn,
  cp = "__reactHandles$" + Hn;
function bt(e) {
  var t = e[vt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Pt] || n[vt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ms(e); e !== null; ) {
          if ((n = e[vt])) return n;
          e = ms(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function zr(e) {
  return (
    (e = e[vt] || e[Pt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Sn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function Hl(e) {
  return e[Er] || null;
}
var ai = [],
  kn = -1;
function Gt(e) {
  return { current: e };
}
function Y(e) {
  0 > kn || ((e.current = ai[kn]), (ai[kn] = null), kn--);
}
function W(e, t) {
  kn++, (ai[kn] = e.current), (e.current = t);
}
var Yt = {},
  Oe = Gt(Yt),
  Fe = Gt(!1),
  ln = Yt;
function Mn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Yt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function De(e) {
  return (e = e.childContextTypes), e != null;
}
function kl() {
  Y(Fe), Y(Oe);
}
function hs(e, t, n) {
  if (Oe.current !== Yt) throw Error(k(168));
  W(Oe, t), W(Fe, n);
}
function nc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(k(108, Xf(e) || "Unknown", l));
  return ee({}, n, r);
}
function El(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Yt),
    (ln = Oe.current),
    W(Oe, e),
    W(Fe, Fe.current),
    !0
  );
}
function vs(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((e = nc(e, t, ln)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Y(Fe),
      Y(Oe),
      W(Oe, e))
    : Y(Fe),
    W(Fe, n);
}
var kt = null,
  Vl = !1,
  Oo = !1;
function rc(e) {
  kt === null ? (kt = [e]) : kt.push(e);
}
function fp(e) {
  (Vl = !0), rc(e);
}
function Zt() {
  if (!Oo && kt !== null) {
    Oo = !0;
    var e = 0,
      t = B;
    try {
      var n = kt;
      for (B = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (kt = null), (Vl = !1);
    } catch (l) {
      throw (kt !== null && (kt = kt.slice(e + 1)), Oa(Qi, Zt), l);
    } finally {
      (B = t), (Oo = !1);
    }
  }
  return null;
}
var En = [],
  xn = 0,
  xl = null,
  Cl = 0,
  Ze = [],
  Je = 0,
  on = null,
  Et = 1,
  xt = "";
function Jt(e, t) {
  (En[xn++] = Cl), (En[xn++] = xl), (xl = e), (Cl = t);
}
function lc(e, t, n) {
  (Ze[Je++] = Et), (Ze[Je++] = xt), (Ze[Je++] = on), (on = e);
  var r = Et;
  e = xt;
  var l = 32 - ft(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - ft(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Et = (1 << (32 - ft(t) + l)) | (n << l) | r),
      (xt = o + e);
  } else (Et = (1 << o) | (n << l) | r), (xt = e);
}
function eu(e) {
  e.return !== null && (Jt(e, 1), lc(e, 1, 0));
}
function tu(e) {
  for (; e === xl; )
    (xl = En[--xn]), (En[xn] = null), (Cl = En[--xn]), (En[xn] = null);
  for (; e === on; )
    (on = Ze[--Je]),
      (Ze[Je] = null),
      (xt = Ze[--Je]),
      (Ze[Je] = null),
      (Et = Ze[--Je]),
      (Ze[Je] = null);
}
var Ve = null,
  He = null,
  Z = !1,
  ct = null;
function oc(e, t) {
  var n = qe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function gs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ve = e), (He = Bt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ve = e), (He = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = on !== null ? { id: Et, overflow: xt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = qe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ve = e),
            (He = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ci(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function fi(e) {
  if (Z) {
    var t = He;
    if (t) {
      var n = t;
      if (!gs(e, t)) {
        if (ci(e)) throw Error(k(418));
        t = Bt(n.nextSibling);
        var r = Ve;
        t && gs(e, t)
          ? oc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Z = !1), (Ve = e));
      }
    } else {
      if (ci(e)) throw Error(k(418));
      (e.flags = (e.flags & -4097) | 2), (Z = !1), (Ve = e);
    }
  }
}
function ys(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ve = e;
}
function Yr(e) {
  if (e !== Ve) return !1;
  if (!Z) return ys(e), (Z = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ii(e.type, e.memoizedProps))),
    t && (t = He))
  ) {
    if (ci(e)) throw (ic(), Error(k(418)));
    for (; t; ) oc(e, t), (t = Bt(t.nextSibling));
  }
  if ((ys(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              He = Bt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      He = null;
    }
  } else He = Ve ? Bt(e.stateNode.nextSibling) : null;
  return !0;
}
function ic() {
  for (var e = He; e; ) e = Bt(e.nextSibling);
}
function In() {
  (He = Ve = null), (Z = !1);
}
function nu(e) {
  ct === null ? (ct = [e]) : ct.push(e);
}
var dp = Tt.ReactCurrentBatchConfig;
function Gn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function Xr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      k(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function ws(e) {
  var t = e._init;
  return t(e._payload);
}
function uc(e) {
  function t(f, a) {
    if (e) {
      var m = f.deletions;
      m === null ? ((f.deletions = [a]), (f.flags |= 16)) : m.push(a);
    }
  }
  function n(f, a) {
    if (!e) return null;
    for (; a !== null; ) t(f, a), (a = a.sibling);
    return null;
  }
  function r(f, a) {
    for (f = new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
    return f;
  }
  function l(f, a) {
    return (f = Qt(f, a)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, a, m) {
    return (
      (f.index = m),
      e
        ? ((m = f.alternate),
          m !== null
            ? ((m = m.index), m < a ? ((f.flags |= 2), a) : m)
            : ((f.flags |= 2), a))
        : ((f.flags |= 1048576), a)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, m, w) {
    return a === null || a.tag !== 6
      ? ((a = Io(m, f.mode, w)), (a.return = f), a)
      : ((a = l(a, m)), (a.return = f), a);
  }
  function s(f, a, m, w) {
    var x = m.type;
    return x === vn
      ? g(f, a, m.props.children, w, m.key)
      : a !== null &&
        (a.elementType === x ||
          (typeof x == "object" &&
            x !== null &&
            x.$$typeof === zt &&
            ws(x) === a.type))
      ? ((w = l(a, m.props)), (w.ref = Gn(f, a, m)), (w.return = f), w)
      : ((w = fl(m.type, m.key, m.props, null, f.mode, w)),
        (w.ref = Gn(f, a, m)),
        (w.return = f),
        w);
  }
  function c(f, a, m, w) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== m.containerInfo ||
      a.stateNode.implementation !== m.implementation
      ? ((a = Fo(m, f.mode, w)), (a.return = f), a)
      : ((a = l(a, m.children || [])), (a.return = f), a);
  }
  function g(f, a, m, w, x) {
    return a === null || a.tag !== 7
      ? ((a = rn(m, f.mode, w, x)), (a.return = f), a)
      : ((a = l(a, m)), (a.return = f), a);
  }
  function p(f, a, m) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = Io("" + a, f.mode, m)), (a.return = f), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case Dr:
          return (
            (m = fl(a.type, a.key, a.props, null, f.mode, m)),
            (m.ref = Gn(f, null, a)),
            (m.return = f),
            m
          );
        case hn:
          return (a = Fo(a, f.mode, m)), (a.return = f), a;
        case zt:
          var w = a._init;
          return p(f, w(a._payload), m);
      }
      if (bn(a) || Wn(a))
        return (a = rn(a, f.mode, m, null)), (a.return = f), a;
      Xr(f, a);
    }
    return null;
  }
  function d(f, a, m, w) {
    var x = a !== null ? a.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return x !== null ? null : u(f, a, "" + m, w);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Dr:
          return m.key === x ? s(f, a, m, w) : null;
        case hn:
          return m.key === x ? c(f, a, m, w) : null;
        case zt:
          return (x = m._init), d(f, a, x(m._payload), w);
      }
      if (bn(m) || Wn(m)) return x !== null ? null : g(f, a, m, w, null);
      Xr(f, m);
    }
    return null;
  }
  function y(f, a, m, w, x) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (f = f.get(m) || null), u(a, f, "" + w, x);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Dr:
          return (f = f.get(w.key === null ? m : w.key) || null), s(a, f, w, x);
        case hn:
          return (f = f.get(w.key === null ? m : w.key) || null), c(a, f, w, x);
        case zt:
          var L = w._init;
          return y(f, a, m, L(w._payload), x);
      }
      if (bn(w) || Wn(w)) return (f = f.get(m) || null), g(a, f, w, x, null);
      Xr(a, w);
    }
    return null;
  }
  function E(f, a, m, w) {
    for (
      var x = null, L = null, P = a, R = (a = 0), V = null;
      P !== null && R < m.length;
      R++
    ) {
      P.index > R ? ((V = P), (P = null)) : (V = P.sibling);
      var j = d(f, P, m[R], w);
      if (j === null) {
        P === null && (P = V);
        break;
      }
      e && P && j.alternate === null && t(f, P),
        (a = o(j, a, R)),
        L === null ? (x = j) : (L.sibling = j),
        (L = j),
        (P = V);
    }
    if (R === m.length) return n(f, P), Z && Jt(f, R), x;
    if (P === null) {
      for (; R < m.length; R++)
        (P = p(f, m[R], w)),
          P !== null &&
            ((a = o(P, a, R)), L === null ? (x = P) : (L.sibling = P), (L = P));
      return Z && Jt(f, R), x;
    }
    for (P = r(f, P); R < m.length; R++)
      (V = y(P, f, R, m[R], w)),
        V !== null &&
          (e && V.alternate !== null && P.delete(V.key === null ? R : V.key),
          (a = o(V, a, R)),
          L === null ? (x = V) : (L.sibling = V),
          (L = V));
    return (
      e &&
        P.forEach(function (te) {
          return t(f, te);
        }),
      Z && Jt(f, R),
      x
    );
  }
  function _(f, a, m, w) {
    var x = Wn(m);
    if (typeof x != "function") throw Error(k(150));
    if (((m = x.call(m)), m == null)) throw Error(k(151));
    for (
      var L = (x = null), P = a, R = (a = 0), V = null, j = m.next();
      P !== null && !j.done;
      R++, j = m.next()
    ) {
      P.index > R ? ((V = P), (P = null)) : (V = P.sibling);
      var te = d(f, P, j.value, w);
      if (te === null) {
        P === null && (P = V);
        break;
      }
      e && P && te.alternate === null && t(f, P),
        (a = o(te, a, R)),
        L === null ? (x = te) : (L.sibling = te),
        (L = te),
        (P = V);
    }
    if (j.done) return n(f, P), Z && Jt(f, R), x;
    if (P === null) {
      for (; !j.done; R++, j = m.next())
        (j = p(f, j.value, w)),
          j !== null &&
            ((a = o(j, a, R)), L === null ? (x = j) : (L.sibling = j), (L = j));
      return Z && Jt(f, R), x;
    }
    for (P = r(f, P); !j.done; R++, j = m.next())
      (j = y(P, f, R, j.value, w)),
        j !== null &&
          (e && j.alternate !== null && P.delete(j.key === null ? R : j.key),
          (a = o(j, a, R)),
          L === null ? (x = j) : (L.sibling = j),
          (L = j));
    return (
      e &&
        P.forEach(function (Lt) {
          return t(f, Lt);
        }),
      Z && Jt(f, R),
      x
    );
  }
  function D(f, a, m, w) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === vn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case Dr:
          e: {
            for (var x = m.key, L = a; L !== null; ) {
              if (L.key === x) {
                if (((x = m.type), x === vn)) {
                  if (L.tag === 7) {
                    n(f, L.sibling),
                      (a = l(L, m.props.children)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                } else if (
                  L.elementType === x ||
                  (typeof x == "object" &&
                    x !== null &&
                    x.$$typeof === zt &&
                    ws(x) === L.type)
                ) {
                  n(f, L.sibling),
                    (a = l(L, m.props)),
                    (a.ref = Gn(f, L, m)),
                    (a.return = f),
                    (f = a);
                  break e;
                }
                n(f, L);
                break;
              } else t(f, L);
              L = L.sibling;
            }
            m.type === vn
              ? ((a = rn(m.props.children, f.mode, w, m.key)),
                (a.return = f),
                (f = a))
              : ((w = fl(m.type, m.key, m.props, null, f.mode, w)),
                (w.ref = Gn(f, a, m)),
                (w.return = f),
                (f = w));
          }
          return i(f);
        case hn:
          e: {
            for (L = m.key; a !== null; ) {
              if (a.key === L)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === m.containerInfo &&
                  a.stateNode.implementation === m.implementation
                ) {
                  n(f, a.sibling),
                    (a = l(a, m.children || [])),
                    (a.return = f),
                    (f = a);
                  break e;
                } else {
                  n(f, a);
                  break;
                }
              else t(f, a);
              a = a.sibling;
            }
            (a = Fo(m, f.mode, w)), (a.return = f), (f = a);
          }
          return i(f);
        case zt:
          return (L = m._init), D(f, a, L(m._payload), w);
      }
      if (bn(m)) return E(f, a, m, w);
      if (Wn(m)) return _(f, a, m, w);
      Xr(f, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        a !== null && a.tag === 6
          ? (n(f, a.sibling), (a = l(a, m)), (a.return = f), (f = a))
          : (n(f, a), (a = Io(m, f.mode, w)), (a.return = f), (f = a)),
        i(f))
      : n(f, a);
  }
  return D;
}
var Fn = uc(!0),
  sc = uc(!1),
  _l = Gt(null),
  Pl = null,
  Cn = null,
  ru = null;
function lu() {
  ru = Cn = Pl = null;
}
function ou(e) {
  var t = _l.current;
  Y(_l), (e._currentValue = t);
}
function di(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Rn(e, t) {
  (Pl = e),
    (ru = Cn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ie = !0), (e.firstContext = null));
}
function et(e) {
  var t = e._currentValue;
  if (ru !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Cn === null)) {
      if (Pl === null) throw Error(k(308));
      (Cn = e), (Pl.dependencies = { lanes: 0, firstContext: e });
    } else Cn = Cn.next = e;
  return t;
}
var en = null;
function iu(e) {
  en === null ? (en = [e]) : en.push(e);
}
function ac(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), iu(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Nt(e, r)
  );
}
function Nt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var jt = !1;
function uu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function cc(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ct(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ht(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), A & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Nt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), iu(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Nt(e, n)
  );
}
function ol(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ki(e, n);
  }
}
function Ss(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Nl(e, t, n, r) {
  var l = e.updateQueue;
  jt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      c = s.next;
    (s.next = null), i === null ? (o = c) : (i.next = c), (i = s);
    var g = e.alternate;
    g !== null &&
      ((g = g.updateQueue),
      (u = g.lastBaseUpdate),
      u !== i &&
        (u === null ? (g.firstBaseUpdate = c) : (u.next = c),
        (g.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var p = l.baseState;
    (i = 0), (g = c = s = null), (u = o);
    do {
      var d = u.lane,
        y = u.eventTime;
      if ((r & d) === d) {
        g !== null &&
          (g = g.next =
            {
              eventTime: y,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var E = e,
            _ = u;
          switch (((d = t), (y = n), _.tag)) {
            case 1:
              if (((E = _.payload), typeof E == "function")) {
                p = E.call(y, p, d);
                break e;
              }
              p = E;
              break e;
            case 3:
              E.flags = (E.flags & -65537) | 128;
            case 0:
              if (
                ((E = _.payload),
                (d = typeof E == "function" ? E.call(y, p, d) : E),
                d == null)
              )
                break e;
              p = ee({}, p, d);
              break e;
            case 2:
              jt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (d = l.effects),
          d === null ? (l.effects = [u]) : d.push(u));
      } else
        (y = {
          eventTime: y,
          lane: d,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          g === null ? ((c = g = y), (s = p)) : (g = g.next = y),
          (i |= d);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (d = u),
          (u = d.next),
          (d.next = null),
          (l.lastBaseUpdate = d),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (g === null && (s = p),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = g),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (sn |= i), (e.lanes = i), (e.memoizedState = p);
  }
}
function ks(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(k(191, l));
        l.call(r);
      }
    }
}
var jr = {},
  yt = Gt(jr),
  xr = Gt(jr),
  Cr = Gt(jr);
function tn(e) {
  if (e === jr) throw Error(k(174));
  return e;
}
function su(e, t) {
  switch ((W(Cr, t), W(xr, e), W(yt, jr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ko(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ko(t, e));
  }
  Y(yt), W(yt, t);
}
function Dn() {
  Y(yt), Y(xr), Y(Cr);
}
function fc(e) {
  tn(Cr.current);
  var t = tn(yt.current),
    n = Ko(t, e.type);
  t !== n && (W(xr, e), W(yt, n));
}
function au(e) {
  xr.current === e && (Y(yt), Y(xr));
}
var q = Gt(0);
function Ol(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var To = [];
function cu() {
  for (var e = 0; e < To.length; e++)
    To[e]._workInProgressVersionPrimary = null;
  To.length = 0;
}
var il = Tt.ReactCurrentDispatcher,
  Lo = Tt.ReactCurrentBatchConfig,
  un = 0,
  b = null,
  ae = null,
  me = null,
  Tl = !1,
  ur = !1,
  _r = 0,
  pp = 0;
function _e() {
  throw Error(k(321));
}
function fu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!pt(e[n], t[n])) return !1;
  return !0;
}
function du(e, t, n, r, l, o) {
  if (
    ((un = o),
    (b = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (il.current = e === null || e.memoizedState === null ? gp : yp),
    (e = n(r, l)),
    ur)
  ) {
    o = 0;
    do {
      if (((ur = !1), (_r = 0), 25 <= o)) throw Error(k(301));
      (o += 1),
        (me = ae = null),
        (t.updateQueue = null),
        (il.current = wp),
        (e = n(r, l));
    } while (ur);
  }
  if (
    ((il.current = Ll),
    (t = ae !== null && ae.next !== null),
    (un = 0),
    (me = ae = b = null),
    (Tl = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function pu() {
  var e = _r !== 0;
  return (_r = 0), e;
}
function ht() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return me === null ? (b.memoizedState = me = e) : (me = me.next = e), me;
}
function tt() {
  if (ae === null) {
    var e = b.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ae.next;
  var t = me === null ? b.memoizedState : me.next;
  if (t !== null) (me = t), (ae = e);
  else {
    if (e === null) throw Error(k(310));
    (ae = e),
      (e = {
        memoizedState: ae.memoizedState,
        baseState: ae.baseState,
        baseQueue: ae.baseQueue,
        queue: ae.queue,
        next: null,
      }),
      me === null ? (b.memoizedState = me = e) : (me = me.next = e);
  }
  return me;
}
function Pr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ro(e) {
  var t = tt(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = ae,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      s = null,
      c = o;
    do {
      var g = c.lane;
      if ((un & g) === g)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var p = {
          lane: g,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((u = s = p), (i = r)) : (s = s.next = p),
          (b.lanes |= g),
          (sn |= g);
      }
      c = c.next;
    } while (c !== null && c !== o);
    s === null ? (i = r) : (s.next = u),
      pt(r, t.memoizedState) || (Ie = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (b.lanes |= o), (sn |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function zo(e) {
  var t = tt(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    pt(o, t.memoizedState) || (Ie = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function dc() {}
function pc(e, t) {
  var n = b,
    r = tt(),
    l = t(),
    o = !pt(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (Ie = !0)),
    (r = r.queue),
    mu(vc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (me !== null && me.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Nr(9, hc.bind(null, n, r, l, t), void 0, null),
      he === null)
    )
      throw Error(k(349));
    un & 30 || mc(n, t, l);
  }
  return l;
}
function mc(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = b.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (b.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function hc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), gc(t) && yc(e);
}
function vc(e, t, n) {
  return n(function () {
    gc(t) && yc(e);
  });
}
function gc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !pt(e, n);
  } catch {
    return !0;
  }
}
function yc(e) {
  var t = Nt(e, 1);
  t !== null && dt(t, e, 1, -1);
}
function Es(e) {
  var t = ht();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Pr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = vp.bind(null, b, e)),
    [t.memoizedState, e]
  );
}
function Nr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = b.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (b.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function wc() {
  return tt().memoizedState;
}
function ul(e, t, n, r) {
  var l = ht();
  (b.flags |= e),
    (l.memoizedState = Nr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Wl(e, t, n, r) {
  var l = tt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ae !== null) {
    var i = ae.memoizedState;
    if (((o = i.destroy), r !== null && fu(r, i.deps))) {
      l.memoizedState = Nr(t, n, o, r);
      return;
    }
  }
  (b.flags |= e), (l.memoizedState = Nr(1 | t, n, o, r));
}
function xs(e, t) {
  return ul(8390656, 8, e, t);
}
function mu(e, t) {
  return Wl(2048, 8, e, t);
}
function Sc(e, t) {
  return Wl(4, 2, e, t);
}
function kc(e, t) {
  return Wl(4, 4, e, t);
}
function Ec(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function xc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Wl(4, 4, Ec.bind(null, t, e), n)
  );
}
function hu() {}
function Cc(e, t) {
  var n = tt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && fu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function _c(e, t) {
  var n = tt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && fu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Pc(e, t, n) {
  return un & 21
    ? (pt(n, t) || ((n = Ra()), (b.lanes |= n), (sn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ie = !0)), (e.memoizedState = n));
}
function mp(e, t) {
  var n = B;
  (B = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Lo.transition;
  Lo.transition = {};
  try {
    e(!1), t();
  } finally {
    (B = n), (Lo.transition = r);
  }
}
function Nc() {
  return tt().memoizedState;
}
function hp(e, t, n) {
  var r = Wt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Oc(e))
  )
    Tc(t, n);
  else if (((n = ac(e, t, n, r)), n !== null)) {
    var l = Le();
    dt(n, e, r, l), Lc(n, t, r);
  }
}
function vp(e, t, n) {
  var r = Wt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Oc(e)) Tc(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), pt(u, i))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), iu(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = ac(e, t, l, r)),
      n !== null && ((l = Le()), dt(n, e, r, l), Lc(n, t, r));
  }
}
function Oc(e) {
  var t = e.alternate;
  return e === b || (t !== null && t === b);
}
function Tc(e, t) {
  ur = Tl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Lc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ki(e, n);
  }
}
var Ll = {
    readContext: et,
    useCallback: _e,
    useContext: _e,
    useEffect: _e,
    useImperativeHandle: _e,
    useInsertionEffect: _e,
    useLayoutEffect: _e,
    useMemo: _e,
    useReducer: _e,
    useRef: _e,
    useState: _e,
    useDebugValue: _e,
    useDeferredValue: _e,
    useTransition: _e,
    useMutableSource: _e,
    useSyncExternalStore: _e,
    useId: _e,
    unstable_isNewReconciler: !1,
  },
  gp = {
    readContext: et,
    useCallback: function (e, t) {
      return (ht().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: et,
    useEffect: xs,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ul(4194308, 4, Ec.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ul(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ul(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ht();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = ht();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = hp.bind(null, b, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ht();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Es,
    useDebugValue: hu,
    useDeferredValue: function (e) {
      return (ht().memoizedState = e);
    },
    useTransition: function () {
      var e = Es(!1),
        t = e[0];
      return (e = mp.bind(null, e[1])), (ht().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = b,
        l = ht();
      if (Z) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), he === null)) throw Error(k(349));
        un & 30 || mc(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        xs(vc.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Nr(9, hc.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = ht(),
        t = he.identifierPrefix;
      if (Z) {
        var n = xt,
          r = Et;
        (n = (r & ~(1 << (32 - ft(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = _r++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = pp++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  yp = {
    readContext: et,
    useCallback: Cc,
    useContext: et,
    useEffect: mu,
    useImperativeHandle: xc,
    useInsertionEffect: Sc,
    useLayoutEffect: kc,
    useMemo: _c,
    useReducer: Ro,
    useRef: wc,
    useState: function () {
      return Ro(Pr);
    },
    useDebugValue: hu,
    useDeferredValue: function (e) {
      var t = tt();
      return Pc(t, ae.memoizedState, e);
    },
    useTransition: function () {
      var e = Ro(Pr)[0],
        t = tt().memoizedState;
      return [e, t];
    },
    useMutableSource: dc,
    useSyncExternalStore: pc,
    useId: Nc,
    unstable_isNewReconciler: !1,
  },
  wp = {
    readContext: et,
    useCallback: Cc,
    useContext: et,
    useEffect: mu,
    useImperativeHandle: xc,
    useInsertionEffect: Sc,
    useLayoutEffect: kc,
    useMemo: _c,
    useReducer: zo,
    useRef: wc,
    useState: function () {
      return zo(Pr);
    },
    useDebugValue: hu,
    useDeferredValue: function (e) {
      var t = tt();
      return ae === null ? (t.memoizedState = e) : Pc(t, ae.memoizedState, e);
    },
    useTransition: function () {
      var e = zo(Pr)[0],
        t = tt().memoizedState;
      return [e, t];
    },
    useMutableSource: dc,
    useSyncExternalStore: pc,
    useId: Nc,
    unstable_isNewReconciler: !1,
  };
function st(e, t) {
  if (e && e.defaultProps) {
    (t = ee({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function pi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ee({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ql = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? fn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Le(),
      l = Wt(e),
      o = Ct(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Ht(e, o, l)),
      t !== null && (dt(t, e, l, r), ol(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Le(),
      l = Wt(e),
      o = Ct(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Ht(e, o, l)),
      t !== null && (dt(t, e, l, r), ol(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Le(),
      r = Wt(e),
      l = Ct(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Ht(e, l, r)),
      t !== null && (dt(t, e, r, n), ol(t, e, r));
  },
};
function Cs(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !wr(n, r) || !wr(l, o)
      : !0
  );
}
function Rc(e, t, n) {
  var r = !1,
    l = Yt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = et(o))
      : ((l = De(t) ? ln : Oe.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Mn(e, l) : Yt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ql),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function _s(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ql.enqueueReplaceState(t, t.state, null);
}
function mi(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), uu(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = et(o))
    : ((o = De(t) ? ln : Oe.current), (l.context = Mn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (pi(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Ql.enqueueReplaceState(l, l.state, null),
      Nl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function $n(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Yf(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function jo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function hi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Sp = typeof WeakMap == "function" ? WeakMap : Map;
function zc(e, t, n) {
  (n = Ct(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      zl || ((zl = !0), (_i = r)), hi(e, t);
    }),
    n
  );
}
function jc(e, t, n) {
  (n = Ct(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        hi(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        hi(e, t),
          typeof r != "function" &&
            (Vt === null ? (Vt = new Set([this])) : Vt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Ps(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Sp();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Mp.bind(null, e, t, n)), t.then(e, e));
}
function Ns(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Os(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ct(-1, 1)), (t.tag = 2), Ht(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var kp = Tt.ReactCurrentOwner,
  Ie = !1;
function Te(e, t, n, r) {
  t.child = e === null ? sc(t, null, n, r) : Fn(t, e.child, n, r);
}
function Ts(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    Rn(t, l),
    (r = du(e, t, n, r, o, l)),
    (n = pu()),
    e !== null && !Ie
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ot(e, t, l))
      : (Z && n && eu(t), (t.flags |= 1), Te(e, t, r, l), t.child)
  );
}
function Ls(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !xu(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Mc(e, t, o, r, l))
      : ((e = fl(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : wr), n(i, r) && e.ref === t.ref)
    )
      return Ot(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Qt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Mc(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (wr(o, r) && e.ref === t.ref)
      if (((Ie = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (Ie = !0);
      else return (t.lanes = e.lanes), Ot(e, t, l);
  }
  return vi(e, t, n, r, l);
}
function Ic(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        W(Pn, Be),
        (Be |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          W(Pn, Be),
          (Be |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        W(Pn, Be),
        (Be |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      W(Pn, Be),
      (Be |= r);
  return Te(e, t, l, n), t.child;
}
function Fc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function vi(e, t, n, r, l) {
  var o = De(n) ? ln : Oe.current;
  return (
    (o = Mn(t, o)),
    Rn(t, l),
    (n = du(e, t, n, r, o, l)),
    (r = pu()),
    e !== null && !Ie
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ot(e, t, l))
      : (Z && r && eu(t), (t.flags |= 1), Te(e, t, n, l), t.child)
  );
}
function Rs(e, t, n, r, l) {
  if (De(n)) {
    var o = !0;
    El(t);
  } else o = !1;
  if ((Rn(t, l), t.stateNode === null))
    sl(e, t), Rc(t, n, r), mi(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = et(c))
      : ((c = De(n) ? ln : Oe.current), (c = Mn(t, c)));
    var g = n.getDerivedStateFromProps,
      p =
        typeof g == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || s !== c) && _s(t, i, r, c)),
      (jt = !1);
    var d = t.memoizedState;
    (i.state = d),
      Nl(t, r, i, l),
      (s = t.memoizedState),
      u !== r || d !== s || Fe.current || jt
        ? (typeof g == "function" && (pi(t, n, g, r), (s = t.memoizedState)),
          (u = jt || Cs(t, n, u, r, d, s, c))
            ? (p ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = c),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      cc(e, t),
      (u = t.memoizedProps),
      (c = t.type === t.elementType ? u : st(t.type, u)),
      (i.props = c),
      (p = t.pendingProps),
      (d = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = et(s))
        : ((s = De(n) ? ln : Oe.current), (s = Mn(t, s)));
    var y = n.getDerivedStateFromProps;
    (g =
      typeof y == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== p || d !== s) && _s(t, i, r, s)),
      (jt = !1),
      (d = t.memoizedState),
      (i.state = d),
      Nl(t, r, i, l);
    var E = t.memoizedState;
    u !== p || d !== E || Fe.current || jt
      ? (typeof y == "function" && (pi(t, n, y, r), (E = t.memoizedState)),
        (c = jt || Cs(t, n, c, r, d, E, s) || !1)
          ? (g ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, E, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, E, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = E)),
        (i.props = r),
        (i.state = E),
        (i.context = s),
        (r = c))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return gi(e, t, n, r, o, l);
}
function gi(e, t, n, r, l, o) {
  Fc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && vs(t, n, !1), Ot(e, t, o);
  (r = t.stateNode), (kp.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Fn(t, e.child, null, o)), (t.child = Fn(t, null, u, o)))
      : Te(e, t, u, o),
    (t.memoizedState = r.state),
    l && vs(t, n, !0),
    t.child
  );
}
function Dc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? hs(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && hs(e, t.context, !1),
    su(e, t.containerInfo);
}
function zs(e, t, n, r, l) {
  return In(), nu(l), (t.flags |= 256), Te(e, t, n, r), t.child;
}
var yi = { dehydrated: null, treeContext: null, retryLane: 0 };
function wi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function $c(e, t, n) {
  var r = t.pendingProps,
    l = q.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    W(q, l & 1),
    e === null)
  )
    return (
      fi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Xl(i, r, 0, null)),
              (e = rn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = wi(n)),
              (t.memoizedState = yi),
              e)
            : vu(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Ep(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = Qt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = Qt(u, o)) : ((o = rn(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? wi(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = yi),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Qt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function vu(e, t) {
  return (
    (t = Xl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Gr(e, t, n, r) {
  return (
    r !== null && nu(r),
    Fn(t, e.child, null, n),
    (e = vu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Ep(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = jo(Error(k(422)))), Gr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = Xl({ mode: "visible", children: r.children }, l, 0, null)),
        (o = rn(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Fn(t, e.child, null, i),
        (t.child.memoizedState = wi(i)),
        (t.memoizedState = yi),
        o);
  if (!(t.mode & 1)) return Gr(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(k(419))), (r = jo(o, r, void 0)), Gr(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), Ie || u)) {
    if (((r = he), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Nt(e, l), dt(r, e, l, -1));
    }
    return Eu(), (r = jo(Error(k(421)))), Gr(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Ip.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (He = Bt(l.nextSibling)),
      (Ve = t),
      (Z = !0),
      (ct = null),
      e !== null &&
        ((Ze[Je++] = Et),
        (Ze[Je++] = xt),
        (Ze[Je++] = on),
        (Et = e.id),
        (xt = e.overflow),
        (on = t)),
      (t = vu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function js(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), di(e.return, t, n);
}
function Mo(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function Ac(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((Te(e, t, r.children, n), (r = q.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && js(e, n, t);
        else if (e.tag === 19) js(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((W(q, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Ol(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Mo(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Ol(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Mo(t, !0, n, null, o);
        break;
      case "together":
        Mo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function sl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ot(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (sn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Qt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Qt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function xp(e, t, n) {
  switch (t.tag) {
    case 3:
      Dc(t), In();
      break;
    case 5:
      fc(t);
      break;
    case 1:
      De(t.type) && El(t);
      break;
    case 4:
      su(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      W(_l, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (W(q, q.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? $c(e, t, n)
          : (W(q, q.current & 1),
            (e = Ot(e, t, n)),
            e !== null ? e.sibling : null);
      W(q, q.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ac(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        W(q, q.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ic(e, t, n);
  }
  return Ot(e, t, n);
}
var Uc, Si, Bc, Hc;
Uc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Si = function () {};
Bc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), tn(yt.current);
    var o = null;
    switch (n) {
      case "input":
        (l = Ho(e, l)), (r = Ho(e, r)), (o = []);
        break;
      case "select":
        (l = ee({}, l, { value: void 0 })),
          (r = ee({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = Qo(e, l)), (r = Qo(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Sl);
    }
    Yo(n, r);
    var i;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var u = l[c];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (dr.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((u = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== u && (s != null || u != null))
      )
        if (c === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(c, n)), (n = s);
        else
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(c, s))
            : c === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(c, "" + s)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (dr.hasOwnProperty(c)
                ? (s != null && c === "onScroll" && K("scroll", e),
                  o || u === s || (o = []))
                : (o = o || []).push(c, s));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Hc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Zn(e, t) {
  if (!Z)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Pe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Cp(e, t, n) {
  var r = t.pendingProps;
  switch ((tu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Pe(t), null;
    case 1:
      return De(t.type) && kl(), Pe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Dn(),
        Y(Fe),
        Y(Oe),
        cu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Yr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ct !== null && (Oi(ct), (ct = null)))),
        Si(e, t),
        Pe(t),
        null
      );
    case 5:
      au(t);
      var l = tn(Cr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Bc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return Pe(t), null;
        }
        if (((e = tn(yt.current)), Yr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[vt] = t), (r[Er] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              K("cancel", r), K("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              K("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < tr.length; l++) K(tr[l], r);
              break;
            case "source":
              K("error", r);
              break;
            case "img":
            case "image":
            case "link":
              K("error", r), K("load", r);
              break;
            case "details":
              K("toggle", r);
              break;
            case "input":
              Hu(r, o), K("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                K("invalid", r);
              break;
            case "textarea":
              Wu(r, o), K("invalid", r);
          }
          Yo(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Kr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Kr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : dr.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  K("scroll", r);
            }
          switch (n) {
            case "input":
              $r(r), Vu(r, o, !0);
              break;
            case "textarea":
              $r(r), Qu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Sl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = va(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[vt] = t),
            (e[Er] = r),
            Uc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Xo(n, r)), n)) {
              case "dialog":
                K("cancel", e), K("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                K("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < tr.length; l++) K(tr[l], e);
                l = r;
                break;
              case "source":
                K("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                K("error", e), K("load", e), (l = r);
                break;
              case "details":
                K("toggle", e), (l = r);
                break;
              case "input":
                Hu(e, r), (l = Ho(e, r)), K("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = ee({}, r, { value: void 0 })),
                  K("invalid", e);
                break;
              case "textarea":
                Wu(e, r), (l = Qo(e, r)), K("invalid", e);
                break;
              default:
                l = r;
            }
            Yo(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style"
                  ? wa(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && ga(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && pr(e, s)
                    : typeof s == "number" && pr(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (dr.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && K("scroll", e)
                      : s != null && Ui(e, o, s, i));
              }
            switch (n) {
              case "input":
                $r(e), Vu(e, r, !1);
                break;
              case "textarea":
                $r(e), Qu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Kt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Nn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Nn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Sl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Pe(t), null;
    case 6:
      if (e && t.stateNode != null) Hc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (((n = tn(Cr.current)), tn(yt.current), Yr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[vt] = t),
            (o = r.nodeValue !== n) && ((e = Ve), e !== null))
          )
            switch (e.tag) {
              case 3:
                Kr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Kr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[vt] = t),
            (t.stateNode = r);
      }
      return Pe(t), null;
    case 13:
      if (
        (Y(q),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Z && He !== null && t.mode & 1 && !(t.flags & 128))
          ic(), In(), (t.flags |= 98560), (o = !1);
        else if (((o = Yr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(k(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(k(317));
            o[vt] = t;
          } else
            In(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Pe(t), (o = !1);
        } else ct !== null && (Oi(ct), (ct = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || q.current & 1 ? ce === 0 && (ce = 3) : Eu())),
          t.updateQueue !== null && (t.flags |= 4),
          Pe(t),
          null);
    case 4:
      return (
        Dn(), Si(e, t), e === null && Sr(t.stateNode.containerInfo), Pe(t), null
      );
    case 10:
      return ou(t.type._context), Pe(t), null;
    case 17:
      return De(t.type) && kl(), Pe(t), null;
    case 19:
      if ((Y(q), (o = t.memoizedState), o === null)) return Pe(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Zn(o, !1);
        else {
          if (ce !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Ol(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Zn(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return W(q, (q.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            oe() > An &&
            ((t.flags |= 128), (r = !0), Zn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ol(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Zn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !Z)
            )
              return Pe(t), null;
          } else
            2 * oe() - o.renderingStartTime > An &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Zn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = oe()),
          (t.sibling = null),
          (n = q.current),
          W(q, r ? (n & 1) | 2 : n & 1),
          t)
        : (Pe(t), null);
    case 22:
    case 23:
      return (
        ku(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Be & 1073741824 && (Pe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Pe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function _p(e, t) {
  switch ((tu(t), t.tag)) {
    case 1:
      return (
        De(t.type) && kl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Dn(),
        Y(Fe),
        Y(Oe),
        cu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return au(t), null;
    case 13:
      if ((Y(q), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        In();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Y(q), null;
    case 4:
      return Dn(), null;
    case 10:
      return ou(t.type._context), null;
    case 22:
    case 23:
      return ku(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Zr = !1,
  Ne = !1,
  Pp = typeof WeakSet == "function" ? WeakSet : Set,
  T = null;
function _n(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ne(e, t, r);
      }
    else n.current = null;
}
function ki(e, t, n) {
  try {
    n();
  } catch (r) {
    ne(e, t, r);
  }
}
var Ms = !1;
function Np(e, t) {
  if (((li = gl), (e = Ya()), bi(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            s = -1,
            c = 0,
            g = 0,
            p = e,
            d = null;
          t: for (;;) {
            for (
              var y;
              p !== n || (l !== 0 && p.nodeType !== 3) || (u = i + l),
                p !== o || (r !== 0 && p.nodeType !== 3) || (s = i + r),
                p.nodeType === 3 && (i += p.nodeValue.length),
                (y = p.firstChild) !== null;

            )
              (d = p), (p = y);
            for (;;) {
              if (p === e) break t;
              if (
                (d === n && ++c === l && (u = i),
                d === o && ++g === r && (s = i),
                (y = p.nextSibling) !== null)
              )
                break;
              (p = d), (d = p.parentNode);
            }
            p = y;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (oi = { focusedElem: e, selectionRange: n }, gl = !1, T = t; T !== null; )
    if (((t = T), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (T = e);
    else
      for (; T !== null; ) {
        t = T;
        try {
          var E = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (E !== null) {
                  var _ = E.memoizedProps,
                    D = E.memoizedState,
                    f = t.stateNode,
                    a = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? _ : st(t.type, _),
                      D
                    );
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (w) {
          ne(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (T = e);
          break;
        }
        T = t.return;
      }
  return (E = Ms), (Ms = !1), E;
}
function sr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && ki(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Kl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ei(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Vc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Vc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[vt], delete t[Er], delete t[si], delete t[ap], delete t[cp])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Wc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Is(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Wc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function xi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Sl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (xi(e, t, n), e = e.sibling; e !== null; ) xi(e, t, n), (e = e.sibling);
}
function Ci(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ci(e, t, n), e = e.sibling; e !== null; ) Ci(e, t, n), (e = e.sibling);
}
var Se = null,
  at = !1;
function Rt(e, t, n) {
  for (n = n.child; n !== null; ) Qc(e, t, n), (n = n.sibling);
}
function Qc(e, t, n) {
  if (gt && typeof gt.onCommitFiberUnmount == "function")
    try {
      gt.onCommitFiberUnmount($l, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ne || _n(n, t);
    case 6:
      var r = Se,
        l = at;
      (Se = null),
        Rt(e, t, n),
        (Se = r),
        (at = l),
        Se !== null &&
          (at
            ? ((e = Se),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Se.removeChild(n.stateNode));
      break;
    case 18:
      Se !== null &&
        (at
          ? ((e = Se),
            (n = n.stateNode),
            e.nodeType === 8
              ? No(e.parentNode, n)
              : e.nodeType === 1 && No(e, n),
            gr(e))
          : No(Se, n.stateNode));
      break;
    case 4:
      (r = Se),
        (l = at),
        (Se = n.stateNode.containerInfo),
        (at = !0),
        Rt(e, t, n),
        (Se = r),
        (at = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ne &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && ki(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      Rt(e, t, n);
      break;
    case 1:
      if (
        !Ne &&
        (_n(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          ne(n, t, u);
        }
      Rt(e, t, n);
      break;
    case 21:
      Rt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ne = (r = Ne) || n.memoizedState !== null), Rt(e, t, n), (Ne = r))
        : Rt(e, t, n);
      break;
    default:
      Rt(e, t, n);
  }
}
function Fs(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Pp()),
      t.forEach(function (r) {
        var l = Fp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function it(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (Se = u.stateNode), (at = !1);
              break e;
            case 3:
              (Se = u.stateNode.containerInfo), (at = !0);
              break e;
            case 4:
              (Se = u.stateNode.containerInfo), (at = !0);
              break e;
          }
          u = u.return;
        }
        if (Se === null) throw Error(k(160));
        Qc(o, i, l), (Se = null), (at = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        ne(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Kc(t, e), (t = t.sibling);
}
function Kc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((it(t, e), mt(e), r & 4)) {
        try {
          sr(3, e, e.return), Kl(3, e);
        } catch (_) {
          ne(e, e.return, _);
        }
        try {
          sr(5, e, e.return);
        } catch (_) {
          ne(e, e.return, _);
        }
      }
      break;
    case 1:
      it(t, e), mt(e), r & 512 && n !== null && _n(n, n.return);
      break;
    case 5:
      if (
        (it(t, e),
        mt(e),
        r & 512 && n !== null && _n(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          pr(l, "");
        } catch (_) {
          ne(e, e.return, _);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && ma(l, o),
              Xo(u, i);
            var c = Xo(u, o);
            for (i = 0; i < s.length; i += 2) {
              var g = s[i],
                p = s[i + 1];
              g === "style"
                ? wa(l, p)
                : g === "dangerouslySetInnerHTML"
                ? ga(l, p)
                : g === "children"
                ? pr(l, p)
                : Ui(l, g, p, c);
            }
            switch (u) {
              case "input":
                Vo(l, o);
                break;
              case "textarea":
                ha(l, o);
                break;
              case "select":
                var d = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var y = o.value;
                y != null
                  ? Nn(l, !!o.multiple, y, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Nn(l, !!o.multiple, o.defaultValue, !0)
                      : Nn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Er] = o;
          } catch (_) {
            ne(e, e.return, _);
          }
      }
      break;
    case 6:
      if ((it(t, e), mt(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (_) {
          ne(e, e.return, _);
        }
      }
      break;
    case 3:
      if (
        (it(t, e), mt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          gr(t.containerInfo);
        } catch (_) {
          ne(e, e.return, _);
        }
      break;
    case 4:
      it(t, e), mt(e);
      break;
    case 13:
      it(t, e),
        mt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (wu = oe())),
        r & 4 && Fs(e);
      break;
    case 22:
      if (
        ((g = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ne = (c = Ne) || g), it(t, e), (Ne = c)) : it(t, e),
        mt(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !g && e.mode & 1)
        )
          for (T = e, g = e.child; g !== null; ) {
            for (p = T = g; T !== null; ) {
              switch (((d = T), (y = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  sr(4, d, d.return);
                  break;
                case 1:
                  _n(d, d.return);
                  var E = d.stateNode;
                  if (typeof E.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (E.props = t.memoizedProps),
                        (E.state = t.memoizedState),
                        E.componentWillUnmount();
                    } catch (_) {
                      ne(r, n, _);
                    }
                  }
                  break;
                case 5:
                  _n(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    $s(p);
                    continue;
                  }
              }
              y !== null ? ((y.return = d), (T = y)) : $s(p);
            }
            g = g.sibling;
          }
        e: for (g = null, p = e; ; ) {
          if (p.tag === 5) {
            if (g === null) {
              g = p;
              try {
                (l = p.stateNode),
                  c
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = p.stateNode),
                      (s = p.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = ya("display", i)));
              } catch (_) {
                ne(e, e.return, _);
              }
            }
          } else if (p.tag === 6) {
            if (g === null)
              try {
                p.stateNode.nodeValue = c ? "" : p.memoizedProps;
              } catch (_) {
                ne(e, e.return, _);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            g === p && (g = null), (p = p.return);
          }
          g === p && (g = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      it(t, e), mt(e), r & 4 && Fs(e);
      break;
    case 21:
      break;
    default:
      it(t, e), mt(e);
  }
}
function mt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Wc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (pr(l, ""), (r.flags &= -33));
          var o = Is(e);
          Ci(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = Is(e);
          xi(e, u, i);
          break;
        default:
          throw Error(k(161));
      }
    } catch (s) {
      ne(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Op(e, t, n) {
  (T = e), Yc(e);
}
function Yc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; T !== null; ) {
    var l = T,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Zr;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || Ne;
        u = Zr;
        var c = Ne;
        if (((Zr = i), (Ne = s) && !c))
          for (T = l; T !== null; )
            (i = T),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? As(l)
                : s !== null
                ? ((s.return = i), (T = s))
                : As(l);
        for (; o !== null; ) (T = o), Yc(o), (o = o.sibling);
        (T = l), (Zr = u), (Ne = c);
      }
      Ds(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (T = o)) : Ds(e);
  }
}
function Ds(e) {
  for (; T !== null; ) {
    var t = T;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ne || Kl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ne)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : st(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && ks(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ks(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var g = c.memoizedState;
                  if (g !== null) {
                    var p = g.dehydrated;
                    p !== null && gr(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(k(163));
          }
        Ne || (t.flags & 512 && Ei(t));
      } catch (d) {
        ne(t, t.return, d);
      }
    }
    if (t === e) {
      T = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (T = n);
      break;
    }
    T = t.return;
  }
}
function $s(e) {
  for (; T !== null; ) {
    var t = T;
    if (t === e) {
      T = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (T = n);
      break;
    }
    T = t.return;
  }
}
function As(e) {
  for (; T !== null; ) {
    var t = T;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Kl(4, t);
          } catch (s) {
            ne(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              ne(t, l, s);
            }
          }
          var o = t.return;
          try {
            Ei(t);
          } catch (s) {
            ne(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Ei(t);
          } catch (s) {
            ne(t, i, s);
          }
      }
    } catch (s) {
      ne(t, t.return, s);
    }
    if (t === e) {
      T = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (T = u);
      break;
    }
    T = t.return;
  }
}
var Tp = Math.ceil,
  Rl = Tt.ReactCurrentDispatcher,
  gu = Tt.ReactCurrentOwner,
  be = Tt.ReactCurrentBatchConfig,
  A = 0,
  he = null,
  ie = null,
  ke = 0,
  Be = 0,
  Pn = Gt(0),
  ce = 0,
  Or = null,
  sn = 0,
  Yl = 0,
  yu = 0,
  ar = null,
  Me = null,
  wu = 0,
  An = 1 / 0,
  St = null,
  zl = !1,
  _i = null,
  Vt = null,
  Jr = !1,
  Dt = null,
  jl = 0,
  cr = 0,
  Pi = null,
  al = -1,
  cl = 0;
function Le() {
  return A & 6 ? oe() : al !== -1 ? al : (al = oe());
}
function Wt(e) {
  return e.mode & 1
    ? A & 2 && ke !== 0
      ? ke & -ke
      : dp.transition !== null
      ? (cl === 0 && (cl = Ra()), cl)
      : ((e = B),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : $a(e.type))),
        e)
    : 1;
}
function dt(e, t, n, r) {
  if (50 < cr) throw ((cr = 0), (Pi = null), Error(k(185)));
  Lr(e, n, r),
    (!(A & 2) || e !== he) &&
      (e === he && (!(A & 2) && (Yl |= n), ce === 4 && It(e, ke)),
      $e(e, r),
      n === 1 && A === 0 && !(t.mode & 1) && ((An = oe() + 500), Vl && Zt()));
}
function $e(e, t) {
  var n = e.callbackNode;
  dd(e, t);
  var r = vl(e, e === he ? ke : 0);
  if (r === 0)
    n !== null && Xu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Xu(n), t === 1))
      e.tag === 0 ? fp(Us.bind(null, e)) : rc(Us.bind(null, e)),
        up(function () {
          !(A & 6) && Zt();
        }),
        (n = null);
    else {
      switch (za(r)) {
        case 1:
          n = Qi;
          break;
        case 4:
          n = Ta;
          break;
        case 16:
          n = hl;
          break;
        case 536870912:
          n = La;
          break;
        default:
          n = hl;
      }
      n = tf(n, Xc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Xc(e, t) {
  if (((al = -1), (cl = 0), A & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (zn() && e.callbackNode !== n) return null;
  var r = vl(e, e === he ? ke : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ml(e, r);
  else {
    t = r;
    var l = A;
    A |= 2;
    var o = Zc();
    (he !== e || ke !== t) && ((St = null), (An = oe() + 500), nn(e, t));
    do
      try {
        zp();
        break;
      } catch (u) {
        Gc(e, u);
      }
    while (!0);
    lu(),
      (Rl.current = o),
      (A = l),
      ie !== null ? (t = 0) : ((he = null), (ke = 0), (t = ce));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = bo(e)), l !== 0 && ((r = l), (t = Ni(e, l)))), t === 1)
    )
      throw ((n = Or), nn(e, 0), It(e, r), $e(e, oe()), n);
    if (t === 6) It(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Lp(l) &&
          ((t = Ml(e, r)),
          t === 2 && ((o = bo(e)), o !== 0 && ((r = o), (t = Ni(e, o)))),
          t === 1))
      )
        throw ((n = Or), nn(e, 0), It(e, r), $e(e, oe()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          qt(e, Me, St);
          break;
        case 3:
          if (
            (It(e, r), (r & 130023424) === r && ((t = wu + 500 - oe()), 10 < t))
          ) {
            if (vl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              Le(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = ui(qt.bind(null, e, Me, St), t);
            break;
          }
          qt(e, Me, St);
          break;
        case 4:
          if ((It(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - ft(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = oe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Tp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ui(qt.bind(null, e, Me, St), r);
            break;
          }
          qt(e, Me, St);
          break;
        case 5:
          qt(e, Me, St);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return $e(e, oe()), e.callbackNode === n ? Xc.bind(null, e) : null;
}
function Ni(e, t) {
  var n = ar;
  return (
    e.current.memoizedState.isDehydrated && (nn(e, t).flags |= 256),
    (e = Ml(e, t)),
    e !== 2 && ((t = Me), (Me = n), t !== null && Oi(t)),
    e
  );
}
function Oi(e) {
  Me === null ? (Me = e) : Me.push.apply(Me, e);
}
function Lp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!pt(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function It(e, t) {
  for (
    t &= ~yu,
      t &= ~Yl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ft(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Us(e) {
  if (A & 6) throw Error(k(327));
  zn();
  var t = vl(e, 0);
  if (!(t & 1)) return $e(e, oe()), null;
  var n = Ml(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = bo(e);
    r !== 0 && ((t = r), (n = Ni(e, r)));
  }
  if (n === 1) throw ((n = Or), nn(e, 0), It(e, t), $e(e, oe()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    qt(e, Me, St),
    $e(e, oe()),
    null
  );
}
function Su(e, t) {
  var n = A;
  A |= 1;
  try {
    return e(t);
  } finally {
    (A = n), A === 0 && ((An = oe() + 500), Vl && Zt());
  }
}
function an(e) {
  Dt !== null && Dt.tag === 0 && !(A & 6) && zn();
  var t = A;
  A |= 1;
  var n = be.transition,
    r = B;
  try {
    if (((be.transition = null), (B = 1), e)) return e();
  } finally {
    (B = r), (be.transition = n), (A = t), !(A & 6) && Zt();
  }
}
function ku() {
  (Be = Pn.current), Y(Pn);
}
function nn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), ip(n)), ie !== null))
    for (n = ie.return; n !== null; ) {
      var r = n;
      switch ((tu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && kl();
          break;
        case 3:
          Dn(), Y(Fe), Y(Oe), cu();
          break;
        case 5:
          au(r);
          break;
        case 4:
          Dn();
          break;
        case 13:
          Y(q);
          break;
        case 19:
          Y(q);
          break;
        case 10:
          ou(r.type._context);
          break;
        case 22:
        case 23:
          ku();
      }
      n = n.return;
    }
  if (
    ((he = e),
    (ie = e = Qt(e.current, null)),
    (ke = Be = t),
    (ce = 0),
    (Or = null),
    (yu = Yl = sn = 0),
    (Me = ar = null),
    en !== null)
  ) {
    for (t = 0; t < en.length; t++)
      if (((n = en[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    en = null;
  }
  return e;
}
function Gc(e, t) {
  do {
    var n = ie;
    try {
      if ((lu(), (il.current = Ll), Tl)) {
        for (var r = b.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Tl = !1;
      }
      if (
        ((un = 0),
        (me = ae = b = null),
        (ur = !1),
        (_r = 0),
        (gu.current = null),
        n === null || n.return === null)
      ) {
        (ce = 1), (Or = t), (ie = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = ke),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var c = s,
            g = u,
            p = g.tag;
          if (!(g.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var d = g.alternate;
            d
              ? ((g.updateQueue = d.updateQueue),
                (g.memoizedState = d.memoizedState),
                (g.lanes = d.lanes))
              : ((g.updateQueue = null), (g.memoizedState = null));
          }
          var y = Ns(i);
          if (y !== null) {
            (y.flags &= -257),
              Os(y, i, u, o, t),
              y.mode & 1 && Ps(o, c, t),
              (t = y),
              (s = c);
            var E = t.updateQueue;
            if (E === null) {
              var _ = new Set();
              _.add(s), (t.updateQueue = _);
            } else E.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Ps(o, c, t), Eu();
              break e;
            }
            s = Error(k(426));
          }
        } else if (Z && u.mode & 1) {
          var D = Ns(i);
          if (D !== null) {
            !(D.flags & 65536) && (D.flags |= 256),
              Os(D, i, u, o, t),
              nu($n(s, u));
            break e;
          }
        }
        (o = s = $n(s, u)),
          ce !== 4 && (ce = 2),
          ar === null ? (ar = [o]) : ar.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = zc(o, s, t);
              Ss(o, f);
              break e;
            case 1:
              u = s;
              var a = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (Vt === null || !Vt.has(m))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var w = jc(o, u, t);
                Ss(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      qc(n);
    } catch (x) {
      (t = x), ie === n && n !== null && (ie = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Zc() {
  var e = Rl.current;
  return (Rl.current = Ll), e === null ? Ll : e;
}
function Eu() {
  (ce === 0 || ce === 3 || ce === 2) && (ce = 4),
    he === null || (!(sn & 268435455) && !(Yl & 268435455)) || It(he, ke);
}
function Ml(e, t) {
  var n = A;
  A |= 2;
  var r = Zc();
  (he !== e || ke !== t) && ((St = null), nn(e, t));
  do
    try {
      Rp();
      break;
    } catch (l) {
      Gc(e, l);
    }
  while (!0);
  if ((lu(), (A = n), (Rl.current = r), ie !== null)) throw Error(k(261));
  return (he = null), (ke = 0), ce;
}
function Rp() {
  for (; ie !== null; ) Jc(ie);
}
function zp() {
  for (; ie !== null && !rd(); ) Jc(ie);
}
function Jc(e) {
  var t = ef(e.alternate, e, Be);
  (e.memoizedProps = e.pendingProps),
    t === null ? qc(e) : (ie = t),
    (gu.current = null);
}
function qc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = _p(n, t)), n !== null)) {
        (n.flags &= 32767), (ie = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ce = 6), (ie = null);
        return;
      }
    } else if (((n = Cp(n, t, Be)), n !== null)) {
      ie = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ie = t;
      return;
    }
    ie = t = e;
  } while (t !== null);
  ce === 0 && (ce = 5);
}
function qt(e, t, n) {
  var r = B,
    l = be.transition;
  try {
    (be.transition = null), (B = 1), jp(e, t, n, r);
  } finally {
    (be.transition = l), (B = r);
  }
  return null;
}
function jp(e, t, n, r) {
  do zn();
  while (Dt !== null);
  if (A & 6) throw Error(k(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (pd(e, o),
    e === he && ((ie = he = null), (ke = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Jr ||
      ((Jr = !0),
      tf(hl, function () {
        return zn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = be.transition), (be.transition = null);
    var i = B;
    B = 1;
    var u = A;
    (A |= 4),
      (gu.current = null),
      Np(e, n),
      Kc(n, e),
      bd(oi),
      (gl = !!li),
      (oi = li = null),
      (e.current = n),
      Op(n),
      ld(),
      (A = u),
      (B = i),
      (be.transition = o);
  } else e.current = n;
  if (
    (Jr && ((Jr = !1), (Dt = e), (jl = l)),
    (o = e.pendingLanes),
    o === 0 && (Vt = null),
    ud(n.stateNode),
    $e(e, oe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (zl) throw ((zl = !1), (e = _i), (_i = null), e);
  return (
    jl & 1 && e.tag !== 0 && zn(),
    (o = e.pendingLanes),
    o & 1 ? (e === Pi ? cr++ : ((cr = 0), (Pi = e))) : (cr = 0),
    Zt(),
    null
  );
}
function zn() {
  if (Dt !== null) {
    var e = za(jl),
      t = be.transition,
      n = B;
    try {
      if (((be.transition = null), (B = 16 > e ? 16 : e), Dt === null))
        var r = !1;
      else {
        if (((e = Dt), (Dt = null), (jl = 0), A & 6)) throw Error(k(331));
        var l = A;
        for (A |= 4, T = e.current; T !== null; ) {
          var o = T,
            i = o.child;
          if (T.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (T = c; T !== null; ) {
                  var g = T;
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      sr(8, g, o);
                  }
                  var p = g.child;
                  if (p !== null) (p.return = g), (T = p);
                  else
                    for (; T !== null; ) {
                      g = T;
                      var d = g.sibling,
                        y = g.return;
                      if ((Vc(g), g === c)) {
                        T = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = y), (T = d);
                        break;
                      }
                      T = y;
                    }
                }
              }
              var E = o.alternate;
              if (E !== null) {
                var _ = E.child;
                if (_ !== null) {
                  E.child = null;
                  do {
                    var D = _.sibling;
                    (_.sibling = null), (_ = D);
                  } while (_ !== null);
                }
              }
              T = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (T = i);
          else
            e: for (; T !== null; ) {
              if (((o = T), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    sr(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (T = f);
                break e;
              }
              T = o.return;
            }
        }
        var a = e.current;
        for (T = a; T !== null; ) {
          i = T;
          var m = i.child;
          if (i.subtreeFlags & 2064 && m !== null) (m.return = i), (T = m);
          else
            e: for (i = a; T !== null; ) {
              if (((u = T), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Kl(9, u);
                  }
                } catch (x) {
                  ne(u, u.return, x);
                }
              if (u === i) {
                T = null;
                break e;
              }
              var w = u.sibling;
              if (w !== null) {
                (w.return = u.return), (T = w);
                break e;
              }
              T = u.return;
            }
        }
        if (
          ((A = l), Zt(), gt && typeof gt.onPostCommitFiberRoot == "function")
        )
          try {
            gt.onPostCommitFiberRoot($l, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (B = n), (be.transition = t);
    }
  }
  return !1;
}
function Bs(e, t, n) {
  (t = $n(n, t)),
    (t = zc(e, t, 1)),
    (e = Ht(e, t, 1)),
    (t = Le()),
    e !== null && (Lr(e, 1, t), $e(e, t));
}
function ne(e, t, n) {
  if (e.tag === 3) Bs(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Bs(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Vt === null || !Vt.has(r)))
        ) {
          (e = $n(n, e)),
            (e = jc(t, e, 1)),
            (t = Ht(t, e, 1)),
            (e = Le()),
            t !== null && (Lr(t, 1, e), $e(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Mp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Le()),
    (e.pingedLanes |= e.suspendedLanes & n),
    he === e &&
      (ke & n) === n &&
      (ce === 4 || (ce === 3 && (ke & 130023424) === ke && 500 > oe() - wu)
        ? nn(e, 0)
        : (yu |= n)),
    $e(e, t);
}
function bc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Br), (Br <<= 1), !(Br & 130023424) && (Br = 4194304))
      : (t = 1));
  var n = Le();
  (e = Nt(e, t)), e !== null && (Lr(e, t, n), $e(e, n));
}
function Ip(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), bc(e, n);
}
function Fp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(t), bc(e, n);
}
var ef;
ef = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Fe.current) Ie = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ie = !1), xp(e, t, n);
      Ie = !!(e.flags & 131072);
    }
  else (Ie = !1), Z && t.flags & 1048576 && lc(t, Cl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      sl(e, t), (e = t.pendingProps);
      var l = Mn(t, Oe.current);
      Rn(t, n), (l = du(null, t, r, e, l, n));
      var o = pu();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            De(r) ? ((o = !0), El(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            uu(t),
            (l.updater = Ql),
            (t.stateNode = l),
            (l._reactInternals = t),
            mi(t, r, e, n),
            (t = gi(null, t, r, !0, o, n)))
          : ((t.tag = 0), Z && o && eu(t), Te(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (sl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = $p(r)),
          (e = st(r, e)),
          l)
        ) {
          case 0:
            t = vi(null, t, r, e, n);
            break e;
          case 1:
            t = Rs(null, t, r, e, n);
            break e;
          case 11:
            t = Ts(null, t, r, e, n);
            break e;
          case 14:
            t = Ls(null, t, r, st(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : st(r, l)),
        vi(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : st(r, l)),
        Rs(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Dc(t), e === null)) throw Error(k(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          cc(e, t),
          Nl(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = $n(Error(k(423)), t)), (t = zs(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = $n(Error(k(424)), t)), (t = zs(e, t, r, n, l));
            break e;
          } else
            for (
              He = Bt(t.stateNode.containerInfo.firstChild),
                Ve = t,
                Z = !0,
                ct = null,
                n = sc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((In(), r === l)) {
            t = Ot(e, t, n);
            break e;
          }
          Te(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        fc(t),
        e === null && fi(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        ii(r, l) ? (i = null) : o !== null && ii(r, o) && (t.flags |= 32),
        Fc(e, t),
        Te(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && fi(t), null;
    case 13:
      return $c(e, t, n);
    case 4:
      return (
        su(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Fn(t, null, r, n)) : Te(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : st(r, l)),
        Ts(e, t, r, l, n)
      );
    case 7:
      return Te(e, t, t.pendingProps, n), t.child;
    case 8:
      return Te(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Te(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          W(_l, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (pt(o.value, i)) {
            if (o.children === l.children && !Fe.current) {
              t = Ot(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = Ct(-1, n & -n)), (s.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var g = c.pending;
                        g === null
                          ? (s.next = s)
                          : ((s.next = g.next), (g.next = s)),
                          (c.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      di(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(k(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  di(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        Te(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Rn(t, n),
        (l = et(l)),
        (r = r(l)),
        (t.flags |= 1),
        Te(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = st(r, t.pendingProps)),
        (l = st(r.type, l)),
        Ls(e, t, r, l, n)
      );
    case 15:
      return Mc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : st(r, l)),
        sl(e, t),
        (t.tag = 1),
        De(r) ? ((e = !0), El(t)) : (e = !1),
        Rn(t, n),
        Rc(t, r, l),
        mi(t, r, l, n),
        gi(null, t, r, !0, e, n)
      );
    case 19:
      return Ac(e, t, n);
    case 22:
      return Ic(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function tf(e, t) {
  return Oa(e, t);
}
function Dp(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function qe(e, t, n, r) {
  return new Dp(e, t, n, r);
}
function xu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function $p(e) {
  if (typeof e == "function") return xu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Hi)) return 11;
    if (e === Vi) return 14;
  }
  return 2;
}
function Qt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = qe(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function fl(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) xu(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case vn:
        return rn(n.children, l, o, t);
      case Bi:
        (i = 8), (l |= 8);
        break;
      case $o:
        return (
          (e = qe(12, n, t, l | 2)), (e.elementType = $o), (e.lanes = o), e
        );
      case Ao:
        return (e = qe(13, n, t, l)), (e.elementType = Ao), (e.lanes = o), e;
      case Uo:
        return (e = qe(19, n, t, l)), (e.elementType = Uo), (e.lanes = o), e;
      case fa:
        return Xl(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case aa:
              i = 10;
              break e;
            case ca:
              i = 9;
              break e;
            case Hi:
              i = 11;
              break e;
            case Vi:
              i = 14;
              break e;
            case zt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = qe(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function rn(e, t, n, r) {
  return (e = qe(7, e, r, t)), (e.lanes = n), e;
}
function Xl(e, t, n, r) {
  return (
    (e = qe(22, e, r, t)),
    (e.elementType = fa),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Io(e, t, n) {
  return (e = qe(6, e, null, t)), (e.lanes = n), e;
}
function Fo(e, t, n) {
  return (
    (t = qe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Ap(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = vo(0)),
    (this.expirationTimes = vo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = vo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Cu(e, t, n, r, l, o, i, u, s) {
  return (
    (e = new Ap(e, t, n, u, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = qe(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    uu(o),
    e
  );
}
function Up(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: hn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function nf(e) {
  if (!e) return Yt;
  e = e._reactInternals;
  e: {
    if (fn(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (De(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (De(n)) return nc(e, n, t);
  }
  return t;
}
function rf(e, t, n, r, l, o, i, u, s) {
  return (
    (e = Cu(n, r, !0, e, l, o, i, u, s)),
    (e.context = nf(null)),
    (n = e.current),
    (r = Le()),
    (l = Wt(n)),
    (o = Ct(r, l)),
    (o.callback = t ?? null),
    Ht(n, o, l),
    (e.current.lanes = l),
    Lr(e, l, r),
    $e(e, r),
    e
  );
}
function Gl(e, t, n, r) {
  var l = t.current,
    o = Le(),
    i = Wt(l);
  return (
    (n = nf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ct(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ht(l, t, i)),
    e !== null && (dt(e, l, i, o), ol(e, l, i)),
    i
  );
}
function Il(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Hs(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function _u(e, t) {
  Hs(e, t), (e = e.alternate) && Hs(e, t);
}
function Bp() {
  return null;
}
var lf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Pu(e) {
  this._internalRoot = e;
}
Zl.prototype.render = Pu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  Gl(e, t, null, null);
};
Zl.prototype.unmount = Pu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    an(function () {
      Gl(null, e, null, null);
    }),
      (t[Pt] = null);
  }
};
function Zl(e) {
  this._internalRoot = e;
}
Zl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ia();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Mt.length && t !== 0 && t < Mt[n].priority; n++);
    Mt.splice(n, 0, e), n === 0 && Da(e);
  }
};
function Nu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Jl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Vs() {}
function Hp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = Il(i);
        o.call(c);
      };
    }
    var i = rf(t, r, e, 0, null, !1, !1, "", Vs);
    return (
      (e._reactRootContainer = i),
      (e[Pt] = i.current),
      Sr(e.nodeType === 8 ? e.parentNode : e),
      an(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var c = Il(s);
      u.call(c);
    };
  }
  var s = Cu(e, 0, !1, null, null, !1, !1, "", Vs);
  return (
    (e._reactRootContainer = s),
    (e[Pt] = s.current),
    Sr(e.nodeType === 8 ? e.parentNode : e),
    an(function () {
      Gl(t, s, n, r);
    }),
    s
  );
}
function ql(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = Il(i);
        u.call(s);
      };
    }
    Gl(t, i, e, l);
  } else i = Hp(n, t, e, l, r);
  return Il(i);
}
ja = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = er(t.pendingLanes);
        n !== 0 &&
          (Ki(t, n | 1), $e(t, oe()), !(A & 6) && ((An = oe() + 500), Zt()));
      }
      break;
    case 13:
      an(function () {
        var r = Nt(e, 1);
        if (r !== null) {
          var l = Le();
          dt(r, e, 1, l);
        }
      }),
        _u(e, 1);
  }
};
Yi = function (e) {
  if (e.tag === 13) {
    var t = Nt(e, 134217728);
    if (t !== null) {
      var n = Le();
      dt(t, e, 134217728, n);
    }
    _u(e, 134217728);
  }
};
Ma = function (e) {
  if (e.tag === 13) {
    var t = Wt(e),
      n = Nt(e, t);
    if (n !== null) {
      var r = Le();
      dt(n, e, t, r);
    }
    _u(e, t);
  }
};
Ia = function () {
  return B;
};
Fa = function (e, t) {
  var n = B;
  try {
    return (B = e), t();
  } finally {
    B = n;
  }
};
Zo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Vo(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Hl(r);
            if (!l) throw Error(k(90));
            pa(r), Vo(r, l);
          }
        }
      }
      break;
    case "textarea":
      ha(e, n);
      break;
    case "select":
      (t = n.value), t != null && Nn(e, !!n.multiple, t, !1);
  }
};
Ea = Su;
xa = an;
var Vp = { usingClientEntryPoint: !1, Events: [zr, Sn, Hl, Sa, ka, Su] },
  Jn = {
    findFiberByHostInstance: bt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Wp = {
    bundleType: Jn.bundleType,
    version: Jn.version,
    rendererPackageName: Jn.rendererPackageName,
    rendererConfig: Jn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Tt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Pa(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Jn.findFiberByHostInstance || Bp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var qr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!qr.isDisabled && qr.supportsFiber)
    try {
      ($l = qr.inject(Wp)), (gt = qr);
    } catch {}
}
Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vp;
Qe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Nu(t)) throw Error(k(200));
  return Up(e, t, null, n);
};
Qe.createRoot = function (e, t) {
  if (!Nu(e)) throw Error(k(299));
  var n = !1,
    r = "",
    l = lf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Cu(e, 1, !1, null, null, n, !1, r, l)),
    (e[Pt] = t.current),
    Sr(e.nodeType === 8 ? e.parentNode : e),
    new Pu(t)
  );
};
Qe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(k(188))
      : ((e = Object.keys(e).join(",")), Error(k(268, e)));
  return (e = Pa(t)), (e = e === null ? null : e.stateNode), e;
};
Qe.flushSync = function (e) {
  return an(e);
};
Qe.hydrate = function (e, t, n) {
  if (!Jl(t)) throw Error(k(200));
  return ql(null, e, t, !0, n);
};
Qe.hydrateRoot = function (e, t, n) {
  if (!Nu(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = lf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = rf(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Pt] = t.current),
    Sr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Zl(t);
};
Qe.render = function (e, t, n) {
  if (!Jl(t)) throw Error(k(200));
  return ql(null, e, t, !1, n);
};
Qe.unmountComponentAtNode = function (e) {
  if (!Jl(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (an(function () {
        ql(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Pt] = null);
        });
      }),
      !0)
    : !1;
};
Qe.unstable_batchedUpdates = Su;
Qe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Jl(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return ql(e, t, n, !1, r);
};
Qe.version = "18.3.1-next-f1338f8080-20240426";
function of() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(of);
    } catch (e) {
      console.error(e);
    }
}
of(), (oa.exports = Qe);
var Qp = oa.exports,
  uf,
  Ws = Qp;
(uf = Ws.createRoot), Ws.hydrateRoot;
var sf = { exports: {} },
  af = { exports: {} };
(() => {
  var e = {
      d: (r, l) => {
        for (var o in l)
          e.o(l, o) &&
            !e.o(r, o) &&
            Object.defineProperty(r, o, { enumerable: !0, get: l[o] });
      },
      o: (r, l) => Object.prototype.hasOwnProperty.call(r, l),
      r: (r) => {
        typeof Symbol < "u" &&
          Symbol.toStringTag &&
          Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(r, "__esModule", { value: !0 });
      },
    },
    t = {};
  e.r(t), e.d(t, { default: () => n });
  const n = function (r) {
    var l = r.condition,
      o = r.show,
      i = r.elseShow,
      u = function (c) {
        return typeof c == "function";
      },
      s = function (c) {
        return (
          c() ||
          (console.warn(
            "Nothing was returned from your render function. Please make sure you are returning a valid React element."
          ),
          null)
        );
      };
    return l ? (u(o) ? s(o) : o) : !l && i ? (u(i) ? s(i) : i) : null;
  };
  af.exports = t;
})();
var Kp = af.exports;
(() => {
  var e = {
      n: (h) => {
        var v = h && h.__esModule ? () => h.default : () => h;
        return e.d(v, { a: v }), v;
      },
      d: (h, v) => {
        for (var S in v)
          e.o(v, S) &&
            !e.o(h, S) &&
            Object.defineProperty(h, S, { enumerable: !0, get: v[S] });
      },
      o: (h, v) => Object.prototype.hasOwnProperty.call(h, v),
      r: (h) => {
        typeof Symbol < "u" &&
          Symbol.toStringTag &&
          Object.defineProperty(h, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(h, "__esModule", { value: !0 });
      },
    },
    t = {};
  e.r(t),
    e.d(t, {
      Chatbot: () => dn,
      createChatBotMessage: () => s,
      createClientMessage: () => g,
      createCustomMessage: () => c,
      default: () => O,
      useChatbot: () => Mr,
    });
  const n = Q;
  var r = e.n(n);
  const l = Kp;
  var o = e.n(l),
    i = function () {
      return (
        (i =
          Object.assign ||
          function (h) {
            for (var v, S = 1, C = arguments.length; S < C; S++)
              for (var N in (v = arguments[S]))
                Object.prototype.hasOwnProperty.call(v, N) && (h[N] = v[N]);
            return h;
          }),
        i.apply(this, arguments)
      );
    },
    u = function (h, v) {
      return {
        message: h,
        type: v,
        id: Math.round(Date.now() * Math.random()),
      };
    },
    s = function (h, v) {
      return i(i(i({}, u(h, "bot")), v), { loading: !0 });
    },
    c = function (h, v, S) {
      return i(i({}, u(h, v)), S);
    },
    g = function (h, v) {
      return i(i({}, u(h, "user")), v);
    },
    p = function (h) {
      for (var v = [], S = 1; S < arguments.length; S++)
        v[S - 1] = arguments[S];
      if (h) return h.apply(void 0, v);
    };
  function d() {
    return (
      (d =
        Object.assign ||
        function (h) {
          for (var v = 1; v < arguments.length; v++) {
            var S = arguments[v];
            for (var C in S)
              Object.prototype.hasOwnProperty.call(S, C) && (h[C] = S[C]);
          }
          return h;
        }),
      d.apply(this, arguments)
    );
  }
  const y = ({ styles: h = {}, ...v }) =>
      r().createElement(
        "svg",
        d({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, v),
        r().createElement("path", {
          d: "M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z",
        })
      ),
    E = function (h) {
      var v = h.message,
        S = h.customComponents;
      return r().createElement(
        "div",
        { className: "react-chatbot-kit-user-chat-message-container" },
        r().createElement(o(), {
          condition: !!S.userChatMessage,
          show: p(S.userChatMessage, { message: v }),
          elseShow: r().createElement(
            "div",
            { className: "react-chatbot-kit-user-chat-message" },
            v,
            r().createElement("div", {
              className: "react-chatbot-kit-user-chat-message-arrow",
            })
          ),
        }),
        r().createElement(o(), {
          condition: !!S.userAvatar,
          show: p(S.userAvatar),
          elseShow: r().createElement(
            "div",
            { className: "react-chatbot-kit-user-avatar" },
            r().createElement(
              "div",
              { className: "react-chatbot-kit-user-avatar-container" },
              r().createElement(y, {
                className: "react-chatbot-kit-user-avatar-icon",
              })
            )
          ),
        })
      );
    },
    _ = function () {
      return r().createElement(
        "div",
        { className: "react-chatbot-kit-chat-bot-avatar" },
        r().createElement(
          "div",
          { className: "react-chatbot-kit-chat-bot-avatar-container" },
          r().createElement(
            "p",
            { className: "react-chatbot-kit-chat-bot-avatar-letter" },
            "B"
          )
        )
      );
    },
    D = function () {
      return r().createElement(
        "div",
        { className: "chatbot-loader-container" },
        r().createElement(
          "svg",
          {
            id: "dots",
            width: "50px",
            height: "21px",
            viewBox: "0 0 132 58",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
          },
          r().createElement(
            "g",
            { stroke: "none", fill: "none" },
            r().createElement(
              "g",
              { id: "chatbot-loader", fill: "#fff" },
              r().createElement("circle", {
                id: "chatbot-loader-dot1",
                cx: "25",
                cy: "30",
                r: "13",
              }),
              r().createElement("circle", {
                id: "chatbot-loader-dot2",
                cx: "65",
                cy: "30",
                r: "13",
              }),
              r().createElement("circle", {
                id: "chatbot-loader-dot3",
                cx: "105",
                cy: "30",
                r: "13",
              })
            )
          )
        )
      );
    };
  var f = function () {
    return (
      (f =
        Object.assign ||
        function (h) {
          for (var v, S = 1, C = arguments.length; S < C; S++)
            for (var N in (v = arguments[S]))
              Object.prototype.hasOwnProperty.call(v, N) && (h[N] = v[N]);
          return h;
        }),
      f.apply(this, arguments)
    );
  };
  const a = function (h) {
    var v = h.message,
      S = h.withAvatar,
      C = S === void 0 || S,
      N = h.loading,
      F = h.messages,
      $ = h.customComponents,
      X = h.setState,
      ge = h.customStyles,
      fe = h.delay,
      Xe = h.id,
      wt = (0, n.useState)(!1),
      re = wt[0],
      ye = wt[1];
    (0, n.useEffect)(
      function () {
        var de;
        return (
          (function (xe, Ge) {
            var ot = 750;
            fe && (ot += fe),
              (de = setTimeout(function () {
                var we = (function (Ce, J, U) {
                  for (var le, ue = 0, pe = J.length; ue < pe; ue++)
                    (!le && ue in J) ||
                      (le || (le = Array.prototype.slice.call(J, 0, ue)),
                      (le[ue] = J[ue]));
                  return Ce.concat(le || Array.prototype.slice.call(J));
                })([], xe).find(function (Ce) {
                  return Ce.id === Xe;
                });
                we &&
                  ((we.loading = !1),
                  (we.delay = void 0),
                  Ge(function (Ce) {
                    var J = Ce.messages,
                      U = J.findIndex(function (le) {
                        return le.id === Xe;
                      });
                    return (J[U] = we), f(f({}, Ce), { messages: J });
                  }));
              }, ot));
          })(F, X),
          function () {
            clearTimeout(de);
          }
        );
      },
      [fe, Xe]
    ),
      (0, n.useEffect)(
        function () {
          fe
            ? setTimeout(function () {
                return ye(!0);
              }, fe)
            : ye(!0);
        },
        [fe]
      );
    var lt = { backgroundColor: "" },
      Ae = { borderRightColor: "" };
    return (
      ge &&
        ((lt.backgroundColor = ge.backgroundColor),
        (Ae.borderRightColor = ge.backgroundColor)),
      r().createElement(o(), {
        condition: re,
        show: r().createElement(
          "div",
          { className: "react-chatbot-kit-chat-bot-message-container" },
          r().createElement(o(), {
            condition: C,
            show: r().createElement(o(), {
              condition: !!($ != null && $.botAvatar),
              show: p($ == null ? void 0 : $.botAvatar),
              elseShow: r().createElement(_, null),
            }),
          }),
          r().createElement(o(), {
            condition: !!($ != null && $.botChatMessage),
            show: p($ == null ? void 0 : $.botChatMessage, {
              message: v,
              loader: r().createElement(D, null),
            }),
            elseShow: r().createElement(
              "div",
              { className: "react-chatbot-kit-chat-bot-message", style: lt },
              r().createElement(o(), {
                condition: N,
                show: r().createElement(D, null),
                elseShow: r().createElement("span", null, v),
              }),
              r().createElement(o(), {
                condition: C,
                show: r().createElement("div", {
                  className: "react-chatbot-kit-chat-bot-message-arrow",
                  style: Ae,
                }),
              })
            ),
          })
        ),
      })
    );
  };
  function m() {
    return (
      (m =
        Object.assign ||
        function (h) {
          for (var v = 1; v < arguments.length; v++) {
            var S = arguments[v];
            for (var C in S)
              Object.prototype.hasOwnProperty.call(S, C) && (h[C] = S[C]);
          }
          return h;
        }),
      m.apply(this, arguments)
    );
  }
  const w = ({ styles: h = {}, ...v }) =>
    r().createElement(
      "svg",
      m({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, v),
      r().createElement("path", {
        d: "M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z",
      })
    );
  var x = function () {
      return (
        (x =
          Object.assign ||
          function (h) {
            for (var v, S = 1, C = arguments.length; S < C; S++)
              for (var N in (v = arguments[S]))
                Object.prototype.hasOwnProperty.call(v, N) && (h[N] = v[N]);
            return h;
          }),
        x.apply(this, arguments)
      );
    },
    L = function (h, v, S) {
      if (S || arguments.length === 2)
        for (var C, N = 0, F = v.length; N < F; N++)
          (!C && N in v) ||
            (C || (C = Array.prototype.slice.call(v, 0, N)), (C[N] = v[N]));
      return h.concat(C || Array.prototype.slice.call(v));
    };
  const P = function (h) {
      var v = h.state,
        S = h.setState,
        C = h.widgetRegistry,
        N = h.messageParser,
        F = h.parse,
        $ = h.customComponents,
        X = h.actionProvider,
        ge = h.botName,
        fe = h.customStyles,
        Xe = h.headerText,
        wt = h.customMessages,
        re = h.placeholderText,
        ye = h.validator,
        lt = h.disableScrollToBottom,
        Ae = h.messageHistory,
        de = h.actions,
        xe = h.messageContainerRef,
        Ge = v.messages,
        ot = (0, n.useState)(""),
        we = ot[0],
        Ce = ot[1],
        J = function () {
          setTimeout(function () {
            var z;
            xe.current &&
              (xe.current.scrollTop =
                (z = xe == null ? void 0 : xe.current) === null || z === void 0
                  ? void 0
                  : z.scrollHeight);
          }, 50);
        };
      (0, n.useEffect)(function () {
        lt || J();
      });
      var U = function () {
          S(function (z) {
            return x(x({}, z), {
              messages: L(L([], z.messages, !0), [u(we, "user")], !1),
            });
          }),
            J(),
            Ce("");
        },
        le = { backgroundColor: "" };
      fe &&
        fe.chatButton &&
        (le.backgroundColor = fe.chatButton.backgroundColor);
      var ue = "Conversation with " + ge;
      Xe && (ue = Xe);
      var pe = "Write your message here";
      return (
        re && (pe = re),
        r().createElement(
          "div",
          { className: "react-chatbot-kit-chat-container" },
          r().createElement(
            "div",
            { className: "react-chatbot-kit-chat-inner-container" },
            r().createElement(o(), {
              condition: !!$.header,
              show: $.header && $.header(X),
              elseShow: r().createElement(
                "div",
                { className: "react-chatbot-kit-chat-header" },
                ue
              ),
            }),
            r().createElement(
              "div",
              {
                className: "react-chatbot-kit-chat-message-container",
                ref: xe,
              },
              r().createElement(o(), {
                condition: typeof Ae == "string" && !!Ae,
                show: r().createElement("div", {
                  dangerouslySetInnerHTML: { __html: Ae },
                }),
              }),
              Ge.map(function (z, Ir) {
                return z.type === "bot"
                  ? r().createElement(
                      r().Fragment,
                      { key: z.id },
                      (function (G, se) {
                        var Ue;
                        Ue = G.withAvatar
                          ? G.withAvatar
                          : (function (wf, ju) {
                              if (ju === 0) return !0;
                              var Mu = wf[ju - 1];
                              return !(Mu.type === "bot" && !Mu.widget);
                            })(Ge, se);
                        var pn = x(x({}, G), {
                          setState: S,
                          state: v,
                          customComponents: $,
                          widgetRegistry: C,
                          messages: Ge,
                          actions: de,
                        });
                        if (G.widget) {
                          var yf = C.getWidget(
                            pn.widget,
                            x(x({}, v), {
                              scrollIntoView: J,
                              payload: G.payload,
                              actions: de,
                            })
                          );
                          return r().createElement(
                            r().Fragment,
                            null,
                            r().createElement(
                              a,
                              x(
                                {
                                  customStyles: fe.botMessageBox,
                                  withAvatar: Ue,
                                },
                                pn,
                                { key: G.id }
                              )
                            ),
                            r().createElement(o(), {
                              condition: !pn.loading,
                              show: yf || null,
                            })
                          );
                        }
                        return r().createElement(
                          a,
                          x(
                            {
                              customStyles: fe.botMessageBox,
                              key: G.id,
                              withAvatar: Ue,
                            },
                            pn,
                            { customComponents: $, messages: Ge, setState: S }
                          )
                        );
                      })(z, Ir)
                    )
                  : z.type === "user"
                  ? r().createElement(
                      r().Fragment,
                      { key: z.id },
                      (function (G) {
                        var se = C.getWidget(
                          G.widget,
                          x(x({}, v), {
                            scrollIntoView: J,
                            payload: G.payload,
                            actions: de,
                          })
                        );
                        return r().createElement(
                          r().Fragment,
                          null,
                          r().createElement(E, {
                            message: G.message,
                            key: G.id,
                            customComponents: $,
                          }),
                          se || null
                        );
                      })(z)
                    )
                  : (function (G, se) {
                      return !!se[G.type];
                    })(z, wt)
                  ? r().createElement(
                      r().Fragment,
                      { key: z.id },
                      (function (G) {
                        var se = wt[G.type],
                          Ue = {
                            setState: S,
                            state: v,
                            scrollIntoView: J,
                            actionProvider: X,
                            payload: G.payload,
                            actions: de,
                          };
                        if (G.widget) {
                          var pn = C.getWidget(
                            G.widget,
                            x(x({}, v), {
                              scrollIntoView: J,
                              payload: G.payload,
                              actions: de,
                            })
                          );
                          return r().createElement(
                            r().Fragment,
                            null,
                            se(Ue),
                            pn || null
                          );
                        }
                        return se(Ue);
                      })(z)
                    )
                  : void 0;
              }),
              r().createElement("div", { style: { paddingBottom: "15px" } })
            ),
            r().createElement(
              "div",
              { className: "react-chatbot-kit-chat-input-container" },
              r().createElement(
                "form",
                {
                  className: "react-chatbot-kit-chat-input-form",
                  onSubmit: function (z) {
                    if ((z.preventDefault(), ye && typeof ye == "function")) {
                      if (ye(we)) {
                        if ((U(), F)) return F(we);
                        N.parse(we);
                      }
                    } else {
                      if ((U(), F)) return F(we);
                      N.parse(we);
                    }
                  },
                },
                r().createElement("input", {
                  className: "react-chatbot-kit-chat-input",
                  placeholder: pe,
                  value: we,
                  onChange: function (z) {
                    return Ce(z.target.value);
                  },
                }),
                r().createElement(
                  "button",
                  { className: "react-chatbot-kit-chat-btn-send", style: le },
                  r().createElement(w, {
                    className: "react-chatbot-kit-chat-btn-send-icon",
                  })
                )
              )
            )
          )
        )
      );
    },
    R = function (h) {
      var v = h.message;
      return r().createElement(
        "div",
        { className: "react-chatbot-kit-error" },
        r().createElement(
          "h1",
          { className: "react-chatbot-kit-error-header" },
          "Ooops. Something is missing."
        ),
        r().createElement(
          "div",
          { className: "react-chatbot-kit-error-container" },
          r().createElement(a, {
            message: v,
            withAvatar: !0,
            loading: !1,
            id: 1,
            customStyles: { backgroundColor: "" },
            messages: [],
          })
        ),
        r().createElement(
          "a",
          {
            href: "https://fredrikoseberg.github.io/react-chatbot-kit-docs/",
            rel: "noopener norefferer",
            target: "_blank",
            className: "react-chatbot-kit-error-docs",
          },
          "View the docs"
        )
      );
    };
  var V = function (h) {
      return h.widgets ? h.widgets : [];
    },
    j = function (h) {
      try {
        new h();
      } catch {
        return !1;
      }
      return !0;
    },
    te = function () {
      return (
        (te =
          Object.assign ||
          function (h) {
            for (var v, S = 1, C = arguments.length; S < C; S++)
              for (var N in (v = arguments[S]))
                Object.prototype.hasOwnProperty.call(v, N) && (h[N] = v[N]);
            return h;
          }),
        te.apply(this, arguments)
      );
    };
  const Lt = function (h, v) {
    var S = this;
    (this.addWidget = function (C, N) {
      var F = C.widgetName,
        $ = C.widgetFunc,
        X = C.mapStateToProps,
        ge = C.props;
      S[F] = {
        widget: $,
        props: ge,
        mapStateToProps: X,
        parentProps: te({}, N),
      };
    }),
      (this.getWidget = function (C, N) {
        var F = S[C];
        if (F) {
          var $,
            X = te(
              te(
                te(
                  te({ scrollIntoView: N.scrollIntoView }, F.parentProps),
                  typeof ($ = F.props) == "object" ? $ : {}
                ),
                S.mapStateToProps(F.mapStateToProps, N)
              ),
              {
                setState: S.setState,
                actionProvider: S.actionProvider || N.actions,
                actions: N.actions,
                state: N,
                payload: N.payload,
              }
            );
          return F.widget(X) || null;
        }
      }),
      (this.mapStateToProps = function (C, N) {
        if (C)
          return C.reduce(function (F, $) {
            return (F[$] = N[$]), F;
          }, {});
      }),
      (this.setState = h),
      (this.actionProvider = v);
  };
  var nt = function () {
      return (
        (nt =
          Object.assign ||
          function (h) {
            for (var v, S = 1, C = arguments.length; S < C; S++)
              for (var N in (v = arguments[S]))
                Object.prototype.hasOwnProperty.call(v, N) && (h[N] = v[N]);
            return h;
          }),
        nt.apply(this, arguments)
      );
    },
    Vn = function (h, v, S) {
      for (var C, N = 0, F = v.length; N < F; N++)
        (!C && N in v) ||
          (C || (C = Array.prototype.slice.call(v, 0, N)), (C[N] = v[N]));
      return h.concat(C || Array.prototype.slice.call(v));
    };
  const Mr = function (h) {
    var v = h.config,
      S = h.actionProvider,
      C = h.messageParser,
      N = h.messageHistory,
      F = h.runInitialMessagesWithHistory,
      $ = h.saveMessages,
      X = (function (U, le) {
        var ue = {};
        for (var pe in U)
          Object.prototype.hasOwnProperty.call(U, pe) &&
            le.indexOf(pe) < 0 &&
            (ue[pe] = U[pe]);
        if (U != null && typeof Object.getOwnPropertySymbols == "function") {
          var z = 0;
          for (pe = Object.getOwnPropertySymbols(U); z < pe.length; z++)
            le.indexOf(pe[z]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(U, pe[z]) &&
              (ue[pe[z]] = U[pe[z]]);
        }
        return ue;
      })(h, [
        "config",
        "actionProvider",
        "messageParser",
        "messageHistory",
        "runInitialMessagesWithHistory",
        "saveMessages",
      ]),
      ge = "",
      fe = "";
    if (!v || !S || !C)
      return {
        configurationError: (ge =
          "I think you forgot to feed me some props. Did you remember to pass a config, a messageparser and an actionprovider?"),
      };
    var Xe = (function (U, le) {
      var ue = [];
      return (
        U.initialMessages ||
          ue.push(
            "Config must contain property 'initialMessages', and it expects it to be an array of chatbotmessages."
          ),
        ue
      );
    })(v);
    if (Xe.length)
      return {
        invalidPropsError: (fe = Xe.reduce(function (U, le) {
          return U + le;
        }, "")),
      };
    var wt = (function (U) {
      return U.state ? U.state : {};
    })(v);
    N && Array.isArray(N)
      ? (v.initialMessages = Vn([], N))
      : typeof N == "string" && N && (F || (v.initialMessages = []));
    var re,
      ye,
      lt,
      Ae = r().useState(nt({ messages: Vn([], v.initialMessages) }, wt)),
      de = Ae[0],
      xe = Ae[1],
      Ge = r().useRef(de.messages),
      ot = r().useRef(),
      we = r().useRef();
    (0, n.useEffect)(function () {
      Ge.current = de.messages;
    }),
      (0, n.useEffect)(function () {
        N &&
          Array.isArray(N) &&
          xe(function (U) {
            return nt(nt({}, U), { messages: N });
          });
      }, []),
      (0, n.useEffect)(function () {
        var U = we.current;
        return function () {
          if ($ && typeof $ == "function") {
            var le = U.innerHTML.toString();
            $(Ge.current, le);
          }
        };
      }, []),
      (0, n.useEffect)(
        function () {
          ot.current = de;
        },
        [de]
      );
    var Ce = S,
      J = C;
    return (
      j(Ce) && j(J)
        ? ((re = new S(s, xe, g, ot.current, c, X)),
          (ye = new Lt(xe, re)),
          (lt = new C(re, ot.current)),
          V(v).forEach(function (U) {
            return ye == null ? void 0 : ye.addWidget(U, X);
          }))
        : ((re = S),
          (lt = C),
          (ye = new Lt(xe, null)),
          V(v).forEach(function (U) {
            return ye == null ? void 0 : ye.addWidget(U, X);
          })),
      {
        widgetRegistry: ye,
        actionProv: re,
        messagePars: lt,
        configurationError: ge,
        invalidPropsError: fe,
        state: de,
        setState: xe,
        messageContainerRef: we,
        ActionProvider: Ce,
        MessageParser: J,
      }
    );
  };
  var rt = function () {
    return (
      (rt =
        Object.assign ||
        function (h) {
          for (var v, S = 1, C = arguments.length; S < C; S++)
            for (var N in (v = arguments[S]))
              Object.prototype.hasOwnProperty.call(v, N) && (h[N] = v[N]);
          return h;
        }),
      rt.apply(this, arguments)
    );
  };
  const dn = function (h) {
      var v = h.actionProvider,
        S = h.messageParser,
        C = h.config,
        N = h.headerText,
        F = h.placeholderText,
        $ = h.saveMessages,
        X = h.messageHistory,
        ge = h.runInitialMessagesWithHistory,
        fe = h.disableScrollToBottom,
        Xe = h.validator,
        wt = (function (z, Ir) {
          var G = {};
          for (var se in z)
            Object.prototype.hasOwnProperty.call(z, se) &&
              Ir.indexOf(se) < 0 &&
              (G[se] = z[se]);
          if (z != null && typeof Object.getOwnPropertySymbols == "function") {
            var Ue = 0;
            for (se = Object.getOwnPropertySymbols(z); Ue < se.length; Ue++)
              Ir.indexOf(se[Ue]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(z, se[Ue]) &&
                (G[se[Ue]] = z[se[Ue]]);
          }
          return G;
        })(h, [
          "actionProvider",
          "messageParser",
          "config",
          "headerText",
          "placeholderText",
          "saveMessages",
          "messageHistory",
          "runInitialMessagesWithHistory",
          "disableScrollToBottom",
          "validator",
        ]),
        re = Mr(
          rt(
            {
              config: C,
              actionProvider: v,
              messageParser: S,
              messageHistory: X,
              saveMessages: $,
              runInitialMessagesWithHistory: ge,
            },
            wt
          )
        ),
        ye = re.configurationError,
        lt = re.invalidPropsError,
        Ae = re.ActionProvider,
        de = re.MessageParser,
        xe = re.widgetRegistry,
        Ge = re.messageContainerRef,
        ot = re.actionProv,
        we = re.messagePars,
        Ce = re.state,
        J = re.setState;
      if (ye) return r().createElement(R, { message: ye });
      if (lt.length) return r().createElement(R, { message: lt });
      var U = (function (z) {
          return z.customStyles ? z.customStyles : {};
        })(C),
        le = (function (z) {
          return z.customComponents ? z.customComponents : {};
        })(C),
        ue = (function (z) {
          return z.botName ? z.botName : "Bot";
        })(C),
        pe = (function (z) {
          return z.customMessages ? z.customMessages : {};
        })(C);
      return j(Ae) && j(de)
        ? r().createElement(P, {
            state: Ce,
            setState: J,
            widgetRegistry: xe,
            actionProvider: ot,
            messageParser: we,
            customMessages: pe,
            customComponents: rt({}, le),
            botName: ue,
            customStyles: rt({}, U),
            headerText: N,
            placeholderText: F,
            validator: Xe,
            messageHistory: X,
            disableScrollToBottom: fe,
            messageContainerRef: Ge,
          })
        : r().createElement(
            Ae,
            { state: Ce, setState: J, createChatBotMessage: s },
            r().createElement(
              de,
              null,
              r().createElement(P, {
                state: Ce,
                setState: J,
                widgetRegistry: xe,
                actionProvider: Ae,
                messageParser: de,
                customMessages: pe,
                customComponents: rt({}, le),
                botName: ue,
                customStyles: rt({}, U),
                headerText: N,
                placeholderText: F,
                validator: Xe,
                messageHistory: X,
                disableScrollToBottom: fe,
                messageContainerRef: Ge,
              })
            )
          );
    },
    O = dn;
  sf.exports = t;
})();
var fr = sf.exports;
const Yp = Fl(fr),
  cf = Q.createContext({ questions: [] }),
  Xp = (e) => {
    const { setState: t, children: n } = e,
      { questions: r } = Q.useContext(cf),
      [l, o] = Q.useState([]),
      i = Q.useRef(null);
    Q.useEffect(() => {
      const p = document.querySelector(".react-chatbot-kit-chat-input");
      return (
        (i.current = p),
        p && p.addEventListener("input", u),
        () => {
          p && p.removeEventListener("input", u);
        }
      );
    }, []);
    const u = () => {
        if (i.current) {
          const p = i.current.value;
          if (p) {
            const d = r.filter(
              (y, E, _) =>
                y.selection.toLowerCase().includes(p.toLowerCase()) &&
                _.find((D) => D.parentId === y.id)
            );
            o(d);
          } else o([]);
        }
      },
      s = () => {
        const p = fr.createChatBotMessage("Here's an image of a dog", {
          widget: "image",
        });
        t((d) => ({ ...d, messages: [...d.messages, p] }));
      },
      c = (p) => {
        const d = fr.createChatBotMessage(
          p.answer === "" ? `You selected - ${p.selection}` : p.answer,
          {
            widget: p.id === 60 ? "email" : "options",
            payload: { options: r.filter((y) => y.parentId === p.id) },
          }
        );
        t((y) => ({ ...y, messages: [...y.messages, d] }));
      },
      g = (p) => {
        const d = fr.createChatBotMessage(
          p.answer === "" ? `You typed - ${p.selection}` : p.answer,
          {
            widget: p.id === 60 ? "email" : "options",
            payload: { options: r.filter((y) => y.parentId === p.id) },
          }
        );
        t((y) => ({ ...y, messages: [...y.messages, d] })), o([]);
      };
    return M.jsxs("div", {
      children: [
        M.jsx("div", {
          style: {
            position: "absolute",
            zIndex: 1e8,
            top: 300,
            left: 10,
            backgroundColor: "lightblue",
            width: "360px",
            height: "140px",
            padding: "5px",
            display: l.length ? "block" : "none",
            borderRadius: "10px",
          },
          children: l.slice(0, 5).map((p, d) =>
            M.jsx(
              "div",
              {
                onClick: () => g(p),
                style: {
                  borderRadius: "3px",
                  backgroundColor: "white",
                  marginLeft: "4px",
                  marginRight: "2px",
                  marginTop: "4px",
                  padding: "2px",
                  textAlign: "center",
                  cursor: "pointer",
                },
                children: p.selection,
              },
              d
            )
          ),
        }),
        $u.Children.toArray(n).map((p) =>
          $u.cloneElement(p, {
            actions: {
              handleClickOption: c,
              handleTextToImage: s,
              handleSelectSuggestion: g,
            },
          })
        ),
      ],
    });
  };
var ff = { exports: {} },
  Gp = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  Zp = Gp,
  Jp = Zp;
function df() {}
function pf() {}
pf.resetWarningCache = df;
var qp = function () {
  function e(r, l, o, i, u, s) {
    if (s !== Jp) {
      var c = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((c.name = "Invariant Violation"), c);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: pf,
    resetWarningCache: df,
  };
  return (n.PropTypes = n), n;
};
ff.exports = qp();
var bp = ff.exports;
const je = Fl(bp);
var em = [
  "sitekey",
  "onChange",
  "theme",
  "type",
  "tabindex",
  "onExpired",
  "onErrored",
  "size",
  "stoken",
  "grecaptcha",
  "badge",
  "hl",
  "isolated",
];
function Ti() {
  return (
    (Ti = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ti.apply(this, arguments)
  );
}
function tm(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function br(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function nm(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Li(e, t);
}
function Li(e, t) {
  return (
    (Li = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, l) {
          return (r.__proto__ = l), r;
        }),
    Li(e, t)
  );
}
var bl = (function (e) {
  nm(t, e);
  function t() {
    var r;
    return (
      (r = e.call(this) || this),
      (r.handleExpired = r.handleExpired.bind(br(r))),
      (r.handleErrored = r.handleErrored.bind(br(r))),
      (r.handleChange = r.handleChange.bind(br(r))),
      (r.handleRecaptchaRef = r.handleRecaptchaRef.bind(br(r))),
      r
    );
  }
  var n = t.prototype;
  return (
    (n.getCaptchaFunction = function (l) {
      return this.props.grecaptcha
        ? this.props.grecaptcha.enterprise
          ? this.props.grecaptcha.enterprise[l]
          : this.props.grecaptcha[l]
        : null;
    }),
    (n.getValue = function () {
      var l = this.getCaptchaFunction("getResponse");
      return l && this._widgetId !== void 0 ? l(this._widgetId) : null;
    }),
    (n.getWidgetId = function () {
      return this.props.grecaptcha && this._widgetId !== void 0
        ? this._widgetId
        : null;
    }),
    (n.execute = function () {
      var l = this.getCaptchaFunction("execute");
      if (l && this._widgetId !== void 0) return l(this._widgetId);
      this._executeRequested = !0;
    }),
    (n.executeAsync = function () {
      var l = this;
      return new Promise(function (o, i) {
        (l.executionResolve = o), (l.executionReject = i), l.execute();
      });
    }),
    (n.reset = function () {
      var l = this.getCaptchaFunction("reset");
      l && this._widgetId !== void 0 && l(this._widgetId);
    }),
    (n.forceReset = function () {
      var l = this.getCaptchaFunction("reset");
      l && l();
    }),
    (n.handleExpired = function () {
      this.props.onExpired ? this.props.onExpired() : this.handleChange(null);
    }),
    (n.handleErrored = function () {
      this.props.onErrored && this.props.onErrored(),
        this.executionReject &&
          (this.executionReject(),
          delete this.executionResolve,
          delete this.executionReject);
    }),
    (n.handleChange = function (l) {
      this.props.onChange && this.props.onChange(l),
        this.executionResolve &&
          (this.executionResolve(l),
          delete this.executionReject,
          delete this.executionResolve);
    }),
    (n.explicitRender = function () {
      var l = this.getCaptchaFunction("render");
      if (l && this._widgetId === void 0) {
        var o = document.createElement("div");
        (this._widgetId = l(o, {
          sitekey: this.props.sitekey,
          callback: this.handleChange,
          theme: this.props.theme,
          type: this.props.type,
          tabindex: this.props.tabindex,
          "expired-callback": this.handleExpired,
          "error-callback": this.handleErrored,
          size: this.props.size,
          stoken: this.props.stoken,
          hl: this.props.hl,
          badge: this.props.badge,
          isolated: this.props.isolated,
        })),
          this.captcha.appendChild(o);
      }
      this._executeRequested &&
        this.props.grecaptcha &&
        this._widgetId !== void 0 &&
        ((this._executeRequested = !1), this.execute());
    }),
    (n.componentDidMount = function () {
      this.explicitRender();
    }),
    (n.componentDidUpdate = function () {
      this.explicitRender();
    }),
    (n.handleRecaptchaRef = function (l) {
      this.captcha = l;
    }),
    (n.render = function () {
      var l = this.props;
      l.sitekey,
        l.onChange,
        l.theme,
        l.type,
        l.tabindex,
        l.onExpired,
        l.onErrored,
        l.size,
        l.stoken,
        l.grecaptcha,
        l.badge,
        l.hl,
        l.isolated;
      var o = tm(l, em);
      return Q.createElement(
        "div",
        Ti({}, o, { ref: this.handleRecaptchaRef })
      );
    }),
    t
  );
})(Q.Component);
bl.displayName = "ReCAPTCHA";
bl.propTypes = {
  sitekey: je.string.isRequired,
  onChange: je.func,
  grecaptcha: je.object,
  theme: je.oneOf(["dark", "light"]),
  type: je.oneOf(["image", "audio"]),
  tabindex: je.number,
  onExpired: je.func,
  onErrored: je.func,
  size: je.oneOf(["compact", "normal", "invisible"]),
  stoken: je.string,
  hl: je.string,
  badge: je.oneOf(["bottomright", "bottomleft", "inline"]),
  isolated: je.bool,
};
bl.defaultProps = {
  onChange: function () {},
  theme: "light",
  type: "image",
  tabindex: 0,
  size: "normal",
  badge: "bottomright",
};
var mf = { exports: {} },
  H = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ve = typeof Symbol == "function" && Symbol.for,
  Ou = ve ? Symbol.for("react.element") : 60103,
  Tu = ve ? Symbol.for("react.portal") : 60106,
  eo = ve ? Symbol.for("react.fragment") : 60107,
  to = ve ? Symbol.for("react.strict_mode") : 60108,
  no = ve ? Symbol.for("react.profiler") : 60114,
  ro = ve ? Symbol.for("react.provider") : 60109,
  lo = ve ? Symbol.for("react.context") : 60110,
  Lu = ve ? Symbol.for("react.async_mode") : 60111,
  oo = ve ? Symbol.for("react.concurrent_mode") : 60111,
  io = ve ? Symbol.for("react.forward_ref") : 60112,
  uo = ve ? Symbol.for("react.suspense") : 60113,
  rm = ve ? Symbol.for("react.suspense_list") : 60120,
  so = ve ? Symbol.for("react.memo") : 60115,
  ao = ve ? Symbol.for("react.lazy") : 60116,
  lm = ve ? Symbol.for("react.block") : 60121,
  om = ve ? Symbol.for("react.fundamental") : 60117,
  im = ve ? Symbol.for("react.responder") : 60118,
  um = ve ? Symbol.for("react.scope") : 60119;
function Ye(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ou:
        switch (((e = e.type), e)) {
          case Lu:
          case oo:
          case eo:
          case no:
          case to:
          case uo:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case lo:
              case io:
              case ao:
              case so:
              case ro:
                return e;
              default:
                return t;
            }
        }
      case Tu:
        return t;
    }
  }
}
function hf(e) {
  return Ye(e) === oo;
}
H.AsyncMode = Lu;
H.ConcurrentMode = oo;
H.ContextConsumer = lo;
H.ContextProvider = ro;
H.Element = Ou;
H.ForwardRef = io;
H.Fragment = eo;
H.Lazy = ao;
H.Memo = so;
H.Portal = Tu;
H.Profiler = no;
H.StrictMode = to;
H.Suspense = uo;
H.isAsyncMode = function (e) {
  return hf(e) || Ye(e) === Lu;
};
H.isConcurrentMode = hf;
H.isContextConsumer = function (e) {
  return Ye(e) === lo;
};
H.isContextProvider = function (e) {
  return Ye(e) === ro;
};
H.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ou;
};
H.isForwardRef = function (e) {
  return Ye(e) === io;
};
H.isFragment = function (e) {
  return Ye(e) === eo;
};
H.isLazy = function (e) {
  return Ye(e) === ao;
};
H.isMemo = function (e) {
  return Ye(e) === so;
};
H.isPortal = function (e) {
  return Ye(e) === Tu;
};
H.isProfiler = function (e) {
  return Ye(e) === no;
};
H.isStrictMode = function (e) {
  return Ye(e) === to;
};
H.isSuspense = function (e) {
  return Ye(e) === uo;
};
H.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === eo ||
    e === oo ||
    e === no ||
    e === to ||
    e === uo ||
    e === rm ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === ao ||
        e.$$typeof === so ||
        e.$$typeof === ro ||
        e.$$typeof === lo ||
        e.$$typeof === io ||
        e.$$typeof === om ||
        e.$$typeof === im ||
        e.$$typeof === um ||
        e.$$typeof === lm))
  );
};
H.typeOf = Ye;
mf.exports = H;
var sm = mf.exports,
  Ru = sm,
  am = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  cm = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  fm = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  vf = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  zu = {};
zu[Ru.ForwardRef] = fm;
zu[Ru.Memo] = vf;
function Qs(e) {
  return Ru.isMemo(e) ? vf : zu[e.$$typeof] || am;
}
var dm = Object.defineProperty,
  pm = Object.getOwnPropertyNames,
  Ks = Object.getOwnPropertySymbols,
  mm = Object.getOwnPropertyDescriptor,
  hm = Object.getPrototypeOf,
  Ys = Object.prototype;
function gf(e, t, n) {
  if (typeof t != "string") {
    if (Ys) {
      var r = hm(t);
      r && r !== Ys && gf(e, r, n);
    }
    var l = pm(t);
    Ks && (l = l.concat(Ks(t)));
    for (var o = Qs(e), i = Qs(t), u = 0; u < l.length; ++u) {
      var s = l[u];
      if (!cm[s] && !(n && n[s]) && !(i && i[s]) && !(o && o[s])) {
        var c = mm(t, s);
        try {
          dm(e, s, c);
        } catch {}
      }
    }
  }
  return e;
}
var vm = gf;
const gm = Fl(vm);
function Ri() {
  return (
    (Ri =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Ri.apply(this, arguments)
  );
}
function ym(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function wm(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t);
}
var ut = {},
  Sm = 0;
function km(e, t) {
  return (
    (t = t || {}),
    function (r) {
      var l = r.displayName || r.name || "Component",
        o = (function (u) {
          wm(s, u);
          function s(g, p) {
            var d;
            return (
              (d = u.call(this, g, p) || this),
              (d.state = {}),
              (d.__scriptURL = ""),
              d
            );
          }
          var c = s.prototype;
          return (
            (c.asyncScriptLoaderGetScriptLoaderID = function () {
              return (
                this.__scriptLoaderID ||
                  (this.__scriptLoaderID = "async-script-loader-" + Sm++),
                this.__scriptLoaderID
              );
            }),
            (c.setupScriptURL = function () {
              return (
                (this.__scriptURL = typeof e == "function" ? e() : e),
                this.__scriptURL
              );
            }),
            (c.asyncScriptLoaderHandleLoad = function (p) {
              var d = this;
              this.setState(p, function () {
                return (
                  d.props.asyncScriptOnLoad &&
                  d.props.asyncScriptOnLoad(d.state)
                );
              });
            }),
            (c.asyncScriptLoaderTriggerOnScriptLoaded = function () {
              var p = ut[this.__scriptURL];
              if (!p || !p.loaded) throw new Error("Script is not loaded.");
              for (var d in p.observers) p.observers[d](p);
              delete window[t.callbackName];
            }),
            (c.componentDidMount = function () {
              var p = this,
                d = this.setupScriptURL(),
                y = this.asyncScriptLoaderGetScriptLoaderID(),
                E = t,
                _ = E.globalName,
                D = E.callbackName,
                f = E.scriptId;
              if (
                (_ &&
                  typeof window[_] < "u" &&
                  (ut[d] = { loaded: !0, observers: {} }),
                ut[d])
              ) {
                var a = ut[d];
                if (a && (a.loaded || a.errored)) {
                  this.asyncScriptLoaderHandleLoad(a);
                  return;
                }
                a.observers[y] = function (P) {
                  return p.asyncScriptLoaderHandleLoad(P);
                };
                return;
              }
              var m = {};
              (m[y] = function (P) {
                return p.asyncScriptLoaderHandleLoad(P);
              }),
                (ut[d] = { loaded: !1, observers: m });
              var w = document.createElement("script");
              (w.src = d), (w.async = !0);
              for (var x in t.attributes) w.setAttribute(x, t.attributes[x]);
              f && (w.id = f);
              var L = function (R) {
                if (ut[d]) {
                  var V = ut[d],
                    j = V.observers;
                  for (var te in j) R(j[te]) && delete j[te];
                }
              };
              D &&
                typeof window < "u" &&
                (window[D] = function () {
                  return p.asyncScriptLoaderTriggerOnScriptLoaded();
                }),
                (w.onload = function () {
                  var P = ut[d];
                  P &&
                    ((P.loaded = !0),
                    L(function (R) {
                      return D ? !1 : (R(P), !0);
                    }));
                }),
                (w.onerror = function () {
                  var P = ut[d];
                  P &&
                    ((P.errored = !0),
                    L(function (R) {
                      return R(P), !0;
                    }));
                }),
                document.body.appendChild(w);
            }),
            (c.componentWillUnmount = function () {
              var p = this.__scriptURL;
              if (t.removeOnUnmount === !0)
                for (
                  var d = document.getElementsByTagName("script"), y = 0;
                  y < d.length;
                  y += 1
                )
                  d[y].src.indexOf(p) > -1 &&
                    d[y].parentNode &&
                    d[y].parentNode.removeChild(d[y]);
              var E = ut[p];
              E &&
                (delete E.observers[this.asyncScriptLoaderGetScriptLoaderID()],
                t.removeOnUnmount === !0 && delete ut[p]);
            }),
            (c.render = function () {
              var p = t.globalName,
                d = this.props;
              d.asyncScriptOnLoad;
              var y = d.forwardedRef,
                E = ym(d, ["asyncScriptOnLoad", "forwardedRef"]);
              return (
                p &&
                  typeof window < "u" &&
                  (E[p] = typeof window[p] < "u" ? window[p] : void 0),
                (E.ref = y),
                Q.createElement(r, E)
              );
            }),
            s
          );
        })(Q.Component),
        i = Q.forwardRef(function (u, s) {
          return Q.createElement(o, Ri({}, u, { forwardedRef: s }));
        });
      return (
        (i.displayName = "AsyncScriptLoader(" + l + ")"),
        (i.propTypes = { asyncScriptOnLoad: je.func }),
        gm(i, r)
      );
    }
  );
}
var zi = "onloadcallback",
  Em = "grecaptcha";
function ji() {
  return (typeof window < "u" && window.recaptchaOptions) || {};
}
function xm() {
  var e = ji(),
    t = e.useRecaptchaNet ? "recaptcha.net" : "www.google.com";
  return e.enterprise
    ? "https://" +
        t +
        "/recaptcha/enterprise.js?onload=" +
        zi +
        "&render=explicit"
    : "https://" + t + "/recaptcha/api.js?onload=" + zi + "&render=explicit";
}
const Cm = km(xm, {
    callbackName: zi,
    globalName: Em,
    attributes: ji().nonce ? { nonce: ji().nonce } : {},
  })(bl),
  _m = () => {
    const [e, t] = Q.useState({ name: "", email: "", message: "" }),
      [n, r] = Q.useState(null),
      [l, o] = Q.useState(""),
      i = (c) => {
        const { id: g, value: p } = c.target;
        t({ ...e, [g]: p }), o("");
      },
      u = (c) => {
        r(c);
      },
      s = async (c) => {
        if ((c.preventDefault(), !n)) {
          o("Please complete the reCAPTCHA");
          return;
        }
        if (!e.email) {
          o("Email is required.");
          return;
        }
        const g = "YOUR_LIST_ID",
          p = "YOUR_API_KEY";
        try {
          const d = await fetch(
            `https://<dc>.api.mailchimp.com/3.0/lists/${g}/members`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `apikey ${p}`,
              },
              body: JSON.stringify({
                email_address: e.email,
                status: "subscribed",
                merge_fields: { FNAME: e.name, MESSAGE: e.message },
              }),
            }
          );
          if (d.ok) {
            const y = await d.json();
            console.log("Success:", y),
              t({ name: "", email: "", message: "" }),
              r(null),
              o("");
          } else
            console.error("Error:", d.statusText),
              o("Submission failed. Please try again.");
        } catch (d) {
          console.error("Error:", d),
            o("An unexpected error occurred. Please try again.");
        }
      };
    return M.jsx("div", {
      className: "contact-form-container",
      children: M.jsxs("form", {
        className: "contact-form",
        onSubmit: s,
        children: [
          M.jsxs("div", {
            className: "input-group",
            children: [
              M.jsx("label", { htmlFor: "name", children: "Full Name" }),
              M.jsx("input", {
                type: "text",
                id: "name",
                placeholder: "Enter your full name",
                value: e.name,
                onChange: i,
                required: !0,
              }),
            ],
          }),
          M.jsxs("div", {
            className: "input-group",
            children: [
              M.jsx("label", { htmlFor: "email", children: "Email" }),
              M.jsx("input", {
                type: "email",
                id: "email",
                placeholder: "Enter your email",
                value: e.email,
                onChange: i,
                required: !0,
              }),
            ],
          }),
          l &&
            M.jsx("span", {
              className: "error",
              style: { color: "red", fontSize: "small" },
              children: l,
            }),
          M.jsxs("div", {
            className: "input-group",
            children: [
              M.jsx("label", { htmlFor: "message", children: "Message" }),
              M.jsx("textarea", {
                id: "message",
                placeholder: "Enter your message",
                rows: 4,
                value: e.message,
                onChange: i,
                required: !0,
              }),
            ],
          }),
          M.jsx("div", {
            className: "recaptcha-input",
            children: M.jsx(Cm, {
              sitekey: "6LdNF24qAAAAAOLXNby6bl8xeBFkdvVmLSz-461v",
              onChange: u,
            }),
          }),
          M.jsx("button", {
            type: "submit",
            className: "submit-btn",
            children: "Submit",
          }),
        ],
      }),
    });
  },
  Pm = () => {
    const [e, t] = Q.useState("");
    return (
      Q.useEffect(() => {
        fetch("https://dog.ceo/api/breed/labrador/images/random")
          .then((n) => n.json())
          .then((n) => {
            t(n.message);
          });
      }, []),
      M.jsx("div", {
        children: M.jsx("img", { src: e, alt: "a dog", width: "100%" }),
      })
    );
  },
  Nm = (e) => {
    const { onClick: t, children: n } = e;
    return M.jsx("button", {
      onClick: t,
      className: "suggestion-button",
      children: n,
    });
  },
  Om = (e) => {
    const t = Array.isArray(e.payload.options) ? e.payload.options : [];
    return M.jsx("div", {
      children: t.map((n, r) =>
        M.jsx(
          Nm,
          {
            onClick: () => e.actionProvider.handleClickOption(n),
            children: n.selection,
          },
          r
        )
      ),
    });
  },
  Tm = "Welcome to our Website!",
  Lm =
    "https://gist.githubusercontent.com/TobiasDanielAngelo/14be40fb30b2fae42eb28fff3f683cf1/raw/fc985a591df3c81c43d299f39d47afada42da2cd/questions.json",
  Rm = (e) => ({
    initialMessages: [
      fr.createChatBotMessage(Tm, {
        widget: "options",
        payload: { options: e.filter((t) => t.parentId === -1) },
      }),
    ],
    botName: "FlowmetricsBot",
    widgets: [
      { widgetName: "image", widgetFunc: (t) => M.jsx(Pm, { ...t }) },
      { widgetName: "options", widgetFunc: (t) => M.jsx(Om, { ...t }) },
      { widgetName: "email", widgetFunc: (t) => M.jsx(_m, { ...t }) },
    ],
  }),
  zm = (e) => {
    const { children: t, actions: n } = e,
      r = (l) => {
        l.includes("dog") && n.handleTextToImage();
      };
    return M.jsx("div", {
      children: Q.Children.map(t, (l) =>
        Q.cloneElement(l, { parse: r, actions: n })
      ),
    });
  };
function jm() {
  const [e, t] = Q.useState(!0),
    [n, r] = Q.useState([]),
    [l, o] = Q.useState(!0),
    i = { questions: n },
    u = Rm(n),
    s = async () => {
      try {
        const c = await fetch(Lm);
        if (!c.ok) throw new Error("Network response was not ok");
        const g = await c.text(),
          p = JSON.parse(g);
        r(p);
      } catch (c) {
        console.error("Error", c);
      } finally {
        o(!1);
      }
    };
  return (
    Q.useEffect(() => {
      s();
    }, []),
    l
      ? M.jsx(M.Fragment, { children: "Loading" })
      : M.jsx(cf.Provider, {
          value: i,
          children: M.jsxs("div", {
            children: [
              M.jsx("div", {
                style: {
                  height: "95vh",
                  overflow: "auto",
                  fontFamily: "sans-serif",
                },
              }),
              M.jsxs("div", {
                style: {
                  position: "fixed",
                  bottom: 10,
                  right: 10,
                  zIndex: 9999998,
                },
                className: "app",
                children: [
                  M.jsxs("div", {
                    style: { display: e ? "block" : "none" },
                    children: [
                      M.jsx("div", {
                        className: "close-button",
                        onClick: () => t(!1),
                        children: "×",
                      }),
                      M.jsx(Yp, {
                        config: u,
                        messageParser: zm,
                        actionProvider: Xp,
                      }),
                    ],
                  }),
                  M.jsx("button", {
                    className: "chatbot-button",
                    onClick: () => t(!0),
                    style: { display: e ? "none" : "block" },
                    children: M.jsx("span", {
                      className: "bot-icon",
                      children: "🤖",
                    }),
                  }),
                ],
              }),
            ],
          }),
        })
  );
}
uf(document.getElementById("react-root")).render(M.jsx(jm, {}));
