import svgPaths from "./svg-rbrsyng1df";
import imgImage from "figma:asset/f8128c57025ddbaa59b269bb59d872ec6e4a7ac0.png";

function Link() {
  return (
    <div className="h-[24.75px] relative shrink-0 w-[65.133px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Arimo:Regular',sans-serif] font-normal leading-[33px] left-0 text-[#d4d4d4] text-[22px] top-[-1.5px]">About us</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[24.75px] relative shrink-0 w-[70.297px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Arimo:Regular',sans-serif] font-normal leading-[33px] left-0 text-[#d4d4d4] text-[22px] top-[-1.5px]">Our Work</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="flex-[1_0_0] h-[24.75px] min-h-px min-w-px relative" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Arimo:Regular',sans-serif] font-normal leading-[33px] left-0 text-[#d4d4d4] text-[22px] top-[-1.5px]">Contact us</p>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute content-stretch flex gap-[60px] h-[24.75px] items-center left-[765px] top-[38px] w-[334.305px]" data-name="Navbar">
      <Link />
      <Link1 />
      <Link2 />
    </div>
  );
}

function Image() {
  return (
    <div className="h-[26.25px] relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Navbar1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[26.25px] items-start left-[67px] top-[35px] w-[118.5px]" data-name="Navbar">
      <Image />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[3.999px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[3.13%] right-[3.15%] top-1/2">
        <div className="absolute inset-[-2px_-3.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63.9674 3.99911">
            <path d="M1.99955 1.99955H61.9678" id="Line 163" stroke="var(--stroke-0, #E9E4E4)" strokeLinecap="round" strokeWidth="3.99911" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col h-[3.999px] items-start left-[1770.01px] top-[42.31px] w-[63.98px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[3.965px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[5%] right-[5.87%] top-1/2">
        <div className="absolute inset-[-200%_-5.61%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.3059 4.95615">
            <path d={svgPaths.p1f2870c0} id="Line 164" stroke="var(--stroke-0, #E9E4E4)" strokeLinecap="round" strokeWidth="3.96489" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[3.965px] items-start left-[1794.35px] top-[50.35px] w-[39.649px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[3.965px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[9.09%] right-[10.78%] top-1/2">
        <div className="absolute inset-[-199.16%_-11.39%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.2751 4.93943">
            <path d={svgPaths.p19cb80e0} id="Line 165" stroke="var(--stroke-0, #E9E4E4)" strokeLinecap="round" strokeWidth="3.94809" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[3.965px] items-start left-[1812.38px] top-[59.35px] w-[21.622px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

export default function Navbar2() {
  return (
    <div className="relative size-full" data-name="navbar">
      <div className="absolute border border-[#f6f6f6] border-solid h-[97px] left-0 top-0 w-[1920px]" />
      <Navbar />
      <Navbar1 />
      <Container />
      <Container1 />
      <Container2 />
    </div>
  );
}