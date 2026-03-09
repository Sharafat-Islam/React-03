import Banner from "../Common/Banner"
import Flex from "../Common/Flex"

const About = () => {
  return (
    <>
      <Banner className={`bg-[url('src/assets/headerA.png')] pt-52`}>
        <Flex className={`justify-center`}>
          <div className="pb-30">
            <div className="flex items-center">
              <p className="font-nunito font-normal text-2xl text-textsmtw">Home </p><p className="font-nunito font-normal text-2xl text-textsmtw">{">"}</p><p className="font-nunito font-normal text-2xl text-textsmtw"> About</p>
            </div>
            <h3 className="font-poppins font-bold text-[64px] text-textsmtw border-r-2 border-textsmtw pr-10">Know more about </h3>
            <h3 className="font-poppins font-bold text-[64px] text-textsmtw border-r-2 border-textsmtw pr-10">innovate</h3>
          </div>
          <div className="">
            <p className="font-nunito font-normal text-[18px] text-shadow-textsmtw pl-10">With over 25 years of experience, we have crafted thousands</p>
            <p className="font-nunito font-normal text-[18px] text-shadow-textsmtw pl-10">of strategic discovery process that enables us to peel back</p>
            <p className="font-nunito font-normal text-[18px] text-shadow-textsmtw pl-10">the layers which enable us to understand, connect, represent and</p>
            <p className="font-nunito font-normal text-[18px] text-shadow-textsmtw pl-10">dominate your market.</p>
          </div>
        </Flex>
      </Banner>
    </>
  )
}

export default About