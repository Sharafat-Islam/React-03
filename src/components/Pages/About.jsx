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
      <Banner className={`bg-white pt-30`}>
        <div className="">
          <div className="pb-30 text-center">
            <h3 className="font-poppins font-semibold text-[48px] text-textsmtw">Trusted By Top Global Companies And</h3>
            <h3 className="font-poppins font-semibold text-[48px] text-textsmtw">Orginizations</h3>
          </div>
          <div className="flex justify-around items-center pb-25">
            <img className="pl-20" src="/about1.png" alt="about1.png" />
            <img src="/about2.png" alt="about2.png" />
            <img src="/about3.png" alt="about3.png" />
            <img src="/about4.png" alt="about4.png" />
            <img src="/about5.png" alt="about5.png" />
            <img className="pr-20" src="/about6.png" alt="about6.png" />
          </div>
        </div>
      </Banner>
      <Banner className={`bg-[#F4F3FC] h-200`}>
        <Flex className={`justify-center`}>
          <div className="pb-30">
            <div className="bg-textsm px-90 py-50">
            </div>
            <div className="">
              <h3 className="font-poppins font-semibold text-[36px] text-textsmtw pl-20 pt-20 pr-10">We conceive and translate our clients dreams into reality.</h3>
              <p className="font-nunito font-normal text-[18px] text-shadow-textsmtw pl-20 pr-10">Through strategy, design, and planning we build brand</p>
              <p className="font-nunito font-normal text-[18px] text-shadow-textsmtw pl-20 pr-10"> identities that connect with your Nesi. We then fine-tune</p>
              <p className="font-nunito font-normal text-[18px] text-shadow-textsmtw pl-20 pr-10"> a marketing plan that allows us to laser focus and target</p>
              <p className="font-nunito font-normal text-[18px] text-shadow-textsmtw pl-20 pr-10"> your audience through the right channels.</p>
            </div>
          </div>
          <div className="">
            <div className="">
              <h3 className="font-poppins font-semibold text-[36px] text-textsmtw pl-20 pt-20 pr-10">A single-minded focus on getting results.</h3>
              <p className="font-nunito font-normal text-[18px] text-shadow-textsmtw pl-20 pr-10">Through strategy, design, and planning we build brand</p>
              <p className="font-nunito font-normal text-[18px] text-shadow-textsmtw pl-20 pr-10"> identities that connect with your Nesi. We then fine-tune</p>
              <p className="font-nunito font-normal text-[18px] text-shadow-textsmtw pl-20 pr-10"> a marketing plan that allows us to laser focus and target</p>
              <p className="font-nunito font-normal text-[18px] text-shadow-textsmtw pl-20 pb-22 pr-10"> your audience through the right channels.</p>
            </div>
            <div className="bg-textsm px-100 py-50">
            </div>
          </div>
        </Flex>
      </Banner>
      <Banner className={`bg-white pt-30`}>
        <div className="">
          <div className="pb-30 text-center">
            <h3 className="font-poppins font-semibold text-[48px] text-textsmtw">What We Do?</h3>
          </div>
          <div className="flex justify-around items-center pb-25">
            <div className="flex flex-col items-center text-center">
              <img src="/Icon1.svg" alt="icon1.png" />
              <h3 className="font-poppins font-semibold text-[28px text-textsmtw]">Digital products</h3>
              <p className="font-nunito font-normal text-[18px] text-shadow-textsmtw">By applying behavioral science to <br></br> customer experience, we design<br></br> engaging digital products used by<br></br> millions of people.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="/Icon2.svg" alt="icon1.png" />
              <h3 className="font-poppins font-semibold text-[28px text-textsmtw]">Websites  Design</h3>
              <p className="font-nunito font-normal text-[18px] text-shadow-textsmtw">By applying behavioral science to <br></br> customer experience, we design<br></br> engaging digital products used by<br></br> millions of people.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="/Icon3.svg" alt="icon1.png" />
              <h3 className="font-poppins font-semibold text-[28px text-textsmtw]">Enterprise Software</h3>
              <p className="font-nunito font-normal text-[18px] text-shadow-textsmtw">By applying behavioral science to <br></br> customer experience, we design<br></br> engaging digital products used by<br></br> millions of people.</p>
            </div>
          </div>
        </div>
      </Banner>
      <Banner className={`bg-[url('/aboutbnr3.png')] h-153`}>
        <div className="flex justify-center items-center">
          <div className="pr-25">
            <div className="flex justify-center items-center text-center ">
              <div className="font-nunito font-normal text-[18px] text-shadow-textsmtw pr-7.5 pt-25">
                <div className="py-15 px-10 bg-white">
                  <h3 className="font-semibold font-poppins text-[40px] text-textsmtw">19+</h3>
                  <p className="font-nunito font-normal text-[18px] text-shadow-textsmtw">Total Top Service</p>
                </div>
              </div>
              <div className="font-nunito font-normal text-[18px] text-shadow-textsmtw pt-25">
                <div className="py-15 px-10 bg-white">
                  <h3 className="font-semibold font-poppins text-[40px] text-textsmtw">19+</h3>
                  <p className="font-nunito font-normal text-[18px] text-shadow-textsmtw">Total Top Service</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center text-center">
              <div className="font-nunito font-normal text-[18px] text-shadow-textsmtw pr-7.5 pt-7.5">
                <div className="py-15 px-10 bg-white">
                  <h3 className="font-semibold font-poppins text-[40px] text-textsmtw">19+</h3>
                  <p className="font-nunito font-normal text-[18px] text-shadow-textsmtw">Total Top Service</p>
                </div>
              </div>
              <div className="font-nunito font-normal text-[18px] text-shadow-textsmtw pt-7.5">
                <div className="py-15 px-10 bg-white">
                  <h3 className="font-semibold font-poppins text-[40px] text-textsmtw">19+</h3>
                  <p className="font-nunito font-normal text-[18px] text-shadow-textsmtw">Total Top Service</p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <h3 className="font-semibold font-poppins text-[48px] text-textsmtw">The hundred of<br></br> completed works still<br></br> counting</h3>
            <p className="font-nunito font-normal text-[18px] text-shadow-textsmtw pt5">Through strategy, design, and planning we build brand identities<br></br> that connect with your Nesi. We then fine-tune a marketing plan<br></br> that allows us to laser focus and target your audience through<br></br> the right channels.</p>
          </div>
        </div>
      </Banner>
    </>
  )
}

export default About