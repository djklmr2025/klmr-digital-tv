/**
 * KLMR DIGITAL TV - Obfuscated Anti-Scrape Embed Engine (v1.0)
 * 
 * Permite insertar el reproductor oficial 24/7 en cualquier sitio web externo
 * sin exponer la URL directa en el HTML estático, previniendo minería,
 * hotlinking y raspado de dominio.
 *
 * Modo de uso en sitios externos:
 * <div id="klmr-player"></div>
 * <script src="https://klmr-digital-tv.vercel.app/embed.js" async></script>
 */
(function() {
  'use strict';

  // Evitar inyecciones duplicadas
  if (window.__KLMR_EMBED_INITIALIZED__) return;
  window.__KLMR_EMBED_INITIALIZED__ = true;

  // Dominio ofuscado Base64 de respaldo: "https://klmr-digital-tv.vercel.app"
  var _0xkb = "aHR0cHM6Ly9rbG1yLWRpZ2l0YWwtdHYudmVyY2VsLmFwcA==";
  function _getEndpoint() {
    try {
      if (document.currentScript && document.currentScript.src) {
        var u = new URL(document.currentScript.src);
        return u.origin;
      }
      return atob(_0xkb);
    } catch (e) {
      return atob(_0xkb);
    }
  }

  function initKLMRPlayer() {
    var origin = _getEndpoint();
    var streamUrl = origin + "/embed?embed=1&t=" + Date.now().toString(36);

    // Buscar contenedor designado o usar la posición del script
    var mountTarget = document.getElementById('klmr-player') ||
                      document.querySelector('[data-klmr-tv]') ||
                      (function() {
                        var div = document.createElement('div');
                        div.id = 'klmr-player-auto';
                        if (document.currentScript && document.currentScript.parentNode) {
                          document.currentScript.parentNode.insertBefore(div, document.currentScript.nextSibling);
                        } else {
                          document.body.appendChild(div);
                        }
                        return div;
                      })();

    if (!mountTarget) return;

    // Crear host para Shadow DOM blindado (evita que crawlers o scripts externos lean el iframe)
    var hostElement = document.createElement('div');
    hostElement.style.cssText = "width:100%;max-width:100%;position:relative;background:#050811;border-radius:12px;overflow:hidden;box-shadow:0 12px 40px rgba(0,0,0,0.65);aspect-ratio:16/9;display:flex;align-items:center;justify-content:center;";

    // Intentar Closed Shadow Root para máxima protección
    var root = null;
    try {
      if (typeof hostElement.attachShadow === 'function') {
        root = hostElement.attachShadow({ mode: 'closed' });
      }
    } catch (err) {
      root = null;
    }
    var targetNode = root || hostElement;

    // Inyectar estilos internos aislados
    var styleNode = document.createElement('style');
    styleNode.textContent = [
      ":host, .klmr-frame-wrap { width:100%; height:100%; position:relative; overflow:hidden; background:#000; }",
      "iframe { border:none; width:100%; height:100%; display:block; position:absolute; top:0; left:0; right:0; bottom:0; }",
      ".klmr-loader { position:absolute; color:#00ff88; font-family:sans-serif; font-size:12px; letter-spacing:1.5px; opacity:0.8; text-transform:uppercase; z-index:1; pointer-events:none; }"
    ].join(' ');
    targetNode.appendChild(styleNode);

    // Indicador temporal mientras carga
    var loader = document.createElement('div');
    loader.className = 'klmr-loader';
    loader.textContent = 'KLMR DIGITAL TV • CONECTANDO...';
    targetNode.appendChild(loader);

    // Construcción del iFrame en tiempo de ejecución con políticas de máxima seguridad
    var iframe = document.createElement('iframe');
    iframe.src = streamUrl;
    iframe.title = "KLMR Digital TV HD Live Stream";
    iframe.setAttribute('referrerpolicy', 'no-referrer');
    iframe.setAttribute('allow', 'autoplay; fullscreen; picture-in-picture; encrypted-media');
    iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-presentation allow-fullscreen');
    iframe.allowFullscreen = true;
    iframe.loading = "lazy";

    iframe.onload = function() {
      if (loader && loader.parentNode) {
        loader.parentNode.removeChild(loader);
      }
    };

    targetNode.appendChild(iframe);
    mountTarget.appendChild(hostElement);
  }

  // Ejecución segura cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initKLMRPlayer);
  } else {
    initKLMRPlayer();
  }
})();
