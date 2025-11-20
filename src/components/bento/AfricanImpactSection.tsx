import Zumaroack from "../../assets/images/Zuma_Rock.jpg"
export function AfricanImpactSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-[0_20px_70px_-15px_rgba(0,0,0,0.15)] overflow-hidden">
        <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px]">
          <img
            src={Zumaroack}
            alt="Zuma Rock, Niger State, Nigeria"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Caption overlay */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-8 bg-white/95 backdrop-blur-sm px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-5 rounded-xl sm:rounded-2xl shadow-2xl border border-white/50">
            <p className="text-sm sm:text-base lg:text-lg text-gray-900 tracking-tight">
              Zuma Rock in Niger State, Nigeria.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
