import React, { useContext } from 'react'
import Sidebar from './components/sidebar'
import Player from './components/Player'
import Display from './components/Display'
import { playerContext } from './context/playerContext'

const App = () => {
  const {audioRef, track, songsData} = useContext(playerContext);
  return (
    <div className='h-screen bg-black'>
      {
        songsData.length !== 0
        ? <>
        <div className='h-[90%] flex'>
          <Sidebar />
          <Display />
        </div>
        <Player />
        </>
        : null
      }
      
      <audio ref={audioRef} src={track?track.file:""} preload='auto'></audio>
    </div>
  )
}

export default App
