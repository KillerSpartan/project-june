# NATURADESIGN

Guia viva del sistema de diseno y arquitectura frontend de NaturaTech LAC.

Este documento resume lo aprendido del proyecto antes de hacer ajustes pagina por pagina. La fuente principal es el codigo actual en `src/`, `public/`, `index.html`, `package.json` y `vite.config.js`.

## 1. Identidad visual

La app se define en el CSS como "NaturaTech LAC - Liquid Glass Design System". La sensacion general es inmersiva, organica y tecnologica: fondo verde casi negro, acento lima brillante, fotografias/recortes de naturaleza y personas, capas con vidrio liquido, letras gigantes detras del sujeto y animaciones de scroll.

Principios visibles:

- Fondo oscuro dominante: profundo, natural, cinematografico.
- Acento principal: lima/neon como energia, tecnologia y naturaleza viva.
- Imagen protagonista: cada pagina fuerte tiene una escena hero con fondo, palabra gigante, sujeto recortado y overlay.
- Interfaz flotante: nav, tarjetas y botones usan vidrio real (`liquid-glass-react`) o fallback CSS (`.css-glass`).
- Movimiento como lenguaje: parallax, reveals por scroll, horizontal pinning y microinteracciones.

## 2. Stack y librerias

Proyecto Vite + React.

Dependencias principales:

- `react` y `react-dom`: UI.
- `react-router-dom`: rutas SPA.
- `framer-motion`: transiciones entre paginas en `App.jsx`.
- `gsap` y `ScrollTrigger`: animaciones, parallax, pinning y reveals.
- `lenis`: smooth scroll global.
- `split-type`: separacion de palabras para animar textos.
- `liquid-glass-react`: efecto de vidrio liquido.
- `@fontsource-variable/unbounded`: fuente display.
- `@fontsource-variable/host-grotesk`: fuente body.
- `tailwindcss` y `@tailwindcss/vite`: instalados, pero el proyecto actual esta estilado con CSS global manual.

Scripts:

- `npm run dev`: servidor local Vite.
- `npm run build`: build de produccion.
- `npm run preview`: preview del build.

Alias:

- `@` apunta a `src`, configurado en `vite.config.js`.

## 3. Estructura del proyecto

```text
project-june/
  index.html
  package.json
  vite.config.js
  src/
    main.jsx
    App.jsx
    style.css
    components/
      Nav.jsx
      Footer.jsx
      GlassFrame.jsx
      SafeLiquidGlass.jsx
      ViewportFrame.jsx
    pages/
      Home.jsx
      Emprendimientos.jsx
      Ceiba.jsx
      Studio.jsx
      Ecos.jsx
  public/
    assets/
      images/
      historias/
      programs-logos/
      shapes/
      icons/
      regenera/
      CEIBA/
      Studio/
```

La mayor parte del sistema visual vive en `src/style.css` como un archivo global grande. Los componentes JSX dependen mucho de nombres de clase estables para que GSAP encuentre elementos.

## 4. Rutas y layout global

`main.jsx` monta la app en `#root` con `BrowserRouter`.

`App.jsx` centraliza:

- `Nav` fijo en todas las paginas.
- `ViewportFrame` global, activado desde `Emprendimientos`.
- `AnimatePresence` + `motion.div` para transiciones de pagina.
- `Footer` al final de cada pagina.
- Lenis global con `duration: 1.2`, `smoothWheel: true` y `touchMultiplier: 1.4`.
- Limpieza de `ScrollTrigger` en cambios de ruta.
- Scroll al top en cada ruta no inicial.
- Remocion progresiva del `#boot-loader` definido en `index.html`.

Fallback de hosting:

- `vercel.json` reescribe las rutas de pagina a `/index.html` para que refrescar `/ceiba`, `/studio`, `/ecos` o `/emprendimientos` no rompa la SPA.
- `public/_redirects` hace el mismo fallback para hosts que copian reglas desde `public`, como Netlify o Cloudflare Pages.
- No cambiar `BrowserRouter` a `HashRouter` salvo que se decida abandonar URLs limpias.

Rutas:

- `/`: `Home`
- `/emprendimientos`: `Emprendimientos`
- `/ceiba`: `Ceiba`
- `/studio`: `Studio`
- `/ecos`: `Ecos`
- `*`: fallback a `Home`

## 5. Tokens visuales

Definidos en `:root` dentro de `src/style.css`.

### Colores base

| Token | Valor | Uso |
| --- | --- | --- |
| `--bg-primary` | `#101511` | Fondo principal oscuro |
| `--bg-secondary` | `#101511` | Fondo secundario, actualmente igual al primario |
| `--bg-card` | `#161a16` | Superficies oscuras |
| `--accent` | `#C8E632` | Acento principal lima |
| `--accent-soft` | `#d8f04b` | Hover de botones |
| `--accent-dark` | `#a8c41a` | Variante profunda del acento |
| `--accent-glow` | `rgba(200, 230, 50, 0.35)` | Brillos y sombras |
| `--accent-olive` | `#8A9A1F` | Oliva secundario |
| `--text-primary` | `#ffffff` | Texto principal |
| `--text-secondary` | `rgba(255, 255, 255, 0.72)` | Texto de apoyo |
| `--text-muted` | `rgba(255, 255, 255, 0.45)` | Texto tenue |
| `--text-faint` | `rgba(255, 255, 255, 0.22)` | Texto muy tenue |

### Vidrio

| Token | Valor |
| --- | --- |
| `--glass-bg` | `rgba(255, 255, 255, 0.045)` |
| `--glass-bg-strong` | `rgba(255, 255, 255, 0.075)` |
| `--glass-border` | `rgba(255, 255, 255, 0.10)` |
| `--glass-edge` | `rgba(255, 255, 255, 0.18)` |
| `--glass-shadow` | sombra exterior oscura + inset blanco tenue |

### Radios

| Token | Valor | Uso |
| --- | --- | --- |
| `--radius-sm` | `12px` | Thumbnails, imagenes pequenas |
| `--radius-md` | `18px` | Tarjetas medianas |
| `--radius-lg` | `28px` | Tarjetas grandes, vidrio |
| `--radius-xl` | `36px` | Cards visuales grandes |
| `--radius-pill` | `999px` | Botones, pills, nav |

### Fuentes

| Token | Fuente | Uso |
| --- | --- | --- |
| `--font-display` | `Unbounded Variable`, fallback `Unbounded` | Titulares, labels, stats, links importantes |
| `--font-body` | `Host Grotesk Variable`, fallback `Host Grotesk` | Cuerpo, headings de hero, botones, nav |

Notas tipograficas:

- Titulares de seccion suelen usar `var(--font-display)`, uppercase, peso 700/800, tracking levemente negativo.
- Titulares hero usan `var(--font-body)`, peso 600, linea compacta.
- Labels pequenos usan `var(--font-display)`, uppercase, letter spacing alto.

### Movimiento

| Token | Valor |
| --- | --- |
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| `--ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` |
| `--ease-soft` | `cubic-bezier(0.22, 1, 0.36, 1)` |

Hay soporte `prefers-reduced-motion: reduce`, que reduce animaciones/transiciones a `0.01ms`.

## 6. Patrones de layout

### Hero cinematografico

Patron repetido en Home, Emprendimientos, CEIBA y Studio:

1. `section` a `height: 100vh` con `min-height`.
2. Fondo absoluto con imagen (`*-bg-wrapper`, `*-bg`).
3. Palabra gigante decorativa (`*-giant-text`, `giant-letter`).
4. Sujeto recortado absoluto (`*-subject`, `hero-bird`, `regen-people`).
5. Overlay degradado para legibilidad.
6. Contenido frontal con label, headline, descripcion, CTA y scroll indicator.

Clases base importantes:

- `.hero-section`, `.regen-section`, `.ceiba-hero`, `.studio-hero`
- `.giant-letter`
- `.hero-scroll-indicator`
- `.btn-glass`

### Secciones de contenido

Patrones actuales:

- Galerias por filas: Home.
- Cards con imagen y overlay: Home posibilidades.
- Scroll horizontal pineado: Home programas.
- Video inmersivo: Emprendimientos.
- Bloque quote con palabras reveladas: Emprendimientos.
- Galeria marquee infinita: CEIBA.
- Seccion clara editorial: CEIBA info.
- Seccion de podcast lime: CEIBA podcast.
- Galeria + stats + contenido editorial: Studio.
- Placeholder glass: Ecos.

### Responsive

Breakpoints principales en CSS:

- `max-width: 1024px`
- `max-width: 768px`

La version movil tiende a:

- Reducir padding.
- Cambiar grids a 1 columna.
- Ocultar nav pill.
- Mover hero bottom layout a columna.
- Reducir letras gigantes y tarjetas.

## 7. Componentes compartidos

### `Nav.jsx`

Nav fija con tres columnas: logo izquierda, pill de links al centro, spacer derecha.

Links:

- Inicio
- Emprendimiento
- CEIBA
- Studio
- Ecos

Usa `NavLink` para estado activo. El icono `/assets/icons/Navbar.svg` solo aparece en link activo. El logo y la pill usan `GlassFrame`.

Parametros visuales:

- Logo: `cornerRadius={999}`, `displacementScale={50}`, `blurAmount={0.07}`.
- Pill: `cornerRadius={999}`, `displacementScale={60}`, `blurAmount={0.09}`.

### `Footer.jsx`

Footer global con logo, descripcion, redes y links de navegacion. Las redes son SVG inline dentro de `.social-icon.css-glass`.

Los `href` sociales estan en `#` salvo links reales en paginas especificas.

### `GlassFrame.jsx`

Wrapper clave para `liquid-glass-react`.

Problema que resuelve: `LiquidGlass` renderiza varios divs hermanos que pueden romper layout inline/flex. `GlassFrame` crea:

- Sizer invisible para ocupar espacio.
- Capa absoluta de efecto glass.
- Capa absoluta de contenido real.

Props importantes:

- `cornerRadius`
- `padding`
- `className`
- `contentClassName`
- `display`
- `displacementScale`
- `blurAmount`
- `saturation`
- `aberrationIntensity`
- `elasticity`
- `mode`

### `SafeLiquidGlass.jsx`

Wrapper fino sobre `GlassFrame`. El comentario dice que deberia actuar como fallback ante errores WebGL, pero en el codigo actual no hay error boundary real: solo delega a `GlassFrame`.

Se usa en `Ecos` para placeholder.

### `ViewportFrame.jsx`

Marco fixed animado alrededor del viewport. Recibe `visible` y agrega `.is-visible`.

`Emprendimientos` lo activa cuando el video entra en viewport mediante `onFrameToggle`.

## 8. Clases y componentes visuales reutilizables

Botones:

- `.btn-glass`: CTA principal, fondo lima, texto oscuro, brillo hover.
- `.btn-glass-sm`: variante pequena.
- `.btn-glass-outline`: CTA secundario.
- `.btn-sparkle`: boton especial de Emprendimientos.
- `.link-arrow`: link textual con flecha.

Glass CSS:

- `.css-glass`: fallback glass con blur, borde, brillo y pseudo-elementos.
- `.css-glass-pill`, `.css-glass-md`, `.css-glass-lg`, `.css-glass-xl`: radios por token.

Texto:

- `.section-title`: display uppercase.
- `.giant-letter`: letras enormes con degradado.
- `*-heading-line`: lineas de headline hero.
- `*-header-label`: labels pequenos con icono.

Indicadores:

- `.hero-scroll-indicator`: texto "DESLIZAR" + flecha animada.
- `.viewport-frame`: marco animado de video.

## 9. Paginas actuales

### Home

Archivo: `src/pages/Home.jsx`

Secciones:

- Hero con colibri, palabra "ENRAIZA", card de destacados y CTA "Ver Video".
- Galeria de 9 imagenes.
- Mission statement con palabras animadas.
- "Enraizamos Posibilidades" con tres cards: Financiamos, Acompanamos, Conectamos.
- Programas horizontales: Natura 500, CEIBA, STUDIO, ECOS.

Estado:

- `storiesCollapsed`: colapsa/expande la card de destacados.
- Auto-rotacion de destacados cuando esta colapsada.

Animaciones:

- Timeline inicial gated por `appReady`.
- Parallax de background, colibri y letras.
- Gallery reveal con `clipPath`.
- Mission reveal por palabra.
- `SplitType` para descripcion.
- Cards con perspectiva.
- Scroll horizontal pineado de programas.

### Emprendimientos / Natura 500

Archivo: `src/pages/Emprendimientos.jsx`

Secciones:

- Hero "REGENERA" con gente y CTA externo a `https://500.naturatech.org`.
- Video inmersivo con toggle de sonido.
- Bloque "Hasta 100K USD".
- Quote con palabras reveladas.
- Tres condiciones para escalar la regeneracion.

Estado:

- `muted`: controla sonido del video.
- `videoRef`: play/pause con ScrollTrigger.
- `onFrameToggle`: activa `ViewportFrame` global.

Nota importante:

- El componente referencia `/assets/regenera/video.mp4`, pero ese archivo no existe actualmente en `public/assets/regenera`.

### CEIBA

Archivo: `src/pages/Ceiba.jsx`

Secciones:

- Hero "CONECTA", sujeto `lina-subject.png`, CTA a YouTube.
- Galeria marquee infinita con imagenes duplicadas.
- Info/Summit en fondo claro `#F4F0BE`.
- Divider de shapes sobre lima.
- Podcast "Somos Raices" con personas y links a Spotify, Apple Podcasts, YouTube y WhatsApp.

Animaciones:

- Parallax hero.
- Reveal de letras.
- Marquee infinito con `gsap.to(track, { repeat: -1 })`.
- Parallax de shapes.
- Entradas de podcast/socials.

Paleta especial:

- Fondo hero `#1a2912`.
- Secciones lime `#C8E632`, `#EBFF57`, verdes profundos `#14260c`, `#11200a`.
- Info editorial clara `#F4F0BE`.

### Studio

Archivo: `src/pages/Studio.jsx`

Secciones:

- Hero "ESCALA", sujeto `subject-studio.png`, CTA `#portfolio`.
- Galeria "Portafolio de Soluciones".
- Stats: paises, proyectos, impacto, tecnologias.
- Contenido principal dos columnas.
- Cards de informacion y niveles.

Animaciones:

- Parallax hero.
- Reveal de letras.
- Gallery y stats stagger.
- Entradas de imagen/texto principal y cards.

### Ecos

Archivo: `src/pages/Ecos.jsx`

Pagina placeholder con `SafeLiquidGlass`, logo ECOS, titulo y puntos animados.

## 10. Assets

Rutas relevantes:

- Logo: `/assets/images/logo.svg`
- Hero Home: `/assets/images/hero-bg.webp`, `/assets/images/colibri.png`
- Galeria Home: `/assets/images/gallery-1.webp` a `gallery-9.webp`
- Historias: `/assets/historias/*.webp`
- Program logos: `/assets/programs-logos/500.svg`, `ceiba.svg`, `studio.svg`, `ecos.svg`
- Shapes: `/assets/shapes/Flower.svg`, `double-d.svg`, `roundedsun.svg`
- Icons: `/assets/icons/Fire.svg`, `Navbar.svg`
- Regenera: `/assets/regenera/*.png`
- CEIBA: `/assets/CEIBA/*`
- Studio: `/assets/Studio/*`

Convencion actual:

- Assets publicos se referencian con rutas absolutas desde `/assets/...`.
- Decorative images generalmente usan `alt=""`.
- Imagenes de contenido tienen alt descriptivo, aunque hay texto con mojibake visible en terminal por encoding de salida.

## 11. Patrones de animacion y metodos

Patron recomendado para paginas con GSAP:

```jsx
const rootRef = useRef(null);

useEffect(() => {
  if (!rootRef.current) return;

  const ctx = gsap.context(() => {
    // animaciones y ScrollTriggers
  }, rootRef);

  return () => ctx.revert();
}, []);
```

Metodos usados:

- `gsap.timeline`
- `gsap.from`
- `gsap.to`
- `gsap.fromTo`
- `gsap.utils.toArray`
- `ScrollTrigger.create`
- `ScrollTrigger.refresh`
- `ScrollTrigger.getAll().forEach((t) => t.kill())`
- `gsap.ticker.add`
- `gsap.ticker.remove`
- `gsap.ticker.lagSmoothing(0)`
- `SplitType(desc, { types: 'words' })`
- Lenis `.raf`, `.scrollTo`, `.destroy`

Reglas practicas:

- Mantener nombres de clases si una animacion los usa.
- Nuevas animaciones de pagina deben vivir dentro de `gsap.context`.
- Limpiar triggers o confiar en `ctx.revert()` para animaciones scoped.
- Evitar animar layout costoso cuando se pueda usar transform/opacity/filter.
- Respetar `prefers-reduced-motion`.

## 12. Reglas para futuros ajustes

Al tocar paginas, mantener estas decisiones salvo que se pida un cambio de direccion:

- Reusar tokens `:root` antes de crear colores nuevos.
- Mantener `#101511` como fondo base y `#C8E632` como acento principal.
- Usar `GlassFrame` para vidrio protagonista y `.css-glass` para superficies pequenas o sensibles al layout.
- Mantener heroes por capas: fondo, palabra gigante, sujeto, overlay, contenido.
- Usar `btn-glass` para CTAs primarios.
- Usar `font-display` para labels/titulares editoriales y `font-body` para lectura y hero headings.
- Si se agregan assets, guardarlos bajo `public/assets/<seccion>/` y referenciarlos como `/assets/...`.
- Si se agregan rutas, registrarlas en `App.jsx`, `Nav.jsx` y `Footer.jsx`.
- Validar responsive en 1024px y 768px, porque esos son los cortes existentes.
- Evitar cambios globales en `style.css` que rompan selectores usados por GSAP.

## 13. Deudas y alertas detectadas

- `public/assets/regenera/video.mp4` no existe aunque `Emprendimientos.jsx` lo referencia.
- `SafeLiquidGlass` dice en comentario que hace fallback ante errores WebGL, pero no implementa un error boundary real.
- `Footer.jsx` tiene redes sociales con `href="#"`.
- Hay varios `href="#"` de CTA pendientes en Home/Studio.
- `style.css` contiene estilos responsive de CEIBA duplicados bajo el bloque de Studio; revisar antes de ampliar esa pagina.
- La app usa CSS global, asi que cambios de clase pueden tener impacto cruzado.

## 14. Checklist antes de modificar una pagina

- Revisar JSX de la pagina y las clases que usa.
- Buscar esas clases en `src/style.css`.
- Ver si alguna clase esta referenciada por GSAP.
- Mantener la estructura hero si la pagina la usa.
- Probar desktop y mobile.
- Si se toca animacion, verificar que no queden ScrollTriggers vivos al cambiar de ruta.
- Si se toca glass, revisar que el layout no cambie por el sizer de `GlassFrame`.
