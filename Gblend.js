var zo = {
    exports: {}
};
(function(r) {
    (function() {
        var t = "input is invalid type"
          , e = "finalize already called"
          , n = typeof window == "object"
          , i = n ? window : {};
        i.JS_SHA3_NO_WINDOW && (n = !1);
        var o = !n && typeof self == "object"
          , f = !i.JS_SHA3_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
        f ? i = Ho : o && (i = self);
        var l = !i.JS_SHA3_NO_COMMON_JS && !0 && r.exports
          , c = !i.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u"
          , d = "0123456789abcdef".split("")
          , v = [31, 7936, 2031616, 520093696]
          , w = [4, 1024, 262144, 67108864]
          , M = [1, 256, 65536, 16777216]
          , N = [6, 1536, 393216, 100663296]
          , k = [0, 8, 16, 24]
          , R = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648]
          , U = [224, 256, 384, 512]
          , C = [128, 256]
          , D = ["hex", "buffer", "arrayBuffer", "array", "digest"]
          , J = {
            128: 168,
            256: 136
        };
        (i.JS_SHA3_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(h) {
            return Object.prototype.toString.call(h) === "[object Array]"
        }
        ),
        c && (i.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(h) {
            return typeof h == "object" && h.buffer && h.buffer.constructor === ArrayBuffer
        }
        );
        for (var j = function(h, _, P) {
            return function(S) {
                return new a(h,_,h).update(S)[P]()
            }
        }, z = function(h, _, P) {
            return function(S, B) {
                return new a(h,_,B).update(S)[P]()
            }
        }, K = function(h, _, P) {
            return function(S, B, H, L) {
                return s["cshake" + h].update(S, B, H, L)[P]()
            }
        }, it = function(h, _, P) {
            return function(S, B, H, L) {
                return s["kmac" + h].update(S, B, H, L)[P]()
            }
        }, st = function(h, _, P, S) {
            for (var B = 0; B < D.length; ++B) {
                var H = D[B];
                h[H] = _(P, S, H)
            }
            return h
        }, at = function(h, _) {
            var P = j(h, _, "hex");
            return P.create = function() {
                return new a(h,_,h)
            }
            ,
            P.update = function(S) {
                return P.create().update(S)
            }
            ,
            st(P, j, h, _)
        }, Zt = function(h, _) {
            var P = z(h, _, "hex");
            return P.create = function(S) {
                return new a(h,_,S)
            }
            ,
            P.update = function(S, B) {
                return P.create(B).update(S)
            }
            ,
            st(P, z, h, _)
        }, ot = function(h, _) {
            var P = J[h]
              , S = K(h, _, "hex");
            return S.create = function(B, H, L) {
                return !H && !L ? s["shake" + h].create(B) : new a(h,_,B).bytepad([H, L], P)
            }
            ,
            S.update = function(B, H, L, T) {
                return S.create(H, L, T).update(B)
            }
            ,
            st(S, K, h, _)
        }, Wt = function(h, _) {
            var P = J[h]
              , S = it(h, _, "hex");
            return S.create = function(B, H, L) {
                return new y(h,_,H).bytepad(["KMAC", L], P).bytepad([B], P)
            }
            ,
            S.update = function(B, H, L, T) {
                return S.create(B, L, T).update(H)
            }
            ,
            st(S, it, h, _)
        }, b = [{
            name: "keccak",
            padding: M,
            bits: U,
            createMethod: at
        }, {
            name: "sha3",
            padding: N,
            bits: U,
            createMethod: at
        }, {
            name: "shake",
            padding: v,
            bits: C,
            createMethod: Zt
        }, {
            name: "cshake",
            padding: w,
            bits: C,
            createMethod: ot
        }, {
            name: "kmac",
            padding: w,
            bits: C,
            createMethod: Wt
        }], s = {}, u = [], p = 0; p < b.length; ++p)
            for (var m = b[p], A = m.bits, x = 0; x < A.length; ++x) {
                var E = m.name + "_" + A[x];
                if (u.push(E),
                s[E] = m.createMethod(A[x], m.padding),
                m.name !== "sha3") {
                    var g = m.name + A[x];
                    u.push(g),
                    s[g] = s[E]
                }
            }
        function a(h, _, P) {
            this.blocks = [],
            this.s = [],
            this.padding = _,
            this.outputBits = P,
            this.reset = !0,
            this.finalized = !1,
            this.block = 0,
            this.start = 0,
            this.blockCount = 1600 - (h << 1) >> 5,
            this.byteCount = this.blockCount << 2,
            this.outputBlocks = P >> 5,
            this.extraBytes = (P & 31) >> 3;
            for (var S = 0; S < 50; ++S)
                this.s[S] = 0
        }
        a.prototype.update = function(h) {
            if (this.finalized)
                throw new Error(e);
            var _, P = typeof h;
            if (P !== "string") {
                if (P === "object") {
                    if (h === null)
                        throw new Error(t);
                    if (c && h.constructor === ArrayBuffer)
                        h = new Uint8Array(h);
                    else if (!Array.isArray(h) && (!c || !ArrayBuffer.isView(h)))
                        throw new Error(t)
                } else
                    throw new Error(t);
                _ = !0
            }
            for (var S = this.blocks, B = this.byteCount, H = h.length, L = this.blockCount, T = 0, $ = this.s, O, Y; T < H; ) {
                if (this.reset)
                    for (this.reset = !1,
                    S[0] = this.block,
                    O = 1; O < L + 1; ++O)
                        S[O] = 0;
                if (_)
                    for (O = this.start; T < H && O < B; ++T)
                        S[O >> 2] |= h[T] << k[O++ & 3];
                else
                    for (O = this.start; T < H && O < B; ++T)
                        Y = h.charCodeAt(T),
                        Y < 128 ? S[O >> 2] |= Y << k[O++ & 3] : Y < 2048 ? (S[O >> 2] |= (192 | Y >> 6) << k[O++ & 3],
                        S[O >> 2] |= (128 | Y & 63) << k[O++ & 3]) : Y < 55296 || Y >= 57344 ? (S[O >> 2] |= (224 | Y >> 12) << k[O++ & 3],
                        S[O >> 2] |= (128 | Y >> 6 & 63) << k[O++ & 3],
                        S[O >> 2] |= (128 | Y & 63) << k[O++ & 3]) : (Y = 65536 + ((Y & 1023) << 10 | h.charCodeAt(++T) & 1023),
                        S[O >> 2] |= (240 | Y >> 18) << k[O++ & 3],
                        S[O >> 2] |= (128 | Y >> 12 & 63) << k[O++ & 3],
                        S[O >> 2] |= (128 | Y >> 6 & 63) << k[O++ & 3],
                        S[O >> 2] |= (128 | Y & 63) << k[O++ & 3]);
                if (this.lastByteIndex = O,
                O >= B) {
                    for (this.start = O - B,
                    this.block = S[L],
                    O = 0; O < L; ++O)
                        $[O] ^= S[O];
                    q($),
                    this.reset = !0
                } else
                    this.start = O
            }
            return this
        }
        ,
        a.prototype.encode = function(h, _) {
            var P = h & 255
              , S = 1
              , B = [P];
            for (h = h >> 8,
            P = h & 255; P > 0; )
                B.unshift(P),
                h = h >> 8,
                P = h & 255,
                ++S;
            return _ ? B.push(S) : B.unshift(S),
            this.update(B),
            B.length
        }
        ,
        a.prototype.encodeString = function(h) {
            var _, P = typeof h;
            if (P !== "string") {
                if (P === "object") {
                    if (h === null)
                        throw new Error(t);
                    if (c && h.constructor === ArrayBuffer)
                        h = new Uint8Array(h);
                    else if (!Array.isArray(h) && (!c || !ArrayBuffer.isView(h)))
                        throw new Error(t)
                } else
                    throw new Error(t);
                _ = !0
            }
            var S = 0
              , B = h.length;
            if (_)
                S = B;
            else
                for (var H = 0; H < h.length; ++H) {
                    var L = h.charCodeAt(H);
                    L < 128 ? S += 1 : L < 2048 ? S += 2 : L < 55296 || L >= 57344 ? S += 3 : (L = 65536 + ((L & 1023) << 10 | h.charCodeAt(++H) & 1023),
                    S += 4)
                }
            return S += this.encode(S * 8),
            this.update(h),
            S
        }
        ,
        a.prototype.bytepad = function(h, _) {
            for (var P = this.encode(_), S = 0; S < h.length; ++S)
                P += this.encodeString(h[S]);
            var B = _ - P % _
              , H = [];
            return H.length = B,
            this.update(H),
            this
        }
        ,
        a.prototype.finalize = function() {
            if (!this.finalized) {
                this.finalized = !0;
                var h = this.blocks
                  , _ = this.lastByteIndex
                  , P = this.blockCount
                  , S = this.s;
                if (h[_ >> 2] |= this.padding[_ & 3],
                this.lastByteIndex === this.byteCount)
                    for (h[0] = h[P],
                    _ = 1; _ < P + 1; ++_)
                        h[_] = 0;
                for (h[P - 1] |= 2147483648,
                _ = 0; _ < P; ++_)
                    S[_] ^= h[_];
                q(S)
            }
        }
        ,
        a.prototype.toString = a.prototype.hex = function() {
            this.finalize();
            for (var h = this.blockCount, _ = this.s, P = this.outputBlocks, S = this.extraBytes, B = 0, H = 0, L = "", T; H < P; ) {
                for (B = 0; B < h && H < P; ++B,
                ++H)
                    T = _[B],
                    L += d[T >> 4 & 15] + d[T & 15] + d[T >> 12 & 15] + d[T >> 8 & 15] + d[T >> 20 & 15] + d[T >> 16 & 15] + d[T >> 28 & 15] + d[T >> 24 & 15];
                H % h === 0 && (q(_),
                B = 0)
            }
            return S && (T = _[B],
            L += d[T >> 4 & 15] + d[T & 15],
            S > 1 && (L += d[T >> 12 & 15] + d[T >> 8 & 15]),
            S > 2 && (L += d[T >> 20 & 15] + d[T >> 16 & 15])),
            L
        }
        ,
        a.prototype.arrayBuffer = function() {
            this.finalize();
            var h = this.blockCount, _ = this.s, P = this.outputBlocks, S = this.extraBytes, B = 0, H = 0, L = this.outputBits >> 3, T;
            S ? T = new ArrayBuffer(P + 1 << 2) : T = new ArrayBuffer(L);
            for (var $ = new Uint32Array(T); H < P; ) {
                for (B = 0; B < h && H < P; ++B,
                ++H)
                    $[H] = _[B];
                H % h === 0 && q(_)
            }
            return S && ($[B] = _[B],
            T = T.slice(0, L)),
            T
        }
        ,
        a.prototype.buffer = a.prototype.arrayBuffer,
        a.prototype.digest = a.prototype.array = function() {
            this.finalize();
            for (var h = this.blockCount, _ = this.s, P = this.outputBlocks, S = this.extraBytes, B = 0, H = 0, L = [], T, $; H < P; ) {
                for (B = 0; B < h && H < P; ++B,
                ++H)
                    T = H << 2,
                    $ = _[B],
                    L[T] = $ & 255,
                    L[T + 1] = $ >> 8 & 255,
                    L[T + 2] = $ >> 16 & 255,
                    L[T + 3] = $ >> 24 & 255;
                H % h === 0 && q(_)
            }
            return S && (T = H << 2,
            $ = _[B],
            L[T] = $ & 255,
            S > 1 && (L[T + 1] = $ >> 8 & 255),
            S > 2 && (L[T + 2] = $ >> 16 & 255)),
            L
        }
        ;
        function y(h, _, P) {
            a.call(this, h, _, P)
        }
        y.prototype = new a,
        y.prototype.finalize = function() {
            return this.encode(this.outputBits, !0),
            a.prototype.finalize.call(this)
        }
        ;
        var q = function(h) {
            var _, P, S, B, H, L, T, $, O, Y, Ve, lt, ht, Ze, ct, dt, $e, pt, vt, tr, gt, mt, er, yt, wt, rr, At, bt, nr, xt, Et, ir, _t, Mt, or, Nt, kt, sr, It, St, fr, Pt, Rt, ar, Ct, Bt, ur, Tt, Ot, lr, Lt, Dt, hr, Ft, Ut, cr, qt, Gt, qe, Ge, He, ze, Ke;
            for (S = 0; S < 48; S += 2)
                B = h[0] ^ h[10] ^ h[20] ^ h[30] ^ h[40],
                H = h[1] ^ h[11] ^ h[21] ^ h[31] ^ h[41],
                L = h[2] ^ h[12] ^ h[22] ^ h[32] ^ h[42],
                T = h[3] ^ h[13] ^ h[23] ^ h[33] ^ h[43],
                $ = h[4] ^ h[14] ^ h[24] ^ h[34] ^ h[44],
                O = h[5] ^ h[15] ^ h[25] ^ h[35] ^ h[45],
                Y = h[6] ^ h[16] ^ h[26] ^ h[36] ^ h[46],
                Ve = h[7] ^ h[17] ^ h[27] ^ h[37] ^ h[47],
                lt = h[8] ^ h[18] ^ h[28] ^ h[38] ^ h[48],
                ht = h[9] ^ h[19] ^ h[29] ^ h[39] ^ h[49],
                _ = lt ^ (L << 1 | T >>> 31),
                P = ht ^ (T << 1 | L >>> 31),
                h[0] ^= _,
                h[1] ^= P,
                h[10] ^= _,
                h[11] ^= P,
                h[20] ^= _,
                h[21] ^= P,
                h[30] ^= _,
                h[31] ^= P,
                h[40] ^= _,
                h[41] ^= P,
                _ = B ^ ($ << 1 | O >>> 31),
                P = H ^ (O << 1 | $ >>> 31),
                h[2] ^= _,
                h[3] ^= P,
                h[12] ^= _,
                h[13] ^= P,
                h[22] ^= _,
                h[23] ^= P,
                h[32] ^= _,
                h[33] ^= P,
                h[42] ^= _,
                h[43] ^= P,
                _ = L ^ (Y << 1 | Ve >>> 31),
                P = T ^ (Ve << 1 | Y >>> 31),
                h[4] ^= _,
                h[5] ^= P,
                h[14] ^= _,
                h[15] ^= P,
                h[24] ^= _,
                h[25] ^= P,
                h[34] ^= _,
                h[35] ^= P,
                h[44] ^= _,
                h[45] ^= P,
                _ = $ ^ (lt << 1 | ht >>> 31),
                P = O ^ (ht << 1 | lt >>> 31),
                h[6] ^= _,
                h[7] ^= P,
                h[16] ^= _,
                h[17] ^= P,
                h[26] ^= _,
                h[27] ^= P,
                h[36] ^= _,
                h[37] ^= P,
                h[46] ^= _,
                h[47] ^= P,
                _ = Y ^ (B << 1 | H >>> 31),
                P = Ve ^ (H << 1 | B >>> 31),
                h[8] ^= _,
                h[9] ^= P,
                h[18] ^= _,
                h[19] ^= P,
                h[28] ^= _,
                h[29] ^= P,
                h[38] ^= _,
                h[39] ^= P,
                h[48] ^= _,
                h[49] ^= P,
                Ze = h[0],
                ct = h[1],
                Bt = h[11] << 4 | h[10] >>> 28,
                ur = h[10] << 4 | h[11] >>> 28,
                bt = h[20] << 3 | h[21] >>> 29,
                nr = h[21] << 3 | h[20] >>> 29,
                Ge = h[31] << 9 | h[30] >>> 23,
                He = h[30] << 9 | h[31] >>> 23,
                Pt = h[40] << 18 | h[41] >>> 14,
                Rt = h[41] << 18 | h[40] >>> 14,
                Mt = h[2] << 1 | h[3] >>> 31,
                or = h[3] << 1 | h[2] >>> 31,
                dt = h[13] << 12 | h[12] >>> 20,
                $e = h[12] << 12 | h[13] >>> 20,
                Tt = h[22] << 10 | h[23] >>> 22,
                Ot = h[23] << 10 | h[22] >>> 22,
                xt = h[33] << 13 | h[32] >>> 19,
                Et = h[32] << 13 | h[33] >>> 19,
                ze = h[42] << 2 | h[43] >>> 30,
                Ke = h[43] << 2 | h[42] >>> 30,
                Ft = h[5] << 30 | h[4] >>> 2,
                Ut = h[4] << 30 | h[5] >>> 2,
                Nt = h[14] << 6 | h[15] >>> 26,
                kt = h[15] << 6 | h[14] >>> 26,
                pt = h[25] << 11 | h[24] >>> 21,
                vt = h[24] << 11 | h[25] >>> 21,
                lr = h[34] << 15 | h[35] >>> 17,
                Lt = h[35] << 15 | h[34] >>> 17,
                ir = h[45] << 29 | h[44] >>> 3,
                _t = h[44] << 29 | h[45] >>> 3,
                yt = h[6] << 28 | h[7] >>> 4,
                wt = h[7] << 28 | h[6] >>> 4,
                cr = h[17] << 23 | h[16] >>> 9,
                qt = h[16] << 23 | h[17] >>> 9,
                sr = h[26] << 25 | h[27] >>> 7,
                It = h[27] << 25 | h[26] >>> 7,
                tr = h[36] << 21 | h[37] >>> 11,
                gt = h[37] << 21 | h[36] >>> 11,
                Dt = h[47] << 24 | h[46] >>> 8,
                hr = h[46] << 24 | h[47] >>> 8,
                ar = h[8] << 27 | h[9] >>> 5,
                Ct = h[9] << 27 | h[8] >>> 5,
                rr = h[18] << 20 | h[19] >>> 12,
                At = h[19] << 20 | h[18] >>> 12,
                Gt = h[29] << 7 | h[28] >>> 25,
                qe = h[28] << 7 | h[29] >>> 25,
                St = h[38] << 8 | h[39] >>> 24,
                fr = h[39] << 8 | h[38] >>> 24,
                mt = h[48] << 14 | h[49] >>> 18,
                er = h[49] << 14 | h[48] >>> 18,
                h[0] = Ze ^ ~dt & pt,
                h[1] = ct ^ ~$e & vt,
                h[10] = yt ^ ~rr & bt,
                h[11] = wt ^ ~At & nr,
                h[20] = Mt ^ ~Nt & sr,
                h[21] = or ^ ~kt & It,
                h[30] = ar ^ ~Bt & Tt,
                h[31] = Ct ^ ~ur & Ot,
                h[40] = Ft ^ ~cr & Gt,
                h[41] = Ut ^ ~qt & qe,
                h[2] = dt ^ ~pt & tr,
                h[3] = $e ^ ~vt & gt,
                h[12] = rr ^ ~bt & xt,
                h[13] = At ^ ~nr & Et,
                h[22] = Nt ^ ~sr & St,
                h[23] = kt ^ ~It & fr,
                h[32] = Bt ^ ~Tt & lr,
                h[33] = ur ^ ~Ot & Lt,
                h[42] = cr ^ ~Gt & Ge,
                h[43] = qt ^ ~qe & He,
                h[4] = pt ^ ~tr & mt,
                h[5] = vt ^ ~gt & er,
                h[14] = bt ^ ~xt & ir,
                h[15] = nr ^ ~Et & _t,
                h[24] = sr ^ ~St & Pt,
                h[25] = It ^ ~fr & Rt,
                h[34] = Tt ^ ~lr & Dt,
                h[35] = Ot ^ ~Lt & hr,
                h[44] = Gt ^ ~Ge & ze,
                h[45] = qe ^ ~He & Ke,
                h[6] = tr ^ ~mt & Ze,
                h[7] = gt ^ ~er & ct,
                h[16] = xt ^ ~ir & yt,
                h[17] = Et ^ ~_t & wt,
                h[26] = St ^ ~Pt & Mt,
                h[27] = fr ^ ~Rt & or,
                h[36] = lr ^ ~Dt & ar,
                h[37] = Lt ^ ~hr & Ct,
                h[46] = Ge ^ ~ze & Ft,
                h[47] = He ^ ~Ke & Ut,
                h[8] = mt ^ ~Ze & dt,
                h[9] = er ^ ~ct & $e,
                h[18] = ir ^ ~yt & rr,
                h[19] = _t ^ ~wt & At,
                h[28] = Pt ^ ~Mt & Nt,
                h[29] = Rt ^ ~or & kt,
                h[38] = Dt ^ ~ar & Bt,
                h[39] = hr ^ ~Ct & ur,
                h[48] = ze ^ ~Ft & cr,
                h[49] = Ke ^ ~Ut & qt,
                h[0] ^= R[S],
                h[1] ^= R[S + 1]
        };
        if (l)
            r.exports = s;
        else
            for (p = 0; p < u.length; ++p)
                i[u[p]] = s[u[p]]
    }
    )()
}
)(zo);
var xf = zo.exports;
function Mn(r) {
    return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r
}
const Ef = Mn(xf);
function Xt(r) {
    return "0x" + Ef.keccak_256(Z(r))
}
function Go(r) {
    return !!r.toHexString
}
function En(r) {
    if (r == null)
        return !1;
    if (r.constructor === Uint8Array)
        return !0;
    if (typeof r == "string" || !Ji(r.length) || r.length < 0)
        return !1;
    for (let t = 0; t < r.length; t++) {
        const e = r[t];
        if (!Ji(e) || e < 0 || e >= 256)
            return !1
    }
    return !0
}
function _r(r) {
    return r.slice || (r.slice = function() {
        const t = Array.prototype.slice.call(arguments);
        return _r(new Uint8Array(Array.prototype.slice.apply(r, t)))
    }
    ),
    r
}
function Z(r, t) {
    if (t || (t = {}),
    typeof r == "number") {
        Kt.checkSafeUint53(r, "invalid arrayify value");
        const e = [];
        for (; r; )
            e.unshift(r & 255),
            r = parseInt(String(r / 256));
        return e.length === 0 && e.push(0),
        _r(new Uint8Array(e))
    }
    if (t.allowMissingPrefix && typeof r == "string" && r.substring(0, 2) !== "0x" && (r = "0x" + r),
    Go(r) && (r = r.toHexString()),
    ut(r)) {
        let e = r.substring(2);
        e.length % 2 && (t.hexPad === "left" ? e = "0" + e : t.hexPad === "right" ? e += "0" : Kt.throwArgumentError("hex data is odd-length", "value", r));
        const n = [];
        for (let i = 0; i < e.length; i += 2)
            n.push(parseInt(e.substring(i, i + 2), 16));
        return _r(new Uint8Array(n))
    }
    return En(r) ? _r(new Uint8Array(r)) : Kt.throwArgumentError("invalid arrayify value", "value", r)
}
function ut(r, t) {
    return !(typeof r != "string" || !r.match(/^0x[0-9A-Fa-f]*$/) || t && r.length !== 2 + 2 * t)
}
function Vi(r) {
    ut(r, 20) || xr.throwArgumentError("invalid address", "address", r),
    r = r.toLowerCase();
    const t = r.substring(2).split("")
      , e = new Uint8Array(40);
    for (let i = 0; i < 40; i++)
        e[i] = t[i].charCodeAt(0);
    const n = Z(Xt(e));
    for (let i = 0; i < 40; i += 2)
        n[i >> 1] >> 4 >= 8 && (t[i] = t[i].toUpperCase()),
        (n[i >> 1] & 15) >= 8 && (t[i + 1] = t[i + 1].toUpperCase());
    return "0x" + t.join("")
}
function he(r) {
    let t = null;
    if (typeof r != "string" && xr.throwArgumentError("invalid address", "address", r),
    r.match(/^(0x)?[0-9a-fA-F]{40}$/))
        r.substring(0, 2) !== "0x" && (r = "0x" + r),
        t = Vi(r),
        r.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && t !== r && xr.throwArgumentError("bad address checksum", "address", r);
    else if (r.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
        for (r.substring(2, 4) !== If(r) && xr.throwArgumentError("bad icap checksum", "address", r),
        t = bf(r.substring(4)); t.length < 40; )
            t = "0" + t;
        t = Vi("0x" + t)
    } else
        xr.throwArgumentError("invalid address", "address", r);
    return t
}
