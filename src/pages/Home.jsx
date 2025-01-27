
import NavbarDestock from '../components/navbar-destock'
import Section1 from '../components/sections/Seccion1'
import Section2 from '../components/sections/Section2'

const Home = () => {
  return (
   <>
    <div className='sticky top-0 z-50'>
      <NavbarDestock/>
    </div>
    <Section1/>
    <Section2/>
   </>
  )
}

export default Home
