
export const commonVertexShader = `
attribute vec2 a_position;
varying vec2 v_uv;
void main(){ v_uv = (a_position + 1.0) * 0.5; gl_Position = vec4(a_position,0.0,1.0); }
`

export function buildFragmentShader(){ return `precision mediump float; varying vec2 v_uv; uniform sampler2D u_tile; void main(){ gl_FragColor = texture2D(u_tile, v_uv); }` }
