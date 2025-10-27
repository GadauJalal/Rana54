import svgPaths from "./svg-zyl8mmnebw";

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#035220] text-[17.016px] text-nowrap">
        <p className="leading-[28.8px] whitespace-pre">Rana54</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container />
    </div>
  );
}

function LinkVariant1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Link - Variant 1">
      <Container1 />
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Component 2">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#002101] text-[15px] text-nowrap">
        <p className="leading-[25.6px] whitespace-pre">Solutions</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Component2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container2 />
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Component 2">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#002101] text-[14.875px] text-nowrap">
        <p className="leading-[25.6px] whitespace-pre">Company</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Component3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container4 />
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Component 2">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#002101] text-[15.125px] text-nowrap">
        <p className="leading-[25.6px] whitespace-pre">Impact</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Component4 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container6 />
    </div>
  );
}

function Component5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Component 2">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#002101] text-[15px] text-nowrap">
        <p className="leading-[25.6px] whitespace-pre">Newsroom</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Component5 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container8 />
    </div>
  );
}

function Component6() {
  return <div className="content-stretch flex items-start shrink-0" data-name="Component 2" />;
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Component6 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container10 />
    </div>
  );
}

function Menu() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0" data-name="Menu">
      <Container3 />
      <Container5 />
      <Container7 />
      <Container9 />
      <Container11 />
    </div>
  );
}

function LeftSideContent() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[31.99px] grow items-start max-w-[1120px] min-h-px min-w-px overflow-clip relative shrink-0" data-name="Left side content">
      <LinkVariant1 />
      <Menu />
    </div>
  );
}

function Component942143898() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
      <g id="942143898">
        <g id="SuXKGhab5"></g>
        <path d={svgPaths.p2e53de00} id="vvJ8FLDVj" stroke="var(--stroke-0, #035220)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5625" />
        <path d={svgPaths.p1b114000} id="Q3v7fjWhv" stroke="var(--stroke-0, #035220)" strokeMiterlimit="10" strokeWidth="1.5625" />
        <path d={svgPaths.p10136780} fill="var(--fill-0, #035220)" id="VxeO4Hprj" />
      </g>
    </svg>
  );
}

function Component1() {
  return (
    <div className="absolute bottom-1/4 left-1/2 top-1/4 translate-x-[-50%] w-[25px]" data-name="Component 1">
      <Component942143898 />
    </div>
  );
}

function LinkInstagram() {
  return (
    <div className="basis-0 bg-[#f6f6f6] grow min-h-px min-w-px overflow-clip relative rounded-[12px] shadow-[0px_0.84px_0.504px_-0.313px_rgba(204,204,204,0.12),0px_1.99px_1.194px_-0.625px_rgba(204,204,204,0.12),0px_3.631px_2.178px_-0.938px_rgba(204,204,204,0.12),0px_6.036px_3.622px_-1.25px_rgba(204,204,204,0.12),0px_9.748px_5.849px_-1.563px_rgba(204,204,204,0.12),0px_15.957px_9.574px_-1.875px_rgba(204,204,204,0.12),0px_27.476px_16.486px_-2.188px_rgba(204,204,204,0.12),0px_50px_30px_-2.5px_rgba(204,204,204,0.12)] shrink-0 w-full" data-name="Link - Instagram">
      <Component1 />
      <div className="absolute inset-0 rounded-[12px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[12px]" />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[50px]" data-name="Container">
      <LinkInstagram />
    </div>
  );
}

function Component1688045918() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
      <g id="1688045918">
        <g id="wBdJ15Yu6"></g>
        <path d={svgPaths.p32123000} id="El8uvQLqv" stroke="var(--stroke-0, #035220)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5625" />
        <path d={svgPaths.p2671da80} id="AHSzdg78i" stroke="var(--stroke-0, #035220)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5625" />
        <path d={svgPaths.pb1b6100} id="h4GjUNYzh" stroke="var(--stroke-0, #035220)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5625" />
      </g>
    </svg>
  );
}

function Component7() {
  return (
    <div className="absolute bottom-1/4 left-1/2 top-1/4 translate-x-[-50%] w-[25px]" data-name="Component 1">
      <Component1688045918 />
    </div>
  );
}

function LinkX() {
  return (
    <div className="basis-0 bg-[#f6f6f6] grow min-h-px min-w-px overflow-clip relative rounded-[12px] shadow-[0px_0.84px_0.504px_-0.313px_rgba(204,204,204,0.12),0px_1.99px_1.194px_-0.625px_rgba(204,204,204,0.12),0px_3.631px_2.178px_-0.938px_rgba(204,204,204,0.12),0px_6.036px_3.622px_-1.25px_rgba(204,204,204,0.12),0px_9.748px_5.849px_-1.563px_rgba(204,204,204,0.12),0px_15.957px_9.574px_-1.875px_rgba(204,204,204,0.12),0px_27.476px_16.486px_-2.188px_rgba(204,204,204,0.12),0px_50px_30px_-2.5px_rgba(204,204,204,0.12)] shrink-0 w-full" data-name="Link - X">
      <Component7 />
      <div className="absolute inset-0 rounded-[12px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[12px]" />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[50px]" data-name="Container">
      <LinkX />
    </div>
  );
}

function Component4033599021() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
      <g id="4033599021">
        <g id="ubm8tT7Gs"></g>
        <path d={svgPaths.p1f752200} id="uLIbokj1X" stroke="var(--stroke-0, #035220)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5625" />
        <path d="M11.7188 10.9375V17.1875" id="wcL4Xtw6S" stroke="var(--stroke-0, #035220)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5625" />
        <path d="M8.59375 10.9375V17.1875" id="haFqKG9T6" stroke="var(--stroke-0, #035220)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5625" />
        <path d={svgPaths.p32f3d400} id="ldXP7NTX2" stroke="var(--stroke-0, #035220)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5625" />
        <path d={svgPaths.p2f885cf0} fill="var(--fill-0, #035220)" id="M86o3vn0T" />
      </g>
    </svg>
  );
}

function Component8() {
  return (
    <div className="absolute bottom-1/4 left-1/2 top-1/4 translate-x-[-50%] w-[25px]" data-name="Component 1">
      <Component4033599021 />
    </div>
  );
}

function LinkLinkedIn() {
  return (
    <div className="basis-0 bg-[#f6f6f6] grow min-h-px min-w-px overflow-clip relative rounded-[12px] shadow-[0px_0.84px_0.504px_-0.313px_rgba(204,204,204,0.12),0px_1.99px_1.194px_-0.625px_rgba(204,204,204,0.12),0px_3.631px_2.178px_-0.938px_rgba(204,204,204,0.12),0px_6.036px_3.622px_-1.25px_rgba(204,204,204,0.12),0px_9.748px_5.849px_-1.563px_rgba(204,204,204,0.12),0px_15.957px_9.574px_-1.875px_rgba(204,204,204,0.12),0px_27.476px_16.486px_-2.188px_rgba(204,204,204,0.12),0px_50px_30px_-2.5px_rgba(204,204,204,0.12)] shrink-0 w-full" data-name="Link - LinkedIn">
      <Component8 />
      <div className="absolute inset-0 rounded-[12px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[12px]" />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[50px]" data-name="Container">
      <LinkLinkedIn />
    </div>
  );
}

function Socials() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0" data-name="Socials">
      <Container12 />
      <Container13 />
      <Container14 />
    </div>
  );
}

function LinksSocial() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Links & Social">
      <LeftSideContent />
      <Socials />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#002101] text-[12.797px] text-center text-nowrap">
        <p className="leading-[19.6px] whitespace-pre">© 2025 Rana54. All rights reserved.</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[0.01px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#002101] text-[13.781px] text-center text-nowrap">
        <p className="leading-[19.6px] whitespace-pre">Address</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <Container17 />
    </div>
  );
}

function Component9() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Component 2">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#002101] text-[12.906px] text-center text-nowrap">
        <p className="[text-underline-position:from-font] decoration-solid leading-[19.6px] underline whitespace-pre">contact</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Component9 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container18 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[32.01px] items-center justify-center relative shrink-0" data-name="Content">
      <Text />
      <Container19 />
    </div>
  );
}

function Copyrights() {
  return (
    <div className="content-stretch flex gap-[471.82px] items-center relative shrink-0 w-full" data-name="Copyrights">
      <Container16 />
      <Content />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center justify-center relative shrink-0 w-full" data-name="Content">
      <LinksSocial />
      <div className="bg-[rgba(13,41,0,0.05)] h-px shrink-0 w-full" data-name="Line" />
      <Copyrights />
    </div>
  );
}

export default function FooterDesktop() {
  return (
    <div className="bg-[#f6f6f6] relative rounded-tl-[16px] rounded-tr-[16px] shadow-[0px_0.84px_0.504px_-0.313px_rgba(204,204,204,0.13),0px_1.99px_1.194px_-0.625px_rgba(204,204,204,0.13),0px_3.631px_2.178px_-0.938px_rgba(204,204,204,0.13),0px_6.036px_3.622px_-1.25px_rgba(204,204,204,0.13),0px_9.748px_5.849px_-1.563px_rgba(204,204,204,0.13),0px_15.957px_9.574px_-1.875px_rgba(204,204,204,0.13),0px_27.476px_16.486px_-2.188px_rgba(204,204,204,0.13),0px_50px_30px_-2.5px_rgba(204,204,204,0.13)] size-full" data-name="Footer - Desktop">
      <div className="flex flex-col items-center justify-center max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center max-w-inherit overflow-clip p-[60px] relative size-full">
          <Content1 />
        </div>
      </div>
    </div>
  );
}