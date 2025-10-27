import svgPaths from "./svg-kcopbn3c1k";

function Component1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Component 1">
          <path d={svgPaths.p39be50} id="Vector" stroke="var(--stroke-0, #035220)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['SF_Pro_Text:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(0,33,1,0.6)] text-nowrap tracking-[1.04px] uppercase">
        <p className="leading-[19.5px] whitespace-pre">Why Choose Rana54</p>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="absolute backdrop-blur-sm backdrop-filter bg-[rgba(255,255,255,0.6)] box-border content-stretch flex gap-[12px] items-center left-0 px-[21px] py-[9px] rounded-[1.67772e+07px] top-0" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <Component1 />
      <Container />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['SF_Pro_Text:Regular_Italic',_sans-serif] italic justify-center leading-[0] relative shrink-0 text-[#002101] text-[56px] tracking-[-1.12px] w-full">
        <p className="leading-[61.6px]">clean energy count</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8.1px] items-start left-0 max-w-[800px] right-[300px] top-[69.5px]" data-name="Heading 2">
      <div className="flex flex-col font-['SF_Pro_Text:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#002101] text-[56px] text-nowrap tracking-[-1.12px]">
        <p className="leading-[61.6px] whitespace-pre">The platform that makes</p>
      </div>
      <Container1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 max-w-[680px] right-[420px] top-[224.14px]" data-name="Container">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',_sans-serif] justify-center leading-[32.4px] not-italic relative shrink-0 text-[18px] text-[rgba(0,33,1,0.6)] text-nowrap whitespace-pre">
        <p className="mb-0">{`We've built more than just technology. We've created a complete ecosystem that`}</p>
        <p>connects your solar generation to real climate action and financial opportunity.</p>
      </div>
    </div>
  );
}

export default function Container3() {
  return (
    <div className="relative size-full" data-name="Container">
      <OverlayBorderOverlayBlur />
      <Heading2 />
      <Container2 />
    </div>
  );
}