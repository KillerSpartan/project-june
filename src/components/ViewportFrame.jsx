/**
 * The animated olive-green gradient frame that surrounds the viewport while the
 * Emprendimientos video section is in view — meant to feel like the recording
 * border on a shared screen capture.
 */
export default function ViewportFrame({ visible }) {
  return <div className={'viewport-frame' + (visible ? ' is-visible' : '')} aria-hidden="true" />;
}
