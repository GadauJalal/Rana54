import Mole from "../../assets/Ghana_mole_national_park.jpg";
export function AfricanLocationSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-[0_20px_70px_-15px_rgba(0,0,0,0.15)] overflow-hidden">
        <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px]">
          <img
            src={Mole}
            alt="Mole National Park, Savannah Region, Ghana"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Caption overlay - Full width banner on mobile, floating card on desktop */}
          <div className="absolute bottom-0 left-0 right-0 lg:bottom-8 lg:left-8 lg:right-auto lg:max-w-md bg-white/95 backdrop-blur-sm px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-5 lg:rounded-2xl shadow-2xl border-t lg:border border-white/50">
            <p className="text-sm sm:text-base lg:text-lg text-gray-900 tracking-tight">
              Mole National Park in Savannah Region, Ghana.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
