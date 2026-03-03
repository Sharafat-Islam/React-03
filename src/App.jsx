import './App.css'
import RootLayouts from './components/Layouts/RootLayouts'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
import Error from './components/Pages/Error'

function App() {
  return (
    <>
      <div className="bg-[#000000]">
        <Routes>
          <Route path="/" element={<RootLayouts />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </div>
    </>

  );
}

{/* <div className="bg-[#121212]">
        <Container>
          <Flex>
            <div className="flex text-[120px] ml-10 text-[#BBDCE5] uppercase tracking-[5px] mt-27 leading-none font-bold ">
              <p className='hover:blur-[5px] hover:text-blue-400 duration-300'>R</p>
              <p className='hover:blur-[5px] hover:text-blue-400 duration-300'>E</p>
              <p className='hover:blur-[5px] hover:text-blue-400 duration-300'>A</p>
              <p className='hover:blur-[5px] hover:text-blue-400 duration-300'>C</p>
              <p className='hover:blur-[5px] hover:text-blue-400 duration-300'>T</p>
            </div>
          </Flex>
        </Container>
      </div> */}

export default App
