/*!
 *  GMAP3 Plugin for jQuery
 *  Version   : 6.0.0
 *  Date      : 2014-04-25
 *  Author    : DEMONTE Jean-Baptiste
 *  Contact   : jbdemonte@gmail.com
 *  Web site  : http://gmap3.net
 *  Licence   : GPL v3 : http://www.gnu.org/licenses/gpl.html
 *
 *  Copyright (c) 2010-2014 Jean-Baptiste DEMONTE
 *  All rights reserved.
 */
setTimeout(() => {
    !function (t, n) {
        function e(t) {
            return "object" == typeof t
        }

        function o(t) {
            return "string" == typeof t
        }

        function i(t) {
            return "number" == typeof t
        }

        function a(t) {
            return t === n
        }

        function r() {
            q = google.maps, A || (A = {
                verbose: !1,
                queryLimit: {attempt: 5, delay: 250, random: 250},
                classes: function () {
                    var n = {};
                    return t.each("Map Marker InfoWindow Circle Rectangle OverlayView StreetViewPanorama KmlLayer TrafficLayer BicyclingLayer GroundOverlay StyledMapType ImageMapType".split(" "), function (t, e) {
                        n[e] = q[e]
                    }), n
                }(),
                map: {mapTypeId: q.MapTypeId.ROADMAP, center: [46.578498, 2.457275], zoom: 2},
                overlay: {pane: "floatPane", content: "", offset: {x: 0, y: 0}},
                geoloc: {getCurrentPosition: {maximumAge: 6e4, timeout: 5e3}}
            })
        }

        function s(t, n) {
            return a(t) ? "gmap3_" + (n ? Z + 1 : ++Z) : t
        }

        function u(t) {
            var n, e = q.version.split(".");
            for (t = t.split("."), n = 0; n < e.length; n++) e[n] = parseInt(e[n], 10);
            for (n = 0; n < t.length; n++) {
                if (t[n] = parseInt(t[n], 10), !e.hasOwnProperty(n)) return !1;
                if (e[n] < t[n]) return !1
            }
            return !0
        }

        function l(n, e, o, i, a) {
            function r(e, i) {
                e && t.each(e, function (t, e) {
                    var r = n, s = e;
                    R(e) && (r = e[0], s = e[1]), i(o, t, function (t) {
                        s.apply(r, [a || o, t, u])
                    })
                })
            }

            var s = e.td || {}, u = {id: i, data: s.data, tag: s.tag};
            r(s.events, q.event.addListener), r(s.onces, q.event.addListenerOnce)
        }

        function d(t) {
            var n, e = [];
            for (n in t) t.hasOwnProperty(n) && e.push(n);
            return e
        }

        function c(t, n) {
            var e, o = arguments;
            for (e = 2; e < o.length; e++) if (n in o[e] && o[e].hasOwnProperty(n)) return void (t[n] = o[e][n])
        }

        function p(n, e) {
            var o, i, a = ["data", "tag", "id", "events", "onces"], r = {};
            if (n.td) for (o in n.td) n.td.hasOwnProperty(o) && "options" !== o && "values" !== o && (r[o] = n.td[o]);
            for (i = 0; i < a.length; i++) c(r, a[i], e, n.td);
            return r.options = t.extend({}, n.opts || {}, e.options || {}), r
        }

        function f() {
            if (A.verbose) {
                var t, n = [];
                if (window.console && z(console.error)) {
                    for (t = 0; t < arguments.length; t++) n.push(arguments[t]);
                    console.error.apply(console, n)
                } else {
                    for (n = "", t = 0; t < arguments.length; t++) n += arguments[t].toString() + " ";
                    alert(n)
                }
            }
        }

        function g(t) {
            return (i(t) || o(t)) && "" !== t && !isNaN(t)
        }

        function h(t) {
            var n, o = [];
            if (!a(t)) if (e(t)) if (i(t.length)) o = t; else for (n in t) o.push(t[n]); else o.push(t);
            return o
        }

        function v(n) {
            return n ? z(n) ? n : (n = h(n), function (o) {
                var i;
                if (a(o)) return !1;
                if (e(o)) {
                    for (i = 0; i < o.length; i++) if (t.inArray(o[i], n) >= 0) return !0;
                    return !1
                }
                return t.inArray(o, n) >= 0
            }) : void 0
        }

        function m(t, n, e) {
            var i = n ? t : null;
            return !t || o(t) ? i : t.latLng ? m(t.latLng) : t instanceof q.LatLng ? t : g(t.lat) ? new q.LatLng(t.lat, t.lng) : !e && R(t) && g(t[0]) && g(t[1]) ? new q.LatLng(t[0], t[1]) : i
        }

        function y(t) {
            var n, e;
            return !t || t instanceof q.LatLngBounds ? t || null : (R(t) ? 2 === t.length ? (n = m(t[0]), e = m(t[1])) : 4 === t.length && (n = m([t[0], t[1]]), e = m([t[2], t[3]])) : "ne" in t && "sw" in t ? (n = m(t.ne), e = m(t.sw)) : "n" in t && "e" in t && "s" in t && "w" in t && (n = m([t.n, t.e]), e = m([t.s, t.w])), n && e ? new q.LatLngBounds(e, n) : null)
        }

        function w(t, n, e, i, a) {
            var r = e ? m(i.td, !1, !0) : !1,
                s = r ? {latLng: r} : i.td.address ? o(i.td.address) ? {address: i.td.address} : i.td.address : !1,
                u = s ? G.get(s) : !1, l = this;
            s ? (a = a || 0, u ? (i.latLng = u.results[0].geometry.location, i.results = u.results, i.status = u.status, n.apply(t, [i])) : (s.location && (s.location = m(s.location)), s.bounds && (s.bounds = y(s.bounds)), M().geocode(s, function (o, r) {
                r === q.GeocoderStatus.OK ? (G.store(s, {
                    results: o,
                    status: r
                }), i.latLng = o[0].geometry.location, i.results = o, i.status = r, n.apply(t, [i])) : r === q.GeocoderStatus.OVER_QUERY_LIMIT && a < A.queryLimit.attempt ? setTimeout(function () {
                    w.apply(l, [t, n, e, i, a + 1])
                }, A.queryLimit.delay + Math.floor(Math.random() * A.queryLimit.random)) : (f("geocode failed", r, s), i.latLng = i.results = !1, i.status = r, n.apply(t, [i]))
            }))) : (i.latLng = m(i.td, !1, !0), n.apply(t, [i]))
        }

        function L(n, e, o, i) {
            function a() {
                do s++; while (s < n.length && !("address" in n[s]));
                return s >= n.length ? void o.apply(e, [i]) : void w(r, function (e) {
                    delete e.td, t.extend(n[s], e), a.apply(r, [])
                }, !0, {td: n[s]})
            }

            var r = this, s = -1;
            a()
        }

        function b(t, n, e) {
            var o = !1;
            navigator && navigator.geolocation ? navigator.geolocation.getCurrentPosition(function (i) {
                o || (o = !0, e.latLng = new q.LatLng(i.coords.latitude, i.coords.longitude), n.apply(t, [e]))
            }, function () {
                o || (o = !0, e.latLng = !1, n.apply(t, [e]))
            }, e.opts.getCurrentPosition) : (e.latLng = !1, n.apply(t, [e]))
        }

        function x(t) {
            var n, o = !1;
            if (e(t) && t.hasOwnProperty("get")) {
                for (n in t) if ("get" !== n) return !1;
                o = !t.get.hasOwnProperty("callback")
            }
            return o
        }

        function M() {
            return V.geocoder || (V.geocoder = new q.Geocoder), V.geocoder
        }

        function I() {
            var t = [];
            this.get = function (n) {
                if (t.length) {
                    var o, i, a, r, s, u = d(n);
                    for (o = 0; o < t.length; o++) {
                        for (r = t[o], s = u.length === r.keys.length, i = 0; i < u.length && s; i++) a = u[i], s = a in r.request, s && (s = e(n[a]) && "equals" in n[a] && z(n[a]) ? n[a].equals(r.request[a]) : n[a] === r.request[a]);
                        if (s) return r.results
                    }
                }
            }, this.store = function (n, e) {
                t.push({request: n, keys: d(n), results: e})
            }
        }

        function P() {
            var t = [], n = this;
            n.empty = function () {
                return !t.length
            }, n.add = function (n) {
                t.push(n)
            }, n.get = function () {
                return t.length ? t[0] : !1
            }, n.ack = function () {
                t.shift()
            }
        }

        function k() {
            function n(t) {
                return {id: t.id, name: t.name, object: t.obj, tag: t.tag, data: t.data}
            }

            function e(t) {
                z(t.setMap) && t.setMap(null), z(t.remove) && t.remove(), z(t.free) && t.free(), t = null
            }

            var o = {}, i = {}, r = this;
            r.add = function (t, n, e, a) {
                var u = t.td || {}, l = s(u.id);
                return o[n] || (o[n] = []), l in i && r.clearById(l), i[l] = {
                    obj: e,
                    sub: a,
                    name: n,
                    id: l,
                    tag: u.tag,
                    data: u.data
                }, o[n].push(l), l
            }, r.getById = function (t, e, o) {
                var a = !1;
                return t in i && (a = e ? i[t].sub : o ? n(i[t]) : i[t].obj), a
            }, r.get = function (t, e, a, r) {
                var s, u, l = v(a);
                if (!o[t] || !o[t].length) return null;
                for (s = o[t].length; s;) if (s--, u = o[t][e ? s : o[t].length - s - 1], u && i[u]) {
                    if (l && !l(i[u].tag)) continue;
                    return r ? n(i[u]) : i[u].obj
                }
                return null
            }, r.all = function (t, e, r) {
                var s = [], u = v(e), l = function (t) {
                    var e, a;
                    for (e = 0; e < o[t].length; e++) if (a = o[t][e], a && i[a]) {
                        if (u && !u(i[a].tag)) continue;
                        s.push(r ? n(i[a]) : i[a].obj)
                    }
                };
                if (t in o) l(t); else if (a(t)) for (t in o) l(t);
                return s
            }, r.rm = function (t, n, e) {
                var a, s;
                if (!o[t]) return !1;
                if (n) if (e) for (a = o[t].length - 1; a >= 0 && (s = o[t][a], !n(i[s].tag)); a--) ; else for (a = 0; a < o[t].length && (s = o[t][a], !n(i[s].tag)); a++) ; else a = e ? o[t].length - 1 : 0;
                return a in o[t] ? r.clearById(o[t][a], a) : !1
            }, r.clearById = function (t, n) {
                if (t in i) {
                    var r, s = i[t].name;
                    for (r = 0; a(n) && r < o[s].length; r++) t === o[s][r] && (n = r);
                    return e(i[t].obj), i[t].sub && e(i[t].sub), delete i[t], o[s].splice(n, 1), !0
                }
                return !1
            }, r.objGetById = function (t) {
                var n, e;
                if (o.clusterer) for (e in o.clusterer) if ((n = i[o.clusterer[e]].obj.getById(t)) !== !1) return n;
                return !1
            }, r.objClearById = function (t) {
                var n;
                if (o.clusterer) for (n in o.clusterer) if (i[o.clusterer[n]].obj.clearById(t)) return !0;
                return null
            }, r.clear = function (t, n, e, i) {
                var a, s, u, l = v(i);
                if (t && t.length) t = h(t); else {
                    t = [];
                    for (a in o) t.push(a)
                }
                for (s = 0; s < t.length; s++) if (u = t[s], n) r.rm(u, l, !0); else if (e) r.rm(u, l, !1); else for (; r.rm(u, l, !1);) ;
            }, r.objClear = function (n, e, a, r) {
                var s;
                if (o.clusterer && (t.inArray("marker", n) >= 0 || !n.length)) for (s in o.clusterer) i[o.clusterer[s]].obj.clear(e, a, r)
            }
        }

        function B(n, e, i) {
            function a(t) {
                var n = {};
                return n[t] = {}, n
            }

            function r() {
                var t;
                for (t in i) if (i.hasOwnProperty(t) && !u.hasOwnProperty(t)) return t
            }

            var s, u = {}, l = this, d = {
                latLng: {
                    map: !1,
                    marker: !1,
                    infowindow: !1,
                    circle: !1,
                    overlay: !1,
                    getlatlng: !1,
                    getmaxzoom: !1,
                    getelevation: !1,
                    streetviewpanorama: !1,
                    getaddress: !0
                }, geoloc: {getgeoloc: !0}
            };
            o(i) && (i = a(i)), l.run = function () {
                for (var o, a; o = r();) {
                    if (z(n[o])) return s = o, a = t.extend(!0, {}, A[o] || {}, i[o].options || {}), void (o in d.latLng ? i[o].values ? L(i[o].values, n, n[o], {
                        td: i[o],
                        opts: a,
                        session: u
                    }) : w(n, n[o], d.latLng[o], {td: i[o], opts: a, session: u}) : o in d.geoloc ? b(n, n[o], {
                        td: i[o],
                        opts: a,
                        session: u
                    }) : n[o].apply(n, [{td: i[o], opts: a, session: u}]));
                    u[o] = null
                }
                e.apply(n, [i, u])
            }, l.ack = function (t) {
                u[s] = t, l.run.apply(l, [])
            }
        }

        function j() {
            return V.ds || (V.ds = new q.DirectionsService), V.ds
        }

        function O() {
            return V.dms || (V.dms = new q.DistanceMatrixService), V.dms
        }

        function C() {
            return V.mzs || (V.mzs = new q.MaxZoomService), V.mzs
        }

        function E() {
            return V.es || (V.es = new q.ElevationService), V.es
        }

        function S(t) {
            function n() {
                var t = this;
                return t.onAdd = function () {
                }, t.onRemove = function () {
                }, t.draw = function () {
                }, A.classes.OverlayView.apply(t, [])
            }

            n.prototype = A.classes.OverlayView.prototype;
            var e = new n;
            return e.setMap(t), e
        }

        function T(n, o, i) {
            function a(t) {
                T[t] || (delete _[t].options.map, T[t] = new A.classes.Marker(_[t].options), l(n, {td: _[t]}, T[t], _[t].id))
            }

            function r() {
                return (y = U.getProjection()) ? (P = !0, j.push(q.event.addListener(o, "zoom_changed", f)), j.push(q.event.addListener(o, "bounds_changed", f)), void h()) : void setTimeout(function () {
                    r.apply(B, [])
                }, 25)
            }

            function u(t) {
                e(O[t]) ? (z(O[t].obj.setMap) && O[t].obj.setMap(null), z(O[t].obj.remove) && O[t].obj.remove(), z(O[t].shadow.remove) && O[t].obj.remove(), z(O[t].shadow.setMap) && O[t].shadow.setMap(null), delete O[t].obj, delete O[t].shadow) : T[t] && T[t].setMap(null), delete O[t]
            }

            function d() {
                var t, n, e, o, i, a, r, s, u = Math.cos, l = Math.sin, d = arguments;
                return d[0] instanceof q.LatLng ? (t = d[0].lat(), e = d[0].lng(), d[1] instanceof q.LatLng ? (n = d[1].lat(), o = d[1].lng()) : (n = d[1], o = d[2])) : (t = d[0], e = d[1], d[2] instanceof q.LatLng ? (n = d[2].lat(), o = d[2].lng()) : (n = d[2], o = d[3])), i = Math.PI * t / 180, a = Math.PI * e / 180, r = Math.PI * n / 180, s = Math.PI * o / 180, 6371e3 * Math.acos(Math.min(u(i) * u(r) * u(a) * u(s) + u(i) * l(a) * u(r) * l(s) + l(i) * l(r), 1))
            }

            function c() {
                var t = d(o.getCenter(), o.getBounds().getNorthEast()),
                    n = new q.Circle({center: o.getCenter(), radius: 1.25 * t});
                return n.getBounds()
            }

            function p() {
                var t, n = {};
                for (t in O) n[t] = !0;
                return n
            }

            function f() {
                clearTimeout(m), m = setTimeout(h, 25)
            }

            function g(t) {
                var n = y.fromLatLngToDivPixel(t),
                    e = y.fromDivPixelToLatLng(new q.Point(n.x + i.radius, n.y - i.radius)),
                    o = y.fromDivPixelToLatLng(new q.Point(n.x - i.radius, n.y + i.radius));
                return new q.LatLngBounds(o, e)
            }

            function h() {
                if (!x && !I && P) {
                    var n, e, a, r, s, l, d, f, h, v, m, y = !1, b = [], B = {}, j = o.getZoom(),
                        C = "maxZoom" in i && j > i.maxZoom, E = p();
                    for (M = !1, j > 3 && (s = c(), y = s.getSouthWest().lng() < s.getNorthEast().lng()), n = 0; n < _.length; n++) !_[n] || y && !s.contains(_[n].options.position) || w && !w(D[n]) || b.push(n);
                    for (; ;) {
                        for (n = 0; B[n] && n < b.length;) n++;
                        if (n === b.length) break;
                        if (r = [], k && !C) {
                            m = 10;
                            do for (f = r, r = [], m--, d = f.length ? s.getCenter() : _[b[n]].options.position, s = g(d), e = n; e < b.length; e++) B[e] || s.contains(_[b[e]].options.position) && r.push(e); while (f.length < r.length && r.length > 1 && m)
                        } else for (e = n; e < b.length; e++) if (!B[e]) {
                            r.push(e);
                            break
                        }
                        for (l = {
                            indexes: [],
                            ref: []
                        }, h = v = 0, a = 0; a < r.length; a++) B[r[a]] = !0, l.indexes.push(b[r[a]]), l.ref.push(b[r[a]]), h += _[b[r[a]]].options.position.lat(), v += _[b[r[a]]].options.position.lng();
                        h /= r.length, v /= r.length, l.latLng = new q.LatLng(h, v), l.ref = l.ref.join("-"), l.ref in E ? delete E[l.ref] : (1 === r.length && (O[l.ref] = !0), L(l))
                    }
                    t.each(E, function (t) {
                        u(t)
                    }), I = !1
                }
            }

            var m, y, w, L, b, x = !1, M = !1, I = !1, P = !1, k = !0, B = this, j = [], O = {}, C = {}, E = {}, T = [],
                _ = [], D = [], U = S(o, i.radius);
            r(), B.getById = function (t) {
                return t in C ? (a(C[t]), T[C[t]]) : !1
            }, B.rm = function (t) {
                var n = C[t];
                T[n] && T[n].setMap(null), delete T[n], T[n] = !1, delete _[n], _[n] = !1, delete D[n], D[n] = !1, delete C[t], delete E[n], M = !0
            }, B.clearById = function (t) {
                return t in C ? (B.rm(t), !0) : void 0
            }, B.clear = function (t, n, e) {
                var o, i, a, r, s, u = [], l = v(e);
                for (t ? (o = _.length - 1, i = -1, a = -1) : (o = 0, i = _.length, a = 1), r = o; r !== i && (!_[r] || l && !l(_[r].tag) || (u.push(E[r]), !n && !t)); r += a) ;
                for (s = 0; s < u.length; s++) B.rm(u[s])
            }, B.add = function (t, n) {
                t.id = s(t.id), B.clearById(t.id), C[t.id] = T.length, E[T.length] = t.id, T.push(null), _.push(t), D.push(n), M = !0
            }, B.addMarker = function (t, e) {
                e = e || {}, e.id = s(e.id), B.clearById(e.id), e.options || (e.options = {}), e.options.position = t.getPosition(), l(n, {td: e}, t, e.id), C[e.id] = T.length, E[T.length] = e.id, T.push(t), _.push(e), D.push(e.data || {}), M = !0
            }, B.td = function (t) {
                return _[t]
            }, B.value = function (t) {
                return D[t]
            }, B.marker = function (t) {
                return t in T ? (a(t), T[t]) : !1
            }, B.markerIsSet = function (t) {
                return Boolean(T[t])
            }, B.setMarker = function (t, n) {
                T[t] = n
            }, B.store = function (t, n, e) {
                O[t.ref] = {obj: n, shadow: e}
            }, B.free = function () {
                var n;
                for (n = 0; n < j.length; n++) q.event.removeListener(j[n]);
                j = [], t.each(O, function (t) {
                    u(t)
                }), O = {}, t.each(_, function (t) {
                    _[t] = null
                }), _ = [], t.each(T, function (t) {
                    T[t] && (T[t].setMap(null), delete T[t])
                }), T = [], t.each(D, function (t) {
                    delete D[t]
                }), D = [], C = {}, E = {}
            }, B.filter = function (t) {
                w = t, h()
            }, B.enable = function (t) {
                k !== t && (k = t, h())
            }, B.display = function (t) {
                L = t
            }, B.error = function (t) {
                b = t
            }, B.beginUpdate = function () {
                x = !0
            }, B.endUpdate = function () {
                x = !1, M && h()
            }, B.autofit = function (t) {
                var n;
                for (n = 0; n < _.length; n++) _[n] && t.extend(_[n].options.position)
            }
        }

        function _(t, n) {
            var e = this;
            e.id = function () {
                return t
            }, e.filter = function (t) {
                n.filter(t)
            }, e.enable = function () {
                n.enable(!0)
            }, e.disable = function () {
                n.enable(!1)
            }, e.add = function (t, e, o) {
                o || n.beginUpdate(), n.addMarker(t, e), o || n.endUpdate()
            }, e.getById = function (t) {
                return n.getById(t)
            }, e.clearById = function (t, e) {
                var o;
                return e || n.beginUpdate(), o = n.clearById(t), e || n.endUpdate(), o
            }, e.clear = function (t, e, o, i) {
                i || n.beginUpdate(), n.clear(t, e, o), i || n.endUpdate()
            }
        }

        function D(n, e, o, i) {
            var a = this, r = [];
            A.classes.OverlayView.call(a), a.setMap(n), a.onAdd = function () {
                var n = a.getPanes();
                e.pane in n && t(n[e.pane]).append(i), t.each("dblclick click mouseover mousemove mouseout mouseup mousedown".split(" "), function (n, e) {
                    r.push(q.event.addDomListener(i[0], e, function (n) {
                        t.Event(n).stopPropagation(), q.event.trigger(a, e, [n]), a.draw()
                    }))
                }), r.push(q.event.addDomListener(i[0], "contextmenu", function (n) {
                    t.Event(n).stopPropagation(), q.event.trigger(a, "rightclick", [n]), a.draw()
                }))
            }, a.getPosition = function () {
                return o
            }, a.setPosition = function (t) {
                o = t, a.draw()
            }, a.draw = function () {
                var t = a.getProjection().fromLatLngToDivPixel(o);
                i.css("left", t.x + e.offset.x + "px").css("top", t.y + e.offset.y + "px")
            }, a.onRemove = function () {
                var t;
                for (t = 0; t < r.length; t++) q.event.removeListener(r[t]);
                i.remove()
            }, a.hide = function () {
                i.hide()
            }, a.show = function () {
                i.show()
            }, a.toggle = function () {
                i && (i.is(":visible") ? a.show() : a.hide())
            }, a.toggleDOM = function () {
                a.setMap(a.getMap() ? null : n)
            }, a.getDOMElement = function () {
                return i[0]
            }
        }

        function U(i) {
            function r() {
                !b && (b = M.get()) && b.run()
            }

            function d() {
                b = null, M.ack(), r.call(x)
            }

            function c(t) {
                var n, e = t.td.callback;
                e && (n = Array.prototype.slice.call(arguments, 1), z(e) ? e.apply(i, n) : R(e) && z(e[1]) && e[1].apply(e[0], n))
            }

            function g(t, n, e) {
                e && l(i, t, n, e), c(t, n), b.ack(n)
            }

            function v(n, e) {
                e = e || {};
                var o = e.td && e.td.options ? e.td.options : 0;
                S ? o && (o.center && (o.center = m(o.center)), S.setOptions(o)) : (o = e.opts || t.extend(!0, {}, A.map, o || {}), o.center = n || m(o.center), S = new A.classes.Map(i.get(0), o))
            }

            function w(e) {
                var o, a, r = new T(i, S, e), s = {}, u = {}, d = [], c = /^[0-9]+$/;
                for (a in e) c.test(a) ? (d.push(1 * a), u[a] = e[a], u[a].width = u[a].width || 0, u[a].height = u[a].height || 0) : s[a] = e[a];
                return d.sort(function (t, n) {
                    return t > n
                }), o = s.calculator ? function (n) {
                    var e = [];
                    return t.each(n, function (t, n) {
                        e.push(r.value(n))
                    }), s.calculator.apply(i, [e])
                } : function (t) {
                    return t.length
                }, r.error(function () {
                    f.apply(x, arguments)
                }), r.display(function (a) {
                    var c, p, f, g, h, v, y = o(a.indexes);
                    if (e.force || y > 1) for (c = 0; c < d.length; c++) d[c] <= y && (p = u[d[c]]);
                    p ? (h = p.offset || [-p.width / 2, -p.height / 2], f = t.extend({}, s), f.options = t.extend({
                        pane: "overlayLayer",
                        content: p.content ? p.content.replace("CLUSTER_COUNT", y) : "",
                        offset: {x: ("x" in h ? h.x : h[0]) || 0, y: ("y" in h ? h.y : h[1]) || 0}
                    }, s.options || {}), g = x.overlay({
                        td: f,
                        opts: f.options,
                        latLng: m(a)
                    }, !0), f.options.pane = "floatShadow", f.options.content = t(document.createElement("div")).width(p.width + "px").height(p.height + "px").css({cursor: "pointer"}), v = x.overlay({
                        td: f,
                        opts: f.options,
                        latLng: m(a)
                    }, !0), s.data = {latLng: m(a), markers: []}, t.each(a.indexes, function (t, n) {
                        s.data.markers.push(r.value(n)), r.markerIsSet(n) && r.marker(n).setMap(null)
                    }), l(i, {td: s}, v, n, {
                        main: g,
                        shadow: v
                    }), r.store(a, g, v)) : t.each(a.indexes, function (t, n) {
                        r.marker(n).setMap(S)
                    })
                }), r
            }

            function L(n, e, o) {
                var a = [], r = "values" in n.td;
                return r || (n.td.values = [{options: n.opts}]), n.td.values.length ? (v(), t.each(n.td.values, function (t, r) {
                    var s, u, d, c, f = p(n, r);
                    if (f.options[o]) if (f.options[o][0][0] && R(f.options[o][0][0])) for (u = 0; u < f.options[o].length; u++) for (d = 0; d < f.options[o][u].length; d++) f.options[o][u][d] = m(f.options[o][u][d]); else for (u = 0; u < f.options[o].length; u++) f.options[o][u] = m(f.options[o][u]);
                    f.options.map = S, c = new q[e](f.options), a.push(c), s = I.add({td: f}, e.toLowerCase(), c), l(i, {td: f}, c, s)
                }), void g(n, r ? a : a[0])) : void g(n, !1)
            }

            var b, x = this, M = new P, I = new k, S = null;
            x._plan = function (t) {
                var n;
                for (n = 0; n < t.length; n++) M.add(new B(x, d, t[n]));
                r()
            }, x.map = function (t) {
                v(t.latLng, t), l(i, t, S), g(t, S)
            }, x.destroy = function (t) {
                I.clear(), i.empty(), S && (S = null), g(t, !0)
            }, x.overlay = function (n, e) {
                var o = [], a = "values" in n.td;
                return a || (n.td.values = [{
                    latLng: n.latLng,
                    options: n.opts
                }]), n.td.values.length ? (D.__initialised || (D.prototype = new A.classes.OverlayView, D.__initialised = !0), t.each(n.td.values, function (a, r) {
                    var s, u, d = p(n, r),
                        c = t(document.createElement("div")).css({
                            border: "none",
                            borderWidth: 0,
                            position: "absolute"
                        });
                    c.append(d.options.content), u = new D(S, d.options, m(d) || m(r), c), o.push(u), c = null, e || (s = I.add(n, "overlay", u), l(i, {td: d}, u, s))
                }), e ? o[0] : void g(n, a ? o : o[0])) : void g(n, !1)
            }, x.marker = function (n) {
                var e, o, a, r = "values" in n.td, u = !S;
                return r || (n.opts.position = n.latLng || m(n.opts.position), n.td.values = [{options: n.opts}]), n.td.values.length ? (u && v(), n.td.cluster && !S.getBounds() ? void q.event.addListenerOnce(S, "bounds_changed", function () {
                    x.marker.apply(x, [n])
                }) : void (n.td.cluster ? (n.td.cluster instanceof _ ? (o = n.td.cluster, a = I.getById(o.id(), !0)) : (a = w(n.td.cluster), o = new _(s(n.td.id, !0), a), I.add(n, "clusterer", o, a)), a.beginUpdate(), t.each(n.td.values, function (t, e) {
                    var o = p(n, e);
                    o.options.position = m(o.options.position ? o.options.position : e), o.options.position && (o.options.map = S, u && (S.setCenter(o.options.position), u = !1), a.add(o, e))
                }), a.endUpdate(), g(n, o)) : (e = [], t.each(n.td.values, function (t, o) {
                    var a, r, s = p(n, o);
                    s.options.position = m(s.options.position ? s.options.position : o), s.options.position && (s.options.map = S, u && (S.setCenter(s.options.position), u = !1), r = new A.classes.Marker(s.options), e.push(r), a = I.add({td: s}, "marker", r), l(i, {td: s}, r, a))
                }), g(n, r ? e : e[0])))) : void g(n, !1)
            }, x.getroute = function (t) {
                t.opts.origin = m(t.opts.origin, !0), t.opts.destination = m(t.opts.destination, !0), j().route(t.opts, function (n, e) {
                    c(t, e === q.DirectionsStatus.OK ? n : !1, e), b.ack()
                })
            }, x.getdistance = function (t) {
                var n;
                for (t.opts.origins = h(t.opts.origins), n = 0; n < t.opts.origins.length; n++) t.opts.origins[n] = m(t.opts.origins[n], !0);
                for (t.opts.destinations = h(t.opts.destinations), n = 0; n < t.opts.destinations.length; n++) t.opts.destinations[n] = m(t.opts.destinations[n], !0);
                O().getDistanceMatrix(t.opts, function (n, e) {
                    c(t, e === q.DistanceMatrixStatus.OK ? n : !1, e), b.ack()
                })
            }, x.infowindow = function (e) {
                var o = [], r = "values" in e.td;
                r || (e.latLng && (e.opts.position = e.latLng), e.td.values = [{options: e.opts}]), t.each(e.td.values, function (t, s) {
                    var u, d, c = p(e, s);
                    c.options.position = m(c.options.position ? c.options.position : s.latLng), S || v(c.options.position), d = new A.classes.InfoWindow(c.options), d && (a(c.open) || c.open) && (r ? d.open(S, c.anchor || n) : d.open(S, c.anchor || (e.latLng ? n : e.session.marker ? e.session.marker : n))), o.push(d), u = I.add({td: c}, "infowindow", d), l(i, {td: c}, d, u)
                }), g(e, r ? o : o[0])
            }, x.circle = function (n) {
                var e = [], o = "values" in n.td;
                return o || (n.opts.center = n.latLng || m(n.opts.center), n.td.values = [{options: n.opts}]), n.td.values.length ? (t.each(n.td.values, function (t, o) {
                    var a, r, s = p(n, o);
                    s.options.center = m(s.options.center ? s.options.center : o), S || v(s.options.center), s.options.map = S, r = new A.classes.Circle(s.options), e.push(r), a = I.add({td: s}, "circle", r), l(i, {td: s}, r, a)
                }), void g(n, o ? e : e[0])) : void g(n, !1)
            }, x.getaddress = function (t) {
                c(t, t.results, t.status), b.ack()
            }, x.getlatlng = function (t) {
                c(t, t.results, t.status), b.ack()
            }, x.getmaxzoom = function (t) {
                C().getMaxZoomAtLatLng(t.latLng, function (n) {
                    c(t, n.status === q.MaxZoomStatus.OK ? n.zoom : !1, status), b.ack()
                })
            }, x.getelevation = function (t) {
                var n, e = [], o = function (n, e) {
                    c(t, e === q.ElevationStatus.OK ? n : !1, e), b.ack()
                };
                if (t.latLng) e.push(t.latLng); else for (e = h(t.td.locations || []), n = 0; n < e.length; n++) e[n] = m(e[n]);
                if (e.length) E().getElevationForLocations({locations: e}, o); else {
                    if (t.td.path && t.td.path.length) for (n = 0; n < t.td.path.length; n++) e.push(m(t.td.path[n]));
                    e.length ? E().getElevationAlongPath({path: e, samples: t.td.samples}, o) : b.ack()
                }
            }, x.defaults = function (n) {
                t.each(n.td, function (n, o) {
                    A[n] = e(A[n]) ? t.extend({}, A[n], o) : o
                }), b.ack(!0)
            }, x.rectangle = function (n) {
                var e = [], o = "values" in n.td;
                return o || (n.td.values = [{options: n.opts}]), n.td.values.length ? (t.each(n.td.values, function (t, o) {
                    var a, r, s = p(n, o);
                    s.options.bounds = y(s.options.bounds ? s.options.bounds : o), S || v(s.options.bounds.getCenter()), s.options.map = S, r = new A.classes.Rectangle(s.options), e.push(r), a = I.add({td: s}, "rectangle", r), l(i, {td: s}, r, a)
                }), void g(n, o ? e : e[0])) : void g(n, !1)
            }, x.polyline = function (t) {
                L(t, "Polyline", "path")
            }, x.polygon = function (t) {
                L(t, "Polygon", "paths")
            }, x.trafficlayer = function (t) {
                v();
                var n = I.get("trafficlayer");
                n || (n = new A.classes.TrafficLayer, n.setMap(S), I.add(t, "trafficlayer", n)), g(t, n)
            }, x.bicyclinglayer = function (t) {
                v();
                var n = I.get("bicyclinglayer");
                n || (n = new A.classes.BicyclingLayer, n.setMap(S), I.add(t, "bicyclinglayer", n)), g(t, n)
            }, x.groundoverlay = function (t) {
                t.opts.bounds = y(t.opts.bounds), t.opts.bounds && v(t.opts.bounds.getCenter());
                var n, e = new A.classes.GroundOverlay(t.opts.url, t.opts.bounds, t.opts.opts);
                e.setMap(S), n = I.add(t, "groundoverlay", e), g(t, e, n)
            }, x.streetviewpanorama = function (n) {
                n.opts.opts || (n.opts.opts = {}), n.latLng ? n.opts.opts.position = n.latLng : n.opts.opts.position && (n.opts.opts.position = m(n.opts.opts.position)), n.td.divId ? n.opts.container = document.getElementById(n.td.divId) : n.opts.container && (n.opts.container = t(n.opts.container).get(0));
                var e, o = new A.classes.StreetViewPanorama(n.opts.container, n.opts.opts);
                o && S.setStreetView(o), e = I.add(n, "streetviewpanorama", o), g(n, o, e)
            }, x.kmllayer = function (n) {
                var e = [], o = "values" in n.td;
                return o || (n.td.values = [{options: n.opts}]), n.td.values.length ? (t.each(n.td.values, function (t, o) {
                    var a, r, s, d = p(n, o);
                    S || v(), s = d.options, d.options.opts && (s = d.options.opts, d.options.url && (s.url = d.options.url)), s.map = S, r = u("3.10") ? new A.classes.KmlLayer(s) : new A.classes.KmlLayer(s.url, s), e.push(r), a = I.add({td: d}, "kmllayer", r), l(i, {td: d}, r, a)
                }), void g(n, o ? e : e[0])) : void g(n, !1)
            }, x.panel = function (n) {
                v();
                var e, o, r = 0, s = 0, u = t(document.createElement("div"));
                u.css({
                    position: "absolute",
                    zIndex: 1e3,
                    visibility: "hidden"
                }), n.opts.content && (o = t(n.opts.content), u.append(o), i.first().prepend(u), a(n.opts.left) ? a(n.opts.right) ? n.opts.center && (r = (i.width() - o.width()) / 2) : r = i.width() - o.width() - n.opts.right : r = n.opts.left, a(n.opts.top) ? a(n.opts.bottom) ? n.opts.middle && (s = (i.height() - o.height()) / 2) : s = i.height() - o.height() - n.opts.bottom : s = n.opts.top, u.css({
                    top: s,
                    left: r,
                    visibility: "visible"
                })), e = I.add(n, "panel", u), g(n, u, e), u = null
            }, x.directionsrenderer = function (n) {
                n.opts.map = S;
                var e, o = new q.DirectionsRenderer(n.opts);
                n.td.divId ? o.setPanel(document.getElementById(n.td.divId)) : n.td.container && o.setPanel(t(n.td.container).get(0)), e = I.add(n, "directionsrenderer", o), g(n, o, e)
            }, x.getgeoloc = function (t) {
                g(t, t.latLng)
            }, x.styledmaptype = function (t) {
                v();
                var n = new A.classes.StyledMapType(t.td.styles, t.opts);
                S.mapTypes.set(t.td.id, n), g(t, n)
            }, x.imagemaptype = function (t) {
                v();
                var n = new A.classes.ImageMapType(t.opts);
                S.mapTypes.set(t.td.id, n), g(t, n)
            }, x.autofit = function (n) {
                var e = new q.LatLngBounds;
                t.each(I.all(), function (t, n) {
                    n.getPosition ? e.extend(n.getPosition()) : n.getBounds ? (e.extend(n.getBounds().getNorthEast()), e.extend(n.getBounds().getSouthWest())) : n.getPaths ? n.getPaths().forEach(function (t) {
                        t.forEach(function (t) {
                            e.extend(t)
                        })
                    }) : n.getPath ? n.getPath().forEach(function (t) {
                        e.extend(t)
                    }) : n.getCenter ? e.extend(n.getCenter()) : "function" == typeof _ && n instanceof _ && (n = I.getById(n.id(), !0), n && n.autofit(e))
                }), e.isEmpty() || S.getBounds() && S.getBounds().equals(e) || ("maxZoom" in n.td && q.event.addListenerOnce(S, "bounds_changed", function () {
                    this.getZoom() > n.td.maxZoom && this.setZoom(n.td.maxZoom)
                }), S.fitBounds(e)), g(n, !0)
            }, x.clear = function (n) {
                if (o(n.td)) {
                    if (I.clearById(n.td) || I.objClearById(n.td)) return void g(n, !0);
                    n.td = {name: n.td}
                }
                n.td.id ? t.each(h(n.td.id), function (t, n) {
                    I.clearById(n) || I.objClearById(n)
                }) : (I.clear(h(n.td.name), n.td.last, n.td.first, n.td.tag), I.objClear(h(n.td.name), n.td.last, n.td.first, n.td.tag)), g(n, !0)
            }, x.get = function (e, i, a) {
                var r, s, u = i ? e : e.td;
                return i || (a = u.full), o(u) ? (s = I.getById(u, !1, a) || I.objGetById(u), s === !1 && (r = u, u = {})) : r = u.name, "map" === r && (s = S), s || (s = [], u.id ? (t.each(h(u.id), function (t, n) {
                    s.push(I.getById(n, !1, a) || I.objGetById(n))
                }), R(u.id) || (s = s[0])) : (t.each(r ? h(r) : [n], function (n, e) {
                    var o;
                    u.first ? (o = I.get(e, !1, u.tag, a), o && s.push(o)) : u.all ? t.each(I.all(e, u.tag, a), function (t, n) {
                        s.push(n)
                    }) : (o = I.get(e, !0, u.tag, a), o && s.push(o))
                }), u.all || R(r) || (s = s[0]))), s = R(s) || !u.all ? s : [s], i ? s : void g(e, s)
            }, x.exec = function (n) {
                t.each(h(n.td.func), function (e, o) {
                    t.each(x.get(n.td, !0, n.td.hasOwnProperty("full") ? n.td.full : !0), function (t, n) {
                        o.call(i, n)
                    })
                }), g(n, !0)
            }, x.trigger = function (n) {
                if (o(n.td)) q.event.trigger(S, n.td); else {
                    var e = [S, n.td.eventName];
                    n.td.var_args && t.each(n.td.var_args, function (t, n) {
                        e.push(n)
                    }), q.event.trigger.apply(q.event, e)
                }
                c(n), b.ack()
            }
        }

        var A, q, Z = 0, z = t.isFunction, R = t.isArray, V = {}, G = new I;
        t.fn.gmap3 = function () {
            var n, e = [], o = !0, i = [];
            for (r(), n = 0; n < arguments.length; n++) arguments[n] && e.push(arguments[n]);
            return e.length || e.push("map"), t.each(this, function () {
                var n = t(this), a = n.data("gmap3");
                o = !1, a || (a = new U(n), n.data("gmap3", a)), 1 !== e.length || "get" !== e[0] && !x(e[0]) ? a._plan(e) : i.push("get" === e[0] ? a.get("map", !0) : a.get(e[0].get, !0, e[0].get.full))
            }), i.length ? 1 === i.length ? i[0] : i : this
        }
    }(jQuery);
}, 100);
