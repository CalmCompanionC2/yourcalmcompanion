/* Tiny runtime that drives the page logic without the design canvas. */
(function () {
  var st = document.createElement('style');
  st.textContent = '[data-if][hidden]{display:none!important}';
  document.head.appendChild(st);
})();
class DCLogic {
  setState(p) { Object.assign(this.state, typeof p === 'function' ? p(this.state) : p); if (this._render) this._render(); }
}
function CCboot(C) {
  var c = new C(); c.props = {};
  var vals = {};
  var q = function (s) { return Array.prototype.slice.call(document.querySelectorAll(s)); };
  q('[data-class]').forEach(function (e) { e._base = e.getAttribute('class') || ''; });
  function apply() {
    vals = c.renderVals();
    q('[data-if]').forEach(function (e) { e.hidden = !vals[e.getAttribute('data-if')]; });
    q('[data-bind]').forEach(function (e) { var t = String(vals[e.getAttribute('data-bind')] == null ? '' : vals[e.getAttribute('data-bind')]); if (e.textContent !== t) e.textContent = t; });
    q('[data-class]').forEach(function (e) { e.className = (e._base + ' ' + (vals[e.getAttribute('data-class')] || '')).trim(); });
    q('[data-style]').forEach(function (e) { e.setAttribute('style', vals[e.getAttribute('data-style')] || ''); });
    q('*').forEach(function (e) {
      Array.prototype.slice.call(e.attributes).forEach(function (a) {
        if (a.name.indexOf('data-attr-') === 0) e.setAttribute(a.name.slice(10), String(vals[a.value]));
      });
    });
  }
  c._render = apply;
  q('*').forEach(function (e) {
    Array.prototype.slice.call(e.attributes).forEach(function (a) {
      if (a.name.indexOf('data-on-') === 0) {
        var ev = a.name.slice(8), name = a.value;
        e.addEventListener(ev, function (x) { var f = vals[name]; if (typeof f === 'function') f.call(c, x); });
      }
    });
  });
  apply();
  if (c.componentDidMount) c.componentDidMount();
}
