import React from 'react'
import {FlexContent, Home, Sales} from './components/index'
import { popularsales, topratedsales, highlight, sneaker } from './data/data.js'
const App = () => {
  return (
   <>
    <main className='flex flex-col gap-24 relative'>
      <Home/>
      <Sales prop={ popularsales } ifExists />
      <FlexContent prop={ highlight } ifExists />
      <Sales prop={ topratedsales }/>
      <FlexContent prop={ sneaker } />
    </main>
   </>
  )
}

export default App  