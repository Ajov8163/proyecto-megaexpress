import React from 'react'
import NavbarDestock from './navbar-destock'
import Section11 from './sections/Seccion11'
import Section2 from './sections/Section2'

const Homee = () => {
  return (
   <>
    <div className='sticky top-0 z-50'>
      <NavbarDestock/>
    </div>
    <Section11/>
    <Section2/>
   </>
  )
}

export default Homee
