# Gestión de Transporte — Demo de portfolio

Aplicación web progresiva (PWA) de demostración para autónomos y pequeños negocios de transporte, mudanzas y reparto.

> **Aviso:** esta versión es exclusivamente demostrativa. Utiliza datos ficticios y almacenamiento local del navegador. No introduzcas datos personales ni información comercial real.

## Funcionalidades demostradas

- Gestión de contactos y seguimiento comercial, con registros ficticios precargados en la primera visita.
- Elaboración y seguimiento de presupuestos con partidas, IVA y exportación a PDF mediante impresión del navegador.
- Agenda mensual, semanal y diaria para citas y visitas de valoración.
- Recordatorios de llamadas y tareas.
- Exportación de citas y recordatorios a archivos `.ics`.
- Instalación como PWA y caché de recursos para apertura sin conexión.
- Copias de seguridad locales en formato JSON.

## Límites conocidos

- Los datos principales se guardan en `localStorage`: no hay sincronización entre dispositivos ni usuarios con cuentas.
- Los recordatorios se comprueban mientras la aplicación está abierta. Para avisos persistentes se pueden exportar eventos al calendario.
- La agenda avisa de solapamientos, pero no impide guardar dos citas que coincidan.
- El formulario público es solo una maqueta de demostración: no envía solicitudes ni recoge datos personales.
- El apartado interno de Solicitudes utiliza una bandeja ficticia en el propio navegador; permite simular la conversión de una consulta en contacto y recordatorio, sin servidor ni buzón externo.
- No incluye facturación fiscal, pagos, integración real con WhatsApp ni envío automático de emails.

## Ejecución local

No necesita proceso de compilación. Abre `index.html` mediante un servidor estático local (necesario para el service worker y algunas funciones PWA), por ejemplo:

```bash
npx serve .
```

## Tecnologías

HTML, CSS y JavaScript nativo; Web App Manifest; Service Worker; LocalStorage.

## Contexto

Prototipo propio desarrollado como propuesta de solución para un pequeño negocio de transporte. No fue implantado comercialmente ni se presenta como caso de cliente.
