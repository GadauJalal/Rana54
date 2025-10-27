import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Subtle sun-ray background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f97316] to-transparent transform -rotate-12" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f97316] to-transparent transform rotate-12" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f97316] to-transparent transform rotate-45" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f97316] to-transparent transform -rotate-45" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl">
              Earn from every clean kilowatt.
            </h1>
            <p className="text-xl text-gray-600 max-w-xl">
              Track your energy in real time, verify your impact, get paid for it.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-6">
                Get RanaMeter
              </Button>
              <Button
                variant="outline"
                className="border-[#0d5c3d] text-[#0d5c3d] hover:bg-[#0d5c3d] hover:text-white px-8 py-6"
              >
                Request a demo
              </Button>
            </div>
          </div>

          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1745393926629-76f943e190ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwcGhvbmUlMjBhcHB8ZW58MXx8fHwxNzYwNTI0MzM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="RanaMeter device and app interface"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
