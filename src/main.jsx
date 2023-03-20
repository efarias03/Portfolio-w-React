import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './Pages/Home'
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from '@react-three/postprocessing';
import { Canvas } from '@react-three/fiber'

import "./globalStyles/global.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />

  </React.StrictMode>,
)
