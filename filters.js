
export function computeNDVIpixel(r, g, b, nir) {
  const R = r/255.0, N = nir/255.0
  const denom = (N + R)
  if (denom === 0) return 0
  return (N - R) / denom
}
