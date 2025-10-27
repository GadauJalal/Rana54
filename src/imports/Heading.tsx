function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#002101] text-[66.309px] text-center tracking-[-0.7px] w-full">
        <p className="leading-[77px]">Turning solar energy into verified impact</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="box-border content-stretch flex flex-col items-start mb-[-2.842e_-14px] relative shrink-0 w-full" data-name="Container">
      <Heading1 />
    </div>
  );
}

function Heading2() {
  return <div className="basis-0 grow min-h-px min-w-px opacity-0 self-stretch shrink-0" data-name="Heading 1" />;
}

function Container1() {
  return <div className="absolute h-[84px] left-0 right-0 top-0" data-name="Container" />;
}

function Container2() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="box-border content-stretch flex flex-col items-start mb-[-2.842e_-14px] relative shrink-0 w-full" data-name="Container">
      <Container2 />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center max-w-[700px] relative shrink-0 w-[700px]" data-name="Title">
      <Container />
      <Container3 />
    </div>
  );
}

function TextBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] h-[335px] items-center justify-center relative shrink-0 w-full" data-name="Text Block">
      <Title />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[108px] justify-center leading-[0] not-italic relative shrink-0 text-[#636363] text-[16.875px] text-center w-[385px]">
        <p className="leading-[28.8px]">Rana54 connects clean energy generation with financial value. With our device, app, and verification pipeline, every kilowatt counts toward real climate solutions.</p>
      </div>
    </div>
  );
}

export default function Heading() {
  return (
    <div className="content-stretch flex flex-col gap-[23.5px] items-center justify-center relative size-full" data-name="Heading">
      <TextBlock />
    </div>
  );
}