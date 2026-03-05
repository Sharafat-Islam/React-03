import './App.css'
import RootLayouts from './components/Layouts/RootLayouts'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
import Error from './components/Pages/Error'
import Portfolio from './components/Pages/Portfolio'
import Price from './components/Pages/Price'
import Service from './components/Pages/Service'
import Blog from './components/Pages/Blog'

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<RootLayouts />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="price" element={<Price />} />
            <Route path="service" element={<Service />} />
            <Route path="blog" element={<Blog />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
    </>

  );
}

// bg-[url(/src/assets/homebnr.png)] bg-no-repeat bg-center bg-cover

export default App
