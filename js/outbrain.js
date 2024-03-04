window.OBR ||
  (function () {
    window.OBR = {
      _jsc: {},
      env: 1,
      settings: {
        fraudDetection: "0",
        disableLocalStorageGdpr: false,
        delayWidgetTime: 0,
        delayWidgetInterval: 0,
        disableLslGdprEuUsers: false,
        skeletonData: '[["HPC",0.63,4, "desktop"]]',
        enableDebuggingReports: 0,
        loadingOnGDPRSignal: 0,
        skipAdblock: 0,
        publisherSubscriptionSelector: ".sso__link",
        _pid: "30836",
        ab: "1451-5135-5136~100",
      },
    };
    OBR.error = function (a) {
      var d = ["www.vanguardngr.com"];
      if (!0 !== a) {
        var b,
          c = document,
          h = window.OB_releaseVer,
          k = OBR && OBR.env ? OBR.env : 1,
          l = a.isMonitorRepeated ? "&isMonitorRepeated=true" : "",
          m = a.errorEleUrl
            ? "&errorEleUrl=" + encodeURIComponent(a.errorEleUrl)
            : "",
          n =
            OBR &&
            OBR.settings &&
            (OBR.settings.disableLocalStorageGdpr ||
              1 === OBR.settings.disableStorageAndCookies),
          f = OBR.localStorageAvailable;
        d =
          window.location &&
          window.location.hostname &&
          -1 < d.indexOf(window.location.hostname);
        if (!c.getElementById("obMntor") && !d) {
          var g = function () {
            b = c.createElement("iframe");
            b.setAttribute("id", "obMntor");
            b.style.display = "none";
            c.body.appendChild(b);
            var e =
              "https://widgets.outbrain.com/widgetMonitor/monitor.html?name=" +
              encodeURIComponent(a.name) +
              "&env=" +
              k +
              "&message=" +
              encodeURIComponent(a.message) +
              l +
              "&stack=" +
              encodeURIComponent(a.stack) +
              "&ver=" +
              encodeURIComponent(h) +
              "&ren=" +
              encodeURIComponent(OBR.ren) +
              m;
            OBR &&
              OBR.monitorData &&
              (e +=
                "&sId=" +
                OBR.monitorData.sourceId +
                "&dId=" +
                OBR.monitorData.docId +
                "&pId=" +
                OBR.monitorData.pubId);
            if (!1 === f || (n && "undefined" == typeof f)) e += "&dLs=1";
            b.src = e;
            "function" === typeof OBR.issue && OBR.issue(a);
          };
          c.body
            ? g()
            : setTimeout(function () {
                c.body && g();
              }, 1e4);
        }
      }
    };
    OBR.error.cleanLS = function () {
      if (!window.obMonitorLocalstorageCleaned) {
        window.obMonitorLocalstorageCleaned = !0;
        try {
          const a = document.createElement("iframe");
          a.onload = function () {
            try {
              this.remove();
            } catch (d) {}
          };
          a.id = "obMntorDeleteLS";
          a.src =
            "https://widgets.outbrain.com/widgetMonitor/monitor.html?deletelocalstorage=true";
          document.body.appendChild(a);
        } catch (a) {}
      }
    };
    try {
      var ccs = function () {
        (function () {
          var ba,
            x,
            fa,
            ia,
            ja,
            ka,
            la,
            na,
            pa,
            qa,
            sa,
            ra,
            ta,
            ua,
            va,
            wa,
            Ba,
            Ca,
            Da,
            Ea,
            Fa,
            Na,
            F,
            Pa,
            Qa,
            Sa,
            Ta,
            Ua,
            Ya,
            Xa,
            ab,
            Va,
            Wa,
            bb,
            Za,
            $a,
            eb,
            fb,
            cb,
            db,
            gb,
            nb,
            hb,
            mb,
            ob,
            sb,
            pb,
            qb,
            rb,
            wb,
            xb,
            yb,
            zb,
            Ab,
            Bb,
            Fb,
            Ub,
            Vb,
            Cb,
            Xb,
            Eb,
            Yb,
            Zb,
            ac,
            bc,
            cc,
            dc,
            ec,
            fc,
            gc,
            hc,
            jc,
            kc,
            lc,
            mc,
            sc,
            tc,
            oc,
            yc,
            Bc,
            Cc,
            uc,
            vc,
            wc,
            Ac,
            Dc,
            Ic,
            xc,
            Mc,
            Nc,
            Oc,
            Pc,
            Rc,
            Sc,
            Tc,
            Qc,
            Uc,
            Vc,
            Wc,
            Yc,
            Zc,
            $c,
            ad,
            bd,
            dd,
            fd,
            gd,
            hd,
            jd,
            kd,
            ld,
            nd,
            md,
            od,
            qd,
            rd,
            sd,
            td,
            ud,
            vd,
            wd,
            xd,
            yd,
            zd,
            Bd,
            Fd,
            Hd,
            Kd,
            Id,
            Jd,
            L,
            Ld,
            Md,
            Nd,
            Od,
            Pd,
            Qd,
            Rd,
            Sd,
            Td,
            Ud,
            Vd,
            Wd,
            Xd,
            Yd,
            Zd,
            $d,
            ae,
            be,
            ce,
            de,
            ee,
            fe,
            ge,
            M,
            he,
            re,
            se,
            te,
            ue,
            ve,
            we,
            ye,
            ze,
            Ge,
            Ae,
            Be,
            Ce,
            De,
            Ee,
            Fe,
            Je,
            Ke,
            Le,
            Me,
            Ne,
            Oe,
            Pe,
            Re,
            Te,
            Ve,
            We,
            Xe,
            Ze,
            Ue,
            $e,
            Ye,
            af,
            bf,
            cf,
            df,
            ef,
            ff,
            Se,
            gf,
            hf,
            kf,
            jf,
            lf,
            mf,
            nf,
            of,
            pf,
            Ff,
            Gf,
            If,
            Db,
            Lf,
            Kf,
            Of,
            Pf,
            Qf,
            Rf,
            Uf,
            Xf,
            Zf,
            Sf,
            Tf,
            $f,
            ag,
            Vf,
            Wf,
            Yf,
            dg,
            eg,
            cg,
            bg,
            fg,
            hg,
            ig,
            jg,
            kg,
            lg,
            mg,
            og,
            pg,
            qg,
            sg,
            tg,
            rg,
            wg,
            vg,
            xg,
            ug,
            zg,
            yg,
            Ag,
            Bg,
            Cg,
            Dg,
            Eg,
            Fg,
            Gg,
            Hg,
            Ig,
            Kg,
            Lg,
            Mg,
            Ng,
            Og,
            Qg,
            Rg,
            Sg,
            Pg,
            Jg,
            Tg,
            Ug,
            Wg,
            Xg,
            Yg,
            Vg,
            ah,
            bh,
            Zg,
            $g,
            dh,
            eh,
            fh,
            ea,
            da;
          ba = function (a) {
            a = [
              "object" == typeof globalThis && globalThis,
              a,
              "object" == typeof window && window,
              "object" == typeof self && self,
              "object" == typeof global && global,
            ];
            for (var b = 0; b < a.length; ++b) {
              var c = a[b];
              if (c && c.Math == Math) return c;
            }
            throw Error("Cannot find global object");
          };
          x = function (a, b) {
            if (b)
              a: {
                var c = da;
                a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                  var e = a[d];
                  if (!(e in c)) break a;
                  c = c[e];
                }
                a = a[a.length - 1];
                d = c[a];
                b = b(d);
                b != d &&
                  null != b &&
                  ea(c, a, { configurable: !0, writable: !0, value: b });
              }
          };
          fa = function (a) {
            function b(d) {
              return a.next(d);
            }
            function c(d) {
              return a.throw(d);
            }
            return new Promise(function (d, e) {
              function f(g) {
                g.done
                  ? d(g.value)
                  : Promise.resolve(g.value).then(b, c).then(f, e);
              }
              f(a.next());
            });
          };
          OBR._jsc.z = function (a) {
            return fa(a());
          };
          ia = function (a) {
            a = Math.trunc(a) || 0;
            0 > a && (a += this.length);
            if (!(0 > a || a >= this.length)) return this[a];
          };
          ja = function (a) {
            return a ? a : ia;
          };
          ka = function (a, b) {
            a instanceof String && (a += "");
            var c = 0,
              d = !1,
              e = {
                next: function () {
                  if (!d && c < a.length) {
                    var f = c++;
                    return { value: b(f, a[f]), done: !1 };
                  }
                  d = !0;
                  return { done: !0, value: void 0 };
                },
              };
            e[Symbol.iterator] = function () {
              return e;
            };
            return e;
          };
          la = function (a) {
            if (!a.EG) {
              a.EG = !0;
              var b = new Event("obEventsChange");
              Object.defineProperty(a.up, "push", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                  Array.prototype.push.apply(this, arguments);
                  window.dispatchEvent(b);
                },
              });
              window.addEventListener("obEventsChange", () => a.A());
            }
          };
          na = function () {
            window.OBR &&
              (OBR.issue = a => {
                if (
                  a &&
                  [
                    "TypeError",
                    "obm-ContainerNotFound",
                    "obm-cmp_fail",
                  ].includes(a.name)
                ) {
                  var b = ma;
                  a &&
                    a.message &&
                    b.fire({
                      name: "issue",
                      widgetId: null,
                      timestamp: Date.now(),
                      version: window.OB_releaseVer,
                      data: { name: a.name, message: a.message },
                    });
                }
              });
          };
          pa = function (a) {
            const b = [];
            if (!a) return b;
            Array.isArray(a)
              ? b.push(...a.filter(c => oa.includes(c)))
              : "all" === a
              ? b.push(...oa)
              : a && oa.includes(a) && b.push(a);
            return b;
          };
          qa = function (a, b, c) {
            return (
              "string" === typeof a &&
              oa.includes(a) &&
              "function" === typeof b &&
              (!c ||
                "all" === c ||
                "string" === typeof c ||
                (Array.isArray(c) && c.every(d => "string" === typeof d)))
            );
          };
          sa = function (a, b) {
            const c = ra(b),
              d =
                !a.widgetId ||
                "all" === a.widgetId ||
                ("string" === typeof a.widgetId && c.includes(a.widgetId)) ||
                (Array.isArray(a.widgetId) &&
                  a.widgetId.some(e => c.includes(e)));
            return b.parentWidgetId ? a.feedCards && d : d;
          };
          ra = function (a) {
            return [
              a.widgetId,
              a.servedWidgetId,
              a.parentWidgetId,
              a.servedParentWidgetId,
            ].filter((b, c, d) => !!b && d.indexOf(b) === c);
          };
          ta = function (a, b) {
            const c = ma.B[a];
            return c
              ? c
                  .filter(d => sa(d, { name: a, widgetId: b }))
                  .some(d => !!d.feedCards)
              : !1;
          };
          ua = function () {
            try {
              let a = window.localStorage
                ? window.localStorage.getItem("_lr_env")
                : "";
              if (a) return (a = atob(a)), (a = JSON.parse(a).eD);
              document.cookie.split(";").forEach(b => {
                b = b.trim();
                0 === b.indexOf("_lr_env=") &&
                  (a = JSON.parse(
                    atob(
                      decodeURIComponent(decodeURIComponent(b.split("=")[1]))
                    )
                  ).envelope);
              });
              return a ? a : "";
            } catch (a) {}
          };
          va = function (a) {
            const b = OBR._jsc.B("widgetsLevelLazyLoad");
            return ((null == b ? void 0 : b.length) && -1 < b.indexOf(a)) || !1;
          };
          OBR._jsc.B = function (a) {
            return OBR.settings && OBR.settings[a];
          };
          wa = function (a) {
            var b = window;
            try {
              return a.split(".").reduce((c, d) => (c || {})[d], b) || void 0;
            } catch (c) {}
          };
          Ba = function () {
            if (xa.ye) return !0;
            try {
              if (window.localStorage && window.localStorage.getItem) return !0;
            } catch (a) {
              return !1;
            }
          };
          Ca = function (a) {
            return {
              Nk: a || {},
              setItem: function (b, c) {
                this.Nk[b] = c;
              },
              removeItem: function (b) {
                this.Nk[b] = void 0;
              },
              getItem: function (b) {
                return "undefined" !== typeof this.Nk[b] ? this.Nk[b] : null;
              },
            };
          };
          Da = function (a) {
            const b = {};
            Object.values(OBR._jsc.C).forEach(c => {
              a.get(c, !1) && (b[c] = a.get(c));
              a.delete(c);
            });
            a.ye = Ca(b);
          };
          Ea = function (a) {
            Object.values(OBR._jsc.C).forEach(b => {
              a.delete(b);
            });
            OBR.error && OBR.error.cleanLS && OBR.error.cleanLS();
          };
          Fa = function (a) {
            Object.keys(a.cache).forEach(b => {
              a.set(b, a.cache[b]);
            });
          };
          Na = function (a = null) {
            return a && a.l("disableLocalStorageGdpr", !1)
              ? !0
              : OBR.settings &&
                "undefined" !== typeof OBR.settings.disableLocalStorageGdpr
              ? !!OBR.settings.disableLocalStorageGdpr
              : window.OBBridge && window.OBBridge.disableLocalStorage
              ? !0
              : a
              ? !a.ic()
              : !0;
          };
          F = function (a, b, c) {
            return (a = a.uL.get(b)) ? a : c;
          };
          Pa = function (a, b) {
            a.rF = `${b.my}/widgetOBUserSync/obUserSync.html#pid=${b.zw}&dmpenabled=${b.Pm}&filterDMP=${b.kt}&d=${b.Ys}${b.Ds}&gdpr=${b.Ct}&cmpNeeded=${b.Eu}&gdprVer=${b.Db}&ccpa=${b.vs}&country=${b.country}${b.Gw}&initiator=${b.vu}`;
            a.no();
          };
          Qa = function (a, b, c) {
            b = `${"ob-mark-"}${c ? "0-" : "1-"}${b}`;
            a.im.mark(b);
            a.marks.push(b);
            return b;
          };
          Sa = function () {
            return performance
              .getEntriesByType("resource")
              .filter(a => Ra.test(a.name));
          };
          Ta = function (a, b) {
            OBR.logger.log("remove event :" + b);
            for (let c = 0, d = a.B.length; c < d; c += 1)
              if (a.B[c] && a.B[c].name && a.B[c].name === b)
                try {
                  a.B.splice(c, 1);
                } catch (e) {
                  OBR.logger.log("rm evnt err: " + e), OBR.error(e);
                }
          };
          Ua = function (a) {
            if (window.__tcfapi && "function" === typeof window.__tcfapi) a = 2;
            else {
              if (window.__cmp && "function" === typeof window.__cmp) var b = 1;
              else
                a: {
                  if (OBR.i.Zc) {
                    let c = window,
                      d = 0;
                    for (; c && 10 > d; )
                      try {
                        if (c.frames.__tcfapiLocator) {
                          a.Bq = c;
                          b = 2;
                          break a;
                        }
                        if (c.frames.__cmpLocator) {
                          a.Fm = c;
                          b = 1;
                          break a;
                        }
                        if (c === window.top) break;
                        c = c.parent;
                        d++;
                      } catch (e) {
                        break;
                      }
                  }
                  b = null;
                }
              a = b;
            }
            return a;
          };
          Ya = function (a) {
            if (!OBR.i.cb) {
              var b = Va(),
                c = null === a.Db;
              0 < b &&
                c &&
                ((a.Tb = !0),
                1 === b && (a.Oq = !0),
                Wa(a)
                  .then(d => {
                    a.Db = d;
                    a.Tb = null !== d;
                    Xa(a);
                  })
                  .catch(() => {
                    a.Tb = !1;
                    a.ak();
                  }));
            }
          };
          Xa = function (a) {
            if (
              typeof OBR.i.gl.OB_CONSENT === OBR.i.ls &&
              !1 === OBR.i.gl.OB_CONSENT
            )
              (a.Za = "no_consent"), (a.Tb = !0);
            else if (a.Tb)
              switch (a.Db) {
                case 1:
                  Za(a);
                  break;
                case 2:
                  $a(a);
              }
          };
          ab = function (a) {
            a.qq &&
              window.__uspapi("getUSPData", 1, (b, c) => {
                c && b && b.uspString
                  ? (OBR.logger.log("getCCPAData: " + b.uspString),
                    OBR.g.xa(OBR._jsc.C.Wh, b.uspString),
                    (a.Zb = b.uspString))
                  : OBR.g.fd(
                      "obm-ccpa_fail",
                      document.location.hostname,
                      !1,
                      100
                    );
              });
          };
          Va = function () {
            return OBR.settings && OBR.settings.loadingOnGDPRSignal
              ? OBR.settings.loadingOnGDPRSignal
              : 0;
          };
          Wa = function (a) {
            const b = Date.now(),
              c = (d, e) => {
                const f = Ua(a);
                f
                  ? d(f)
                  : 5e3 <= Date.now() - b
                  ? e()
                  : setTimeout(() => c(d, e), 100);
              };
            return new Promise(c);
          };
          bb = function (a, b) {
            a.hy = !0;
            const c = OBR.g.oa(b);
            OBR.logger.log("Consent on user selection");
            OBR.logger.log(`getConsentData: ${c}`);
            OBR.g.xa(OBR._jsc.C.pc, c);
            a.nb = b;
            a.ak();
          };
          Za = function (a) {
            a.Fm && cb(a);
            try {
              window.__cmp("getConsentData", null, b => {
                b && b.consentData
                  ? ((b = OBR.g.oa(b.consentData)),
                    OBR.logger.log("getConsentData: " + b),
                    OBR.g.xa(OBR._jsc.C.Ge, b),
                    a.ui || (a.Za = b))
                  : OBR.g.fd(
                      "obm-cmp_fail",
                      document.location.hostname,
                      !1,
                      100
                    );
              });
            } catch (b) {
              OBR.g.fd("obm-cmp_fail", document.location.hostname, !1, 100),
                (a.Za = "no_consent"),
                (a.Tb = !0);
            }
          };
          $a = function (a) {
            null != a.Bq && db(a);
            try {
              window.__tcfapi("addEventListener", a.Lh, (b, c) => {
                "cmpuishown" === b.eventStatus && ((a.Oq = !0), eb(a));
                c && "tcloaded" === b.eventStatus
                  ? (b = b.tcString)
                    ? ((b = OBR.g.oa(b)),
                      OBR.logger.log("getConsentData: " + b),
                      OBR.g.xa(OBR._jsc.C.pc, b),
                      a.ui || (a.nb = b),
                      eb(a))
                    : (OBR.g.ae(OBR._jsc.C.pc), (a.Tb = Va()))
                  : fb(a);
              });
            } catch (b) {
              OBR.g.fd("obm-cmp_fail", document.location.hostname, !1, 100),
                (a.Za = "no_consent"),
                (a.Tb = !0);
            }
          };
          eb = function (a) {
            Va() &&
              window.__tcfapi("addEventListener", a.Lh, (b, c) => {
                !c ||
                  ("tcloaded" !== b.eventStatus &&
                    "useractioncomplete" !== b.eventStatus) ||
                  (Va() && bb(a, b.tcString),
                  window.__tcfapi(
                    "removeEventListener",
                    a.Lh,
                    () => {},
                    b.listenerId
                  ));
              });
          };
          fb = function (a) {
            window.__tcfapi("addEventListener", a.Lh, (b, c) => {
              !c ||
              ("tcloaded" !== b.eventStatus &&
                "useractioncomplete" !== b.eventStatus)
                ? OBR.g.fd("obm-cmp_fail", document.location.hostname, !1, 100)
                : b.tcString
                ? ((c = OBR.g.oa(b.tcString)),
                  OBR.logger.log("getConsentData: " + c),
                  OBR.g.xa(OBR._jsc.C.pc, c),
                  a.ui || (a.nb = c),
                  window.__tcfapi(
                    "removeEventListener",
                    a.Lh,
                    () => {},
                    b.listenerId
                  ))
                : (a.Tb = !1);
            });
          };
          cb = function (a) {
            window.__cmp = (b, c, d) => {
              var e = Math.random() + "";
              b = { __cmpCall: { command: b, parameter: c, callId: e } };
              a.$d[e] = d;
              a.Fm.postMessage(b, "*");
            };
            window.addEventListener(
              "message",
              b => {
                try {
                  var c =
                    "string" === typeof b.data ? JSON.parse(b.data) : b.data;
                  if (c.__cmpReturn) {
                    var d = c.__cmpReturn;
                    a.$d[d.callId](d.returnValue, d.success);
                    delete a.$d[d.callId];
                  }
                } catch (e) {}
              },
              !1
            );
          };
          db = function (a) {
            window.__tcfapi = (b, c, d, e) => {
              const f = Math.random() + "";
              b = {
                __tcfapiCall: {
                  command: b,
                  parameter: e,
                  version: c,
                  callId: f,
                },
              };
              a.$d[f] = d;
              a.Bq.postMessage(b, "*");
            };
            window.addEventListener(
              "message",
              function (b) {
                let c = {};
                try {
                  c = "string" === typeof b.data ? JSON.parse(b.data) : b.data;
                } catch (d) {
                  return;
                }
                (b = c.__tcfapiReturn) &&
                  "function" === typeof this.$d[b.callId] &&
                  (this.$d[b.callId](b.returnValue, b.success),
                  (this.$d[b.callId] = null));
              }.bind(a),
              !1
            );
          };
          gb = function () {
            var a = OBR.settings.preloadScripts;
            return Array.isArray(a) && a.every(b => "string" === typeof b);
          };
          nb = function (a, b) {
            OBR.i.Kj() || OBR.i.Lj() || OBR.i.cb
              ? ((a.lb = "false"),
                (a.he = "false"),
                (a.Ri = !0),
                (a.qg = OBR.g.yi([!1, !1])),
                (a.rg = OBR.g.yi([!1, !1])),
                hb(a))
              : a.Ri
              ? OBR.logger.log(
                  "AdBlock - skipped full check detection (called once)"
                )
              : document.body
              ? mb(a)
              : b && b.nH
              ? window.addEventListener("DOMContentLoaded", a.ZH.bind(a))
              : (OBR.logger.log("AdBlock - Don't have body. skip full check"),
                (a.lb = a.lb ? a.lb : "false"),
                (a.he = a.he ? a.he : "false"),
                a.pm.fire("onAdBlockStatusReady", [a.lb]));
          };
          hb = function (a) {
            a.lb = (0 < a.qg).toString();
            OBR.logger.log(
              `AdBlock - finish long status check. adBlock = ${a.lb} wl = ${a.rg}`
            );
            OBR.g.xa(OBR._jsc.C.Uq, a.lb);
            OBR.g.xa(OBR._jsc.C.Vq, a.he);
            a.pm.fire("onAdBlockStatusReady", [a.lb]);
          };
          mb = function (a) {
            a.Ri ||
              (OBR.logger.log("AdBlock - start detection"), (a.Ri = !0), ob(a));
          };
          ob = function (a) {
            Promise.all([pb(a), qb(a), rb(a)]).then(([b, c, d]) => {
              var e = b && c;
              b = [e, b];
              e = [e && d, !1];
              a.he = c ? d.toString() : "false";
              a.qg = OBR.g.yi(b);
              a.rg = OBR.g.yi(e);
              0 === a.qg &&
                2 === a.rg &&
                OBR.error({
                  name: "adblock",
                  message: "got 0 2 in ad blocker detection",
                });
              hb(a);
            });
          };
          sb = function (a, b) {
            var c = OBR.kb;
            return b === c.bt.stopped || b === c.bt.Iq
              ? !1
              : (a =
                  (a = OBR.g.v(a)) &&
                  Array.from(OBR.g.H(a).querySelectorAll(".ob-p > a"))) &&
                  a.some(
                    d => !!d.offsetParent && 10 < d.parentElement.offsetHeight
                  );
          };
          pb = function (a) {
            const b = OBR._jsc.tb(
                '<div style="position:fixed!important;top:-9999px!important;left:-9999px;!important;width:1px!important;height:1px!important;"></div>'
              ),
              c = OBR.g.createElement("a", "ob_ad", a.cssText);
            c.className = "Ads_4 AD_area ADBox AdsRec";
            c.href = "https://paid.outbrain.com/network/redir?";
            b.appendChild(c);
            document.body.appendChild(b);
            return ub((d, e) => {
              setTimeout(() => {
                d ||
                  ((d = !0), e(!c.offsetParent), document.body.removeChild(b));
              }, 0);
            }, a.Om);
          };
          qb = function (a) {
            return ub((b, c) => {
              const d = new Image();
              d.onload = () => {
                b || ((b = !0), c(!1));
              };
              d.onerror = () => {
                b || ((b = !0), c(!0));
              };
              d.src =
                "https://widget-pixels.outbrain.com/widget/detect/px.gif?ch=1";
            }, a.Om);
          };
          rb = function (a) {
            return ub((b, c) => {
              const d = OBR._jsc.tb(
                  '<div class="ob-p ob-dynamic-rec-container" style="position:fixed!important;top:-9999px!important;left:-9999px;!important;width:1px!important;height:1px!important;"></div>'
                ),
                e = OBR._jsc.tb(
                  `<a style="${a.cssText}" onmousedown="this.href='http://paid.outbrain.com/network/redir?'" target="_blank" >ad</a>`
                );
              d.appendChild(e);
              document.body.appendChild(d);
              setTimeout(() => {
                b ||
                  ((b = !0), c(!!e.offsetParent), document.body.removeChild(d));
              }, 0);
            }, a.Om);
          };
          wb = function (a) {
            a = `<div class="ob-chunks-loader${a.qd ? ` ${a.qd}` : ""}">${a.vg
              .map(c => {
                const d =
                    0.5 < c
                      ? [1]
                      : 0.4 < c
                      ? [2]
                      : 0.3 < c
                      ? [2, 3]
                      : 0 < c
                      ? [3]
                      : [1],
                  e = d[~~(Math.random() * d.length)];
                return Array(e)
                  .fill(null)
                  .map(
                    () =>
                      `<div style="padding-top: calc(${
                        100 * c
                      }% - 44px); min-width: ${`calc(${(100 / e).toFixed(
                        2
                      )}% - ${((16 * (e - 1)) / e).toFixed(2)}px)`};"></div>`
                  )
                  .join("");
              })
              .join("")}</div>`;
            if (!vb) {
              var b = [
                { time: 0, opacity: 0.8 },
                { time: 300, opacity: 0.8 },
                { time: 1500, opacity: 0.2 },
                { time: 300, opacity: 0.2 },
                { time: 1500, opacity: 0.8 },
              ];
              const c = b.reduce((d, e) => (e.NA = d + e.time), 0);
              b = `
        @keyframes ob-chunks-anim {
          ${b
            .map(
              d => `${((d.NA / c) * 100).toFixed(2)}% { opacity: ${d.opacity} }`
            )
            .join("\n")}
        }

        .ob-chunks-loader {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        .ob-chunks-loader div {
          position: relative;
          margin: 20px 0 64px 0;
          background-color: #e2dfde;
          animation: ob-chunks-anim ${c}ms ease-in-out 0s infinite;
        }

        .ob-chunks-loader div::before, .ob-chunks-loader div::after {
          content: '';
          position: absolute;
          left: 0;
          height: 14px;
          background-color: #e2dfde;
        }

        .ob-chunks-loader div::before {
          width: 75%;
          bottom: -22px;
        }

        .ob-chunks-loader div::after {
          width: 84%;
          bottom: -44px;
        }
      `;
              OBR.g.ia(b);
              vb = !0;
            }
            return a;
          };
          xb = function (a = {}) {
            a.vg
              ? (a = wb(a))
              : (OBR.g.ia(
                  ".ob_sf_loader {margin: 25px auto 20px; width: 70px; text-align: center;} .ob_sf_loader > div {width: 18px; height: 18px; background-color: #333; border-radius: 100%; display: inline-block;  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both; animation: sk-bouncedelay 1.4s infinite ease-in-out both; }  .ob_sf_loader .bounce1 { -webkit-animation-delay: -0.32s;  animation-delay: -0.32s;  } .ob_sf_loader .bounce2 { -webkit-animation-delay: -0.16s;  animation-delay: -0.16s; }  @-webkit-keyframes sk-bouncedelay { 0%, 80%, 100% { -webkit-transform: scale(0) } 40% { -webkit-transform: scale(1.0) }  }  @keyframes sk-bouncedelay { 0%, 80%, 100% { -webkit-transform: scale(0); transform: scale(0); } 40% { -webkit-transform: scale(1.0);  transform: scale(1.0);  }  }"
                ),
                (a =
                  '<div class="ob_sf_loader">\n                      <div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div>\n                     </div>\n                    '));
            return OBR.g.Oa(a);
          };
          yb = function () {
            try {
              const a = JSON.parse(OBR.g.R(OBR._jsc.C.Je, null));
              return a ? a : null;
            } catch (a) {
              OBR.logger.log("failed to parse Local Storage for skeleton");
            }
          };
          zb = function (a) {
            try {
              const b = JSON.parse(OBR.g.R(OBR._jsc.C.Je, null));
              b &&
                ((b.wl = b.wl.filter(c => c.fx !== +a)),
                b.wl &&
                  (b.wl.length
                    ? OBR.g.xa(OBR._jsc.C.Je, JSON.stringify(b))
                    : OBR.g.ae(OBR._jsc.C.Je)));
            } catch (b) {
              OBR.logger.log("failed to delete Local Storage for skeleton");
            }
          };
          Ab = function (a) {
            try {
              if (a.$b) return a.$b;
              if (OBR._jsc.B("skeletonData"))
                return JSON.parse(OBR.settings.skeletonData);
            } catch (b) {
              OBR.logger.log("failed to parse skeletonData");
            }
          };
          Bb = function (a, b, c, d) {
            if ((b = b.wl.find(e => e.n === c)) && d)
              if (b.h)
                try {
                  OBR.g.ae(OBR._jsc.C.Je);
                } catch (e) {
                  OBR.logger.log("failed to delete Local Storage for skeleton");
                }
              else (b = b.r), (b = Array(Math.ceil(b)).fill(b)), a.Le(d, b, c);
          };
          Fb = function (a, b, c) {
            if (a.$b && !a.mi.find(g => g.qd === b)) {
              var d = Cb(a, b);
              if (d) {
                var e = Db(c);
                const [, g, k] = d;
                if (2 >= k) (d = Array(1).fill(+g)), a.Le(c, d, b);
                else {
                  d = +g * e.width;
                  var f = d * k;
                  e = Eb(e, f, +k);
                  1 < e.length && (a.K[b] = { IM: e, kL: f, JN: d });
                  a.Le(c, e, b);
                }
              }
            }
          };
          Ub = function (a) {
            var b = Tb;
            const c = a && a.D();
            b.K[c] &&
              ((a = a.v()),
              (b = b.mi.find(d => d.qd === c)) && b.jp && a.appendChild(b.jp));
          };
          Vb = function (a, b) {
            return (a = a.mi.filter(c => c.qd === b.qd).map(c => c.jp)) &&
              a.length
              ? a[0]
              : xb(b);
          };
          Cb = function (a, b) {
            return a.$b.find(c => c.includes(b) && c.includes(a.platform));
          };
          Xb = function (a) {
            var b = Tb;
            let c = a.D();
            a = b.pf && b.pf.wl.find(d => d.n === c);
            b = b.$b && Cb(b, c);
            return !!a || !!b;
          };
          Eb = function (a, b, c) {
            return Yb(b, c).map(d => d / a.width);
          };
          Yb = function (a, b) {
            b = Math.floor(Math.random() * (b + 2 - b) + b);
            return Zb(a, 0 < b ? b : 1);
          };
          Zb = function (a, b) {
            return Array(b)
              .fill(a)
              .map((c, d) => {
                c = 0.8 * a;
                return (Math.random() * (a - c) + c) / b + (d < a % b);
              });
          };
          ac = function () {
            if ($b.isEnabled) {
              var a = window.performance.getEntries();
              if (a && a.length) {
                var b = `${
                  OBR.i.ib || "https://widgets.outbrain.com"
                }/outbrain.js`;
                return a.find(c => c.name.includes(b));
              }
            }
          };
          bc = function (a, b, c) {
            if ($b.isEnabled) {
              var d = a.Y();
              d = d ? d : a;
              if ("odb" === b || "mv" === b) return d.cu(`${b}-${c}`);
              if ("rendered" === b) return a.cu(b);
            }
          };
          cc = function (a, b) {
            return "number" !== typeof a || "number" !== typeof b
              ? null
              : b - a;
          };
          dc = function () {
            return {
              fw: void 0,
              obLoaded: void 0,
              odbReq: void 0,
              odbRes: void 0,
              mvReq: void 0,
              mvRes: void 0,
              rendered: void 0,
              timeOrigin: void 0,
              actualSizeChunk: void 0,
              connectionEffectiveType: void 0,
              Dv: void 0,
            };
          };
          ec = function (a, b, c, d = !1) {
            if (a.cache.has(b) && !d) return a.cache.get(b);
            c = c();
            a.cache.set(b, c ? `&${b}=${c}` : "");
            return a.cache.get(b);
          };
          fc = function (a) {
            return ec(a, "reload", () => OBR.i.LE());
          };
          gc = function (a, b) {
            return ec(a, "darkMode", () => b.wj());
          };
          hc = function (a, b) {
            return ec(a, "wdr-dark-mode", () => {
              const c = b.zn(),
                d = b.Vu(),
                e = b.Mg();
              if (!0 === c || e || d) return "ob-dark-mode";
            });
          };
          jc = function (a) {
            return ec(a, "obRecsAbtestVars", () => {
              let b = OBR.i.UH || "";
              if (OBR.i.mg && 0 < OBR.i.mg) {
                var c = 1 === OBR.i.mg ? "1407:4915" : "1407:4916";
                b = b ? `${b},${c}` : c;
              }
              window.OBBridge &&
                window.OBBridge.bridgeIntersectionTestVariant &&
                ((c = window.OBBridge.bridgeIntersectionTestVariant),
                (b = b ? `${b},${c}` : c));
              (c = ic.Vr || "") && "" != c && (b = b ? `${b},${c}` : c);
              return b;
            });
          };
          kc = function (a) {
            return ec(a, "forcePartner", () => {
              const b = OBR.g.L("forcePartner", !1);
              if (b) return b;
            });
          };
          lc = function (a) {
            return ec(a, "forceDeal", () => {
              const b = OBR.g.L("forceDeal", !1);
              if (b) return b;
            });
          };
          mc = function (a) {
            return ec(a, "tch", () => (OBR.i.Oh ? "1" : "0"));
          };
          sc = function (a) {
            var b = nc;
            const c = OBR.i.Uc ? "&forceCards=" + OBR.i.Uc : "",
              d = fc(b),
              e = gc(b, a),
              f = hc(b, a),
              g = a.In() ? `&news=${a.In()}` : "",
              k = a.Tt() ? `&newsFrom=${a.Tt()}` : "",
              l = jc(b),
              q = OBR.i.Lk ? "&wdr-cosc=1" : "",
              h = kc(b),
              m = lc(b);
            a = (a = a.cc()) ? `&key=${a}` : `&key=${OBR.i.oI}`;
            const p = `&adblck=${oc()}`,
              r = `&abwl=${"true" === OBR.kb.uj()}`,
              t = `&ab=${+oc()}`,
              u = `&wl=${+("true" === OBR.kb.uj())}`,
              v = `&activeTab=${b.YF ? "true" : !document.hidden}`,
              w = mc(b);
            b =
              b.gd && b.gd.extraParams && "string" === typeof b.gd.extraParams
                ? `&${b.gd.extraParams}`
                : "";
            const A = OBR.i.gj ? `&gpp=${OBR.i.gj}` : "",
              D = OBR.i.Pn ? `&gpp_sid=${OBR.i.Pn}` : "",
              E = OBR.i.aG ? "&noclip=1" : "";
            pc = !0;
            var I = qc;
            return `&settings=true&recs=true${a}${
              OBR.i.RH
            }${c}${w}${d}${e}${f}${g}${k}${p}${r}${t}${u}${l}${q}${h}${m}${v}${b}${A}${D}${E}${
              I ? `&tpcdl=${I}` : ""
            }${rc || ""}`;
          };
          tc = function (a, b) {
            return ec(
              a,
              "ppids",
              () => {
                const c = [],
                  d = b.aj(),
                  e = !(!d || d.includes("DROP_")),
                  f = window.OB_ppids;
                try {
                  if (e) {
                    const g = JSON.parse(decodeURIComponent(d));
                    c.push({ attribute: g });
                  }
                  0 < (null == f ? void 0 : f.length) &&
                    f.forEach(g => {
                      if (g.name && (g.value || g.id)) {
                        const k = {};
                        k[g.name] = g.value || g.id;
                        c.push(k);
                      }
                    });
                  return 0 === c.length ? "" : btoa(JSON.stringify(c));
                } catch (g) {
                  return (
                    OBR.error({
                      name: "obm-badppid",
                      message: "parse error: " + g.message,
                      stack: g.stack,
                    }),
                    ""
                  );
                }
              },
              !!window.OB_ppids || !!b.aj()
            );
          };
          oc = function () {
            return OBR.i.bn.getValue() || "true" === OBR.kb.tj();
          };
          yc = function (a) {
            a.ya = OBR.g.Oa(a.j.Ad());
            a.Wd(a.ya);
            const b = uc(a);
            return {
              setHooks: c => {
                a.hj = c;
              },
              render: () => a.Le(),
              getNode: () => {
                !a.ya.isConnected && a.kc && (a.ya = a.j.fu());
                var c = a.ya;
                return c;
              },
              setNode: c => {
                a.j.v().append(c);
              },
              setStyles: c => {
                "string" === typeof c &&
                  (a.ya.querySelector(".ob-gnr-css").innerHTML = c);
              },
              getSetting: (c, d) => a.j.l(c, d),
              getMeta: c => a.j.ba(c, null),
              getData: c => a.j.fc(c, null),
              getRequest: (c, d) => a.j.o(c, d),
              getWidgetId: () => a.j.D(),
              getWidgetIndex: () => a.j.G(),
              getGnrData: () => b,
              sendBiData: (c, d, e) => vc(a, c, d, e),
              sendData: (c, d, e, f) => wc(a, c, d, e, f),
              addViewabilityObserver: c => {
                const d = c && c.getAttribute("data-pos");
                d && a.pd.includes(d) && a.tc.push(...OBR.Ha.Fc(a.j, [c]));
              },
              lazyLoadModule: (c, d, e) => {
                var f = a.sf;
                const g = !a.j.ba("gnr").sf;
                d = d.replace(/\.[^/.]+$/, "");
                xc(e, f, c, d, g);
              },
              moduleName: a.sf,
            };
          };
          Bc = function (a) {
            a.ya = zc(a.j);
            Ac(a);
            const b = uc(a);
            return {
              getNode: () => a.ya,
              getSetting: (c, d) => a.j.l(c, d),
              setStyles: c => {
                if ("string" === typeof c) {
                  const d = a.ya.querySelector(".ob-gnr-features");
                  d.innerHTML = `${d.innerHTML}${c}`;
                }
              },
              getMeta: c => a.j.ba(c, null),
              getData: c => a.j.fc(c, null),
              getRequest: (c, d) => a.j.o(c, d),
              getWidgetId: () => a.j.D(),
              getWidgetIndex: () => a.j.G(),
              getGnrData: () => b,
              sendBiData: (c, d, e) => vc(a, c, d, e),
              sendData: (c, d, e, f) => wc(a, c, d, e, f),
              lazyLoadModule: (c, d, e) => {
                var f = a.sf;
                const g = !a.j.ba("gnr").sf;
                d = d.replace(/\.[^/.]+$/, "");
                xc(e, f, c, d, g);
              },
              moduleName: a.sf,
              render: a.j.Ho() ? () => a.Le() : null,
            };
          };
          Cc = function (a, b, c, d) {
            const e = c.getAttribute("data-pos");
            a.pd = a.pd.filter(f => f !== e);
            (b = a.tc.includes(d)) && a.tc.splice(b, 1);
          };
          uc = function (a) {
            const b = {};
            try {
              const c = a.j.ba("gnr", null),
                d = c && c.docs;
              d && Object.keys(d).forEach(e => (b[e] = JSON.parse(d[e])));
            } catch (c) {
              OBR.logger.log("could not parse GNR json");
            }
            return b;
          };
          vc = function (a, b, c, d) {
            const e = a.j.o("lsd", "");
            b = Object.assign(
              { method: OBR.i.V.Ea, sessionId: e },
              { method: b }
            );
            a.dataBI.fire(66e3 + c, d, b);
          };
          wc = function (a, b, c, d, e) {
            var f = a.j.o("lsd", "");
            c = Object.assign(
              { method: OBR.i.V.Ea, sessionId: f },
              { method: c }
            );
            f = e && e.callback ? e.callback : () => {};
            a = e && e.enrichWithClientData ? a.dataBI.fi(null, d, c) : d;
            OBR.za.send(c.method, b, a, f, !0, null, null, !0);
          };
          Ac = function (a) {
            if (!a.QC) {
              var b = document.createElement("style");
              b.setAttribute("class", "ob-gnr-features");
              a.ya.append(b);
              a.ya.insertBefore(b, a.ya.children[0]);
              a.QC = !0;
            }
          };
          Dc = function (a, b) {
            if (a.hj && a.hj[b] && "function" === typeof a.hj[b]) a.hj[b]();
          };
          Ic = function (a) {
            a = a.j.D();
            !OBR._jsc.Ec(Hc) &&
              Hc[a] &&
              (Hc[a].forEach(b => b && b()), delete Hc[a]);
          };
          xc = function (a, b, c, d, e) {
            var f = Jc;
            b = `${b}/${c}/${d}`;
            OBR.s.Cw(
              b,
              e ? "gnr_feature_internal_lazy" : "gnr_module_internal_lazy"
            );
            f.ed[b] = { loaded: !1, options: null, Gp: [] };
            f.Bf[b] = Kc(a, b);
            f.Bf[b].then(g => g());
          };
          Mc = function (a, b, c) {
            try {
              a: {
                var d = new Lc(a, c);
                switch (b.version) {
                  case "v1":
                    var e = yc(d);
                    break a;
                  case "f_v1":
                    e = Bc(d);
                    break a;
                  default:
                    e = yc(d);
                }
              }
              a.hK("manual" === b.statistics);
              b.callback(e);
            } catch (f) {
              OBR.error({
                name: "obm-GNR",
                message: `Module name: ${c}, ${f.message}`,
                stack: f.stack,
              });
            }
          };
          Nc = function (a, b) {
            var c = Jc;
            try {
              const d = a.En();
              c.Bf[d]
                ? (Hc[a.D()] = b.map(e => () => c.A(a, e, !0)))
                : b.forEach(e => c.A(a, e, !0));
            } catch (d) {
              OBR.error({
                name: "obm-GNR",
                message: "Error in gnr features init",
                stack: d.stack,
              });
            }
          };
          Oc = function (a, b, c) {
            a.ed[b].options = c;
            a.ed[b].loaded = !0;
            a.ed[b].Gp.forEach(d => {
              Mc(d, c, b);
            });
          };
          Pc = function (a, b) {
            var c = Jc;
            const d = OBR.s.St(a);
            d
              ? (OBR.s.T(d), c.Bf[a].then(() => Oc(c, a, b)))
              : OBR.error({
                  name: "obm-GNR",
                  message: `Module name: ${a} was not found`,
                  stack: "None",
                });
          };
          Rc = function (a) {
            window.addEventListener("pagehide", () =>
              Qc(a, a.Ww.takeRecords())
            );
          };
          Sc = function (a) {
            a.Ww = new ReportingObserver(
              b => {
                Qc(a, b);
              },
              { types: ["intervention"], buffered: !1 }
            );
            a.Ww.observe();
          };
          Tc = function (a, b) {
            a.yj &&
              a.so &&
              ((a.zg[0] |= 1 << b), OBR.g.xa(OBR._jsc.C.Zq, a.zg.join(",")));
          };
          Qc = function (a, b) {
            return OBR._jsc.z(function* () {
              const c = b.find(
                ({ type: e = "", body: f = {} }) =>
                  "intervention" === e && "HeavyAdIntervention" === f.id
              );
              if (c) {
                Tc(a, 2);
                var d = `${OBR.i.fl}/WidgetErrorMonitor/api/report`;
                if (OBR.i.Pk && a.gh) {
                  const { kH: e, YE: f } = a.getError(c);
                  a.Fe && a.Fe.B.$y.fire(f, { method: OBR.i.V.Mc });
                  OBR.za.send(OBR.i.V.Mc, d, e);
                }
              }
            });
          };
          Uc = function (a) {
            return a.yj
              ? a.zg
                ? a.zg
                : OBR.g
                    .R(OBR._jsc.C.Zq, "")
                    .split(",")
                    .filter(b => !!b)
                    .slice(0, 50)
              : [];
          };
          Vc = function (a) {
            a.F =
              a.F ||
              OBR.F.map(b => ({
                name: b.D(),
                id: b.o("wnid", b.D()),
                vid: b.o("vid", 0),
              }));
            return a.F;
          };
          Wc = function (a, b) {
            a.gh &&
              a.thresholds &&
              a.thresholds.forEach(c => {
                !c.xd &&
                  b >= c.size &&
                  ((c.xd = !0),
                  Tc(a, c.ED),
                  c.event.fire(
                    { log: Uc(a).join(","), widgets: Vc(a) },
                    { method: OBR.i.V.Mc }
                  ));
              });
          };
          Yc = function (a) {
            const b = [a.Fe.B.Qz, a.Fe.B.Rz, a.Fe.B.Sz, a.Fe.B.Tz],
              c = [4, 5, 6, 7];
            return Xc.map((d, e) => ({
              qI: d,
              size: 4e6 * d,
              event: b[e],
              ED: c[e],
              xd: !1,
            }));
          };
          Zc = function (a) {
            a.zg = [0, ...Uc(a)];
            Tc(a, 0);
            document.addEventListener(
              "click",
              () => {
                Tc(a, 3);
              },
              { once: !0 }
            );
          };
          $c = function (a) {
            return /network usage/i.test(a)
              ? "NETWORK-USAGE"
              : /CPU usage/i.test(a)
              ? "CPU-USAGE"
              : a;
          };
          ad = function (a) {
            a.xm = new PerformanceObserver(b => {
              for (const c of b.getEntries()) a.Gq += c.value;
            });
            a.xm.observe({ type: "layout-shift", buffered: !0 });
          };
          bd = function (a, b) {
            var c = b.v().parentNode;
            a = a.dd[b.D()].height;
            c = c.getBoundingClientRect();
            return (
              -100 <
              (window.innerHeight || document.documentElement.clientHeight) -
                (c.bottom - (c.height - a))
            );
          };
          dd = function (a) {
            var b = OBR._jsc.cd;
            b.ah || (ad(b), b.ko(), (b.ah = !0));
            b.dd[a.D()] ||
              (b.dd[a.D()] = { j: a, aa: new OBR.dataBI(a, d => d.aA) });
            const c = b.dd[a.D()];
            c.height = a.getBoundingClientRect().height;
            c.Yu = bd(b, a);
            a.D() !== a.o("widgetJsId", a.D()) &&
              (c.SI = a.o("widgetJsId", a.D()));
            c.Yu &&
              !b.bq &&
              ("undefined" === typeof c.Vb && (c.Vb = 0),
              (b.bq = !0),
              (b.mh = []));
          };
          fd = function (a) {
            var b = ed;
            if (!b.IG || !b.ic(a)) return !1;
            if (b.$w) return b.Ko;
            a = 1 * OBR.g.R("debug-webvitals-monitor-sample", 100);
            b.Ko = 1 > Math.floor(Math.random() * a);
            b.$w = !0;
            return b.Ko;
          };
          gd = function (a) {
            const b = OBR._jsc.B("widgetLazyLoadMargin")
              ? OBR.settings.widgetLazyLoadMargin
              : 500;
            return (a && a.l("widgetLazyLoadMargin", b)) || b;
          };
          hd = function (a, b, c) {
            b = new OBR.IntersectionObserver({
              callback: d => {
                d.uK();
                OBR.wa.MG(d) ? OBR.wa.fire(d) : OBR.wa.register(d);
              },
              callbackParams: [c],
              element: b,
              rootMargin: `${a.Vo}px`,
              threshold: [0],
              unobserve: !0,
            });
            b.observe();
            a.Wo.push(b);
          };
          jd = function (a) {
            var b = id;
            const c = a.v(),
              d = c
                ? OBR.g.H(c).querySelector(".ob_what.ob-branding-lazy-load")
                : null;
            d &&
              ((a = {
                callback: () => d.classList.remove("ob-branding-lazy-load"),
                callbackParams: [a],
                element: c,
                rootMargin: `${gd(a)}px`,
                threshold: [0],
                unobserve: !0,
              }),
              (a = new OBR.IntersectionObserver(a)),
              a.observe(),
              b.Wo.push(a));
          };
          kd = function (a) {
            try {
              if (!a) return null;
              const b = a.split("/").pop().split(".")[0],
                c = decodeURIComponent(window.atob(b));
              return JSON.parse(c);
            } catch (b) {
              return null;
            }
          };
          ld = function (a) {
            const b = {
              onShow: () => {
                a.v()
                  .querySelector(".ob-onyx-sponsored-container")
                  .classList.remove("ob-sponsored-hide");
              },
            };
            OBR.controller.Bh(a, c => {
              window.OB_VIDEO.init(c.currentWidget, c.beforeLoadTime, b);
            });
          };
          nd = function (a, b) {
            md(a, b);
            a.xd[`${a.wd}-${b}`]++;
          };
          md = function (a, b) {
            a.xd[`${a.wd}-${b}`] || (a.xd[`${a.wd}-${b}`] = 0);
          };
          od = function (a) {
            return OBR.g.oa(a);
          };
          qd = function ({
            re: a,
            ra: b,
            ja: c,
            cardIdx: d,
            fatherCardIdx: e,
            VL: f,
            qj: g,
            rj: k,
            ji: l,
            Ae: q,
            AC: h,
            Yb: m,
            os: p,
            ld: r,
            MH: t,
            fh: u,
          }) {
            const v = [];
            k && v.push(`data-ob-installation-type=${k}`);
            q && v.push(`data-ob-user-id=${q}`);
            l && v.push(`data-ob-app-ver=${l}`);
            g && v.push(`data-ob-installation-key=${g}`);
            h && v.push(`data-click-url=${h}`);
            t && v.push(`data-on-news=${t}`);
            r && v.push(`data-pub-imp-id=${r}`);
            u && v.push(`data-ob-lazy-render=${u}`);
            g = f && f.includes("ob-gnr-layout");
            return pd(`<div class="OUTBRAIN" data-src="${a}" data-widget-id="${b}" data-card-idx="${d}" data-feed-father-idx="${e}"
                            data-ob-mark="true" data-browser="${m}" data-os="${p}" data-dynload data-idx="${c}" id="outbrain_widget_${c}" ${v.join(
              " "
            )}>${g ? "" : f}</div>`);
          };
          rd = function (a) {
            OBR.logger.log(`[WARNING] ${a}`);
          };
          sd = function (a) {
            OBR.logger.log("[DFP Data] glade DFP ad requested");
            a.sd({ event: a.dataBI.B.Jz, data: a.ti });
          };
          td = function (a) {
            OBR.logger.log("[DFP Data] glade DFP ad served");
            a.sd({ event: a.dataBI.B.Lz, data: a.ti });
          };
          ud = function (a) {
            OBR.logger.log("[DFP Data] glade DFP got empty ad");
            a.sd({ event: a.dataBI.B.EMPTY, data: a.ti });
          };
          vd = function (a) {
            OBR.logger.log("[DFP Data] glade DFP got error");
            a.sd({ event: a.dataBI.B.Sy, data: a.ti });
          };
          wd = function (a) {
            var b = a.adInfo.cardIdx;
            const c = a.adInfo.fatherCardIdx,
              d = a.adInfo.adPath,
              e = a.adInfo.adId,
              f = a.adInfo.adWidth,
              g = a.adInfo.adHeight,
              k = a.adInfo.adStyle;
            OBR.gptAds = OBR.gptAds || [];
            const l = G.createElement("script", null, null, {
                src: "//securepubads.g.doubleclick.net/tag/js/gpt.js",
              }),
              q = G.createElement("script", null, null, {
                type: "text/javascript",
              });
            q.appendChild(
              document.createTextNode(`
        window.googletag = window.googletag || {cmd: []};
        window.googletag.cmd.push(function () {
            var slot = window.googletag.defineSlot('${d}/${f}x${g}', [${f}, ${g}], '${e}');
            OBR.gptAds['${e}'] = slot;
            if(slot) {slot.addService(googletag.pubads())}
            window.googletag.pubads().enableSingleRequest();
            window.googletag.pubads().collapseEmptyDivs();
            window.googletag.pubads().setTargeting('publisher_id', []).setTargeting('variant_id', []).setTargeting('feed_id', []);
            window.googletag.pubads().addEventListener('slotRenderEnded', (event) => {
              var customEvent = new CustomEvent('${"onOBGptLoadedEvent"}', {detail: event});
              document.dispatchEvent(customEvent);
            })
            window.googletag.enableServices();
        });
    `)
            );
            try {
              const h = G.createElement("div", e, `display:none;${k}`, {
                class: a.className,
                "data-card-idx": b,
                "data-feed-father-idx": c,
              });
              b = `window.googletag.cmd.push(function() { 
        window.googletag.display('${e}');
        window.googletag.pubads().refresh([OBR.gptAds['${e}']]);
      });`;
              document.head.appendChild(l);
              document.head.appendChild(q);
              const m = G.createElement("script", null, null, {
                type: "text/javascript",
              });
              m.appendChild(document.createTextNode(b));
              h.appendChild(m);
              sd(a.vd);
              document.addEventListener("onOBGptLoadedEvent", p => {
                (p.detail || { empty: !0 }).empty
                  ? (ud(a.vd),
                    a.logger.error(
                      "createGPT failed - got an empty ad (event.detail.empty === true); check the ad settings"
                    ),
                    (h.style.display = "none"))
                  : ((h.style = `display:block; ${k}`), td(a.vd));
              });
              return h;
            } catch (h) {
              a.logger.error(h), vd(a.vd);
            }
          };
          xd = function (a) {
            var b = a.adInfo.cardIdx;
            const c = a.adInfo.fatherCardIdx,
              d = a.adInfo.adPath,
              e = a.adInfo.adData,
              f = a.adInfo.adWidth,
              g = a.adInfo.adHeight,
              k = a.adInfo.adContainerWidth,
              l = a.adInfo.adContainerHeight;
            try {
              const q = {
                class: a.className,
                "data-card-idx": b,
                "data-feed-father-idx": c,
              };
              (b =
                k || l
                  ? (k ? `width:${k}px;` : "") +
                    (l ? `height:${l}px;` : "") +
                    "display:none;"
                  : null) && (q.style = b);
              const h = G.createElement("div", null, null, q),
                m = G.createElement("script", null, null, {
                  src: "//securepubads.g.doubleclick.net/static/glade.js",
                  async: "true",
                }),
                p = G.createElement("div", null, "display: none;", {
                  "data-glade": "",
                  "data-ad-unit-path": d,
                  "data-json": e || "",
                  width: f,
                  height: g,
                });
              h.appendChild(p);
              h.appendChild(m);
              sd(a.vd);
              p.addEventListener("gladeAdFetched", r => {
                (r.detail || { empty: !0 }).empty
                  ? (ud(a.vd),
                    a.logger.error(
                      "createDFPAd failed - got an empty ad (event.detail.empty === true); check the ad settings"
                    ),
                    (p.style.display = "none"),
                    (h.style.display = "none"))
                  : ((p.style.display = "block"),
                    (h.style.display = "block"),
                    td(a.vd));
              });
              return h;
            } catch (q) {
              a.logger.error(q), vd(a.vd);
            }
          };
          yd = function () {
            return pd('<div class="ob-no-joker-card"></div>');
          };
          zd = function (a) {
            var b = window.addEventListener
              ? "addEventListener"
              : "attachEvent";
            (0, window[b])(
              "attachEvent" === b ? "onmessage" : "message",
              function (c) {
                var d = c.message ? "message" : "data",
                  e = c[d].message || c[d];
                "ob-pb-ad-loaded" === e
                  ? (a.style.display = "block")
                  : "ob-pb-ad-after-render" === e &&
                    (a.style.height = `${c[d].data}px`);
              },
              !1
            );
          };
          Bd = function (a, b, c) {
            try {
              const d = "string" === typeof a ? JSON.parse(a) : a,
                e = Ad[d.type](d, b, c);
              e.jokerProps = d;
              return e;
            } catch (d) {
              return null;
            }
          };
          Fd = function (a, b) {
            var c = K.Ja();
            const { ta: d, cardIdx: e } = a.$(),
              f = G.ma(b);
            if (f)
              switch (d) {
                case "widget":
                  const { Yb: g, os: k } = G.U(),
                    { ra: l, ja: q, html: h, fh: m } = a.$();
                  return qd({
                    re: c,
                    ra: l,
                    fatherCardIdx: b,
                    ja: q,
                    cardIdx: e,
                    fh: m,
                    VL: h,
                    qj: f.cc(),
                    rj: f.dc(),
                    ji: f.bc(),
                    Ae: f.pb(),
                    AC: f.xc(),
                    MH: f.In(),
                    Yb: g,
                    os: k,
                    ld: f.Bd(),
                  });
                case "joker":
                  return (a = a.$().Oj), Bd(a, e, b);
                case "adJoker":
                  const {
                    adType: p,
                    adId: r,
                    adWidth: t,
                    adHeight: u,
                    adPath: v,
                    adData: w,
                    adClient: A,
                    adSlot: D,
                    adContainerWidth: E,
                    adContainerHeight: I,
                    adStyle: J,
                  } = a.$();
                  return Cd.create({
                    adInfo: {
                      cardIdx: e,
                      fatherCardIdx: b,
                      adType: p,
                      adId: r,
                      adWidth: t,
                      adHeight: u,
                      adPath: v,
                      adData: w,
                      adClient: A,
                      adSlot: D,
                      adContainerWidth: E,
                      adContainerHeight: I,
                      adStyle: J,
                    },
                  });
                case "placeholderJoker":
                  return (
                    ({ Pc: a } = a.$()),
                    Dd.create({ cardIdx: e, fatherCardIdx: b, MM: a })
                  );
                case "passback":
                  return ({ pI: a } = a.$()), Ed.create(a, b);
              }
          };
          Hd = function (a) {
            const b = Gd.find(c => c.feedIdx === +a);
            return !(!b || !b.isSkeleton);
          };
          Kd = function (a, b) {
            var c = yb();
            c = null !== c ? c : { fb: {}, wl: [] };
            const d = {
              n: a.widgetName,
              r: 0 < a.height ? a.height / a.width : 0,
              fx: +b,
            };
            a = c.wl
              .filter(e => e.n === d.n && 0 !== e.r)
              .map(e => {
                const f = e.m ? e.m + 1 : 1;
                var g = e.r,
                  k = d.r;
                return {
                  n: e.n,
                  m: f,
                  r: f ? (1 === f ? (g + k) / 2 : ((f - 1) * g + k) / f) : k,
                  fx: +b,
                };
              })[0];
            c.fb.r = Id(c, d);
            a = Jd(c, a, d);
            try {
              OBR.g.xa(OBR._jsc.C.Je, JSON.stringify(a));
            } catch (e) {
              OBR.logger.log("failed to set Local Storage for skeleton");
            }
          };
          Id = function (a, b) {
            return a.wl && a.wl.length
              ? a.wl.reduce((c, d) => c + d.r, 0) / a.wl.length
              : b.r;
          };
          Jd = function (a, b, c) {
            a = Object.assign({}, a);
            if (b && b.n)
              return (a.wl = a.wl.map(d => (d.n === b.n ? b : d))), a;
            c && c.r && a.wl.push(c);
            return a;
          };
          L = function (a) {
            return Math.min(...Object.keys(a.K));
          };
          Ld = function (a, b) {
            var c = K;
            c.K[a].dn = [];
            try {
              c.K[a].dn = JSON.parse(b).filter(d => "widget" === d.type);
            } catch (d) {}
          };
          Md = function (a) {
            var b = K;
            const c = b.K[a].us,
              d = b.K[a].dn.splice(0, b.K[a].Ig);
            b.K[a].dn.push(...d.filter(e => !c.find(f => f.id === e.id)));
            return d;
          };
          Nd = function (a) {
            K.Uo = a;
            OBR.$a.Ki = a;
          };
          Od = function (a, b = L(a)) {
            return a.K[b].st;
          };
          Pd = function (a, b = L(a)) {
            a.K[b].st = !0;
          };
          Qd = function (a, b, { cardIdx: c }) {
            var d = K;
            const { wg: e } = d.K[b];
            d.K[b] = Object.assign(d.K[b], {
              cd: c ? c : 0,
              fe: a,
              wg: c ? [...e, c] : e,
            });
          };
          Rd = function (a = 0, b) {
            if ((a = K.K[a])) a.mw = b;
          };
          Sd = function (a) {
            var b = K;
            if (!isNaN(a)) return b.K[a].cd;
          };
          Td = function (a, b) {
            ({ wg: a } = K.K[a]);
            return -1 < a.indexOf(b);
          };
          Ud = function (a, b) {
            var c = K;
            const { wg: d } = c.K[a];
            c.K[a].wg = d.filter(e => e != b);
          };
          Vd = function (a, b = L(a)) {
            return a.K[b].rt;
          };
          Wd = function (a, b, c = L(a)) {
            a.K[c].rt = b;
          };
          Xd = function (a, b, c, d = L(a)) {
            a.K[d].features[b] = c;
          };
          Yd = function (a, b, c = L(a)) {
            return a.K[c].features[b];
          };
          Zd = function (a, b, c = L(a)) {
            a.K[c].it = b;
          };
          $d = function (a, b = L(a)) {
            return a.K[b].it;
          };
          ae = function (a, b, c = L(a)) {
            a.K[c].uf = b;
          };
          be = function (a, b = L(a)) {
            return a.K[b].uf;
          };
          ce = function (a, b = L(a)) {
            a.K[b].Jj = !0;
          };
          de = function (a, b = L(a), c, d) {
            !c ||
              OBR.ga.Za ||
              OBR.ga.nb ||
              ((a.K[b].Gm = c), "1" !== d && 1 !== d) ||
              (a.K[b].Es = 1);
          };
          ee = function (a, b = L(a)) {
            return a.K[b].Gm
              ? { consentString: a.K[b].Gm, consentVersion: a.K[b].Es }
              : null;
          };
          fe = function (a, b) {
            K.K[a].aa.Ao = b;
          };
          ge = function (a, b) {
            if (b) {
              const c = a.Gf;
              c.endsWith("&") || c.endsWith("?") || b.startsWith("&")
                ? (a.Gf += b)
                : (a.Gf += `&${b}`);
            }
          };
          M = function (a, b, c) {
            ge(
              a,
              b && "undefined" !== typeof c && null != c && "" !== c
                ? `${b}=${c}`
                : ""
            );
          };
          he = function (a, b, c) {
            try {
              const d = new URLSearchParams(window.location.search).get(b);
              d && (c = d);
            } catch (d) {}
            c && M(a, b, c);
            return a;
          };
          re = function (a = 0, b = 0) {
            var c = OBR.F.length - 1;
            if (!K.K[a]) return Promise.resolve();
            const d = G.ma(a);
            a = new ie(a, b, c);
            if (a.j.Fb()) {
              c = a.j.yc();
              var e = a.j.wc();
              const m = a.j.zc(),
                p = a.j.Ng();
              c && M(a, "contentUrl", od(c));
              e && M(a, "bundleUrl", od(e));
              m && M(a, "portalUrl", od(m));
              m && p && M(a, "lang", p);
            } else
              a.re
                ? M(a, "url", od(a.re))
                : je.error("could not get permalink url");
            c = a.j.D();
            M(a, "widgetJSId", a.P.U().Ob && a.P.U().Ob[c] ? a.P.U().Ob[c] : c);
            a.P.U().Ob && a.P.U().Ob[c] && M(a, "contextRule", !1);
            M(a, "version", a.P.U().ver);
            M(a, "apv", a.P.U().ng);
            M(a, "sig", a.P.U().Tq);
            M(a, "format", a.j.Qt());
            M(a, "rand", OBR.g.rand());
            (c = a.P.R(OBR._jsc.C.bi)) && M(a, "lsd", od(c));
            (c = a.P.R(OBR._jsc.C.Ql)) && M(a, "lsdt", od(c));
            a.j.ie() && M(a, "em", "1");
            c = a.P.U().wh;
            null !== c && M(a, "pubInState", c);
            (c = a.P.U().hk) && M(a, "osLang", c);
            a = he(a, "obAbtest", a.P.L("obAbtest", ""));
            (c = !0 === a.P.U().Rk || !0 === a.j.fj() || null !== a.P.U().Ob) &&
              M(a, "testMode", c);
            M(a, "videoId", a.j.Mn());
            OBR.i.Ne && ke() && M(a, "opvid", ke());
            c = a.j.qb() || a.P.U().$m || "";
            M(a, "extid", encodeURIComponent(c));
            const [f, g] = le(a.j);
            M(a, f, g);
            (!0 === a.j.ev() || a.P.U().wp) && M(a, "rtbEnabled", !0);
            c = a.j.ej();
            M(a, "seid", encodeURIComponent(c));
            a.P.U().Ps.includes("true") &&
              M(a, "descriptionDisplayEnabled", !0);
            a.P.U().hv.includes("true") && M(a, "isRtbDescriptionEnabled", !0);
            M(a, "va", !0 === a.j.tv() ? !0 : null);
            M(a, "et", !0 === a.j.Lt() ? !0 : null);
            (c = a.P.U().Jt()) && M(a, "contxtKV", od(c));
            M(a, "cnsnt", OBR.ga.Za);
            M(a, "cmpStat", OBR.ga.Db ? 1 : 0);
            M(a, "cnsntv2", OBR.ga.nb);
            (c = ee(K, a.Cb)) &&
              (1 === c.consentVersion
                ? M(a, "cnsnt", c.consentString)
                : M(a, "cnsntv2", c.consentString));
            M(a, "ccpa", a.j.un() || OBR.ga.Zb);
            M(a, "ccpaStat", OBR.ga.vo ? 1 : 0);
            M(a, "num", null !== a.j.Zi() ? a.j.Zi() : null);
            a.j.Fb() ||
              ((c = a.j.bu()),
              null !== c && "string" === typeof c && 0 < c.length
                ? M(a, "srcUrl", od(c))
                : 0 < a.P.U().Jk.length && M(a, "srcUrl", a.P.U().Jk));
            c = a.P.U().cq;
            M(a, "scrW", c.w);
            M(a, "scrH", c.h);
            c = a.P.U();
            c = a.j.Fb() ? c.Qp : c.Eq;
            ge(a, "" !== c ? "t=" + c : "t");
            (c = a.P.U().cn) && M(a, "xp", od(c));
            c = OBR.ca.Ga;
            M(a, "winW", c.width);
            M(a, "winH", c.height);
            (c = "https://" === a.P.U().na) && M(a, "secured", c);
            M(a, "feedIdx", a.Cb);
            M(a, "lastIdx", a.mH);
            M(a, "lastCardIdx", a.cd);
            a.P.U().Is.includes("true") && M(a, "crDraft", !0);
            (c = a.P.zd(a.Cb)) && M(a, "fAB", c);
            (c = a.P.Cn(a.Cb)) && M(a, "layeredTestInfo", c);
            OBR.i.Iu && M(a, "wrDebug", "true");
            M(a, "app_ver", a.j.bc());
            M(a, "api_user_id", a.j.pb());
            M(a, "installationType", a.j.dc());
            a.P.U().Zc && M(a, "iframe", "true");
            (c = a.P.U().Hd) && M(a, "lscntx", c);
            a.P.L("obFakeRtb", !1) &&
              (M(a, "fakeRec", "RTB-CriteoUS"), M(a, "fakeRecSize", "4"));
            c = OBR.fraudDetection;
            !0 !== a.P.U().Rk &&
              !0 !== a.j.fj() &&
              ((e = c.Zd || c.gq)
                ? M(a, "clss", e)
                : c.If && (M(a, "clid", c.If), M(a, "fdu", c.Gi)));
            c = a.P.U().sq;
            null !== c && M(a, "skipContextValidation", c);
            c = a.P.U().qn;
            null !== c && M(a, "forceContextValidation", c);
            (c = a.P.U().Gk) && M(a, "skipRecsFilters", `${c}`);
            if ((c = a.P.U().Pi))
              M(a, "forceAd", c), M(a, "settingLevel", "SOURCE");
            (c = a.P.U().rn) && M(a, "forceOcAd", c);
            M(a, "dpr", a.P.U().Sm || 0);
            c = a.j.Lg();
            M(a, "cw", c);
            ({ Wj: c } = a.P.U());
            c || M(a, "wdr-natlaz", !1);
            a.P.U().tq && M(a, "wdr-ads-data", "true");
            (c = me()) && ge(a, c);
            a = he(a, "forceDemand", a.P.U().vt);
            (c = a.P.U().Vk || null) && M(a, "trace_name", c);
            if (a.P.U.cb && (c = a.j.yd()))
              try {
                var k = new window.URLSearchParams(c).get("appBridge");
                M(a, "appBridge", k);
              } catch (m) {}
            ({ vp: k } = a.P.U());
            k && M(a, "ob_internal_id", k);
            OBR.i.Yj && M(a, "dicbo", OBR.i.Yj);
            M(a, "iabCat", a.j.Xi());
            (OBR.i.Ju || OBR.i.Ku) && M(a, "lsl", "1");
            ({ hw: k } = a.P.U());
            k && M(a, "wdr-lr", "1");
            k = OBR.g.Yk(a.j.Bd() || OBR.i.ld);
            M(a, "pubImpId", encodeURIComponent(k));
            k = a.j.yd();
            a.P.U().cb && k && ge(a, k);
            (k = a.j.Sg()) && M(a, "rw", k);
            k = a.hi();
            ge(k, sc(k.j));
            M(k, "chs", OBR.i.wn(k.j));
            if ((a = k.j.$i()))
              "number" === typeof a.x && M(k, "px", a.x),
                "number" === typeof a.y && M(k, "py", a.height + a.y);
            a = k.P.U().cb;
            if (
              !k.P.U().Ne &&
              !a &&
              (a = k.j.v()) &&
              a.parentElement &&
              (a = a.parentElement.querySelector(
                ".ob_sf_loader, .ob-chunks-loader"
              ))
            ) {
              a = a.getBoundingClientRect();
              b: {
                c = null;
                try {
                  if (
                    0 <= a.top &&
                    0 <= a.left &&
                    a.bottom <=
                      (window.innerHeight ||
                        document.documentElement.clientHeight) &&
                    a.right <=
                      (window.innerWidth ||
                        document.documentElement.clientWidth)
                  ) {
                    var l = 0;
                    break b;
                  }
                  c =
                    a.top > document.documentElement.clientHeight
                      ? Math.floor(
                          a.top - document.documentElement.clientHeight
                        )
                      : Math.floor(
                          a.height + a.top - document.documentElement.scrollTop
                        );
                  if (isNaN(c))
                    throw Error(`Invalid distance. Box = ${JSON.stringify(a)}`);
                } catch (m) {
                  (c = null),
                    OBR.error({
                      name: "obm-vpd",
                      message: m.message,
                      stack: m.stack,
                    });
                }
                l = c;
              }
              OBR._jsc.ne(l) && M(k, "vpd", l);
            }
            l = k.gi();
            OBR.i.gk && M(l, "ogn", OBR.i.gk);
            (k = l.P.U().Yp) && M(l, "ref", k);
            l = l.Gf;
            let q;
            (null == (q = l) ? void 0 : q.length) >= OBR.i.Tj && (l = oe(l));
            let h;
            (null == (h = l) ? void 0 : h.length) >= OBR.i.Tj && pe(l);
            return qe(d, l, b);
          };
          se = function (a) {
            return Array(Math.min(a.Dm, 3)).fill(
              Math.round(100 * a.ke.fb.r) / 100
            );
          };
          te = function (a, b) {
            return a.ke
              ? a.ke.wl
                  .filter(c => 0 !== +c.r)
                  .map(c => {
                    if (b.find(d => d.id === c.n))
                      return Math.min(Math.round(100 * +c.r) / 100, 1);
                  })
                  .filter(c => c)
              : null;
          };
          ue = function (a) {
            if (
              a.Dm &&
              a.ke &&
              Array.isArray(a.ke.wl) &&
              a.ke.wl.length &&
              a.ke.fb.r
            )
              return "local-storage";
            const b = a.pe.D();
            return a.$b && Array.isArray(a.$b) && a.$b.some(c => c.includes(b))
              ? "cheetah"
              : "none";
          };
          ve = function (a) {
            const b = K.K[a.Cb].Ig,
              c = (e, f) =>
                e.length < b ? (e.push(...f), c(e, [...f])) : e.splice(0, b);
            if ("2" === K.bf(a.Cb)) return se(a);
            var d = Md(a.Cb);
            if (!d.length) return null;
            (d = te(a, d)) && d.length && d.length < b && (d = c(d, [...d]));
            return d ? d : se(a);
          };
          we = function (a) {
            a.pe.Mq() || zb(a.Cb);
            switch (ue(a)) {
              case "local-storage":
                return ve(a);
              case "cheetah":
                Tb.remove(a.pe, !0);
                var b = Cb(Tb, a.pe.D());
                b
                  ? (([, b] = b),
                    (a = a.xG ? Array(1).fill(b) : Array(a.Dm).fill(b)))
                  : (a = null);
                return a;
              case "none":
                return null;
              default:
                return null;
            }
          };
          ye = function (a, { pe: b, jt: c = !1 }) {
            const d = b.G();
            if (!K.K[d])
              if (b.v()) {
                var e = b.v();
                a.Fd =
                  1 === e.children.length &&
                  0 === e.children[0].children.length;
                K.K[d] = {
                  rt: !0,
                  st: !1,
                  cd: 0,
                  wg: [0],
                  features: { jt: !1, UM: !1 },
                  it: null,
                  Ip: null,
                  uf: !1,
                  Jj: !1,
                  mw: null,
                  Gm: null,
                  Es: 2,
                  Ig: null,
                  $r: !0,
                  Gj: !1,
                  aa: { Ao: !1 },
                  AN: 0,
                  Hp: [],
                };
                e = [];
                const f = b.l("feedWrapperMargins", ""),
                  g = b.Lg();
                f && e.push(`margin:${f}`);
                b.l("hideHeaders", !1) &&
                  G.ia(
                    ".ob-smartfeed-wrapper .OUTBRAIN:not(:first-child):not(.ob-parent-feed) .ob-widget-header {display:none;}"
                  );
                0 === g && e.push("width:100%");
                G.ia(
                  ".ob-smartfeed-wrapper .OUTBRAIN:not(:first-child):not(.ob-parent-feed) .ob_what {display:none;} " +
                    `.ob-smartfeed-joker {margin-bottom: 20px; padding-bottom: 4px; padding-top: 0;} ${
                      e.length
                        ? `.ob-smartfeed-wrapper.feedIdx-${b.G()} {${e.join(
                            ";"
                          )}}`
                        : ""
                    }`
                );
                if ((e = b.xc())) Zd(K, e, b.G()), G.ei(b);
                e = b.l("recMode");
                Xd(K, "feedManualChunkFetch", c, d);
                Xd(K, "feedLayout", "odb_dynamic_feed" === e, d);
                Yd(K, "feedManualChunkFetch", d)
                  ? (a.Eh(b), OBR.i.cb && a.Ei(d))
                  : (!0 === b.l("lazyLoadFirstCycle", !1)
                      ? ((c = b.v()),
                        (e = b.l("lazyLoadFirstCycleMargin", 250) + "px"),
                        new OBR.IntersectionObserver({
                          callback: a.Js.bind(a),
                          callbackParams: [b],
                          element: c,
                          rootMargin: e,
                          threshold: [0],
                          unobserve: !0,
                        }).observe())
                      : a.Js(b),
                    xe.Lf(b, d));
              } else
                rd(
                  `Container for widgetId=${b.D()} doesn't exist on the DOM. Feed cannot be created.`
                );
          };
          ze = function (a, b) {
            var c = b.l("feedLoadChunkSize", 0);
            K.K[a].Ig = c ? 1 * c : null;
            Ld(a, b.l("feedContent", "[]"));
            c = b.l("feedCardsRunningOnce", "[]");
            var d = K;
            d.K[a].us = [];
            try {
              d.K[a].us = JSON.parse(c);
            } catch (e) {}
            K.iq(a, b.o("feedVersion", "1"));
            c = b.l("intersectionObserverTriggerMargin", "0");
            K.K[a].OF = c;
            K.Dk(b.Ja());
            de(K, a, b.Ti(), b.yn());
            b = b.l("pinnedJokersCardProperties", "[]");
            c = K;
            try {
              c.K[a].Hp = JSON.parse(b);
            } catch (e) {
              c.K[a].Hp = [];
            }
          };
          Ge = function (a, b, c, d = null) {
            const { cd: e, fe: f } = K.K[b] || {};
            var g = G.ma(b);
            try {
              var k = OBR.i.ks && OBR.i.ks.feedIdx === parseInt(b);
            } catch (l) {
              k = !1;
            }
            k
              ? Ae(g, b)
              : ((k = 0 === c && g.cf()),
                !1 === f
                  ? (rd(
                      "fetchNextStream was triggered with hasMore=false. aborting..."
                    ),
                    Be(d, "grey"))
                  : Td(b, c)
                  ? (OBR.controller.qB(b),
                    Be(d, "green"),
                    (d = g.D()),
                    Ud(b, c),
                    (c = a.Ot(b, d)),
                    (d = Ce(b)),
                    De(a, d, c),
                    k
                      ? Ee(a, g.cf(), b)
                      : ((g = K.Uo.then(() => re(b, e))),
                        Nd(g),
                        g.then(a.xf.bind(a)).catch(l => Fe(a, l, b))))
                  : (je.log(
                      "fetchNextStream was triggered but chunk is not observered. aborting..."
                    ),
                    Be(d, "red")));
          };
          Ae = function (a, b) {
            const c = K.K[b].aa;
            c.Ao ||
              (new OBR.dataBI(a, d => d.dr).B.Dy.fire(),
              fe(b, Object.assign(c, { Ao: !0 })));
          };
          Be = function (a, b) {
            OBR.i.Zj && a && (a.style.outline = `3px dashed ${b}`);
          };
          Ce = function (a) {
            const b = Yd(K, "feedLayout", a);
            return He(a, b);
          };
          De = function (a, b, c) {
            b && b.appendChild(c);
            a.Aj = !0;
          };
          Ee = function (a, b, c) {
            const { cd: d } = K.K[c] || {};
            b.uA = {
              da: G.ma(c).D(),
              ja: d,
              timestamp: parseInt(performance.now()),
            };
            a.xf(b);
          };
          Fe = function (a, b, c) {
            OBR.error(b);
            je.error(
              `failed on Multivac response on feedIdx:${c}. Reason: ${b.toString()}`
            );
            Ie();
            a.Aj = !1;
            Nd(Promise.resolve());
          };
          Je = function (a, b) {
            const { cd: c, fe: d, Gj: e } = K.K[b] || {};
            if (!e && !1 !== d) {
              var f = G.ma(b).cf();
              Ud(b, -1);
              f && 0 === c
                ? Ee(a, f, b)
                : (De(a, Ce(b), xb()),
                  (f = K.Uo.then(() => re(b, c))),
                  Nd(f),
                  (K.K[b].Gj = !0),
                  f
                    .then(g => {
                      K.K[b].Gj = !1;
                      a.xf(g);
                    })
                    .catch(g => {
                      K.K[b].Gj = !1;
                      Fe(a, g, b);
                    }));
            }
          };
          Ke = function (a, b) {
            return b && b.Ro() && b.Nj() && a.Mu;
          };
          Le = function (a, b, c, d) {
            return Ke(a, b)
              ? ((a.Mu = !1),
                c.forEach(e => {
                  const { ja: f } = e.$();
                  e.Y = () => b;
                  OBR.F[f] = e;
                }),
                OBR.controller.SD().add(`widgetLazyRender_${b.G()}`, () => {
                  a.xf(d, !0);
                }),
                !0)
              : !1;
          };
          Me = function (a, b, c, d) {
            d ||
              ((b = b[b.length - 1]),
              OBR.He.fire(
                `onFeedEnd_${c}`,
                [
                  b,
                  OBR.g
                    .H(b)
                    .querySelector(".ob-dynamic-rec-container:last-child"),
                ],
                !0,
                a
              ));
          };
          Ne = function (a) {
            const b = [],
              c = [];
            a.forEach((d, e) => {
              d.$().fh && (b.push(d), c.push(e));
            });
            c.forEach(d => {
              a.splice(d - c.indexOf(d), 1);
            });
            return b;
          };
          Oe = function (a, b, c) {
            return b.map(d => Fd(d, c), a);
          };
          Pe = function (a) {
            if (OBR.i.Zj) {
              const b = OBR.g.IE();
              a.forEach(c => (c.style.boxShadow = `-2px 4px 10px 2px ${b}`));
            }
          };
          Re = function (a, b, c) {
            a.forEach(d => {
              const e = d.$().ja;
              var f = K.Ja(),
                g = $d(K, b),
                k = G.ma(b);
              const { ja: l, ra: q, HI: h } = d.$();
              d =
                h && h.response && h.response.request && h.response.request.TN;
              f = {
                permalink: f,
                widgetId: q,
                feedFatherIdx: b,
                idx: l,
                clickTrackerUrl: g,
                extId: k.qb(),
                extId2: k.Ac(),
              };
              f = OBR.Sh.Km(f);
              f.setData(h);
              f.qx(b);
              f.Cx();
              k && ((g = k.yd()), (k = k.pb()) && f.lx(k), g && f.hq(g));
              d && f.nq(d);
              OBR.F[l] = f;
              OBR.controller.xx(f);
              f.yx(c);
              OBR.controller.pt(f, e);
              f.mx();
              G.vh(f);
              G.Ff(f);
              OBR.controller.Tn(f);
              OBR.controller.Oc(e);
              OBR._jsc.Qe(f);
              xe.Lf(f, b);
            });
          };
          Te = function (a, b, c) {
            b &&
              b.length &&
              ((b = b[0].$()),
              new IntersectionObserver((d, e) => Se(d, e, c), b.Xo).observe(
                a.v()
              ));
          };
          Ve = function (a, b) {
            K.K[b.G()].Hp.forEach(c => {
              a.lk.includes(c.pos) ||
                new OBR.IntersectionObserver({
                  callback: () => {
                    var d = b.G();
                    const e = c.pos;
                    Number(Sd(d)) >= Number(e) && a.lk.push(e);
                    if (!a.lk.includes(e)) {
                      const f = OBR.g.H(b.v()).querySelector(".ob-cards");
                      d = Bd(c, e, d);
                      f.append(d);
                      Ue(a, b);
                      a.Zn.push(Number(e));
                      a.lk.push(e);
                    }
                  },
                  element: document.querySelector(c.selector),
                  threshold: [0],
                  unobserve: !0,
                }).observe();
            });
          };
          We = function (a, b, c) {
            c && c.length && c.forEach(d => d && a.xp(b, d.$()));
          };
          Xe = function (a, b, c) {
            if (1 === c.length && c[0].W && "joker" === c[0].W.ta) {
              c = Ce(b);
              var d = (K.K[b] || {}).cd;
              Ge(
                a,
                b,
                d,
                c.querySelector(`.ob-smartfeed-joker[data-card-idx='${d}']`)
              );
            }
          };
          Ze = function (a, b, c, d) {
            a &&
              (K.K[b].$r && Ye(c)
                ? d ||
                  ((a = G.ma(b)),
                  (a.v().style.display = "none"),
                  OBR.He.fire(`empty_feed_${b}`, [a]))
                : (K.K[b].$r = !1));
          };
          Ue = function (a, b) {
            b = new OBR.dataBI(b, c => c.dr);
            a.Zn.length ? b.B.Az.fire() : b.B.Uy.fire();
            a.Aj && b.B.Bz.fire();
          };
          $e = function (a) {
            return a.filter(b =>
              (b = b.$()) && b.Mj ? !b.Mj(Date.now()) : !0
            );
          };
          Ye = function (a) {
            return (
              !a ||
              0 === a.length ||
              a.map(b => G.ma(b.$().ja)).every(b => !b.Ba())
            );
          };
          af = function (a, b) {
            Qd(!0, b, { cardIdx: parseInt(Sd(b)) + parseInt(K.K[b].Ig) });
            Ge(a, b, Sd(b));
          };
          bf = function (a) {
            a.filter(b => {
              b = G.ma(b.$().ja);
              return b.$c() && !b.zj();
            }).forEach(b => {
              var c = G.v(b.$().ja),
                d = b.$().ra;
              b = G.ma(b.$().ja);
              if (c && !c.shadowRoot) {
                var e = d.includes("REEL");
                d = c.querySelector(".ob-widget");
                e &&
                  ((e = document.createElement("div")),
                  e.appendChild(d),
                  (d = e));
                d &&
                  c.attachShadow &&
                  ((e = b.Ui()),
                  (b = b.Mg()),
                  OBR.g.attachShadow(c, d, { mode: "open" }, e, b));
              }
            });
          };
          cf = function (a, b) {
            a.filter(c => c.$().Pc).map(c => {
              try {
                const d = c.$().cardIdx,
                  e = c
                    .$()
                    .Pc.split(".")
                    .reduce((g, k) => g[k], window),
                  f = Ce(b).querySelector(`div[data-card-idx='${d}']`);
                e && f && setTimeout(e.bind(null, f), 0);
              } catch (d) {
                je.error(
                  `fail to run card callback, card Json: ${c.$()} error: ${d}`
                );
              }
            });
          };
          df = function (a, b) {
            return b.filter(c => {
              c = c.$();
              return !a.Zn.includes(Number(c.cardIdx));
            });
          };
          ef = function (a, b) {
            return a.filter((c, d) => b[d].style.opacity);
          };
          ff = function (a) {
            return a.filter(b => b.style.opacity);
          };
          Se = function (a, b, c) {
            a.forEach(d => {
              d.isIntersecting && (c(), b.unobserve(d.target));
            });
          };
          gf = function (a, b) {
            a.forEach(c => {
              if (
                c &&
                c.W &&
                c.W.response &&
                c.W.response.request &&
                c.W.response.request.idx
              ) {
                var d = c.W.response.request.idx;
                OBR.F[d] || ((c.Y = () => b), (OBR.F[d] = c));
              }
            });
          };
          hf = function (a, b) {
            const c = [],
              d = a.filter(e => "widget" === e.$().ta);
            b.forEach(e =>
              d.forEach(f => {
                const g = e.attributes["data-card-idx"].value,
                  k = f.$().cardIdx;
                if (g === k) return c.push(f);
              })
            );
            return c;
          };
          kf = function (a, b = window) {
            try {
              if (b.__gpp)
                b.__gpp("addEventListener", c => {
                  if ("signalStatus" === c.eventName && "ready" === c.data) {
                    var d = c.pingData.gppString;
                    if (d)
                      return (
                        (d = OBR.g.oa(d)),
                        (c = c.pingData.sectionList),
                        (OBR.i.gj = d),
                        (OBR.i.Pn = c),
                        d
                      );
                  }
                  return null;
                });
              else return jf(a);
            } catch (c) {
              return null;
            }
          };
          jf = function (a) {
            if (OBR.i.Zc) {
              let b = window,
                c = 0;
              for (; b && 10 > c; )
                try {
                  if (b.frames.__gpp) return kf(a, b);
                  b = b.parent;
                  c++;
                } catch (d) {
                  break;
                }
            }
            return null;
          };
          lf = function (a, b) {
            a.O =
              null === b || isNaN(b)
                ? null
                : document.getElementById(`outbrain_widget_${b}`);
          };
          mf = function (a) {
            a.requestData || (a.requestData = {});
            return a.requestData;
          };
          nf = function (a, b, c) {
            a = a[b];
            return "undefined" !== typeof a && null !== a ? a : c;
          };
          of = function (a) {
            a.pq || (a.pq = {});
            return a.pq;
          };
          pf = function (a) {
            a.No = !0;
            setTimeout(() => {
              a.No = !1;
              a.flush();
            }, a.FD);
          };
          OBR._jsc.rf = function (a) {
            ma.fire(Object.assign({}, a.Wa, qf("click")));
          };
          Ff = function (a) {
            const b = a.j.cj();
            ma.fire(
              Object.assign(
                {},
                { odbResponse: b, mvResponse: a.j.cf() },
                a.Wa,
                qf("dataReturned")
              )
            );
          };
          Gf = function (a) {
            const b = a.j.Y();
            a.Wa.version = window.OB_releaseVer;
            a.Wa.widgetId = a.j.D();
            a.Wa.idx = a.j.G();
            a.Wa.servedWidgetId = a.j.Sg() || a.j.D();
            a.Wa.element = a.j.v();
            const c = a.j.o("abTestVal", null);
            c && (a.Wa.abtest = c);
            b
              ? ((a.Ia = b),
                (a.Wa.parentWidgetId = b.D()),
                (a.Wa.servedParentWidgetId = b.Sg() || b.D()),
                (a.Wa.feedIndex = b.G()),
                (a.Wa.cardIdx = a.j.o("fCard", null)))
              : a.j.Na() &&
                ((a.Li.rendered = ta("rendered", a.j.D())),
                (a.Li.viewability = ta("viewability", a.j.D())));
          };
          If = function (a) {
            const b = !0 === a.j.o("oo", !1);
            a = a.j.Vc(!0);
            return Hf.isEnabled && !b && a && !OBR.i.mf;
          };
          Db = function (a) {
            if (!a) return {};
            const {
              x: b,
              y: c,
              width: d,
              height: e,
            } = a.getBoundingClientRect();
            return { x: b, y: c, width: d, height: e };
          };
          Lf = function (a) {
            OBR.g.Bb(window, "resize", () => {
              OBR._jsc.Jf(a);
              Kf(a);
            });
            OBR._jsc.Jf(a);
            Kf(a);
          };
          OBR._jsc.Jf = function (a) {
            a.Ga = {
              height:
                window.innerHeight && document.documentElement.PM
                  ? Math.min(
                      window.innerHeight,
                      document.documentElement.clientHeight
                    )
                  : window.innerHeight || document.documentElement.clientHeight,
              width:
                window.innerWidth && document.documentElement.clientWidth
                  ? Math.min(
                      window.innerWidth,
                      document.documentElement.clientWidth
                    )
                  : window.innerWidth || document.documentElement.clientWidth,
            };
          };
          Kf = function (a) {
            document &&
              document.body &&
              (a.Qm = Math.max(
                Math.max(
                  document.body.scrollHeight,
                  document.documentElement.scrollHeight
                ),
                Math.max(
                  document.body.offsetHeight,
                  document.documentElement.offsetHeight
                ),
                Math.max(
                  document.body.clientHeight,
                  document.documentElement.clientHeight
                )
              ));
          };
          OBR._jsc.Mf = function () {
            var a = OBR.ca;
            return { x: 0, y: 0, width: a.Ga.width, height: a.Ga.height };
          };
          OBR._jsc.Nf = function (a) {
            var b = 0;
            if (!a) return 1e4;
            try {
              if (a.offsetParent)
                for (;;) {
                  b += a.offsetTop;
                  if (!a.offsetParent) break;
                  a = a.offsetParent;
                }
              else a.y && (b += a.y);
            } catch (c) {
              return OBR.error(c), 1e4;
            }
            return parseInt(b, 10);
          };
          Of = function (a, b) {
            b = b.boundingClientRect;
            a = a.getBoundingClientRect();
            return {
              top: a.top + b.top,
              bottom: a.bottom + b.top,
              left: a.left + b.left,
              right: a.right + b.left,
              width: a.width,
              height: a.height,
            };
          };
          Pf = function (a, b) {
            b = b.rootBounds;
            a = {
              left: Math.max(a.left, b.left),
              right: Math.min(a.right, b.right),
              top: Math.max(a.top, 0),
              bottom: Math.min(a.bottom, b.height),
            };
            a.width = a.right - a.left;
            a.height = a.bottom - a.top;
            return a;
          };
          Qf = function (a) {
            OBR.za.jx({ url: a, method: OBR.i.V.qc, data: {}, by: !0 });
          };
          Rf = function (a) {
            const b = (d, e) => {
              d.map(f => {
                var g = d[f].pixel;
                g = (f = d[f].contextAware)
                  ? g
                  : "https://widgets.outbrain.com/nanoWidget/externals/obPixelFrame/obPixelFrame.htm#p=" +
                    encodeURIComponent(g);
                g = N.createElement({
                  type: f ? "IMG" : "IFRAME",
                  id: null,
                  css: "display:none;height:1px;width:1px;",
                  attributes: { src: g },
                });
                e.appendChild(g);
              });
            };
            var c = a.v();
            a &&
              c &&
              ((a = a.ba("whenViewedPixels", null)),
              (c = OBR.g.H(c).querySelector(".ob-pixels")),
              a && c && b(a, c));
          };
          OBR._jsc.Qe = function (a) {
            var b = OBR.nc;
            const c = a.G();
            b.Uh[c] && (Sf(b, a, b.uc.ready), b.Ak(a), delete b.Uh[c]);
          };
          Uf = function (a) {
            var b = OBR.nc;
            if (!a.Xu())
              if ((N.log("Adding stats for: " + a.G()), a.l("tracking", !1)))
                Sf(b, a, b.uc.Iq);
              else if (a.pv()) Sf(b, a, b.uc.stopped);
              else if (Tf(a) || a.je()) Sf(b, a, b.uc.ready);
              else if (a.gE() || a.VG()) {
                const c = a.G();
                b.Uh[c] || (b.Uh[c] = a.v());
              } else Sf(b, a, b.uc.ready), b.Ak(a);
          };
          Xf = function (a) {
            OBR.He.add("ajax_error", (b, c) => {
              /mcdp-.*\.outbrain\.com/.test(c) &&
                (5040 === (Number(ic.om[1437]) || null)
                  ? Vf(b, c)
                  : Wf(a, b, c));
            });
          };
          Zf = function (a) {
            N.log("Starting Statistics");
            N.rk(() => {
              a.qm = !0;
              Yf(a);
            });
            N.log("AdBlock - Start full check for stats");
            nb(OBR.kb, { nH: !0 });
          };
          Sf = function (a, b, c) {
            var d = b.ba("viewability_actions");
            if (void 0 !== d && null !== d && d.reportServed) {
              var e = b.ba("viewability_actions").reportServed.split("?");
              d = N.kk(e[1]);
              d.tm = new Date().getTime() - a.startTime;
              d.eT = c;
              if (c === a.uc.ready) {
                d = N.Jh(d);
                if (b) {
                  var f = document.body.getBoundingClientRect();
                  var g = b.v();
                  if (g) {
                    var k = g.getBoundingClientRect();
                    f = `&widgetWidth=${Math.round(
                      k.width || g.clientWidth
                    )}&widgetHeight=${Math.round(
                      k.height || g.clientHeight
                    )}&widgetX=${Math.round(
                      k.left - f.left
                    )}&widgetY=${Math.round(k.top - f.top)}`;
                  } else f = "";
                } else f = "";
                g = OBR.Ke.Xe;
                !b || -1 === g || OBR.Ke.Px
                  ? (g = "")
                  : ((OBR.Ke.Px = !0), (g = `&tpcs=${g}`));
                f = `${d}${f}${g}`;
              } else f = N.Jh(d);
              d = [];
              d.push(`${e[0]}?${f}`);
              d.push("&wRV=" + OBR.i.ver);
              a: {
                try {
                  if (0 === parseInt(b.o("pad", "0"))) {
                    b.ux(!1);
                    var l = !1;
                    break a;
                  }
                  if ("undefined" === typeof b.Io()) {
                    var q = "undefined" === typeof b.Io() ? sb(b.G(), c) : !1;
                    b.ux(q);
                    l = q;
                    break a;
                  }
                } catch (W) {
                  OBR.logger.log(
                    "updatePaidRecsViewability: in detection of visible paid recs"
                  );
                }
                l = b.Io();
              }
              d.push("&pVis=" + (l ? "1" : "0"));
              d.push("&lsd=" + b.o("lsd", -1));
              d.push("&eIdx=");
              l = b.o("cnsnt", "");
              q = b.o("cnsntv2", "");
              e = b.o("ccpa", "");
              "" !== l && d.push("&cnsnt=" + l);
              "" !== e && d.push("&ccpa=" + e);
              "" !== q && d.push("&cnsntV2=" + q);
              a.Mi || (d.push("&cheq=" + OBR.fraudDetection.ug), (a.Mi = !0));
              c === a.uc.ready && b.au() && d.push("&rtt=" + b.au());
              d.push("&oo=" + b.o("oo", "false"));
              if (c === a.uc.ready) {
                if ($b.isEnabled) {
                  if ($b.isEnabled)
                    if (((c = b.Y()), (l = b.G()), 100 < l && 1e3 > l))
                      var h = dc();
                    else {
                      l = c ? c.cE() : void 0;
                      q =
                        "connection" in navigator &&
                        (null == (h = navigator.connection)
                          ? void 0
                          : h.effectiveType);
                      h = (e = ac()) ? e.requestStart || e.fetchStart : void 0;
                      e = e ? e.responseEnd : void 0;
                      f = parseInt(window.performance.timeOrigin);
                      g = cc(f, bc(b, "odb", "start"));
                      k = cc(f, bc(b, "odb", "end"));
                      var m = cc(f, bc(b, "rendered")),
                        p = cc(f, bc(b, "mv", "start")),
                        r = cc(f, bc(b, "mv", "end")),
                        t = b.D();
                      c =
                        (c ? c.ie() : b.ie()) ||
                        OBR.i.Gd ||
                        (c && va(c.D())) ||
                        va(t) ||
                        b.bv()
                          ? "1"
                          : "0";
                      h = {
                        fw: h,
                        obLoaded: e,
                        odbReq: g,
                        odbRes: k,
                        mvReq: p,
                        mvRes: r,
                        rendered: m,
                        timeOrigin: f,
                        actualSizeChunk: l,
                        connectionEffectiveType: q,
                        Dv: c,
                      };
                    }
                  else h = dc();
                  var {
                    fw: u,
                    obLoaded: v,
                    odbReq: w,
                    odbRes: A,
                    mvReq: D,
                    mvRes: E,
                    rendered: I,
                    actualSizeChunk: J,
                    timeOrigin: V,
                    connectionEffectiveType: O,
                    Dv: R,
                  } = h;
                  v && d.push("&lo=" + v.toFixed());
                  u && d.push("&obreq=" + u.toFixed());
                  w && d.push("&odbreq=" + w.toFixed());
                  A && d.push("&odbres=" + A.toFixed());
                  D && d.push("&mvreq=" + D.toFixed());
                  E && d.push("&mvres=" + E.toFixed());
                  I && d.push("&re=" + I.toFixed());
                  O && d.push("&cet=" + O);
                  J && d.push("&cs=" + J);
                  V && d.push("&to=" + V);
                  R && d.push("&ll=" + R);
                }
                d.push(`&chs=${OBR.i.wn(b)}`);
              }
              (b = b.aE()) && d.push(`&eme=${b}`);
              b = d.join("");
              N.log("Stats waiting list: " + b);
              a.tg.add(b);
              a.qm && Yf(a);
            }
          };
          Tf = function (a) {
            const b = a.l("recMode", "");
            return b.includes("top-box") || b.includes("bottom-box") || a.Hj();
          };
          $f = function () {
            var a = OBR.nc;
            a.Rb || (a.zk(), setTimeout(() => (a.Rb = !1), a.AJ), (a.Rb = !0));
          };
          ag = function (a, b) {
            const c = N.ma(b).v();
            let d = null;
            const e = g => {
                0 >= g
                  ? (clearTimeout(d), (d = null))
                  : (d =
                      d ||
                      setTimeout(() => {
                        N.ma(b) && ((a.Ee[b] = null), f.unobserve());
                      }, 15e3));
              },
              f = new OBR.IntersectionObserver({
                callback: g => {
                  e(g.intersectionRatio);
                },
                element: c,
                threshold: 0,
                intersectPercentage: -1,
                unobserve: !1,
              });
            a.Ua.push(f);
            f.observe();
          };
          Vf = function (a, b) {
            OBR.error({
              name: "obm-MCDPError",
              message: `${a.message}, url: ${b}`,
            });
          };
          Wf = function (a, b, c) {
            setTimeout(() => {
              let d = (a.Lq.get(c) || 0) + 1;
              a.Lq.set(c, d);
              2 >= d
                ? (OBR.error({
                    name: "obm-MCDPRetriesError",
                    message: `${b.message}, url: ${c} , retries:${d}`,
                  }),
                  Qf(c))
                : (a.Lq.delete(c), Vf(b, c));
            }, 1e3);
          };
          Yf = function (a) {
            for (; !a.tg.Fd(); ) {
              var b = a.tg.top();
              if (OBR.i.Kj() || OBR.i.Lj()) var c = "&ab=0&wl=0";
              else
                (c = `&ab=${N.tn()}&wl=${N.Nn()}`),
                  "&ab=0&wl=2" === c &&
                    OBR.error({
                      name: "adblock",
                      message: "got 0 2 in ad blocker detection",
                    });
              b += c;
              Qf(b);
            }
          };
          dg = function (a, b, c = !1, d = !1, e = !1) {
            const f = OBR.g.v(b);
            if (f) {
              const g = bg(f);
              (e && "undefined" != f.style.webkitLineClamp) ||
                !(g || c || d) ||
                setTimeout(
                  (() => {
                    const k = OBR.g.v(b);
                    g && cg(a, k, b, "ob-rec-text");
                    c && cg(a, k, b, "ob-rec-source");
                    d && cg(a, k, b, "ob-rec-description");
                  }).bind(a),
                  500
                );
            } else
              OBR.logger.log(
                "truncation - no container found for widgetIdx=" + b
              );
          };
          eg = function (a, b, c, d) {
            if (c)
              if (d)
                (c = b.innerText || b.textContent),
                  (c =
                    0 < c.lastIndexOf(" ")
                      ? c.substring(0, c.lastIndexOf(" "))
                      : c.substring(0, c.length - 3)),
                  -1 < a.HA.indexOf(c.slice(-1)) &&
                    (c = c.substring(0, c.length - 1)),
                  (b.innerHTML = c + "&hellip;");
              else
                for (
                  a = b.clientHeight,
                    c = b.textContent + "&hellip;",
                    b.innerHTML = c;
                  b.clientHeight > a;

                )
                  (c = c.substring(0, b.textContent.length - 2) + "&hellip;"),
                    (b.innerHTML = c);
          };
          cg = function (a, b, c, d = "ob-rec-text") {
            const e = OBR.g.getElementsByClassName(d, b);
            d = () => {
              for (let m = 0; m < e.length; m++) {
                const p = e[m];
                p.title = p.innerText || p.textContent;
                var f = p.clientHeight,
                  g = parseInt(OBR.g.ec(p, "max-height").replace("px", ""));
                if (f < g) continue;
                f = p.cloneNode(!0);
                var k = document.createElement("div");
                k.style.position = "absolute";
                k.style.top = "-1000px";
                k.style.left = "-1000px";
                document.body.appendChild(k);
                var l = f.style;
                l.fontSize = OBR.g.ec(p, "font-size");
                l.fontWeight = OBR.g.ec(p, "font-weight");
                l.fontFamily = OBR.g.ec(p, "font-family");
                l.lineHeight = OBR.g.ec(p, "line-height");
                l.textTransform = OBR.g.ec(p, "text-transform");
                l.letterSpacing = OBR.g.ec(p, "letter-spacing");
                l.display = "block";
                l.visibility = "hidden";
                var q = OBR.g.ec(p, "padding-right").replace("px", ""),
                  h = OBR.g.ec(p, "padding-left").replace("px", "");
                l.width = p.clientWidth - h - q + "px";
                k.appendChild(f);
                q = void 0;
                l = a;
                h = f.innerText || f.textContent;
                let r = !0;
                const t = OBR.Xa.ee(c);
                for (
                  t && (r = t.l("ellipsisTruncationUseSpace", !0));
                  0 < g && f.offsetHeight > g && 0 < h.length;

                )
                  (h = h.substring(0, h.length - 1)),
                    (f.innerHTML = h),
                    (q = !0);
                0 === h.length
                  ? (q = !1)
                  : ((g = f.offsetHeight),
                    eg(l, f, q, r),
                    g < f.offsetHeight &&
                      ((h = h.substring(0, h.length - 1)),
                      (f.innerHTML = h),
                      eg(l, f, q, r)));
                g = q;
                !0 === g
                  ? (p.innerHTML = f.innerText || f.textContent)
                  : !1 === g &&
                    OBR.logger.log(
                      "Truncation - External CSS broke the calculation, truncation is canceled."
                    );
                k.parentNode.removeChild(k);
              }
            };
            0 ===
            OBR.g.getElementsByClassName("ob-touch-strip-layout", b).length
              ? d()
              : setTimeout(d, 1e3);
          };
          bg = function (a) {
            var b = !1;
            (a = a.querySelector(".ob-widget")) &&
              a.attributes["data-dynamic-truncate"] &&
              "true" === a.attributes["data-dynamic-truncate"].value &&
              (b = !0);
            return b;
          };
          fg = function (a) {
            const b = document.createElement("script");
            b.className = "ct_invocation_65349 ct_invocation_65349_0";
            b.setAttribute("jsonp", "OBR.extern.onCheqResponse");
            b.src =
              "https://rock.defybrick.com/placement_invocation?id=65349&idx=0";
            b.onerror = a;
            return b;
          };
          hg = function () {
            var a = OBR.Xh;
            OBR.logger.log("FD calling Cheq");
            return new Promise((b, c) => {
              let d = setTimeout(() => {
                OBR.fraudDetection.Zd ||
                  ((a.timeout = !0), c({ type: "timeout", HH: null }));
              }, a.tC);
              a.rs = Date.now();
              a.Cm = f => {
                f = encodeURIComponent(f);
                OBR.fraudDetection.Zd = f;
                clearTimeout(d);
                f = Date.now() - a.rs;
                a.timeout
                  ? ((f = Object.assign({ cheqEvent: 2 }, { responseTime: f })),
                    gg.sd(f))
                  : b({ type: "success" });
              };
              const e = fg(f => {
                clearTimeout(d);
                c({ type: "error", HH: f.message });
              });
              document.getElementsByTagName("head")[0].appendChild(e);
            });
          };
          ig = function () {
            OBR.Xh.Cm = b => {
              b = encodeURIComponent(b);
              OBR.fraudDetection.Zd = b;
            };
            const a = fg(() => {});
            document.getElementsByTagName("head")[0].appendChild(a);
          };
          jg = function (a) {
            const b = document.createElement("div");
            b.className = `ctcg_${a}`;
            b.setAttribute("style", "width:1px;height:1px");
            document.body.appendChild(b);
          };
          kg = function (a) {
            document && document.body
              ? jg(a)
              : window.addEventListener("DOMContentLoaded", () => {
                  jg(a);
                });
          };
          lg = function (a, b) {
            var c = OBR.Xh;
            if (!c.Bm) {
              c.Bm = !0;
              var d = k =>
                  document && k
                    ? document.getElementsByClassName
                      ? document.getElementsByClassName(k)
                      : document.querySelectorAll("." + k)
                    : null,
                e = "https:" === location.protocol ? "https:" : "http:",
                f = document.createElement("script"),
                g = d(`ct_invocation_${b}`);
              g = g ? g.length : null;
              null === g
                ? (c.Bm = !1)
                : ((c = d(`ctcg_${b}`)),
                  (f.className = `ct_invocation_${b} ct_invocation_${b}_${g}`),
                  c && c[0] && (c[0].className = `ctcg_${b}_` + g),
                  f.setAttribute(
                    "ch",
                    (k => {
                      k = {
                        Request_id: k.o("req_id", "-1"),
                        publisher_id: k.o("pid", "0"),
                        source_id: k.o("sid", "0"),
                        widget_id: k.o("widgetJsId", k.D()),
                        pv_id: k.o("pvId", "-1"),
                      };
                      try {
                        return JSON.stringify(k);
                      } catch (l) {
                        return "";
                      }
                    })(a)
                  ),
                  (f.src =
                    e +
                    `//rock.defybrick.com/placement_invocation?id=${b}&idx=${g}`),
                  document.getElementsByTagName("head")[0].appendChild(f));
            }
          };
          mg = function (a) {
            var b = a.o("req_id", null),
              c = a.o("pid", null),
              d = a.o("widgetJsId", null);
            const e = a.o("pvId", null),
              f = a.o("sid", null),
              g = OBR.g.oa(a.Ja());
            d =
              "https://fqtag.com/implement.js" +
              `?rt=display&org=XerMOk8ZaYDInXdxmR4z&s=${b}&p=${c}&a=${f}&cmp=${d}&rd=${g}&c1=${e}`;
            b = OBR.g.createElement("script", null, null, { src: d });
            c = OBR.g.createElement("noscript", null);
            c.insertAdjacentHTML(
              "beforeend",
              '<img src="' + d + '" width="1" height="1" border="0"/>'
            );
            a = a.v();
            d = document.createDocumentFragment();
            d.appendChild(b);
            d.appendChild(c);
            a.appendChild(d);
          };
          og = function () {
            let a = !1,
              b = null;
            return new Promise((c, d) => {
              const e = btoa(OBR.fraudDetection.Gi);
              OBR.logger.log("FD call TCheck");
              const f = setTimeout(() => {
                a = !0;
                OBR.logger.log("FD TCheck timeout");
                d({ type: "timeout" });
              }, 200);
              b = Date.now();
              OBR.za.send(OBR.i.V.qc, ng + "/" + e, null, g => {
                let k = Date.now() - b;
                a: {
                  let l = !1;
                  if (g) {
                    try {
                      l = JSON.parse(g).result;
                    } catch (q) {
                      g = null;
                      break a;
                    }
                    g = l;
                  } else g = void 0;
                }
                a && gg.sd({ cheqEvent: 3, responseTime: k });
                clearTimeout(f);
                OBR.logger.log("FD got response from TCheck");
                null === g && d({ type: "error" });
                c(g);
              });
            });
          };
          pg = function () {
            const a = () =>
              Math.floor(65536 * (1 + Math.random()))
                .toString(16)
                .substring(1);
            return (
              a() +
              a() +
              "-" +
              a() +
              "-" +
              a() +
              "-" +
              a() +
              "-" +
              a() +
              a() +
              a()
            );
          };
          qg = function (a, b) {
            a.zt.add("onFDStatusReady", b);
          };
          sg = function (a) {
            return OBR._jsc.z(function* () {
              try {
                return (yield rg(a)) ? "2" : "0";
              } catch (b) {
                return "0";
              }
            });
          };
          tg = function (a) {
            return OBR._jsc.z(function* () {
              if (!Ba()) return (a.ob = 7), "0";
              let b = OBR.g.R(OBR._jsc.C.br, null);
              if (null !== b) "0" === b && (a.ob = 0);
              else {
                if (OBR.i.WG) return (a.ob = 2), "0";
                b = yield sg(a);
              }
              return b;
            });
          };
          rg = function (a) {
            return OBR._jsc.z(function* () {
              try {
                const b = yield og();
                a.ob = 2;
                return b;
              } catch (b) {
                return (
                  b && "timeout" === b.type
                    ? (OBR.logger.log("FD TCheck timeout"), (a.ob = 1))
                    : (a.ob = 7),
                  !1
                );
              }
            });
          };
          wg = function (a) {
            OBR._jsc.z(function* () {
              try {
                yield hg();
                OBR.logger.log("FD got response from Cheq");
                a.ug = 1;
                a.ob = 4;
                OBR.controller.bJ(b => {
                  b && 0 === b.G() && (a.xh = b.o("pvId", null));
                  ug(a);
                });
                vg(a, !1);
                return;
              } catch (b) {
                (a.If = a.sn),
                  "timeout" === b.type
                    ? ((a.ug = 2),
                      OBR.logger.log("FD Cheq timeout"),
                      (a.ob = 3))
                    : ((a.ug = 5), (a.ob = 5), OBR.logger.log("FD Cheq error"));
              }
              vg(a);
            });
          };
          vg = function (a, b = !0) {
            b && ug(a);
            a.At = !0;
            a.zt.fire("onFDStatusReady");
            OBR.logger.log("FD finished");
          };
          xg = function () {
            const a = OBR.fraudDetection;
            OBR._jsc.z(function* () {
              switch (yield tg(a)) {
                case "2":
                  wg(a);
                  break;
                case "7":
                  a.ij = 103569;
                case "6":
                  kg(a.ij);
                case "4":
                  a.ob = 6;
                  vg(a);
                  break;
                case "0":
                  vg(a, !1);
                  break;
                case "5":
                  wg(a);
                  break;
                default:
                  vg(a);
              }
            });
          };
          ug = function (a) {
            a = { ob: a.ob, xh: a.xh };
            const b = { cheqEvent: 0, exitReason: a.ob };
            a.data && a.data.uC && (b.responseTime = a.data.uC);
            OBR.fraudDetection.Zd &&
              (b.message = decodeURIComponent(OBR.fraudDetection.Zd));
            a.xh && (b.pvId = a.xh);
            gg.sd(b);
          };
          zg = function (a) {
            if (a.options.Ov && !a.options.Cj) {
              var b = `
    .ob-explore-more-up-page {
      display: flex;
      align-items: center;
      justify-content: center;
      width:100vw;
      height:48px;
      top:0
    }
    .ob-explore-more-up-page .ob-explore-more-image-logo {
      width:${a.options.hD};
      height: auto;
      max-height: 44px;
      display: flex;
      align-self: center;
      margin-left:${a.options.gD};
    }
    .ob-explore-more-up-page .back-button {
      background-image:url(https://widgets.outbrain.com/images/widgetIcons/arrows-chevron-left.svg);
      width:24px;
      height:24px;
      position:absolute;
      left: 0;
      background-repeat:no-repeat;
      background-color:#000;
      border-color:#000;
      background-size:contain;
      padding:9px 6.5px 8.5px 6px
    }`,
                c = document.createElement("div");
              c.className = "ob-explore-more-page";
              c.innerHTML = `
      <style>${b}</style>
      <div class='ob-explore-more-up-page' style='background-color: ${a.options.rB}'>
        <button class='back-button'></button>  
        <a class='imageLogoLink'>
          <img class='ob-explore-more-image-logo' src="${a.options.Ov}"/>
        </a>
        
      </div>`;
              c.querySelector("button.back-button").addEventListener(
                "click",
                () => {
                  document.referrer && !a.Ru
                    ? (window.location.href = document.referrer)
                    : yg(a);
                }
              );
              c.querySelector("a.imageLogoLink").addEventListener(
                "click",
                () => {
                  window.location = a.j.l(
                    "urlHomePage",
                    window.location.protocol + "//" + window.location.host
                  );
                }
              );
              return c;
            }
          };
          yg = function (a) {
            var b = a.options.I;
            const c = a.options.ik;
            b &&
              b.parentElement &&
              (c ? b.parentElement.removeChild(b) : (b.style.display = "none"));
            if (a.options.Vv) {
              a =
                document.body.querySelectorAll(
                  "video:not(div.OUTBRAIN video)"
                ) || [];
              b =
                document.body.querySelectorAll(
                  "audio:not(div.OUTBRAIN audio)"
                ) || [];
              for (var d of [...a, ...b])
                d.hasAttribute("ob-em-state-muted") &&
                  ((d.muted = !1), d.removeAttribute("ob-em-state-muted"));
            }
            if (OBR.i.hf) {
              d = document.querySelectorAll(".ob-fixed-overlay-scroll");
              for (const e of d) e.classList.remove("ob-fixed-overlay-scroll");
            }
          };
          Ag = function (a) {
            const b = document.createElement("div");
            b.id = "ob-em-blacker";
            b.style =
              "position: fixed;width: 100vw; height: 100vh;z-index: 2147483643;background-color: rgba(0,0,0,0.5);overflow:hidden;top:0;left:0;display: flex;align-items: center;justify-content: center;opacity:0;transition: .1s ease-in;";
            const c = document.createElement("div");
            c.id = "ob-em-container";
            c.style =
              "position: relative;width:60vw;height:80vh;max-width:650px;max-height:700px;background-color:#fff;z-index:2147483644;overflow:hidden;overflow-y: auto;display:block;border-bottom: 32px solid white;padding: 0 32px;";
            c.innerHTML =
              '<div class="close-btn" style="position: sticky;text-align: right;top:10px;margin-right: -25px;height: 0;color:rgb(164, 163, 168);cursor: pointer;">\u2715</div>';
            b.append(c);
            c.querySelector(".close-btn").addEventListener(
              "click",
              () => {
                yg(a);
                a.j.ub(P.Ya.S.oz);
              },
              { once: !0 }
            );
            c.addEventListener("click", d => d.stopPropagation());
            b.addEventListener("click", () => {
              yg(a);
              a.j.ub(P.Ya.S.pz);
            });
            return b;
          };
          Bg = function (a) {
            a = a.j.l("exploreMoreElementsBlockScroll", "[]");
            try {
              const b = JSON.parse(a) || [];
              b &&
                b.length &&
                OBR.g.ia(`${b.join(",")}{overflow:hidden!important}`);
            } catch (b) {
              OBR.logger.log(b);
            }
          };
          Cg = function (a) {
            if (OBR.i.hf) {
              a = a.j.l("exploreMoreElementsBlockScroll", "[]");
              try {
                const b = JSON.parse(a) || [];
                if (b && b.length) {
                  OBR.g.ia(
                    ".ob-fixed-overlay-scroll {position: fixed !important; top: 0 !important; left: 0 !important; width: 100% !important; height: 100%; !important}"
                  );
                  for (const c of b) {
                    const d = document.querySelector(c);
                    d && d.classList.add("ob-fixed-overlay-scroll");
                  }
                }
              } catch (b) {
                OBR.logger.log(b);
              }
            }
          };
          Dg = function (a) {
            const b = a.options.I;
            b && b.parentElement && (b.style.display = "block");
            Bg(a);
            Cg(a);
          };
          Eg = function (a) {
            (a = a && a.querySelector(".OUTBRAIN")) &&
              a.removeAttribute("data-ob-lazy-render");
            a && a.removeAttribute("data-ob-prefetch");
          };
          Fg = function (a) {
            const b = a.options.I,
              c = Ag(a);
            a = c.querySelector("#ob-em-container");
            const d = b.children;
            b.querySelectorAll(
              ".ob-explore-more-up-page, .ob-explore-more-advise"
            ).forEach(e => e.remove());
            a.append(...d);
            b.style = "";
            setTimeout(() => {
              c.style.opacity = "1";
            }, 0);
            b.append(c);
          };
          Gg = function (a) {
            a =
              (a = a.options.I.querySelector(".OUTBRAIN")) &&
              a.getAttribute("data-idx");
            OBR.controller.hn(`widgetLazyRender_${a}`);
          };
          Hg = function (a) {
            (a = a.options.I.querySelector(".ob-explore-more-page")) &&
              a.remove();
          };
          Ig = function (a) {
            a = a.options.I.querySelectorAll(".ob-custom-css");
            for (const b of a)
              b.innerText = b.innerText.replace(
                new RegExp(/#ob-explore-more::before {.*?}/, "gs"),
                ""
              );
          };
          Kg = function (a) {
            const b = Jg(a);
            b && b.addEventListener("click", a.Qr);
          };
          Lg = function (a) {
            if (a.options.Vv) {
              a =
                document.body.querySelectorAll(
                  "video:not(div.OUTBRAIN video)"
                ) || [];
              var b =
                document.body.querySelectorAll(
                  "audio:not(div.OUTBRAIN audio)"
                ) || [];
              for (let c of [...a, ...b])
                c.muted ||
                  ((c.muted = !0), c.setAttribute("ob-em-state-muted", "true"));
            }
          };
          Mg = function (a, b) {
            a.bH && !a.options.ik
              ? Dg(a)
              : (a.Wc && clearInterval(a.Wc),
                a.j.ub(P.Ya.S.Xz),
                !OBR.F.some(c => {
                  let d;
                  return (
                    (null == (d = c.Y()) ? void 0 : d.D()) === a.options.da
                  );
                }) && a.j.ub(P.Ya.S.wz),
                Eg(a.options.I),
                Bg(a),
                Cg(a),
                a.options.Bj && b && Fg(a),
                Gg(a),
                a.options.Cj && (Hg(a), Ig(a), Kg(a)),
                (a.options.I.style.top = a.options.Zv || a.options.JH || "0"),
                Lg(a),
                ma.fire(
                  Object.assign({}, a.j.B.Wa, qf("exploreMoreRendered"))
                ));
          };
          Ng = function (a) {
            var b = document.body,
              c = b.appendChild,
              d = a.options.wL && OBR.i.fG && OBR.i.hf;
            const e = new DocumentFragment(),
              f = a.options.I;
            var g = `200${d ? "dvh" : "vh"}`;
            e.appendChild(f);
            f.id = "ob-explore-more";
            f.style = `position:fixed;top:${g};left:0;right:0;bottom:0;width:100vw;height:100${
              d ? "dvh" : "vh"
            };background-color:#fff;z-index:2147483647;overflow:auto;display:${"block"};box-sizing:border-box;overflow-x: hidden;overflow-y: scroll;`;
            d = [];
            a.options.Ca.dt && d.push(`data-external-id=${a.options.Ca.dt}`);
            a.options.Ca.ft &&
              d.push(`data-external-secondary-id=${a.options.Ca.ft}`);
            a.options.Ca.ld && d.push(`data-pub-imp-id="${a.options.Ca.ld}"`);
            a.options.Ca.rj &&
              d.push(`data-ob-installation-type=${a.options.Ca.rj}`);
            a.options.Ca.Ae && d.push(`data-ob-user-id=${a.options.Ca.Ae}`);
            a.options.Ca.ji && d.push(`data-ob-app-ver=${a.options.Ca.ji}`);
            a.options.Ca.qj &&
              d.push(`data-ob-installation-key=${a.options.Ca.qj}`);
            a.options.Ca.Yd && d.push(`data-click-url=${a.options.Ca.Yd}`);
            a.options.Ca.Fs && d.push(`data-ob-contenturl=${a.options.Ca.Fs}`);
            a.options.Ca.ps && d.push(`data-ob-bundleurl=${a.options.Ca.ps}`);
            a.options.Ca.vw && d.push(`data-ob-portalurl=${a.options.Ca.vw}`);
            d.push(`data-widget-id=${a.options.da}`);
            d.push("data-ob-lazy-render=true");
            d.push("data-ob-prefetch=true");
            d.push("data-ob-explore-more");
            f.innerHTML = `<div class='OUTBRAIN' data-ob-mark='true'  data-src='${a.j.Ja()}' ${d.join(
              " "
            )}></div>`;
            d = zg(a);
            a.options.ud.text
              ? ((g = document.createElement("div")),
                (g.className = "ob-explore-more-advise"),
                (g.innerHTML = `<style>${".ob-explore-more-advise{--ob-em-bubble-bg-color:#151e41;--ob-em-bubble-font-color:#fff;--ob-em-bubble-font-size:13px;--ob-em-bubble-font-family:inherit;width:100%;background-color:#151e41;background-color:var(--ob-em-bubble-bg-color);color:#fff;color:var(--ob-em-bubble-font-color);font-size:13px;font-size:var(--ob-em-bubble-font-size);font-family:var(--ob-em-bubble-font-family);margin:8px 0 12px;display:-webkit-box;display:-ms-flexbox;display:flex;padding:8px 0;position:relative;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.ob-explore-more-advise-x{width:20px;height:20px;-webkit-transform:scale(.9);transform:scale(.9);padding:0;border:0;background-color:#fff;background-color:var(--ob-em-bubble-font-color);-webkit-mask-image:url(https://widgets.outbrain.com/images/widgetIcons/icon-x.svg);mask-image:url(https://widgets.outbrain.com/images/widgetIcons/icon-x.svg);-webkit-box-flex:0;-ms-flex:0 0 20px;flex:0 0 20px;opacity:.7}.ob-explore-more-advise-x:hover{opacity:1}.ob-explore-more-advise-text{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;justify-items:center}"}</style><span class='ob-explore-more-advise-text'>${
                  a.options.ud.text
                }</span>`),
                g.style.setProperty &&
                  (g.style.setProperty(
                    "--ob-em-bubble-bg-width",
                    a.options.ud.width
                  ),
                  g.style.setProperty(
                    "--ob-em-bubble-bg-height",
                    a.options.ud.height
                  ),
                  g.style.setProperty(
                    "--ob-em-bubble-bg-color",
                    a.options.ud.bgColor
                  ),
                  g.style.setProperty(
                    "--ob-em-bubble-font-color",
                    a.options.ud.color
                  ),
                  g.style.setProperty(
                    "--ob-em-bubble-font-size",
                    a.options.ud.fontSize
                  ),
                  g.style.setProperty(
                    "--ob-em-bubble-font-family",
                    a.options.ud.fontFamily
                  )),
                a.options.isRTL &&
                  ((g.style.direction = "rtl"), g.setAttribute("dir", "rtl")))
              : (g = void 0);
            g && f.insertBefore(g, f.firstChild);
            d && f.insertBefore(d, f.firstChild);
            c.call(b, e);
            a.options.Cj &&
              (c = Jg(a)) &&
              (({ height: b } = c.getBoundingClientRect()),
              b &&
                0 < b &&
                ((a.options.Zv = `${b}px`),
                a.options.KH || (a.options.KH = getComputedStyle(c).zIndex)));
            return a;
          };
          Og = function (a) {
            const b = a.options.I,
              c = b.querySelector(".OUTBRAIN");
            c.removeAttribute("data-ob-mark");
            OBR.controller.hB(d => {
              d.v() === c &&
                d.eJ(() => {
                  a.collapse();
                  a.j.ub(P.Ya.S.xz);
                });
            });
            b && OBR.controller.ue();
            a.j.ub(P.Ya.S.kz);
            return a;
          };
          Qg = function (a) {
            const b = () => {
              a.Ru = 1 === window.history.length;
              const c = window.history.state;
              0 <= OBR.i.mb.search(/android/gim) &&
              (0 <= OBR.i.mb.search(/fb_iab/gim) ||
                0 <= OBR.i.mb.search(/fbav/gim))
                ? window.history.pushState({ obem: 1 }, "")
                : window.history.replaceState({ obem: 1 }, "");
              window.history.pushState(c, "");
            };
            !Pg(a) &&
            "safari" === OBR.i.Yb &&
            OBR.i.Cu &&
            16 <= OBR.i.Cu &&
            a.options.xJ
              ? (window.addEventListener("touchend", () => b(), { once: !0 }),
                window.addEventListener("mousedown", () => b(), { once: !0 }))
              : b();
            return a;
          };
          Rg = function (a) {
            let b = !1;
            window.addEventListener("popstate", () => {
              if (!a.options.ik)
                history.state
                  ? history.state &&
                    1 === history.state.obem &&
                    (Mg(a, !1), (a.bH = !0))
                  : yg(a);
              else if (b) a.collapse();
              else if (
                a.options.ik ||
                (history.state && 1 === history.state.obem)
              )
                Mg(a, !1), history.replaceState(null, ""), (b = !0);
            });
            a.options.Bj &&
              (document.addEventListener(
                "mouseleave",
                () => {
                  b || (Mg(a, !0), history.replaceState(null, ""), (b = !0));
                },
                { once: !0 }
              ),
              document.addEventListener(
                "visibilitychange",
                () => {
                  !b &&
                    document.hidden &&
                    (Mg(a, !0), history.replaceState(null, ""), (b = !0));
                },
                { once: !0 }
              ));
          };
          Sg = function (a) {
            if (a.options.Bj || "complete" === document.readyState) return a;
            a.Wc = setInterval(() => {
              history.state && 1 === history.state.obem && Mg(a, !1);
            }, a.options.Wc);
            return a;
          };
          Pg = function (a) {
            return (
              a.options.mF &&
              -1 < OBR.i.mb.indexOf("apple") &&
              -1 < OBR.i.mb.indexOf("iphone") &&
              -1 < OBR.i.mb.indexOf("webkit") &&
              (-1 < navigator.userAgent.indexOf("FBAN") ||
                -1 < navigator.userAgent.indexOf("FBAV")) &&
              -1 === OBR.i.mb.indexOf("safari") &&
              -1 === OBR.i.mb.indexOf("firefox") &&
              -1 === OBR.i.mb.indexOf("chrome")
            );
          };
          Jg = function (a) {
            try {
              return a.options.Cj && a.options.rp
                ? document.querySelector(a.options.rp)
                : void 0;
            } catch (b) {
              OBR.logger.log(
                `failed to get native header element ${a.options.rp}`
              );
            }
          };
          Tg = function (a, b) {
            if ((a = a && a.querySelector(".ob-shadow-slot"))) return a;
            a = document.createElement("slot");
            b.appendChild(a);
            b.parentElement.style.position = "relative";
            a = document.createElement("img");
            a.src =
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAANQTFRFAAAAp3o92gAAAAF0Uk5TAEDm2GYAAAAKSURBVHicY2AAAAACAAFIr6RxAAAAAElFTkSuQmCC";
            a.classList.add("ob-trk-pxls");
            a.ariaHidden = !0;
            a.style.cssText =
              "\n        width: 100%;\n        height: 100%;\n        display: block;\n      ";
            const c = document.createElement("div");
            c.classList.add("ob-shadow-slot");
            c.style.cssText = `
        position: absolute !important;
        z-index: -1 !important;
        height: ${b.offsetHeight}px !important;
        width: ${b.offsetWidth}px !important;
        top: ${b.offsetTop}px !important;
        left: ${b.offsetLeft}px !important;
      `;
            c.appendChild(a);
            return c;
          };
          Ug = function (a) {
            (a = a && a.querySelector("a.ob-dynamic-rec-link")) &&
              !a.classList.contains("ob-trk-pxls") &&
              a.classList.add("ob-trk-pxls");
          };
          Wg = function (a, b, c, d, e) {
            var f = b.ba("vcpmtrk");
            if (f && f.includes(+d)) Vg(a, b, c, d, [], [], e);
            else {
              f = e.filter(k => 1 === k.event);
              var g = e.filter(k => 2 === k.event);
              e = e.filter(k => 3 === k.event);
              a.Ni(b, d, f);
              Vg(a, b, c, d, g, e);
            }
          };
          Xg = function (a) {
            a &&
              document &&
              document.body &&
              a.forEach(b => {
                b = OBR.g.createElement(
                  "img",
                  null,
                  "display:none;width:1px;height:1px",
                  { src: b.url, referrerpolicy: "no-referrer" }
                );
                document.body.appendChild(b);
              });
          };
          Yg = function (a) {
            a &&
              document &&
              document.head &&
              a.forEach(b => {
                b = OBR.g.Ta("ob-pixel" + OBR.g.bj(), b.url, !0, !0);
                OBR.g.Pb(b);
              });
          };
          Vg = function (a, b, c, d, e, f, g) {
            if ((c = Zg(c, d))) {
              if (e && e.length) {
                const k = e.filter(l => 2 == l.method);
                e = e.filter(l => 1 == l.method);
                a.observe(b, c, d, 2, e);
                $g(a, b, c, d, k);
              }
              f && f.length && a.observe(b, c, d, 3, f);
              g && g.length && a.observe(b, c, d, 4, g);
            }
          };
          ah = function (a, b, c) {
            if (b && b.length) {
              a = OBR.g.H(a).querySelector(".ob-pixels");
              const d = document.createDocumentFragment(),
                e = g => {
                  g = OBR.g.createElement(
                    "iframe",
                    null,
                    "display:none;width:1px;height:1px;",
                    {
                      src: `https://widgets.outbrain.com/nanoWidget/externals/obPixelFrame/obPixelFrame.htm#p=${g.url}`,
                      sandbox: "allow-scripts allow-same-origin",
                    }
                  );
                  d.appendChild(g);
                },
                f = g => {
                  g = OBR.g.createElement(
                    "img",
                    null,
                    "display:none;width:1px;height:1px;",
                    {
                      src: `${decodeURIComponent(g.url)}`,
                      referrerpolicy: "no-referrer",
                    }
                  );
                  d.appendChild(g);
                };
              b.forEach(c ? f : e);
              a.appendChild(d);
            }
          };
          bh = function (a, b, c, d) {
            if (c && c.length) {
              (b = Zg(a, b)) ||
                OBR.error({
                  name: "JsTrackerError",
                  message: "Missing jsTracker element",
                });
              Ug(b);
              var e = d.$c() && d.Eo(),
                f = e && Tg(a, b),
                g = document.createDocumentFragment();
              c.forEach(k => {
                k = OBR.g.Ta(0, k.url, !0, !1);
                e ? (f.appendChild(k), g.appendChild(f)) : g.appendChild(k);
              });
              OBR.g.ff(g, e ? a : b);
            }
          };
          Zg = function (a, b) {
            if (a) return OBR.g.H(a).querySelector(`[data-pos="${b}"]`);
          };
          $g = function (a, b, c, d, e) {
            if (e && e.length) {
              var f = a.Vg(b);
              switch (
                parseInt(b.l("mrc50JsTrackersFiringStrategy", ch.onWidgetViewd))
              ) {
                case ch.onWidgetViewd:
                  dh(a, b, f, d, e);
                  break;
                case ch.onRecViewd:
                  dh(a, b, c, d, e);
                  break;
                case ch.onRec50Viewed:
                  dh(a, b, c, d, e, 0.5);
                  break;
                case ch.reelMRC50:
                  a.observe(b, c, d, 2, e);
              }
            }
          };
          dh = function (a, b, c, d, e, f) {
            b = new OBR.IntersectionObserver({
              threshold: f ? f : 0,
              unobserve: !0,
              callback: a.Ni.bind(a),
              callbackParams: [b, d, e],
              element: c,
              checkAbsoluteVisibility: !0,
            });
            a.Ua.push(b);
            b.observe();
          };
          eh = function (a, b, c = ".ob-lazy-bgimg, .ob-lazy-img") {
            [].slice.call(OBR.g.H(b.Ka).querySelectorAll(c)).forEach(d => {
              new OBR.IntersectionObserver({
                callback: a.Or.bind(a),
                callbackParams: [b, d, c],
                element: d,
                rootMargin: `${b.rootMargin}`,
                threshold: [0, 0.5, 1],
                unobserve: !0,
              }).observe();
            });
          };
          fh = function (a, b) {
            b &&
              b.Ka &&
              Array.from(
                OBR.g.H(b.Ka).querySelectorAll("img.ob-lazy-img")
              ).forEach(c => {
                (c.hasAttribute("loading") &&
                  "lazy" === c.getAttribute("loading")) ||
                  c.setAttribute("loading", "lazy");
                a.hm(c);
              });
          };
          ea =
            "function" == typeof Object.defineProperties
              ? Object.defineProperty
              : function (a, b, c) {
                  if (a == Array.prototype || a == Object.prototype) return a;
                  a[b] = c.value;
                  return a;
                };
          da = ba(this);
          x("Array.prototype.includes", function (a) {
            return a
              ? a
              : function (b, c) {
                  var d = this;
                  d instanceof String && (d = String(d));
                  var e = d.length;
                  c = c || 0;
                  for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                    var f = d[c];
                    if (f === b || Object.is(f, b)) return !0;
                  }
                  return !1;
                };
          });
          x("Object.values", function (a) {
            return a
              ? a
              : function (b) {
                  var c = [],
                    d;
                  for (d in b)
                    Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d]);
                  return c;
                };
          });
          x("Array.prototype.at", function (a) {
            return a ? a : ia;
          });
          x("Int8Array.prototype.at", ja);
          x("Uint8Array.prototype.at", ja);
          x("Uint8ClampedArray.prototype.at", ja);
          x("Int16Array.prototype.at", ja);
          x("Uint16Array.prototype.at", ja);
          x("Int32Array.prototype.at", ja);
          x("Uint32Array.prototype.at", ja);
          x("Float32Array.prototype.at", ja);
          x("Float64Array.prototype.at", ja);
          x("String.prototype.at", function (a) {
            return a ? a : ia;
          });
          x("Array.prototype.flat", function (a) {
            return a
              ? a
              : function (b) {
                  b = void 0 === b ? 1 : b;
                  var c = [];
                  Array.prototype.forEach.call(this, function (d) {
                    Array.isArray(d) && 0 < b
                      ? ((d = Array.prototype.flat.call(d, b - 1)),
                        c.push.apply(c, d))
                      : c.push(d);
                  });
                  return c;
                };
          });
          x("Array.prototype.values", function (a) {
            return a
              ? a
              : function () {
                  return ka(this, function (b, c) {
                    return c;
                  });
                };
          });
          x("Object.entries", function (a) {
            return a
              ? a
              : function (b) {
                  var c = [],
                    d;
                  for (d in b)
                    Object.prototype.hasOwnProperty.call(b, d) &&
                      c.push([d, b[d]]);
                  return c;
                };
          });
          if (window.OB_releaseVer && "2010683" !== window.OB_releaseVer)
            throw !0;
          window.OB_releaseVer = "2010683";
          var oa =
              "viewability click norecs issue rendered dataReturned exploreMoreRendered ready".split(
                " "
              ),
            gh = class {
              constructor() {
                window.OBREvents = window.OBREvents || [];
                this.up = window.OBREvents || [];
                la(this);
                this.B = {};
                oa.forEach(a => (this.B[a] = []));
              }
              A() {
                na();
                this.up.length && this.rc();
              }
              rc() {
                this.up.forEach(a => {
                  const b = a.callback,
                    c = a.widgetId,
                    d = a.feedCards;
                  pa(a.name)
                    .filter(e => qa(e, b, c))
                    .forEach(e => this.add(e, b, c, d));
                });
              }
              add(a, b, c, d) {
                this.B[a].push({
                  name: a,
                  callback: b,
                  widgetId: c,
                  feedCards: d,
                });
              }
              fire(a) {
                const b = this.B[a.name];
                b &&
                  b
                    .filter(c => sa(c, a))
                    .forEach(c => {
                      c.callback(a);
                    });
              }
            },
            ma = new gh();
          var ih, jh;
          OBR._jsc.Q = document;
          OBR._jsc.hh = OBR._jsc.Q.getElementById.bind(OBR._jsc.Q);
          ih = OBR._jsc.Q.getElementsByTagName.bind(OBR._jsc.Q);
          jh = OBR._jsc.Q.getElementsByClassName.bind(OBR._jsc.Q);
          OBR._jsc.kh = OBR._jsc.Q.querySelectorAll.bind(OBR._jsc.Q);
          OBR._jsc.lh = OBR._jsc.Q.querySelector.bind(OBR._jsc.Q);
          OBR._jsc.S = OBR._jsc.Q.createElement.bind(OBR._jsc.Q);
          OBR._jsc.mh = OBR._jsc.Q.createDocumentFragment.bind(OBR._jsc.Q);
          OBR._jsc.nh = OBR._jsc.Q.addEventListener.bind(OBR._jsc.Q);
          OBR._jsc.oh = OBR._jsc.Q.removeEventListener.bind(OBR._jsc.Q);
          window.OBR = window.OBR || {};
          OBR.F = OBR.F || [];
          OBR.rf = OBR.rf || {};
          window.OBR$ = function (a) {
            return (0, OBR._jsc.hh)(a);
          };
          ma.A();
          var ph, qh, rh, th, le, ke, uh, vh, xh, wh, ub, yh, pe, oe;
          ph = a => {
            if (a && "string" === typeof a)
              return a
                .split("#")[0]
                .replace(/\+/g, " ")
                .split("&")
                .reduce((b, c) => {
                  c = c.split("=");
                  c[0] &&
                    (b[c[0].toLowerCase()] = c[1]
                      ? decodeURIComponent(c[1])
                      : "");
                  return b;
                }, {});
          };
          qh = a => {
            a = (a.OB_amp ? a.context : a).location.href;
            return ph(
              a && 0 < a.length && 0 <= a.indexOf("?") ? a.split("?")[1] : ""
            );
          };
          rh = a => {
            const b = qh(a || window);
            return (c, d) => {
              try {
                if (c) {
                  const e = c.toLowerCase();
                  if (e in b) return b[e];
                }
              } catch (e) {}
              return d;
            };
          };
          OBR._jsc.tb = a => {
            const b = document.createElement("div");
            b.innerHTML = a;
            return b.firstChild;
          };
          OBR._jsc.sh = (a, b) => {
            [
              "href",
              "onmousedown",
              "ontouchstart",
              "target",
              "onClick",
            ].forEach(c => {
              const d = b.getAttribute(c);
              d && a.setAttribute(c, d);
            });
          };
          OBR._jsc.T = (a => {
            let b = "transform";
            "undefined" === typeof a.style[b] &&
              ["webkit", "Moz", "O", "ms"].every(function (c) {
                c += "Transform";
                return "undefined" !== typeof a.style[c] ? ((b = c), !1) : !0;
              });
            return b;
          })(window.document.createElement("div"));
          th = a => {
            const [b, c, d, e] = a.split(" ");
            return [b, c || b, d || b, e || c || b];
          };
          le = a => {
            let b = "";
            const c = OBR.g.Rf(OBR.i.jD);
            a = OBR.g.Rf(a.Ac());
            if (c || a) b = a || c;
            return b ? ["extid2", encodeURIComponent(b)] : [];
          };
          ke = () => {
            try {
              return window.context.pageViewId64;
            } catch (a) {
              return null;
            }
          };
          OBR._jsc.Ec = a =>
            a &&
            0 === Object.keys(a).length &&
            Object.getPrototypeOf(a) === Object.prototype;
          uh = class {
            start() {
              this.reset();
              this.startTime = Date.now();
              return this;
            }
            stop() {
              this.endTime = Date.now();
              this.time = this.endTime - this.startTime;
              return this;
            }
            reset() {
              this.endTime = this.startTime = this.time = 0;
              return this;
            }
            getTime() {
              return this.time;
            }
          };
          vh = () => {
            try {
              const { hostname: a } = new URL(document.referrer);
              return a === window.location.hostname;
            } catch (a) {
              return OBR.logger.error("same site check failed", a), !1;
            }
          };
          xh = (a, b, c, d, e) => {
            if (a && b && OBR.i.Dx) {
              var f = document.createElement("div");
              f.appendChild(b);
              wh(e, f, d);
              a.attachShadow(c);
              a.shadowRoot.appendChild(f);
            }
          };
          wh = (a, b, c) => {
            if (a) {
              var d = () => {
                b &&
                  c &&
                  (a.classList.contains(c)
                    ? b.classList.add(c)
                    : b.classList.remove(c));
              };
              new MutationObserver(() => d()).observe(a, {
                attributes: !0,
                subtree: !0,
                attributeFilter: ["class"],
              });
              d();
            }
          };
          ub = (a, b) =>
            OBR._jsc.z(function* () {
              return new Promise((c, d) => {
                let e = !1;
                setTimeout(() => {
                  e || ((e = !0), c());
                }, b);
                try {
                  a(e, c);
                } catch (f) {
                  (e = !0), d(f);
                }
              });
            });
          OBR._jsc.ne = a => "number" === typeof a && !isNaN(a) && isFinite(a);
          yh = a =>
            a &&
            ((a = parseInt(a.feedIdx || a.originWidgetIdx)),
            "number" === typeof a && !isNaN(a) && (a = OBR.F[a])) &&
            (a = a.v())
              ? OBR.Xa.Ls(a)
              : null;
          pe = a => {
            try {
              const b = window.OB_releaseVer,
                c = OBR.env,
                d = {},
                e = {};
              d.name = "obm-UrlCallLength";
              d.version = b;
              d.env = c || 1;
              e.callUrl = a;
              e.callUrlLength = a.length;
              d.extra = JSON.stringify(e);
              OBR.za.send(OBR.i.V.Mc, OBR.i.qy, d);
            } catch (b) {}
          };
          oe = a => {
            try {
              const b = new URL(a),
                c = b.searchParams,
                d = c.get("ogn");
              if (!d) return a;
              const e = new URL(decodeURIComponent(d));
              e.search = "";
              e.hash = "";
              c.set("ogn", e.href);
              return b.href;
            } catch (b) {
              return a;
            }
          };
          var zh, xa;
          OBR._jsc.C = {
            Zq: "OB-CLDT",
            Ge: "OB-CNSNT",
            pc: "OB-CNSNT-2",
            Wz: "OB-TPCS",
            rM: "OB-OD-LSD",
            bi: "OB-USER-TOKEN",
            Ql: "OB-USER-TOKEN-CREATION",
            sM: "_pdfps",
            Uq: "OB-AD-BLOCKER-STAT",
            Vq: "OB-AD-BLOCKER-WL-STAT",
            uM: "OB-PUB-IN",
            cr: "OB-FD-TO",
            br: "OB-FDE",
            Wh: "OB-CCPA",
            lM: "OB-INTERACTION-STASH",
            Gl: "ob-pub-overlay",
            hz: "OB-lastPageViewInfo",
            pM: "OB:LSU",
            Je: "OB-SKELETON-STRUCT",
            oM: "OB-EM-FREQUENCY",
            mr: "OB-RN-FREQUENCY",
            zl: "OB-SEID",
            fz: "_iiq_ab_group_237851792",
            bz: "_iiq_fdata_237851792",
            dz: "_iiq_fdata_432050809",
            ez: "_iiq_fdata_129618961",
          };
          zh = class {
            constructor() {
              this.cache = {};
              this.Ij = !1;
            }
            R() {
              if (this.ye) return this.ye;
              try {
                window.localStorage &&
                  window.localStorage.getItem &&
                  (this.ye = window.localStorage);
              } catch (a) {
              } finally {
                this.ye || (this.ye = Ca());
              }
              return this.ye;
            }
            get(a, b) {
              let c =
                !this.Ij && this.cache[a] ? this.cache[a] : this.R().getItem(a);
              if (this.xo)
                try {
                  window.localStorage.removeItem(a);
                } catch (d) {}
              return null !== c ? c : b;
            }
            set(a, b) {
              this.Ij ? this.R().setItem(a, b) : (this.cache[a] = b);
            }
            delete(a) {
              this.Ij || delete this.cache[a];
              this.R().removeItem(a);
            }
            Lf(a) {
              this.ic = a.ic();
              this.xo =
                OBR.i.wt ||
                1 === OBR._jsc.B("disableStorageAndCookies") ||
                (!this.ic && Na(a));
              this.Ij = !0;
              this.xo && (Da(this), Ea(this));
              Fa(this);
              OBR.localStorageAvailable = !this.xo;
            }
          };
          xa = new zh();
          var Ah = class {
              constructor() {
                try {
                  document.currentScript &&
                    document.currentScript.src &&
                    ((this.ax = new URL(document.currentScript.src)),
                    this.ax.href.includes("cookieSync.js") && this.A());
                } catch (a) {
                  "undefined" !== typeof OBR &&
                    OBR.error &&
                    OBR.error({
                      name: "obm-cookieSyncError",
                      message: "error while loading cookieSync process",
                    });
                }
              }
              A() {
                this.uL = this.ax.searchParams;
                var a = "",
                  b = F(this, "obcnsnt", "");
                "" !== F(this, "cnsnt", "") &&
                  "" !== b &&
                  (a = "&obcnsnt=" + b.toString());
                b = F(this, "gdpr", "0");
                const c = F(this, "gdprVer", "");
                a = {
                  my: "https://widgets.outbrain.com",
                  zw: F(this, "pubId", null),
                  Pm:
                    "true" == F(this, "dmpenabled", "true") &&
                    "false" == F(this, "oo", "false"),
                  kt: F(this, "filterDMP", ""),
                  Ys: F(this, "enu", ""),
                  Ds: a,
                  Ct: b,
                  Eu: "null" !== c && "1" === b,
                  Db: c,
                  vs: F(this, "ccpa", "1---"),
                  country: F(this, "country", ""),
                  Gw: `&obRecsAbtestAndVars=${F(this, "recAbTest", "")}`,
                  vu: F(this, "initiator", "ob"),
                };
                a.Pm && Pa(this, a);
              }
              no() {
                this.Cd =
                  "undefined" !== typeof OBR && OBR.i && OBR.i.Cd
                    ? OBR.i.Cd
                    : "ob_iframe";
                this.Dc = document.getElementById(this.Cd);
                if (!this.Dc) {
                  this.Dc = document.createElement("iframe");
                  this.Dc.id = this.Cd;
                  this.Dc.style.display = "none";
                  this.Dc.style.width = "1px";
                  this.Dc.style.height = "1px";
                  this.Dc.src = this.rF || "about:blank";
                  this.Yn = document.getElementById("ob_holder");
                  this.Yn || (this.Yn = document.body);
                  let a;
                  null == (a = this.Yn) || a.appendChild(this.Dc);
                }
              }
            },
            Bh = new Ah();
          OBR.g =
            OBR.g ||
            (function () {
              var a = {},
                b = {},
                c = document,
                d = OBR;
              b.bb = function () {
                a.Nc = d;
                return a;
              };
              b.A = function (e) {
                d = e;
              };
              b.Eg = function () {
                return function () {};
              };
              b.$G = function () {
                if (
                  "ontouchstart" in window ||
                  navigator.maxTouchPoints ||
                  (window.DocumentTouch && document instanceof DocumentTouch)
                )
                  var e = !0;
                else
                  (e = [
                    "(",
                    " -webkit- -moz- -o- -ms- "
                      .split(" ")
                      .join("touch-enabled),("),
                    "heartz)",
                  ].join("")),
                    (e = window.matchMedia && window.matchMedia(e).matches);
                return e;
              };
              b.An = function () {
                const e = OBR.ca.Ga;
                return e.width > e.height ? "landscape" : "portrait";
              };
              b.ku = function () {
                var e = window.jQuery;
                return void 0 !== e
                  ? !(
                      /1\.(0|1|2|3|4)\.(0|1)/.test(e.fn.jquery) ||
                      /^1\.1/.test(e.fn.jquery) ||
                      /^1\.2/.test(e.fn.jquery) ||
                      /^1\.3/.test(e.fn.jquery)
                    )
                  : !1;
              };
              b.v = function (e) {
                return null === e || isNaN(e)
                  ? null
                  : d.Lb("outbrain_widget_" + e);
              };
              b.H = function (e) {
                return e.shadowRoot || e;
              };
              b.Wi = function () {
                return d.Lb("ob_holder");
              };
              b.KC = function (e) {
                var f = b.Wi();
                null === f &&
                  ((f = d.g.createElement("div", "ob_holder")),
                  (f.style.display = "none"),
                  e ? d.g.insertBefore(f, e) : OBR._jsc.Q.body.appendChild(f));
              };
              b.no = function (e) {
                var f = d.Lb(e);
                f ||
                  ((f = d.g.createElement("iframe", e)),
                  (e = f.style),
                  (e.display = "none"),
                  (e.width = "1px"),
                  (e.height = "1px"),
                  (f.src = "about:blank"),
                  (e = b.Wi()) || (e = b.Ht()),
                  d.g.ff(f, e));
              };
              b.Ht = function () {
                if (c.body) return c.body;
                var e = d.g.Eb("", "", "body", !0);
                return 0 >= e.length ? c.lastChild : e[0];
              };
              b.createElement = function (e, f, g, k) {
                var l;
                e = c.createElement(e);
                "string" === typeof f && e.setAttribute("id", f);
                "string" === typeof g && (e.style.cssText = g);
                for (l in k) k.hasOwnProperty(l) && e.setAttribute(l, k[l]);
                return e;
              };
              b.ia = function (e) {
                var f = c.createElement("style"),
                  g = c.body
                    ? "string" === typeof c.body.style.WebkitAppearance
                    : !1;
                f.type = "text/css";
                c.getElementsByTagName("head")[0].appendChild(f);
                f[g ? "innerText" : "innerHTML"] = e;
              };
              b.wu = function (e, f) {
                const g = OBR._jsc.S("style");
                g.textContent = e;
                f.insertBefore(g, f.firstChild);
              };
              b.GF = function (e) {
                var f = OBR.i.Lk,
                  g = e && e.v();
                g &&
                  OBR.g.H(g) &&
                  ((e = OBR._jsc.S("style")),
                  (g = OBR.g.H(g).querySelector(".ob-widget")),
                  b.la(e, "ob-static-css"),
                  (e.textContent = f),
                  g && g.insertBefore(e, g.firstChild));
              };
              b.Ta = function (e, f, g, k, l, q) {
                e = c.createElement("script");
                e.type = d.i.jH;
                e.src = f;
                e.charset = "UTF-8";
                e.async = !!g;
                e.defer = !1;
                if (q)
                  for (const h in q)
                    q.hasOwnProperty(h) && e.setAttribute(h, q[h]);
                k &&
                  d.g.Bb(e, "load", function (h) {
                    var m = h.target;
                    m &&
                      setTimeout(function () {
                        m.parentNode.removeChild(m);
                      }, 3e3);
                  });
                typeof l === d.i.$e && d.g.Bb(e, "load", l);
                return e;
              };
              b.RM = function (e, f) {
                e = d.g.createElement("link", e);
                e.setAttribute("rel", "stylesheet");
                e.setAttribute("type", d.i.RC);
                f && e.setAttribute("href", f);
                return e;
              };
              b.IB = function (e) {
                var f = d.Lb("ob_iframe");
                f && (f.src = e);
              };
              b.zB = function (e) {
                var f = OBR.Lb(d.i.Cd);
                d.g.jf(f) &&
                  d.g.jf(f.parentNode) &&
                  f.parentNode.removeChild(f);
                d.g.no(d.i.Cd);
                d.g.IB(e);
              };
              b.rand = function (e) {
                e = isNaN(e) ? 1e5 : e;
                return Math.floor(Math.random() * e);
              };
              b.Pb = function (e) {
                var f = c.getElementsByTagName("head");
                try {
                  if (f && 0 < f.length) f[0].appendChild(e);
                  else {
                    var g = c.getElementsByTagName("script");
                    g[0].insertBefore(e, g[0].firstChild);
                  }
                } catch (k) {
                  d.logger.log("Err insertToHead:" + k);
                }
              };
              b.oa = function (e) {
                return encodeURIComponent(e);
              };
              b.jf = function (e) {
                return null !== e;
              };
              b.Oa = function (e) {
                const f = OBR._jsc.S("div");
                f.innerHTML = e;
                return f.firstChild;
              };
              b.jF = e => {
                var f = window;
                try {
                  return e.split(".").every(g => {
                    if ("object" !== typeof f || null === f || !(g in f))
                      return !1;
                    f = f[g];
                    return !0;
                  });
                } catch (g) {
                  return !1;
                }
              };
              b.PG = function (e) {
                var f = !1;
                if (b.lf(e)) return !1;
                var g = e.Tg().recMode || "";
                e = e.Tg().dynamicWidgetLayout || "";
                g = d.i.CJ[g] || "";
                "2" === g && "1" === (d.i.DJ[e] || "") && (f = !0);
                f || ("1" !== g && "3" !== g) || (f = !0);
                return f;
              };
              b.lf = function (e) {
                return void 0 === e || null === e;
              };
              b.dH = function (e) {
                return b.lf(e) || "" === e;
              };
              b.getElementsByClassName = function (e, f) {
                f || (f = document);
                return f.getElementsByClassName
                  ? f.getElementsByClassName(e)
                  : b.Eb("class", e, "*", !0, !0, f);
              };
              b.Eb = function (e, f, g, k, l, q) {
                var h;
                var m = [];
                g = g || "*";
                k = !!k;
                l = !!b.dH(l);
                g = q ? q.getElementsByTagName(g) : c.getElementsByTagName(g);
                q = 0;
                for (h = g.length; q < h; q += 1) {
                  var p = "class" === e ? g[q].className : g[q].getAttribute(e);
                  null !== p &&
                    (!1 === l && ((p = p.toLowerCase()), (f = f.toLowerCase())),
                    (p = "" === e ? !0 : k ? -1 < p.indexOf(f) : p === f) &&
                      m.push(g[q]));
                }
                return m;
              };
              b.Ef = function (e, f) {
                var g = window;
                g.removeEventListener
                  ? g.removeEventListener(e, f, !0)
                  : g.detachEvent && g.detachEvent("on" + e, f);
              };
              b.Bb = function (e, f, g) {
                e.addEventListener
                  ? e.addEventListener(f, g, !0)
                  : e.attachEvent &&
                    typeof e.attachEvent === d.i.$e &&
                    e.attachEvent("on" + f, function () {
                      g.call(e);
                    });
              };
              b.ff = function (e, f) {
                try {
                  f.appendChild(e);
                } catch (g) {
                  d.logger.log("Fail insert into Dom:" + g);
                }
              };
              b.$p = function (e) {
                e = d.Lb(e);
                !b.lf(e) && b.jf(e.parentNode) && e.parentNode.removeChild(e);
              };
              b.zh = function (e) {
                e && OBR.g.jf(e.parentNode) && e.parentNode.removeChild(e);
              };
              b.insertBefore = function (e, f) {
                return f && f.parentNode
                  ? f.parentNode.insertBefore(e, f)
                  : null;
              };
              b.Lc = function (e, f) {
                var g = /^htt(p|ps)?:\/\/127\.0\.0\.1(:\d\d\d\d)?(\/|$)/i,
                  k = /^https?:\/\/simulator\.[\w]*\.service\.[\w]*\.consul/i;
                return /^htt(p|ps)?:\/\/([\w\-]*|[\w\-]*\.[\w\-]*)\.outbrain\.com(:\d\d\d\d)?(\/|$)/i.test(
                  e
                ) ||
                  g.test(e) ||
                  k.test(e)
                  ? e
                  : f;
              };
              b.cL = function (e) {
                e = e.replace(/^(\s*)/g, "");
                var f = c.createElement("div");
                f.innerHTML = e;
                return f.childNodes;
              };
              b.af = function (e, f) {
                return e ? e.getAttribute(f) : null;
              };
              b.Sb = function (e, f, g) {
                e && e.setAttribute(f, g);
              };
              b.hJ = function (e) {
                e && e.removeAttribute("noscroll");
              };
              b.la = function (e, f) {
                var g = new RegExp("[ '\"|]" + f + "[ '\"|]");
                e &&
                  !g.test("|" + e.className + "|") &&
                  (e.className += " " + f);
              };
              b.Fa = function (e, f) {
                e &&
                  typeof f === d.i.Rx &&
                  (e.classList
                    ? e.classList.remove(f)
                    : (e.className = e.className.replace(
                        new RegExp("(^|\\b)" + f + "(\\b|$)", "gi"),
                        " "
                      )));
              };
              b.iL = function (e) {
                if (e && "string" === d.i.Rx)
                  if (e.classList) e.classList.toggle("on");
                  else {
                    var f = e.className.split(" "),
                      g = f.indexOf("on");
                    0 <= g ? f.splice(g, 1) : f.push("on");
                    e.className = f.join(" ");
                  }
              };
              b.L = rh();
              b.zC = () => {
                b.L = rh(null);
              };
              b.GE = () => {
                const e = b.L("skipFilters", null);
                return ["true", "run_only_dedup"].includes(e) ? e : null;
              };
              b.Oa = OBR._jsc.tb;
              b.Wt = function () {
                var e =
                  OBR.settings && OBR.settings.publisherSubscriptionSelector;
                const f = OBR.settings && OBR.settings.publisherLoginIndication;
                return e
                  ? (e = OBR._jsc.lh(e))
                    ? (e = e.innerText) && e.toLowerCase() === f.toLowerCase()
                      ? "0"
                      : "1"
                    : "1"
                  : null;
              };
              b.wC = function (e) {
                "string" === typeof e &&
                  0 < e.indexOf("#") &&
                  (e = e.substr(0, e.lastIndexOf("#")));
                return e;
              };
              b.ys = function (e) {
                var f = d.i.ib + "/strip_default.png";
                e.src !== f &&
                  ((e.alt = ""),
                  (e.title = ""),
                  (e.src = f),
                  e.parentElement &&
                    (e.parentElement.style.overflow = "hidden"));
              };
              b.kD = function () {
                var e = null,
                  f;
                if ("string" === typeof window.OB_MP_feed)
                  e = window.OB_MP_feed;
                else if ((f = c.getElementsByTagName("head")) && 0 < f.length) {
                  var g = f[0].getElementsByTagName("link");
                  for (f = 0; f < g.length; f += 1) {
                    var k = g[f];
                    if (
                      null !== k.type &&
                      ("application/rss+xml" === k.type ||
                        "application/atom+xml" === k.type) &&
                      null !== k.href &&
                      "" !== k.href
                    ) {
                      e = k.href;
                      break;
                    }
                  }
                }
                return e;
              };
              b.ec = function (e, f) {
                var g = "";
                if (!e || !f) return g;
                window.getComputedStyle
                  ? (e = OBR._jsc.Q.defaultView.getComputedStyle(e, null)) &&
                    (g = e.getPropertyValue(f))
                  : e.currentStyle &&
                    ((f = f.replace(/\-(\w)/g, function (k, l) {
                      return l.toUpperCase();
                    })),
                    (g = e.currentStyle[f]));
                return g;
              };
              b.vN = function (e) {
                if (!e) return null;
                if (window.getComputedStyle)
                  var f = OBR._jsc.Q.defaultView.getComputedStyle(e, null);
                else if (e.currentStyle) var g = e.currentStyle;
                return function (k) {
                  let l = null;
                  f
                    ? (l = f.getPropertyValue(k))
                    : g &&
                      ((k = k.replace(/\-(\w)/g, function (q, h) {
                        return h.toUpperCase();
                      })),
                      (l = e.currentStyle[k]));
                  return l;
                };
              };
              b.SJ = function () {
                var e = b.Wi();
                if (b.jf(e)) {
                  var f = d.g.createElement("span", "ob_a");
                  b.insertBefore(f, e);
                  f.innerHTML = ".";
                  var g = b.ec(f, "color");
                  b.$p("ob_a");
                  f = d.g.createElement("a", "ob_a");
                  f.setAttribute("href", "void(0)");
                  f.innerHTML = ".";
                  b.insertBefore(f, e);
                  e = b.ec(f, "color");
                  b.$p("ob_a");
                  g = "rgb(0, 0, 0)" === g || "#000000" === g ? "#555" : g;
                  b.ia(
                    ".ob-tcolor{color:" +
                      g +
                      "} .ob-lcolor{color:" +
                      e +
                      "} .ob-bgtcolor{background-color:" +
                      g +
                      "} .item-link-container:hover .ob-tcolor{border-color:" +
                      g +
                      "} "
                  );
                }
              };
              b.Hn = function () {
                var e = b.Vi("property", "og:url", "meta", "content");
                null === e && (e = b.Vi("rel", "canonical", "link", "href"));
                null === e && (e = window.location.href);
                return e;
              };
              b.Vi = function (e, f, g, k) {
                var l = null;
                e = b.Eb(e, f, g, !1);
                null !== e && 0 < e.length && (l = e[0].getAttribute(k));
                return l;
              };
              b.gw = function (e) {
                let f = e.l("isDMPEnabled", !0) && !e.o("oo", !1);
                var g = e.l("tracking", !1);
                const k = e.l("filterDMP", ""),
                  l = e.o("pid", ""),
                  q = e.o("country", ""),
                  h = e.fj();
                let m = "";
                const p = e.Vc(""),
                  r = e.o("cnsnt", ""),
                  t = e.o("gdpr", "0") + "",
                  u = null != d.ga.Db && "1" === t,
                  v = d.ga.Zb || "1---",
                  w = OBR.Ke.WD();
                "" !== r && "" !== p && (m = "&obcnsnt=" + p.toString());
                !1 !== g ||
                  !0 !== f ||
                  !0 !== w ||
                  !1 !== d.i.dw ||
                  h ||
                  ((f = f && w),
                  (g = e.o("obRecsAbtestAndVars", "")
                    ? `&obRecsAbtestAndVars=${e.o("obRecsAbtestAndVars", "")}`
                    : ""),
                  (e = e.o("enu", "")),
                  Pa(Bh, {
                    my: d.i.ib,
                    zw: l,
                    Pm: f,
                    kt: k,
                    Ys: e,
                    Ds: m,
                    Ct: t,
                    Eu: u,
                    Db: OBR.ga.Db,
                    vs: v,
                    country: q,
                    Gw: g,
                    vu: "ob",
                  }),
                  d.Lb(d.i.Cd) && (d.i.dw = !0));
              };
              a.VE = function (e) {
                var f = e.querySelector(".ob-grid-header-text,.ob-widget-text");
                if (!f) return 3;
                var g = e.querySelector(".ob_what");
                const k = e.querySelector(".ob-widget-header");
                f.style.flex = "none";
                e = f.offsetWidth;
                f.style.flex = "auto";
                f = g.offsetWidth;
                g = k.offsetWidth;
                return g - e >= f ? 3 : g - e >= f - 86 ? 2 : 1;
              };
              b.LL = function (e) {
                if (e && e.querySelector(".ob_auto_logo"))
                  switch (a.VE(e)) {
                    case 1:
                      e.querySelector(
                        ".ob_what .ob_auto_logo_container"
                      ).classList.add("ob_only_amelia");
                    case 2:
                      e.querySelector(
                        ".ob_what .ob_what_is_text"
                      ).style.display = "none";
                  }
              };
              b.XE = function () {
                var e = b.bj(8);
                "string" === typeof window.name &&
                ("" === window.name || -1 < window.name.indexOf("frame"))
                  ? ((window.name = e), (e = window.name))
                  : "string" === typeof window.name &&
                    "" !== window.name &&
                    (e = window.name);
                return (e = d.g.oa(e.substring(0, 9)));
              };
              b.bj = function (e) {
                var f;
                var g = [];
                e = "number" === typeof e ? e : 8;
                for (f = 0; f < e; f += 1)
                  g.push(
                    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".charAt(
                      Math.floor(61 * Math.random())
                    )
                  );
                return g.join("");
              };
              b.yi = function (e) {
                for (var f = "", g = 0; g < e.length; g++)
                  f = f.concat(e[g] ? "1" : "0");
                return parseInt(f, 2);
              };
              b.Rf = function (e) {
                return e && 110 >= e.length ? e : "";
              };
              b.Yk = function (e) {
                return e
                  ? 8 > e.length
                    ? (d.logger.log("pubImpID min length 8"), "")
                    : 64 < e.length
                    ? (d.logger.log("pubImpID max length 64"), e.substr(0, 64))
                    : e
                  : "";
              };
              b.pE = function (e) {
                for (var f in d.rf)
                  if (d.rf.hasOwnProperty(f) && d.rf[f].G() === e)
                    return d.rf[f];
                return null;
              };
              b.hG = function (e, f) {
                for (f = f.parentNode; null !== f; ) {
                  if (f === e) return !0;
                  f = f.parentNode;
                }
                return !1;
              };
              b.Ye = function (e, f) {
                return "function" !== typeof e
                  ? null
                  : void 0 === f
                  ? e()
                  : e(f);
              };
              b.XC = function (e, f) {
                return e * f;
              };
              b.YD = function () {
                var e = document.location.href;
                if (!e || "" === e) return [];
                e = e
                  .replace("", "")
                  .replace("http://", "")
                  .replace("https://", "")
                  .replace("www.", "")
                  .replace("www2.", "")
                  .split("/");
                e.pop();
                return 0 < e.length ? e : [];
              };
              b.EE = function () {
                return "http" + ("https:" === c.location.protocol ? "s" : "");
              };
              b.Au = function (e, f) {
                f.parentNode.insertBefore(e, f.nextSibling);
              };
              b.BE = function () {
                var e = OBR._jsc.hh("widgetVersionSync");
                if (null === e) {
                  e = b.createElement("iframe", "widgetVersionSync");
                  var f = b.createElement(
                    "div",
                    null,
                    "display:none; height:0px; width:0px; border:none;"
                  );
                  f.appendChild(e);
                  b.Ht().appendChild(f);
                }
                return e;
              };
              b.WL = function (e) {
                var f = window.OB_releaseVer;
                isNaN(f) ||
                  isNaN(e) ||
                  f >= e ||
                  ((e =
                    b.EE() +
                    "://widgets.outbrain.com/external/sync/outbrainjs.html?needToBeVer=" +
                    e.toString()),
                  (b.BE().src = e));
              };
              b.lB = function (e) {
                e = e.l("widgetVersionSync", 0);
                isNaN(e) || "" === e || ((e = parseInt(e, 10) || 0), b.WL(e));
              };
              b.xa = function (e, f) {
                xa.set(e, f);
              };
              b.IE = function () {
                var e = Math.round(16777215 * Math.random());
                return (
                  "rgb(" +
                  (e >> 16) +
                  ", " +
                  ((e >> 8) & 255) +
                  ", " +
                  (e & 255) +
                  ")"
                );
              };
              b.R = function (e, f) {
                return xa.get(e, f);
              };
              b.wj = function () {
                return (
                  window.matchMedia &&
                  window.matchMedia("(prefers-color-scheme: dark)").matches
                );
              };
              b.ae = function (e) {
                xa.delete(e);
              };
              b.CL = function (e) {
                var f = {};
                f.cpv = e[0];
                f.convPerc = e[1];
                f.convPixel = e[2];
                f.vidId = e[3];
                f.player = e[4];
                f.pos = e[5];
                f.adId = e[6];
                f.docEncId = e[7];
                f.origUrl = e[8];
                f.trafficUrl = e[9];
                f.duration = e[10];
                f.widgetIdx = e[11];
                f.title = e[12];
                f.sourceName = e[13];
                f.reqId = e[14];
                f.platform = e[15];
                f.lang = e[16];
                f.uuid = e[17];
                f.publisherId = e[18];
                f.sourceId = e[19];
                f.widgetNumberId = e[20];
                f.campaignId = e[21];
                f.location = e[22];
                f.timestamp = e[23];
                return f;
              };
              b.assign = function (e, f) {
                for (var g in f) f.hasOwnProperty(g) && (e[g] = f[g]);
                return e;
              };
              b.yD = function (e, f) {
                if ("_blank" === (f.getAttribute("target") || "_self"))
                  for (var g in e) {
                    d.g.fd(
                      "obm-firePixelBeforeRedirect",
                      "pixel fired before redirect",
                      !1,
                      10
                    );
                    f = OBR._jsc.S("img");
                    var k = e[g];
                    k = d.g.TA(k);
                    f.setAttribute("src", k);
                    f.setAttribute("height", "1");
                    f.setAttribute("width", "1");
                    OBR._jsc.Q.body.appendChild(f);
                  }
                else
                  d.g.fd(
                    "obm-firePixelBeforeRedirectCancelled",
                    "pixel cancelled redirect on same page ",
                    !1,
                    10
                  );
              };
              b.TA = function (e) {
                if (e && e.length)
                  return (e =
                    -1 < e.indexOf("?")
                      ? e + ("&t=" + Date.now())
                      : e + ("?t=" + Date.now()));
              };
              b.zD = function (e) {
                e &&
                  document &&
                  OBR._jsc.Q.body &&
                  e.forEach(f => {
                    let g = OBR.g.createElement(
                      "img",
                      null,
                      "display:none;width:1px;height:1px"
                    );
                    g.src = f;
                    OBR._jsc.Q.body.appendChild(g);
                  });
              };
              b.fd = function (e, f, g, k) {
                (isNaN(k) || 0 === d.g.rand(k)) &&
                  OBR.error({ name: e, message: f, rN: !0 === g });
              };
              b.kk = e =>
                e &&
                e.split("&").reduce((f, g) => {
                  g = g.split("=");
                  f[g[0]] = g[1];
                  return f;
                }, {});
              b.Jh = e =>
                Object.keys(e)
                  .reduce((f, g) => {
                    f.push(`${g}=${encodeURIComponent(e[g])}`);
                    return f;
                  }, [])
                  .join("&");
              b.jk = e => {
                if (
                  e &&
                  "string" === typeof e &&
                  (e = e.split("-")) &&
                  2 === e.length
                )
                  return { Qk: e[1], Zk: e[0] };
              };
              b.attachShadow = xh;
              b.uy = e => {
                const f = e.v();
                if (f && OBR.i.Dx) {
                  var g = f.children[0],
                    k = e.Ui();
                  e = e.Mg();
                  b.attachShadow(f, g, { mode: "open" }, k, e);
                }
              };
              b.Zt = e => Math.floor(Math.random() * (Math.floor(e) + 1));
              b.Yt = (e, f) => Math.floor(Math.random() * f) + e;
              b.A(OBR);
              return b;
            })();
          OBR.Of = function (a, b, c, d, e, f, g, k, l) {
            var q = this;
            var h = 0;
            l = "function" === typeof l ? l : OBR.g.XC;
            q.start = function () {
              h += 1;
              if (OBR.g.Ye(a, h)) OBR.g.Ye(b, h);
              else if (OBR.g.Ye(k, h)) OBR.g.Ye(d, h);
              else if (h === f && 1e3 !== f) OBR.g.Ye(d, h);
              else {
                OBR.g.Ye(c, h);
                var m = g ? l(h, e) : e;
                setTimeout(function () {
                  q.start();
                }, m);
              }
            };
            q.start();
          };
          OBR.Ci = OBR.Ci || {
            Lu: function () {
              return "complete" === OBR._jsc.Q.readyState;
            },
            $u: function () {
              return "interactive" === OBR._jsc.Q.readyState || this.Lu();
            },
          };
          OBR.Hi = function () {
            var a = {},
              b = [];
            a.add = function (c) {
              b.push(c);
            };
            a.remove = function (c) {
              b.splice(c, 1);
            };
            a.top = function () {
              return 0 < b.length ? b.shift() : null;
            };
            a.Fd = function () {
              return 0 >= b.length;
            };
            a.Yi = function () {
              return b;
            };
            a.xs = function () {
              b = [];
            };
            return a;
          };
          OBR.Promise = function () {
            function a(d, e) {
              b.then =
                "resolve" === d
                  ? function (k) {
                      k && k(e);
                    }
                  : function (k, l) {
                      l && l(e);
                    };
              b.resolve = b.reject = function () {
                throw Error("Promise already completed.");
              };
              for (var f, g = 0; (f = c[g++]); ) f[d] && f[d](e);
              c = void 0;
            }
            var b = {},
              c = [];
            b.then = function (d, e) {
              c.push({ resolve: d, reject: e });
            };
            b.resolve = function (d) {
              a("resolve", d);
            };
            b.reject = function (d) {
              a("reject", d);
            };
            return b;
          };
          OBR.Br = function () {
            var a = {},
              b = "00.000",
              c = null,
              d = null,
              e = 0;
            a.start = function () {
              null === c && (c = new Date());
              null !== d && (e += new Date() - d);
            };
            a.stop = function () {
              var f = new Date(new Date() - c - e),
                g = f.getUTCSeconds();
              f = f.getUTCMilliseconds();
              d = new Date();
              return (b =
                (9 < g ? g : "0" + g) +
                "." +
                (99 < f ? f : 9 < f ? "0" + f : "00" + f));
            };
            return a;
          };
          OBR.We =
            OBR.We ||
            function (a, b, c) {
              var d;
              return function () {
                var e = this,
                  f = arguments,
                  g = c && !d;
                clearTimeout(d);
                d = setTimeout(function () {
                  d = null;
                  c || a.apply(e, f);
                }, b);
                g && a.apply(e, f);
              };
            };
          OBR.Cq =
            OBR.Cq ||
            ((a, b) => {
              let c;
              return function () {
                const d = arguments;
                c ||
                  (a.apply(this, d), (c = !0), setTimeout(() => (c = !1), b));
              };
            });
          OBR.i =
            OBR.i ||
            (function () {
              var a = {},
                b = {},
                c = OBR,
                d = window;
              b.zz = "opera";
              b.er = "firefox";
              b.ll = "chrome";
              b.wr = "safari";
              b.nz = "mozilla";
              b.Py = "edge";
              b.ls = "boolean";
              b.Rx = "string";
              b.BN = "object";
              b.pL = "undefined";
              b.zN = "number";
              b.$e = "function";
              b.Cd = "ob_iframe";
              b.Tu = !0;
              b.LN = 0;
              b.el = "outbrain_widget_";
              b.jH = "text/javascript";
              b.RC = "text/css";
              b.gl = d;
              b.doc = document;
              b.pD = c.g.L("obFakeRefParam", !1);
              b.vt = "true" === OBR.g.L("forceDemand", !1);
              b.gd = window.OBBridge;
              b.cb = "undefined" !== typeof b.gd;
              b.Ow =
                b.Ow ||
                (d.OB_ampReferrer
                  ? d.OB_ampReferrer
                  : b.cb
                  ? "https://app-sdk.outbrain.com/"
                  : b.pD || document.referrer);
              b.Yp = c.g.oa(b.Ow);
              b.Mv = document.location.href;
              b.uN = c.g.oa(b.Mv);
              b.ng = !1;
              b.Eq = "";
              b.Qp = "";
              b.mb = navigator.userAgent.toLowerCase();
              b.os = navigator.platform.toLowerCase();
              b.startTime = Date.now();
              var e = b.mb;
              b.Yb = /edge/.test(e)
                ? b.Py
                : /opera/.test(e)
                ? b.zz
                : /firefox/.test(e)
                ? b.er
                : /chrome/.test(e)
                ? b.ll
                : /safari/.test(e)
                ? b.wr
                : b.nz;
              b.jh =
                (/iphone|ipad|ipod/.test(e) &&
                  !d.navigator.standalone &&
                  b.Yb !== b.wr) ||
                /fbav|fban|gsa|twitter/.test(e);
              b.Pl = /fbav|fban/.test(e)
                ? "facebook"
                : /gsa/.test(e)
                ? "google"
                : /twitter/.test(e)
                ? "twitter"
                : "";
              b.M =
                !!/(mobi|iphone|ipod|symbian|android|windows ce|blackberry|palm|ipad)/i.test(
                  e
                );
              b.hf =
                (!window.nM && !!b.mb.match(/ipad|iphone|ipod/)) ||
                !!(b.mb.match(/mac/) && "ontouchend" in document);
              b.Ne = "undefined" !== typeof window.OB_amp;
              b.pk = "";
              b.uI = window.OB_platformType || null;
              a.jE = () => {
                if ("safari" === b.Yb && b.M) {
                  var k = b.mb.match(
                    /(iphone|ipad|ipod).*? os (\d+[._]?\d+[._]?\d*)/
                  );
                  if (k && Array.isArray(k) && !(3 > k.length)) {
                    var l, q;
                    if (
                      (k =
                        null == (l = k[2])
                          ? void 0
                          : null == (q = l.split("_"))
                          ? void 0
                          : q.at(0))
                    )
                      return Number(k);
                  }
                }
              };
              b.Cu = a.jE();
              b.Wj = (() => {
                if (b.Ne && b.hf) return !1;
                try {
                  return "loading" in HTMLImageElement.prototype || !1;
                } catch (k) {
                  return (
                    OBR.error({
                      name: "obm-NativeLazyLoadSupportFailed",
                      message: `error ${k.name} while trying to verify browser support for Native Lazy Loading`,
                    }),
                    !1
                  );
                }
              })();
              b.uv = "number" === typeof b.uI;
              b.SN = null;
              b.VM = null;
              b.xE = function () {
                switch (b.env) {
                  case "prod":
                    return c.g.Lc(
                      c.g.L("wiodb", b.na + "odb." + f),
                      b.na + "odb." + f
                    );
                  case "sim":
                    return c.g.Lc(b.na + "odb-sim.outbrain.com", "");
                  default:
                    return c.g.Lc(
                      c.g.L("wiodb", b.na + "odb." + f),
                      b.na + "odb." + f
                    );
                }
              };
              b.sE = function () {
                switch (b.env) {
                  case "prod":
                    return c.g.Lc(
                      c.g.L("wiodb", b.na + "mv." + f),
                      b.na + "mv." + f
                    );
                  case "sim":
                    return c.g.Lc(b.na + "mv-sim.outbrain.com", "");
                  default:
                    return c.g.Lc(
                      c.g.L("wiodb", b.na + "mv." + f),
                      b.na + "mv." + f
                    );
                }
              };
              b.Xt = function (k) {
                if ((k = c.g.L(k, null)))
                  try {
                    return k
                      .split(",")
                      .map(l => l.split(":"))
                      .reduce((l, [q, h]) => {
                        l[q] = h;
                        return l;
                      }, {});
                  } catch (l) {}
                return null;
              };
              b.dv =
                "performance" in window && "getEntries" in window.performance;
              b.LE = () => {
                if (!(b.dv && "getEntriesByType" in window.performance))
                  return "";
                const k = performance.getEntriesByType("navigation");
                return Number("reload" === (k && k[0] && k[0].type));
              };
              b.Rt = (k, l) =>
                `${
                  "true" === OBR.g.L(l, !1)
                    ? `${`http://127.0.0.1:${k}`}/dist`
                    : `${b.ib}/gnr`
                }` + "/__path__/__moduleName__.js";
              b.yE = () => {
                try {
                  const k = (window.OB_amp ? window.context : window).location
                    .href;
                  if (b.cb) {
                    const l = new URL(k),
                      q = l.searchParams.get("permalink"),
                      h = Array.from(l.searchParams)
                        .map(([m, p]) => `${m}=${p}`)
                        .join("&")
                        .replace(`permalink=${q}&`, "");
                    return encodeURIComponent(`${q}?${h}`);
                  }
                  return encodeURIComponent(k);
                } catch (k) {}
              };
              b.bE = () => {
                try {
                  const k = c.g.L("fakeRec", "RTB-CriteoUS"),
                    l = c.g.L("fakeRecSize", 4);
                  return `&fakeRec=${k}&testMode=true&fakeRecSize=${l}`;
                } catch (k) {}
              };
              b.wE = () => {
                const k = c.g.L("dicbo", null);
                return k && null !== k[1]
                  ? encodeURIComponent(k).split("-")[1]
                  : null;
              };
              b.Tj = 8215;
              b.ver =
                "string" === typeof d.OB_releaseVer ? d.OB_releaseVer : "0";
              b.yN = !0 === d.OB_disable_odbl;
              b.$m = d.OB_extId ? d.OB_extId : null;
              b.jD = d.OB_extIdSecondary ? d.OB_extIdSecondary : null;
              b.ld = d.OB_pubImpId ? d.OB_pubImpId : null;
              b.Jt = () =>
                d.OB_ContextKeyValue ? d.OB_ContextKeyValue : b.JB();
              b.Vj = "nanoWidget/";
              b.vx = function () {
                b.na =
                  "true" === c.g.L("isForceHttp", "false")
                    ? "http://"
                    : "https://";
                b.env = c.g.L("env", "prod");
                b.WH = b.xE();
                b.Wv = b.sE();
                b.NM = b.na + "storage.outbrain.com/";
                b.ib = c.g.Lc(
                  c.g.L("wihost", b.na + "widgets." + f),
                  b.na + "widgets." + f
                );
                b.fl = c.g.Lc(
                  c.g.L("wihost", b.na + "widgetmonitor." + f),
                  b.na + "widgetmonitor." + f
                );
                b.qy = `${b.fl}/WidgetErrorMonitor/api/report`;
                b.hI = c.g.Lc(c.g.L("wiout", b.na + f), b.na + f);
                b.Cp = b.na + "log." + g + "/";
                b.Bp = b.na + "eventlog." + f + "/";
                b.X =
                  b.ib + "/" + b.Vj + b.ver + (b.uv ? "/moduleLT" : "/module");
                b.qp = b.ib + "/" + b.Vj + "3rd";
                b.Yv = b.Rt(9005, "wignr");
                b.Xv = b.Rt(9006, "wifgnr");
                b.IH = b.ib + "/" + b.Vj + "externals";
                b.TL = b.ib + "/external";
                b.LH = b.ib + "/nativeVideoPlayer";
                b.xN = b.ib + "/widgetMegaBlocks";
              };
              var f = "outbrain.com";
              var g = "outbrainimg.com";
              b.iI = g;
              b.vx();
              b.DB = "/blogutils/ExcludeRec.action?bocr=";
              b.CN = "html";
              b.oI = b.uv ? "NANOWDGTLT13" : "NANOWDGT01";
              b.cG = "object" === typeof d.console;
              b.gj = null;
              b.Pn = null;
              b.Mx = c.g.wC(c.g.kD());
              b.Jk = null === b.Mx ? "" : c.g.oa(b.Mx);
              b.dw = !1;
              b.Rk = !(!d.OB_testMode && !OBR.g.L("obTestMode", !1));
              b.Iu = "true" === c.g.L("widebug", "false");
              b.Yj = b.wE();
              b.gk = b.yE();
              b.MN = ua();
              b.KD = "1" === c.g.L("obForceExploreMore", !1);
              b.TC = "true" === c.g.L("darkMode", "false");
              b.Ob = b.Xt("forceWidgets");
              b.Qi = b.Xt("forceVid");
              b.HD = "true" === c.g.L("forceFeed", "false");
              b.cn = c.g.L("wixp", null);
              b.RH = "true" === c.g.L("obdraft", !1) ? "&obDraft=true" : "";
              b.rn = OBR.g.L("forceOcAd", "");
              b.Uc = OBR.g.L("forceCards", "");
              b.xt = "1" === OBR.g.L("forceCopmlianceMeasure", "");
              b.wt = "1" === OBR.g.L("forceGlobalLsl", "");
              b.Ur =
                !1 !== c.g.L("obAbtest", !1)
                  ? "&obAbtest=" + c.g.L("obAbtest", "")
                  : "";
              b.Is =
                "true" === c.g.L("obCrDraft", "false") ? "&crDraft=true" : "";
              b.wp =
                "0" !== c.g.L("obFakeRTB", "0")
                  ? "&fakeRec=RTB&fakeRecSize=" + c.g.L("obFakeRTB", "0")
                  : "";
              b.hw = "1" === c.g.L("oblr", "0");
              b.Zj = "true" === OBR.g.L("obPerformance", !1);
              b.cw = "true" === c.g.L("obFakeRtb", !1) ? b.bE() : "";
              b.hv =
                "true" === OBR.g.L("rtbDesc", !1)
                  ? "&isRtbDescriptionEnabled=true"
                  : "";
              b.Ps =
                "true" === OBR.g.L("desc", !1)
                  ? "&descriptionDisplayEnabled=true"
                  : "";
              b.sq = OBR.g.L("skipContextValidation", null);
              b.qn = OBR.g.L("forceContextValidation", null);
              b.UH = OBR.g.L("obRecsAbtestVars", null);
              b.Gk = OBR.g.GE();
              b.VH = `libs.outbrain.com/video/obVideo/${
                "test" === OBR.g.L("vidEnv", "prod") ? "staging" : "current"
              }`;
              b.Lk = !1;
              b.ew = `${b.ib}/keystone/`;
              b.TH = `${b.ew}conv`;
              b.SH = `${b.ew}injections`;
              b.Pi =
                "0" !== OBR.g.L("forceAd", "0") ? OBR.g.L("forceAd", "0") : "";
              b.tq = "true" === OBR.g.L("sst", !1) ? !0 : !1;
              b.vp = OBR.g.L("obInternalId", null);
              if (b.Pi || b.Gk || b.cw || b.wp || b.Ob || b.Qi) b.Rk = !0;
              b.cq = { w: screen.width, h: screen.height };
              b.Sm = window.devicePixelRatio;
              b.le = 0;
              b.Jd = null;
              b.gp = !1;
              b.gx = "data-obscrollable";
              b.CJ = {
                touch_strip: "1",
                odb_dynamic: "2",
                "odb_dynamic_touch-strip": "3",
              };
              b.DJ = { "touch-strip": "1" };
              b.Xj = b.cb && window.OBBridge.viewData;
              b.AM = { KALTURA: "kaltura", BRIGHTCOVE: "brightcove" };
              b.V = {
                qc: "get",
                Ea: "post",
                lr: "jsonp",
                tr: "postJson",
                Mc: "beacon",
              };
              b.Tq = c.g.XE();
              b.mf =
                null !==
                window.location.href.match(
                  /(outbrain.com|localhost:\d{4,5}|consul:\d{4,5})\/WidgetWizard/
                );
              b.qG = "true" === c.g.L("obgallery", "false");
              b.Vn = "function" === typeof d.IntersectionObserver;
              b.nw = !1;
              b.yt = function (k) {
                !0 === k.isSecured &&
                  "https://" !== b.na &&
                  (b.vx(), c.s.A(OBR));
              };
              b.Zc = !1;
              try {
                b.Zc = window.self !== window.top;
              } catch (k) {
                b.Zc = !0;
              }
              b.Pk = "navigator" in window && "sendBeacon" in window.navigator;
              b.eL = "ReportingObserver" in window;
              b.dL = "PerformanceObserver" in window;
              b.SF = "true" === c.g.L("adnginmode", "false");
              b.hk =
                "navigator" in window &&
                "language" in window.navigator &&
                window.navigator.language;
              b.wh = c.g.Wt();
              b.Hd = null;
              b.zv = !1;
              b.Gd = !1;
              b.lu = "webkitLineClamp" in document.createElement("div").style;
              b.Oh = OBR.g.$G();
              b.nu = !!window.history;
              b.Dx = !(
                !document.head.createShadowRoot && !document.head.attachShadow
              );
              b.Ju = OBR.settings && !!OBR.settings.disableLocalStorageGdpr;
              b.Ku = b.wt || 1 === OBR._jsc.B("disableStorageAndCookies");
              b.eG = OBR.settings && !!OBR.settings.conversionPixelTriggers;
              b.vv = OBR.settings && !!OBR.settings.widgetsLoadingPriority;
              b.dG =
                !!OBR.settings && !!OBR.settings.contextRuleComplianceSelector;
              b.RD = () => b.dG && OBR.settings.contextRuleComplianceSelector;
              b.JB = () => {
                const k = b.RD();
                if (!k) return null;
                try {
                  return document.querySelectorAll(k).length ? "onpage" : null;
                } catch (l) {
                  return null;
                }
              };
              b.ha = function () {
                b.ng = !1;
                b.Jd = null;
                b.Gd = !1;
              };
              b.bn = (() => {
                let k = null;
                return {
                  getValue: () => k,
                  Fk: l => {
                    null === k && "true" === l && (k = l);
                  },
                };
              })();
              b.kv = (() => {
                let k = !1;
                return {
                  getValue: () => k,
                  Fk: l => {
                    null === k && !0 === l && (k = l);
                  },
                };
              })();
              b.fG =
                b.hf &&
                window.CSS &&
                "function" === typeof window.CSS.supports &&
                window.CSS.supports("width: 100dvh");
              b.publisherSubscriptionSelector = OBR._jsc.B(
                "publisherSubscriptionSelector"
              );
              b.publisherLoginIndication = OBR._jsc.B(
                "publisherLoginIndication"
              );
              b.lv = OBR._jsc.B("skipAdblock");
              b.Kj = () => 1 === b.lv && b.Ne;
              b.Lj = () => 2 === b.lv && b.M;
              b.WG = OBR.settings && "0" === OBR.settings.fraudDetection;
              b.wn = k => {
                k = k && k.o("pid", null);
                return OBR.settings
                  ? k &&
                    OBR.settings &&
                    OBR.settings._pid &&
                    Number(k) !== Number(OBR.settings._pid)
                    ? 2
                    : 1
                  : 0;
              };
              a.ND = function () {
                try {
                  const k = OBR._jsc.B("admiralTest");
                  return k ? OBR.g.Yt(1, k) : 0;
                } catch (k) {
                  return 0;
                }
              };
              b.mg = a.ND();
              b.aG = (() => {
                try {
                  const k = document.createElement("video");
                  k.playsInline = !0;
                  return (
                    "webkitSupportsPresentationMode" in k &&
                    !k.webkitSupportsPresentationMode("inline")
                  );
                } catch (k) {}
                return !0;
              })();
              b.bb = function () {
                a.Nc = c;
                return a;
              };
              (() => {
                try {
                  const m = window.localStorage.getItem("OB-WITRC");
                  if (m) {
                    const p = JSON.parse(m);
                    (Date.now() - p.ts) / 6e4 > p.ttl
                      ? window.localStorage.removeItem("OB-WITRC")
                      : (b.Vk = p.n);
                  }
                  var k = OBR.g.L("obwitrc", null);
                  if (k && -1 !== k.indexOf(",")) {
                    var [l, q] = k.split(",");
                    var h = { n: q, ttl: +l, ts: Date.now() };
                  } else h = void 0;
                  h &&
                    ((b.Vk = h.n),
                    window.localStorage.setItem("OB-WITRC", JSON.stringify(h)));
                  return h;
                } catch (m) {}
              })();
              return b;
            })();
          (function (a) {
            class b {
              constructor() {
                this.Bo = !!window.fetch;
                this.Ex = !this.Bo;
              }
              yv() {
                return "undefined" !== typeof XMLHttpRequest;
              }
              YG() {
                return !this.Ex || "withCredentials" in new XMLHttpRequest()
                  ? !0
                  : "undefined" !== typeof XDomainRequest;
              }
              PF() {
                return this.Bo || this.yv();
              }
              jx({
                method: d,
                url: e,
                data: f,
                Pc: g,
                async: k,
                contentType: l,
                cO: q,
                by: h,
              }) {
                this.send(d, e, f, g, k, l, q, h);
              }
              send(d, e, f, g, k, l, q, h) {
                !this.Bo && h && (h = !1);
                this.Ex && !this.YG() && (d = a.i.V.lr);
                switch (d) {
                  case a.i.V.qc:
                    this.get(e, f, g, k, l, q, h);
                    break;
                  case a.i.V.Ea:
                    this.xI(e, f, g, k, h);
                    break;
                  case a.i.V.lr:
                    this.Av(e, f, g);
                    break;
                  case a.i.V.tr:
                    this.yI(e, f, g, h);
                    break;
                  case a.i.V.Mc:
                    this.sendBeacon(e, f);
                    break;
                  default:
                    this.Av(e, f, g);
                }
              }
              get(d, e, f, g, k, l, q) {
                e = this.am(e);
                q
                  ? this.km(d + (e.length ? "?" + e : ""), f, "GET", null, k, l)
                  : this.lm(
                      this.cm(),
                      d + (e.length ? "?" + e : ""),
                      f,
                      "GET",
                      null,
                      g,
                      k,
                      l
                    );
              }
              xI(d, e, f, g, k) {
                e = this.am(e);
                k
                  ? this.km(d, f, a.i.V.Ea, e)
                  : this.lm(this.cm(), d, f, a.i.V.Ea, e, g);
              }
              yI(d, e, f, g) {
                e = JSON.stringify(e);
                g
                  ? this.km(d, f, "POST", e, "text/plain; charset=UTF-8")
                  : this.lm(
                      this.cm(),
                      d,
                      f,
                      "POST",
                      e,
                      !0,
                      "text/plain; charset=UTF-8"
                    );
              }
              Av(d, e, f) {
                e = this.am(e);
                d = a.g.Ta(
                  "dataBI" + a.g.bj(),
                  d + (e.length ? "?" + e : ""),
                  !0,
                  !0,
                  f
                );
                a.g.Pb(d);
              }
              sendBeacon(d, e) {
                navigator.sendBeacon(d, this.jA(e));
              }
              km(d, e, f, g, k, l) {
                const q = { method: f, headers: {}, cache: "no-cache" };
                k
                  ? (q.headers["Content-Type"] = k)
                  : f === a.i.V.Ea &&
                    (q.headers["Content-Type"] =
                      "application/x-www-form-urlencoded");
                l && (q.credentials = "include");
                g && (q.body = g);
                fetch(d, q)
                  .then(h => h.text())
                  .then(h => {
                    typeof e === a.i.$e && e(h);
                  })
                  .catch(h => {
                    a.logger.log(`${h} ${d}`);
                    a.He.fire("ajax_error", [h, d]);
                  });
              }
              lm(d, e, f, g, k, l, q, h) {
                void 0 === l && (l = !0);
                var m = "";
                try {
                  m = "Url: " + e + "\n" + Error().stack;
                } catch (p) {}
                d.addEventListener("error", function () {
                  0 !== d.status &&
                    a.error({
                      name: "obm-AjaxError",
                      message: `Ajax error failed, method: ${g} With data: ${k}`,
                      stack: m,
                    });
                });
                d.open(g, e, l);
                d.onreadystatechange = function () {
                  4 === d.readyState &&
                    typeof f === a.i.$e &&
                    f(d.responseText);
                };
                h && (d.withCredentials = !0);
                q
                  ? d.setRequestHeader("Content-type", q)
                  : g === a.i.V.Ea &&
                    d.setRequestHeader(
                      "Content-type",
                      "application/x-www-form-urlencoded"
                    );
                d.send(k);
              }
              am(d) {
                var e = [],
                  f;
                for (f in d)
                  d.hasOwnProperty(f) &&
                    e.push(
                      encodeURIComponent(f) + "=" + encodeURIComponent(d[f])
                    );
                return e.join("&");
              }
              jA(d) {
                const e = new FormData();
                Object.keys(d).forEach(f => e.append(f, d[f]));
                return e;
              }
              cm() {
                if (this.yv()) return new XMLHttpRequest();
              }
            }
            const c = new b();
            a.za = c;
          })(OBR);
          var Ra = /^(http[s]{0,1}):\/\/([^\/]*)outbrain(img){0,1}\.com/i,
            Ch = {
              im: window.performance,
              marks: [],
              EH: [],
              measure(a, b, c) {
                a = `${"ob-measure-"}${a}`;
                this.EH.push(a);
                try {
                  return this.im.measure(a, b, c);
                } catch (d) {}
                return 0;
              },
              WN(a) {
                return Qa(this, a, !0);
              },
              SM(a) {
                return Qa(this, a);
              },
              fN(a, b) {
                const c = `${"ob-mark-"}${b ? "0-" : "1-"}${a}`;
                return this.marks.find(d => d === c);
              },
              gN(a) {
                return performance
                  .getEntriesByType("mark")
                  .filter(b => b.name === a);
              },
              hN() {
                let a = [];
                const b = this.im.getEntriesByType("measure");
                b &&
                  0 < b.length &&
                  (a = b.filter(c => c.name.startsWith("ob-measure-")));
                return a;
              },
              lN(a) {
                const b = [];
                Sa()
                  .filter(c => c.name.includes(a))
                  .forEach(c => {
                    b.push({ name: c.name, value: c });
                  });
                return b;
              },
            };
          OBR.Performance = OBR.Performance || Ch;
          var Dh = [],
            Eh = Date.now(),
            Fh = class {
              log(a) {
                const b = (Date.now() - Eh) / 1e3;
                1e3 > Dh.length &&
                  Dh.push({ "time passed (ms)": b, message: a });
              }
              printPage() {
                const a = OBR.g.Wi();
                a &&
                  ((a.innerHTML = `<div style="direction: ltr">${Dh.map(
                    b => `${b["time passed (ms)"]}: ${b.message}`
                  ).join("<br>")}</div>`),
                  (a.style.display = "block"));
              }
              printLog() {
                OBR.i.cG ? window.console.table(Dh) : this.printPage();
              }
            };
          OBR.logger = OBR.logger || new Fh();
          OBR.printLog = OBR.logger.printLog;
          OBR.printPage = OBR.logger.printPage;
          var Gh = class {
            constructor() {
              this.B = [];
            }
            add(a, b) {
              let c;
              "string" === typeof a &&
                "function" === typeof b &&
                ((c = {}), (c.name = a), (c.$e = b), this.B.push(c));
            }
            fire(a, b, c, d) {
              let e;
              b = b || [];
              c = !!c;
              this.rG || OBR.On.uD(a, d);
              OBR.logger.log("event fire:" + a);
              for (let f = 0, g = this.B.length; f < g; f += 1)
                if (
                  ((d = this.B && this.B[f] ? this.B[f].name : ""),
                  (e = this.B && this.B[f] ? this.B[f].$e : null),
                  d === a && e)
                )
                  try {
                    e.apply(this, b);
                  } catch (k) {
                    console.log(k),
                      OBR.logger.log("fire event *" + a + "* error: " + k),
                      OBR.error(k);
                  }
              !0 === c && Ta(this, a);
            }
            Pe() {
              this.B = [];
            }
          };
          OBR.Wb = Gh;
          OBR.He = new Gh();
          (function (a, b, c) {
            const d = {
              onHtmlReturn: "widgetDataReturned",
              afterRender: "widgetRendered",
            };
            let e;
            const f = q => {
                q = q.widgetId;
                let h = [];
                q &&
                  ("string" === typeof q
                    ? (h = [q])
                    : Array.isArray(q) && (h = q));
                a.logger.log("global event widget ids: " + h);
                return h;
              },
              g = q => {
                q && q.event && "function" === typeof q.func
                  ? "ready" === q.event
                    ? (c.add(q.event, q.func), (e[q.event] = !0))
                    : f(q).forEach(h => {
                        c.add(q.event + "_" + h, q.func);
                        e[q.event] = !0;
                      })
                  : a.logger.log("Bad global event" + q);
              },
              k = () => {
                const q = b.OBREvents;
                if (q && !(1 > q.length))
                  for (var h = 0, m = q.length; h < m; h += 1) g(q.shift());
              };
            class l {
              constructor() {
                e = {};
                this.mI = ["ready"];
              }
              A(q, h, m) {
                a = q;
                b = h;
                c = m;
                c.rG = !0;
                e = {};
              }
              xD() {
                this.mI.includes("ready") && (k(), e.ready && c.fire("ready"));
              }
              uD(q, h) {
                var m = d[q];
                if (h && m && (k(), e[m])) {
                  q = c;
                  var p = q.fire;
                  m = m + "_" + h.D();
                  h = [
                    {
                      idx: h.G(),
                      widgetId: h.D(),
                      widgetJsId: h.o("widgetJsId", h.D()),
                      container: h.v(),
                      recsNumber: h.o("tcr", -1),
                      variantId: h.o("abTestVal", ""),
                    },
                  ];
                  p.call(q, m, h);
                }
              }
              ha() {
                this.A(OBR, window, new OBR.Wb());
              }
            }
            OBR.On = new l();
          })(OBR, window, new OBR.Wb());
          (function () {
            const a = `${OBR.i.IH}/cookie/put.html`,
              b = {
                SUCCESS: 0,
                FAILURE: 1,
                ERROR: 2,
                TIMEOUT: 3,
                LS_SUCEESS: 4,
                LS_FAILURE: 5,
              },
              c = OBR._jsc.C.Wz;
            class d {
              constructor() {
                this.result = null;
                this.Px = !1;
                this.Xe = -1;
              }
              test() {
                const e = this.XD();
                null !== e
                  ? (this.Dh(e),
                    (this.result =
                      e === b.SUCCESS || e === b.LS_SUCEESS ? !0 : !1))
                  : this.start();
              }
              start() {
                document && document.body
                  ? this.Bi()
                  : document.addEventListener("DOMContentLoaded", () => {
                      this.Bi();
                    });
              }
              WD() {
                return -1 === this.Xe ||
                  this.Xe === b.SUCCESS ||
                  this.Xe === b.LS_SUCEESS
                  ? !0
                  : !1;
              }
              Bi() {
                try {
                  let e = null;
                  const f = l => {
                      "OB:3PC-true" === l.data
                        ? (OBR.logger.log("third party cookies enabled"), g(!0))
                        : "OB:3PC-false" === l.data &&
                          (OBR.logger.log("third party cookies disabled"),
                          g(!1));
                    },
                    g = l => {
                      window.removeEventListener("message", f, !1);
                      clearTimeout(e);
                      const q = (this.result = l) ? b.LS_SUCEESS : b.LS_FAILURE;
                      this.Dh(l ? b.SUCCESS : b.FAILURE);
                      this.aK(q);
                      k.parentElement && k.remove();
                    };
                  window.addEventListener("message", f, !1);
                  const k = document.createElement("iframe");
                  k.setAttribute("style", "display:none;width:0;height:0;");
                  k.src = a;
                  k.onerror = () => {
                    this.Dh(b.ERROR);
                    this.result = !1;
                    k.remove();
                  };
                  document.body.appendChild(k);
                  e = setTimeout(() => {
                    this.Dh(b.TIMEOUT);
                  }, 3e3);
                } catch (e) {
                  this.Dh(b.ERROR), (this.result = !1);
                }
              }
              aK(e) {
                OBR.g.xa(
                  c,
                  JSON.stringify({
                    value: e,
                    expiry: new Date().getTime() + 2592e5,
                  })
                );
              }
              XD() {
                var e = OBR.g.R(c, null);
                if (!e) return null;
                e = JSON.parse(e);
                return new Date().getTime() > e.expiry
                  ? (OBR.g.ae(c), null)
                  : e.value;
              }
              Dh(e) {
                -1 === this.Xe && (this.Xe = e);
              }
            }
            OBR.Ke || (OBR.Ke = new d());
          })();
          OBR.Hd =
            OBR.Hd ||
            (function () {
              const a = { key: null };
              (() => {
                a: {
                  var b = OBR.g.R("OB_LS_CONTEXT", null);
                  if (b)
                    try {
                      var c = JSON.parse(b);
                      if (c.key) {
                        var d = c;
                        break a;
                      }
                    } catch (f) {
                      OBR.logger.log(
                        "Failed to parse stored value OB_LS_CONTEXT"
                      );
                    }
                  d = null;
                }
                if (d && "disabled" !== d.key) {
                  if ((d = d.key)) {
                    c = OBR.g.R(d, null);
                    if (
                      !c &&
                      0 < d.indexOf(".") &&
                      ((b = d.split(".")),
                      (c = b.splice(0, 1)[0]),
                      (c = OBR.g.R(c, null)))
                    )
                      try {
                        for (c = JSON.parse(c); b.length; ) {
                          var e = b.splice(0, 1);
                          c = c[e];
                        }
                      } catch (f) {
                        OBR.logger.log(
                          `Failed to parse local storage value ${d}`
                        );
                      }
                    c &&
                      "string" === typeof c &&
                      300 < c.length &&
                      (c = c.substring(0, 300));
                    e = c;
                  } else e = null;
                  e && ((e = encodeURIComponent(e)), (OBR.i.Hd = e));
                }
              })();
              return {
                update: b => {
                  b = b.l("localStoragePathForContextRule", null);
                  b !== a.key &&
                    (b
                      ? ((a.key = b),
                        OBR.g.xa("OB_LS_CONTEXT", JSON.stringify(a)))
                      : OBR.g.ae("OB_LS_CONTEXT"));
                },
              };
            })();
          var Hh = class {
            constructor() {
              this.Lh = 2;
              this.Bq = this.Fm = this.nb = this.Za = null;
              this.$d = {};
              this.Db = Ua(this);
              this.Tb = null !== this.Db;
              this.vo =
                window.__uspapi && "function" === typeof window.__uspapi;
              this.Zb = null;
              this.qq = this.vo;
              this.Oq = this.hy = this.ui = !1;
              this.ak = () => {};
              Ya(this);
            }
            A() {
              Xa(this);
              ab(this);
            }
            Co(a) {
              if (
                this.Tb
                  ? 1 === Va()
                    ? this.hy || !this.Oq
                    : !this.Tb || null !== this.Za || null !== this.nb
                  : 1
              )
                return !0;
              this.ak = () => {
                a();
              };
              if (1 === Va()) return !1;
              this.MD ||
                (this.MD = setTimeout(() => {
                  OBR.logger.log("Second time for consent");
                  if (null === this.Za && null === this.nb)
                    if (((this.ui = !0), "" !== OBR.g.R(OBR._jsc.C.pc, ""))) {
                      const b = OBR.g.R(OBR._jsc.C.pc, "");
                      b &&
                        "undefined" != b &&
                        ((this.nb = OBR.g.R(OBR._jsc.C.pc, "")),
                        OBR.logger.log("Taking consent from LS"));
                    } else
                      "" !== OBR.g.R(OBR._jsc.C.Ge, "") &&
                        ((this.Za = OBR.g.R(OBR._jsc.C.Ge, "")),
                        OBR.logger.log("Taking consent from LS"));
                  this.Tx(300);
                  this.ak();
                }, 300));
              return !1;
            }
            ha() {
              if (
                typeof OBR.i.gl.OB_CONSENT !== OBR.i.ls ||
                !1 !== OBR.i.gl.OB_CONSENT
              )
                "" !== OBR.g.R(OBR._jsc.C.Ge, "") &&
                  (this.Za = OBR.g.R(OBR._jsc.C.Ge, "")),
                  "" !== OBR.g.R(OBR._jsc.C.pc, "") &&
                    (this.nb = OBR.g.R(OBR._jsc.C.pc, ""));
            }
            Tx(a) {
              this.Tb = !1;
              this.Tx = a;
            }
          };
          OBR.ga || (OBR.ga = new Hh());
          var Ih = class {
              constructor() {
                this.isEnabled = !1;
                this.value = [];
                OBR._jsc.B("preloadScripts") &&
                  gb() &&
                  ((this.isEnabled = !0),
                  (this.value = OBR.settings.preloadScripts));
              }
            },
            Jh = new Ih();
          (function () {
            let a;
            const b = {
                ZL: "ADNGIN",
                El: "POPUPDESCRIPTION",
                di: "WHATIS",
                ql: "FLYTHROUGH",
                Sl: "VIDEO",
                Kl: "SCROLL",
                xr: "SCROLLEXTERNAL",
                ur: "REGISTER",
                nr: "OB_VIDEO",
                Jl: "REFRESHWIDGET",
                ag: "SKYLANDER",
                $h: "LOADMORE",
                eM: "DYNAMICTEXTTRUNCATION",
                Ol: "TOPBOX",
                Al: "PAGER",
                pr: "PAGEREXTERNAL",
                qr: "PAGEREXTERNALNEW",
                Dr: "USERZAPPING",
                ai: "READMORE",
                Zf: "NATIVEVIDEOPLAYER",
                Ul: "WIDGETWIZARD",
                Nl: "SWIPELAYOUT",
                mM: "MEGABLOCKS",
                yr: "STASHRENDERER",
                hl: "ADCAROUSEL",
                Cl: "PERFORMANCEMONITOR",
                Ll: "SINGLECARDCAROUSEL",
                kl: "CARDSCAROUSELBOX",
                ol: "DYNAMICCAROUSEL",
                Fl: "PUBLISHERTOOLS",
                Dl: "PLAYABLEAD",
                dg: "TIMELINE",
                Yf: "GRIDCAROUSEL",
                Tl: "WIDGETINJECTOR",
                nl: "DISPLAY",
                Hl: "REEL",
                Il: "REEL-V2",
                Bl: "PARALLAX",
                ml: "CLIP",
                xl: "LEAD_FORMS",
                bg: "STACK_CARD",
                $f: "READ_NEXT",
                cg: "STORIES",
                Ml: "SINGLE_ANIMATION_ON_FEED",
                ci: "WEBVITALSMONITOR",
                kM: "INTERACTION_LAYER",
                Rl: "USER_ZAPPING",
                cM: "CUSTOM_FEED",
                yl: "MICROSOFT_TAP",
                Xf: "FLOATING_INDICATOR",
                Yq: "CONVERSIONS_TRIGGERS",
                ar: "EXTRA_INJECTIONS",
                sl: "GTEE_COMPLIANCE_MEASURE",
                rl: "GPID_COLLECTION",
                Vl: "WIDGET_PREDICTION_BUCKETS",
                il: "ADMIRAL",
              },
              c = Object.keys(b).reduce((f, g) => {
                f[b[g]] = g;
                return f;
              }, {});
            class d {
              constructor(f, g, k) {
                this.url = g;
                this.version = k;
                this.state = 0;
                this.ni = [];
                this.context = this;
                this.Zs = null;
              }
              sC() {
                if (2 === this.state) this.Hv();
                else if (0 === this.state) {
                  var f = OBR.g.Ta(0, this.url + this.$D(), !0);
                  f.onerror = this.Zs;
                  this.state = 1;
                  OBR.g.Pb(f);
                }
              }
              $D() {
                return OBR.env ? `?e=${OBR.env}` : "";
              }
              Hv() {
                this.state = 2;
                for (let g = 0; g < this.ni.length; g += 1) {
                  var f = this.ni[g];
                  "function" === typeof f.Pc && f.Pc.call(this.context, f.mB);
                }
                this.ni = [];
              }
              nK(f) {
                this.url = this.url.replace(
                  "$SUFFIX",
                  f ? f.toString().toLowerCase() : ""
                );
              }
            }
            class e {
              constructor() {
                this.u = b;
              }
              A(f, g) {
                a = g ? g : this.GI();
              }
              IF() {
                for (let g of Jh.value) {
                  var f = g && g.trim().toUpperCase();
                  const k = c[f];
                  (f = f && this.u[k]) &&
                    this.N(
                      f,
                      () => {},
                      this,
                      [],
                      "",
                      () => {}
                    );
                }
              }
              Cw(f, g) {
                f &&
                  ((g = {
                    gnr_module: OBR.i.Yv.replace("__path__", f).replace(
                      "__moduleName__",
                      f
                    ),
                    gnr_feature: OBR.i.Xv.replace("__path__", f).replace(
                      "__moduleName__",
                      f
                    ),
                    gnr_module_internal_lazy: OBR.i.Yv.replace(
                      "__path__",
                      f
                    ).replace("/__moduleName__", ""),
                    gnr_feature_internal_lazy: OBR.i.Xv.replace(
                      "__path__",
                      f
                    ).replace("/__moduleName__", ""),
                  }[g]),
                  (b[f] = `${f}`),
                  a[f] || (a[f] = new d(f, g, -1)));
              }
              GI() {
                const f = {},
                  g = (k, l, q) => {
                    f[k] || (f[k] = new d(k, l, q));
                  };
                g(this.u.El, OBR.i.X + "/popupDescription.js", -1);
                g(this.u.di, OBR.i.X + "/whatis.js", -1);
                g(this.u.Dr, OBR.i.X + "/userZapping.js", -1);
                g(this.u.ql, OBR.i.X + "/flyThrough.js", -1);
                g(this.u.Sl, OBR.i.X + "/video.js", -1);
                g(this.u.ur, OBR.i.X + "/registration.js", -1);
                g(this.u.Jl, OBR.i.X + "/refreshWidget.js", -1);
                g(this.u.ag, OBR.i.X + "/skyLander.js", -1);
                g(this.u.Ol, OBR.i.X + "/topBox.js", -1);
                g(this.u.Nl, OBR.i.X + "/swipeLayout.js", -1);
                g(this.u.$h, OBR.i.X + "/loadMore.js", -1);
                g(this.u.ai, OBR.i.X + "/readMore.js", -1);
                g(this.u.Ul, OBR.i.X + "/widgetWizard.js", -1);
                g(this.u.yr, OBR.i.X + "/stashRenderer.js", -1);
                g(this.u.nr, OBR.i.na + (OBR.i.VH + "/obVideo.js"), -1);
                g(this.u.Yq, OBR.i.TH + "/KS_conversions.js", -1);
                g(this.u.ar, OBR.i.SH + "/ob_extra_injections.js", -1);
                g(this.u.Kl, OBR.i.X + "/scroll.js", -1);
                g(this.u.xr, OBR.i.qp + "/scroll/scrollExternal.js", -1);
                g(this.u.Al, OBR.i.X + "/pager.js", -1);
                g(this.u.pr, OBR.i.qp + "/pager/pagerExternal.js", -1);
                g(this.u.qr, OBR.i.qp + "/pager/pagerExternalNew.js", -1);
                g(this.u.Zf, OBR.i.LH + "/NVPInjector.min.js", -1);
                g(this.u.hl, OBR.i.X + "/adCarousel.js", -1);
                g(this.u.Cl, OBR.i.X + "/performanceMonitor.js", -1);
                g(this.u.Ll, OBR.i.X + "/singleCardCarousel.js", -1);
                g(this.u.kl, OBR.i.X + "/cardsCarouselBox.js", -1);
                g(this.u.ol, OBR.i.X + "/dynamicCarousel.js", -1);
                g(this.u.Fl, OBR.i.X + "/publisherTools.js", -1);
                g(this.u.Dl, OBR.i.X + "/playableAd.js", -1);
                g(this.u.dg, OBR.i.X + "/timeline.js", -1);
                g(this.u.Yf, OBR.i.X + "/gridCarousel.js", -1);
                g(this.u.Tl, OBR.i.X + "/widgetInjector.js", -1);
                g(this.u.nl, OBR.i.X + "/displayAd.js", -1);
                g(this.u.Hl, OBR.i.X + "/reel.js", -1);
                g(this.u.Il, OBR.i.X + "/reel-v2.js", -1);
                g(this.u.cg, OBR.i.X + "/stories.js", -1);
                g(this.u.ci, OBR.i.X + "/webVitals.js", -1);
                g(this.u.Bl, OBR.i.X + "/parallax.js", -1);
                g(this.u.ml, OBR.i.X + "/clip.js", -1);
                g(this.u.Ml, OBR.i.X + "/singleAnimationOnFeed.js", -1);
                g(this.u.xl, OBR.i.X + "/leadForms.js", -1);
                g(this.u.bg, OBR.i.X + "/stackCard.js", -1);
                g(this.u.$f, OBR.i.X + "/readNext.js", -1);
                g(this.u.Rl, OBR.i.X + "/userZapping.js", -1);
                g(this.u.yl, OBR.i.X + "/microsoftTap.js", -1);
                g(this.u.Xf, OBR.i.X + "/floatingIndicator.js", -1);
                g(this.u.sl, OBR.i.X + "/gteeComplianceMeasure.js", -1);
                g(this.u.rl, OBR.i.X + "/publisherIDsCollector.js", -1);
                g(this.u.Vl, OBR.i.X + "/widgetPredictionBuckets.js", -1);
                g(this.u.il, OBR.i.X + "/admiral.js", -1);
                return f;
              }
              T(f) {
                if ("-1" !== OBR.i.ver)
                  try {
                    a[f].Hv();
                  } catch (g) {
                    throw (
                      (OBR.error({
                        name: "obm-MakeHandShakeError",
                        message: "Error in module: " + f + ", Err: " + g,
                        stack: g.stack || "None",
                      }),
                      g)
                    );
                  }
              }
              qE(f) {
                return a[f];
              }
              N(f, g, k, l, q, h) {
                if ((f = this.qE(f)))
                  f.nK(q),
                    f.ni.push({ Pc: g || OBR.g.Eg(), mB: l }),
                    (f.Zs = h),
                    (f.context = k),
                    f.sC();
              }
              St(f) {
                for (let g in this.u)
                  if (this.u.hasOwnProperty(g) && this.u[g] === f)
                    return this.u[g];
                return null;
              }
            }
            if (!OBR.s) {
              const f = new e();
              f.A();
              OBR.s = f;
            }
          })();
          OBR.languageManager =
            OBR.languageManager ||
            (function () {
              var a = OBR,
                b = {},
                c = {},
                d = [];
              b.Bv = function (e) {
                return d.hasOwnProperty(e);
              };
              b.LC = function (e) {
                d[e] = {};
              };
              b.WA = function (e, f) {
                d[e] = a.g.assign(d[e], f);
              };
              c.registerModuleLanguage = function (e, f) {
                "string" === typeof e &&
                  f &&
                  0 < Object.keys(f).length &&
                  (b.Bv(e) || b.LC(e), b.WA(e, f));
              };
              c.iN = function (e) {
                return b.Bv(e) ? d[e] : null;
              };
              c.bb = function () {
                return b;
              };
              return c;
            })();
          OBR.A = OBR.A || void 0;
          OBR.Lb = function (a) {
            return (0, OBR._jsc.hh)(a);
          };
          OBR.$a =
            OBR.$a ||
            (function () {
              var a,
                b = {},
                c = {},
                d;
              b.A = function (e) {
                a = e = e || OBR;
                d = new a.Wb();
                b.eq = new OBR.Promise();
              };
              b.bb = function () {
                return c;
              };
              c.yg = function (e) {
                var f;
                var g = 0;
                for (f = e.length; g < f; g += 1)
                  a.g.Sb(e[g], "data-browser", a.i.Yb),
                    a.g.Sb(e[g], "data-os", a.i.os),
                    d.fire("find", [e[g]]);
              };
              c.Et = function () {
                return a.g.Eb("class", "OUTBRAIN", "div", !0);
              };
              c.UD = function (e) {
                var f,
                  g = [],
                  k = [];
                for (f = 0; f < e.length; f++) {
                  var l = e[f];
                  if ("string" === typeof l.containerId)
                    if (a.Lb(l.containerId)) {
                      var q = a.Lb(l.containerId);
                      OBR.Xa.JC(l, q);
                      k.push(q);
                    } else g.push(e[f]);
                }
                window.OB_elements = g;
                return k;
              };
              c.zE = function () {
                var e = [];
                "object" === typeof window.OB_elements &&
                  0 < window.OB_elements.length &&
                  (e = window.OB_elements);
                return e;
              };
              c.tE = function () {
                var e = [],
                  f = c.Et(),
                  g;
                var k = 0;
                for (g = f.length; k < g; k += 1) {
                  var l = a.g.af(f[k], "data-ob-mark");
                  (null !== l && "true" === l) ||
                    !f[k] ||
                    (e.push(f[k]), a.g.Sb(f[k], "data-ob-mark", "true"));
                }
                k = c.zE();
                if (0 < k.length)
                  for (
                    a.logger.log("Array of elements found!"),
                      f = c.UD(k),
                      k = 0,
                      g = f.length;
                    k < g;
                    k += 1
                  )
                    e.push(f[k]);
                return e;
              };
              b.GM = function (e) {
                OBR.$a.Ki ? OBR.$a.Ki.then(() => c.gn(e)) : c.gn(e);
              };
              c.YA = e => {
                OBR.logger.log("search containers - mutation observer");
                const f = new MutationObserver(l => {
                    (l = l.reduce((q, h) => {
                      (h = Array.prototype.slice
                        .call(h.addedNodes)
                        .filter(m => "DIV" === m.tagName)) &&
                        h.length &&
                        (q = q.concat(h));
                      return q;
                    }, [])) &&
                      l.length &&
                      e();
                  }),
                  g = () => {
                    if (OBR.Ci.$u()) {
                      e();
                      OBR.logger.log(
                        "search containers - dom ready: disconnecting mutation observer"
                      );
                      try {
                        b.eq.resolve();
                      } catch (l) {}
                      setTimeout(() => f.disconnect(), 0);
                      document.removeEventListener("readystatechange", g);
                    }
                  };
                document.addEventListener("readystatechange", g);
                const k = () =>
                  f.observe(document.body, { subtree: !0, childList: !0 });
                document.body
                  ? k()
                  : window.addEventListener("DOMContentLoaded", k);
              };
              c.FJ = () => {
                const e = () => {
                  OBR.logger.log(
                    "search containers - searching for new containers"
                  );
                  let f = c.tE();
                  OBR.i.vv && (f = c.rJ(f));
                  0 < f.length &&
                    (OBR.$a.Ki ? OBR.$a.Ki.then(() => c.yg(f)) : c.yg(f));
                };
                if (OBR.Ci.$u()) {
                  e();
                  try {
                    b.eq.resolve();
                  } catch (f) {}
                } else if (OBR.i.vv) {
                  const f = () => {
                    OBR.Ci.Lu() &&
                      (e(),
                      document.removeEventListener("readystatechange", f));
                  };
                  document.addEventListener("readystatechange", f);
                } else c.YA(e), e();
              };
              c.rJ = e => {
                var f = OBR.settings.widgetsLoadingPriority
                  .replace(/\s+/g, "")
                  .split(",");
                const g = [],
                  k = {};
                try {
                  for (const l of e) k[l.getAttribute("data-widget-id")] = l;
                  for (const l of f)
                    k.hasOwnProperty(l) && (g.push(k[l]), delete k[l]);
                  for (const l of Object.values(k)) g.push(l);
                  return g;
                } catch (l) {
                  return e;
                }
              };
              c.gn = function (e) {
                void 0 === e ? c.FJ() : 0 < (e.length || 0) && c.yg(e);
              };
              b.qN = function () {
                return 0 < c.Et().length;
              };
              b.aI = function (e) {
                d.add("find", e);
              };
              b.HN = function (e) {
                d.add("stopSearch", e);
              };
              b.Ji = function () {
                c.gn();
              };
              b.sD = function (e) {
                var f = [],
                  g;
                var k = 0;
                for (g = a.F.length; k < g; k += 1) {
                  var l = a.g.v(k);
                  null !== l &&
                    ("string" === typeof e && a.g.Sb(l, "data-src", e),
                    f.push(l));
                }
                0 < f.length && ((a.F = []), c.yg(f));
              };
              b.WM = function (e) {
                const f = [];
                e && (a.g.Sb(e, "data-ob-mark", "false"), f.push(e), c.yg(f));
              };
              b.qL = function (e) {
                a.g.Sb(e, "data-ob-mark", "false");
              };
              b.ha = function () {
                d.Pe();
                a.F = [];
              };
              b.A(OBR);
              return b;
            })();
          var Kh = class {
            constructor() {
              this.lb = OBR.g.R(OBR._jsc.C.Uq, null);
              this.he = OBR.g.R(OBR._jsc.C.Vq, null);
              null !== this.lb &&
                OBR.logger.log(
                  "AdBlock - status from local storage is: " + this.lb
                );
              this.Om = 300;
              this.cssText =
                "display:inline;width:1px!important;height:1px!important;border:none;padding:0;visibility:visible!important;";
              this.Ri = !1;
              this.qg = this.rg = 0;
              this.pm = new OBR.Wb();
              this.bt = { ready: 0, iD: 3, Iq: 6, stopped: 7 };
              null === this.lb && nb(this);
            }
            rk(a) {
              this.pm.add("onAdBlockStatusReady", a);
            }
            Nn() {
              return this.rg;
            }
            tn() {
              return this.qg;
            }
            tj() {
              return OBR.i.Kj() || OBR.i.Lj() || OBR.i.cb ? !1 : this.lb;
            }
            uj() {
              return this.he;
            }
            ZH() {
              mb(this);
            }
          };
          OBR.kb = OBR.kb || new Kh();
          var P = {
            $f: { ea: "ReadNext", S: { Gy: 8500 } },
            Vy: { ea: "ForceCardButton", S: { Fy: 7808 } },
            Ez: {
              ea: "PubtoolOverlay",
              S: {
                Yy: 8e3,
                Ry: 8001,
                My: 8002,
                Uf: 8003,
                mz: 8004,
                Kz: 8005,
                Cy: 8006,
                Mz: 8007,
              },
            },
            kr: {
              ea: "HighlightReel",
              S: { rr: 7800, vr: 7801, Wq: 7802, gr: 7803 },
            },
            cg: {
              ea: "Stories",
              S: {
                Cz: 10010,
                qz: 10015,
                rz: 10016,
                Dz: 10020,
                sz: 10025,
                uz: 10026,
                yz: 10030,
                Hy: 10040,
                Ty: 10031,
                iz: 10017,
                jz: 10027,
                Ay: 10045,
              },
            },
            Ky: { ea: "DelayWidget", S: { bA: 10100 } },
            Xy: {
              ea: "InterventionHeavyAds",
              S: { $y: 99840, Qz: 99740, Rz: 99640, Sz: 99540, Tz: 99440 },
            },
            aA: { ea: "WebVitals", S: { Iz: 98e3 } },
            xy: { ea: "Ad Carousel", S: { zy: 5e3, yy: 5001 } },
            Yf: { ea: "Grid Carousel", S: { ir: 1e4 } },
            Zz: {
              ea: "User Sentiment",
              S: {
                LIKE: 4e3,
                DISLIKE: 4050,
                UNDO_DISLIKE: 4100,
                UNDO_LIKE: 4150,
                STASH: 4200,
                UNDO_STASH: 4250,
                SHARE: 4300,
                REPORT: 4350,
                REPORT_REASONSV2: 4351,
                UNDO: 4400,
                OPEN: 4450,
                MENU_MOBILE: 4451,
              },
            },
            $q: { ea: "Dynamic Carousel", S: { Xq: 10100 } },
            Ly: { ea: "DFP", S: { Jz: 4600, Lz: 4610, EMPTY: 4620, Sy: 4630 } },
            aM: { ea: "Article Card", S: { vM: 4500 } },
            sr: {
              ea: "Playable ad",
              S: {
                "ob-pa-load": 6e3,
                "ob-pa-cta-clicked": 6001,
                "ob-pa-engaged": 6002,
                "ob-pa-error": 6003,
                "ob-pa-resize": 6004,
              },
            },
            bg: { ea: "StackCard", S: { Ar: 6500, zr: 6501 } },
            dg: { ea: "Timeline", S: { Uz: 7510, Cr: 7511 } },
            tM: { ea: "Podcast", S: { qM: 7e3 } },
            Hz: { ea: "ReadMore", S: { Uf: 2050, $z: 2e3 } },
            ag: { ea: "SkyLander", S: { Ra: 3e3 } },
            Oz: { ea: "SwipeLayout", S: { jb: 3050, Ra: 3e3 } },
            Vz: {
              ea: "TopBox",
              S: { Vf: 3150, jb: 3050, Ra: 3e3, Ie: 3200, Wf: 3100 },
            },
            Ey: {
              ea: "BottomBox",
              S: { Vf: 3150, jb: 3050, Ra: 3e3, Ie: 3200, Wf: 3100 },
            },
            dr: {
              ea: "Feed",
              S: { Dy: 10200, Uy: 10201, Az: 10202, Bz: 10203 },
            },
            yM: { ea: "test", S: { gM: 100, hM: 200 } },
            jM: { ea: "General", S: { xM: 400, iM: 401 } },
            Xf: { ea: "floatingIndicator", S: { Uf: 1500 } },
            Ya: {
              ea: "exploreMore",
              S: {
                kz: 5500,
                lz: 5501,
                Xz: 5502,
                pz: 5510,
                oz: 5511,
                Iy: 5515,
                az: 5516,
                Zy: 5517,
                dM: 5518,
                Oy: 5519,
                wz: 5520,
                xz: 5523,
                By: 5527,
                Ny: 5529,
                Yz: 5532,
              },
            },
            wM: { ea: "refreshwidget", S: { $L: 9898 } },
            wy: { ea: "admiralApi", S: { Nz: 6800 } },
            gz: { ea: "keystone", S: { Jy: 100 } },
          };
          var Lh = {
              obzala: "_b1_ad_group_id",
              obzalc: "_b1_creatives_id",
              obzali: "_b1_ip",
              obzalt: "_b1_no_targeting",
              obzalp: "_b1_cpm",
              obzale: "_b1_exchange",
              obzald: "_b1_ignore_pmp",
              obzalcbs: "_b1_creative_banner_size",
            },
            Mh = [
              { pattern: "utm_", Rv: a => a },
              { pattern: "obzal", Rv: a => Lh[a] },
            ],
            me = () => {
              var { HE: a } = { HE: () => qh(window) };
              const b = a();
              return b &&
                (a = Object.keys(b)
                  .map(c => {
                    const d = Mh.find(e => c.startsWith(e.pattern));
                    return d ? [c, d.Rv(c)] : null;
                  })
                  .filter(c => !!c)
                  .map(([c, d]) => `${d}=${encodeURIComponent(b[c])}`)
                  .join("&"))
                ? `&aqp=${encodeURIComponent(a)}`
                : "";
            };
          var vb;
          var Nh = class {
            constructor() {
              this.platform = OBR.i.M ? "mobile" : "desktop";
              this.K = {};
              this.mi = [];
            }
            remove(a, b = !1) {
              const c = a.D(),
                d = this.$b && this.$b.some(e => e.includes(c));
              (a.Mq() || b || d) &&
                (a = document.querySelector(
                  c
                    ? `.ob_sf_loader, .${c}.ob-chunks-loader`
                    : ".ob_sf_loader, .ob-chunks-loader"
                )) &&
                null !== a.parentNode &&
                a.parentNode.removeChild(a);
            }
            Le(a, b, c) {
              b = xb({ vg: b, qd: c });
              a.appendChild(b);
              this.mi.push({ qd: c, jp: b });
            }
          };
          OBR.Hx || (OBR.Hx = new Nh());
          var Tb = OBR.Hx;
          var Oh = class {
              constructor() {
                this.Mk = new uh();
              }
            },
            Ph = new Oh();
          var Qh = class {
              constructor() {
                this.isEnabled = OBR.i.dv;
              }
              mark(a, b, c) {
                this.isEnabled &&
                  a &&
                  b &&
                  (c ? a.Ax(`${b}-${c}`) : "rendered" === b && a.Ax(b));
              }
            },
            $b = new Qh();
          var Rh = class {
              constructor() {
                this.Wr = OBR._jsc.B("ab");
                this.om = {};
                this.Vr = "";
                if (this.Wr)
                  try {
                    const b = this.Wr.split(",");
                    if (b && b.length) {
                      var a = [];
                      for (let c = 0; c < b.length; c++) {
                        const [d, e] = b[c].split("~");
                        if (!d || !e || 0 > e || 100 < e) continue;
                        const f = d.split("-");
                        if (!f || !f.length || 3 !== f.length) continue;
                        let g;
                        g = OBR.g.Yt(0, 100) > e ? f[1] : f[2];
                        this.om[f[0]] = g;
                        a.push(`${f[0]}:${g}`);
                      }
                      this.Vr = a.join(",");
                    }
                  } catch (b) {
                    OBR.error({
                      name: "obm-clientAbrex",
                      message:
                        "error while generate client abrex variants." +
                        b.message,
                      stack: b.stack,
                    });
                  }
              }
            },
            ic = new Rh();
          var qc = null,
            pc = !1;
          (a => {
            let b, c;
            null == (b = a.cookieDeprecationLabel) ||
              null == (c = b.getValue()) ||
              c
                .then(d => {
                  qc = d;
                  pc && OBR.error({ name: "obm-TPCDLLateResponse" });
                })
                .catch(d => {
                  OBR.error(d);
                });
          })(window.navigator);
          var rc = null;
          (a => {
            try {
              let b;
              if (null == (b = a.userAgentData) ? 0 : b.getHighEntropyValues) {
                let c;
                null == (c = a.userAgentData) ||
                  c
                    .getHighEntropyValues([
                      "architecture",
                      "bitness",
                      "fullVersionList",
                      "model",
                      "platformVersion",
                    ])
                    .then(d => {
                      if (d) {
                        const e = d.architecture
                            ? `&cha=${d.architecture}`
                            : "",
                          f = d.bitness ? `&chb=${d.bitness}` : "";
                        let g;
                        (null == (g = d.fullVersionList) ? 0 : g.length)
                          ? JSON.stringify(d.fullVersionList)
                          : "";
                        rc =
                          e +
                          f +
                          "" +
                          (d.model ? `&chm=${d.model}` : "") +
                          (d.platformVersion
                            ? `&chpv=${d.platformVersion}`
                            : "");
                      }
                    });
              }
              return rc;
            } catch (b) {
              return OBR.error({
                name: "obm-highEntropyValue",
                message: b.message,
                stack: b.stack,
              });
            }
          })(window.navigator);
          var Sh = class {
              constructor() {
                this.cache = new Map();
                this.YF = OBR.i.cb;
                this.gd = OBR.i.gd;
              }
              hi() {
                return "";
              }
              gi(a) {
                return tc(this, a);
              }
            },
            nc = new Sh();
          OBR.wa =
            OBR.wa ||
            (function () {
              var a = {},
                b = {},
                c;
              let d = "";
              a.sh = null;
              class e {
                constructor() {
                  this.list = [];
                }
                add(f) {
                  this.list.push(f);
                }
                contains(f) {
                  return -1 !== this.list.indexOf(f);
                }
                remove(f) {
                  this.list.splice(f, 1);
                }
                top() {
                  return 0 < this.list.length ? this.list.shift() : null;
                }
                Yi() {
                  return this.list;
                }
                xs() {
                  this.list = [];
                }
                Fd() {
                  return !this.list || !this.list.length;
                }
              }
              b.A = function (f) {
                c = f || OBR;
                a.Gc = new e();
                a.rh = new c.Wb();
                a.kf = !1;
                a.HM = null;
                a.tt = !0;
                a.ut = !0;
                a.ow = !1;
                a.uF();
              };
              a.uF = () => {
                d = me();
              };
              a.PN = function () {
                OBR.$a.eq.then(() => {
                  a.$x();
                });
                window.setTimeout(() => {
                  a.$x();
                }, 1e3);
              };
              a.FE = function () {
                if (a.sh) return a.sh;
                const f = OBR.i.gk ? `&ogn=${OBR.i.gk}` : "",
                  g = OBR.i.Yj ? `&dicbo=${OBR.i.Yj}` : "",
                  k = c.i.hk && c.i.hk.length ? "&osLang=" + c.i.hk : "";
                var l = c.ca.Ga;
                l = "&winW=" + l.width + "&winH=" + l.height;
                const q = "&scrW=" + c.i.cq.w + "&scrH=" + c.i.cq.h,
                  h = c.i.cn ? "&xp=" + c.g.oa(c.i.cn) : "",
                  m = c.i.Iu ? "&wrDebug=true" : "",
                  p = c.i.HD ? "&forceFeed=true" : "",
                  r = "https://" === c.i.na ? "&secured=true" : "",
                  t = c.ga.Za ? "&cnsnt=" + c.ga.Za : "",
                  u = c.ga.Db ? "&cmpStat=1" : "&cmpStat=0",
                  v = c.ga.nb ? "&cnsntv2=" + c.ga.nb : "",
                  w = c.ga.Zb ? "&ccpa=" + c.ga.Zb : "",
                  A = c.ga.vo ? "&ccpaStat=1" : "&ccpaStat=0",
                  D = OBR.i.Zc ? "&iframe=true" : "",
                  E = OBR.i.Hd ? `&lscntx=${OBR.i.Hd}` : "",
                  I =
                    null !== OBR.i.sq
                      ? `&skipContextValidation=${OBR.i.sq}`
                      : "",
                  J =
                    null !== OBR.i.qn
                      ? `&forceContextValidation=${OBR.i.qn}`
                      : "",
                  V = OBR.i.Gk ? `&skipRecsFilters=${OBR.i.Gk}` : "",
                  O = OBR.i.Pi
                    ? `&forceAd=${OBR.i.Pi}&settingLevel=SOURCE`
                    : "",
                  R = "&dpr=" + c.i.Sm,
                  W = OBR.i.vp ? `&ob_internal_id=${OBR.i.vp}` : "",
                  Z = c.i.Yp ? `&ref=${c.i.Yp}` : "",
                  ca = c.i.Wj ? "" : "&wdr-natlaz=false",
                  Ga = OBR.i.tq ? "&wdr-ads-data=true" : "",
                  Ha = OBR.i.vt ? "&forceDemand=true" : "",
                  Ia = OBR.i.Vk ? `&trace_name=${OBR.i.Vk}` : "",
                  Ja = OBR.i.Ju || OBR.i.Ku ? "&lsl=1" : "",
                  Ka = OBR.i.rn ? `&forceOcAd=${OBR.i.rn}` : "",
                  La = OBR.i.Ne && ke() ? `&opvid=${ke()}` : "",
                  Ma = `&chs=${OBR.i.wn()}`;
                a.sh = `&version=${c.i.ver}&sig=${c.i.Tq}&apv=${c.i.ng}${La}${c.i.cw}${Ka}${c.i.Ps}${c.i.hv}${c.i.Ur}${c.i.Is}${h}${k}${l}${q}${R}${m}${p}${r}${v}${t}${u}${w}${A}${D}${E}${I}${J}${V}${O}${ca}${Ga}${d}${Ha}${Ia}${W}${g}${Ja}${Ma}${Z}${f}`;
                return a.sh;
              };
              a.MC = function (f) {
                var g = f.G(),
                  k = f.Fb(),
                  l = c.g.R(OBR._jsc.C.bi, null),
                  q = c.g.R(OBR._jsc.C.Ql, null),
                  h = f.$i(),
                  m = h && null !== h.x ? `&px=${h.x}` : "";
                h = h && null !== h.y ? `&py=${h.y}` : "";
                var p = f.Kt();
                p = null !== p ? `&vpd=${p}` : "";
                k = a.OE(g, k);
                var r = a.mE(f);
                r = r ? "&lastPvTs=" + r : "";
                var t = !0 === c.i.Rk || !0 === f.fj(),
                  u = f.Mn() ? "&videoId=" + f.Mn() : "",
                  v = f.Vt() ? "&playerSrcId=" + f.Vt() : "",
                  w = f.pb() ? "&api_user_id=" + f.pb() : "",
                  A = a.fE(t),
                  D = a.qb(f);
                const [E, I] = le(f);
                var J = E && I ? `&${E}=${I}` : "";
                var V = a.Bd(f),
                  O = !0 === f.ev() || c.i.wp ? "&rtbEnabled=true" : "",
                  R = f.ej() ? `&seid=${encodeURIComponent(f.ej())}` : "",
                  W = !0 === f.tv() ? "&va=true" : "",
                  Z = 1 == f.Lt() ? "&et=true" : "",
                  ca = c.i.Ob && c.i.Ob[f.D()] ? "&contextRule=false" : "",
                  Ga = null !== f.Zi() ? "&num=" + f.Zi() : "",
                  Ha = a.QE(f),
                  Ia = a.NE(f),
                  Ja = OBR.i.hw ? "&wdr-lr=1" : "",
                  Ka = f.dc() ? "&installationType=" + f.dc() : "",
                  La = f.bc() ? "&app_ver=" + f.bc() : "",
                  Ma =
                    "&widgetJSId=" +
                    (c.i.Ob && c.i.Ob[f.D()] ? c.i.Ob[f.D()] : f.D()),
                  Gb = `&format=${f.Qt()}`;
                l = l ? "&lsd=" + c.g.oa(l) : "";
                q = q ? "&lsdt=" + q : "";
                var ib = f.Ng() ? "&lang=" + f.Ng() : "",
                  Hb = f.Og() ? "&psub=" + f.Og() : "",
                  Ib = f.Ft() ? "&app_id=" + f.Ft() : "";
                t = t ? "&testMode=true" : "";
                var Jb = a.ZD(f),
                  jb = f.Nt() ? "&fId=" + f.Nt() : "",
                  kb = f.Jn && f.Jn() ? "&reasonType=" + f.Jn() : "",
                  lb = f.Ln && f.Ln() ? "&reasonValueId=" + f.Ln() : "",
                  Kb = f.Kn && f.Kn() ? "&reasonValue=" + f.Kn() : "",
                  Lb = f.vn && f.vn() ? "&categoryIds=" + c.g.oa(f.vn()) : "",
                  Mb = f.Xi && f.Xi() ? "&iabCat=" + f.Xi() : "",
                  Nb = f.bf() ? "&feedVersion=" + f.bf() : "",
                  Ob = f.zd() ? "&fAB=" + f.zd() : "",
                  Pb =
                    f.yd() && "" != f.yd()
                      ? "&settingLevel=TEMPLATE&" + f.yd()
                      : "",
                  Qb = null !== OBR.i.wh ? `&pubInState=${OBR.i.wh}` : "";
                const Rb =
                    !f.Ti() || c.ga.Za || c.ga.nb
                      ? ""
                      : "1" === f.yn() || 1 === f.yn()
                      ? `&cnsnt=${f.Ti()}`
                      : `&cnsntv2=${f.Ti()}`,
                  Sb = f.un() ? `&ccpa=${f.un()}` : "";
                var ya = c.i.Jt();
                ya = ya ? "&contxtKV=" + c.g.oa(ya) : "";
                var za = f.Lg();
                za = za ? `&cw=${za}` : "";
                f = f.ie() ? "&em=1" : "";
                return `${Jb}?${Ha}${Ia}&idx=${g}&rand=${c.g.rand()}${Ka}${La}${r}${Ma}${W}${Z}${Gb}${O}${l}${q}${ib}${Hb}${Ib}${k}${ca}${w}${u}${v}${A}${D}${J}${V}${Ga}${t}${jb}${kb}${lb}${Kb}${Lb}${Mb}${Nb}${Ob}${m}${h}${p}${Pb}${Qb}${Sb}${Rb}${ya}${za}${R}${Ja}${f}`;
              };
              a.fE = function (f) {
                let g = "";
                f ||
                  ((f = c.fraudDetection.Zd || c.fraudDetection.gq)
                    ? (g = "&clss=" + f)
                    : c.fraudDetection.If &&
                      (g =
                        "&clid=" +
                        c.fraudDetection.If +
                        "&fdu=" +
                        c.fraudDetection.Gi));
                return g;
              };
              b.Dt = function (f) {
                var g = a.MC(f);
                const k = a.FE(),
                  l = nc.hi(),
                  q = sc(f);
                f = nc.gi(f);
                g = OBR.i.Wv + g + l + q + k + f;
                return (null == g ? void 0 : g.length) >= OBR.i.Tj
                  ? ((g = oe(g)),
                    (null == g ? void 0 : g.length) >= OBR.i.Tj && pe(g),
                    g)
                  : g;
              };
              a.qb = function (f) {
                let g = "";
                const k = c.g.Rf(c.i.$m);
                f = c.g.Rf(f.qb());
                if (k || f) g = "&extid=" + encodeURIComponent(f || k);
                return g;
              };
              a.Bd = function (f) {
                return (f = c.g.Yk(f.Bd() || c.i.ld))
                  ? `&pubImpId=${encodeURIComponent(f)}`
                  : "";
              };
              a.QE = f => {
                if (f.dj()) return `url=${OBR.g.oa(f.dj())}`;
                const g = f.wc(),
                  k = f.yc(),
                  l = f.zc();
                return g
                  ? `bundleUrl=${c.g.oa(g)}`
                  : l
                  ? `portalUrl=${c.g.oa(l)}`
                  : k
                  ? `contentUrl=${c.g.oa(k)}`
                  : "url=" + c.g.oa(f.Ja());
              };
              a.ZD = f =>
                f.Fb() && !f.dj()
                  ? "/Multivac/api/platforms"
                  : "/Multivac/api/get";
              a.NE = function (f) {
                if (f.Fb()) return "";
                var g = "&srcUrl=";
                f = f.bu();
                return (g =
                  null !== f && "string" === typeof f && 0 < f.length
                    ? g + c.g.oa(f)
                    : 0 < c.i.Jk.length
                    ? g + c.i.Jk
                    : "");
              };
              a.FF = function (f, g) {
                var k = g.G(),
                  l = g.D(),
                  q = c.g.Ta(0, f, !0);
                c.g.Bb(q, "error", function () {
                  g.wD();
                  a.rh.fire("onOdbFail_" + k + "_" + l, [g], !0);
                  Tb.remove(g);
                  q.remove();
                  a.kf = !1;
                  b.fire();
                });
                Ph.Mk.start();
                c.g.Pb(q);
                a.DH(g);
                a.rh.fire("onOdbFire_" + k + "_" + l, [g], !0);
                c.logger.log("fire this src " + f);
              };
              a.DH = function (f) {
                $b.mark(f, "mv", "start");
              };
              a.vK = function (f) {
                setTimeout(() => {
                  a.Tw(f.G(), f.D());
                }, 1e4);
              };
              a.Tw = function (f, g) {
                c.g.$p("ob_odbCall_" + f + g);
              };
              a.RF = function () {
                if (OBR.i.Kj() || OBR.i.Lj()) return !0;
                var f = null !== c.kb.lb;
                if (a.tt)
                  if (((a.tt = !1), f))
                    c.logger.log("AdBlock ODB detected immediately");
                  else {
                    var g = new c.Br();
                    c.logger.log("AdBlock ODB start stopwatch");
                    g.start();
                    c.kb.rk(function () {
                      c.logger.log("AdBlock ODB detected after " + g.stop());
                      b.fire();
                    });
                  }
                return f;
              };
              a.pG = function () {
                var f = OBR.fraudDetection.At;
                if (a.ut && ((a.ut = !1), !f)) {
                  c.logger.log("FD start stopwatch");
                  var g = new c.Br();
                  qg(c.fraudDetection, function () {
                    c.logger.log("FD return after " + g.stop());
                    b.fire();
                  });
                }
                return f;
              };
              b.tK = f => {
                if (OBR.i.cb)
                  try {
                    Object.keys(f).forEach(g => {
                      (null !== f[g] && "undefined" !== typeof f[g]) ||
                        delete f[g];
                    }),
                      f &&
                        Object.keys(f).length &&
                        window.OBBridge.setBridgeParams(f);
                  } catch (g) {}
              };
              a.Co = function () {
                return OBR.ga.Co(() => b.fire());
              };
              a.ZF = function () {
                if (!c.ga.qq || null !== c.ga.Zb) return !0;
                a.GB ||
                  (a.GB = setTimeout(function () {
                    null === c.ga.Zb &&
                      ("" !== c.g.R(OBR._jsc.C.Wh, "")
                        ? (c.ga.Zb = c.g.R(OBR._jsc.C.Wh, ""))
                        : (c.ga.qq = !1));
                    b.fire();
                  }, 300));
                return !1;
              };
              b.fire = function (f) {
                OBR.logger.log("odb fire");
                if (
                  !(
                    !0 !== a.kf &&
                    !0 !== a.ow &&
                    a.RF() &&
                    a.Co() &&
                    a.ZF() &&
                    a.pG()
                  )
                )
                  return !1;
                if (!f && a.Gc.Fd())
                  OBR.logger.log("odb fire - no pending widgets");
                else {
                  a.kf = !0;
                  if (f) {
                    var g = a.Gc.Yi().indexOf(f);
                    0 <= g ? a.Gc.remove(g) : (f = null);
                  } else
                    (f = a.Gc.Yi().find(k => k.FG())) &&
                      a.Gc.remove(a.Gc.Yi().indexOf(f));
                  return f
                    ? (c.logger.log("fire odb for " + f.Ja()),
                      (g = b.Dt(f)),
                      a.FF(g, f),
                      a.vK(f),
                      a.qJ(f),
                      !0)
                    : (a.kf = !1);
                }
              };
              a.qJ = f => {
                try {
                  var g = Tb;
                  g.pf = yb();
                  g.$b = Ab(g);
                  const k = !!g.pf,
                    l = f.v(),
                    q = f.D();
                  k ? Bb(g, g.pf, q, l) : Fb(g, q, l);
                } catch (k) {
                  OBR.logger.log("failed to parse Local Storage for skeleton");
                }
              };
              b.GN = function (f, g) {
                a.rh.add("onOdbFire_" + f.G() + "_" + f.D(), g);
              };
              b.FN = function (f, g) {
                a.rh.add("onOdbFail_" + f.G() + "_" + f.D(), g);
              };
              b.unlock = function (f, g) {
                a.kf = !1;
                a.Tw(f, g);
              };
              a.$x = function () {
                a.ow = !1;
                b.fire();
              };
              b.LJ = function (f) {
                !0 === f && (OBR.i.ng = f);
              };
              b.Bx = function (f, g) {
                f &&
                  (g ? (c.i.Qp = f) : (c.i.Eq = f),
                  window.OBBridge &&
                    !window.OBBridge.t &&
                    (window.OBBridge.t = f));
              };
              b.du = f => (f ? c.i.Qp : c.i.Eq);
              a.OE = (f, g) => {
                if (window.OBBridge && window.OBBridge.t && 0 !== f)
                  return `&t=${window.OBBridge.t}`;
                g = b.du(g);
                return "" === g || 0 === f ? "" : "&t=" + g;
              };
              a.mE = function (f) {
                let g = null;
                if (f && 0 == f.G()) {
                  const k = new Date().getTime();
                  f = c.g.oa(f.Ja());
                  const l = OBR._jsc.C.hz,
                    q = c.g.R(l, null);
                  if (q)
                    try {
                      let h = JSON.parse(q);
                      if (h && f === h.url) {
                        let m = k - h.previousRequestTime;
                        72e5 > m && (g = m);
                      }
                    } catch (h) {
                      OBR.logger("Error parsing last page view info");
                    }
                  c.g.xa(l, JSON.stringify({ url: f, previousRequestTime: k }));
                }
                return g;
              };
              b.uu = function () {
                c.i.ng = !1;
              };
              b.register = function (f) {
                a.Gc.add(f);
                c.logger.log("register odb for " + f.Ja());
                b.fire();
              };
              b.MG = f => a.Gc.contains(f);
              b.TE = function () {
                return a.Gc;
              };
              b.KM = function (f) {
                b.unlock(f.G(), f.D());
                b.fire();
              };
              b.ha = function () {
                OBR.logger.log("odb cleanup");
                a.Gc.xs();
                a.rh.Pe();
                a.kf = !1;
                a.sh = null;
              };
              b.bb = function () {
                a.Nc = c;
                return a;
              };
              b.A(OBR);
              return b;
            })();
          var Th;
          Th = () => {
            window.OB_VIDEO &&
              window.OB_VIDEO.reloadObVideo &&
              window.OB_VIDEO.reloadObVideo();
          };
          OBR._jsc.Uh = (...a) => {
            window.OB_VIDEO.init(...a);
          };
          var Vh = 1 / 3,
            Wh = a => {
              const b = a.v();
              if (b) {
                var c = OBR.g.H(b).querySelectorAll(".ob-dynamic-rec-link");
                if (c)
                  return Array.from(c)
                    .map(d => ({
                      Ka: b,
                      TI: d,
                      Te: d.querySelector(".ob-grid-button-container"),
                      title: d.querySelector(".ob-rec-text"),
                      isRTL: a.ad(),
                    }))
                    .filter(d => !!d.Te);
              }
            },
            Xh = a => a.Te.clientWidth / a.TI.clientWidth > Vh,
            Yh = a => {
              var b = window.getComputedStyle(a.Te),
                c = window.getComputedStyle(a.title);
              b = th(b.margin);
              c = [b[0], b[1], b[2], th(c.margin)[3]];
              if (a.isRTL) {
                const [d, e, f, g] = c;
                c = [d, g, f, e];
              }
              a.title.style.margin = c.join(" ");
              a.Te.setAttribute(
                "style",
                `${"display:block;width:100%;"}margin:${c.join(
                  " "
                )};width: calc(100% - ${parseInt(c[1]) + parseInt(c[3])}px)`
              );
              a.Te.parentElement.appendChild(a.Te);
            };
          var Zh = [],
            $h = a => {
              a = a.l("customFontLinks", null);
              try {
                const b = a ? JSON.parse(a) : [];
                if (Array.isArray(b)) return b;
              } catch (b) {}
              return [];
            },
            ai = a => {
              const b = document.createElement("link");
              b.href = a;
              b.rel = "stylesheet";
              return b;
            },
            bi = a => {
              Zh.push(a);
            },
            ci = a => {
              const b = document.createDocumentFragment();
              a.forEach(c => b.appendChild(c));
              document.head.appendChild(b);
            },
            di = a => {
              a = $h(a);
              const b = a.filter(c => !(0 <= Zh.indexOf(c))).map(ai);
              a.forEach(bi);
              ci(b);
            };
          var zc = a => (a.Ho() ? OBR.g.Oa(a.Ad()) : a.fu());
          var Hc = {},
            Kc = (a, b) =>
              new Promise(c => {
                OBR.s.N(
                  b,
                  () => c(a),
                  a,
                  null,
                  null,
                  () => {
                    OBR.error({
                      name: "obm-GNR",
                      message: `Module name: ${b}, Could not load`,
                      stack: "",
                    });
                  }
                );
              }),
            Lc = class {
              constructor(a, b) {
                this.j = a;
                this.kc = !1;
                this.sf = b;
                this.dataBI = new OBR.dataBI(a, `${"gnr_"}${b}`);
              }
              Wd() {
                this.tc = [];
                this.pd = Array.from(
                  this.ya.querySelectorAll("[data-pos]")
                ).map(a => a.getAttribute("data-pos"));
                OBR.Ha.Xb(this.j, { nh: !0, fk: (...a) => Cc(this, ...a) });
              }
              Le() {
                const a = this.j.v();
                if (a) {
                  Dc(this, "beforeRender");
                  OBR.controller.mJ(this.ya, this.j);
                  this.kc = !0;
                  if (this.j.$c() && this.ya && a && a.attachShadow) {
                    const b = this.j.Ui(),
                      c = this.j.Mg();
                    OBR.g.attachShadow(a, this.ya, { mode: "open" }, b, c);
                  }
                  Dc(this, "afterRender");
                  Ic(this);
                } else
                  OBR.error({
                    name: "obm-gnr",
                    message: `Container not found for widget idx ${this.j.G()}`,
                  });
              }
            },
            ei = class {
              constructor() {
                this.Bf = {};
                this.ed = {};
                this.sm = {};
              }
              A(a, b, c = !1) {
                try {
                  this.ed[b] && this.ed[b].loaded
                    ? Mc(a, this.ed[b].options, b)
                    : (this.Bf[b] || this.N(a, b, c), this.ed[b].Gp.push(a));
                } catch (d) {
                  OBR.error({
                    name: "obm-GNR",
                    message: `Error in module: ${b}, Err: Module could not init`,
                    stack: d.stack,
                  });
                }
              }
              N(a, b, c) {
                OBR.s.Cw(b, c ? "gnr_feature" : "gnr_module");
                this.ed[b] = { loaded: !1, options: null, Gp: [] };
                this.Bf[b] = Kc(a, b);
              }
            },
            Jc = new ei();
          var Xc = [0.7, 0.9, 1.2, 2],
            fi = class {
              constructor() {
                this.gh = this.So();
                this.iy = [];
                OBR.i.eL && (Rc(this), Sc(this));
                OBR.i.dL && this.ko();
              }
              A() {
                this.so = OBR.i.Ne || !!window["debug-amp"];
                this.yj = this.j.ic();
                this.thresholds = Yc(this);
                this.yj && this.so && Zc(this);
              }
              ko() {
                this.hd = { total: 0 };
                this.tI = new PerformanceObserver(a => {
                  a.getEntries().forEach(b => {
                    const c = b.transferSize;
                    b = b.initiatorType;
                    this.hd[b] || (this.hd[b] = 0);
                    this.hd[b] += c;
                    this.hd.total += c;
                    Wc(this, this.hd.total);
                  });
                });
                try {
                  this.tI.observe({ entryTypes: ["resource"] });
                } catch (a) {}
              }
              getError(a) {
                const b = {},
                  c = {},
                  d = this.thresholds.filter(r => !!r.xd).map(r => 100 * r.qI),
                  e = this.iy,
                  f = Uc(this).join(","),
                  g = $c(a.body.message),
                  k = this.j.o("pvId", null),
                  l = Vc(this),
                  q = window.OB_releaseVer,
                  h = OBR.i.Mv,
                  m = OBR.monitorData,
                  p = OBR.env;
                a = {
                  sampleRate: 100,
                  thresholds: d,
                  videoEvents: e,
                  crashReason: g,
                  log: f,
                  amp: this.so,
                  con: this.yj,
                  reportType: a.type,
                  reportUrl: a.url,
                  reportId: a.body.id,
                };
                this.hd && (a.performance = this.hd);
                OBR.F && (a.widgets = l);
                b.name = "obm-InterventionHeavyAds";
                b.version = q;
                b.message = g;
                b.env = p || 1;
                b.stack = JSON.stringify(a);
                b.url = h || location.href;
                b.agent = navigator.userAgent.toLowerCase();
                m &&
                  ((b.sId = m.sourceId), (b.dId = m.docId), (b.pId = m.pubId));
                Object.assign(c, a, { pvid: k });
                return { kH: b, YE: c };
              }
              So() {
                const a = 1 * OBR.g.R("debug-intervention-sample", 100);
                return 1 > Math.floor(Math.random() * a);
              }
              zp(a, b) {
                this.iy.push({ event: a, props: b });
                Tc(this, 1);
              }
              Lf(a) {
                this.j = a;
                this.Fe = new OBR.dataBI(this.j, b => b.Xy);
                this.A();
              }
            };
          var gi, hi, ed;
          gi = class {
            constructor() {
              this.dd = {};
              this.mh = [];
              this.ah = this.bq = !1;
              this.Gq = 0;
              this.XI = OBR.We(this.WI, 100);
            }
            ko() {
              this.qh = new PerformanceObserver(a => {
                for (const b of a.getEntries()) this.mh.push(b);
              });
              this.qh.observe({ type: "layout-shift", buffered: !1 });
            }
            WI(a) {
              const b = a.Y() || a;
              b &&
                ((a = this.dd[b.D()]),
                "undefined" === typeof a
                  ? OBR.error({
                      name: "webVitalsMonitorWidgetsRenderError",
                      message: `this.layoutShifts allocation failed for ${b.D()}`,
                    })
                  : (a.Yu || this.mh.length || (this.dd[b.D()].Vb = 0),
                    this.mh.forEach(c => {
                      const d = c.value;
                      a: {
                        c = c.sources;
                        const l = b.v();
                        try {
                          var e = JSON.parse(
                            b.l("webVitalsMonitorSelectors", "[]")
                          );
                          var f;
                          if ((f = e.length)) {
                            b: {
                              for (const q of c) {
                                const h = q.node;
                                for (const m of e) {
                                  const p = m.selector,
                                    r = m.relative || !1;
                                  let t;
                                  switch (m.type || "css") {
                                    case "css":
                                      t = document.querySelector(p);
                                      break;
                                    case "xpath":
                                      t = document.evaluate(
                                        p,
                                        r ? l : document,
                                        null,
                                        XPathResult.FIRST_ORDERED_NODE_TYPE,
                                        null
                                      ).singleNodeValue;
                                  }
                                  if (t === h) {
                                    var g = p;
                                    break b;
                                  }
                                }
                              }
                              g = !1;
                            }
                            f = !g;
                          }
                          if (f) {
                            var k = !1;
                            break a;
                          }
                        } catch (q) {
                          OBR.error({
                            name: "webVitalsMonitorSelectorsError",
                            message: `Could not parse selectors for: ${b.D()}`,
                          });
                        }
                        k = !0;
                      }
                      k && (this.dd[b.D()].Vb += d);
                    }),
                    (this.bq = !1),
                    (this.mh = [])));
            }
          };
          hi = class {
            constructor() {
              this.Ko = this.$w = !1;
              this.IG =
                "PerformanceObserver" in window &&
                PerformanceObserver.supportedEntryTypes &&
                -1 !==
                  PerformanceObserver.supportedEntryTypes.indexOf(
                    "layout-shift"
                  );
            }
            ic(a) {
              "undefined" === typeof this.Gu &&
                (this.Gu = OBR.g.R("debug-webvitals-gdpr-compliant", a.ic()));
              return this.Gu;
            }
          };
          ed = new hi();
          OBR._jsc.cd = new gi();
          var ii = class {
              constructor() {
                this.Wo = [];
                this.ly = !1;
                this.Vo = null;
              }
              reset() {
                this.Wo.splice(0).forEach(a => a.unobserve());
              }
              Gd(a) {
                return OBR.i.Gd && 0 < a.G();
              }
              oj(a) {
                OBR.i.Gd = !0;
                this.Vo = gd(a);
                (a = OBR.wa.TE()) &&
                  a.list &&
                  a.list.forEach(b => {
                    if (!b.je()) {
                      var c = b.v();
                      c && hd(this, c, b);
                    }
                  });
              }
              io(a) {
                if (!(!a || (a.je && a.je()))) {
                  this.Ib();
                  this.Vo = gd();
                  var b = a.v();
                  b && hd(this, b, a);
                }
              }
              Ib() {
                try {
                  const a =
                    OBR._jsc.B("enableDebuggingReports") &&
                    0 < OBR.settings.enableDebuggingReports;
                  !this.ly &&
                    a &&
                    ((this.ly = !0),
                    OBR.za.get(`${OBR.i.fl}/WidgetErrorMonitor/api/report`, {
                      name: "wlz-pvWidgetLazyLoad",
                      level: "INFO",
                      version: window.OB_releaseVer,
                      env: OBR.env || 1,
                      url: location.href,
                      agent: navigator.userAgent.toLowerCase(),
                    }));
                } catch (a) {}
              }
            },
            id = new ii();
          var ji = class {
              Ib(a) {
                if (a && a.v())
                  try {
                    const b = OBR.g.H(a.v()).querySelector("img.ob-rec-image");
                    b &&
                      new Promise(c => b.addEventListener("load", () => c(b)))
                        .then(c => {
                          var d =
                            (c.naturalWidth * c.naturalHeight) /
                            (c.offsetWidth * c.offsetHeight);
                          if (2 < d && 1 === OBR.g.Zt(5e3)) {
                            const e = {},
                              f = {};
                            e.name = "obm-ImagesDiffReport";
                            e.imgSrc = c.src;
                            e.url = window.location.href;
                            f.originalWidth = c.naturalWidth;
                            f.renderedWidth = c.offsetWidth;
                            f.originalHeight = c.naturalHeight;
                            f.renderedHeight = c.offsetHeight;
                            f.wId = a.D();
                            f.diff = d;
                            f.clientDpr = OBR.i.Sm;
                            a.Y() && (f.widgetFatherId = a.Y().D());
                            OBR.monitorData && (e.pId = OBR.monitorData.pubId);
                            d =
                              (d = a.o("abTestVal", null)) && "no_abtest" !== d
                                ? OBR.g.jk(d)
                                : null;
                            f.abTestVariantId = (d && d.Zk) || "no_abtest";
                            f.abTestId = (d && d.Qk) || "no_abtest";
                            if ((c = kd(c.src)))
                              (f.urlImgDataCropStrategy = c.cs),
                                (f.urlImgDataDpr = c.d),
                                (f.urlImgDataFormat = c.f),
                                (f.urlImgDataHeight = c.h),
                                (f.urlImgDataWidth = c.w),
                                (f.urlImgDataImageUUID = c.iu);
                            e.extra = JSON.stringify(f);
                            OBR.za.get(OBR.i.qy, e);
                          }
                        })
                        .catch(c => {
                          OBR.error({
                            name: "obm-ImageCompareMonitoring",
                            message: `error ${c.name} while trying sent report for images size diff`,
                          });
                        });
                  } catch (b) {
                    OBR.error({
                      name: "obm-ImageCompareMonitoring",
                      message: `error ${b.name} while trying sent report for images size diff - no image was found`,
                    });
                  }
              }
            },
            ki = new ji();
          var li = class {
            A(a) {
              if (a && a.Y()) {
                this.Ap = a.v();
                this.Vh = a.Y().v().parentElement;
                const b = a.l("cardMargin", 0);
                this.Ap.style.cssText = `margin:${b}`;
                if (
                  this.Vh &&
                  this.Vh.classList.contains("ob-smartfeed-wrapper")
                )
                  try {
                    if (
                      (OBR.g.la(this.Vh.firstChild, "ob-parent-feed"),
                      this.Vh.insertBefore(this.Ap, this.Vh.firstChild),
                      OBR.g.Fa(this.Ap, "ob-onload"),
                      a.Qo())
                    )
                      ld(a);
                    else {
                      const c = a
                          .v()
                          .querySelector(".ob-onyx-sponsored-container"),
                        d = a.fc("display", null);
                      d &&
                        d.html &&
                        ((c.style.width = `${d.width}px`),
                        (c.style.margin = "0 auto 2px"),
                        c.classList.remove("ob-sponsored-hide"));
                    }
                  } catch (c) {
                    OBR.error({
                      name: "obm-OnyxATF",
                      message: c.message,
                      stack: c.stack,
                    });
                  }
              }
            }
          };
          var mi;
          OBR._jsc.ni = class {
            constructor(a, b) {
              this.j = a || new OBR.Wl(-1);
              this.settings = b instanceof Function ? b(P) : b;
              this.wd = this.settings.ea || this.settings;
              this.UC = OBR.i.Bp + "logger/v1/widget/";
              this.sessionId = this.j.o("req_id", -1) + new Date().getTime();
              this.isActive = !0;
              this.gs = new mi(this.wd);
              this.ho();
            }
            ho() {
              const a = Object.values(this.FA).find(b => b.ea == this.wd);
              a &&
                a.S &&
                (this.B = Object.keys(a.S).reduce((b, c) => {
                  b[c] = { fire: this.fire.bind(this, a.S[c]) };
                  return b;
                }, {}));
            }
            event(a) {
              return a(this.B);
            }
            fire(a, b, c) {
              b = b || {};
              c = Object.assign({ method: OBR.i.V.Ea }, c || {});
              if (
                this.isActive &&
                "undefined" !== typeof b &&
                "undefined" !== typeof c
              ) {
                var d = c.callback ? c.callback : function () {};
                b = b ? b : {};
                (c.LIMIT && this.gs.get(a) >= c.LIMIT) ||
                  (nd(this.gs, a),
                  (a = this.fi(a, b, c)),
                  OBR.za.send(c.method, this.UC, a, d, !0, null, null, !0));
              }
            }
            fi(a, b, c) {
              const d = {};
              var e = this.j.Y(),
                f = !!e,
                g = !this.j.Na() && f;
              f = g ? e.o("wnid", "") : this.j.o("wnid", "");
              const k = g || this.j.Na() ? this.j.o("wnid", "") : null;
              e = g ? e.o("widgetJsId", "") : this.j.o("widgetJsId", "");
              g = g || this.j.Na() ? this.j.o("widgetJsId", "") : null;
              b.ajaxMethod = c.method;
              b.clientTimestamp = Date.now();
              b.timestamp = "";
              b.publisherId = this.j.o("pid", "");
              b.sectionId = this.j.o("sid", "");
              b.widgetJsId = e;
              b.widgetId = f;
              b.subWidgetJsId = g;
              b.subWidgetId = k;
              b.cardIdx = this.j.Si();
              b.docId = this.j.o("did", "");
              b.uuid = this.j.o("lsd", "");
              b.platform = this.j.o("readerPlatform", "");
              b.deviceOs = "";
              b.deviceOrientation = OBR.g.An();
              b.layeredTest = this.j.o("layeredTestInfo", "no_layers");
              this.j.Vc(!0) || delete b.uuid;
              d.sessionId = c.sessionId ? c.sessionId : this.sessionId;
              d.eventGroup = this.wd;
              d.eventTypeId = a;
              d.requestId = this.j.o("req_id", -1);
              d.attributes = JSON.stringify(b);
              return d;
            }
            setActive(a) {
              this.isActive = a;
            }
          };
          mi = class {
            constructor(a) {
              this.wd = a;
              this.xd = {};
            }
            get(a) {
              md(this, a);
              return this.xd[`${this.wd}-${a}`];
            }
          };
          OBR._jsc.ni.prototype.FA = Object.keys(P).reduce((a, b) => {
            a[b] = P[b];
            return a;
          }, {});
          OBR.dataBI = OBR._jsc.ni;
          OBR.dataBI.settings = P;
          var oi = new OBR.Wb(),
            G = {
              Kg(a, b) {
                oi.fire("afterRender", [b], !1, a);
              },
              vh(a) {
                OBR.controller.vh(a);
              },
              Ff(a) {
                OBR.controller.Ff(a);
              },
              createElement(a, b, c, d) {
                return OBR.g.createElement(a, b, c, d);
              },
              ia(a) {
                OBR.g.ia(a);
              },
              v(a) {
                return OBR.g.v(a);
              },
              zd(a) {
                if ((a = OBR.F[a])) return a.o("abTestVal", null);
              },
              Cn(a) {
                return (a = OBR.F[a]) ? a.o("layeredTestInfo", null) : null;
              },
              L(a, b) {
                return OBR.g.L(a, b);
              },
              Lg(a) {
                if ((a = OBR.F[a])) return a.Lg();
              },
              ma(a) {
                return OBR.F[a];
              },
              ei(a) {
                return OBR.controller.ei(a);
              },
              R(a) {
                return OBR.g.R(a, null);
              },
              bN() {
                return OBR.controller;
              },
              U() {
                return OBR.i;
              },
              tj() {
                return "true" === OBR.kb.tj();
              },
              uj() {
                return "true" === OBR.kb.uj();
              },
              xp(a, b, c = {}) {
                const d =
                  a && a.getAttribute("id")
                    ? [a.getAttribute("id").substr(16)]
                    : [];
                new OBR.IntersectionObserver(
                  Object.assign(
                    {
                      element: a,
                      callback: b,
                      threshold: [0],
                      unobserve: !0,
                      callbackParams: d,
                    },
                    c
                  )
                ).observe();
              },
              N(a, b) {
                OBR.s.N(a, b);
              },
            };
          var pd = a => {
              const b = document.createElement("div");
              b.innerHTML = a;
              return b.firstChild;
            },
            He = (a, b = !1) => {
              if ((a = G.v(a)))
                return b ? OBR.g.H(a).querySelector(".ob-cards") : a.parentNode;
            },
            pi = (a = !1, b, c) => {
              const d = document.createDocumentFragment();
              c.forEach(e => e && d.appendChild(e));
              (a = He(b, a)) && a.appendChild(d);
            },
            qi = (a, b, c) => {
              let d = !0;
              const e = 1.1 * b;
              c.forEach(f => {
                f.style.opacity = 0;
                a.appendChild(f);
                a.scrollHeight <= e
                  ? (f.style.opacity = 1)
                  : ((d = !1), f.parentNode.removeChild(f));
              });
              return d;
            },
            ri = (a = !1, b, c) => {
              const d = document.createDocumentFragment();
              d.appendChild(c);
              (a = He(b, a)) && a.appendChild(d);
            },
            Ie = a => {
              var b = a && a.D();
              b = `.ob_sf_loader, ${b ? `.${b}` : ""}.ob-chunks-loader`;
              if (
                a &&
                (a =
                  (a =
                    (a = a.v()) &&
                    a.parentNode &&
                    a.parentNode.querySelectorAll(b)) && Array.from(a)) &&
                a.length &&
                null !== a[0].parentNode
              ) {
                for (b = 0; b < a.length; b++) {
                  const c = a[b];
                  c.parentNode.removeChild(c);
                }
                return;
              }
              (b = document.querySelector(b)) &&
                null !== b.parentNode &&
                b.parentNode.removeChild(b);
            },
            si = (a = 0) => {
              (a = G.ma(a)) &&
                (a = a.v()) &&
                a.style.removeProperty("visibility");
            };
          var je = {
            error(a) {
              OBR.logger.log(`[ERROR] ${a}`);
            },
            log(a) {
              OBR.logger.log(a);
            },
          };
          var ui = class {
              constructor(a) {
                ti || (ti = this);
                this.j = a;
                this.dataBI = new OBR.dataBI(this.j, b => b.Ly);
                this.ti = {};
                this.count = 0;
                return ti;
              }
              sd(a) {
                a.event.fire(a.data);
              }
            },
            ti;
          var vi = class {
              constructor() {
                this.className = "ob-smartfeed-adjoker";
                this.adInfo = {};
                this.logger = je;
              }
              create({ adInfo: a }) {
                this.adInfo = a;
                this.vd = new ui(G.ma(this.adInfo.fatherCardIdx));
                if (a.adType)
                  switch (a.adType.toLowerCase()) {
                    case "gpt":
                      return wd(this);
                    case "dfp":
                      return xd(this);
                    case "adsense":
                      a: {
                        try {
                          var b = this.adInfo.cardIdx,
                            c = this.adInfo.adClient,
                            d = this.adInfo.adSlot,
                            e = `ad-unit-/${b}`,
                            f = G.createElement("div", e, null, {
                              "data-card-idx": b,
                              "data-feed-father-idx": this.adInfo.fatherCardIdx,
                            }),
                            g = G.createElement("script", null, null, {
                              src: "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
                              async: "true",
                            }),
                            k = G.createElement(
                              "ins",
                              null,
                              "display:inline-block;width:100%;height:200px",
                              {
                                class: `${this.className} adsbygoogle`,
                                "data-ad-client": c,
                                "data-ad-slot": d,
                              }
                            ),
                            l = G.createElement("script", null, null, null);
                          l.innerText = `googletag.cmd.push(function() {googletag.display('${e}')\;})`;
                          f.appendChild(g);
                          f.appendChild(k);
                          f.appendChild(l);
                          var q = f;
                          break a;
                        } catch (h) {
                          this.logger.error(h);
                        }
                        q = void 0;
                      }
                      return q;
                    case "gptframe":
                    case "pb":
                      a: {
                        q = this.adInfo.cardIdx;
                        b = this.adInfo.fatherCardIdx;
                        c = this.adInfo.adId;
                        d = this.adInfo.adPath;
                        f = this.adInfo.adType;
                        g = this.adInfo.adWidth;
                        k = this.adInfo.adHeight;
                        a = G.ma(b);
                        l = a.o("abTestVal");
                        a = a.o("pid");
                        try {
                          const h = `thirdPartyType=${f}&thirdPartyId=${c}&adPath=${d}&width=${g}&height=${k}&refferer=${window.location.host}&pubId=${a}&abTestVal=${l}&feedIdx=${b}`,
                            m = G.createElement(
                              "div",
                              null,
                              "position: relative; height: 120vw; margin: auto; max-width: 640px; max-height: 499px; display: none",
                              {
                                class: this.className,
                                "data-card-idx": q,
                                "data-feed-father-idx": b,
                              }
                            ),
                            p = G.createElement(
                              "iframe",
                              null,
                              "position: absolute; top: 0; left : 0; height: 100%; width: 100%; border: 0;",
                              {
                                src: `${OBR.i.na}widgets.outbrain.com/nanoWidget/externals/ob3rdPFrame/ob3rdPFrame.htm?${h}`,
                              }
                            );
                          zd(m);
                          m.appendChild(p);
                          e = m;
                          break a;
                        } catch (h) {
                          this.logger.error(h);
                        }
                        e = void 0;
                      }
                      return e;
                    default:
                      return (
                        a
                          ? this.logger.error(
                              `adJoker type is of unknown type: ${a.adType}`
                            )
                          : this.logger.error(
                              `adJoker information object is ${a}`
                            ),
                        yd()
                      );
                  }
                rd(`adJoker could not be created ${a}`);
                return yd();
              }
            },
            Cd = new vi();
          var wi = class {
              create({ cardIdx: a, fatherCardIdx: b }) {
                try {
                  return G.createElement("div", null, null, {
                    class: "ob-smartfeed-joker",
                    "data-card-idx": a,
                    "data-feed-father-idx": b,
                    "data-joker-placeholder": "",
                  });
                } catch (c) {
                  return (
                    je.error(`joker placeholder failed. error: ${c}`),
                    pd('<div class="ob-no-joker-card"></div>')
                  );
                }
              }
            },
            Dd = new wi();
          var xi = class {
              create({ cardIdx: a, fatherCardIdx: b, Oj: c }) {
                a = G.createElement("div", null, null, {
                  class: "ob-smartfeed-joker",
                  "data-card-idx": a,
                  "data-feed-father-idx": b,
                });
                c = c.selector;
                b = document.querySelector(c);
                if (null !== b)
                  return (
                    b.parentNode.removeChild(b),
                    (b.style.display = "block"),
                    a.appendChild(b),
                    a
                  );
                je.error(`joker failed - '${c}'`);
                return pd('<div class="ob-no-joker-card"></div>');
              }
            },
            yi = new xi();
          var Ad = {
            joker: (a, b, c) => {
              if (!a) je.error(`JokerCard failed - '${a.selector}'`);
              else if (a && a.selector) {
                const d = document.querySelector(a.selector);
                d
                  ? (d.style.display = "none")
                  : je.error(
                      `JokerCard failed joker selector was not found on page - selector: '${a.selector}'`
                    );
              }
              return yi.create({ cardIdx: b, fatherCardIdx: c, Oj: a });
            },
            adJoker: (a, b, c) =>
              Cd.create({
                adInfo: {
                  cardIdx: b,
                  fatherCardIdx: c,
                  adType: a.adType,
                  adId: a.adId,
                  adWidth: a.adWidth,
                  adHeight: a.adHeight,
                  adPath: a.adPath,
                  adData: a.adData,
                  adClient: a.adClient,
                  adSlot: a.adSlot,
                  adContainerWidth: a.adContainerWidth,
                  adContainerHeight: a.adContainerHeight,
                  adStyle: a.adStyle,
                },
              }),
            placeholderJoker: (a, b, c) =>
              Dd.create({ cardIdx: b, fatherCardIdx: c }),
          };
          var zi = class {
              create(a, b) {
                try {
                  a: {
                    var c = G.ma(b);
                    try {
                      if (c) {
                        var d = c.l("passbackTagSize", "300x250").split("x");
                        break a;
                      }
                    } catch (l) {}
                    d = [300, 250];
                  }
                  const [e, f] = d,
                    g = He(b, !1),
                    k = document.createElement("iframe");
                  k.style.height = `${f}px`;
                  k.style.width = `${e}px`;
                  k.style.border = "0";
                  g.parentNode.insertBefore(k, g.nextSibling);
                  g.style.display = "none";
                  k.contentWindow.document.open();
                  k.contentWindow.document.write(`
      <style> body {margin: 0;padding: 0;border: 0;font-size: 100%;font: inherit;vertical-align: baseline;}</style>
      <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
      <div id="gpt-passback">
        <script>
          window.googletag = window.googletag || {cmd: []};
          googletag.cmd.push(function() {
              googletag.defineSlot('${a}', [${e}, ${f}], 'gpt-passback')
                .addService(googletag.pubads());
              googletag.enableServices();
              googletag.display('gpt-passback');
          });
        </script>
      </div>`);
                  k.contentWindow.document.close();
                } catch (e) {
                  OBR.logger.log(e);
                }
                return pd('<div class="passback-tag"></div>');
              }
            },
            Ed = new zi();
          var Gd = [],
            Ai = class {
              constructor() {
                this.uG = !1;
              }
              A(a, b) {
                b = parseInt(b, 10);
                this.ic = a.ic();
                a.Mq() && a.Na() && Gd.push({ feedIdx: b, isSkeleton: !0 });
                this.gh = this.So();
              }
              So() {
                const a = 1 * OBR.g.R("debug-widget-stats-sample", 1e5);
                return 1 > Math.floor(Math.random() * a);
              }
              Rg(a, b) {
                const c = {};
                if (!b && !this.gh) return { lc: c, gt: {} };
                var d = a.v();
                b = window.getComputedStyle(d);
                var e = d.offsetWidth;
                d = d.offsetHeight;
                const {
                  width: f,
                  height: g,
                  outerWidth: k,
                  outerHeight: l,
                } = {
                  width: e,
                  height: d,
                  outerWidth:
                    e +
                    parseInt(b.marginLeft, 10) +
                    parseInt(b.marginRight, 10),
                  outerHeight:
                    d +
                    parseInt(b.marginTop, 10) +
                    parseInt(b.marginBottom, 10),
                };
                e = window.OB_releaseVer;
                b = OBR.monitorData;
                d = OBR.env;
                c.name = "obm-WidgetDimensions";
                c.version = e;
                c.env = d || 1;
                a = {
                  widgetName: a.D(),
                  widgetId: a.o("wnid", a.D()),
                  screenWidth: window.innerWidth,
                  screenHeight: window.innerHeight,
                  width: f,
                  height: g,
                  outerWidth: k,
                  outerHeight: l,
                  platform: a.o("readerPlatform", "desktop"),
                  feedVersion: a.o("feedVersion") || "1",
                };
                c.url = location.href;
                c.agent = navigator.userAgent.toLowerCase();
                b &&
                  ((c.sId = b.sourceId), (c.dId = b.docId), (c.pId = b.pubId));
                return { lc: c, gt: a };
              }
              Lf(a, b) {
                try {
                  if ((this.uG || this.A(a, b), this.ic)) {
                    var c = Hd(b),
                      { lc: d, gt: e } = this.Rg(a, c);
                    if (this.gh) {
                      const f = `${OBR.i.fl}/WidgetErrorMonitor/api/report`;
                      d.extra = JSON.stringify(e);
                      OBR.za.get(f, d);
                    }
                    c && Kd(e, b);
                  }
                } catch (f) {
                  OBR.error({
                    name: "SetSkeletonError",
                    message: "Could not set skeleton values",
                    e: f,
                  });
                }
              }
            },
            xe = new Ai();
          var Bi = class {
              constructor() {
                this.A();
              }
              A() {
                this.K = {};
                this.Uo = Promise.resolve();
                this.re = null;
              }
              iq(a, b) {
                this.K[a].qD = b;
              }
              bf(a) {
                return this.K[a].qD;
              }
              Ja() {
                return this.re;
              }
              Dk(a) {
                this.re = a;
              }
              Eh(a, b = L(this)) {
                this.K[b].Ip = a;
              }
              Jj(a = L(this)) {
                return this.K[a].Jj;
              }
            },
            K = new Bi();
          var ie = class {
            constructor(a, b, c) {
              this.P = G;
              const d = this.P.U().Wv;
              this.j = G.ma(a);
              this.Gf = this.j.Fb()
                ? `${d}/Multivac/api/platforms?`
                : `${d}/Multivac/api/get?`;
              this.Cb = a;
              this.cd = b;
              this.mH = c;
              this.re = this.j.Ja();
            }
            hi() {
              ge(this, nc.hi());
              return this;
            }
            gi() {
              ge(this, nc.gi(this.j));
              return this;
            }
          };
          var qe = (a, b, c) => {
            const d = parseInt(performance.now());
            $b.mark(a, "mv", "start", !0);
            return new Promise((e, f) => {
              const g = document.createElement("script");
              g.src = b;
              g.onerror = function () {
                f({ name: "multivac", message: "multivac call failed" });
                OBR.g.zh(g);
              };
              OBR.extern.returnedVacData = k => {
                k.uA = { da: a.D(), ja: c, timestamp: d };
                const l = Ph.Mk.stop().getTime();
                a.fK(l);
                e(k);
                OBR.g.zh(g);
              };
              document.body.appendChild(g);
              Ph.Mk.start();
            });
          };
          var Hi = class {
              constructor(a) {
                this.response = a;
                this.oi = a.cards
                  .map(b => {
                    switch (b.cardType) {
                      case "widget":
                        return new Ci(b);
                      case "joker":
                        return new Di(b);
                      case "adJoker":
                        return new Ei(b);
                      case "placeholderJoker":
                        return new Fi(b);
                      case "passback":
                        return new Gi(b);
                      default:
                        je.error(`card type "${b.cardType}" is not supported`);
                    }
                  })
                  .filter(b => void 0 !== b);
              }
              $() {
                const a = this.oi.filter(b => "widget" === b.$().ta);
                return {
                  Rq: a,
                  Cb: this.response.feedIdx,
                  fe: this.response.hasMore,
                  pi: this.oi,
                  nf: this.oi[this.oi.length - 1],
                  FB: [a[0], a[a.length - 1]],
                  Ip: this.response.nextFeedURL,
                };
              }
            },
            Ci = class {
              constructor(a) {
                this.W = a;
                this.timestamp = Date.now();
                this.Qj = !1;
                if ((a = this.W.response) && a.settings && a.request) {
                  var b = G.ma(a.request.feedIdx);
                  b = !!b && "None" !== b.Ut();
                  const c = "odb_dynamic_display" === a.settings.recMode,
                    d = "non_onyx" !== a.settings.OnyxServingMode,
                    e = a.settings.onyxLazyRenderViewportDistance;
                  a = "1" === a.request.fCard;
                  if ((this.Qj = 0 < e && b && d && c && a))
                    this.Xo = e ? { rootMargin: `${parseInt(e)}% 0px` } : null;
                }
              }
              fh() {
                return this.Qj;
              }
              Mj(a) {
                var b = (b =
                  this.W.response.settings &&
                  this.W.response.settings.skipCardRenderIfTimePassed)
                  ? 6e4 * b
                  : 0;
                return 0 === b ? !1 : a - this.timestamp > b;
              }
              $() {
                return {
                  ta: this.W.cardType,
                  HI: this.W,
                  html: this.W.response.html,
                  ra: this.W.response.request.widgetJsId,
                  ja: this.W.response.request.idx,
                  cardIdx: this.W.response.request.fCard,
                  fh: this.Qj,
                  Xo: this.Xo,
                  Mj: a => this.Mj(a),
                  oB:
                    this.W.response.settings &&
                    this.W.response.settings.intersectionObserverTriggerMargin,
                };
              }
            },
            Fi = class {
              constructor(a) {
                this.W = a;
              }
              $() {
                return {
                  ta: this.W.cardType,
                  Oj: this.W.response,
                  cardIdx: this.W.fCard,
                  Pc: this.W.response.callback,
                };
              }
            },
            Gi = class {
              constructor(a) {
                this.W = a;
              }
              $() {
                return { ta: this.W.cardType, pI: this.W.passbackCode };
              }
            },
            Di = class {
              constructor(a) {
                this.W = a;
              }
              $() {
                return {
                  ta: this.W.cardType,
                  Oj: this.W.response,
                  cardIdx: this.W.fCard,
                };
              }
            },
            Ei = class {
              constructor(a) {
                this.W = a;
              }
              $() {
                return {
                  ta: this.W.cardType,
                  adId: this.W.response.adId,
                  adWidth: this.W.response.adWidth,
                  adHeight: this.W.response.adHeight,
                  adPath: this.W.response.adPath,
                  adData: this.W.response.adData,
                  adClient: this.W.response.adClient,
                  adSlot: this.W.response.adSlot,
                  adType: this.W.response.adType,
                  adContainerWidth: this.W.response.adContainerWidth,
                  adContainerHeight: this.W.response.adContainerHeight,
                  cardIdx: this.W.fCard,
                  adStyle: this.W.response.adStyle,
                };
              }
            };
          var Ii = class {
              constructor(a, b) {
                this.Cb = a;
                this.xG = b;
                this.$b = Ab(Tb);
                this.ke = yb();
                this.Dm = K.K[a].Ig;
                this.pe = G.ma(a);
              }
            },
            Ji = (a, b = !1) => we(new Ii(a, b));
          var Ki = class {
              constructor() {
                this.Mu = !0;
                this.Zn = [];
                this.lk = [];
                this.Aj = !0;
              }
              Eh(a) {
                const b = a.G();
                (a.wc() || a.yc() || a.zc()) &&
                  (a = a.ba("nextFeedUrl")) &&
                  K.Eh(a, b);
              }
              Js(a) {
                const b = a.G(),
                  c = G.ma(b);
                Od(K, b) ||
                  (Pd(K, b), this.Eh(a), ze(b, c), G.U().zv || Ge(this, b, 0));
              }
              Ot(a, b) {
                a = { vg: Ji(a), qd: b };
                b = Tb;
                try {
                  if (a.vg) {
                    b.pf = yb();
                    var c = b.pf ? xb(a) : Vb(b, a);
                  } else c = xb();
                } catch (d) {
                  c = xb(a);
                }
                return c;
              }
              xf(a) {
                if (a) {
                  var b = new Hi(a).$(),
                    c = b.pi,
                    d = b.Cb,
                    e = b.FB,
                    f = b.Ip;
                  if (K.K[d]) {
                    var { Rq: g, nf: k } = b,
                      [l, q, h] = [
                        G.ma(d),
                        !Yd(K, "feedManualChunkFetch", d),
                        Yd(K, "feedLayout", d),
                      ],
                      m = JSON.parse(b.fe);
                    if (
                      l &&
                      (l.px(c.length),
                      $b.mark(l, "mv", "end", !0),
                      !Le(this, l, g, a) &&
                        (Ie(l),
                        (this.Aj = !1),
                        si(d),
                        f && K.Eh(f, d),
                        c && 0 !== c.length
                          ? (a = !1)
                          : (m && af(this, d), (a = !0)),
                        !a))
                    ) {
                      var p = Ne(c),
                        r = Ne(g),
                        t = (u, v) => {
                          u = this.Dn(u);
                          if (!u || !u.length) return [];
                          var w = Oe(this, u, d),
                            A = v;
                          v = k;
                          var D = m,
                            E = w;
                          const [I, J, V] = [
                            "2" === K.bf(d),
                            l.Pt(),
                            Yd(K, "feedLayout", d),
                          ];
                          if (I && J) {
                            w = A;
                            const R = l.Pt();
                            A = w;
                            var O = E;
                            const W = 1.1 * R,
                              Z = He(d, Yd(K, "feedLayout", d));
                            let ca = null;
                            G.ia(
                              `.ob-feed-${d}-max-height {max-height: ${W}px; overflow: hidden;} .ob-feed-${d}-max-height .ob-grid-layout .ob-widget-items-container {display:grid;}`
                            );
                            OBR.g.la(Z, `ob-feed-${d}-max-height`);
                            qi(Z, R, O) ||
                              (ca = { Rq: ef(A, O), fe: !1, EB: ff(O) });
                            OBR.g.Fa(Z, `ob-feed-${d}-max-height`);
                            if ((A = ca))
                              (w = A.Rq),
                                (v = w.slice(-1)[0]),
                                (D = A.fe),
                                (E = A.EB);
                            [A, v, D, E] = [w, v, D, E];
                          } else pi(V, d, E);
                          [v, k, m, w] = [A, v, D, E];
                          Pe(w);
                          Re(v, d, l.eE());
                          this.Oc(u, v, d);
                          return w;
                        };
                      Te(l, p, () => t(p, r));
                      a = t(c, g);
                      Me(l, a, d, m);
                      Qd(m, d, k.$());
                      Ve(this, l);
                      q && m && We(this, d, e);
                      Xe(this, d, c);
                      Vd(K, d) && Wd(K, !1, d);
                      Ze(h, d, g, m);
                      return { Cb: d, nf: k };
                    }
                  }
                }
              }
              Oc(a, b, c) {
                bf(b);
                this.Kg(b);
                cf(a, c);
              }
              Kg(a) {
                a.map(b => {
                  b = b.$().ja;
                  return G.ma(b);
                }).forEach(b => {
                  G.Kg(b, b.G());
                });
              }
              xp(a, b) {
                const c = (K.K[a] || {}).cd,
                  d = b.oB || K.K[a].OF,
                  e = G.v(b.ja);
                Be(e, "yellow");
                G.xp(e, () => Ge(this, a, c, e), { rootMargin: `${d}px 0px` });
              }
              Dn(a) {
                a = $e(a);
                return df(this, a);
              }
              Ei(a = L(K)) {
                if (G.ma(a)) {
                  ze(a, G.ma(a));
                  if (Yd(K, "feedManualChunkFetch", a)) return Je(this, a), !0;
                  rd(
                    "externalChunkLoad called but feed is not set for external chunk fetching"
                  );
                  return !1;
                }
                rd(`externalChunkLoad called but feedIdx=${a} not found`);
                return !1;
              }
              ha() {
                K.A();
              }
            },
            Li = new Ki();
          var Mi = class {
            constructor(a) {
              this.tf = [];
              this.ms = this.check.bind(this);
              this.ms();
              this.Pc = a;
            }
            observe(a) {
              this.tf.some(b => b.Aa === a) ||
                this.tf.push({
                  Aa: a,
                  size: { height: a.clientHeight, width: a.clientWidth },
                });
            }
            unobserve(a) {
              this.tf = this.tf.filter(b => b.Aa !== a);
            }
            disconnect() {
              this.tf = [];
            }
            check() {
              const a = this.tf
                .filter(b => {
                  const c = b.Aa.clientHeight,
                    d = b.Aa.clientWidth;
                  if (b.size.height !== c || b.size.width !== d)
                    return (b.size.height = c), (b.size.width = d), !0;
                })
                .map(b => b.Aa);
              0 < a.length && this.Pc(a);
              window.requestAnimationFrame(this.ms);
            }
          };
          var Ni = !!window.ResizeObserver,
            Oi = class extends Ki {
              xf(a) {
                var b = new Hi(a);
                const { pi: c, Cb: d } = b.$();
                var e = G.ma(d);
                e.px(c.length);
                $b.mark(e, "mv", "end", !0);
                Ie(e);
                si(d);
                b = JSON.parse(b.$().fe);
                if (c && 0 !== c.length) {
                  var f = !Yd(K, "feedManualChunkFetch", d),
                    g = e.l("sideElementFeedLimiter", null),
                    k = e.l("sideElementLimiterOffset", 0),
                    l = e.l("SideElementFeedLimiterFlow", null);
                  g = document.querySelector(g);
                  var q = Oe(this, c, d);
                  k = this.Dn(g, d, q, l, k);
                  gf(c, e);
                  l = hf(c, k);
                  Pe(k);
                  Re(l, d);
                  this.Oc(c, l, d);
                  k.length < q.length
                    ? (l &&
                        l.length &&
                        ((e = l[l.length - 1]), Qd(b, d, e.$())),
                      (a.cards = a.cards.slice(k ? k.length : 0)),
                      a && a.cards && Rd(d, a),
                      !b ||
                        K.Jj(d) ||
                        be(K, d) ||
                        (this.uf(g, d), ae(K, !0, d)))
                    : ((e = l[l.length - 1]),
                      (a = [l[0], e]),
                      Qd(b, d, e.$()),
                      f && b && We(this, d, a));
                  Vd(K, d) && Wd(K, !1, d);
                } else b && af(this, d);
              }
              Dn(a, b, c, d, e) {
                const f = [];
                if (null === a) return c;
                const g = Yd(K, "feedLayout", b);
                for (let l of c) {
                  ri(g, b, l);
                  c = a;
                  var k = d;
                  const q = G.v(b).parentNode,
                    h = c.getBoundingClientRect(),
                    m = q.getBoundingClientRect();
                  if (
                    (k && "copy-article-height" === k
                      ? c.clientHeight - q.clientHeight
                      : h.bottom - m.bottom) <
                    -1 * e
                  ) {
                    l.parentNode.removeChild(l);
                    break;
                  }
                  f.push(l);
                }
                return f;
              }
              uf(a, b) {
                try {
                  const c = a.offsetHeight,
                    d = OBR.We(f => {
                      ce(K, b);
                      for (let k of f)
                        if (
                          (k.offsetHeight || k.contentRect.height) >
                          1.1 * c
                        ) {
                          e.unobserve(a);
                          f = b;
                          var g = K;
                          g = f ? g.K[f].mw : void 0;
                          g ? this.xf(g) : Ge(this, f, Sd(f), null);
                        }
                    }, 500),
                    e = Ni ? new window.ResizeObserver(d) : new Mi(d);
                  e.observe(a);
                } catch (c) {
                  OBR.logger.log(c);
                }
              }
              Ot(a, b) {
                a = { vg: Ji(a, !0), qd: b };
                return xb(a);
              }
            },
            Pi = new Oi();
          var Qi = class {
              A(a) {
                const b = a.pe.l("sideElementFeedLimiter", null);
                b && document.querySelector(b) ? ye(Pi, a) : ye(Li, a);
              }
              Ei(a) {
                return Li.Ei(a);
              }
              uk(a, b) {
                return Ee(Li, a, b);
              }
              ha() {
                Li.ha();
                Pi.ha();
              }
            },
            Ri = new Qi();
          var Si = class {
              A() {
                try {
                  kf(this);
                } catch (a) {
                  OBR.g.fd("obm-gpp_fail", document.location.hostname, !1, 100);
                }
              }
            },
            Ti = new Si();
          OBR.controller =
            OBR.controller ||
            (function () {
              var a,
                b = {},
                c = {},
                d = { iO: "" },
                e = !0,
                f,
                g = !1;
              b.Pv = "manualDataReady";
              b.fp = "manualClickReady";
              var k = !1;
              b.A = function (h) {
                a = h = h || OBR;
                f = new a.Wb();
                c.mf();
                b.xF();
                c.TG() && (c.sj = new fi());
              };
              b.Zw = function () {
                c.HC();
                a.$a.aI(c.UL);
                a.display.wf(b.Oc);
                a.i.SF && c.rH();
                a.i.tq && c.wH();
                Jh.isEnabled && OBR.s.IF();
                OBR.i.Zj && c.Iv();
                b.RK()
                  ? (b.Ns = setTimeout(() => {
                      OBR.$a.Ji();
                      g = !0;
                      new OBR._jsc.ni(null, h => h.gz).B.Jy.fire({});
                    }, 2e3))
                  : a.$a.Ji();
              };
              b.bb = function () {
                return c;
              };
              b.SD = function () {
                return f;
              };
              b.bJ = function (h) {
                f.add("onHtmlReturn", h);
              };
              b.gJ = function (h) {
                f.add("onWidgetRendered", h);
                OBR.F &&
                  OBR.F.length &&
                  OBR.F.forEach(m => {
                    "function" === typeof h && m.kc() && h(m);
                  });
              };
              b.dJ = function (h) {
                f.add("noRecs", h);
              };
              c.Oh = function (h) {
                if (
                  OBR.i.Oh &&
                  a.i.Yb !== a.i.ll &&
                  a.i.Yb !== a.i.er &&
                  !a.i.M &&
                  document.querySelectorAll &&
                  h &&
                  (h = h.v())
                ) {
                  h = OBR.g
                    .H(h)
                    .querySelectorAll(
                      ".ob-dynamic-rec-link,A.item-link-container,DIV.item-container > A:first-child,.odb_li .rec-link"
                    );
                  for (let m = 0; m < h.length; m++) {
                    const p = h[m],
                      r = p.getAttribute("onmousedown");
                    r && p.setAttribute("ontouchstart", r);
                  }
                }
              };
              b.qB = function (h) {
                h = a.F[h];
                fd(h) && dd(h);
              };
              b.Oc = function (h) {
                a.logger.log("rec " + h + " was rendered");
                var m = a.F[h];
                m.Od(!0);
                -1 < m.l("recMode", "").indexOf("dynamic") ||
                  k ||
                  (a.g.SJ(), (k = !0));
                let p = { email: "do-not-reply@outbrain.com", wG: !1 };
                const r = OBR._jsc.hh("testPageInputExternalHelper");
                r &&
                  ((p.isInternal = !0),
                  (p.email = r.getAttribute("email")),
                  (OBR.i.Da = p));
                0 === h && (OBR.Hd.update(m), c.vH(m));
                c.lJ(m);
                Uf(m);
                c.bF(m);
                a.g.lB(m);
                a.display.LF(m);
                b.pw(m);
                c.HL(m);
                c.FL(m);
                c.Oh(m);
                c.FI(m);
                c.wF(m);
                c.wJ(m);
                c.sH(m);
                c.tD(m);
                c.UB(m);
                jd(m);
                c.UA(m);
                c.fH(m) && OBR.Ha.Xb(m);
                OBR.Hd.update(m);
                di(m);
                fd(m) && OBR._jsc.cd.XI(m);
                c.su(m);
                c.vF(m);
                setTimeout(() => {
                  ki.Ib(m);
                }, 1e3);
              };
              c.su = (h, m = !0) => {
                m = m ? h.l("restoreOriginalUrlAfterClick", !1) : !0;
                const p = h.l("showOriginalUrl", !0);
                m &&
                  p &&
                  (h = h.v()) &&
                  h.querySelectorAll(".ob-dynamic-rec-link").forEach(r => {
                    const t = r.href;
                    r.addEventListener("mouseup", () => {
                      setTimeout(() => {
                        r.href = t;
                      }, 250);
                    });
                    r.addEventListener("mouseover", () => (r.href = t));
                  });
              };
              c.vF = h => {
                var m = ["NonRedirect", "ProgrammaticRedirect"].includes(
                  h.l("clickRecordingMethod", "HrefRedirect")
                );
                const p = h.l("showOriginalUrl", !0);
                m &&
                  p &&
                  h.Eo() &&
                  (m = h.v()) &&
                  Array.from(
                    OBR.g.H(m).querySelectorAll(".ob-dynamic-rec-link")
                  ).forEach(r => {
                    const t = r.getAttribute("data-obUrl");
                    if (t) {
                      let u = r.getAttribute("target");
                      u || (u = a.i.Zc ? "_top" : "_self");
                      r.addEventListener("click", v => {
                        v.stopPropagation();
                        v.preventDefault();
                        "_self" === u
                          ? (window.location.href = t)
                          : "_top" === u
                          ? window.open(t, "_top")
                          : window.open(t, "_blank");
                        return !1;
                      });
                      r.addEventListener("contextmenu", () => {
                        r.href = t;
                      });
                      h.l("restoreOriginalUrlAfterClick", !1) || c.su(h, !1);
                    }
                  });
              };
              c.lJ = h => {
                h.Na() && OBR.display.kJ(h);
              };
              c.tD = h => {
                try {
                  const m = [
                      h.l("afterRenderCallback", null),
                      "OBBridge.widgetEvents.rendered",
                    ]
                      .filter(r => r)
                      .filter((r, t, u) => u.indexOf(r) === t),
                    p = h.v();
                  m.forEach(r => {
                    null !== r &&
                      OBR.g.jF(r) &&
                      (r = r.split(".").reduce((t, u) => t[u], window)) &&
                      setTimeout(r.bind(null, p), 0);
                  });
                } catch (m) {}
              };
              c.bF = function (h) {
                h.ba("eventTrackers") && OBR.Fg.Un(h);
              };
              b.Bh = function (h, m) {
                OBR.proxy.uH(h, OBR.s.u.nr, m);
              };
              c.wJ = function (h) {
                if (!h.Na()) {
                  var m = OBR.fraudDetection;
                  switch (Ba() ? h.l("fraudDetection", "0") : "0") {
                    case "2":
                      1 !== m.ob ||
                        m.Go ||
                        m.Go ||
                        ((m.Go = !0), (m.If = m.sn), ig());
                      break;
                    case "4":
                      mg(h);
                      break;
                    case "5":
                      mg(h);
                      break;
                    case "7":
                      m.ij = 103569;
                    case "6":
                      lg(h, m.ij);
                  }
                }
              };
              c.FL = function (h) {
                h.SK() &&
                  (b.Bh(h, m => {
                    OBR._jsc.Uh(m.currentWidget, m.beforeLoadTime);
                  }),
                  "2" == h.o("feedVersion", null) && (h = h.Y()) && h.jq());
              };
              c.FI = function (h) {
                ((OBR.i.Da && OBR.i.Da.isInternal) ||
                  (h.ba("publisherTools") && !a.i.mf)) &&
                  a.s.N(
                    a.s.u.Fl,
                    function (m) {
                      OBR.Bw.A(m);
                    },
                    this,
                    h
                  );
              };
              c.HC = function () {
                a.i.eG && a.s.N(a.s.u.Yq, () => {});
              };
              c.TG = () => {
                const h = OBR.i.Zc || !0 === window["intervention-debug"];
                return OBR.i.Yb === OBR.i.ll && h;
              };
              c.fH = h =>
                !h.Mo() &&
                !h.uo() &&
                !h.yo() &&
                !h.sv() &&
                !h.ov() &&
                !h.Lo() &&
                !h.zj() &&
                !h.Hj();
              c.RA = h => {
                const m = h.xc();
                if (m) {
                  const p = h.v();
                  if (p) {
                    const r = h.df();
                    Array.from(
                      OBR.g.H(p).querySelectorAll(".ob-dynamic-rec-container")
                    ).forEach(t => {
                      t = t.getAttribute("data-pos");
                      r.listings || (r.listings = {});
                      r.listings[t] || (r.listings[t] = {});
                      r.listings[t].clickPixels ||
                        (r.listings[t].clickPixels = []);
                      r.listings[t].clickPixels.push(m);
                      h.Ck(r);
                    });
                  }
                }
              };
              c.wF = function (h) {
                c.RA(h);
                h.hF() && b.ei(h);
              };
              b.ei = function (h) {
                var m = h.v();
                if (
                  m &&
                  (m = OBR.g.H(m).querySelectorAll(".ob-dynamic-rec-container"))
                ) {
                  m = Array.from(m);
                  var p = h.G();
                  m.forEach(r => {
                    const t = r.getAttribute("data-pos");
                    (r = r.querySelector(".ob-dynamic-rec-link")) &&
                      r.addEventListener("click", b.Xx.bind(this, r, p, t));
                  });
                }
              };
              c.sH = function (h) {
                var m = () => {
                  window.OB_EXTERNAL_SCRIPT_LOADED &&
                    window.OB_EXTERNAL_SCRIPT_LOADED(h.v());
                };
                if (h && "" !== h.l("afterRenderScript", "")) {
                  const p = h.l("afterRenderScript", ""),
                    r = t => {
                      t = a.g.Ta(0, OBR.i.TL + "/" + t, !0, !1, m, {
                        class: "ob-after-render-script",
                      });
                      OBR.g.Pb(t);
                    };
                  try {
                    0 === p.indexOf("[") && p.indexOf("]") === p.length - 1
                      ? JSON.parse(p).forEach(t => r(t))
                      : r(p);
                  } catch (t) {
                    OBR.error({
                      name: "ConversionPixelError",
                      message: "Could not parse input string",
                    });
                  }
                }
              };
              c.kE = function (h) {
                const m = h.v(),
                  p = h.$c() && h.Eo();
                return {
                  PL: m,
                  QG: p,
                  OC: r => {
                    if (p) return Tg(m, r);
                  },
                };
              };
              c.HL = function (h) {
                var m = h.ba("viewability", null);
                if (m) {
                  const { PL: t, QG: u, OC: v } = this.kE(h);
                  for (var p in m)
                    if (m.hasOwnProperty(p))
                      if (OBR.Lb(p)) {
                        var r = OBR.Lb(p).parentElement;
                        h = r && v(r);
                        Ug(r);
                        const w = OBR._jsc.mh();
                        r = OBR.g.Ta(0, m[p], !0, !1);
                        u && h
                          ? (h.appendChild(r), w.appendChild(h), OBR.g.ff(w, t))
                          : OBR.g.insertBefore(r, OBR.Lb(p));
                      } else
                        OBR.error({
                          name: "ViewabilityPixelError",
                          message:
                            "Missing viewabilty pixel placeholder element",
                        });
                }
              };
              b.pw = function (h, m = !1) {
                var p = h.l("recMode", ""),
                  r = h.l("dynamicWidgetLayout", "");
                (m ||
                  (h.Ba() && -1 < p.indexOf("top-box")) ||
                  (-1 < p.indexOf("bottom-box") &&
                    -1 === p.indexOf("bottom-box-vertical")) ||
                  ("odb_dynamic" === p && -1 < r.indexOf("top-box")) ||
                  -1 < p.indexOf("odb_dynamic_swipe") ||
                  -1 < p.indexOf("odb_dynamic_smartfeed-swipe")) &&
                  OBR.s.N(
                    OBR.s.u.Al,
                    function (t) {
                      OBR.Kd.mp(t);
                    },
                    this,
                    h
                  );
              };
              c.kN = function (h) {
                return Math.floor(Math.random() * h) + 1;
              };
              c.eH = h => {
                h.hasAttribute("data-widget-id") &&
                  (h.getAttribute("data-widget-id").match(/^([A-Z-0-9-_]+)$/) ||
                    OBR.logger.log(
                      `Bad widget id "${h.getAttribute("data-widget-id")}"`
                    ));
                if (h.hasAttribute("data-ob-user-id")) {
                  let m = h.getAttribute("data-ob-user-id");
                  "" === m &&
                    ((m = "null"), h.setAttribute("data-ob-user-id", "null"));
                  if (-1 < m.indexOf("{") || -1 < m.indexOf("}"))
                    return (
                      OBR.logger.log(
                        `Bad user id "${h.getAttribute("data-ob-user-id")}"`
                      ),
                      !1
                    );
                }
                return !0;
              };
              c.UL = function (h) {
                a.logger.log("widget was found");
                if (c.eH(h)) {
                  var m = a.Sh.lg(h);
                  f.fire("widgetObjectCreated", [m]);
                  !0 === m.iG()
                    ? a.logger.log("Dynamic loader - stop odb!")
                    : c.fJ(h, m);
                } else OBR.$a.qL(h);
              };
              c.fJ = (h, m) => {
                const p = m.Nj();
                if (id.Gd(m) && !p) hd(id, h, m);
                else {
                  if (!p) {
                    if (OBR._jsc.B("widgetLazyLoad")) {
                      c.oj(h, m);
                      return;
                    }
                    h = OBR._jsc.B("widgetsLevelLazyLoad");
                    if (0 < (null == h ? void 0 : h.length)) {
                      c.io(m, h);
                      return;
                    }
                  }
                  OBR.wa.register(m);
                }
              };
              c.io = (h, m) => {
                const p = h.D();
                let r;
                d[m]
                  ? (r = d[m])
                  : ((r = m
                      .split(",")
                      .map(t => t.trim())
                      .filter(t => t)),
                    (d[m] = r));
                r.includes(p) ? id.io(h) : OBR.wa.register(h);
              };
              c.oj = (h, m) => {
                id.Ib();
                id.oj();
                hd(id, h, m);
              };
              c.UA = h => {
                var m = h.v();
                m &&
                  !a.i.mf &&
                  (m = OBR.g
                    .H(m)
                    .querySelectorAll(
                      ".ob-dynamic-rec-link,a.item-link-container,div.item-container > a:first-child,.odb_li .rec-link"
                    )) &&
                  m.length &&
                  m.forEach(p => {
                    p.addEventListener("click", () => {
                      OBR._jsc.rf(h.B);
                      c.VA(p);
                    });
                  });
              };
              c.VA = h => {
                const m = `${"&ucid="}${OBR.g.bj(8)}`;
                if (0 < h.href.indexOf("&ucid=")) {
                  const p = h.href,
                    r = p.indexOf("&ucid=");
                  h.href = h.href.replace(p.substring(r, r + 6 + 8), m);
                } else h.href += m;
              };
              c.UN = h => {
                (OBR.widgetDelayInterval || 0 === OBR.widgetDelayInterval) &&
                  new OBR.dataBI(h, m => m.Ky).B.bA.fire({
                    interval: OBR.widgetDelayInterval,
                  });
              };
              c.ws = function (h) {
                let m = h.o("widgetJsId", null);
                h.D() !== m && h.GK(m);
              };
              b.hB = h => {
                f.add("widgetObjectCreated", h);
              };
              b.iw = function (h, m) {
                var p = "NA",
                  r = h && h.response ? h.response : null;
                var t = a.g.pE(m);
                (t && t.kc()) ||
                  (t && (t.setData(h), t.sx(), c.ws(t)),
                  r &&
                    r.request &&
                    r.request.widgetJsId &&
                    (p = r.request.widgetJsId),
                  r && r.request && r.request.seid && t.nq(r.request.seid),
                  a.wa.Bx(t.o("t", null), t.Fb()),
                  a.wa.unlock(m, p),
                  a.g.gw(t),
                  t &&
                    r &&
                    r.documents &&
                    (t.Od(!0),
                    Uf(t),
                    t.l("FireImpressionPixelsForJSAPI", !1) &&
                      (r.documents.doc = b.AD(r.documents)),
                    (p =
                      h &&
                      h.response &&
                      h.response.settings &&
                      h.response.settings.recMode),
                    (r.documents.req_id =
                      ("odb_video" === p || "odb_video_backfill" === p) &&
                      h &&
                      h.response.request &&
                      h.response.request.req_id),
                    (h = Object.assign({}, r.documents)),
                    b.vD(b.Pv, m, t.D(), h)),
                  c.tu(t),
                  a.wa.fire());
              };
              b.AD = function (h) {
                return OBR.Fg.Sn(h);
              };
              b.vD = function (h, m, p, r) {
                f.fire(h + m + p, [r, m], !0);
              };
              b.hn = function (h) {
                f.fire(h);
              };
              b.cJ = function (h, m, p, r) {
                f.add(h + m + p, r);
              };
              b.hp = function (h, m) {
                if (null !== h) {
                  var p = 0;
                  p = h.permalink;
                  var r = h.widgetId,
                    t = a.Xa.PC(h);
                  if (
                    (h.videoId ||
                      (p && "string" === typeof p) ||
                      h.contentUrl ||
                      h.bundleUrl ||
                      h.portalUrl) &&
                    r &&
                    "string" === typeof r
                  ) {
                    a.logger.log("manual Odb call");
                    p = b.BH(h);
                    t.idx = p;
                    t.isManualWidget = !0;
                    h.portalUrl &&
                      (t.language =
                        (OBR.F[h.originWidgetIdx] &&
                          OBR.F[h.originWidgetIdx].Ng()) ||
                        "en");
                    if ((r = yh(h)))
                      (t.consentString = r.consentString),
                        (t.consentVersion = r.consentVersion),
                        (t.userId = r.userId);
                    r = a.Sh.Km(t);
                    if (100 < p && 120 >= p) {
                      h.lang = r.Ng();
                      try {
                        r.mK(JSON.stringify(h));
                      } catch (v) {
                        OBR.error({
                          name: "obm-ManualOdbWithInvalidRequestData",
                          message: `request for widget ${p} has invalid request data`,
                        });
                      }
                    }
                    a.i.yt(t);
                    const u = {};
                    h.maxNumAds && (u.maxNumAds = h.maxNumAds);
                    h.maxNumOrganicRecs &&
                      (u.maxNumOrganicRecs = h.maxNumOrganicRecs);
                    t = Object.keys(u)
                      .map(v => v + "=" + encodeURIComponent(u[v]))
                      .join("&");
                    r.gK();
                    t && r.hq(t);
                    c.$A(r);
                    a.rf[p] = r;
                    b.cJ(b.Pv, p, r.D(), m);
                    "number" === typeof h.originWidgetIdx &&
                      l(r, OBR.F[h.originWidgetIdx]);
                    a.wa.register(r);
                  }
                }
              };
              c.$A = h => {
                if (h.Y && h.Y()) {
                  const m = h.Y();
                  m.Og && m.Og() && h.wx(m.Og());
                }
              };
              b.BH = function (h) {
                var m = 0,
                  p = a.i,
                  r = !1;
                if (h.videoId) return 0;
                var t =
                  h.permalink || h.contentUrl || h.bundleUrl || h.portalUrl;
                let u = null;
                "number" === typeof h.originWidgetIdx &&
                  ((r = OBR.F[h.originWidgetIdx]),
                  (r = (null == r ? void 0 : r.Y()) || r) &&
                    (u = r.Fb() ? r.wc() || r.yc() || r.zc() : r.Ja()));
                p.gp = !0 === h.continuousIdx;
                r = null === p.Jd && 0 === a.F.length;
                r ||
                  (null === p.Jd &&
                    ((h = a.F.find(v => v && v.Ja)), (p.Jd = h.Ja())),
                  b.bw(p.Jd) !== b.bw(t) && !0 !== p.gp && u !== t) ||
                  (0 === p.le && (p.le = 100), (m = p.le + 1));
                p.Jd = t;
                return (p.le = m);
              };
              b.bw = h => {
                try {
                  if (h) return new URL(h).toString();
                } catch (m) {}
                return h;
              };
              b.qf = function (h, m) {
                "function" === typeof m && f.add(b.fp, m);
                if (null !== h && h.link && "string" === typeof h.link) {
                  m = h.link;
                  a.logger.log("manual Click");
                  if (null !== m.match(/http(s)?:\/\/.+outbrain.com/i))
                    h.openInWindow
                      ? (window.top.location.href = m)
                      : ((h = m.split("?")),
                        (h = `${h[0]}?noRedirect=true&${h[1]}`),
                        a.i.Pk ? navigator.sendBeacon(h) : a.g.zB(h));
                  else throw "Wrong redirect link: " + m;
                  f.fire(b.fp);
                  Ta(f, b.fp);
                }
              };
              c.qv = function (h) {
                return h.l("stopRater", !1);
              };
              b.vf = function (h, m) {
                var p;
                OBR.logger.log("HTML returned");
                m = c.ph(m);
                if ((p = a.F[m])) {
                  $b.mark(p, "mv", "end");
                  fd(p) && dd(p);
                  var r = Ph.Mk.stop().getTime();
                  p.yx(r);
                  0 >= p.ME(h) && f.fire("noRecs", [p]);
                  p.kc()
                    ? b.ot(p)
                    : (p.setData(h),
                      b.xx(p),
                      p.Cx(),
                      p.nq(),
                      p.AK(),
                      p.sx(),
                      OBR.display.eF(p),
                      c.ws(p),
                      p.mx(),
                      (h = !0 === p.o("oo", !1)),
                      0 === m &&
                        (b.oK(p), h || (OBR.extern.pvId = p.o("pvId", null))),
                      p.Vc(!0) && e && (OBR.Ke.test(), (e = !1)),
                      (h = p.Fb()),
                      a.wa.Bx(p.o("t", null), h),
                      c.ZE(OBR.wa.du(h)),
                      (a.i.M =
                        "mobile" === p.o("readerPlatform", "desktop") ||
                        a.i.qG),
                      (a.i.pk = p.o("readerPlatform", "desktop")),
                      (a.i.sessionId = p.ej()),
                      c.tu(p),
                      b.pt(p, m),
                      c.aH(p) || c.qv(p) || p.pv() || c.iH(p.Ad())
                        ? Uf(p)
                        : (a.wa.LJ(p.l("apv", !1)),
                          this.Nu(p) && !Xb(p) && this.pF(p),
                          p.Ro()
                            ? (f.add(`widgetLazyRender_${m}`, () => {
                                b.gv(p) ? b.Ah(m) : b.hu(p);
                                b.Tn(p);
                              }),
                              p.Nj() && c.Gz(p))
                            : (b.gv(p) ? b.Ah(m) : b.hu(p), b.Tn(p)),
                          Ff(p.B)),
                      b.ot(p),
                      0 === m && c.sj && c.sj.Lf(p),
                      0 === m && xa && xa.Lf(p),
                      c.YB(p));
                } else
                  a.logger.log("odbHtmlReturned : Widget not found"),
                    OBR.error({
                      name: "obm-WidgetNotFound",
                      message: `Widget not found for idx ${m}`,
                    });
              };
              c.ZE = h => {
                OBR.wa.tK({ t: h });
              };
              c.tu = h => {
                0 === h.G() && h.l("widgetLazyLoad", !1) && id.oj(h);
              };
              b.xx = h => {
                OBR.ren = h.ba("ren");
              };
              c.aH = h => {
                if (!h) return !1;
                const m = h.l("tracking", !1);
                h = "2" === h.o("feedVersion", null);
                return m && h;
              };
              b.oK = function (h) {
                if (h) {
                  const m = h.o("pid", "0"),
                    p = h.o("sid", "0");
                  h = h.o("did", "-1");
                  OBR.monitorData = { pubId: m, sourceId: p, docId: h };
                }
              };
              b.pt = function (h, m) {
                f.fire("odbRtn_" + h.D(), [h]);
                f.fire("odbRtn_" + m, [h]);
                f.fire("onHtmlReturn", [h], !1, h);
              };
              b.Tn = function (h) {
                c.rC(h);
                c.pC(h);
                c.aC(h);
                c.SB(h);
                c.oC(h);
                c.qC(h);
                c.cC(h);
                c.iC(h);
                c.OB(h);
                c.eC(h);
                c.RB(h);
                c.lC(h);
                c.bC(h);
                c.XB(h);
                c.QB(h);
                c.gC(h);
                c.kC(h);
                c.mC(h);
                c.nC(h);
                c.PB(h);
                c.ZB(h);
                c.jC(h);
                c.fC(h);
                c.$B(h);
                c.WB(h);
                c.VB(h);
                OBR.tl.lg(h);
                if (!h.uo()) {
                  var m = Wh(h);
                  m &&
                    (h.l("isCTARequired", !1)
                      ? m.some(Xh) && m.forEach(Yh)
                      : m.filter(Xh).forEach(Yh));
                }
                c.hC(h);
                c.TB(h);
                c.NB(h);
                c.MB(h);
                c.LB(h);
              };
              b.Nu = h => !h.Ba() && h.Na();
              b.pF = h => {
                (h = h.v()) &&
                  h.style.setProperty("visibility", "hidden", "important");
              };
              c.ph = function (h) {
                return 1e3 > h ? h : h % 1e3;
              };
              c.iH = function (h) {
                var m = !1;
                null !== h.match(/(<\/?met|<\/?scr)/i) &&
                  ((m = !0), a.logger.log("SECURITY"));
                return m;
              };
              b.ot = function (h) {
                c.qv(h) || (a.wa.unlock(h.G(), h.D()), a.wa.fire());
              };
              c.pC = function (h) {
                h.Na() &&
                  (h.Oo() || h.nv()) &&
                  OBR.logger.log(
                    " -- WARNING: Smartfeed blocked because topbox/sklander are enabled! Please check widget settings -- "
                  );
                !a.i.M && h.cH() && h.nv()
                  ? a.s.N(
                      a.s.u.ag,
                      function (m) {
                        a.Ix.A(m);
                      },
                      this,
                      h
                    )
                  : h.Oo() &&
                    a.s.N(
                      a.s.u.Ol,
                      function (m) {
                        a.Sd.A(m);
                      },
                      this,
                      h
                    );
                h.hH() &&
                  a.s.N(
                    a.s.u.Tl,
                    function (m) {
                      OBR.py.A(m);
                    },
                    this,
                    h
                  );
                !h.Na() || (h.Oo() && !h.Qu()) || q(h);
              };
              c.aC = function (h) {
                const m = new li();
                if (h && "1" === h.dE()) {
                  var p = h.Ut();
                  var r = h.GG();
                  p = p.includes("ATF") && r && (h.Qo() || h.yo()) && !OBR.i.cb;
                } else p = !1;
                p && (OBR.g.la(h.v(), "ob-onyx ob-onload"), m.A(h));
              };
              c.oC = function (h) {
                const m = h.l("readMoreButtonPlatform", "mobile"),
                  p = !0 === h.l("isReadMoreEnabled", !1);
                ({ mobile: OBR.i.M, desktop: !OBR.i.M, all: !0 })[m] &&
                  p &&
                  OBR.s.N(OBR.s.u.ai, r => OBR.Va.A(r), this, h);
              };
              c.vH = function (h) {
                if (h && h.l("loadPermiterX", !1) && !window._pxAppId) {
                  h = h.o("pvId", null);
                  let m = OBR._jsc.S("script");
                  m.type = "text/javascript";
                  m.innerText =
                    '(function(){ window._pxAppId = "PX7C4UXGxx";' +
                    `window._pxParam1 = "${h}";` +
                    'var p = document.getElementsByTagName("script")[0],s = document.createElement("script");s.async = 1;s.src = "//client.px-cloud.net/PX7C4UXGxx/main.min.js";p.parentNode.insertBefore(s,p);}());';
                  ih("head")[0].appendChild(m);
                }
              };
              c.rC = function (h) {
                h.Ba() &&
                  a.i.M &&
                  h.Mo() &&
                  3 === h.l("dynamicDynamicLayoutVersion", 3) &&
                  a.s.N(
                    a.s.u.Nl,
                    function (m) {
                      a.yq.A(m);
                    },
                    this,
                    h
                  );
              };
              c.qC = function (h) {
                h.Ba() &&
                  h.uo() &&
                  a.s.N(
                    a.s.u.hl,
                    function (m) {
                      a.ka.A(m);
                    },
                    this,
                    h
                  );
              };
              c.iC = function (h) {
                h.Ba() &&
                  h.UG() &&
                  a.s.N(
                    a.s.u.Ll,
                    function (m) {
                      a.Gx.A(m);
                    },
                    this,
                    h
                  );
              };
              c.OB = function (h) {
                h.Ba() &&
                  h.$F() &&
                  OBR.s.N(
                    OBR.s.u.kl,
                    function (m) {
                      OBR.Sa.A(m);
                    },
                    this,
                    h
                  );
              };
              c.RB = function (h) {
                h.Ba() &&
                  h.jG() &&
                  OBR.i.Oh &&
                  OBR.s.N(
                    OBR.s.u.ol,
                    function (m) {
                      OBR.Us.A(m);
                    },
                    this,
                    h
                  );
              };
              c.cC = function (h) {
                h.o("obPerformance") && ((OBR.i.Zj = !0), c.Iv());
              };
              c.eC = function (h) {
                h.Ba() &&
                  h.JG() &&
                  a.s.N(
                    a.s.u.Dl,
                    function (m) {
                      a.rw.A(m);
                    },
                    this,
                    h
                  );
              };
              c.XB = function (h) {
                h.Ba() &&
                  h.sG() &&
                  OBR.s.N(
                    OBR.s.u.Yf,
                    function (m) {
                      OBR.gu.A(m);
                    },
                    this,
                    h
                  );
              };
              c.bC = function (h) {
                h.Ba() &&
                  h.HG() &&
                  OBR.s.N(OBR.s.u.Bl, m => OBR.Ep.A(m), this, h);
              };
              c.lC = function (h) {
                h.Ba() &&
                  h.sv() &&
                  OBR.s.N(
                    OBR.s.u.dg,
                    function (m) {
                      OBR.timeline.A(m);
                    },
                    this,
                    h
                  );
              };
              c.QB = h => {
                h.Ba() &&
                  h.yo() &&
                  OBR.s.N(OBR.s.u.nl, m => OBR.Rs.A(m), this, h);
              };
              c.hC = h => {
                h.hh() && OBR.s.N(OBR.s.u.Ml, m => OBR.Fx(m), this, h);
              };
              c.TB = h => {
                const m = h.l("tracking", !1);
                b.Nu(h) ||
                  0 !== h.o("tcr", 0) ||
                  m ||
                  ma.fire(Object.assign({}, h.B.Wa, qf("norecs")));
              };
              c.gC = h => {
                h.Ba() &&
                  h.Ec() &&
                  (h.LG()
                    ? OBR.s.N(OBR.s.u.Il, m => OBR.Nw.A(m), this, h)
                    : OBR.s.N(OBR.s.u.Hl, m => OBR.Mw.A(m), this, h));
              };
              c.kC = h => {
                h.Ba() &&
                  h.Lo() &&
                  OBR.s.N(OBR.s.u.cg, m => OBR.Jb.A(m), this, h);
              };
              c.mC = h => {
                h.Ba() &&
                  h.vG() &&
                  OBR.s.N(OBR.s.u.Rl, m => OBR.Er.A(m), this, h);
              };
              c.UB = h => {
                h.mG() && OBR.s.N(OBR.s.u.Xf, m => OBR.hr.A(m), this, h);
              };
              c.MB = h => {
                if (h.UF()) {
                  var m = !h.o("oo", !1),
                    p = h.Vc(!0);
                  m && p && OBR.s.N(OBR.s.u.il, r => OBR.Me.tF(r), this, h);
                }
              };
              c.LB = h => {
                if (h.bG(h)) {
                  var m = !h.o("oo", !1),
                    p = h.Vc(!0);
                  m && p && OBR.s.N(OBR.s.u.rl, r => OBR.Aw.A(r), this, h);
                }
              };
              c.nC = h => {
                fd(h) &&
                  OBR.s.N(OBR.s.u.ci, m => OBR.Rh.A(OBR._jsc.cd, m), this, h);
              };
              c.PB = h => {
                h.Ba() &&
                  h.iF() &&
                  OBR.s.N(OBR.s.u.ml, m => OBR.clip(m), this, h);
              };
              c.YB = h => {
                const m = h.l("distanceMeasureRate", 0);
                (OBR.i.xt || 0 < m) &&
                  OBR.s.N(OBR.s.u.sl, () => OBR.jr.A(h), this, h);
              };
              c.NB = h => {
                var m = h.Y();
                const p = (null == m ? void 0 : m.D()) || h.D();
                var r = OBR.De && OBR.De[`${p}`] && OBR.De[`${p}`].vl;
                if (h.D() !== (null == m ? void 0 : m.D()) && !r) {
                  m = h.o("pl", null);
                  r = h.o("vl", null);
                  var t = h.o("cl", null);
                  (m || r || t) &&
                    OBR.s.N(OBR.s.u.Vl, () => OBR.Fr.A(h, p), this, h);
                }
              };
              c.SB = h => {
                OBR.i.nu && h.Ou() && (h.Pu() ? OBR.ct(h) : h.ub(P.Ya.S.lz));
              };
              c.ZB = h => {
                h.kF() && OBR.s.N(OBR.s.u.xl, () => OBR.Qb.um(h), this);
              };
              c.jC = h => {
                h.ov() && OBR.s.N(OBR.s.u.bg, () => OBR.Nx.A(h), this);
              };
              c.fC = h => {
                h.Hj() && OBR.s.N(OBR.s.u.$f, () => OBR.Ew.A(h), this);
              };
              c.$B = h => {
                h.CG() &&
                  h.Ba() &&
                  OBR.s.N(OBR.s.u.yl, () => OBR.Uv.A(h, h.Gt()), this);
              };
              c.WB = h => {
                if (h.zj()) {
                  const m = h.En();
                  Jc.A(h, m);
                }
              };
              c.VB = h => {
                if (h.Wu()) {
                  const m = h.Fn();
                  Nc(h, m);
                }
              };
              c.mf = function (h) {
                a.i.mf &&
                  a.s.N(
                    a.s.u.Ul,
                    function () {
                      a.sy.A();
                      a.ty.A();
                    },
                    this,
                    h
                  );
              };
              c.rH = function () {
                const h = a.g.Ta(
                  0,
                  "//widgets.outbrain.com/adngin/adngin.js",
                  "true"
                );
                OBR._jsc.Q.head.appendChild(h);
              };
              c.wH = function () {
                const h = a.g.Ta(
                  0,
                  "//widgets.outbrain.com/tnt/sst.js",
                  "true"
                );
                OBR._jsc.Q.head.appendChild(h);
              };
              b.gv = function (h) {
                return !(h.Uu() || h.zj() || h.Ho());
              };
              b.hu = function (h) {
                h.Uu() && a.display.HF(h);
              };
              b.Ah = function (h) {
                h = a.F[h];
                a.display.Ah(h);
                Ub(h);
                a.logger.log("HTML - Render");
                b.vh(h);
                b.iJ(h);
              };
              b.mJ = (h, m) => {
                Tb.remove(m);
                a.display.jJ(h, m);
                a.logger.log("HTML - GNR Render");
                b.vh(m);
              };
              b.iJ = function (h) {
                h.Ec() || b.Ff(h);
              };
              b.Ff = function (h) {
                if (!0 === h.ba("inlineNVP", !1)) {
                  var m = {};
                  m.platform = a.i.pk;
                  m.lang = h.o("lang", "en");
                  m.uuid = h.o("lsd", null);
                  m.publisherId = h.o("pid", null);
                  m.sourceId = h.o("sid", null);
                  m.widgetNumberId = h.o("wnid", null);
                  m.location = h.o("gl", "");
                  m.timestamp = h.Ug();
                  m.widgetID = h.o("widgetJsId", h.D());
                  m.reqID = h.o("req_id", "-1");
                  m.pvId = h.o("pvId", "-1");
                  m.obcnst = h.o("obcnsnt", !0);
                  m.did = h.o("did", null);
                  m.gdpr = h.o("gdpr", 0);
                  m.cnsnt = h.o("cnsnt", null);
                  m.abTestVal = h.zd() || h.o("abTestVal", "no_abtest");
                  m.feedVersion = h.o("feedVersion", null);
                  m.onOpenCallbacks = h.PD();
                  m.onCloseCallbacks = h.OD();
                  m.publisherName = h.o("pubName", null);
                  a.s.N(a.s.u.Zf, function () {
                    window.NVPInjector.main.widgetLoad(h.v(), h.Tg(), m);
                  });
                }
              };
              b.vh = function (h) {
                const m = h.yG(),
                  p = h.l("dynamicTruncateSource", !1),
                  r = h.l("TruncateDescription", !1);
                a.g.gw(h);
                dg(a.Vs, h.G(), p, r, m);
                a.g.LL(h.v());
                OBR.display.NF(h);
                f.fire("onWidgetRendered", [h], !1, h);
                h = h.B;
                $b.mark(h.j, "rendered");
                h.ny.rendered();
                (h.Ia && !h.Ia.B.Li.rendered && h.Ia.B.rendered) ||
                  h.rendered ||
                  ((h.rendered = !0),
                  h.Ia && (h.Ia.B.rendered = !0),
                  ma.fire(Object.assign({}, h.Wa, qf("rendered"))));
              };
              b.Iw = function (h) {
                a.g.la(h, "ob_clicked");
                var m = a.g.af(h, "data-redirect");
                null !== m && (h.href = m);
              };
              b.Df = function (h) {
                c.vC();
                a.$a.sD(h);
                return !0;
              };
              b.ha = function () {
                f.Pe();
              };
              c.Iv = function () {
                a.s.N(
                  a.s.u.Cl,
                  function () {
                    OBR.Fz.init();
                  },
                  this
                );
              };
              b.CB = function (h, m, p) {
                if (
                  window.confirm(
                    "Removing this recommendation will remove it permanently for this section and will refresh the recommendations.\n Are you sure you want to remove this recommendation?"
                  )
                ) {
                  var r = "https://my.outbrain.com/manage/";
                  r =
                    !1 === p
                      ? r +
                        ("add-zapped-document?publisherId=" +
                          m +
                          "&docUrl=" +
                          a.g.oa(h))
                      : r +
                        ("add-rule?publisherId=" +
                          m +
                          "&ruleValue=" +
                          a.g.oa(h) +
                          "&ruleType=" +
                          p);
                  h = a.g.Ta(0, r, !0);
                  a.g.Pb(h);
                }
              };
              b.BB = function (h) {
                window.confirm(
                  "Removing this recommendation will remove it permanently for this section and will refresh the recommendations.\n Are you sure you want to remove this recommendation?"
                ) &&
                  ((h = a.g.Ta(
                    0,
                    a.i.WH +
                      a.i.DB +
                      h +
                      "&index=1&templateIndex=1&sig=" +
                      a.i.Tq,
                    !0
                  )),
                  a.g.Pb(h));
              };
              b.vJ = function (h) {
                h &&
                  h.ob_exclude_resp &&
                  "number" === typeof h.ob_exclude_resp.code &&
                  1 !== h.ob_exclude_resp.code &&
                  b.Df();
              };
              b.aJ = function (h, m) {
                if (m && "function" === typeof m) {
                  var p = "odbRtn_" + h;
                  f.add(p, m);
                  (h = a.Xa.eu(h)) && h.Hu() && f.fire(p, [h]);
                }
              };
              b.ON = function (h, m) {
                if (m && "function" === typeof m) {
                  var p = "odbRtn_" + h;
                  f.add(p, m);
                  (h = a.Xa.ee(h)) && h.Hu() && f.fire(p, [h]);
                }
              };
              b.TD = function (h) {
                return (h = a.Xa.eu(h)) ? h.o("tcr", -1) : null;
              };
              b.ue = function () {
                a.$a.Ji();
              };
              b.Pe = function () {
                b.ha();
                c.zs();
                OBR.Ha.ha();
                OBR.Fg.ha();
                a.display.ha();
                a.wa.uu();
                a.wa.ha();
                a.$a.ha();
                a.On.ha();
                a.Sd && a.Sd.ha();
                a.i.ha();
                a.ga.ha();
                Th();
                id.reset();
                OBR.g.zC();
              };
              b.sk = function () {
                this.Pe();
                this.Zw();
              };
              c.vC = function () {
                a.wa.uu();
                a.nc.ha();
                OBR.Ha.ha();
                OBR.Fg.ha();
                OBR.i.Jd = null;
                c.xC();
                c.zs();
                nc.cache.clear();
                Th();
              };
              c.zs = () => {
                Ri && Ri.ha();
              };
              c.xC = function () {
                const h = OBR.F.filter(m => !m || m.v);
                h.forEach(m => {
                  if (m && m.kc()) {
                    var p = m.v();
                    m.Na() &&
                      p.parentElement.insertAdjacentElement("beforebegin", p);
                    m.Y() && p && p.remove();
                  }
                });
                OBR.F = h;
                [...jh("ob-smartfeed-wrapper")].forEach(m => m.remove());
              };
              b.Pw = function (h, m) {
                h = OBR.Xa.ee(c.ph(h));
                h = c.Lp(h, m);
                a.wa.register(h);
              };
              b.$I = function (h, m, p, r) {
                h = c.ph(h);
                c.Lp(OBR.Xa.ee(h), p);
                b.vf(m, h);
                r && r(h);
              };
              c.Lp = function (h, m) {
                h.ZI(m);
                OBR.Df && OBR.Df.lq(h);
                return h;
              };
              b.Qv = function (h, m, p, r, t) {
                m &&
                  h &&
                  (b.qf({ link: m, openInWindow: void 0 }, null),
                  f.fire("videoClick_" + h, [
                    { videoUrl: p, videoId: r, widgetId: h, widgetIdx: t },
                  ]));
              };
              b.jw = function (h, m) {
                f.add("videoClick_" + h, m);
              };
              b.zp = function (h, m) {
                c.sj && c.sj.zp(h, m);
              };
              b.xF = function () {
                Ti.A();
                OBR.ga.A();
              };
              b.Qv = function (h, m, p, r, t) {
                m &&
                  h &&
                  (b.qf({ link: m, gI: void 0 }, null),
                  f.fire("videoClick_" + h, [{ eO: p, dO: r, da: h, oy: t }]));
              };
              b.jw = function (h, m) {
                f.add("videoClick_" + h, m);
              };
              b.tN = function (h, m, p, r) {
                var t = OBR.g.v(h);
                t
                  ? c.cB(t)
                  : OBR.error({
                      name: "Error",
                      message: "Cannot find widget element with idx=" + h,
                    });
                (t = OBR.Xa.ee(c.ph(h)))
                  ? ((t = c.Lp(t, null)),
                    t.DK(m),
                    t.FK(p),
                    t.EK(r),
                    c.$K(t),
                    a.wa.register(t))
                  : OBR.error({
                      name: "Error",
                      message: "Cannot find widget with idx=" + h,
                    });
              };
              c.$K = function (h) {
                h.wK(h.Ad());
              };
              c.cB = function (h) {
                a.g.la(h, "ob_scoped");
              };
              b.pB = function (h) {
                h = OBR.Xa.ee(c.ph(h));
                h.we(h.CE());
                a.display.Ah(h);
              };
              b.Xx = function (h, m, p) {
                OBR.g.lf(h) || OBR.g.lf(m) || OBR.g.lf(p)
                  ? OBR.logger.log(
                      "triggerClickPixels: Missing param to function"
                    )
                  : (m = OBR.Xa.ee(m))
                  ? (m = m.ba("listings")) && m[p] && m[p].clickPixels
                    ? OBR.g.yD(m[p].clickPixels, h)
                    : OBR.logger.log(
                        "fireClickPixel: empty meta or key not defined in clickPixels meta"
                      )
                  : OBR.logger.log(
                      "triggerClickPixels: widget or rec container not found"
                    );
              };
              b.nL = (h, m) => {
                if ("mraid" in window)
                  try {
                    const p = h.getAttribute("href");
                    m.preventDefault();
                    m.stopPropagation();
                    window.mraid.open(p);
                  } catch (p) {
                    OBR.error(p);
                  }
              };
              b.Yx = (h, m, p, r) => {
                try {
                  if ("function" === typeof window.OBCustomClickHandler)
                    try {
                      let u;
                      if (r) {
                        const v = decodeURIComponent(r);
                        u = JSON.parse(v);
                      }
                      window.OBCustomClickHandler(h, m, p, u);
                      return;
                    } catch (u) {}
                  if (OBR.clickHandler) {
                    var t = h.getAttribute("href");
                    m.preventDefault();
                    m.stopPropagation();
                    if (r)
                      try {
                        const u = decodeURIComponent(r),
                          v = JSON.parse(u);
                        OBR.clickHandler.open(t, p, v);
                        return;
                      } catch (u) {}
                    OBR.clickHandler.open(t, p);
                  }
                } catch (u) {
                  OBR.error(u);
                }
              };
              b.AB = h => {
                var m = a.nc.uc.iD,
                  p = OBR.nc;
                h = h.split("?");
                const r = N.kk(h[1]);
                p.Mi || ((r.cheq = OBR.fraudDetection.ug), (p.Mi = !0));
                r.eT = m || p.uc.ready;
                r.tm = new Date().getTime() - p.startTime;
                r.wRV = OBR.i.ver;
                r.pVis = "2";
                m = N.Jh(r);
                p.tg.add(`${h[0]}?${m}`);
                p.qm && Yf(p);
              };
              b.OA = (h, m) => {
                m = a.F[m];
                const p = m.PA || 1;
                let r = "";
                try {
                  const t = {
                    Request_id: m.o("req_id", "-1"),
                    publisher_id: m.o("pid", "0"),
                    pv_id: m.o("pvId", "-1"),
                  };
                  r = JSON.stringify(t);
                } catch (t) {
                  r = "";
                }
                3 === p
                  ? OBR.error({
                      name: "obm-AdCarouselLogoError",
                      message:
                        "Error loading ad carousel logo image: " +
                        h.src +
                        " widget data: " +
                        r,
                    })
                  : ((h.src = h.src + "?t=" + new Date().getTime()),
                    (m.PA = p + 1));
              };
              b.oJ = (h, m, p) => {
                if (h) {
                  OBR.i.zv = !0;
                  OBR.extern.returnedVacData = b.uk;
                  var r = h.response.request.widgetJsId,
                    t = OBR._jsc.S("div");
                  t.className = "OUTBRAIN";
                  t.setAttribute("data-widget-id", r);
                  m
                    ? m.parentNode.insertBefore(t, m)
                    : OBR._jsc.Q.body.appendChild(t);
                  OBR.Sh.lg(t, p);
                  b.vf(h, p);
                  t.setAttribute("data-ob-mark", "true");
                  t.setAttribute("data-browser", OBR.i.Yb);
                  t.setAttribute("data-os", OBR.i.os);
                }
              };
              b.uk = h => {
                h && Ri.uk(h, h.feedIdx);
              };
              c.Gz = h => {
                h.Na() && q(h);
              };
              b.A(OBR);
              const l = (h, m) => {
                  if (h && m) {
                    var p = m.Y();
                    p &&
                      (h.ox(p.qb()),
                      h.zx(p.Ac()),
                      p.Fb() && h.tx(p.cc()),
                      p.ie() && h.nx());
                    m && m.ie() && h.nx();
                    h.Ek(m);
                  }
                },
                q = h => {
                  Ri.A({ pe: h, jt: h.l("feedManualChunkFetch", !1) });
                };
              b.RK = () => (Jh.isEnabled ? Jh.value.includes(OBR.s.u.ar) : !1);
              b.continue = () => {
                g || "number" !== typeof b.Ns || clearTimeout(b.Ns);
                g = !0;
                OBR.$a.Ji();
              };
              return b;
            })();
          OBR.display =
            OBR.display ||
            (function () {
              var a,
                b = {},
                c;
              b.A = function (d) {
                a = d = d || OBR;
                c = new a.Wb();
              };
              b.yu = function (d, e) {
                d = a.g.cL(d);
                b.xu(d, e);
              };
              b.xu = (d, e) => {
                var f = e.v();
                f
                  ? f &&
                    d &&
                    0 < d.length &&
                    (0 < e.Qg()
                      ? b.mD(f, d[0], e.G(), e)
                      : b.we(d[0], f, e.G(), e),
                    a.logger.log("element inserted"))
                  : (a.logger.log("widget container not found"),
                    OBR.error({
                      name: "obm-ContainerNotFound",
                      message: `Container not found for widget idx ${e.G()}`,
                    }));
              };
              b.mD = function (d, e, f, g) {
                function k() {
                  b.oF(d).then(function (q) {
                    b.pK(q, e, f, g).then(function (h) {
                      b.lD(h);
                    });
                  });
                }
                var l = new a.Promise();
                l.then(function () {
                  b.nD(d).then(k);
                });
                l.resolve();
              };
              b.nD = function (d) {
                var e = new a.Promise(),
                  f = 1,
                  g = setInterval(function () {
                    0.1 >= f
                      ? (clearInterval(g), e.resolve(d))
                      : ((d.style.opacity = f),
                        (d.style.filter = "alpha(opacity=" + 100 * f + ")"),
                        (f -= 0.1 * f));
                  }, 10);
                return e;
              };
              b.oF = function (d) {
                var e = new a.Promise();
                d.style.opacity = 0;
                setTimeout(function () {
                  e.resolve(d);
                }, 0);
                return e;
              };
              b.pK = function (d, e, f, g) {
                var k = new a.Promise();
                d = b.we(e, d, f, g);
                setTimeout(function () {
                  k.resolve(d);
                }, 0);
                return k;
              };
              b.we = function (d, e, f, g) {
                let k = !1;
                e.innerHTML = "";
                e.shadowRoot &&
                  ((k = !0),
                  e.insertAdjacentHTML("beforebegin", e.outerHTML),
                  e.parentElement.removeChild(e),
                  (e = g.v({ vc: !0 })));
                a.g.ff(d, e);
                k && OBR.g.uy(g);
                b.Kg(g, f);
                return e;
              };
              b.kJ = function (d) {
                const e = d.v();
                if (e && e.parentNode) {
                  var f = d.l("feedDataIdValue", !1);
                  f = f ? `ob-data-fid="${encodeURIComponent(f)}"` : "";
                  f = a.g.Oa(
                    `<div class="ob-smartfeed-wrapper feedIdx-${d.G()}" ${f}>${
                      e.outerHTML
                    }</div>`
                  );
                  e.parentNode.replaceChild(f, e);
                  f.style.flex = "0 0 100%";
                  d.WJ(f.clientWidth);
                  f.style.flex = "";
                  d.v({ vc: !0 });
                }
              };
              b.Kg = function (d, e) {
                c.fire("afterRender", [e], !1, d);
              };
              b.lD = function (d) {
                var e = new a.Promise(),
                  f = 0.1,
                  g = setInterval(function () {
                    1 <= f
                      ? (clearInterval(g),
                        d.removeAttribute("style"),
                        e.resolve(d))
                      : ((d.style.opacity = f),
                        (d.style.filter = "alpha(opacity=" + 100 * f + ")"),
                        (f += 1.6 * f));
                  }, 50);
              };
              b.EN = function (d) {
                c.add("beforeRender", d);
              };
              b.wf = function (d) {
                c.add("afterRender", d);
              };
              b.LF = function (d) {
                a.g.PG(d) &&
                  OBR.s.N(
                    OBR.s.u.Kl,
                    function (e) {
                      OBR.scroll.mp(e);
                    },
                    this,
                    d
                  );
              };
              b.HF = function (d) {
                OBR.s.N(
                  OBR.s.u.ql,
                  function () {
                    b.GD(d);
                    a.controller.Ff(d);
                  },
                  this
                );
              };
              b.GD = function (d) {
                b.yu(OBR.Oi.yF(d), d);
                OBR.Oi.A();
              };
              b.Ah = function (d) {
                a.logger.log("HTML - render widget");
                b.yu(d.Ad(), d);
                b.pJ(d);
                d.Od(!0);
              };
              b.jJ = (d, e) => {
                b.xu([d], e);
              };
              b.ha = function () {
                c.Pe();
              };
              b.pJ = function (d) {
                d.SG() && OBR.g.uy(d);
              };
              b.eF = function (d) {
                if ((d = d.ba("staticCss"))) OBR.i.Lk = d;
              };
              b.NF = function (d) {
                b.tG(d) && OBR.i.Lk && OBR.g.GF(d);
              };
              b.tG = function (d) {
                return d && (d.XF() || d.cv() || d.Do());
              };
              b.A(OBR);
              return b;
            })();
          var Ui = class {
            constructor(a) {
              this.Cf = 0;
              this.Bk(a);
              this.Od(!1);
              lf(this, a);
            }
            G() {
              return 0 === this.Cf ? this.ja : 1e3 * this.Cf + this.ja;
            }
            Bk(a) {
              this.ja = a;
            }
            Qg() {
              return this.Cf;
            }
            Od(a) {
              this.kc = !!a;
            }
            v({ vc: a } = { vc: !1 }) {
              (this.O && !a) || lf(this, this.G());
              return this.O;
            }
            setData(a) {
              if (a) {
                var b = a.response;
                if (b) {
                  this.To = b;
                  const [e, f, g, k, l, q, h, m] = [
                    b.request,
                    b.settings,
                    b.meta,
                    b.data,
                    b.documents,
                    b.viewability_actions,
                    b.timestamp,
                    b.html,
                  ];
                  e && (this.requestData = e);
                  f && (this.pq = f);
                  g && this.Ck(g);
                  k && (this.QL = k);
                  l && (this.Rm = l);
                  h && (this.timestamp = h);
                  m && this.we(m);
                  q && (this.df().viewability_actions = q);
                  this.VC = !0;
                } else {
                  var [c, d] = [a.odbResponse, a.mvResponse];
                  c && d
                    ? (this.setData(c), (this.BD = d))
                    : OBR.error({ name: "obm-sl", message: "bad sl response" });
                }
              }
            }
            o(a, b) {
              const c = mf(this);
              return nf(c, a, b);
            }
            df() {
              this.lp || (this.lp = {});
              return this.lp;
            }
            ba(a, b) {
              const c = this.df();
              return nf(c, a, b);
            }
            Ck(a) {
              a && "object" === typeof a && (this.lp = a);
            }
            l(a, b) {
              const c = of(this);
              return nf(c, a, b);
            }
            getData(a, b) {
              return nf(this.QL, a, b);
            }
            Ug() {
              return this.timestamp;
            }
            we(a) {
              this.html = a;
            }
            Ad() {
              return this.html || "";
            }
            cj() {
              this.To || (this.To = {});
              return this.To;
            }
            cf() {
              return this.BD;
            }
            Ek(a) {
              this.Xp = a;
            }
            Pg() {
              return this.Xp;
            }
            mq(a) {
              this.ppids = a;
            }
            aj() {
              return this.ppids;
            }
          };
          var Vi = OBR.i.Bp + "logger/v1/wea",
            Wi = class {
              constructor(a, b) {
                this.FD = a;
                this.bI = b;
                this.buffer = [];
                this.No = !1;
              }
              push(a) {
                (OBR.settings &&
                  OBR.settings.zA &&
                  a.KN.toString() !== OBR.settings.zA) ||
                  (this.buffer.push(a), this.No || pf(this));
              }
              flush() {
                this.bI(this.buffer.splice(0, this.buffer.length));
              }
            },
            Xi = class {
              constructor() {
                a: {
                  try {
                    if (OBR._jsc.B("widgetAnalytics")) {
                      var a = JSON.parse(OBR.settings.widgetAnalytics);
                      break a;
                    }
                  } catch (b) {
                    OBR.error({
                      name: "WidgetAnalyticsError",
                      message: "Could not parse widgetAnalytics setting",
                    });
                  }
                  a = void 0;
                }
                (this.dl = a)
                  ? ((this.yJ = this.dl.rate || 1e3),
                    (this.wB = this.dl.bulk || 500),
                    (this.B = this.dl.events || []),
                    (this.buffer = new Wi(this.wB, b => this.fire(b))),
                    (this.isEnabled =
                      1 === Math.floor(Math.random() * this.yJ) + 1))
                  : (this.isEnabled = !1);
              }
              add(a) {
                this.buffer.push(a);
              }
              fire(a) {
                OBR.za.send(OBR.i.V.Mc, Vi, { data: JSON.stringify(a) });
              }
            },
            Hf = new Xi();
          var qf = a => ({ timestamp: Date.now(), name: a }),
            Yi = class {
              rendered() {}
              Ud() {}
            },
            Zi = class extends Yi {
              constructor(a) {
                super();
                this.j = a;
                this.Ia = this.j.Y();
                this.Wm = {};
                oa.forEach(b => {
                  var c = this.Wm;
                  var d = Hf.isEnabled && Hf.B.includes(b);
                  return (c[b] = d);
                });
              }
              lc(a) {
                const b = this.j.o("feedVersion", null) || 0,
                  c = this.j.o("readerPlatform", null);
                var d = this.j.Sg();
                const e = Date.now() - OBR.i.startTime,
                  f = this.Ia
                    ? this.Ia.l("feedLoadChunkSize", 0)
                    : this.j.l("feedLoadChunkSize", 0);
                d = d ? d : this.j.D();
                var g = this.Ia
                  ? (g = this.Ia.Sg())
                    ? g
                    : this.Ia.D()
                  : void 0;
                Hf.add({
                  et: a,
                  wid: g ? g : d,
                  pid: this.j.o("pid", null),
                  d: e,
                  p: c,
                  fv: b,
                  cz: f,
                  ab: this.j.o("obRecsAbtestAndVars", null),
                });
              }
              rendered() {
                if (this.Wm.rendered) {
                  var a = this.j.o("feedVersion", null);
                  "1" === a && null === this.j.o("fCard", null)
                    ? this.lc("widget-sf-rendered")
                    : a
                    ? "2" === a && "1" === this.j.o("fCard", null)
                      ? this.lc("widget-sl-rendered")
                      : "2" !== a ||
                        this.Ia ||
                        this.lc("widget-container-rendered")
                    : this.lc("widget-rendered");
                }
              }
              Ud() {
                if (this.Wm.viewed) {
                  var a = this.j.o("feedVersion", null);
                  a
                    ? "1" === a && null === this.j.o("fCard", null)
                      ? this.lc("widget-sf-viewed")
                      : "2" === a &&
                        this.Ia &&
                        !this.Ia.B.Ud &&
                        this.lc("widget-sl-viewed")
                    : this.lc("widget-viewed");
                }
              }
            },
            $i = class {
              constructor(a) {
                this.j = a;
                this.rendered = this.Ud = !1;
                this.Ia = null;
                this.Li = { rendered: !1, Ha: !1 };
                this.Wa = {};
                Gf(this);
                window.addEventListener("obEventsChange", () => Gf(this));
                this.ny = If(this) ? new Zi(this.j) : new Yi();
              }
            };
          OBR.Wl =
            OBR.Wl ||
            function (a) {
              var b = {},
                c = OBR,
                d = null,
                e = null,
                f = null,
                g = null,
                k = !1,
                l = "html",
                q = "nano",
                h = !1,
                m = !1,
                p = !1,
                r = !1,
                t = null,
                u = null,
                v = null,
                w = null,
                A = null,
                D = null,
                E = null,
                I = null,
                J = null,
                V = null,
                O = new OBR.Wb(),
                R = -1,
                W = null,
                Z = null,
                ca,
                Ga = null,
                Ha = !0,
                Ia = !1,
                Ja = null,
                Ka = null,
                La = null,
                Ma = null,
                Gb = null,
                ib = null,
                Hb = null,
                Ib = null,
                Jb = null,
                jb = null,
                kb = null,
                lb = null,
                Kb = null,
                Lb = null,
                Mb = null,
                Nb = null,
                Ob = null,
                Pb = null,
                Qb = null,
                Rb = null,
                Sb = null,
                ya = null,
                za = null,
                sf = null,
                tf = null,
                uf = null,
                vf = null,
                wf = null,
                Wb = {
                  "odb-start": null,
                  "odb-end": null,
                  "mv-start": null,
                  "mv-end": null,
                  rendered: null,
                },
                xf = null,
                yf = !1,
                zf = !1,
                Af = null,
                Bf = !1,
                Cf = null;
              b.fa = new Ui(a);
              b.CM = 0;
              b.BM = 1e3;
              b.bM = 2;
              b.setData = function (n) {
                b.fa.setData(n);
              };
              b.Tg = function () {
                return of(b.fa);
              };
              b.df = function () {
                return b.fa.df();
              };
              b.Ck = function (n) {
                b.fa.Ck(n);
              };
              b.cf = function () {
                return b.fa.cf();
              };
              b.l = (n, y) => b.fa.l(n, y);
              b.ba = (n, y) => b.fa.ba(n, y);
              b.fc = (n, y) => b.fa.getData(n, y);
              b.aN = () => {
                var n = b.fa;
                n.Rm || (n.Rm = {});
                return n.Rm;
              };
              b.cj = () => b.fa.cj();
              b.ME = function (n) {
                return n &&
                  n.response &&
                  n.response.request &&
                  ((n = n.response.request), (n = n.tcr))
                  ? n
                  : -1;
              };
              b.o = function (n, y) {
                n = mf(b.fa)[n];
                return "undefined" !== typeof n && null !== n ? n : y;
              };
              b.Vc = function (n) {
                const y = b.o("obcnsnt", n);
                return !1 === y ? !1 : !0 === y ? !0 : n;
              };
              b.vE = () => Number(b.o("pad", 0));
              b.uE = () => Number(b.o("org", 0));
              b.PE = () => {
                const n = b.vE(),
                  y = b.uE();
                return isNaN(n) || isNaN(y) ? NaN : y + n;
              };
              b.Ba = () => 0 < b.PE();
              b.Ad = () => b.fa.Ad();
              b.we = n => {
                b.fa.we(n);
              };
              b.Ug = () => b.fa.Ug();
              b.NK = function (n) {
                b.Dk(n.permalink);
                b.PK(n.widgetId);
                b.bK(n.dynLoad);
                b.QK(n.widgetType);
                b.JK(n.srcUrl);
                b.KK(n.testMode);
                b.OK(n.wizWidget);
                b.ox(n.extId);
                b.zx(n.extId2);
                b.zK(n.pubImpId);
                b.tx(n.installationKey);
                b.jK(n.installationType);
                b.KJ(n.appVer);
                b.lx(n.userId);
                b.MK(n.videoId);
                b.mq(n.ppids);
                b.xK(n.playerSrcId);
                b.BK(n.rtbEnabled);
                b.sK(n.num);
                b.QJ(n.cardIdx);
                b.eK(n.feedFatherIdx);
                b.qx(n.feedFatherIdx);
                b.RJ(n.categoryIds);
                b.iK(n.iabCat);
                b.dK(n.fId);
                b.TJ(n.clickTrackerUrl);
                b.iq(n.feedVersion);
                "boolean" === typeof n.isManualWidget && b.kK(n.isManualWidget);
                b.XJ(n.contentUrl);
                b.MJ(n.bundleUrl);
                b.yK(n.portalUrl);
                b.UJ(n.consentString);
                b.VJ(n.consentVersion);
                b.NJ(n.ccpaString);
                b.lK(n.language);
                b.$J(n.darkModeAttribute);
                b.wx(n.psub);
                b.JJ(n.appId);
                b.cK(n.et);
                b.hq(n.extraParams);
                b.qK(n.news);
                b.rK(n.newsFrom);
                b.CK(n.rampid);
                b.YJ(n.criteoid);
              };
              b.D = function () {
                return e;
              };
              b.PK = function (n) {
                e = "string" === typeof n ? n : "NA";
              };
              b.gK = function () {
                l = "vjapi";
              };
              b.Qt = function () {
                return l;
              };
              b.Ja = function () {
                return f || jb || kb || lb;
              };
              b.Dk = function (n) {
                f = n;
              };
              b.Mn = function () {
                return J;
              };
              b.MK = function (n) {
                J = n;
              };
              b.mq = n => b.fa.mq(n);
              b.aj = () => b.fa.aj();
              b.Vt = function () {
                return V;
              };
              b.QJ = function (n) {
                R = n;
              };
              b.Si = function () {
                return R;
              };
              b.eK = function (n) {
                W = n;
              };
              b.dN = function () {
                return W;
              };
              b.qx = function (n) {
                void 0 !== n && null !== n && (Z = c.F[n]);
              };
              b.vn = function () {
                return Gb;
              };
              b.RJ = function (n) {
                Gb = n;
              };
              b.Xi = function () {
                return ib;
              };
              b.iK = function (n) {
                "" !== n ? (ib = n) : (ib = null);
              };
              b.Y = function () {
                return Z;
              };
              b.Nt = function () {
                return b.Y() ? b.Y().o("wnid", null) : Ib;
              };
              b.zd = function () {
                return b.Y() ? b.Y().o("abTestVal", null) : null;
              };
              b.Cn = function () {
                const n = b.Y();
                return n ? n.o("layeredTestInfo", null) : null;
              };
              b.DK = function (n) {
                Ja = n;
              };
              b.Jn = function () {
                return Ja;
              };
              b.FK = function (n) {
                Ka = n;
              };
              b.Ln = function () {
                return Ka;
              };
              b.EK = function (n) {
                La = n;
              };
              b.Kn = function () {
                return La;
              };
              b.wK = function (n) {
                Ma = n;
              };
              b.CE = function () {
                return Ma;
              };
              b.kG = function () {
                return -1 < parseInt(b.Si(), 10);
              };
              b.vG = function () {
                var n = "mobile" === b.o("readerPlatform", "desktop");
                const y = !0 === b.o("oo", !1),
                  H =
                    "none" !== b.l("interactionLayerVariant", "none") &&
                    b.l("interactionLayerEnabled", !1);
                n =
                  "desktop" === b.o("readerPlatform", "desktop") ||
                  (n && b.l("zappingMobileEnable", !1));
                return !y && H && n;
              };
              b.xK = function (n) {
                V = n;
              };
              b.KK = function (n) {
                p = "true" === n || !0 === n;
              };
              b.fj = function () {
                return p;
              };
              b.OK = function (n) {
                r = "true" === n || !0 === n;
              };
              b.gH = function () {
                return r;
              };
              b.ox = function (n) {
                t = n;
                !n &&
                  ((n = this.Mt(OBR._jsc.B("extIdClientObject"))),
                  null == n ? 0 : n.length) &&
                  (t = n);
              };
              b.Mt = function (n) {
                let y;
                if (null == n ? 0 : n.length) y = wa(n);
                return y;
              };
              b.qb = function () {
                return t;
              };
              b.zx = function (n) {
                u = n;
                !n &&
                  ((n = this.Mt(OBR._jsc.B("extIdClientObject2"))),
                  null == n ? 0 : n.length) &&
                  (u = n);
              };
              b.Ac = function () {
                return u;
              };
              b.zK = function (n) {
                v = n;
              };
              b.Bd = function () {
                return v;
              };
              b.BK = function (n) {
                Ia = n;
              };
              b.ev = function () {
                return Ia;
              };
              b.VN = function (n) {
                Ha = n;
              };
              b.tv = function () {
                return Ha;
              };
              b.sK = function (n) {
                isNaN(n) || (Ga = n);
              };
              b.Zi = function () {
                return Ga;
              };
              b.tx = function (n) {
                w = n;
              };
              b.jK = function (n) {
                A = n;
              };
              b.KJ = function (n) {
                D = n;
              };
              b.lx = function (n) {
                E = n;
              };
              b.pb = function () {
                return E;
              };
              b.JK = function (n) {
                g = n;
              };
              b.bu = function () {
                return g;
              };
              b.iG = function () {
                return k;
              };
              b.bK = function (n) {
                k = "true" === n || !0 === n;
              };
              b.Uu = function () {
                return "flyThrough" === b.l("displayMode", "");
              };
              b.zj = () => "" !== b.ba("gnr", "") && b.En();
              b.Ho = () =>
                b.l("lightboxFeature", !1) &&
                b.Wu() &&
                b.Fn().includes("keystone_lightbox_feature");
              b.Wu = () => null !== b.Fn();
              b.Fn = () => b.ba("gnr_features", null);
              b.En = () => {
                const n = b.ba("gnr", "");
                return n && n.moduleName ? n.moduleName : "";
              };
              b.hK = n => {
                zf = n;
              };
              b.Xu = () => zf;
              b.pv = function () {
                return (
                  !0 === b.l("stopRater", !1) || !0 === b.l("stopWidget", !1)
                );
              };
              b.Hu = function () {
                return b.fa.VC;
              };
              b.nv = function () {
                return !0 === b.l("isSkylandersInjectionEnabled", !1);
              };
              b.Oo = function () {
                return !0 === b.l("isTopBoxInjectionEnabled", !1);
              };
              b.Mo = function () {
                return (
                  null !==
                  b
                    .l("recMode", "")
                    .match(/(odb_dynamic_swipe|odb_dynamic_smartfeed-swipe)/)
                );
              };
              b.uo = function () {
                return (
                  null !== b.l("recMode", "").match(/(odb_dynamic_ad-carousel)/)
                );
              };
              b.UG = function () {
                return (
                  null !==
                  b.l("recMode", "").match(/(odb_dynamic_single-card-carousel)/)
                );
              };
              b.$F = function () {
                return (
                  null !==
                  b.l("recMode", "").match(/(odb_dynamic_cards-carousel-box)/)
                );
              };
              b.jG = function () {
                return (
                  null !==
                  b
                    .l("recMode", "")
                    .match(
                      /(odb_dynamic_cards-carousel|odb_dynamic_text-on-image-carousel)/
                    )
                );
              };
              b.JG = function () {
                return null !== b.l("recMode", "").match(/(odb_playableAd)/);
              };
              b.HG = function () {
                return b.l("isParallax", !1);
              };
              b.sG = function () {
                return b.l("gridCarouselEnabled", !1);
              };
              b.sv = function () {
                return null !== b.l("recMode", "").match(/(odb_timeline)/);
              };
              b.yo = function () {
                return (
                  null !== b.l("recMode", "").match(/(odb_dynamic_display)/)
                );
              };
              b.Qo = function () {
                return (
                  null !== b.l("recMode", "").match(/(odb_dynamic_video-reel)/)
                );
              };
              b.Ec = function () {
                return null !== b.l("recMode", "").match(/(odb_dynamic_reel)/);
              };
              b.LG = function () {
                return b.Ec() && b.l("isReelV2", !1);
              };
              b.Lo = function () {
                return (
                  null !== b.l("recMode", "").match(/(odb_dynamic_stories)/)
                );
              };
              b.Ou = function () {
                return null !== b.l("exploreMoreWidgetId", null);
              };
              b.nx = function () {
                Bf = !0;
              };
              b.ie = function () {
                const n = b.v();
                return (n && n.hasAttribute("data-ob-explore-more")) || Bf;
              };
              b.Do = function () {
                return null !== b.l("recMode", "").match(/(odb_dynamic_grid)/);
              };
              b.Eo = function () {
                const n = b.v();
                return !(
                  !n ||
                  !OBR.g.H(n).querySelector("div.ob-widget.ob-grid-layout")
                );
              };
              b.cv = function () {
                return (
                  null !==
                  b.l("recMode", "").match(/(odb_dynamic_multi-columns)/)
                );
              };
              b.XF = function () {
                return (
                  null !== b.l("recMode", "").match(/(odb_dynamic_app-card)/)
                );
              };
              b.hH = function () {
                return !0 === b.l("IsWidgetInjector", !1);
              };
              b.Na = function () {
                return !b.gH() && !0 === b.l("isSmartFeedInjectionEnabled", !1);
              };
              b.mG = function () {
                var n = b.v();
                n = n && n.parentNode;
                return (
                  b.l("isFloatingScrollEnabled", !1) && OBR.i.M && b.Na() && n
                );
              };
              b.UF = () => {
                try {
                  return +b.l("admiralApi", 0);
                } catch (n) {
                  return 0;
                }
              };
              b.cH = function () {
                return !0 === b.l("isUIExperimentsEnabled", !1);
              };
              b.$c = function () {
                return (
                  !0 === b.ba("isShadowDomEnabled", !1) ||
                  "true" === b.ba("isShadowDomEnabled", !1)
                );
              };
              b.xv = function () {
                const n = b.v();
                return n && !!n.shadowRoot;
              };
              b.SG = function () {
                return (
                  b.l("isShadowDomEnabled", !1) && !b.Qu() && (b.Do() || b.cv())
                );
              };
              b.Ui = () => b.l("darkModeClass", "");
              b.hh = function () {
                return !0 === b.ba("isSingleAnimationOnFeedAbTestEnabled", !1);
              };
              b.jv = function () {
                const n = b.Y();
                return n && n.lG();
              };
              b.lG = function () {
                return yf;
              };
              b.jq = function () {
                yf = !0;
              };
              b.mN = function () {
                return q;
              };
              b.cc = function () {
                return w;
              };
              b.dc = function () {
                return A;
              };
              b.bc = function () {
                return D;
              };
              b.QK = function (n) {
                "string" === typeof n && (q = n.toLowerCase());
              };
              b.TJ = function (n) {
                try {
                  const y = document.createElement("a");
                  y.href = n;
                  const H = y.host && y.host !== window.location.host;
                  n && H && (Hb = n);
                } catch (y) {}
              };
              b.xc = function () {
                return Hb;
              };
              b.PD = function () {
                return tf;
              };
              b.OD = function () {
                return sf;
              };
              b.PJ = function (n) {
                tf = n;
              };
              b.OJ = function (n) {
                sf = n;
              };
              b.ux = function (n) {
                ca = n;
              };
              b.Io = function () {
                return ca;
              };
              b.iq = function (n) {
                Jb = n;
              };
              b.bf = function () {
                return Jb;
              };
              b.Qu = function () {
                return "2" === (b.bf() || b.o("feedVersion"));
              };
              b.XJ = function (n) {
                jb = n;
              };
              b.yc = function () {
                return jb;
              };
              b.MJ = function (n) {
                kb = n;
              };
              b.wc = function () {
                return kb;
              };
              b.yK = function (n) {
                lb = n;
              };
              b.zc = function () {
                return lb;
              };
              b.Fb = function () {
                const n = b.Y();
                return (
                  !!(this.wc() || this.yc() || this.zc()) ||
                  (null == n ? void 0 : n.Fb())
                );
              };
              b.Ti = function () {
                return Kb;
              };
              b.UJ = function (n) {
                Kb = n;
              };
              b.un = function () {
                return Lb;
              };
              b.NJ = function (n) {
                Lb = n;
              };
              b.yn = function () {
                return Mb;
              };
              b.VJ = function (n) {
                Mb = n;
              };
              b.wx = function (n) {
                Ob = n;
              };
              b.Og = function () {
                return Ob;
              };
              b.JJ = function (n) {
                Pb = n;
              };
              b.Ft = function () {
                return Pb;
              };
              b.lK = function (n) {
                Nb = n;
              };
              b.Ng = function () {
                return Nb;
              };
              b.$J = n => {
                xf = n;
              };
              b.zn = () => xf;
              b.cK = function (n) {
                Qb = b.je() ? !!n : !0;
              };
              b.Lt = function () {
                return Qb;
              };
              b.dK = function (n) {
                Ib = n;
              };
              b.hq = function (n) {
                Rb = n;
              };
              b.yd = function () {
                return Rb;
              };
              b.qK = function (n) {
                I = n;
              };
              b.In = function () {
                return I;
              };
              b.rK = function (n) {
                Sb = n;
              };
              b.Tt = function () {
                return Sb;
              };
              b.GK = function (n) {
                Af = n;
              };
              b.Sg = function () {
                return Af;
              };
              b.CK = function (n) {
                ya = n;
              };
              b.jN = function () {
                return ya;
              };
              b.YJ = function (n) {
                za = n;
              };
              b.cN = function () {
                return za;
              };
              b.kc = function () {
                return b.fa.kc;
              };
              b.dE = () => b.o("fCard", void 0);
              b.Ut = () => {
                const n = b.Y() || b;
                return n && n.l("onyxFeedMode", "None");
              };
              b.AE = () => b.l("OnyxServingMode");
              b.GG = () => {
                const n = b.AE();
                return n && "non_onyx" !== n;
              };
              b.VG = () => b.l("skipCardRenderIfTimePassed", 0);
              b.bG = n => {
                const y = null == n ? void 0 : n.Y();
                return n && y
                  ? n.l("pubProvidedIds", null) ||
                      (null == y ? void 0 : y.l("pubProvidedIds", null))
                  : !1;
              };
              const Df = n => {
                try {
                  let y = !1;
                  switch (n.startsWith("=") ? "exact" : "broad") {
                    case "broad":
                      y = OBR._jsc.Q.referrer.includes(n);
                      break;
                    case "exact":
                      const { hostname: H } = new URL(OBR._jsc.Q.referrer);
                      y = H === n.slice(1);
                  }
                  return y;
                } catch (y) {
                  return OBR.logger.log(y), !1;
                }
              };
              let Ef = !1,
                Fc = !1;
              const Yl = () => {
                const n = b.l("exploreMoreReferrerDomains", '["empty"]'),
                  y = b.l("exploreMoreBlockedReferrerDomains", "[]");
                try {
                  if (OBR.i.KD) return !0;
                  var H = b.l("exploreMoreDirectHistoryLengthThreshold", null);
                  const X = H && window.history.length < parseInt(H),
                    aa = JSON.parse(n).map(Oa => Oa.toLowerCase()),
                    Aa = JSON.parse(y).map(Oa => Oa.toLowerCase()),
                    ha = aa.includes("empty"),
                    Xl = Aa.includes("$samesite");
                  if (OBR._jsc.Q.referrer) {
                    if (Xl && vh()) return !1;
                    H = !1;
                    if (
                      aa &&
                      aa.length &&
                      ((H = aa.some(Gc => Df(Gc))),
                      !ha || (ha && 1 < aa.length))
                    )
                      return H;
                    const Oa = Aa && Aa.length ? Aa.some(Gc => Df(Gc)) : !1;
                    return ha ? !Oa || H : !Oa;
                  }
                  return ha || X;
                } catch (X) {
                  OBR.error({
                    name: "obm-ExploreMoreValidReferrer",
                    message: `allowedReferrers: ${n}blockedReferrers: ${y} 'referrer:${document.referrer}`,
                  }),
                    OBR.logger.log(X);
                }
                return !1;
              };
              b.Pu = () => {
                if (Ef) return Fc;
                Fc = Yl();
                Ef = !0;
                return Fc;
              };
              b.aE = () => {
                if (OBR.i.nu && b.Ou()) return b.Pu() ? "1" : "0";
              };
              b.Od = function (n) {
                b.fa.Od(n);
              };
              b.je = function () {
                return h;
              };
              b.FG = function () {
                return 0 === a || h || !OBR.i.Gd || m || (OBR.i.Gd && b.Nj());
              };
              b.uK = function () {
                m = !0;
              };
              b.kK = function (n) {
                h = !!n;
              };
              b.Cx = function () {
                var n = b.o("lsd", null),
                  y = !0 === b.o("oo", !1),
                  H = "string" === typeof n && 0 < n.length,
                  X = !0 === b.l("isUseLocalStorageForUUID", !0),
                  aa = OBR._jsc.C.bi,
                  Aa = OBR._jsc.C.Ql,
                  ha = c.ga.Db && "1" === b.o("gdpr", "0") + "";
                ha = !ha || (ha && b.Vc(!0));
                X && !y && H && ha
                  ? (c.g.R(aa, null) !== n && c.g.xa(Aa, new Date().getTime()),
                    c.g.xa(aa, n))
                  : (X && ha) || (c.g.ae(aa), c.g.ae(Aa));
              };
              b.nq = (n = null) => {
                n = n ? n : b.o("seid", null);
                c.g.R(OBR._jsc.C.zl, null) !== n && c.g.xa(OBR._jsc.C.zl, n);
              };
              b.ej = () => c.g.R(OBR._jsc.C.zl, null);
              b.ic = () => {
                const n = "1" === b.o("gdpr", "0") + "";
                return !n || (n && b.Vc(!0));
              };
              b.AK = () => {
                if (0 === b.G()) {
                  const n = OBR.i.publisherLoginIndication;
                  OBR.i.publisherSubscriptionSelector &&
                    n &&
                    !OBR.i.wh &&
                    (OBR.i.wh = OBR.g.Wt());
                }
              };
              b.sx = function () {
                var n = b.o("clss", null);
                n && (c.fraudDetection.gq = encodeURIComponent(n));
                if (0 === b.G()) {
                  n = OBR._jsc.C.br;
                  var y = OBR._jsc.C.cr,
                    H = b.l("fraudDetection", 0),
                    X = b.l("cheqCallTimeout", 500);
                  c.g.xa(n, H);
                  H && c.g.xa(y, X);
                }
              };
              b.G = function () {
                return b.fa.G();
              };
              b.ZI = function (n) {
                "string" === typeof n
                  ? (OBR.g.Sb(OBR.g.v(b.fa.G()), "data-src", n),
                    b.Dk(n),
                    (b.fa.Cf = 1))
                  : ((n = b.fa), (n.Cf += 1));
                b.Od(!1);
              };
              b.Qg = function () {
                return b.fa.Qg();
              };
              b.Si = () => {
                const n = b.v();
                return n ? n.getAttribute("data-card-idx") : null;
              };
              b.v = ({ vc: n } = { vc: !1 }) => b.fa.v({ vc: n });
              b.fu = () => {
                var n = b.v();
                if (n)
                  return (n = OBR.g.H(n)) && n.children ? n.children[0] : null;
              };
              b.WJ = n => {
                d = n;
              };
              b.Lg = ({ vc: n } = { vc: !1 }) => {
                if (d) return d;
                if ((n = b.v(n)))
                  return 0 === n.clientWidth
                    ? ((n.style.width = "100%"), b.QD(n))
                    : n.clientWidth;
              };
              b.QD = n => {
                let y = 0;
                n = n.parentElement;
                try {
                  for (; n && 100 > y; ) {
                    if (0 !== n.clientWidth) return n.clientWidth;
                    n = n.parentElement;
                    y++;
                  }
                } catch (H) {
                  OBR.error({
                    name: "obm-noContainerWidth",
                    message: `Container width not found: ${H}`,
                  });
                }
                return 0;
              };
              b.Ek = n => {
                b.fa.Xp = n;
              };
              b.Pg = () => b.fa.Xp;
              b.Kt = () => {
                if (b.je()) {
                  var n = b.fa.Pg();
                  return n ? n.Kt() : null;
                }
                try {
                  n = b.v();
                  if (!n) return null;
                  const y = b.getBoundingClientRect();
                  if (
                    0 <= y.top &&
                    0 <= y.left &&
                    y.bottom <=
                      (window.innerHeight ||
                        document.documentElement.clientHeight) &&
                    y.right <=
                      (window.innerWidth ||
                        document.documentElement.clientWidth)
                  )
                    return 0;
                  if (y.top >= -n.offsetHeight)
                    return Math.floor(
                      y.top - document.documentElement.clientHeight
                    );
                  const H = b.$i(),
                    X = H && H.height,
                    aa = H && H.y;
                  return X && aa
                    ? Math.floor(X + aa - document.documentElement.scrollTop)
                    : null;
                } catch (y) {
                  return null;
                }
              };
              b.getBoundingClientRect = () => {
                const n = b.v();
                if (n) return n.getBoundingClientRect();
              };
              b.$i = n => {
                if (b.je()) {
                  var y = b.fa.Pg();
                  return y ? y.$i(n) : null;
                }
                try {
                  if (b.v()) {
                    y = b.getBoundingClientRect();
                    const H = {
                      x: Math.floor(
                        y.left +
                          (window.pageXOffset ||
                            document.documentElement.scrollLeft)
                      ),
                      y: Math.floor(
                        y.top +
                          (window.pageYOffset ||
                            document.documentElement.scrollTop)
                      ),
                      height: Math.abs(Math.floor(y.height)),
                      width: Math.abs(Math.floor(y.width)),
                    };
                    return n ? H[n] : H;
                  }
                  return null;
                } catch (H) {
                  return null;
                }
              };
              b.ad = () =>
                "RTL" === b.l("dynamicWidgetDirection", "LTR").toUpperCase();
              b.yG = () => OBR.i.lu && !b.ad() && b.Do();
              b.Mq = () => "client" === b.l("skeletonType", null);
              b.iF = () => 1 === b.ba("clips", 0);
              b.bO = (n, y) => {
                if ((n = document.querySelector('[data-orig-idx="' + n + '"]')))
                  (n.id = OBR.i.el + y),
                    c.g.Sb(n, "data-idx", y),
                    b.Bk(y),
                    (a = y);
              };
              b.Bk = n => {
                b.fa.Bk(n);
              };
              b.OM = n => {
                let y = (0, OBR._jsc.hh)(OBR.i.el + n);
                y &&
                  (y.removeAttribute("id"),
                  y.removeAttribute("data-idx"),
                  y.setAttribute("data-orig-idx", n));
              };
              b.Gn = () => b.ba("leadForms", null);
              b.DE = () => b.ba("paidLabel", null);
              b.gE = () => b.ba("hasRTB", !1);
              b.kF = () => !!b.Gn();
              b.ov = () =>
                null !== b.l("recMode", "").match(/(odb_dynamic_stack-card)/);
              b.Hj = () =>
                null !== b.l("recMode", "").match(/(odb_dynamic_read-next)/);
              b.CG = () => "" !== b.Gt();
              b.Gt = () => b.ba("atps", "");
              b.Po = () => 0 !== b.o("vid", 0);
              b.SK = () => {
                var n = OBR.i.Qi;
                if (n && n[b.D()]) return "1" === n[b.D()] || "2" === n[b.D()];
                n = b.Qo() && "ATF" === b.l("onyxFeedMode", "None");
                return b.Po() && !b.Ec() && !b.Hj() && !n;
              };
              b.Vu = () => {
                const n = b.yd(),
                  y = OBR.i.TC;
                return n && n.includes("dark-mode") && y;
              };
              b.wj = () => {
                const n = b.Vu(),
                  y = b.zn();
                return "undefined" !== typeof y ? !0 === y : !!c.g.wj() || !!n;
              };
              b.gG = () => !0 === b.zn();
              b.Mg = () => {
                if (!OBR.settings || !OBR.settings.darkModeQuery) return null;
                var n =
                  "body" !== OBR.settings.darkModeQuery &&
                  OBR.settings.darkModeQuery;
                return (
                  (n = n ? n : b.l("darkModeQuery", null)) &&
                  document.querySelector(n)
                );
              };
              b.hF = () => {
                var n = b.v();
                const y = b.df();
                if (n && y && y.listings) {
                  n = Array.from(
                    OBR.g.H(n).querySelectorAll(".ob-dynamic-rec-container")
                  );
                  for (let H = 0; H < n.length; H++) {
                    const X = n[H].getAttribute("data-pos");
                    if (y.listings[X] && y.listings[X].clickPixels) return !0;
                  }
                }
                return !1;
              };
              b.JE = () => b.l("recsTarget", null);
              b.eJ = n => {
                O.add("widgetOdbCallFailed", n);
              };
              b.wD = () => {
                O.fire("widgetOdbCallFailed", []);
              };
              b.yx = n => {
                uf = n;
              };
              b.au = () => uf;
              b.fK = n => {
                vf = n;
              };
              b.eE = () => vf;
              b.Pt = () => b.l("feedMaxHeight");
              b.bv = () => {
                const n = b.v();
                return n && n.hasAttribute("data-ob-lazy-render");
              };
              b.Ro = () => b.bv() && !b.kc();
              b.px = n => {
                wf = n;
              };
              b.cE = () => wf;
              b.Ax = n => {
                Wb.hasOwnProperty(n) && (Wb[n] = Date.now());
              };
              b.cu = n => {
                if (Wb.hasOwnProperty(n)) return Wb[n];
              };
              b.OG = () => b.l("isSafeFrameEnabled", !1);
              b.Nj = () => {
                const n = b.v();
                return n && n.hasAttribute("data-ob-prefetch");
              };
              b.Vm = null;
              b.ub = (n, y = {}) => {
                b.l("exploreMoreBiEvents", !1) &&
                  (b.Vm || (b.Vm = new OBR.dataBI(b, H => H.Ya)),
                  b.Vm.fire(n, y, { method: OBR.i.V.Mc }));
              };
              b.mx = function () {
                b.B = new $i(this);
              };
              b.eN = function () {
                return Cf;
              };
              b.mK = function (n) {
                Cf = n;
              };
              b.Ek = n => {
                b.fa.Ek(n);
              };
              b.Pg = () => b.fa.Pg();
              b.BG = () => b.l("isMraidAd", !1);
              b.dj = () => {
                const n = b.Y();
                return (
                  b.o("resolvedUrl", null) || (null == n ? void 0 : n.dj())
                );
              };
              return b;
            };
          OBR.Sh =
            OBR.Sh ||
            (function () {
              var a = OBR,
                b = {},
                c = new a.Wb();
              b.Km = function (e) {
                e.idx = e.idx || 0;
                var f = new a.Wl(e.idx);
                f.NK(e);
                return f;
              };
              b.lg = function (e, f) {
                var g = a.Xa.Ls(e);
                a.g.Sb(e, "data-dynLoad", "");
                g.permalink = a.Xa.CD(g.permalink);
                ["contentUrl", "bundleUrl", "portalUrl"].forEach(l => {
                  "undefined" !== typeof g[l] && (g[l] = a.Xa.DD(g[l]));
                });
                f = d(g, f);
                g.idx = f;
                var k = b.Km(g);
                a.F[f] = k;
                a.g.Sb(e, "data-idx", f);
                a.i.yt(g);
                0 === f && a.g.KC(e);
                e.id = a.i.el + f;
                c.fire("onWidgetCreate", [k]);
                return k;
              };
              const d = (e, f) => {
                if (f) return f;
                if (window.OBBridge && window.OBBridge.t && window.OBBridge.idx)
                  return window.OBBridge.idx;
                if (
                  0 !== a.F.length ||
                  (a.i.Jd !== e.permalink && !0 !== a.i.gp)
                ) {
                  if (
                    1e3 < a.F.length &&
                    (([e] = a.F.slice(-1)), e && (e = e.Y()))
                  ) {
                    for (e = e.G() + 1; e < a.F.length && a.F[e]; ) e++;
                    return e;
                  }
                  return a.F.length;
                }
                return 1;
              };
              b.IN = function (e) {
                c.add("onWidgetCreate", e);
              };
              return b;
            })();
          OBR.Xa =
            OBR.Xa ||
            (function () {
              var a = OBR,
                b = {
                  zb: {
                    widgetId: { a: "data-widget-id", t: "string" },
                    permalink: { a: "data-src", t: "string" },
                    srcUrl: { a: "data-ob-srcUrl", t: "string" },
                    dynLoad: { a: "data-dynLoad", t: "boolean" },
                    widgetType: { a: "data-widget-type", t: "string" },
                    testMode: { a: "data-ob-test", t: "boolean" },
                    wizWidget: { a: "data-ob-wiz", t: "boolean" },
                    installationKey: {
                      a: "data-ob-installation-key",
                      t: "string",
                    },
                    userId: { a: "data-ob-user-id", t: "string", n: !0 },
                    ppids: { a: "data-ppids", t: "string", n: !0 },
                    videoId: { a: "data-ob-video-id", t: "string" },
                    playerSrcId: { a: "data-ob-player-src-id", t: "string" },
                    installationType: {
                      a: "data-ob-installation-type",
                      t: "string",
                    },
                    appVer: { a: "data-ob-app-ver", t: "string" },
                    isSecured: { a: "data-is-secured", t: "boolean" },
                    extId: { a: "data-external-id", t: "string" },
                    extId2: { a: "data-external-secondary-id", t: "string" },
                    pubImpId: { a: "data-pub-imp-id", t: "string" },
                    rtbEnabled: { a: "data-rtb-enabled", t: "boolean" },
                    va: { a: "data-va", t: "boolean" },
                    num: { a: "data-num-of-recs", t: "string" },
                    cardIdx: { a: "data-card-idx", t: "string" },
                    feedFatherIdx: { a: "data-feed-father-idx", t: "string" },
                    categoryIds: { a: "data-category-ids", t: "string" },
                    iabCat: { a: "data-iab-category", t: "string" },
                    fId: { a: "data-fId", t: "string" },
                    clickTrackerUrl: { a: "data-click-url", t: "string" },
                    feedVersion: { a: "data-feed-version", t: "string" },
                    contentUrl: { a: "data-ob-contentUrl", t: "string", e: !0 },
                    bundleUrl: { a: "data-ob-bundleUrl", t: "string", e: !0 },
                    portalUrl: { a: "data-ob-portalUrl", t: "string", e: !0 },
                    language: { a: "data-ob-language", t: "string" },
                    psub: { a: "data-ob-psub", t: "string" },
                    appId: { a: "data-ob-app-id", t: "string" },
                    et: { a: "data-et", t: "boolean" },
                    extraParams: { a: "data-extra-params", t: "string" },
                    consentString: { a: "data-consent-string", t: "string" },
                    ccpaString: { a: "data-ccpa-string", t: "string" },
                    consentVersion: { a: "data-consent-version", t: "string" },
                    adblock: { a: "data-ob-adblock", t: "string", e: !0 },
                    darkModeAttribute: { a: "data-dark-mode", t: "string" },
                    news: { a: "data-on-news", t: "string" },
                    newsFrom: { a: "data-on-newsFrom", t: "string" },
                    rampid: { a: "data-ob-ramp-id", t: "string" },
                    criteoid: { a: "data-ob-criteo-id", t: "string" },
                    uuid20: { a: "data-ob-uu-id2", t: "string" },
                    hemsha256: { a: "data-ob-hemsha256-id", t: "string" },
                    hemmd5: { a: "data-ob-hemmd5-id", t: "string" },
                    hemsha256md5: { a: "data-ob-hemsha256md5-id", t: "string" },
                  },
                  eu: function (c) {
                    var d, e;
                    if (a.F) {
                      var f = a.F.length;
                      for (d = 0; d < f; d += 1)
                        if ((e = a.F[d]) && e.D() === c) return e;
                    }
                    return null;
                  },
                  ee: function (c) {
                    return a.F[c] ? a.F[c] : null;
                  },
                  PC: function (c) {
                    var d = {},
                      e;
                    for (e in b.zb)
                      b.zb.hasOwnProperty(e) &&
                        typeof c[e] === b.zb[e].t &&
                        ((d[e] = c[e]),
                        "adblock" === e && OBR.i.bn.Fk(c.adblock));
                    return d;
                  },
                  Ls: function (c) {
                    var d = {},
                      e;
                    for (e in b.zb)
                      if (b.zb.hasOwnProperty(e)) {
                        var f = a.g.af(c, b.zb[e].a);
                        "true" === f || "false" === f
                          ? ((d[e] = "true" === f),
                            "adblock" === e && OBR.i.bn.Fk(f))
                          : typeof f !== b.zb[e].t ||
                            (!0 !== b.zb[e].n && "null" === f) ||
                            ("" === f && !0 !== b.zb[e].e) ||
                            (d[e] = f);
                      }
                    return d;
                  },
                  CD: function (c) {
                    if ("string" !== typeof c || "null" === c) c = a.g.Hn();
                    else if (
                      0 === c.length ||
                      0 === c.indexOf("DROP") ||
                      0 === c.indexOf("INSERT")
                    ) {
                      if (
                        c &&
                        0 === c.indexOf("DROP") &&
                        "www.msn.com" === window.location.hostname
                      )
                        return (c = window.location.href);
                      c = a.g.Hn();
                    }
                    0 === c.indexOf("//") && (c = a.i.na.replace("//", "") + c);
                    return c;
                  },
                  DD: function (c) {
                    "string" !== typeof c ||
                      (0 !== c.length && 0 !== c.indexOf("DROP")) ||
                      ((c = a.g.Hn()),
                      0 === c.indexOf("//") &&
                        (c = a.i.na.replace("//", "") + c));
                    return c;
                  },
                  JC: function (c, d) {
                    for (var e in b.zb)
                      b.zb.hasOwnProperty(e) &&
                        typeof c[e] === b.zb[e].t &&
                        a.g.Sb(d, b.zb[e].a, c[e]);
                  },
                  $M: function () {
                    var c,
                      d = [];
                    for (c = 0; c < a.F.length; c++) d.push(a.F[c].D());
                    return d;
                  },
                };
              return b;
            })();
          var aj;
          aj = class {
            constructor() {
              this.ready = !1;
              this.Gg = {};
              this.qw = {};
              if (OBR.i.gd) {
                this.ready = !0;
                this.rc();
                const a = rh(window);
                this.qw = {
                  jB: a("appBundle", ""),
                  EJ: a("sdkVersion", ""),
                  Ae: a("userId", null),
                };
              }
            }
            rc() {
              window.addEventListener("obBridgeExposureChanged", a => {
                this.Gg.obBridgeExposureChanged &&
                  this.Gg.obBridgeExposureChanged.forEach(b => b(a));
              });
            }
          };
          OBR._jsc.bj = new aj();
          {
            const a = OBR.g.R("id5id");
            if (a)
              try {
                JSON.parse(decodeURIComponent(a));
              } catch (b) {}
          }
          OBR.vL =
            OBR.vL ||
            (() => {
              class a {
                constructor() {}
              }
              return new a();
            })();
          var cj = "undefined" !== typeof window.OB_amp,
            dj = class {
              constructor() {
                this.Nc = OBR;
                this.Ga = { height: 0, width: 0 };
                this.Qm = 300;
                this.rm = null;
                this.Xj = { YN: -1, kL: -1, fO: -1, gO: -1 };
                Lf(this);
              }
              mc(a) {
                this.Nc = a;
              }
              ri(a, b, c) {
                if (!a || 0 > b || 100 < b) return !1;
                c || (c = { top: 0, bottom: 0 });
                if (cj) {
                  c = this.rm;
                  if (!c) return !1;
                  var d = Of(a, c);
                  a = Pf(d, c);
                  return (
                    (b =
                      0 <= a.height &&
                      0 <= a.width &&
                      Math.max(
                        1,
                        Math.round(
                          (Math.min(d.height, c.rootBounds.height) * b) / 100
                        )
                      )) && a.height >= b
                  );
                }
                a = a.getBoundingClientRect();
                d = this.Ga.height;
                a = {
                  top: a.top - c.top,
                  height: a.height + c.bottom,
                  bottom: a.top + a.height + c.bottom,
                };
                b = Math.round((a.height * b) / 100) || 1;
                b = b > d ? d - 1 : b;
                return a.top + b <= d && 0 <= a.bottom - b;
              }
              eh(a, b, c, d) {
                if (OBR.i.Xj) {
                  if (a) {
                    var e = this.Xj;
                    d = e.totalWidth;
                    c = e.visibleFrom;
                    e = e.visibleTo;
                    if (0 > c || 1 > e) b = !1;
                    else if (
                      ((a = a.getBoundingClientRect()), e < a.top || 0 > a.left)
                    )
                      b = !1;
                    else {
                      const g = window.devicePixelRatio;
                      var f = d / g;
                      b =
                        ((Math.min(f, a.left + a.width) -
                          Math.max(f - d, a.left)) *
                          (Math.min(e / g, a.height + a.top) -
                            Math.max(a.top, c / g))) /
                          (a.width * a.height) >=
                        b / 100;
                    }
                  } else b = !1;
                  return b;
                }
                if (cj) {
                  d = this.rm;
                  if (!d) return !1;
                  a = Of(a, d);
                  d = Pf(a, d);
                  d = d.width * d.height;
                } else
                  (c = a = a.getBoundingClientRect()),
                    (d = d
                      ? d.getBoundingClientRect()
                      : {
                          top: 0,
                          left: 0,
                          width: Math.max(
                            document.documentElement.clientWidth,
                            window.innerWidth || 0
                          ),
                          height: Math.max(
                            document.documentElement.clientHeight,
                            window.innerHeight || 0
                          ),
                        }),
                    (d =
                      (Math.min(c.width + c.left, d.width + d.left) -
                        Math.max(c.left, d.left)) *
                      (Math.min(c.height + c.top, d.height + d.top) -
                        Math.max(c.top, d.top)));
                return d / (a.width * a.height) >= b / 100;
              }
            };
          OBR.ca = OBR.ca || new dj();
          OBR.IntersectionObserver =
            OBR.IntersectionObserver ||
            (function () {
              class a {
                constructor(b) {
                  this.Rb = null;
                  this.Um = !1;
                  this.Xk = null;
                  this.J = {
                    callback: () => {},
                    callbackParams: [],
                    element: null,
                    intersectPercentage: 0,
                    scrollDimmer: 200,
                    unobserve: !1,
                    threshold: [1],
                    rootMargin: "0px",
                  };
                  this.pA(b);
                }
                pA(b) {
                  b &&
                    ((this.J = Object.assign(this.J, b)),
                    (this.J.callbackParams = this.J.callbackParams || []));
                }
                vA() {
                  const b = {
                    rootMargin: this.J.rootMargin,
                    threshold: this.J.threshold,
                  };
                  this.J.root && (b.root = this.J.root);
                  this.Xk = new window.IntersectionObserver(
                    this.wA.bind(this),
                    b
                  );
                  this.Xk.observe(this.J.element);
                  return this.Xk;
                }
                wA(b, c) {
                  if (!this.J) c.disconnect();
                  else if (this.Jr())
                    c.unobserve(this.J.element), c.disconnect();
                  else if (b)
                    for (const d in b)
                      if (
                        b[d] &&
                        b[d].intersectionRatio > this.J.intersectPercentage &&
                        (this.J.callback.call(
                          this,
                          ...this.J.callbackParams,
                          b[d],
                          this
                        ),
                        this.J.unobserve)
                      ) {
                        c.unobserve(b[d].target);
                        c.disconnect();
                        break;
                      }
                }
                Jr() {
                  return this.J && this.J.element
                    ? this.J.element.getRootNode &&
                      this.J.element.getRootNode().mode
                      ? !1
                      : !document.documentElement.contains(this.J.element)
                    : !0;
                }
                AA() {
                  const b = this.J.checkAbsoluteVisibility
                    ? OBR.ca.eh
                    : OBR.ca.ri;
                  if (this.Um) this.Um = !1;
                  else {
                    const c = this.J.intersectPercentage;
                    b.call(
                      OBR.ca,
                      this.J.element,
                      0 <= c && 1 >= c ? 100 * c : c,
                      this.J.rootMarginObj,
                      this.J.root
                    ) &&
                      ((this.Um = !0),
                      this.J.callback.apply(this, this.J.callbackParams),
                      this.J.unobserve && OBR.g.Ef("scroll", this.$j));
                  }
                }
                Lr() {
                  this.Jr()
                    ? OBR.g.Ef("scroll", this.$j)
                    : this.Rb ||
                      (this.AA(),
                      setTimeout(() => {
                        this.Rb = !1;
                      }, this.J.scrollDimmer),
                      (this.Rb = !0));
                }
                nI() {
                  const b = this.J.rootMargin.split(" ");
                  this.J.rootMarginObj = {
                    top: parseInt(b[0]),
                    right: parseInt(b[1] || b[0]),
                    bottom: parseInt(b[2] || b[0]),
                    left: parseInt(b[3] || b[0]),
                  };
                }
                unobserve() {
                  OBR.i.Vn
                    ? this.Xk.disconnect()
                    : window.removeEventListener("scroll", this.$j);
                  this.J = null;
                }
                observe() {
                  if (!this.J || !this.J.element) return null;
                  if (OBR.i.Vn) return this.vA();
                  this.nI();
                  this.$j = this.Lr.bind(this);
                  OBR.g.Bb(window, "scroll", this.$j);
                  this.Lr();
                  return this;
                }
              }
              return a;
            })();
          var ej = class {
              dh(a) {
                return new OBR.IntersectionObserver(a);
              }
              ma(a) {
                return OBR.F[a];
              }
              protocol() {
                return OBR.i.na;
              }
              createElement(a) {
                return OBR.g.createElement(a.type, a.id, a.css, a.attributes);
              }
              Hi() {
                return new OBR.Hi();
              }
              log(a) {
                OBR.logger.log(a);
              }
              rk(a) {
                OBR.kb.rk(a);
              }
              tn() {
                return OBR.kb.tn();
              }
              Nn() {
                return OBR.kb.Nn();
              }
              kk(a) {
                return OBR.g.kk(a);
              }
              Jh(a) {
                return OBR.g.Jh(a);
              }
            },
            N = new ej();
          var fj = class {
            constructor() {
              this.uc = { ready: 0, Iq: 6, stopped: 7 };
              this.Rb = !1;
              this.Ee = [];
              this.Uh = {};
              this.tg = N.Hi();
              this.qm = !1;
              this.AJ = 200;
              Xf(this);
              this.startTime = new Date().getTime();
              Zf(this);
              this.Ua = [];
              this.Lq = new Map();
              this.Ak = this.Ak.bind(this);
            }
            Ak(a) {
              if (!a.KL && !a.Xu()) {
                const b = a.G();
                this.Ee[b] || (this.Ee[b] = a.v());
                N.dh({
                  callback: this.Xg.bind(this),
                  callbackParams: [a.G()],
                  element: a.v(),
                  unobserve: !0,
                  threshold: [0],
                }).observe();
              }
            }
            zk() {
              this.Ee.forEach((a, b) => {
                void 0 !== a && a && OBR.ca.ri(a, 0) && this.Xg(b);
              });
            }
            ha() {
              this.Rb = !1;
              this.Ee = [];
              this.Uh = {};
              this.tg = N.Hi();
              this.startTime = new Date().getTime();
              this.Mi = !1;
              this.Ua.forEach(a => a.unobserve());
              this.Ua = [];
            }
            Xg(a) {
              if (OBR.F) {
                if (this.Ee[a] || Tf(N.ma(a))) {
                  const b = N.ma(a);
                  b.KL = !0;
                  Rf(b);
                  this.Ee[a] = null;
                  ag(this, a);
                }
                return a;
              }
            }
          };
          OBR.nc = OBR.nc || new fj();
          var gj = class {
            constructor() {
              this.HA = ".,-_' ";
            }
          };
          OBR.Vs = new gj();
          var hj = OBR.i.Cp + "loggerServices/dwce_cheq_events",
            ij = class {
              sd(a) {
                a = Object.assign(
                  {
                    timestamp: +new Date(),
                    sessionId: OBR.fraudDetection.sn,
                    url: OBR.fraudDetection.Gi,
                    cheqSource: 1,
                  },
                  a
                );
                OBR.za.send(OBR.i.V.qc, hj, a);
              }
            },
            gg = new ij();
          var jj = class {
            constructor() {
              this.timeout = !1;
              this.tC = parseInt(OBR.g.R(OBR._jsc.C.cr, 500));
              this.Cm = () => {};
              this.rs = null;
              this.Bm = !1;
            }
          };
          var ng = `https://tcheck.${OBR.i.iI}/tcheck/check`;
          var kj = class {
            constructor() {
              OBR.logger.log("FD Process started");
              this.sn = pg();
              this.zt = new OBR.Wb();
              this.At = !1;
              this.ug = 0;
              this.ob = 100;
              this.xh = null;
              this.Go = !1;
              this.If = this.gq = this.Zd = null;
              a: {
                var a = document.querySelector(".OUTBRAIN");
                if (a && (a = a.getAttribute("data-src")))
                  try {
                    var b = decodeURIComponent(a);
                    break a;
                  } catch (c) {}
                b = void 0;
              }
              b =
                b ||
                OBR.g.Vi("property", "og:url", "meta", "content") ||
                OBR.g.Vi("rel", "canonical", "link", "href") ||
                window.location.href;
              a = document.createElement("a");
              a.href = b;
              this.Gi = a.hostname;
              this.ij = 87158;
            }
          };
          OBR.fraudDetection ||
            ((OBR.fraudDetection = new kj()), (OBR.Xh = new jj()), xg());
          var lj = a => {
              if (a && (a = a.v())) {
                var b = ["ob-dynamic-rec-container"]
                  .map(c => `.${c}`)
                  .join(",");
                return [].slice.call(OBR.g.H(a).querySelectorAll(b));
              }
            },
            mj = a => {
              if (!a) return null;
              const b =
                ".ob-rec-image-container .ob-rec-text .ob-rec-source .ob-rec-description .ob-grid-button-container .ob-rec-logo .ob-rec-date .ob-rec-author"
                  .split(" ")
                  .reduce(
                    (c, d) => (a.querySelector(d) ? c + "1" : c + "0"),
                    ""
                  );
              return b ? b : null;
            },
            nj = a => {
              if (a) return [a.v()];
            };
          var oj = `${OBR.i.Cp}api/loggerBatch/log-viewability`,
            pj = class {
              constructor() {
                this.startTime = Date.now();
                this.Di = [];
                this.ZG = 5136 === (Number(ic.om[1451]) || null);
              }
              clearTimeout() {
                this.Mh && (clearTimeout(this.Mh), (this.Mh = null));
              }
              log(a, b) {
                var c = +b.getAttribute("data-pos");
                c = {
                  timeElapsed: Date.now() - this.startTime,
                  requestId: a.o("req_id", null),
                  position: c,
                  renderables: mj(b),
                };
                var d = OBR.g.H(b).querySelector(".ob-rec-image-container"),
                  e = OBR.g.H(b).querySelector(".ob-rec-image-container img");
                d &&
                  ((c.imageHeight = d.offsetHeight),
                  (c.imageWidth = d.offsetWidth));
                e && (d = kd(e.src)) && (c.iu = d.iu);
                if ((e = b.querySelector("a.ob-dynamic-rec-link")))
                  (d = e.getAttribute("data-rec-en-did")),
                    (e = e.getAttribute("data-adv-id")),
                    d && (c.recdid = d),
                    e && (c.advid = e);
                d = a.o("oo", null);
                e = a.o("lsd", null);
                const f = a.Vc(!0);
                d && (c.oo = d);
                f && !d && e && (c.lsd = e);
                try {
                  const k = OBR.g.H(b).querySelector(".ob-rec-text"),
                    l = OBR.g.H(b).querySelector(".ob-rec-source"),
                    q = OBR.g.H(b).querySelector(".ob-rec-description");
                  k && (c.titleLength = k.innerHTML.length);
                  l && (c.sourceLength = l.innerHTML.length);
                  q && (c.descLength = q.innerHTML.length);
                } catch (k) {}
                this.Di.push(c);
                10 <= this.Di.length
                  ? (this.clearTimeout(), this.jn())
                  : this.Mh || (this.Mh = setTimeout(this.jn.bind(this), 1200));
                let g;
                b = null == (g = a.Y()) ? void 0 : g.ie();
                this.ZG && b && (this.clearTimeout(), this.jn());
                a = a.B;
                a.ny.Ud();
                (a.Ia && !a.Ia.B.Li.viewability && a.Ia.B.Ud) ||
                  a.Ud ||
                  ((a.Ud = !0),
                  a.Ia && (a.Ia.B.Ud = !0),
                  ma.fire(Object.assign({}, a.Wa, qf("viewability"))));
              }
              jn() {
                this.Mh = null;
                if (this.Di.length) {
                  var a = this.Di.splice(0);
                  a && a.length
                    ? OBR.i.Pk
                      ? navigator.sendBeacon(oj, JSON.stringify(a))
                      : OBR.za.jx({
                          url: oj,
                          data: a,
                          method: OBR.i.V.tr,
                          by: !0,
                        })
                    : OBR.error(Error("Failed to send viewability data"));
                }
              }
            };
          var qj = { Hm: !1 },
            rj = class {
              constructor() {
                this.IL = new pj();
                this.Xb = this.Xb.bind(this);
                this.zo = this.zo.bind(this);
                this.Fc = this.Fc.bind(this);
                this.WE = lj;
                this.Vg = nj;
                this.Ua = [];
              }
              zo(a) {
                return a.l("listingsViewability", !0);
              }
              Xb(a, b) {
                if (this.zo(a)) {
                  var c = Object.assign({}, qj);
                  b && Object.assign(c, b);
                  a.jy = c;
                  c.nh ||
                    ((b = a.jy.Hm ? this.Vg(a) : this.WE(a)) &&
                      0 < b.length &&
                      this.Fc(a, b));
                }
              }
              observe(a, b) {
                a = new OBR.IntersectionObserver({
                  threshold: [0.5],
                  unobserve: !0,
                  intersectPercentage: 0.5,
                  callback: (c, d, e, f) => this.qo(c, d, f),
                  callbackParams: [a, b],
                  element: b,
                  checkAbsoluteVisibility: !0,
                });
                this.Ua.push(a);
                a.observe();
                return a;
              }
              Fc(a, b) {
                return b.map(c => this.observe(a, c));
              }
              qo(a, b, c) {
                setTimeout(() => {
                  if (OBR.ca.eh(b, 50)) {
                    this.IL.log(a, b);
                    this.ha([c]);
                    const d = a.jy;
                    d.fk && d.fk(a, b, c);
                  } else this.observe(a, b);
                }, 1e3);
              }
              ha(a) {
                const b = a || this.Ua;
                b.forEach(c => c.unobserve());
                this.Ua = this.Ua.filter(c => -1 === b.indexOf(c));
              }
            };
          OBR.Ha || (OBR.Ha = new rj());
          var sj = class {
            constructor(a) {
              this.j = a;
              a = this.j.l("exploreMoreWidgetId", null);
              const b = document.createElement("div"),
                c = this.j.l("exploreMoreLogoUrl", !1),
                d = this.j.l("bgColorLogo", "#fff"),
                e = this.j.l("exploreMoreLogoWidth", "88.5px"),
                f = this.j.l("exploreMoreLogoLeftPosition", "0"),
                g = this.j.l("exploreMoreAdviseBubbleText", null),
                k = this.j.l("exploreMoreAdviseBubbleFontSize", "13px"),
                l = this.j.l("exploreMoreAdviseBubbleFontFamily", "inherit"),
                q = this.j.l("exploreMoreAdviseBubbleFontColor", "#fff"),
                h = this.j.l(
                  "exploreMoreAdviseBubbleBackgroundColor",
                  "#151e41"
                ),
                m = this.j.l("exploreMoreOverrideBackAction", !1),
                p = this.j.l("exploreMoreOverlayDvhIos", !1),
                r = this.j.ad(),
                t = !OBR.i.M && this.j.l("exploreMoreTriggerByMouse", !1),
                u = {
                  dt: this.j.qb(),
                  ft: this.j.Ac(),
                  ld: this.j.Bd(),
                  rj: this.j.dc(),
                  qj: this.j.cc(),
                  ji: this.j.bc(),
                  Ae: this.j.pb(),
                  Yd: this.j.xc(),
                  Fs: this.j.yc(),
                  ps: this.j.wc(),
                  vw: this.j.zc(),
                },
                v = this.j.l("exploreMoreMuteAudios", !1),
                w = this.j.l("exploreMoreHistoryStateInterval", 200),
                A = this.j.l("exploreMoreNativeHeader", !1),
                D = this.j.l("exploreMoreNativeHeaderHeight", null),
                E = this.j.l("nativeHeaderElementSelector", null),
                I = this.j.l("exploreMoreHash", !0),
                J = this.j.l("exploreMoreSafariInteractionWait", !0);
              this.options = {
                da: a,
                I: b,
                Ov: c,
                rB: d,
                hD: e,
                gD: f,
                ud: {
                  text: g,
                  color: q,
                  fontSize: k,
                  fontFamily: l,
                  bgColor: h,
                },
                isRTL: r,
                Ca: u,
                ik: m,
                Vv: v,
                wL: p,
                Bj: t,
                Wc: w,
                Zv: null,
                Cj: A,
                JH: D,
                rp: E,
                mF: I,
                xJ: J,
              };
              this.Ru = !1;
              this.Hg = this.Wc = null;
            }
            collapse() {
              yg(this);
              const a = Jg(this);
              a && a.removeEventListener("click", this.Qr);
              history.back();
            }
            rc() {
              Rg(this);
              return this;
            }
            ki(a = !1) {
              if (!Pg(this)) return this;
              if (!a && "complete" !== document.readyState) {
                document.addEventListener(
                  "readystatechange",
                  this.ki.bind(this)
                );
                if (this.Hg) return this;
                this.Hg = setTimeout(() => {
                  this.Hg && this.ki(!0);
                }, 3e4);
                return this;
              }
              !a &&
                document.removeEventListener(
                  "readystatechange",
                  this.ki.bind(this)
                );
              clearTimeout(this.Hg);
              this.Hg = null;
              setTimeout(() => {
                window.location.hash = Math.random().toString(36).slice(2);
                Qg(this);
                this.rc();
                this.j.ub(P.Ya.S.By);
              }, 0);
              return this;
            }
            Qr(a) {
              a.preventDefault();
            }
          };
          OBR.ct =
            OBR.ct ||
            (function () {
              let a;
              const b = c => {
                OBR.logger.log(`[ExploreMore] ${c}`);
              };
              b("loaded");
              return c => {
                if (!a) {
                  a = new sj(c);
                  var d = () => Og(Ng(Sg(Qg(a).rc()))),
                    e = () => Og(Ng(a)).ki();
                  if (window.history.state && 1 === history.state.obem) {
                    c.ub(P.Ya.S.Iy);
                    if (document.querySelector(".ob-explore-more")) return;
                    history.replaceState(null, "");
                  }
                  if (a.options.Bj && "complete" !== document.readyState) {
                    const k = () => {
                      "complete" === document.readyState &&
                        (document.removeEventListener("readystatechange", k),
                        d());
                    };
                    document.addEventListener("readystatechange", k);
                  } else
                    Pg(a) ? (c.ub(P.Ya.S.az), e()) : (c.ub(P.Ya.S.Zy), d());
                  var f = () => {
                      let k, l, q, h;
                      const m =
                        null == (k = performance)
                          ? void 0
                          : null == (l = k.getEntriesByType("navigation"))
                          ? void 0
                          : null == (q = l.at(0))
                          ? void 0
                          : null == (h = q.domComplete)
                          ? void 0
                          : h.toFixed(0);
                      m && c.ub(P.Ya.S.Ny, { time: m });
                    },
                    g = () => {
                      "complete" === document.readyState
                        ? (b("dom ready"),
                          a.Wc && clearInterval(a.Wc),
                          f(),
                          document.removeEventListener("readystatechange", g))
                        : b("dom not ready yet");
                    };
                  "complete" === document.readyState
                    ? (b("dom ready"), f(), a.Wc && clearInterval(a.Wc))
                    : (c.ub(P.Ya.S.Oy),
                      document.addEventListener("readystatechange", g));
                  (() =>
                    new Promise((k, l) => {
                      if (
                        c.l("exploreMoreBiEvents", !1) &&
                        navigator.userActivation
                      ) {
                        var q = setInterval(() => {
                          navigator.userActivation.hasBeenActive &&
                            (clearInterval(q), k());
                        }, 500);
                        setTimeout(() => {
                          clearInterval(q);
                          l();
                        }, 3e4);
                      } else l();
                    }))()
                    .then(() => {
                      navigator.userActivation.hasBeenActive && c.ub(P.Ya.S.Yz);
                    })
                    .catch(() => {});
                }
              };
            })();
          var ch = {
              onWidgetViewd: 0,
              onRecViewd: 1,
              onRec50Viewed: 2,
              reelMRC50: 3,
            },
            tj = class {
              constructor() {
                this.Ua = [];
                this.Un = this.Un.bind(this);
                this.Sn = this.Sn.bind(this);
              }
              Un(a) {
                const b = a.ba("eventTrackers"),
                  c = this.Vg(a);
                if (b && c) {
                  c.setAttribute("data-ob-trackers", !0);
                  const d = OBR.g.createElement("div");
                  d.classList.add("ob-pixels");
                  OBR.g.H(c).querySelector(".ob-pixels") || c.appendChild(d);
                  for (let e in b) Wg(this, a, c, e, b[e]);
                }
              }
              Sn(a) {
                let b = [];
                if (a && a.doc)
                  return (b = a.doc.map(c => {
                    var d = c.pixels,
                      e = c.eventTrackers
                        ? c.eventTrackers.filter(f => 1 === f.event)
                        : [];
                    d && d.length && (OBR.g.zD(d), delete c.pixels);
                    e &&
                      e.length &&
                      ((d = e.filter(f => 2 == f.method)),
                      (e = e.filter(f => 1 == f.method)),
                      Xg(e),
                      Yg(d),
                      (c.eventTrackers = c.eventTrackers
                        ? c.eventTrackers.filter(f => 1 !== f.event)
                        : []));
                    return c;
                  }));
              }
              Ni(a, b, c) {
                if (c && c.length) {
                  var d = this.Vg(a),
                    e = a.l("fireImpressionPixelsOutsideIframe", !1),
                    f = c.filter(g => 2 == g.method);
                  c = c.filter(g => 1 == g.method);
                  ah(d, c, e);
                  bh(d, b, f, a);
                }
              }
              observe(a, b, c, d, e) {
                a = new OBR.IntersectionObserver({
                  threshold: { [3]: 1, [2]: 0.5, [4]: 0, default: 1 }[d],
                  unobserve: !0,
                  callback: this.qo.bind(this),
                  callbackParams: [a, b, c, d, e],
                  element: b,
                  checkAbsoluteVisibility: !0,
                });
                this.Ua.push(a);
                a.observe();
              }
              Vg(a) {
                if (a) return a.v();
              }
              qo(a, b, c, d, e) {
                if (4 === d) this.Ni(a, c, e);
                else {
                  var f = 2 === d ? 50 : 100;
                  setTimeout(() => {
                    OBR.ca.eh(b, f)
                      ? this.Ni(a, c, e)
                      : this.observe(a, b, c, d, e);
                  }, 1e3);
                }
              }
              ha() {
                this.Ua.forEach(a => {
                  a && a.unobserve && a.unobserve();
                });
                this.Ua = [];
              }
            };
          OBR.Fg || (OBR.Fg = new tj());
          var uj = class {
              constructor() {
                this.Pq = OBR._jsc.Mf();
                this.DG = OBR.i.Wj;
              }
              um(a, b) {
                if (a && a.v()) {
                  var c = a.v();
                  var d = OBR.g.H(c).querySelectorAll(".ob-lazy-bgimg");
                  c =
                    OBR.g.H(c).querySelectorAll("img.ob-lazy-img").length ||
                    d.length;
                } else c = !1;
                if (c && !a.pu && a.v())
                  if (
                    ((b = b || {}),
                    (b = {
                      rootMargin: `${a.l("imagesLazyLoadMargin", 500)}px`,
                      j: a,
                      Ka: a.v(),
                      mode: b.Gv || 0,
                    }),
                    this.DG)
                  )
                    eh(this, b, ".ob-lazy-bgimg"), fh(this, b);
                  else {
                    if (b && b.Ka) {
                      c = Db(b.Ka);
                      var e = b.rootMargin;
                      d = this.Pq;
                      const f = Object.assign({}, c);
                      e = parseInt(e);
                      0 > c.y ? (f.height += e) : c.y > d.height && (f.y -= e);
                      c = f;
                      d = this.Pq;
                      c =
                        0 <
                        (Math.min(c.width + c.x, d.width + d.x) -
                          Math.max(c.x, d.x)) *
                          (Math.min(c.height + c.y, d.height + d.y) -
                            Math.max(c.y, d.y));
                    } else c = !1;
                    c || a.$c() ? this.Or(b) : eh(this, b);
                  }
              }
              Or(a, b, c = ".ob-lazy-bgimg, .ob-lazy-img") {
                const d = a.j.v();
                a.Ka &&
                  a.Ka === d &&
                  (b && 0 === a.mode
                    ? (this.hm(b),
                      0 === OBR.g.H(a.Ka).querySelectorAll(c).length &&
                        (a.j.pu = !0))
                    : ([].slice
                        .call(OBR.g.H(a.Ka).querySelectorAll(c))
                        .forEach(this.hm),
                      (a.j.pu = !0)));
              }
              hm(a) {
                if ("IMG" === a.tagName.toUpperCase()) {
                  const b = a.getAttribute("data-ob-src");
                  b &&
                    (a.setAttribute("src", b),
                    a.removeAttribute("data-ob-src"),
                    OBR.g.Fa(a, "ob-lazy-img"));
                } else OBR.g.Fa(a, "ob-lazy-bgimg");
              }
            },
            vj = new uj();
          OBR.tl = OBR.tl || {
            lg: (a, b) => {
              if (!b) {
                b = { Gv: 0 };
                const c = RegExp("swipe-strip|touch-strip|carousel|timeline");
                a.l("recMode", "").match(c) && (b.Gv = 1);
              }
              vj.um(a, b);
            },
          };
          var wj = a => {
            if (a) {
              var b = !1,
                c = NaN,
                d = NaN,
                e = !1,
                f = OBR.g.H(a).querySelectorAll("a");
              f &&
                0 !== f.length &&
                (f.forEach(g => {
                  g.addEventListener("click", k => {
                    if (e) return k.preventDefault(), !1;
                  });
                }),
                a.addEventListener("mousedown", g => {
                  b = !0;
                  c = g.clientX;
                  d = a.scrollLeft;
                  e = !1;
                  a &&
                    ((a.style.cursor = "grabbing"),
                    a.classList.add("ob-grabbing"));
                }),
                (f = () => {
                  b &&
                    ((b = !1),
                    a &&
                      ((a.style.cursor = ""),
                      a.classList.remove("ob-grabbing")),
                    (a.scrollLeft = a.scrollLeft),
                    (e = a.scrollLeft !== d));
                }),
                a.addEventListener("mouseup", f),
                a.addEventListener("mouseleave", f),
                a.addEventListener("mousemove", g => {
                  b && (a.scrollLeft = d + (c - g.clientX));
                }),
                OBR.g.ia(
                  "\n  .ob-grabbing {\n    scroll-behavior: auto !important;\n  }\n  .ob-grabbing a {\n    cursor: grabbing !important;\n    scroll-snap-align: none !important;\n  }\n  .ob-grabbing > * {\n    scroll-snap-align: none !important;\n  }\n  .ob-grabbing img {\n    -webkit-user-drag: none;\n    -khtml-user-drag: none;\n    -moz-user-drag: none;\n    -o-user-drag: none;\n    user-drag: none;\n  }\n  "
                ));
            }
          };
          OBR.Tv = OBR.Tv || wj;
          OBR.proxy = OBR.proxy || {
            uH: function (a, b, c) {
              OBR.s.N(b, c, this, {
                currentWidget: a,
                beforeLoadTime: new Date().getTime(),
              });
            },
          };
          window.OB_PROXY = window.OB_PROXY || {
            getSet: function (a, b, c) {
              return a.l(b, c);
            },
            getRequest: function (a, b, c) {
              return a.o(b, c);
            },
            getWidgetId: function (a) {
              return a.D();
            },
            makeHandshake: function (a) {
              OBR.s.T(a);
            },
            hasJqueryInstalled: function () {
              return OBR.g.ku();
            },
            getWidgetIndex: function (a) {
              return a.G();
            },
            getMeta: function (a, b, c) {
              return a.ba(b, c);
            },
            getFeedParentWidget: function (a) {
              return a.Y();
            },
            getFeedFatherAB: function (a) {
              return a.zd();
            },
            getFeedLayerAB: function (a) {
              return a.Cn();
            },
            isFeedCard: function (a) {
              return a.kG();
            },
            getUserId: function (a) {
              return a.pb();
            },
            getDataSrcFinalUrl: function (a) {
              var b = a.Y();
              const c = a.wc() || (null == b ? void 0 : b.wc()),
                d = a.yc() || (null == b ? void 0 : b.yc());
              b = a.zc() || (null == b ? void 0 : b.zc());
              return c ? c : b ? b : d ? d : a.Ja();
            },
            getAdBlockerStatus: function () {
              return OBR.kb.tj();
            },
            getExtId: function (a) {
              let b = "";
              const c = OBR.g.Rf(OBR.i.$m);
              a = OBR.g.Rf(a.qb());
              if (c || a) b = a || c;
              return b;
            },
            getExtId2: function (a) {
              [, a] = le(a);
              return a;
            },
            setConsentData: function (a, b) {
              if (a && "string" === typeof a) {
                var c = OBR.ga;
                c.Db = b;
                a = OBR.g.oa(a);
                switch (b) {
                  case 1:
                    c.Za = a;
                    OBR.g.xa(OBR._jsc.C.Ge, c.Za);
                    break;
                  case 2:
                    c.nb = a;
                    OBR.g.xa(OBR._jsc.C.pc, c.nb);
                    break;
                  case "ccpa":
                    (c.Zb = a), OBR.g.xa(OBR._jsc.C.Wh, c.Zb);
                }
              }
            },
            getWidgets: function () {
              return OBR.F;
            },
            getWidgetByIdx: function (a) {
              return OBR.F[a];
            },
            getIsWidgetRendered: function (a) {
              return a.kc();
            },
            generateOdbCall: function (a) {
              return OBR.wa.Dt(OBR.F[a]);
            },
            getRawResponse: a => a.cj(),
            getExtraParams: function (a) {
              return OBR.i.cb ? OBR.i.gd.extraParams : a.yd();
            },
            getCardIdx: function (a) {
              return a.Si();
            },
            getPermalinkFieldName: function (a) {
              a = a.Y() || a;
              return a.wc()
                ? "bundleUrl"
                : a.zc()
                ? "portalUrl"
                : a.yc()
                ? "contentUrl"
                : "permalink";
            },
            getInstallationKey: function (a) {
              return (a.Y() || a).cc();
            },
            getContainer: function (a) {
              return a.v();
            },
            getPubImpId: a => {
              if (a) {
                var b = OBR.g.Yk(a.Bd() || OBR.i.ld);
                !b && a.Y() && (b = OBR.g.Yk(a.Y().Bd() || OBR.i.ld));
                return b;
              }
            },
            isAppBridge: () => OBR.i.cb,
            run: () => {
              OBR.controller.continue();
            },
          };
          OBR.extern =
            OBR.extern ||
            (function () {
              var a = OBR,
                b = {
                  getStat: function () {},
                  showDescription: function (c, d) {
                    a.s.N(
                      OBR.s.u.El,
                      function () {
                        OBR.sw.tH(c, d);
                      },
                      this
                    );
                  },
                  returnedHtmlData: function (c, d) {
                    a.controller.vf(c, d);
                  },
                  returnedHtmlAndVacData: function (c, d) {
                    a.controller.vf(c, d);
                  },
                  returnedJsonData: function (c, d) {
                    a.controller.iw(c, d);
                  },
                  returnedError: function (c) {
                    OBR.logger.log("Call made using extern class");
                    a.logger.log("Callback error" + c);
                  },
                  callRecs: function (c, d, e) {
                    OBR.logger.log("Call made using extern class");
                    a.controller.hp(c, f => {
                      try {
                        d(f);
                      } catch (g) {
                        OBR.logger.log(g);
                        try {
                          e && "function" === typeof e && e(g);
                        } catch (k) {
                          OBR.logger.log(k);
                        }
                      }
                    });
                  },
                  callClick: function (c, d) {
                    OBR.logger.log("Call made using extern class");
                    a.controller.qf(c, d);
                  },
                  callWhatIs: function (c, d, e) {
                    OBR.s.N(
                      OBR.s.u.di,
                      function () {
                        OBR.Qq.ss(c, d, e);
                      },
                      this
                    );
                    return !1;
                  },
                  callUserZapping: function (c, d, e, f, g) {
                    OBR.s.N(
                      OBR.s.u.Dr,
                      function () {
                        OBR.AL.LM(c, d, e, f, g);
                      },
                      this
                    );
                    return !1;
                  },
                  zappingFormAction: function (c, d, e, f, g) {
                    OBR.AL.jO(c, d, e, f, g);
                    return !1;
                  },
                  userZappingMessage: function (c) {
                    OBR.logger.log(c.message);
                  },
                  recClicked: function (c, d) {
                    OBR.logger.log("Call made using extern class");
                    a.controller.Iw(d);
                  },
                  imageError: function (c) {
                    OBR.logger.log("Call made using extern class");
                    OBR.error({
                      name: "obm-ImageError",
                      message: "Error loading as image: " + c.src,
                    });
                    a.g.ys(c);
                  },
                  carouselLogoError: function (c, d) {
                    OBR.logger.log("Call made using extern class");
                    a.controller.OA(c, d);
                  },
                  logError: function (c, d, e, f) {
                    a.g.fd(c, d, e, f);
                  },
                  openNativeVideoPlayer: function (
                    c,
                    d,
                    e,
                    f,
                    g,
                    k,
                    l,
                    q,
                    h,
                    m,
                    p,
                    r,
                    t,
                    u,
                    v,
                    w,
                    A
                  ) {
                    a.s.N(
                      a.s.u.Zf,
                      function () {
                        A = A ? A : a.F[r].o("req_id", null);
                        var D = a.F[r].o("lang", "en"),
                          E = a.F[r].o("lsd", null),
                          I = a.F[r].o("pid", null),
                          J = a.F[r].o("sid", null),
                          V = a.F[r].o("wnid", null),
                          O = a.F[r].o("gl", ""),
                          R = a.F[r].Ug(),
                          W = a.F[r].o("widgetJsId", a.F[r].D()),
                          Z = a.F[r].o("req_id", "-1"),
                          ca = a.F[r].o("pvId", "-1");
                        window.NVPInjector.main.init(
                          a.g.CL([
                            c,
                            d,
                            e,
                            f,
                            g,
                            k,
                            l,
                            q,
                            h,
                            m,
                            p,
                            r,
                            t,
                            u,
                            A,
                            a.i.pk,
                            D,
                            E,
                            I,
                            J,
                            V,
                            v,
                            O,
                            R,
                            W,
                            Z,
                            ca,
                          ]),
                          a.F[r].Tg(),
                          w
                        );
                      },
                      this
                    );
                    return !1;
                  },
                  openOverlay: function (c) {
                    a.s.N(
                      a.s.u.Zf,
                      function () {
                        var d = c.getAttribute("data-nvp");
                        if (null !== d && "string" === typeof d) {
                          d = window.JSON.parse(
                            c
                              .getAttribute("data-nvp")
                              .replace(/"/g, "#$#")
                              .replace(/'/g, '"')
                              .replace(/\\"/g, "'")
                              .replace("#$#", '\\"')
                          );
                          var e = a.F[d.widgetIdx];
                          d.platform = a.i.pk;
                          d.lang = e.o("lang", "en");
                          d.uuid = e.o("lsd", null);
                          d.publisherId = e.o("pid", null);
                          d.sourceId = e.o("sid", null);
                          d.widgetNumberId = e.o("wnid", null);
                          d.location = e.o("gl", "");
                          d.timestamp = e.Ug();
                          window.NVPInjector.main.recClicked(d, e.Tg());
                        } else
                          a.error({
                            name: "obm-nvpError",
                            message: "Error parsing data-nvp: " + d,
                            stack: "None",
                          });
                      },
                      this
                    );
                    return !1;
                  },
                  handshakeNVP: function () {
                    a.s.T(OBR.s.u.Zf);
                  },
                  onVideoClick: function (c, d) {
                    a.controller.jw(c, d);
                  },
                  manualVideoClicked: function (c, d, e, f, g) {
                    a.controller.Qv(c, d, e, f, g);
                  },
                  errorInjectionHandler: function (c) {
                    OBR.F[c].XM(c);
                  },
                  reloadWidget: function () {
                    OBR.logger.log("## Reload widget");
                    a.controller.sk();
                  },
                  researchWidget: function () {
                    OBR.logger.log("## Research widget");
                    a.controller.ue();
                  },
                  renderSpaWidgets: function (c) {
                    OBR.logger.log(
                      "## renderSpaWidgets - SPA has triggered a widget render"
                    );
                    OBR.i.Fh && OBR.i.Fh.SC !== c
                      ? (OBR.logger.log(
                          "## renderSpaWidgets - page navigation detected. triggering reload"
                        ),
                        a.controller.sk())
                      : (OBR.logger.log(
                          `## renderSpaWidgets - ${
                            OBR.i.Fh
                              ? "still on same page"
                              : "first widget mounting detected"
                          }. researching for new widgets on page`
                        ),
                        a.controller.ue());
                    OBR.i.Fh = OBR.i.Fh || {};
                    OBR.i.Fh.SC = c;
                  },
                  registerOnWidgetRendered: function (c) {
                    OBR.controller.gJ(c);
                  },
                  cancelRecommendation: function (c) {
                    OBR.logger.log("cancel recommendation with bocr " + c);
                    a.controller.BB(c);
                  },
                  cancelRecs: function (c, d, e) {
                    OBR.logger.log(
                      "cancel recommendation by doc url " +
                        c +
                        " publisher id = " +
                        d +
                        " isAd = " +
                        e
                    );
                    a.controller.CB(c, d, e);
                  },
                  refreshWidget: function (c) {
                    OBR.logger.log("## Refresh widget");
                    a.controller.Df(c);
                  },
                  triggerLazyRender: function (c) {
                    OBR.logger.log("## trigger lazy render");
                    c || 0 === c
                      ? OBR.controller.hn(`widgetLazyRender_${c}`)
                      : a.F.forEach(d => {
                          d.Ro() &&
                            OBR.controller.hn(`widgetLazyRender_${d.G()}`);
                        });
                  },
                  setABtest: function (c) {
                    c && (a.i.Ur = "&obAbtest=" + c);
                  },
                  refreshSpecificWidget: function (c, d) {
                    OBR.logger.log("## Refresh SPECIFIC widget");
                    "string" !== typeof d
                      ? a.s.N(
                          a.s.u.Jl,
                          function () {
                            OBR.controller.Pw(c, d);
                          },
                          this
                        )
                      : OBR.controller.Pw(c, d);
                  },
                  refreshSpecificWidgetWithData: function (c, d, e, f) {
                    OBR.logger.log(
                      "## Refresh SPECIFIC widget with server response"
                    );
                    OBR.controller.$I(c, d, e, f);
                  },
                  getCountOfRecs: function (c) {
                    return a.controller.TD(c);
                  },
                  onOdbReturn: function (c, d) {
                    a.controller.aJ(c, d);
                  },
                  closeCard: function () {
                    a.Oi.BC();
                  },
                  closeModal: function () {
                    try {
                      a.modal.hideModal();
                    } catch (c) {
                      OBR.error(c);
                    }
                  },
                  handshakeModule: function (c) {
                    try {
                      var d = OBR.s.St(c);
                      d
                        ? OBR.s.T(d)
                        : a.error({
                            name: "obm-MakeHandShakeError",
                            message:
                              "Error in module: " +
                              c +
                              ", Err: Module not found",
                            stack: "None",
                          });
                    } catch (e) {
                      OBR.error(e);
                    }
                  },
                  initGnrModule: (c, d) => {
                    Pc(c, d);
                  },
                  gnrLazyLoadedModules: {
                    modules: {},
                    makeHandshake: (c, d, e) => {
                      const f = Object.keys(OBR.s.u)
                        .filter(g => g.includes(c))
                        .find(g => g.includes(d));
                      b.gnrLazyLoadedModules.modules[c] ||
                        (b.gnrLazyLoadedModules.modules[c] = {});
                      b.gnrLazyLoadedModules.modules[c][d] =
                        b.gnrLazyLoadedModules.modules[c][d] || e;
                      b.handshakeModule(f);
                    },
                  },
                  callLoadMore: function (c, d) {
                    OBR.s.N(
                      OBR.s.u.$h,
                      function () {
                        OBR.Zo.bh(c, d);
                      },
                      this
                    );
                  },
                  enableTbx: function () {
                    OBR.Sd ? OBR.Sd.zu() : (OBR.i.nw = !0);
                  },
                  closeTbx: function () {
                    OBR.Sd.DC();
                  },
                  scrollIntoView: function () {
                    $f();
                  },
                  ampIntersectionChange: function (c) {
                    OBR.ca.rm = c;
                  },
                  ampUpdateViewportSize: function () {
                    OBR._jsc.Jf(OBR.ca);
                  },
                  video: {},
                };
              b.video.getVideoRecs = function (c, d, e, f, g, k, l) {
                OBR.s.N(
                  OBR.s.u.Sl,
                  function () {
                    OBR.video.SE(c, d, e, f, g, k, l);
                  },
                  this
                );
              };
              b.video.videoClicked = function (c) {
                OBR.video.DL(c);
              };
              b.video.event = function (c, d) {
                a.controller.zp(c, d);
              };
              b.blockFeedExpansion = (c = 0, d = "") => {
                OBR.i.ks = { feedIdx: +c, observeElementSelector: d };
              };
              b.recReasons = {};
              b.recReasons.backFromScopedWidget = function (c) {
                return a.controller.pB(c);
              };
              b.truncateText = function (c, d, e) {
                dg(OBR.Vs, c, d, e);
              };
              b.reloadPager = function (c, d = !1) {
                (c = OBR.F[c]) && OBR.controller.pw(c, d);
              };
              b.triggerClickPixels = function (c, d, e) {
                a.controller.Xx(c, d, e);
              };
              b.mraidOpen = (c, d) => {
                a.controller.nL(c, d);
              };
              b.customClickHandler = (c, d, e, f) => {
                a.controller.Yx(c, d, e, f);
              };
              b.onCheqResponse = c => {
                a.Xh.Cm(c);
              };
              b.callViewed = c => {
                try {
                  OBR.controller.AB(c);
                } catch (d) {}
              };
              b.feed = {};
              b.feed.loadNextChunk = c => Ri && Ri.Ei(c);
              b.renderJSFormatWidget = (c, d, e) => {
                OBR.controller.oJ(c, d, e);
              };
              b.renderJSFormatChunk = c => {
                OBR.controller.uk(c);
              };
              b.clipError = c => {
                var d = c ? c.error : null;
                let e = "",
                  f = "";
                d && ((e = d.code), (f = e.message));
                d = `Error loading as video: ${c.src}`;
                OBR.error({
                  name: "obm-ClipError",
                  message:
                    d +
                    (e ? `; Error code: ${e}` : "") +
                    (f ? `; ErrorMessage: ${f}` : ""),
                  errorEleUrl: c.src,
                });
              };
              b.reserveVideoIdx = () => {
                0 === OBR.i.le && (OBR.i.le = 100);
                return ++OBR.i.le;
              };
              return b;
            })();
          "undefined" !== typeof window.OBBridge &&
            ((OBR.clickHandler = {
              open: (a, b, c) => window.OBBridge.clickHandler.open(a, b, c),
            }),
            (OBR.viewHandler = {
              loadMore: a => window.OBBridge.viewHandler.loadMore(a),
              setViewData: a => {
                OBR.ca.Xj = a;
                a = new CustomEvent("obBridgeExposureChanged", { detail: a });
                window.dispatchEvent(a);
              },
            }));
          window.outbrain = window.outbrain || {};
          window.outbrain.returnedHtmlData = function (a, b) {
            OBR.controller.vf(a, b);
          };
          window.outbrain.returnedJsonData = function (a, b) {
            OBR.controller.iw(a, b);
          };
          window.outbrain.returnedError = function (a) {
            OBR.logger.log("Callback error" + a);
          };
          window.outbrain.callRecs = function (a, b) {
            OBR.controller.hp(a, b);
          };
          window.outbrain.callClick = function (a, b) {
            OBR.controller.qf(a, b);
          };
          window.outbrain.callWhatIs = function (a, b, c) {
            OBR.s.N(
              OBR.s.u.di,
              function () {
                OBR.Qq.ss(a, b, c);
              },
              this
            );
          };
          window.outbrain.callLoadMore = function (a, b) {
            OBR.s.N(
              OBR.s.u.$h,
              function () {
                OBR.Zo.bh(a, b);
              },
              this
            );
          };
          window.outbrain.recClicked = function (a, b) {
            OBR.controller.Iw(b);
          };
          window.outbrain.imageError = function (a) {
            OBR.g.ys(a);
          };
          window.outbrain.closeModal = function () {
            try {
              OBR.modal.hideModal();
            } catch (a) {
              OBR.error(a);
            }
          };
          window.outbrain_rater = window.outbrain_rater || {};
          window.outbrain_rater.returnedHtmlData = function (a, b) {
            OBR.controller.vf(a, b);
          };
          window.outbrain_rater.returnedCancelOdbData = function (a) {
            OBR.controller.vJ(a);
          };
          !0 === OBR.i.Tu &&
            (OBR.logger.log("Widget Start!"),
            (OBR.i.Tu = !1),
            "boolean" === typeof window.OB_PASSIVE_MODE &&
            !0 === window.OB_PASSIVE_MODE
              ? OBR.logger.log("passive")
              : OBR.controller.Zw(),
            (OBR.ready = !0),
            OBR.On.xD(),
            ma.fire(Object.assign({}, qf("ready"))));
        }).call(window);
      };
      if (!OBR || !OBR.settings) {
        ccs();
        return;
      }
      var dwt = OBR.settings.delayWidgetTime;
      var dwi = OBR.settings.delayWidgetInterval;
      var dwot = OBR.settings.delayWidgetObjectTrigger;
      if (!dwi || !dwi || !dwot) {
        ccs();
        return;
      }
      OBR.widgetDelayInterval = 0;
      if (window[dwot]) {
        ccs();
        return;
      }
      var tt = dwt * dwi;
      var t = 0;
      var doneFn = function (id) {
        clearInterval(id);
        ccs();
      };
      var i = setInterval(function () {
        OBR.widgetDelayInterval += 1;
        t = t + dwt;
        if (t >= tt) {
          doneFn(i);
          return;
        }
        if (window[dwot]) {
          doneFn(i);
          return;
        }
      }, dwt);
    } catch (e) {
      window.OBR.error(e);
    }
  })();
