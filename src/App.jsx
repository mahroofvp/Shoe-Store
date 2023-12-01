import React from 'react'
import {Home, Sales} from './components/index'
import { popularsales, topratedsales } from './data/data.js'
const App = () => {
  return (
   <>
    <main className='flex flex-col gap-24 relative'>
      <Home/>
      <Sales prop={ popularsales } ifExists />
      <Sales prop={ topratedsales }/>
    </main>
   </>
  )
}

export default App  