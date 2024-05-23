// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8bDoD":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "5a1bda1ab8fca702";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"3cYfC":[function(require,module,exports) {
var _addEditingEvent = require("./addEditingEvent");
var _addFormSumbitEvent = require("./addFormSumbitEvent");
var _addSelectRowEvent = require("./addSelectRowEvent");
var _addTableSortEvent = require("./addTableSortEvent");
var _createForm = require("./createForm");
"use strict";
const table = document.querySelector("table");
(0, _addTableSortEvent.addTableSortEvent)(table);
(0, _addSelectRowEvent.addSelectRowEvent)(table);
const form = (0, _createForm.createForm)();
(0, _addFormSumbitEvent.addFormSubmitEvent)(form);
(0, _addEditingEvent.addEditingEvent)(table);

},{"./addEditingEvent":"2a5Yx","./addFormSumbitEvent":"65Pyo","./addSelectRowEvent":"jQyIX","./addTableSortEvent":"8FvTG","./createForm":"jakqM"}],"2a5Yx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addEditingEvent", ()=>addEditingEvent);
var _addNewEmployee = require("./addNewEmployee");
var _showNotification = require("./showNotification");
var _utils = require("./utils");
var _validation = require("./validation");
"use strict";
const CELL_INPUT_CLASS = "cell-input";
function addCellFieldInput(cell, columnName, type = "text") {
    const oldValue = cell.textContent;
    const input = document.createElement("input");
    const validation = type === "text" ? (0, _validation.validateText) : (0, _validation.validateNumber);
    if (columnName === (0, _utils.HEADER_SALARY)) input.value = oldValue.replace(/[$,]/g, "");
    else input.value = oldValue;
    input.name = columnName;
    input.classList.add(CELL_INPUT_CLASS);
    input.type = type;
    cell.textContent = "";
    cell.appendChild(input);
    input.focus();
    input.onblur = ()=>{
        if (input.value === "") {
            cell.textContent = oldValue;
            return;
        }
        const error = validation(input);
        if (error) {
            (0, _showNotification.showNotification)((0, _utils.ERROR_TITLE), error, false);
            input.focus();
            return;
        }
        if (columnName === (0, _utils.HEADER_SALARY)) cell.textContent = (0, _addNewEmployee.formatSalary)(input.value);
        else cell.textContent = input.value;
        (0, _showNotification.showNotification)((0, _utils.SUCCES_TITLE), "Cell updated", true);
    };
    input.addEventListener("keydown", (e)=>{
        if (e.key === "Enter") {
            if (input.value === "") {
                cell.textContent = oldValue;
                return;
            }
            const error = validation(input);
            if (error) {
                (0, _showNotification.showNotification)((0, _utils.ERROR_TITLE), error, false);
                cell.textContent = oldValue;
            } else {
                if (columnName === (0, _utils.HEADER_SALARY)) cell.textContent = (0, _addNewEmployee.formatSalary)(input.value);
                else cell.textContent = input.value;
                (0, _showNotification.showNotification)((0, _utils.SUCCES_TITLE), "Cell updated", true);
            }
        }
    });
}
function addCellFieldSelect(cell) {
    const select = document.createElement("select");
    const oldValue = cell.textContent;
    (0, _utils.OFFICE_OPTIONS).forEach((option)=>{
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.textContent = option;
        if (oldValue === option) optionElement.selected = true;
        select.appendChild(optionElement);
    });
    cell.textContent = "";
    cell.appendChild(select);
    select.focus();
    select.onblur = ()=>{
        cell.textContent = select.value;
        (0, _showNotification.showNotification)((0, _utils.SUCCES_TITLE), "Cell updated", true);
    };
    select.addEventListener("keydown", (e)=>{
        if (e.key === "Enter") {
            cell.textContent = select.value;
            (0, _showNotification.showNotification)((0, _utils.SUCCES_TITLE), "Cell updated", true);
        }
    });
}
function addEditingEvent(table) {
    const tableBody = table.querySelector("tbody");
    const tableHeadRow = table.querySelector("thead tr");
    tableBody.addEventListener("dblclick", (e)=>{
        const tableCell = e.target.closest("td");
        if (!tableCell || tableCell.querySelector("input, select")) return;
        const currentCellIndex = [
            ...tableCell.parentNode.children
        ].findIndex((cell)=>cell === tableCell);
        const currentColumnName = tableHeadRow.children[currentCellIndex].textContent.toLowerCase();
        switch(currentColumnName){
            case 0, _utils.HEADER_NAME:
            case 0, _utils.HEADER_POSITION:
                addCellFieldInput(tableCell, currentColumnName);
                break;
            case 0, _utils.HEADER_OFFICE:
                addCellFieldSelect(tableCell);
                break;
            case 0, _utils.HEADER_AGE:
            case 0, _utils.HEADER_SALARY:
                addCellFieldInput(tableCell, currentColumnName, (0, _utils.TYPE_NUMBER));
                break;
        }
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./showNotification":"2bzJL","./utils":"bVlgj","./validation":"64jdM","./addNewEmployee":"01Z9X"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"2bzJL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "showNotification", ()=>showNotification);
"use strict";
const TITLE_CLASS = "title";
const SUCCESS_CLASS = "success";
const ERROR_CLASS = "error";
const NOTIFICATION_CLASS = "notification";
const NOTIFICATION_DATA_QA = "notification";
const NOTIFICATION_TIMEOUT = 3000;
function removeNotification(notification) {
    document.body.removeChild(notification);
}
function createTitle(titleName) {
    const title = document.createElement("h3");
    title.textContent = titleName;
    title.className = TITLE_CLASS;
    return title;
}
function createMessage(message) {
    const paragraph = document.createElement("p");
    paragraph.textContent = message;
    return paragraph;
}
function showNotification(titleName, message, isSuccess) {
    const notification = document.createElement("div");
    const title = createTitle(titleName);
    const paragraph = createMessage(message);
    notification.dataset.qa = NOTIFICATION_DATA_QA;
    notification.classList.add(NOTIFICATION_CLASS, isSuccess ? SUCCESS_CLASS : ERROR_CLASS);
    notification.appendChild(title);
    notification.appendChild(paragraph);
    document.body.appendChild(notification);
    setTimeout(()=>{
        removeNotification(notification);
    }, NOTIFICATION_TIMEOUT);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bVlgj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HEADER_NAME", ()=>HEADER_NAME);
parcelHelpers.export(exports, "HEADER_POSITION", ()=>HEADER_POSITION);
parcelHelpers.export(exports, "HEADER_OFFICE", ()=>HEADER_OFFICE);
parcelHelpers.export(exports, "HEADER_AGE", ()=>HEADER_AGE);
parcelHelpers.export(exports, "HEADER_SALARY", ()=>HEADER_SALARY);
parcelHelpers.export(exports, "ORDER_ASC", ()=>ORDER_ASC);
parcelHelpers.export(exports, "ORDER_DESC", ()=>ORDER_DESC);
parcelHelpers.export(exports, "TAG_INPUT", ()=>TAG_INPUT);
parcelHelpers.export(exports, "TAG_SELECT", ()=>TAG_SELECT);
parcelHelpers.export(exports, "TYPE_TEXT", ()=>TYPE_TEXT);
parcelHelpers.export(exports, "TYPE_NUMBER", ()=>TYPE_NUMBER);
parcelHelpers.export(exports, "OFFICE_OPTIONS", ()=>OFFICE_OPTIONS);
parcelHelpers.export(exports, "ERROR_TITLE", ()=>ERROR_TITLE);
parcelHelpers.export(exports, "SUCCES_TITLE", ()=>SUCCES_TITLE);
parcelHelpers.export(exports, "MIN_TEXT_LENGTH", ()=>MIN_TEXT_LENGTH);
parcelHelpers.export(exports, "MAX_TEXT_LENGTH", ()=>MAX_TEXT_LENGTH);
parcelHelpers.export(exports, "MIN_AGE", ()=>MIN_AGE);
parcelHelpers.export(exports, "MAX_AGE", ()=>MAX_AGE);
parcelHelpers.export(exports, "SUCCESS_MESSAGE", ()=>SUCCESS_MESSAGE);
parcelHelpers.export(exports, "ERRORS", ()=>ERRORS);
parcelHelpers.export(exports, "employeeFields", ()=>employeeFields);
const HEADER_NAME = "name";
const HEADER_POSITION = "position";
const HEADER_OFFICE = "office";
const HEADER_AGE = "age";
const HEADER_SALARY = "salary";
const ORDER_ASC = "asc";
const ORDER_DESC = "desc";
const TAG_INPUT = "input";
const TAG_SELECT = "select";
const TYPE_TEXT = "text";
const TYPE_NUMBER = "number";
const OFFICE_OPTIONS = [
    "Tokyo",
    "Singapure",
    "London",
    "New York",
    "Edinburgh",
    "San Francisco"
];
const ERROR_TITLE = "Error";
const SUCCES_TITLE = "Success";
const MIN_TEXT_LENGTH = 4;
const MAX_TEXT_LENGTH = 30;
const MIN_AGE = 18;
const MAX_AGE = 90;
const SUCCESS_MESSAGE = "Employee added successfully";
const ERRORS = {
    MIN_TEXT_LENGTH: (fieldName)=>`${fieldName} must be at least ${MIN_TEXT_LENGTH} characters long`,
    MAX_TEXT_LENGTH: (fieldName)=>`${fieldName} must be less than ${MAX_TEXT_LENGTH} characters long`,
    INVALID_NUMBER: (fieldName)=>`${fieldName} must be a positive number without any other characters`,
    INVALID_AGE: (fieldName)=>`${fieldName} must be between ${MIN_AGE} and ${MAX_AGE}`
};
const employeeFields = [
    {
        tag: TAG_INPUT,
        nameValue: HEADER_NAME,
        type: TYPE_TEXT,
        required: true
    },
    {
        tag: TAG_INPUT,
        nameValue: HEADER_POSITION,
        type: TYPE_TEXT,
        required: true
    },
    {
        tag: TAG_SELECT,
        nameValue: HEADER_OFFICE,
        required: true,
        options: OFFICE_OPTIONS
    },
    {
        tag: TAG_INPUT,
        nameValue: HEADER_AGE,
        type: TYPE_NUMBER,
        required: true
    },
    {
        tag: TAG_INPUT,
        nameValue: HEADER_SALARY,
        type: TYPE_NUMBER,
        required: true
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"64jdM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "validateText", ()=>validateText);
parcelHelpers.export(exports, "validateNumber", ()=>validateNumber);
var _utils = require("./utils");
function normalizedText(text) {
    return text.replace(/\s+/g, " ").trim();
}
function firstLetterToUpperCase(text) {
    return `${text[0].toUpperCase()}${text.slice(1)}`;
}
function validateText(element) {
    const normalizedValue = normalizedText(element.value);
    if (normalizedValue.length < (0, _utils.MIN_TEXT_LENGTH)) return (0, _utils.ERRORS).MIN_TEXT_LENGTH(firstLetterToUpperCase(element.name));
    if (normalizedValue.length > (0, _utils.MAX_TEXT_LENGTH)) return (0, _utils.ERRORS).MAX_TEXT_LENGTH(firstLetterToUpperCase(element.name));
    return null;
}
function validateNumber(element) {
    const numberValue = +element.value;
    if (!/^\d+$/.test(element.value)) return (0, _utils.ERRORS).INVALID_NUMBER(firstLetterToUpperCase(element.name));
    if (element.name === "age" && (numberValue < (0, _utils.MIN_AGE) || numberValue > (0, _utils.MAX_AGE))) return (0, _utils.ERRORS).INVALID_AGE(firstLetterToUpperCase(element.name));
}

},{"./utils":"bVlgj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"01Z9X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatSalary", ()=>formatSalary);
parcelHelpers.export(exports, "addNewEmployee", ()=>addNewEmployee);
var _utils = require("./utils");
"use strict";
function formatSalary(salary) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0
    }).format(+salary);
}
function createRow(formElements) {
    const row = document.createElement("tr");
    for (const field of (0, _utils.employeeFields)){
        const formFieldName = field.nameValue;
        const cell = document.createElement("td");
        if (formFieldName === "salary") cell.textContent = formatSalary(formElements[formFieldName].value);
        else cell.textContent = formElements[formFieldName].value;
        row.appendChild(cell);
    }
    return row;
}
function addNewEmployee(formElements) {
    const tableBody = document.querySelector("tbody");
    const row = createRow(formElements);
    tableBody.appendChild(row);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./utils":"bVlgj"}],"65Pyo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addFormSubmitEvent", ()=>addFormSubmitEvent);
var _addNewEmployee = require("./addNewEmployee");
var _showNotification = require("./showNotification");
var _utils = require("./utils");
var _validation = require("./validation");
"use strict";
function addFormSubmitEvent(form) {
    form.onsubmit = (e)=>{
        e.preventDefault();
        for (const element of form.elements){
            if (element.type === "submit") continue;
            let error;
            switch(element.type){
                case "text":
                    error = (0, _validation.validateText)(element);
                    break;
                case "number":
                    error = (0, _validation.validateNumber)(element);
                    break;
            }
            if (error) {
                (0, _showNotification.showNotification)((0, _utils.ERROR_TITLE), error, false);
                return;
            }
        }
        (0, _addNewEmployee.addNewEmployee)(form.elements);
        (0, _showNotification.showNotification)((0, _utils.SUCCES_TITLE), (0, _utils.SUCCESS_MESSAGE), true);
        form.reset();
    };
}

},{"./addNewEmployee":"01Z9X","./showNotification":"2bzJL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./utils":"bVlgj","./validation":"64jdM"}],"jQyIX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addSelectRowEvent", ()=>addSelectRowEvent);
"use strict";
const ACTIVE_CLASS = "active";
let selectedRow = null;
let previousSelectedRow = null;
function addSelectRowEvent(table) {
    const tableBody = table.querySelector("tbody");
    tableBody.addEventListener("click", (e)=>{
        const row = e.target.closest("tr");
        if (!row || row === selectedRow) return;
        if (previousSelectedRow) previousSelectedRow.classList.remove(ACTIVE_CLASS);
        selectedRow = row;
        selectedRow.className = ACTIVE_CLASS;
        previousSelectedRow = selectedRow;
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8FvTG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addTableSortEvent", ()=>addTableSortEvent);
var _utils = require("./utils");
"use strict";
let currentHeader = null;
let order = null;
function sortRows(rows, currentOrder, currentHeaderName, currentHeaderIndex) {
    return rows.sort((rowA, rowB)=>{
        const cellValueA = rowA.children[currentHeaderIndex].textContent;
        const cellValueB = rowB.children[currentHeaderIndex].textContent;
        let result = 0;
        switch(currentHeaderName){
            case 0, _utils.HEADER_NAME:
            case 0, _utils.HEADER_POSITION:
            case 0, _utils.HEADER_OFFICE:
                result = cellValueA.localeCompare(cellValueB);
                break;
            case 0, _utils.HEADER_AGE:
                result = +cellValueA - +cellValueB;
                break;
            case 0, _utils.HEADER_SALARY:
                result = +cellValueA.replace(/[^0-9.-]+/g, "") - +cellValueB.replace(/[^0-9.-]+/g, "");
                break;
            default:
                result = 0;
                break;
        }
        if (currentOrder === (0, _utils.ORDER_DESC)) result = -result;
        return result;
    });
}
function addTableSortEvent(table) {
    const tableHead = table.querySelector("thead");
    const tableBody = table.querySelector("tbody");
    tableHead.addEventListener("click", (e)=>{
        const header = e.target.closest("th");
        if (!header) return;
        if (currentHeader !== header) {
            currentHeader = header;
            order = (0, _utils.ORDER_ASC);
        } else order = order === (0, _utils.ORDER_ASC) ? (0, _utils.ORDER_DESC) : (0, _utils.ORDER_ASC);
        const currentHeaderName = header.textContent.toLowerCase();
        const headers = tableHead.querySelectorAll("th");
        const currentHeaderIndex = Array.from(headers).findIndex((child)=>child.textContent.toLowerCase() === currentHeaderName);
        const rows = Array.from(tableBody.querySelectorAll("tr"));
        sortRows(rows, order, currentHeaderName, currentHeaderIndex).forEach((row)=>{
            tableBody.append(row);
        });
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./utils":"bVlgj"}],"jakqM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createForm", ()=>createForm);
var _utils = require("./utils");
"use strict";
const NEW_EMPLOYEE_FORM_CLASS = "new-employee-form";
const SUBMIT_TYPE = "submit";
const SUBMIT_BUTTON_TEXT = "Save to table";
function createFormField(field) {
    const { nameValue, tag, type, required, options } = field;
    const label = document.createElement("label");
    const formField = document.createElement(tag);
    label.textContent = `${nameValue[0].toUpperCase()}${nameValue.slice(1)}: `;
    formField.name = nameValue;
    formField.required = required;
    formField.dataset.qa = nameValue;
    label.appendChild(formField);
    if (tag === (0, _utils.TAG_SELECT)) options.forEach((option, index)=>{
        const optionElement = document.createElement("option");
        if (index === 0) optionElement.selected = true;
        optionElement.value = option;
        optionElement.textContent = option;
        formField.append(optionElement);
    });
    else formField.type = type;
    return label;
}
function createSubmitButton() {
    const submit = document.createElement("button");
    submit.type = SUBMIT_TYPE;
    submit.textContent = SUBMIT_BUTTON_TEXT;
    return submit;
}
function createForm() {
    const form = document.createElement("form");
    form.className = NEW_EMPLOYEE_FORM_CLASS;
    for (const field of (0, _utils.employeeFields)){
        const formField = createFormField(field);
        form.appendChild(formField);
    }
    const submit = createSubmitButton();
    form.appendChild(submit);
    document.body.insertBefore(form, document.querySelector("script"));
    return form;
}

},{"./utils":"bVlgj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["8bDoD","3cYfC"], "3cYfC", "parcelRequire0089")

//# sourceMappingURL=index.b8fca702.js.map
