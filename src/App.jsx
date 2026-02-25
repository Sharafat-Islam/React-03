import './App.css'
import Container from './components/Container'
import Flex from './components/Flex'
import { CgTerminal } from "react-icons/cg";
import { CgChevronUpO } from "react-icons/cg";
import { CgChevronDownO } from "react-icons/cg";
import { CgChevronUpR } from "react-icons/cg";
import { CgChevronDownR } from "react-icons/cg";


function App() {
  return (
    <>
      <div className="bg-[#121212]">
        <Container>
          <Flex className={`justify-center gap-80 pt-10`}>
            <div className="bg-pink-400 border-2 border-pink-200 shadow-lg shadow-pink-200 h-30 w-60 flex">
              <div className="bg-pink-300 border border-pink-200 shadow-lg shadow-pink-200 h-5 w-8"></div>
              <CgTerminal className={`text-pink-100 text-9xl pl-9`} />
            </div>
            <div className="bg-pink-400 border-2 border-pink-200 shadow-lg shadow-pink-200 h-30 w-60 flex">
              <div className="bg-pink-300 border border-pink-200 shadow-lg shadow-pink-200 h-5 w-8"></div>
              <CgTerminal className={`text-pink-100 text-9xl pl-9`} />
            </div>
          </Flex>
          <div className="bg-pink-400 border-2 border-pink-200 h-30 w-200 mt-60 mx-66 flex justify-between items-center text-6xl px-3 text-pink-100">
            <CgChevronUpO />
            <CgChevronDownO />
            <CgChevronUpR />
            <CgChevronDownR />
          </div>
        </Container>
      </div>
    </>
  )
}

export default App
