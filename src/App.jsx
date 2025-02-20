import React from 'react'
import GamePart from './Board'

const App = () => {
  return (
    <>
      <div className='w-full h-screen flex flex-col justify-center items-center'>
        <GamePart />
      </div>
    </>
  );
}

export default App