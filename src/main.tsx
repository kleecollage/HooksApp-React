import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FocusScreen } from './04-userRef/FocusScreen'
// import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook'
// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect'
// import { TrafficLight } from './01-useSate/TrafficLight'
// import { HooksApp } from './HooksApp'
// import { PokemonPage } from './03-examples/PokemonPage'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    <FocusScreen />
  </StrictMode>,
)
