
import { describe, it, expect } from 'vitest'
import { computeNDVIpixel } from '../src/utils/filters'
describe('ndvi math', ()=>{
  it('computes expected sign', ()=>{
    const v = computeNDVIpixel(10,0,0,200)
    expect(v).toBeGreaterThan(0)
  })
})
