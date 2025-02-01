
import NavbarDestock from '../components/navbar-destock'
import Section1 from '../components/sections/Seccion1'
import Section2 from '../components/sections/Section2'
import Section3 from '../components/sections/section3'
import Section4 from '../components/sections/section4'
import Section5 from '../components/sections/Section5'
import Section6 from '../components/sections/Section6'
import Section7 from '../components/sections/Section7'
import Section8 from '../components/sections/Section8'

const Home = () => {
  return (
   <>
    <div className='sticky top-0 z-50'>
      <NavbarDestock/>
    </div>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
    <Section6 />
    <Section7 />
    <Section8 />
   </>
  )
} 

export default Home
