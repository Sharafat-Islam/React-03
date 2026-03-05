import Banner from "../Common/Banner"
import Button from "../Common/Button"
import Container from "../Common/Container"
import Flex from "../Common/Flex"
import { GoCheckCircleFill, GoXCircleFill } from "react-icons/go"

const Home = () => {
  return (
    <>
      <Banner className={`bg-[url('/src/assets/homebnr.png')]`}>
        <div className="text-center pt-48">
          <div className="flex justify-center items-center gap-2.5">
            <div className="border border-textsm rounded-2xl py-2.5 px-3.75">
              <p className="text-textsm font-nunito">SEO</p>
            </div>
            <div className="border border-textsm rounded-2xl py-2.5 px-3.75">
              <p className="text-textsm font-nunito">SMM</p>
            </div>
            <div className="border border-textsm rounded-2xl py-2.5 px-3.75">
              <p className="text-textsm font-nunito">CRO</p>
            </div>
          </div>
          <div className="pt-7">
            <p className="font-bold text-white text-6xl">Guaranteed Increase Of Your </p>
            <p className="font-bold text-white text-6xl">Website Sales</p>
          </div>
          <div className="pt-7">
            <p className="text-textsm">With Over 25 Years Of Experience, We Have Crafted Thousands Of Strategic Discovery Process</p>
            <p className="text-textsm">That Enables Us To Peel Back The Layers Which Enable Us To Understand.</p>
          </div>
          <div className="pt-12">
            <input className="outline-0 bg-white rounded-l-xl pr-55 py-3 pl-3" type="text" placeholder="Paste Your Website Links" />
            <Button className={`rounded-r-xl py-2.75 hover:border-main duration-300 hover:bg-main`} btntext={"Analyze Website"} />
          </div>
          <div className="flex justify-around items-center pb-25 pt-115">
            <img src="/home1.png" alt="home1.png" />
            <img src="/home2.png" alt="home2.png" />
            <img src="/home3.png" alt="home3.png" />
            <img src="/home4.png" alt="home4.png" />
          </div>
        </div>
      </Banner>
      <Banner className={`bg-[#ffffff]`}>
        <Flex className={`justify-center`}>
          <p className="text-main font-nunito font-normal text-2xl">Core Feature</p>
        </Flex>
        <h3 className="font-semibold font-poppins text-[46px] text-center text-textsmtw pt-2.5">Provide Awesome Service </h3>
        <h3 className="font-semibold font-poppins text-[46px] text-center text-textsmtw">With Our Tools</h3>
        <Container>
          <Flex className={`justify-between`}>
            <div className="pt-21.75">
              <p className="font-nunito font-normal text-[18px] text-textsmtw pl-15">With over 25 years of experience, we have crafted thousands of strategic</p>
              <p className="font-nunito font-normal text-[18px] text-textsmtw pl-15">discovery process that enables us to peel back the layers which enable us to</p>
              <p className="font-nunito font-normal text-[18px] text-textsmtw pl-15">understand.</p>
              <img className="pt-20 pb-35" src="/Frame1.png" alt="Frame1.png" />
            </div>
            <div className="pl-8">
              <div className="pt-9">
                <div className="flex justify-center items-center bg-[#F0EDFF] rounded-2xl hover:scale-102 duration-300">
                  <img className="py-9 pl-9" src="/Groupc1.png" alt="Groupc1.png" />
                  <div className="pl-10 pr-15">
                    <h3 className="font-poppins font-semibold text-textsmtw text-[28px]">SEO Consultancy</h3>
                    <p className="font-nunito font-normal text-[18px] text-textsmtw pt-3">Nam libero tempore, cum soluta nobis est</p>
                    <p className="font-nunito font-normal text-[18px] text-textsmtw">eligendi optio cumque </p>
                  </div>
                </div>
              </div>
              <div className="pt-9">
                <div className="flex justify-center items-center bg-[#FEF6EC] rounded-2xl hover:scale-102 duration-300">
                  <img className="py-9 pl-9" src="/Groupc2.png" alt="Groupc2.png" />
                  <div className="pl-10 pr-15">
                    <h3 className="font-poppins font-semibold text-textsmtw text-[28px]">Competitor Analysis</h3>
                    <p className="font-nunito font-normal text-[18px] text-textsmtw pt-3">Nam libero tempore, cum soluta nobis est eligendi optio</p>
                    <p className="font-nunito font-normal text-[18px] text-textsmtw"></p>
                  </div>
                </div>
              </div>
              <div className="pt-9">
                <div className="flex justify-center items-center bg-[#E8FCF2] rounded-2xl hover:scale-102 duration-300">
                  <img className="py-9 pl-9" src="/Groupc3.png" alt="Groupc3.png" />
                  <div className="pl-10 pr-15">
                    <h3 className="font-poppins font-semibold text-textsmtw text-[28px]">Social Media Marketing</h3>
                    <p className="font-nunito font-normal text-[18px] text-textsmtw pt-3">Nam libero tempore, cum soluta nobis est</p>
                    <p className="font-nunito font-normal text-[18px] text-textsmt">eligendi optio cumque </p>
                  </div>
                </div>
              </div>
            </div>
          </Flex>
          <Flex className={`justify-between`}>
            <div className="">
              <h3 className="font-semibold font-poppins text-5xl text-textsmtw pt-30">Get more traffic</h3>
              <p className="font-nunito font-normal text-[18px] text-textsmtw pt-6">With over 25 years of experience, we have crafted thousands of</p>
              <p className="font-nunito font-normal text-[18px] pt-1 text-textsmtw">strategic discovery process that enables us to peel back the layers</p>
              <p className="font-nunito font-normal text-[18px] pt-1 text-textsmtw">which enable us to understand.With over 25 years of experience, we</p>
              <p className="font-nunito font-normal text-[18px] pt-1 text-textsmtw">have crafted thousands of strategic discovery process</p>
              <div className="flex pb-15 pt-10 items-center">
                <img className="px-7.5" src="/percentage1.png" alt="percentage1.png" />
                <img className="px-7.5" src="/percentage2.png" alt="percentage2.png" />
                <img className="px-7.5" src="/percentage3.png" alt="percentage3.png" />
              </div>
            </div>
            <img src="/Frame2.png" alt="Frame2.png" />
          </Flex>
        </Container>
      </Banner>
      <Banner className={`bg-[#F8FDFE]`}>
        <Container>
          <div className="text-center pt-15">
            <p className="font-nunito font-normal text-2xl text-main">Our process</p>
            <h3 className="font-poppins font-semibold text-5xl text-textsmtw pt-3.5 pb-15">How can we help?</h3>
          </div>
          <div className="flex justify-center items-center gap-6 py-10">
            <div className="bg-[#b4f2fa] hover:scale-103 duration-300 rounded-2xl p-8 w-1/4">
              <img src="/icon1.png" alt="icon" className="mb-4" />
              <p className="font-poppins text-xl font-semibold">Real time analytics</p>
            </div>
            <div className="bg-[#F0EDFF] hover:scale-103 duration-300 rounded-2xl p-8 w-1/4">
              <img src="/icon2png.png" alt="icon" className="mb-4" />
              <p className="font-poppins text-xl font-semibold">Social media strategy</p>
            </div>
            <div className="bg-[#E8FCF2] hover:scale-103 duration-300 rounded-2xl p-8 w-1/4">
              <img src="/icon3png.png" alt="icon" className="mb-4" />
              <p className="font-poppins text-xl font-semibold">Media management</p>
            </div>
            <div className="bg-[#eab183] hover:scale-103 duration-300 rounded-2xl p-8 w-1/4">
              <img src="/icon1.png" alt="icon" className="mb-4" />
              <p className="font-poppins text-xl font-semibold">Reporting & analysis</p>
            </div>
          </div>
          <div className="flex pt-10 items-center">
            <div className="">
              <img src="/Frame3.png" alt="Frame3.png" />
            </div>
            <div className="pl-35">
              <h3 className="font-poppins font-semibold text-4xl text-textsmtw">Real time analytics</h3>
              <p className="font-nunito font-normal text-[18px] pt-6 text-textsmtw">Analyzing negative materials about your brand and addressing them</p>
              <p className="font-nunito font-normal text-[18px] text-textsmtw">with sentiment analysis and press release distribution.Turn your</p>
              <p className="font-nunito font-normal text-[18px] text-textsmtw">visitors into customers with our team of experts. We'll analyze your</p>
              <p className="font-nunito font-normal text-[18px] text-textsmtw">website and develop a suitable conversion-rate strategy.</p>
              <button className="hover:bg-main hover:text-white text-main border duration-300 border-main mt-12 p-5.5 rounded-3xl">Analyze Website</button>
            </div>
          </div>
        </Container>
      </Banner>
      <Banner>
        <Container>
          <div className="flex justify-between items-center pt-30 pb-15">
            <div className="">
              <p className="font-nunito font-medium text-2xl text-main">Our works</p>
              <h3 className="font-poppins font-semibold text-3xl text-textsmtw">Our Case Studies</h3>
            </div>
            <div className="">
              <button className="hover:bg-main hover:text-white text-main border duration-300 border-main mt-12 p-3.5 rounded-2xl">View All</button>
            </div>
          </div>
          <div className="flex justify-center items-center pb-30">
            <div className="w-90 px-7.5">
              <div className="bg-[#D9D9D9] h-62.5 w-full rounded-2xl mb-6"></div>
              <h3 className="font-poppins font-medium text-2xl text-[#121212] mb-4">
                Search Marketer
              </h3>
              <p className="font-nunito font-normal text-gray-600 text-[18px] leading-relaxed">
                Analyzing Negative Materials About Your Brand And Addressing Them With Sentiment Analysis And Press Release Distribution.
              </p>
            </div>
            <div className="w-90 px-7.5">
              <div className="bg-[#D9D9D9] h-62.5 w-full rounded-2xl mb-6"></div>
              <h3 className="font-poppins font-medium text-2xl text-[#121212] mb-4">
                Watching For Trends
              </h3>
              <p className="font-nunito font-normal text-gray-600 text-[18px] leading-relaxed">
                Analyzing Negative Materials About Your Brand And Addressing Them With Sentiment Analysis And Press Release Distribution.
              </p>
            </div>
            <div className="w-90 px-7.5">
              <div className="bg-[#D9D9D9] h-62.5 w-full rounded-2xl mb-6"></div>
              <h3 className="font-poppins font-medium text-2xl text-[#121212] mb-4">
                Cross Over Benifits
              </h3>
              <p className="font-nunito font-normal text-gray-600 text-[18px] leading-relaxed">
                Analyzing Negative Materials About Your Brand And Addressing Them With Sentiment Analysis And Press Release Distribution.
              </p>
            </div>
          </div>
        </Container>
      </Banner>
      <Banner>
        <Container>
          <div className="text-center mb-10">
            <p className="text-blue-500 font-semibold">Our Pricing</p>
            <h2 className="text-4xl font-bold text-slate-800">Premium Optimization Plans</h2>
          </div>
          <div className="bg-white overflow-hidden border border-slate-200">

            <div className="flex h-1.5 w-full">
              <div className="flex-1 bg-blue-100"></div>
              <div className="flex-1 bg-[#333333]"></div>
              <div className="flex-1 bg-[#4ade80]"></div>
              <div className="flex-1 bg-[#8b5cf6]"></div>
            </div>
            <div className="flex border-b border-slate-200">
              <div className="flex-1 p-8 flex items-center text-slate-500 text-sm italic">
                Save <span className="font-bold text-black px-1">Up To 40%</span> By Paying Annually!
              </div>
              <div className="flex-1 p-8 text-center border-l border-slate-200">
                <h3 className="font-bold text-xl">Personal</h3>
                <p className="text-slate-400 text-sm font-medium">Free</p>
              </div>
              <div className="flex-1 p-8 text-center border-l border-slate-200">
                <h3 className="font-bold text-xl">Professional</h3>
                <p className="text-slate-400 text-sm font-medium">$59/Monthly</p>
              </div>
              <div className="flex-1 p-8 text-center border-l border-slate-200">
                <h3 className="font-bold text-xl">Enterprise</h3>
                <p className="text-slate-400 text-sm font-medium">$299/Monthly</p>
              </div>
            </div>
            <div className="flex border-b border-slate-100 items-center">
              <div className="flex-1 p-5 pl-8 font-bold text-slate-700">Keywords Result</div>
              <div className="flex-1 p-5 text-center border-l border-slate-100 text-slate-500">Top 1,000</div>
              <div className="flex-1 p-5 text-center border-l border-slate-100 text-slate-500">5,000</div>
              <div className="flex-1 p-5 text-center border-l border-slate-100 text-slate-500">10,000</div>
            </div>
            <div className="flex border-b border-slate-100 items-center bg-slate-50/50">
              <div className="flex-1 p-5 pl-8 font-bold text-slate-700">Territories</div>
              <div className="flex-1 p-5 text-center border-l border-slate-100 text-slate-500">Top 6</div>
              <div className="flex-1 p-5 text-center border-l border-slate-100 text-slate-500">13</div>
              <div className="flex-1 p-5 text-center border-l border-slate-100 text-slate-500">200+</div>
            </div>
            <div className="flex border-b border-slate-100 items-center">
              <div className="flex-1 p-5 pl-8 font-bold text-slate-700">Search By Time</div>
              <div className="flex-1 p-5 text-center border-l border-slate-100"><GoCheckCircleFill className="text-green-400 mx-auto text-xl" /></div>
              <div className="flex-1 p-5 text-center border-l border-slate-100"><GoCheckCircleFill className="text-green-400 mx-auto text-xl" /></div>
              <div className="flex-1 p-5 text-center border-l border-slate-100"><GoCheckCircleFill className="text-green-400 mx-auto text-xl" /></div>
            </div>
            <div className="flex border-b border-slate-100 items-center bg-slate-50/50">
              <div className="flex-1 p-5 pl-8 font-bold text-slate-700">Api Access</div>
              <div className="flex-1 p-5 text-center border-l border-slate-100"><GoXCircleFill className="text-red-400 mx-auto text-xl" /></div>
              <div className="flex-1 p-5 text-center border-l border-slate-100"><GoXCircleFill className="text-red-400 mx-auto text-xl" /></div>
              <div className="flex-1 p-5 text-center border-l border-slate-100"><GoCheckCircleFill className="text-green-400 mx-auto text-xl" /></div>
            </div>
            <div className="flex w-full">
              <div className="flex-1 p-5"></div>
              <button className="flex-1 py-6 bg-[#333333] text-white font-bold hover:bg-black transition-colors">Try For Free</button>
              <button className="flex-1 py-6 bg-[#4ade80] text-white font-bold hover:bg-[#43CB83] border-l border-white/10 transition-colors">Buy Now</button>
              <button className="flex-1 py-6 bg-[#8b5cf6] text-white font-bold hover:bg-purple-600 border-l border-white/10 transition-colors">Buy Now</button>
            </div>
          </div>
        </Container>
      </Banner>
      <Container>
        <Banner className={`bg-[url('/src/assets/bnr2.png')]`}>
        </Banner>
      </Container>
    </>
  )

}

export default Home