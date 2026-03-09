import Banner from "../Common/Banner"
import Container from "../Common/Container"
import Flex from "../Common/Flex"

const Footer = () => {
  return (
    <Banner className={`bg-[#F1FBFB]`}>
      <Container>
        <Flex className={`justify-between items-start pt-35`}>
          <div className="">
            <img className="" src="/Logop.png" alt="Logop.png" />
            <p className="pt-11 font-normal font-nunito text-[18px] text-textsmtw">Install any demo or template with a single click. You</p>
            <p className="font-normal font-nunito text-[18px] text-textsmtw">can mix and match all the demos & templates. Every</p>
            <p className="font-normal font-nunito text-[18px] text-textsmtw">demo can be turned into one or multi-page.</p>
          </div>
          <div className="">
            <h3 className="font-openSans font-semibold text-2xl text-textsmtw">Features</h3>
            <p className="font-nunito font-semibold text-[20px] text-textsmtw pb-3.75 pt-12">Home</p>
            <p className="font-nunito font-semibold text-[20px] text-textsmtw py-3.75">About</p>
            <p className="font-nunito font-semibold text-[20px] text-textsmtw py-3.75">Benifit</p>
            <p className="font-nunito font-semibold text-[20px] text-textsmtw py-3.75">Pricing</p>
            <p className="font-nunito font-semibold text-[20px] text-textsmtw pt-3.75">Blog</p>
          </div>
          <div className="">
            <h3 className="font-openSans font-semibold text-2xl text-textsmtw">Products</h3>
            <p className="font-nunito font-semibold text-[20px] text-textsmtw pb-3.75 pt-12">Task Management</p>
            <p className="font-nunito font-semibold text-[20px] text-textsmtw py-3.75">Company growth</p>
            <p className="font-nunito font-semibold text-[20px] text-textsmtw pt-3.75">Time tracking</p>
          </div>
          <div className="">
            <h3 className="font-openSans font-semibold text-2xl text-textsmtw">Support</h3>
            <p className="font-nunito font-semibold text-[20px] text-textsmtw pb-3.75 pt-12">Customer service</p>
            <p className="font-nunito font-semibold text-[20px] text-textsmtw py-3.75">Accessibility</p>
            <p className="font-nunito font-semibold text-[20px] text-textsmtw pt-3.75">Contact us</p>
          </div>
        </Flex>
        <div className="flex justify-between items-center pt-30.5 pb-15">
            <p className="font-normal font-nunito text-[18px] text-textsmtw">@2021 Innovate.All rights reserved.</p>
          <div className="flex justify-end items-end">
            <p className="font-normal font-nunito text-[18px] text-textsmtw pr-15">Privacy policy</p>
            <p className="font-normal font-nunito text-[18px] text-textsmtw">Terms & condition</p>
          </div>
        </div>
      </Container>
    </Banner>
  )
}

export default Footer