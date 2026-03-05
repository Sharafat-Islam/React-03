import Container from '../Common/Container'
import Flex from '../Common/Flex'
import Button from '../Common/Button'
import { GoChevronDown } from "react-icons/go";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
<div className="fixed w-full bg-transparent backdrop-blur-sm transition-all duration-300">    
    <Container>
        <Flex className={`justify-between py-2.5`}>
          <div>
            <Link to="/"><img src="/public/Logo.png" alt="Logo.png" /></Link>
          </div>
          <div className="flex items-center gap-10">
            <div className="flex items-center font-semibold text-white text-[16px] pr-1 hover:text-main duration-200"><Link to={"/"}>Home</Link><GoChevronDown /></div>
            <div className="flex items-center font-semibold text-white text-[16px] pr-1 hover:text-main duration-200"><Link to={"about"}>About</Link><GoChevronDown /></div>
            <div className="flex items-center font-semibold text-white text-[16px] pr-1 hover:text-main duration-200"><Link to={"service"}>Service</Link><GoChevronDown /></div>
            <div className="flex items-center font-semibold text-white text-[16px] pr-1 hover:text-main duration-200"><Link to={"portfolio"}>Portfolio</Link><GoChevronDown /></div>
            <div className="flex items-center font-semibold text-white text-[16px] pr-1 hover:text-main duration-200"><Link to={"price"}>Price</Link><GoChevronDown /></div>
            <div className="flex items-center font-semibold text-white text-[16px] pr-1 hover:text-main duration-200"><Link to={"blog"}>Blog</Link><GoChevronDown /></div>
          </div>
          <div>
            <Button className={'font-semibold rounded-2xl py-3.5 hover:border-main  hover:bg-main duration-200'} btntext={'Contact'} />
          </div>
        </Flex>
      </Container>
    </div>
  )
}
export default Header

