export function TrustStrip() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-600 mb-8">Built for verified impact.</p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-40">
          <div className="h-12 px-8 flex items-center justify-center border border-gray-300 rounded">
            <span className="text-gray-600">Partner 1</span>
          </div>
          <div className="h-12 px-8 flex items-center justify-center border border-gray-300 rounded">
            <span className="text-gray-600">Partner 2</span>
          </div>
          <div className="h-12 px-8 flex items-center justify-center border border-gray-300 rounded">
            <span className="text-gray-600">Partner 3</span>
          </div>
          <div className="h-12 px-8 flex items-center justify-center border border-gray-300 rounded">
            <span className="text-gray-600">Partner 4</span>
          </div>
        </div>
      </div>
    </section>
  );
}
