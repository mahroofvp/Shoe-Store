import React from 'react'
import {FlexContent, Home, Sales, Stories} from './components/index'
import { popularsales, topratedsales, highlight, sneaker, story } from './data/data.js'
const App = () => {
  return (
   <>
    <main className='flex flex-col gap-24 relative'>
      <Home/>
      <Sales prop={ popularsales } ifExists />
      <FlexContent prop={ highlight } ifExists />
      <Sales prop={ topratedsales }/>
      <FlexContent prop={ sneaker } />
      <Stories story={story} />
    </main>
   </>
  )
}

export default App  