const Curriculum = () => {
  return (
    <section className="bg-gray-50 pt-24 pb-20">
      <div className="relative mb-16">
        <div className="w-full h-[300px] md:h-[500px] overflow-hidden">
          <img src="/assets/d_curriculum.png" alt="Curriculum Hero" className="w-full h-full object-cover" />
        </div>
        <div className="flex justify-center -mt-6 md:-mt-10">
          <button className="bg-primary py-3 md:py-4 px-10 md:px-20 rounded-tl-2xl rounded-br-2xl text-white font-bold text-xl md:text-3xl lg:text-4xl shadow-2xl">
            DOWNLOAD CURRICULUM
          </button>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl text-center mb-16">
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Interested in learning what we teach at FEMTECH? <br className="hidden md:block" /> Get a free copy of our updated course syllabus for any of our training programs. <br className="hidden md:block" /> Just fill out the form below and your syllabus will be delivered instantly to your inbox.
        </p>
      </div>

      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-gray-100">
          <form className="space-y-10">
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700 ml-2">Full Name :</label>
              <input
                type="text"
                placeholder="Enter full name"
                className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700 ml-2">Email :</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700 ml-2">Phone No :</label>
                <input
                  type="tel"
                  placeholder="Enter phone no"
                  className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700 ml-2">Why are you downloading the Syllabus ?</label>
              <input
                type="text"
                placeholder="Share your goals..."
                className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm"
              />
            </div>

            <div className="pt-6 border-t border-gray-100">
              <div className="bg-primary/5 p-6 rounded-2xl mb-10">
                <p className="font-bold text-gray-800 mb-2">Consent</p>
                <div className="flex gap-4 items-start">
                  <input type="checkbox" className="mt-1.5 h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary" />
                  <p className="text-gray-700">I agree to receive communication from FEMTECH Training Centre about upcoming programs, discounts, and events.</p>
                </div>
              </div>

              <div className="flex justify-center">
                <button className="bg-secondary hover:bg-opacity-90 py-4 px-12 md:px-20 rounded-2xl text-white font-bold text-xl shadow-xl transition-transform hover:scale-105">
                  Download Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
