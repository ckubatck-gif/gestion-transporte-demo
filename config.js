// Configuración ficticia para la demo de portfolio.
window.APP_CONFIG = {
  empresa: 'Gestión de Transporte',
  telefono: '',
  prefijoPais: '34',
  iva: 21,
  moneda: 'EUR',
  validezPresupuestoDias: 30,
  responsable: '',
  politicaPrivacidadUrl: '',
  horario: {
    1: [['09:00', '13:30'], ['15:30', '19:30']],
    2: [['09:00', '13:30'], ['15:30', '19:30']],
    3: [['09:00', '13:30'], ['15:30', '19:30']],
    4: [['09:00', '13:30'], ['15:30', '19:30']],
    5: [['09:00', '13:30'], ['15:30', '19:30']],
    6: ['09:30', '14:00'],
    0: null
  },
  diasCerrados: [],
  tiposServicio: ['Mudanza', 'Transporte', 'Reparto', 'Otro']
};

window.APP_HORARIO = (function () {
  const C = window.APP_CONFIG;
  const aMin = (hhmm) => { const p = hhmm.split(':'); return Number(p[0]) * 60 + Number(p[1]); };
  const pad = (n) => String(n).padStart(2, '0');
  const ymd = (d) => d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  function tramos(d) {
    if (C.diasCerrados.indexOf(ymd(d)) >= 0) return [];
    const h = C.horario[d.getDay()];
    if (!h) return [];
    const lista = Array.isArray(h[0]) ? h : [h];
    return lista.map((t) => [fechaConHora(d, t[0]), fechaConHora(d, t[1])]).sort((a, b) => a[0] - b[0]);
  }
  function fechaConHora(d, hhmm) {
    const x = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    x.setHours(Math.floor(aMin(hhmm) / 60), aMin(hhmm) % 60, 0, 0);
    return x;
  }
  function tramoActual(ahora) { return tramos(ahora).find((t) => ahora >= t[0] && ahora < t[1]) || null; }
  function estaAbierto(ahora) { return !!tramoActual(ahora); }
  function proximaApertura(ahora) {
    for (let i = 0; i < 15; i++) {
      const d = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate() + i);
      for (const t of tramos(d)) if (ahora < t[1]) return ahora > t[0] ? new Date(ahora) : t[0];
    }
    return null;
  }
  function cierreHoy(ahora) { const t = tramoActual(ahora); return t ? t[1] : null; }
  function textoDia(dia) {
    const h = C.horario[dia];
    if (!h) return 'Cerrado';
    return (Array.isArray(h[0]) ? h : [h]).map((t) => t[0] + ' – ' + t[1]).join(' y ');
  }
  return { tramos, estaAbierto, proximaApertura, cierreHoy, textoDia, ymd };
})();
