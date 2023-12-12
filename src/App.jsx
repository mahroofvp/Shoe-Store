import React from 'react'
import {Cart, FlexContent, Footer, Home, Navbar, Sales, Stories} from './components/index'
import {footerAPI, highlight, popularsales, sneaker, story, topratedsales } from './data/data.js'
const App = () => {
  return (
   <>
   <Navbar/>
   <Cart />
    <main className='flex flex-col gap-24 relative'>
      <Home/>
      <Sales prop={ popularsales } ifExists />
      <FlexContent prop={ highlight } ifExists />
      <Sales prop={ topratedsales }/>
      <FlexContent prop={ sneaker } />
      <Stories story={story} />
    </main>
      <Footer footerAPI={footerAPI} />
   </>
  )
}

export default App  