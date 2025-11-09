try {
	let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
		t = (new e.Error).stack;
	t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "72a8d0ef-eaeb-4491-933f-c514e3d9fe13", e._sentryDebugIdIdentifier = "sentry-dbid-72a8d0ef-eaeb-4491-933f-c514e3d9fe13")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
			[636], {
				511: (e, t, n) => {
					var a, i = function() {
						var e = String.fromCharCode,
							t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
							n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
							a = {};

						function i(e, t) {
							if (!a[e]) {
								a[e] = {};
								for (var n = 0; n < e.length; n++) a[e][e.charAt(n)] = n
							}
							return a[e][t]
						}
						var o = {
							compressToBase64: function(e) {
								if (null == e) return "";
								var n = o._compress(e, 6, function(e) {
									return t.charAt(e)
								});
								switch (n.length % 4) {
									default:
									case 0:
										return n;
									case 1:
										return n + "===";
									case 2:
										return n + "==";
									case 3:
										return n + "="
								}
							},
							decompressFromBase64: function(e) {
								return null == e ? "" : "" == e ? null : o._decompress(e.length, 32, function(n) {
									return i(t, e.charAt(n))
								})
							},
							compressToUTF16: function(t) {
								return null == t ? "" : o._compress(t, 15, function(t) {
									return e(t + 32)
								}) + " "
							},
							decompressFromUTF16: function(e) {
								return null == e ? "" : "" == e ? null : o._decompress(e.length, 16384, function(t) {
									return e.charCodeAt(t) - 32
								})
							},
							compressToUint8Array: function(e) {
								for (var t = o.compress(e), n = new Uint8Array(2 * t.length), a = 0, i = t.length; a < i; a++) {
									var s = t.charCodeAt(a);
									n[2 * a] = s >>> 8, n[2 * a + 1] = s % 256
								}
								return n
							},
							decompressFromUint8Array: function(t) {
								if (null == t) return o.decompress(t);
								for (var n = Array(t.length / 2), a = 0, i = n.length; a < i; a++) n[a] = 256 * t[2 * a] + t[2 * a + 1];
								var s = [];
								return n.forEach(function(t) {
									s.push(e(t))
								}), o.decompress(s.join(""))
							},
							compressToEncodedURIComponent: function(e) {
								return null == e ? "" : o._compress(e, 6, function(e) {
									return n.charAt(e)
								})
							},
							decompressFromEncodedURIComponent: function(e) {
								return null == e ? "" : "" == e ? null : (e = e.replace(/ /g, "+"), o._decompress(e.length, 32, function(t) {
									return i(n, e.charAt(t))
								}))
							},
							compress: function(t) {
								return o._compress(t, 16, function(t) {
									return e(t)
								})
							},
							_compress: function(e, t, n) {
								if (null == e) return "";
								var a, i, o, s = {},
									l = {},
									u = "",
									c = "",
									d = "",
									h = 2,
									m = 3,
									p = 2,
									f = [],
									g = 0,
									b = 0;
								for (o = 0; o < e.length; o += 1)
									if (u = e.charAt(o), Object.prototype.hasOwnProperty.call(s, u) || (s[u] = m++, l[u] = !0), c = d + u, Object.prototype.hasOwnProperty.call(s, c)) d = c;
									else {
										if (Object.prototype.hasOwnProperty.call(l, d)) {
											if (256 > d.charCodeAt(0)) {
												for (a = 0; a < p; a++) g <<= 1, b == t - 1 ? (b = 0, f.push(n(g)), g = 0) : b++;
												for (a = 0, i = d.charCodeAt(0); a < 8; a++) g = g << 1 | 1 & i, b == t - 1 ? (b = 0, f.push(n(g)), g = 0) : b++, i >>= 1
											} else {
												for (a = 0, i = 1; a < p; a++) g = g << 1 | i, b == t - 1 ? (b = 0, f.push(n(g)), g = 0) : b++, i = 0;
												for (a = 0, i = d.charCodeAt(0); a < 16; a++) g = g << 1 | 1 & i, b == t - 1 ? (b = 0, f.push(n(g)), g = 0) : b++, i >>= 1
											}
											0 == --h && (h = Math.pow(2, p), p++), delete l[d]
										} else
											for (a = 0, i = s[d]; a < p; a++) g = g << 1 | 1 & i, b == t - 1 ? (b = 0, f.push(n(g)), g = 0) : b++, i >>= 1;
										0 == --h && (h = Math.pow(2, p), p++), s[c] = m++, d = String(u)
									} if ("" !== d) {
									if (Object.prototype.hasOwnProperty.call(l, d)) {
										if (256 > d.charCodeAt(0)) {
											for (a = 0; a < p; a++) g <<= 1, b == t - 1 ? (b = 0, f.push(n(g)), g = 0) : b++;
											for (a = 0, i = d.charCodeAt(0); a < 8; a++) g = g << 1 | 1 & i, b == t - 1 ? (b = 0, f.push(n(g)), g = 0) : b++, i >>= 1
										} else {
											for (a = 0, i = 1; a < p; a++) g = g << 1 | i, b == t - 1 ? (b = 0, f.push(n(g)), g = 0) : b++, i = 0;
											for (a = 0, i = d.charCodeAt(0); a < 16; a++) g = g << 1 | 1 & i, b == t - 1 ? (b = 0, f.push(n(g)), g = 0) : b++, i >>= 1
										}
										0 == --h && (h = Math.pow(2, p), p++), delete l[d]
									} else
										for (a = 0, i = s[d]; a < p; a++) g = g << 1 | 1 & i, b == t - 1 ? (b = 0, f.push(n(g)), g = 0) : b++, i >>= 1;
									0 == --h && (h = Math.pow(2, p), p++)
								}
								for (a = 0, i = 2; a < p; a++) g = g << 1 | 1 & i, b == t - 1 ? (b = 0, f.push(n(g)), g = 0) : b++, i >>= 1;
								for (;;) {
									if (g <<= 1, b == t - 1) {
										f.push(n(g));
										break
									}
									b++
								}
								return f.join("")
							},
							decompress: function(e) {
								return null == e ? "" : "" == e ? null : o._decompress(e.length, 32768, function(t) {
									return e.charCodeAt(t)
								})
							},
							_decompress: function(t, n, a) {
								var i, o, s, l, u, c, d, h = [],
									m = 4,
									p = 4,
									f = 3,
									g = "",
									b = [],
									y = {
										val: a(0),
										position: n,
										index: 1
									};
								for (i = 0; i < 3; i += 1) h[i] = i;
								for (s = 0, u = 4, c = 1; c != u;) l = y.val & y.position, y.position >>= 1, 0 == y.position && (y.position = n, y.val = a(y.index++)), s |= (l > 0) * c, c <<= 1;
								switch (s) {
									case 0:
										for (s = 0, u = 256, c = 1; c != u;) l = y.val & y.position, y.position >>= 1, 0 == y.position && (y.position = n, y.val = a(y.index++)), s |= (l > 0) * c, c <<= 1;
										d = e(s);
										break;
									case 1:
										for (s = 0, u = 65536, c = 1; c != u;) l = y.val & y.position, y.position >>= 1, 0 == y.position && (y.position = n, y.val = a(y.index++)), s |= (l > 0) * c, c <<= 1;
										d = e(s);
										break;
									case 2:
										return ""
								}
								for (h[3] = d, o = d, b.push(d);;) {
									if (y.index > t) return "";
									for (s = 0, u = Math.pow(2, f), c = 1; c != u;) l = y.val & y.position, y.position >>= 1, 0 == y.position && (y.position = n, y.val = a(y.index++)), s |= (l > 0) * c, c <<= 1;
									switch (d = s) {
										case 0:
											for (s = 0, u = 256, c = 1; c != u;) l = y.val & y.position, y.position >>= 1, 0 == y.position && (y.position = n, y.val = a(y.index++)), s |= (l > 0) * c, c <<= 1;
											h[p++] = e(s), d = p - 1, m--;
											break;
										case 1:
											for (s = 0, u = 65536, c = 1; c != u;) l = y.val & y.position, y.position >>= 1, 0 == y.position && (y.position = n, y.val = a(y.index++)), s |= (l > 0) * c, c <<= 1;
											h[p++] = e(s), d = p - 1, m--;
											break;
										case 2:
											return b.join("")
									}
									if (0 == m && (m = Math.pow(2, f), f++), h[d]) g = h[d];
									else {
										if (d !== p) return null;
										g = o + o.charAt(0)
									}
									b.push(g), h[p++] = o + g.charAt(0), m--, o = g, 0 == m && (m = Math.pow(2, f), f++)
								}
							}
						};
						return o
					}();
					void 0 === (a = (function() {
						return i
					}).call(t, n, t, e)) || (e.exports = a)
				},
				783: function(e, t, n) {
					"use strict";
					var a = this && this.__importDefault || function(e) {
						return e && e.__esModule ? e : {
							default: e
						}
					};
					Object.defineProperty(t, "__esModule", {
						value: !0
					}), t.encodeNonAsciiHTML = t.encodeHTML = void 0;
					var i = a(n(61761)),
						o = n(42362),
						s = /[\t\n!-,./:-@[-`\f{-}$\x80-\uFFFF]/g;

					function l(e, t) {
						for (var n, a = "", s = 0; null !== (n = e.exec(t));) {
							var l = n.index;
							a += t.substring(s, l);
							var u = t.charCodeAt(l),
								c = i.default.get(u);
							if ("object" == typeof c) {
								if (l + 1 < t.length) {
									var d = t.charCodeAt(l + 1),
										h = "number" == typeof c.n ? c.n === d ? c.o : void 0 : c.n.get(d);
									if (void 0 !== h) {
										a += h, s = e.lastIndex += 1;
										continue
									}
								}
								c = c.v
							}
							if (void 0 !== c) a += c, s = l + 1;
							else {
								var m = (0, o.getCodePoint)(t, l);
								a += "&#x".concat(m.toString(16), ";"), s = e.lastIndex += Number(m !== u)
							}
						}
						return a + t.substr(s)
					}
					t.encodeHTML = function(e) {
						return l(s, e)
					}, t.encodeNonAsciiHTML = function(e) {
						return l(o.xmlReplacer, e)
					}
				},
				1025: (e, t) => {
					"use strict";
					Object.defineProperty(t, "__esModule", {
						value: !0
					}), t.default = void 0, t.default = {
						abstract: !1,
						accessibleNameRequired: !1,
						baseConcepts: [],
						childrenPresentational: !1,
						nameFrom: ["author"],
						prohibitedProps: [],
						props: {
							"aria-disabled": null,
							"aria-errormessage": null,
							"aria-expanded": null,
							"aria-haspopup": null,
							"aria-invalid": null
						},
						relatedConcepts: [{
							concept: {
								name: "notice [EPUB-SSV]"
							},
							module: "EPUB"
						}],
						requireContextRole: [],
						requiredContextRole: [],
						requiredOwnedElements: [],
						requiredProps: {},
						superClass: [
							["roletype", "structure", "section", "note"]
						]
					}
				},
				1102: (e, t, n) => {
					"use strict";
					let a;
					n.d(t, {
						fE: () => oU,
						wi: () => o7,
						Y9: () => sm,
						Hv: () => sf
					});
					var i = n(74784),
						o = n(88862),
						s = n(62464),
						l = n(62706),
						u = n(39950),
						c = n(45182),
						d = n(2234);
					let h = (0, u.createContext)({});

					function m(e) {
						let t = (0, u.useRef)(null);
						return null === t.current && (t.current = e()), t.current
					}
					let p = "undefined" != typeof window,
						f = p ? u.useLayoutEffect : u.useEffect,
						g = (0, u.createContext)(null);

					function b(e) {
						return "object" == typeof e && null !== e
					}

					function y(e) {
						return b(e) && "offsetHeight" in e
					}
					let v = (0, u.createContext)({
						transformPagePoint: e => e,
						isStatic: !1,
						reducedMotion: "never"
					});
					class k extends u.Component {
						getSnapshotBeforeUpdate(e) {
							let t = this.props.childRef.current;
							if (t && e.isPresent && !this.props.isPresent) {
								let e = t.offsetParent,
									n = y(e) && e.offsetWidth || 0,
									a = this.props.sizeRef.current;
								a.height = t.offsetHeight || 0, a.width = t.offsetWidth || 0, a.top = t.offsetTop, a.left = t.offsetLeft, a.right = n - a.width - a.left
							}
							return null
						}
						componentDidUpdate() {}
						render() {
							return this.props.children
						}
					}

					function w({
						children: e,
						isPresent: t,
						anchorX: n,
						root: a
					}) {
						let i = (0, u.useId)(),
							o = (0, u.useRef)(null),
							s = (0, u.useRef)({
								width: 0,
								height: 0,
								top: 0,
								left: 0,
								right: 0
							}),
							{
								nonce: l
							} = (0, u.useContext)(v);
						return (0, u.useInsertionEffect)(() => {
							let {
								width: e,
								height: u,
								top: c,
								left: d,
								right: h
							} = s.current;
							if (t || !o.current || !e || !u) return;
							let m = "left" === n ? `left: ${d}` : `right: ${h}`;
							o.current.dataset.motionPopId = i;
							let p = document.createElement("style");
							l && (p.nonce = l);
							let f = a ?? document.head;
							return f.appendChild(p), p.sheet && p.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${u}px !important;
            ${m}px !important;
            top: ${c}px !important;
          }
        `), () => {
								f.contains(p) && f.removeChild(p)
							}
						}, [t]), (0, c.jsx)(k, {
							isPresent: t,
							childRef: o,
							sizeRef: s,
							children: u.cloneElement(e, {
								ref: o
							})
						})
					}
					let x = ({
						children: e,
						initial: t,
						isPresent: n,
						onExitComplete: a,
						custom: i,
						presenceAffectsLayout: o,
						mode: s,
						anchorX: l,
						root: d
					}) => {
						let h = m(j),
							p = (0, u.useId)(),
							f = !0,
							b = (0, u.useMemo)(() => (f = !1, {
								id: p,
								initial: t,
								isPresent: n,
								custom: i,
								onExitComplete: e => {
									for (let t of (h.set(e, !0), h.values()))
										if (!t) return;
									a && a()
								},
								register: e => (h.set(e, !1), () => h.delete(e))
							}), [n, h, a]);
						return o && f && (b = {
							...b
						}), (0, u.useMemo)(() => {
							h.forEach((e, t) => h.set(t, !1))
						}, [n]), u.useEffect(() => {
							n || h.size || !a || a()
						}, [n]), "popLayout" === s && (e = (0, c.jsx)(w, {
							isPresent: n,
							anchorX: l,
							root: d,
							children: e
						})), (0, c.jsx)(g.Provider, {
							value: b,
							children: e
						})
					};

					function j() {
						return new Map
					}

					function S(e = !0) {
						let t = (0, u.useContext)(g);
						if (null === t) return [!0, null];
						let {
							isPresent: n,
							onExitComplete: a,
							register: i
						} = t, o = (0, u.useId)();
						(0, u.useEffect)(() => {
							if (e) return i(o)
						}, [e]);
						let s = (0, u.useCallback)(() => e && a && a(o), [o, a, e]);
						return !n && a ? [!1, s] : [!0]
					}
					let E = e => e.key || "";

					function C(e) {
						let t = [];
						return u.Children.forEach(e, e => {
							(0, u.isValidElement)(e) && t.push(e)
						}), t
					}
					let A = ({
							children: e,
							custom: t,
							initial: n = !0,
							onExitComplete: a,
							presenceAffectsLayout: i = !0,
							mode: o = "sync",
							propagate: s = !1,
							anchorX: l = "left",
							root: d
						}) => {
							let [p, g] = S(s), b = (0, u.useMemo)(() => C(e), [e]), y = s && !p ? [] : b.map(E), v = (0, u.useRef)(!0), k = (0, u.useRef)(b), w = m(() => new Map), [j, A] = (0, u.useState)(b), [_, T] = (0, u.useState)(b);
							f(() => {
								v.current = !1, k.current = b;
								for (let e = 0; e < _.length; e++) {
									let t = E(_[e]);
									y.includes(t) ? w.delete(t) : !0 !== w.get(t) && w.set(t, !1)
								}
							}, [_, y.length, y.join("-")]);
							let N = [];
							if (b !== j) {
								let e = [...b];
								for (let t = 0; t < _.length; t++) {
									let n = _[t],
										a = E(n);
									y.includes(a) || (e.splice(t, 0, n), N.push(n))
								}
								return "wait" === o && N.length && (e = N), T(C(e)), A(b), null
							}
							let {
								forceRender: I
							} = (0, u.useContext)(h);
							return (0, c.jsx)(c.Fragment, {
								children: _.map(e => {
									let u = E(e),
										h = (!s || !!p) && (b === _ || y.includes(u));
									return (0, c.jsx)(x, {
										isPresent: h,
										initial: (!v.current || !!n) && void 0,
										custom: t,
										presenceAffectsLayout: i,
										mode: o,
										root: d,
										onExitComplete: h ? void 0 : () => {
											if (!w.has(u)) return;
											w.set(u, !0);
											let e = !0;
											w.forEach(t => {
												t || (e = !1)
											}), e && (I?.(), T(k.current), s && g?.(), a && a())
										},
										anchorX: l,
										children: e
									}, u)
								})
							})
						},
						_ = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
						T = new Set(_),
						N = e => 180 * e / Math.PI,
						I = e => P(N(Math.atan2(e[1], e[0]))),
						O = {
							x: 4,
							y: 5,
							translateX: 4,
							translateY: 5,
							scaleX: 0,
							scaleY: 3,
							scale: e => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
							rotate: I,
							rotateZ: I,
							skewX: e => N(Math.atan(e[1])),
							skewY: e => N(Math.atan(e[2])),
							skew: e => (Math.abs(e[1]) + Math.abs(e[2])) / 2
						},
						P = e => ((e %= 360) < 0 && (e += 360), e),
						M = e => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
						R = e => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
						D = {
							x: 12,
							y: 13,
							z: 14,
							translateX: 12,
							translateY: 13,
							translateZ: 14,
							scaleX: M,
							scaleY: R,
							scale: e => (M(e) + R(e)) / 2,
							rotateX: e => P(N(Math.atan2(e[6], e[5]))),
							rotateY: e => P(N(Math.atan2(-e[2], e[0]))),
							rotateZ: I,
							rotate: I,
							skewX: e => N(Math.atan(e[4])),
							skewY: e => N(Math.atan(e[1])),
							skew: e => (Math.abs(e[1]) + Math.abs(e[4])) / 2
						};

					function z(e) {
						return +!!e.includes("scale")
					}

					function F(e, t) {
						let n, a;
						if (!e || "none" === e) return z(t);
						let i = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
						if (i) n = D, a = i;
						else {
							let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
							n = O, a = t
						}
						if (!a) return z(t);
						let o = n[t],
							s = a[1].split(",").map(L);
						return "function" == typeof o ? o(s) : s[o]
					}

					function L(e) {
						return parseFloat(e.trim())
					}
					let q = e => t => "string" == typeof t && t.startsWith(e),
						$ = q("--"),
						B = q("var(--"),
						U = e => !!B(e) && V.test(e.split("/*")[0].trim()),
						V = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;

					function H({
						top: e,
						left: t,
						right: n,
						bottom: a
					}) {
						return {
							x: {
								min: t,
								max: n
							},
							y: {
								min: e,
								max: a
							}
						}
					}
					let W = (e, t, n) => e + (t - e) * n;

					function G(e) {
						return void 0 === e || 1 === e
					}

					function Y({
						scale: e,
						scaleX: t,
						scaleY: n
					}) {
						return !G(e) || !G(t) || !G(n)
					}

					function K(e) {
						return Y(e) || Q(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
					}

					function Q(e) {
						var t, n;
						return (t = e.x) && "0%" !== t || (n = e.y) && "0%" !== n
					}

					function Z(e, t, n, a, i) {
						return void 0 !== i && (e = a + i * (e - a)), a + n * (e - a) + t
					}

					function J(e, t = 0, n = 1, a, i) {
						e.min = Z(e.min, t, n, a, i), e.max = Z(e.max, t, n, a, i)
					}

					function X(e, {
						x: t,
						y: n
					}) {
						J(e.x, t.translate, t.scale, t.originPoint), J(e.y, n.translate, n.scale, n.originPoint)
					}

					function ee(e, t) {
						e.min = e.min + t, e.max = e.max + t
					}

					function et(e, t, n, a, i = .5) {
						let o = W(e.min, e.max, i);
						J(e, t, n, o, a)
					}

					function en(e, t) {
						et(e.x, t.x, t.scaleX, t.scale, t.originX), et(e.y, t.y, t.scaleY, t.scale, t.originY)
					}

					function er(e, t) {
						return H(function(e, t) {
							if (!t) return e;
							let n = t({
									x: e.left,
									y: e.top
								}),
								a = t({
									x: e.right,
									y: e.bottom
								});
							return {
								top: n.y,
								left: n.x,
								bottom: a.y,
								right: a.x
							}
						}(e.getBoundingClientRect(), t))
					}
					let ea = new Set(["width", "height", "top", "left", "right", "bottom", ..._]),
						ei = (e, t, n) => n > t ? t : n < e ? e : n,
						eo = {
							test: e => "number" == typeof e,
							parse: parseFloat,
							transform: e => e
						},
						es = {
							...eo,
							transform: e => ei(0, 1, e)
						},
						el = {
							...eo,
							default: 1
						},
						eu = e => ({
							test: t => "string" == typeof t && t.endsWith(e) && 1 === t.split(" ").length,
							parse: parseFloat,
							transform: t => `${t}${e}`
						}),
						ec = eu("deg"),
						ed = eu("%"),
						eh = eu("px"),
						em = eu("vh"),
						ep = eu("vw"),
						ef = {
							...ed,
							parse: e => ed.parse(e) / 100,
							transform: e => ed.transform(100 * e)
						},
						eg = e => t => t.test(e),
						eb = [eo, eh, ed, ec, ep, em, {
							test: e => "auto" === e,
							parse: e => e
						}],
						ey = e => eb.find(eg(e)),
						ev = () => {},
						ek = () => {},
						ew = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
						ex = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
						ej = e => e === eo || e === eh,
						eS = new Set(["x", "y", "z"]),
						eE = _.filter(e => !eS.has(e)),
						eC = {
							width: ({
								x: e
							}, {
								paddingLeft: t = "0",
								paddingRight: n = "0"
							}) => e.max - e.min - parseFloat(t) - parseFloat(n),
							height: ({
								y: e
							}, {
								paddingTop: t = "0",
								paddingBottom: n = "0"
							}) => e.max - e.min - parseFloat(t) - parseFloat(n),
							top: (e, {
								top: t
							}) => parseFloat(t),
							left: (e, {
								left: t
							}) => parseFloat(t),
							bottom: ({
								y: e
							}, {
								top: t
							}) => parseFloat(t) + (e.max - e.min),
							right: ({
								x: e
							}, {
								left: t
							}) => parseFloat(t) + (e.max - e.min),
							x: (e, {
								transform: t
							}) => F(t, "x"),
							y: (e, {
								transform: t
							}) => F(t, "y")
						};
					eC.translateX = eC.x, eC.translateY = eC.y;
					let eA = e => e,
						e_ = {},
						eT = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"],
						eN = {
							value: null,
							addProjectionMetrics: null
						};

					function eI(e, t) {
						let n = !1,
							a = !0,
							i = {
								delta: 0,
								timestamp: 0,
								isProcessing: !1
							},
							o = () => n = !0,
							s = eT.reduce((e, n) => (e[n] = function(e, t) {
								let n = new Set,
									a = new Set,
									i = !1,
									o = !1,
									s = new WeakSet,
									l = {
										delta: 0,
										timestamp: 0,
										isProcessing: !1
									},
									u = 0;

								function c(t) {
									s.has(t) && (d.schedule(t), e()), u++, t(l)
								}
								let d = {
									schedule: (e, t = !1, o = !1) => {
										let l = o && i ? n : a;
										return t && s.add(e), l.has(e) || l.add(e), e
									},
									cancel: e => {
										a.delete(e), s.delete(e)
									},
									process: e => {
										if (l = e, i) {
											o = !0;
											return
										}
										i = !0, [n, a] = [a, n], n.forEach(c), t && eN.value && eN.value.frameloop[t].push(u), u = 0, n.clear(), i = !1, o && (o = !1, d.process(e))
									}
								};
								return d
							}(o, t ? n : void 0), e), {}),
							{
								setup: l,
								read: u,
								resolveKeyframes: c,
								preUpdate: d,
								update: h,
								preRender: m,
								render: p,
								postRender: f
							} = s,
							g = () => {
								let o = e_.useManualTiming ? i.timestamp : performance.now();
								n = !1, e_.useManualTiming || (i.delta = a ? 1e3 / 60 : Math.max(Math.min(o - i.timestamp, 40), 1)), i.timestamp = o, i.isProcessing = !0, l.process(i), u.process(i), c.process(i), d.process(i), h.process(i), m.process(i), p.process(i), f.process(i), i.isProcessing = !1, n && t && (a = !1, e(g))
							};
						return {
							schedule: eT.reduce((t, o) => {
								let l = s[o];
								return t[o] = (t, o = !1, s = !1) => (!n && (n = !0, a = !0, i.isProcessing || e(g)), l.schedule(t, o, s)), t
							}, {}),
							cancel: e => {
								for (let t = 0; t < eT.length; t++) s[eT[t]].cancel(e)
							},
							state: i,
							steps: s
						}
					}
					let {
						schedule: eO,
						cancel: eP,
						state: eM,
						steps: eR
					} = eI("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : eA, !0), eD = new Set, ez = !1, eF = !1, eL = !1;

					function eq() {
						if (eF) {
							let e = Array.from(eD).filter(e => e.needsMeasurement),
								t = new Set(e.map(e => e.element)),
								n = new Map;
							t.forEach(e => {
								let t = function(e) {
									let t = [];
									return eE.forEach(n => {
										let a = e.getValue(n);
										void 0 !== a && (t.push([n, a.get()]), a.set(+!!n.startsWith("scale")))
									}), t
								}(e);
								t.length && (n.set(e, t), e.render())
							}), e.forEach(e => e.measureInitialState()), t.forEach(e => {
								e.render();
								let t = n.get(e);
								t && t.forEach(([t, n]) => {
									e.getValue(t)?.set(n)
								})
							}), e.forEach(e => e.measureEndState()), e.forEach(e => {
								void 0 !== e.suspendedScrollY && window.scrollTo(0, e.suspendedScrollY)
							})
						}
						eF = !1, ez = !1, eD.forEach(e => e.complete(eL)), eD.clear()
					}

					function e$() {
						eD.forEach(e => {
							e.readKeyframes(), e.needsMeasurement && (eF = !0)
						})
					}
					class eB {
						constructor(e, t, n, a, i, o = !1) {
							this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = t, this.name = n, this.motionValue = a, this.element = i, this.isAsync = o
						}
						scheduleResolve() {
							this.state = "scheduled", this.isAsync ? (eD.add(this), ez || (ez = !0, eO.read(e$), eO.resolveKeyframes(eq))) : (this.readKeyframes(), this.complete())
						}
						readKeyframes() {
							let {
								unresolvedKeyframes: e,
								name: t,
								element: n,
								motionValue: a
							} = this;
							if (null === e[0]) {
								let i = a?.get(),
									o = e[e.length - 1];
								if (void 0 !== i) e[0] = i;
								else if (n && t) {
									let a = n.readValue(t, o);
									null != a && (e[0] = a)
								}
								void 0 === e[0] && (e[0] = o), a && void 0 === i && a.set(e[0])
							}
							for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1])
						}
						setFinalKeyframe() {}
						measureInitialState() {}
						renderEndStyles() {}
						measureEndState() {}
						complete(e = !1) {
							this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), eD.delete(this)
						}
						cancel() {
							"scheduled" === this.state && (eD.delete(this), this.state = "pending")
						}
						resume() {
							"pending" === this.state && this.scheduleResolve()
						}
					}
					let eU = e => /^0[^.\s]+$/u.test(e),
						eV = e => Math.round(1e5 * e) / 1e5,
						eH = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
						eW = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
						eG = (e, t) => n => !!("string" == typeof n && eW.test(n) && n.startsWith(e) || t && null != n && Object.prototype.hasOwnProperty.call(n, t)),
						eY = (e, t, n) => a => {
							if ("string" != typeof a) return a;
							let [i, o, s, l] = a.match(eH);
							return {
								[e]: parseFloat(i),
								[t]: parseFloat(o),
								[n]: parseFloat(s),
								alpha: void 0 !== l ? parseFloat(l) : 1
							}
						},
						eK = {
							...eo,
							transform: e => Math.round(ei(0, 255, e))
						},
						eQ = {
							test: eG("rgb", "red"),
							parse: eY("red", "green", "blue"),
							transform: ({
								red: e,
								green: t,
								blue: n,
								alpha: a = 1
							}) => "rgba(" + eK.transform(e) + ", " + eK.transform(t) + ", " + eK.transform(n) + ", " + eV(es.transform(a)) + ")"
						},
						eZ = {
							test: eG("#"),
							parse: function(e) {
								let t = "",
									n = "",
									a = "",
									i = "";
								return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), a = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), a = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, a += a, i += i), {
									red: parseInt(t, 16),
									green: parseInt(n, 16),
									blue: parseInt(a, 16),
									alpha: i ? parseInt(i, 16) / 255 : 1
								}
							},
							transform: eQ.transform
						},
						eJ = {
							test: eG("hsl", "hue"),
							parse: eY("hue", "saturation", "lightness"),
							transform: ({
								hue: e,
								saturation: t,
								lightness: n,
								alpha: a = 1
							}) => "hsla(" + Math.round(e) + ", " + ed.transform(eV(t)) + ", " + ed.transform(eV(n)) + ", " + eV(es.transform(a)) + ")"
						},
						eX = {
							test: e => eQ.test(e) || eZ.test(e) || eJ.test(e),
							parse: e => eQ.test(e) ? eQ.parse(e) : eJ.test(e) ? eJ.parse(e) : eZ.parse(e),
							transform: e => "string" == typeof e ? e : e.hasOwnProperty("red") ? eQ.transform(e) : eJ.transform(e),
							getAnimatableNone: e => {
								let t = eX.parse(e);
								return t.alpha = 0, eX.transform(t)
							}
						},
						e1 = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
						e0 = "number",
						e2 = "color",
						e3 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

					function e4(e) {
						let t = e.toString(),
							n = [],
							a = {
								color: [],
								number: [],
								var: []
							},
							i = [],
							o = 0,
							s = t.replace(e3, e => (eX.test(e) ? (a.color.push(o), i.push(e2), n.push(eX.parse(e))) : e.startsWith("var(") ? (a.var.push(o), i.push("var"), n.push(e)) : (a.number.push(o), i.push(e0), n.push(parseFloat(e))), ++o, "${}")).split("${}");
						return {
							values: n,
							split: s,
							indexes: a,
							types: i
						}
					}

					function e9(e) {
						return e4(e).values
					}

					function e5(e) {
						let {
							split: t,
							types: n
						} = e4(e), a = t.length;
						return e => {
							let i = "";
							for (let o = 0; o < a; o++)
								if (i += t[o], void 0 !== e[o]) {
									let t = n[o];
									t === e0 ? i += eV(e[o]) : t === e2 ? i += eX.transform(e[o]) : i += e[o]
								} return i
						}
					}
					let e6 = e => "number" == typeof e ? 0 : eX.test(e) ? eX.getAnimatableNone(e) : e,
						e8 = {
							test: function(e) {
								return isNaN(e) && "string" == typeof e && (e.match(eH)?.length || 0) + (e.match(e1)?.length || 0) > 0
							},
							parse: e9,
							createTransformer: e5,
							getAnimatableNone: function(e) {
								let t = e9(e);
								return e5(e)(t.map(e6))
							}
						},
						e7 = new Set(["brightness", "contrast", "saturate", "opacity"]);

					function te(e) {
						let [t, n] = e.slice(0, -1).split("(");
						if ("drop-shadow" === t) return e;
						let [a] = n.match(eH) || [];
						if (!a) return e;
						let i = n.replace(a, ""),
							o = +!!e7.has(t);
						return a !== n && (o *= 100), t + "(" + o + i + ")"
					}
					let tt = /\b([a-z-]*)\(.*?\)/gu,
						tn = {
							...e8,
							getAnimatableNone: e => {
								let t = e.match(tt);
								return t ? t.map(te).join(" ") : e
							}
						},
						tr = {
							...eo,
							transform: Math.round
						},
						ta = {
							borderWidth: eh,
							borderTopWidth: eh,
							borderRightWidth: eh,
							borderBottomWidth: eh,
							borderLeftWidth: eh,
							borderRadius: eh,
							radius: eh,
							borderTopLeftRadius: eh,
							borderTopRightRadius: eh,
							borderBottomRightRadius: eh,
							borderBottomLeftRadius: eh,
							width: eh,
							maxWidth: eh,
							height: eh,
							maxHeight: eh,
							top: eh,
							right: eh,
							bottom: eh,
							left: eh,
							padding: eh,
							paddingTop: eh,
							paddingRight: eh,
							paddingBottom: eh,
							paddingLeft: eh,
							margin: eh,
							marginTop: eh,
							marginRight: eh,
							marginBottom: eh,
							marginLeft: eh,
							backgroundPositionX: eh,
							backgroundPositionY: eh,
							rotate: ec,
							rotateX: ec,
							rotateY: ec,
							rotateZ: ec,
							scale: el,
							scaleX: el,
							scaleY: el,
							scaleZ: el,
							skew: ec,
							skewX: ec,
							skewY: ec,
							distance: eh,
							translateX: eh,
							translateY: eh,
							translateZ: eh,
							x: eh,
							y: eh,
							z: eh,
							perspective: eh,
							transformPerspective: eh,
							opacity: es,
							originX: ef,
							originY: ef,
							originZ: eh,
							zIndex: tr,
							fillOpacity: es,
							strokeOpacity: es,
							numOctaves: tr
						},
						ti = {
							...ta,
							color: eX,
							backgroundColor: eX,
							outlineColor: eX,
							fill: eX,
							stroke: eX,
							borderColor: eX,
							borderTopColor: eX,
							borderRightColor: eX,
							borderBottomColor: eX,
							borderLeftColor: eX,
							filter: tn,
							WebkitFilter: tn
						},
						to = e => ti[e];

					function ts(e, t) {
						let n = to(e);
						return n !== tn && (n = e8), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
					}
					let tl = new Set(["auto", "none", "0"]);
					class tu extends eB {
						constructor(e, t, n, a, i) {
							super(e, t, n, a, i, !0)
						}
						readKeyframes() {
							let {
								unresolvedKeyframes: e,
								element: t,
								name: n
							} = this;
							if (!t || !t.current) return;
							super.readKeyframes();
							for (let n = 0; n < e.length; n++) {
								let a = e[n];
								if ("string" == typeof a && U(a = a.trim())) {
									let i = function e(t, n, a = 1) {
										ek(a <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
										let [i, o] = function(e) {
											let t = ex.exec(e);
											if (!t) return [, ];
											let [, n, a, i] = t;
											return [`--${n??a}`, i]
										}(t);
										if (!i) return;
										let s = window.getComputedStyle(n).getPropertyValue(i);
										if (s) {
											let e = s.trim();
											return ew(e) ? parseFloat(e) : e
										}
										return U(o) ? e(o, n, a + 1) : o
									}(a, t.current);
									void 0 !== i && (e[n] = i), n === e.length - 1 && (this.finalKeyframe = a)
								}
							}
							if (this.resolveNoneKeyframes(), !ea.has(n) || 2 !== e.length) return;
							let [a, i] = e, o = ey(a), s = ey(i);
							if (o !== s)
								if (ej(o) && ej(s))
									for (let t = 0; t < e.length; t++) {
										let n = e[t];
										"string" == typeof n && (e[t] = parseFloat(n))
									} else eC[n] && (this.needsMeasurement = !0)
						}
						resolveNoneKeyframes() {
							let {
								unresolvedKeyframes: e,
								name: t
							} = this, n = [];
							for (let t = 0; t < e.length; t++) {
								var a;
								(null === e[t] || ("number" == typeof(a = e[t]) ? 0 === a : null === a || "none" === a || "0" === a || eU(a))) && n.push(t)
							}
							n.length && function(e, t, n) {
								let a, i = 0;
								for (; i < e.length && !a;) {
									let t = e[i];
									"string" == typeof t && !tl.has(t) && e4(t).values.length && (a = e[i]), i++
								}
								if (a && n)
									for (let i of t) e[i] = ts(n, a)
							}(e, n, t)
						}
						measureInitialState() {
							let {
								element: e,
								unresolvedKeyframes: t,
								name: n
							} = this;
							if (!e || !e.current) return;
							"height" === n && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = eC[n](e.measureViewportBox(), window.getComputedStyle(e.current)), t[0] = this.measuredOrigin;
							let a = t[t.length - 1];
							void 0 !== a && e.getValue(n, a).jump(a, !1)
						}
						measureEndState() {
							let {
								element: e,
								name: t,
								unresolvedKeyframes: n
							} = this;
							if (!e || !e.current) return;
							let a = e.getValue(t);
							a && a.jump(this.measuredOrigin, !1);
							let i = n.length - 1,
								o = n[i];
							n[i] = eC[t](e.measureViewportBox(), window.getComputedStyle(e.current)), null !== o && void 0 === this.finalKeyframe && (this.finalKeyframe = o), this.removedTransforms?.length && this.removedTransforms.forEach(([t, n]) => {
								e.getValue(t).set(n)
							}), this.resolveNoneKeyframes()
						}
					}
					let tc = e => !!(e && e.getVelocity);

					function td() {
						a = void 0
					}
					let th = {
						now: () => (void 0 === a && th.set(eM.isProcessing || e_.useManualTiming ? eM.timestamp : performance.now()), a),
						set: e => {
							a = e, queueMicrotask(td)
						}
					};

					function tm(e, t) {
						-1 === e.indexOf(t) && e.push(t)
					}

					function tp(e, t) {
						let n = e.indexOf(t);
						n > -1 && e.splice(n, 1)
					}
					class tf {
						constructor() {
							this.subscriptions = []
						}
						add(e) {
							return tm(this.subscriptions, e), () => tp(this.subscriptions, e)
						}
						notify(e, t, n) {
							let a = this.subscriptions.length;
							if (a)
								if (1 === a) this.subscriptions[0](e, t, n);
								else
									for (let i = 0; i < a; i++) {
										let a = this.subscriptions[i];
										a && a(e, t, n)
									}
						}
						getSize() {
							return this.subscriptions.length
						}
						clear() {
							this.subscriptions.length = 0
						}
					}
					let tg = {
						current: void 0
					};
					class tb {
						constructor(e, t = {}) {
							this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = e => {
								let t = th.now();
								if (this.updatedAt !== t && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(e), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
									for (let e of this.dependents) e.dirty()
							}, this.hasAnimated = !1, this.setCurrent(e), this.owner = t.owner
						}
						setCurrent(e) {
							this.current = e, this.updatedAt = th.now(), null === this.canTrackVelocity && void 0 !== e && (this.canTrackVelocity = !isNaN(parseFloat(this.current)))
						}
						setPrevFrameValue(e = this.current) {
							this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt
						}
						onChange(e) {
							return this.on("change", e)
						}
						on(e, t) {
							this.events[e] || (this.events[e] = new tf);
							let n = this.events[e].add(t);
							return "change" === e ? () => {
								n(), eO.read(() => {
									this.events.change.getSize() || this.stop()
								})
							} : n
						}
						clearListeners() {
							for (let e in this.events) this.events[e].clear()
						}
						attach(e, t) {
							this.passiveEffect = e, this.stopPassiveEffect = t
						}
						set(e) {
							this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e)
						}
						setWithVelocity(e, t, n) {
							this.set(t), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - n
						}
						jump(e, t = !0) {
							this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, t && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
						}
						dirty() {
							this.events.change?.notify(this.current)
						}
						addDependent(e) {
							this.dependents || (this.dependents = new Set), this.dependents.add(e)
						}
						removeDependent(e) {
							this.dependents && this.dependents.delete(e)
						}
						get() {
							return tg.current && tg.current.push(this), this.current
						}
						getPrevious() {
							return this.prev
						}
						getVelocity() {
							var e;
							let t = th.now();
							if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t - this.updatedAt > 30) return 0;
							let n = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
							return e = parseFloat(this.current) - parseFloat(this.prevFrameValue), n ? 1e3 / n * e : 0
						}
						start(e) {
							return this.stop(), new Promise(t => {
								this.hasAnimated = !0, this.animation = e(t), this.events.animationStart && this.events.animationStart.notify()
							}).then(() => {
								this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
							})
						}
						stop() {
							this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
						}
						isAnimating() {
							return !!this.animation
						}
						clearAnimation() {
							delete this.animation
						}
						destroy() {
							this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
						}
					}

					function ty(e, t) {
						return new tb(e, t)
					}
					let tv = [...eb, eX, e8],
						{
							schedule: tk
						} = eI(queueMicrotask, !1),
						tw = {
							animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
							exit: ["exit"],
							drag: ["drag", "dragControls"],
							focus: ["whileFocus"],
							hover: ["whileHover", "onHoverStart", "onHoverEnd"],
							tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
							pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
							inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
							layout: ["layout", "layoutId"]
						},
						tx = {};
					for (let e in tw) tx[e] = {
						isEnabled: t => tw[e].some(e => !!t[e])
					};
					let tj = () => ({
							translate: 0,
							scale: 1,
							origin: 0,
							originPoint: 0
						}),
						tS = () => ({
							x: tj(),
							y: tj()
						}),
						tE = () => ({
							min: 0,
							max: 0
						}),
						tC = () => ({
							x: tE(),
							y: tE()
						}),
						tA = {
							current: null
						},
						t_ = {
							current: !1
						},
						tT = new WeakMap;

					function tN(e) {
						return null !== e && "object" == typeof e && "function" == typeof e.start
					}

					function tI(e) {
						return "string" == typeof e || Array.isArray(e)
					}
					let tO = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
						tP = ["initial", ...tO];

					function tM(e) {
						return tN(e.animate) || tP.some(t => tI(e[t]))
					}

					function tR(e) {
						return !!(tM(e) || e.variants)
					}

					function tD(e) {
						let t = [{}, {}];
						return e?.values.forEach((e, n) => {
							t[0][n] = e.get(), t[1][n] = e.getVelocity()
						}), t
					}

					function tz(e, t, n, a) {
						if ("function" == typeof t) {
							let [i, o] = tD(a);
							t = t(void 0 !== n ? n : e.custom, i, o)
						}
						if ("string" == typeof t && (t = e.variants && e.variants[t]), "function" == typeof t) {
							let [i, o] = tD(a);
							t = t(void 0 !== n ? n : e.custom, i, o)
						}
						return t
					}
					let tF = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
					class tL {
						scrapeMotionValuesFromProps(e, t, n) {
							return {}
						}
						constructor({
							parent: e,
							props: t,
							presenceContext: n,
							reducedMotionConfig: a,
							blockInitialAnimation: i,
							visualState: o
						}, s = {}) {
							this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = eB, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
								this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
							}, this.renderScheduledAt = 0, this.scheduleRender = () => {
								let e = th.now();
								this.renderScheduledAt < e && (this.renderScheduledAt = e, eO.render(this.render, !1, !0))
							};
							let {
								latestValues: l,
								renderState: u
							} = o;
							this.latestValues = l, this.baseTarget = {
								...l
							}, this.initialValues = t.initial ? {
								...l
							} : {}, this.renderState = u, this.parent = e, this.props = t, this.presenceContext = n, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = a, this.options = s, this.blockInitialAnimation = !!i, this.isControllingVariants = tM(t), this.isVariantNode = tR(t), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(e && e.current);
							let {
								willChange: c,
								...d
							} = this.scrapeMotionValuesFromProps(t, {}, this);
							for (let e in d) {
								let t = d[e];
								void 0 !== l[e] && tc(t) && t.set(l[e])
							}
						}
						mount(e) {
							this.current = e, tT.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((e, t) => this.bindToMotionValue(t, e)), t_.current || function() {
								if (t_.current = !0, p)
									if (window.matchMedia) {
										let e = window.matchMedia("(prefers-reduced-motion)"),
											t = () => tA.current = e.matches;
										e.addEventListener("change", t), t()
									} else tA.current = !1
							}(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || tA.current), this.parent?.addChild(this), this.update(this.props, this.presenceContext)
						}
						unmount() {
							for (let e in this.projection && this.projection.unmount(), eP(this.notifyUpdate), eP(this.render), this.valueSubscriptions.forEach(e => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this), this.events) this.events[e].clear();
							for (let e in this.features) {
								let t = this.features[e];
								t && (t.unmount(), t.isMounted = !1)
							}
							this.current = null
						}
						addChild(e) {
							this.children.add(e), this.enteringChildren ?? (this.enteringChildren = new Set), this.enteringChildren.add(e)
						}
						removeChild(e) {
							this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e)
						}
						bindToMotionValue(e, t) {
							let n;
							this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
							let a = T.has(e);
							a && this.onBindTransform && this.onBindTransform();
							let i = t.on("change", t => {
								this.latestValues[e] = t, this.props.onUpdate && eO.preRender(this.notifyUpdate), a && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender()
							});
							window.MotionCheckAppearSync && (n = window.MotionCheckAppearSync(this, e, t)), this.valueSubscriptions.set(e, () => {
								i(), n && n(), t.owner && t.stop()
							})
						}
						sortNodePosition(e) {
							return this.current && this.sortInstanceNodePosition && this.type === e.type ? this.sortInstanceNodePosition(this.current, e.current) : 0
						}
						updateFeatures() {
							let e = "animation";
							for (e in tx) {
								let t = tx[e];
								if (!t) continue;
								let {
									isEnabled: n,
									Feature: a
								} = t;
								if (!this.features[e] && a && n(this.props) && (this.features[e] = new a(this)), this.features[e]) {
									let t = this.features[e];
									t.isMounted ? t.update() : (t.mount(), t.isMounted = !0)
								}
							}
						}
						triggerBuild() {
							this.build(this.renderState, this.latestValues, this.props)
						}
						measureViewportBox() {
							return this.current ? this.measureInstanceViewportBox(this.current, this.props) : tC()
						}
						getStaticValue(e) {
							return this.latestValues[e]
						}
						setStaticValue(e, t) {
							this.latestValues[e] = t
						}
						update(e, t) {
							(e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = t;
							for (let t = 0; t < tF.length; t++) {
								let n = tF[t];
								this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
								let a = e["on" + n];
								a && (this.propEventSubscriptions[n] = this.on(n, a))
							}
							this.prevMotionValues = function(e, t, n) {
								for (let a in t) {
									let i = t[a],
										o = n[a];
									if (tc(i)) e.addValue(a, i);
									else if (tc(o)) e.addValue(a, ty(i, {
										owner: e
									}));
									else if (o !== i)
										if (e.hasValue(a)) {
											let t = e.getValue(a);
											!0 === t.liveStyle ? t.jump(i) : t.hasAnimated || t.set(i)
										} else {
											let t = e.getStaticValue(a);
											e.addValue(a, ty(void 0 !== t ? t : i, {
												owner: e
											}))
										}
								}
								for (let a in n) void 0 === t[a] && e.removeValue(a);
								return t
							}(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
						}
						getProps() {
							return this.props
						}
						getVariant(e) {
							return this.props.variants ? this.props.variants[e] : void 0
						}
						getDefaultTransition() {
							return this.props.transition
						}
						getTransformPagePoint() {
							return this.props.transformPagePoint
						}
						getClosestVariantNode() {
							return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
						}
						addVariantChild(e) {
							let t = this.getClosestVariantNode();
							if (t) return t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e)
						}
						addValue(e, t) {
							let n = this.values.get(e);
							t !== n && (n && this.removeValue(e), this.bindToMotionValue(e, t), this.values.set(e, t), this.latestValues[e] = t.get())
						}
						removeValue(e) {
							this.values.delete(e);
							let t = this.valueSubscriptions.get(e);
							t && (t(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState)
						}
						hasValue(e) {
							return this.values.has(e)
						}
						getValue(e, t) {
							if (this.props.values && this.props.values[e]) return this.props.values[e];
							let n = this.values.get(e);
							return void 0 === n && void 0 !== t && (n = ty(null === t ? void 0 : t, {
								owner: this
							}), this.addValue(e, n)), n
						}
						readValue(e, t) {
							let n = void 0 === this.latestValues[e] && this.current ? this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options) : this.latestValues[e];
							if (null != n) {
								if ("string" == typeof n && (ew(n) || eU(n))) n = parseFloat(n);
								else {
									let a;
									a = n, !tv.find(eg(a)) && e8.test(t) && (n = ts(e, t))
								}
								this.setBaseTarget(e, tc(n) ? n.get() : n)
							}
							return tc(n) ? n.get() : n
						}
						setBaseTarget(e, t) {
							this.baseTarget[e] = t
						}
						getBaseTarget(e) {
							let t, {
								initial: n
							} = this.props;
							if ("string" == typeof n || "object" == typeof n) {
								let a = tz(this.props, n, this.presenceContext?.custom);
								a && (t = a[e])
							}
							if (n && void 0 !== t) return t;
							let a = this.getBaseTargetFromProps(this.props, e);
							return void 0 === a || tc(a) ? void 0 !== this.initialValues[e] && void 0 === t ? void 0 : this.baseTarget[e] : a
						}
						on(e, t) {
							return this.events[e] || (this.events[e] = new tf), this.events[e].add(t)
						}
						notify(e, ...t) {
							this.events[e] && this.events[e].notify(...t)
						}
						scheduleRenderMicrotask() {
							tk.render(this.render)
						}
					}
					class tq extends tL {
						constructor() {
							super(...arguments), this.KeyframeResolver = tu
						}
						sortInstanceNodePosition(e, t) {
							return 2 & e.compareDocumentPosition(t) ? 1 : -1
						}
						getBaseTargetFromProps(e, t) {
							return e.style ? e.style[t] : void 0
						}
						removeValueFromRenderState(e, {
							vars: t,
							style: n
						}) {
							delete t[e], delete n[e]
						}
						handleChildMotionValue() {
							this.childSubscription && (this.childSubscription(), delete this.childSubscription);
							let {
								children: e
							} = this.props;
							tc(e) && (this.childSubscription = e.on("change", e => {
								this.current && (this.current.textContent = `${e}`)
							}))
						}
					}
					let t$ = (e, t) => t && "number" == typeof e ? t.transform(e) : e,
						tB = {
							x: "translateX",
							y: "translateY",
							z: "translateZ",
							transformPerspective: "perspective"
						},
						tU = _.length;

					function tV(e, t, n) {
						let {
							style: a,
							vars: i,
							transformOrigin: o
						} = e, s = !1, l = !1;
						for (let e in t) {
							let n = t[e];
							if (T.has(e)) {
								s = !0;
								continue
							}
							if ($(e)) {
								i[e] = n;
								continue
							} {
								let t = t$(n, ta[e]);
								e.startsWith("origin") ? (l = !0, o[e] = t) : a[e] = t
							}
						}
						if (!t.transform && (s || n ? a.transform = function(e, t, n) {
								let a = "",
									i = !0;
								for (let o = 0; o < tU; o++) {
									let s = _[o],
										l = e[s];
									if (void 0 === l) continue;
									let u = !0;
									if (!(u = "number" == typeof l ? l === +!!s.startsWith("scale") : 0 === parseFloat(l)) || n) {
										let e = t$(l, ta[s]);
										if (!u) {
											i = !1;
											let t = tB[s] || s;
											a += `${t}(${e}) `
										}
										n && (t[s] = e)
									}
								}
								return a = a.trim(), n ? a = n(t, i ? "" : a) : i && (a = "none"), a
							}(t, e.transform, n) : a.transform && (a.transform = "none")), l) {
							let {
								originX: e = "50%",
								originY: t = "50%",
								originZ: n = 0
							} = o;
							a.transformOrigin = `${e} ${t} ${n}`
						}
					}

					function tH(e, {
						style: t,
						vars: n
					}, a, i) {
						let o, s = e.style;
						for (o in t) s[o] = t[o];
						for (o in i?.applyProjectionStyles(s, a), n) s.setProperty(o, n[o])
					}
					let tW = {};

					function tG(e, {
						layout: t,
						layoutId: n
					}) {
						return T.has(e) || e.startsWith("origin") || (t || void 0 !== n) && (!!tW[e] || "opacity" === e)
					}

					function tY(e, t, n) {
						let {
							style: a
						} = e, i = {};
						for (let o in a)(tc(a[o]) || t.style && tc(t.style[o]) || tG(o, e) || n?.getValue(o)?.liveStyle !== void 0) && (i[o] = a[o]);
						return i
					}
					class tK extends tq {
						constructor() {
							super(...arguments), this.type = "html", this.renderInstance = tH
						}
						readValueFromInstance(e, t) {
							if (T.has(t)) return this.projection?.isProjecting ? z(t) : ((e, t) => {
								let {
									transform: n = "none"
								} = getComputedStyle(e);
								return F(n, t)
							})(e, t);
							{
								let n = window.getComputedStyle(e),
									a = ($(t) ? n.getPropertyValue(t) : n[t]) || 0;
								return "string" == typeof a ? a.trim() : a
							}
						}
						measureInstanceViewportBox(e, {
							transformPagePoint: t
						}) {
							return er(e, t)
						}
						build(e, t, n) {
							tV(e, t, n.transformTemplate)
						}
						scrapeMotionValuesFromProps(e, t, n) {
							return tY(e, t, n)
						}
					}
					let tQ = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
						tZ = {
							offset: "stroke-dashoffset",
							array: "stroke-dasharray"
						},
						tJ = {
							offset: "strokeDashoffset",
							array: "strokeDasharray"
						};

					function tX(e, {
						attrX: t,
						attrY: n,
						attrScale: a,
						pathLength: i,
						pathSpacing: o = 1,
						pathOffset: s = 0,
						...l
					}, u, c, d) {
						if (tV(e, l, c), u) {
							e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
							return
						}
						e.attrs = e.style, e.style = {};
						let {
							attrs: h,
							style: m
						} = e;
						h.transform && (m.transform = h.transform, delete h.transform), (m.transform || h.transformOrigin) && (m.transformOrigin = h.transformOrigin ?? "50% 50%", delete h.transformOrigin), m.transform && (m.transformBox = d?.transformBox ?? "fill-box", delete h.transformBox), void 0 !== t && (h.x = t), void 0 !== n && (h.y = n), void 0 !== a && (h.scale = a), void 0 !== i && function(e, t, n = 1, a = 0, i = !0) {
							e.pathLength = 1;
							let o = i ? tZ : tJ;
							e[o.offset] = eh.transform(-a);
							let s = eh.transform(t),
								l = eh.transform(n);
							e[o.array] = `${s} ${l}`
						}(h, i, o, s, !1)
					}
					let t1 = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]),
						t0 = e => "string" == typeof e && "svg" === e.toLowerCase();

					function t2(e, t, n) {
						let a = tY(e, t, n);
						for (let n in e)(tc(e[n]) || tc(t[n])) && (a[-1 !== _.indexOf(n) ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n] = e[n]);
						return a
					}
					class t3 extends tq {
						constructor() {
							super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = tC
						}
						getBaseTargetFromProps(e, t) {
							return e[t]
						}
						readValueFromInstance(e, t) {
							if (T.has(t)) {
								let e = to(t);
								return e && e.default || 0
							}
							return t = t1.has(t) ? t : tQ(t), e.getAttribute(t)
						}
						scrapeMotionValuesFromProps(e, t, n) {
							return t2(e, t, n)
						}
						build(e, t, n) {
							tX(e, t, this.isSVGTag, n.transformTemplate, n.style)
						}
						renderInstance(e, t, n, a) {
							for (let n in tH(e, t, void 0, a), t.attrs) e.setAttribute(t1.has(n) ? n : tQ(n), t.attrs[n])
						}
						mount(e) {
							this.isSVGTag = t0(e.tagName), super.mount(e)
						}
					}
					let t4 = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

					function t9(e) {
						if ("string" != typeof e || e.includes("-"));
						else if (t4.indexOf(e) > -1 || /[A-Z]/u.test(e)) return !0;
						return !1
					}
					let t5 = (0, u.createContext)({
							strict: !1
						}),
						t6 = (0, u.createContext)({});

					function t8(e) {
						return Array.isArray(e) ? e.join(" ") : e
					}
					let t7 = () => ({
						style: {},
						transform: {},
						transformOrigin: {},
						vars: {}
					});

					function ne(e, t, n) {
						for (let a in t) tc(t[a]) || tG(a, n) || (e[a] = t[a])
					}
					let nt = () => ({
							...t7(),
							attrs: {}
						}),
						nn = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

					function nr(e) {
						return e.startsWith("while") || e.startsWith("drag") && "draggable" !== e || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || nn.has(e)
					}
					let na = e => !nr(e);
					try {
						! function(e) {
							"function" == typeof e && (na = t => t.startsWith("on") ? !nr(t) : e(t))
						}(require("@emotion/is-prop-valid").default)
					} catch {}

					function ni(e) {
						return tc(e) ? e.get() : e
					}
					let no = e => (t, n) => {
							let a = (0, u.useContext)(t6),
								i = (0, u.useContext)(g),
								o = () => (function({
									scrapeMotionValuesFromProps: e,
									createRenderState: t
								}, n, a, i) {
									return {
										latestValues: function(e, t, n, a) {
											let i = {},
												o = a(e, {});
											for (let e in o) i[e] = ni(o[e]);
											let {
												initial: s,
												animate: l
											} = e, u = tM(e), c = tR(e);
											t && c && !u && !1 !== e.inherit && (void 0 === s && (s = t.initial), void 0 === l && (l = t.animate));
											let d = !!n && !1 === n.initial,
												h = (d = d || !1 === s) ? l : s;
											if (h && "boolean" != typeof h && !tN(h)) {
												let t = Array.isArray(h) ? h : [h];
												for (let n = 0; n < t.length; n++) {
													let a = tz(e, t[n]);
													if (a) {
														let {
															transitionEnd: e,
															transition: t,
															...n
														} = a;
														for (let e in n) {
															let t = n[e];
															if (Array.isArray(t)) {
																let e = d ? t.length - 1 : 0;
																t = t[e]
															}
															null !== t && (i[e] = t)
														}
														for (let t in e) i[t] = e[t]
													}
												}
											}
											return i
										}(n, a, i, e),
										renderState: t()
									}
								})(e, t, a, i);
							return n ? o() : m(o)
						},
						ns = no({
							scrapeMotionValuesFromProps: tY,
							createRenderState: t7
						}),
						nl = no({
							scrapeMotionValuesFromProps: t2,
							createRenderState: nt
						}),
						nu = Symbol.for("motionComponentSymbol");

					function nc(e) {
						return e && "object" == typeof e && Object.prototype.hasOwnProperty.call(e, "current")
					}
					let nd = "data-" + tQ("framerAppearId"),
						nh = (0, u.createContext)({});

					function nm(e, {
						forwardMotionProps: t = !1
					} = {}, n, a) {
						n && function(e) {
							for (let t in e) tx[t] = {
								...tx[t],
								...e[t]
							}
						}(n);
						let i = t9(e) ? nl : ns;

						function o(n, o) {
							var s;
							let l, d = {
									...(0, u.useContext)(v),
									...n,
									layoutId: function({
										layoutId: e
									}) {
										let t = (0, u.useContext)(h).id;
										return t && void 0 !== e ? t + "-" + e : e
									}(n)
								},
								{
									isStatic: m
								} = d,
								b = function(e) {
									let {
										initial: t,
										animate: n
									} = function(e, t) {
										if (tM(e)) {
											let {
												initial: t,
												animate: n
											} = e;
											return {
												initial: !1 === t || tI(t) ? t : void 0,
												animate: tI(n) ? n : void 0
											}
										}
										return !1 !== e.inherit ? t : {}
									}(e, (0, u.useContext)(t6));
									return (0, u.useMemo)(() => ({
										initial: t,
										animate: n
									}), [t8(t), t8(n)])
								}(n),
								y = i(n, m);
							if (!m && p) {
								(0, u.useContext)(t5).strict;
								let t = function(e) {
									let {
										drag: t,
										layout: n
									} = tx;
									if (!t && !n) return {};
									let a = {
										...t,
										...n
									};
									return {
										MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? a.MeasureLayout : void 0,
										ProjectionNode: a.ProjectionNode
									}
								}(d);
								l = t.MeasureLayout, b.visualElement = function(e, t, n, a, i) {
									let {
										visualElement: o
									} = (0, u.useContext)(t6), s = (0, u.useContext)(t5), l = (0, u.useContext)(g), c = (0, u.useContext)(v).reducedMotion, d = (0, u.useRef)(null);
									a = a || s.renderer, !d.current && a && (d.current = a(e, {
										visualState: t,
										parent: o,
										props: n,
										presenceContext: l,
										blockInitialAnimation: !!l && !1 === l.initial,
										reducedMotionConfig: c
									}));
									let h = d.current,
										m = (0, u.useContext)(nh);
									h && !h.projection && i && ("html" === h.type || "svg" === h.type) && function(e, t, n, a) {
										let {
											layoutId: i,
											layout: o,
											drag: s,
											dragConstraints: l,
											layoutScroll: u,
											layoutRoot: c,
											layoutCrossfade: d
										} = t;
										e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : function e(t) {
											if (t) return !1 !== t.options.allowProjection ? t.projection : e(t.parent)
										}(e.parent)), e.projection.setOptions({
											layoutId: i,
											layout: o,
											alwaysMeasureLayout: !!s || l && nc(l),
											visualElement: e,
											animationType: "string" == typeof o ? o : "both",
											initialPromotionConfig: a,
											crossfade: d,
											layoutScroll: u,
											layoutRoot: c
										})
									}(d.current, n, i, m);
									let p = (0, u.useRef)(!1);
									(0, u.useInsertionEffect)(() => {
										h && p.current && h.update(n, l)
									});
									let b = n[nd],
										y = (0, u.useRef)(!!b && !window.MotionHandoffIsComplete?.(b) && window.MotionHasOptimisedAnimation?.(b));
									return f(() => {
										h && (p.current = !0, window.MotionIsMounted = !0, h.updateFeatures(), h.scheduleRenderMicrotask(), y.current && h.animationState && h.animationState.animateChanges())
									}), (0, u.useEffect)(() => {
										h && (!y.current && h.animationState && h.animationState.animateChanges(), y.current && (queueMicrotask(() => {
											window.MotionHandoffMarkAsComplete?.(b)
										}), y.current = !1), h.enteringChildren = void 0)
									}), h
								}(e, y, d, a, t.ProjectionNode)
							}
							return (0, c.jsxs)(t6.Provider, {
								value: b,
								children: [l && b.visualElement ? (0, c.jsx)(l, {
									visualElement: b.visualElement,
									...d
								}) : null, function(e, t, n, {
									latestValues: a
								}, i, o = !1) {
									let s = (t9(e) ? function(e, t, n, a) {
											let i = (0, u.useMemo)(() => {
												let n = nt();
												return tX(n, t, t0(a), e.transformTemplate, e.style), {
													...n.attrs,
													style: {
														...n.style
													}
												}
											}, [t]);
											if (e.style) {
												let t = {};
												ne(t, e.style, e), i.style = {
													...t,
													...i.style
												}
											}
											return i
										} : function(e, t) {
											let n = {},
												a = function(e, t) {
													let n = e.style || {},
														a = {};
													return ne(a, n, e), Object.assign(a, function({
														transformTemplate: e
													}, t) {
														return (0, u.useMemo)(() => {
															let n = t7();
															return tV(n, t, e), Object.assign({}, n.vars, n.style)
														}, [t])
													}(e, t)), a
												}(e, t);
											return e.drag && !1 !== e.dragListener && (n.draggable = !1, a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none", a.touchAction = !0 === e.drag ? "none" : `pan-${"x"===e.drag?"y":"x"}`), void 0 === e.tabIndex && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = a, n
										})(t, a, i, e),
										l = function(e, t, n) {
											let a = {};
											for (let i in e)("values" !== i || "object" != typeof e.values) && (na(i) || !0 === n && nr(i) || !t && !nr(i) || e.draggable && i.startsWith("onDrag")) && (a[i] = e[i]);
											return a
										}(t, "string" == typeof e, o),
										c = e !== u.Fragment ? {
											...l,
											...s,
											ref: n
										} : {},
										{
											children: d
										} = t,
										h = (0, u.useMemo)(() => tc(d) ? d.get() : d, [d]);
									return (0, u.createElement)(e, {
										...c,
										children: h
									})
								}(e, n, (s = b.visualElement, (0, u.useCallback)(e => {
									e && y.onMount && y.onMount(e), s && (e ? s.mount(e) : s.unmount()), o && ("function" == typeof o ? o(e) : nc(o) && (o.current = e))
								}, [s])), y, m, t)]
							})
						}
						o.displayName = `motion.${"string"==typeof e?e:`create(${e.displayName??e.name??""})`}`;
						let s = (0, u.forwardRef)(o);
						return s[nu] = e, s
					}

					function np(e, t, n) {
						let a = e.getProps();
						return tz(a, t, void 0 !== n ? n : a.custom, e)
					}

					function nf(e, t) {
						return e?.[t] ?? e?.default ?? e
					}
					let ng = e => Array.isArray(e);

					function nb(e, t) {
						let n = e.getValue("willChange");
						if (tc(n) && n.add) return n.add(t);
						if (!n && e_.WillChange) {
							let n = new e_.WillChange("auto");
							e.addValue("willChange", n), n.add(t)
						}
					}

					function ny(e) {
						e.duration = 0, e.type
					}
					let nv = (e, t) => n => t(e(n)),
						nk = (...e) => e.reduce(nv),
						nw = e => 1e3 * e,
						nx = {
							layout: 0,
							mainThread: 0,
							waapi: 0
						};

					function nj(e, t, n) {
						return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6) ? e + (t - e) * 6 * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
					}

					function nS(e, t) {
						return n => n > 0 ? t : e
					}
					let nE = (e, t, n) => {
							let a = e * e,
								i = n * (t * t - a) + a;
							return i < 0 ? 0 : Math.sqrt(i)
						},
						nC = [eZ, eQ, eJ];

					function nA(e) {
						let t = nC.find(t => t.test(e));
						if (ev(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !t) return !1;
						let n = t.parse(e);
						return t === eJ && (n = function({
							hue: e,
							saturation: t,
							lightness: n,
							alpha: a
						}) {
							e /= 360, n /= 100;
							let i = 0,
								o = 0,
								s = 0;
							if (t /= 100) {
								let a = n < .5 ? n * (1 + t) : n + t - n * t,
									l = 2 * n - a;
								i = nj(l, a, e + 1 / 3), o = nj(l, a, e), s = nj(l, a, e - 1 / 3)
							} else i = o = s = n;
							return {
								red: Math.round(255 * i),
								green: Math.round(255 * o),
								blue: Math.round(255 * s),
								alpha: a
							}
						}(n)), n
					}
					let n_ = (e, t) => {
							let n = nA(e),
								a = nA(t);
							if (!n || !a) return nS(e, t);
							let i = {
								...n
							};
							return e => (i.red = nE(n.red, a.red, e), i.green = nE(n.green, a.green, e), i.blue = nE(n.blue, a.blue, e), i.alpha = W(n.alpha, a.alpha, e), eQ.transform(i))
						},
						nT = new Set(["none", "hidden"]);

					function nN(e, t) {
						return n => W(e, t, n)
					}

					function nI(e) {
						return "number" == typeof e ? nN : "string" == typeof e ? U(e) ? nS : eX.test(e) ? n_ : nM : Array.isArray(e) ? nO : "object" == typeof e ? eX.test(e) ? n_ : nP : nS
					}

					function nO(e, t) {
						let n = [...e],
							a = n.length,
							i = e.map((e, n) => nI(e)(e, t[n]));
						return e => {
							for (let t = 0; t < a; t++) n[t] = i[t](e);
							return n
						}
					}

					function nP(e, t) {
						let n = {
								...e,
								...t
							},
							a = {};
						for (let i in n) void 0 !== e[i] && void 0 !== t[i] && (a[i] = nI(e[i])(e[i], t[i]));
						return e => {
							for (let t in a) n[t] = a[t](e);
							return n
						}
					}
					let nM = (e, t) => {
						let n = e8.createTransformer(t),
							a = e4(e),
							i = e4(t);
						return a.indexes.var.length === i.indexes.var.length && a.indexes.color.length === i.indexes.color.length && a.indexes.number.length >= i.indexes.number.length ? nT.has(e) && !i.values.length || nT.has(t) && !a.values.length ? function(e, t) {
							return nT.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
						}(e, t) : nk(nO(function(e, t) {
							let n = [],
								a = {
									color: 0,
									var: 0,
									number: 0
								};
							for (let i = 0; i < t.values.length; i++) {
								let o = t.types[i],
									s = e.indexes[o][a[o]],
									l = e.values[s] ?? 0;
								n[i] = l, a[o]++
							}
							return n
						}(a, i), i.values), n) : (ev(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), nS(e, t))
					};

					function nR(e, t, n) {
						return "number" == typeof e && "number" == typeof t && "number" == typeof n ? W(e, t, n) : nI(e)(e, t)
					}
					let nD = e => {
							let t = ({
								timestamp: t
							}) => e(t);
							return {
								start: (e = !0) => eO.update(t, e),
								stop: () => eP(t),
								now: () => eM.isProcessing ? eM.timestamp : th.now()
							}
						},
						nz = (e, t, n = 10) => {
							let a = "",
								i = Math.max(Math.round(t / n), 2);
							for (let t = 0; t < i; t++) a += Math.round(1e4 * e(t / (i - 1))) / 1e4 + ", ";
							return `linear(${a.substring(0,a.length-2)})`
						};

					function nF(e) {
						let t = 0,
							n = e.next(t);
						for (; !n.done && t < 2e4;) t += 50, n = e.next(t);
						return t >= 2e4 ? 1 / 0 : t
					}

					function nL(e, t, n) {
						var a, i;
						let o = Math.max(t - 5, 0);
						return a = n - e(o), (i = t - o) ? 1e3 / i * a : 0
					}
					let nq = {
						stiffness: 100,
						damping: 10,
						mass: 1,
						velocity: 0,
						duration: 800,
						bounce: .3,
						visualDuration: .3,
						restSpeed: {
							granular: .01,
							default: 2
						},
						restDelta: {
							granular: .005,
							default: .5
						},
						minDuration: .01,
						maxDuration: 10,
						minDamping: .05,
						maxDamping: 1
					};

					function n$(e, t) {
						return e * Math.sqrt(1 - t * t)
					}
					let nB = ["duration", "bounce"],
						nU = ["stiffness", "damping", "mass"];

					function nV(e, t) {
						return t.some(t => void 0 !== e[t])
					}

					function nH(e = nq.visualDuration, t = nq.bounce) {
						let n, a = "object" != typeof e ? {
								visualDuration: e,
								keyframes: [0, 1],
								bounce: t
