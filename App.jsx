
import React, { useEffect } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default function App(){
  useEffect(()=>{
    const map = L.map('map', { center:[29.0, -12.0], zoom:6 })
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)
    // simple marker
    L.marker([29.0, -12.0]).addTo(map).bindPopup('ArcheoXplorer')
    return ()=> map.remove()
  },[])
  return <div style={{display:'flex',height:'100%'}}>
    <div id="map" style={{flex:1}}></div>
    <div style={{width:360,padding:12}}>
      <h3>ArcheoXplorer</h3>
      <p>Frontend stub. Full features are in src/ (WebGL modules, filters). Build with `npm install` then `npm run dev`.</p>
    </div>
  </div>
}
