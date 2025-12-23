const Registrationform = () => {
  return (
    <section className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="relative mb-16">
        <div className="w-full h-[300px] md:h-[500px] overflow-hidden">
          <img src="/assets/registartion_Img.png" alt="Registration Hero" className="w-full h-full object-cover" />
        </div>
        <div className="flex justify-center -mt-6 md:-mt-10">
          <button className="bg-primary py-3 md:py-4 px-10 md:px-20 rounded-tl-2xl rounded-br-2xl text-white font-bold text-xl md:text-3xl lg:text-4xl shadow-2xl">
            REGISTRATION FORM
          </button>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-5xl text-center mb-16">
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-6">
          You're just a few steps away from joining hundreds of students building real tech skills at FEMTECH! Fill out the form below to register for your preferred training program. Whether you're starting from scratch or leveling up, we’ve got a place for you.
        </p>
        <p className="text-xl md:text-3xl font-bold text-primary">
          Let’s get you started — your future in tech begins here!
        </p>
      </div>

      <div className="container mx-auto px-6 max-w-5xl">
        <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-gray-100">
          <form className="space-y-12">
            {/* Personal Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-8 pb-2 border-b-2 border-primary/20 inline-block">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name :</label>
                  <input type="text" placeholder="Enter full name" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email :</label>
                  <input type="email" placeholder="Enter email" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone No :</label>
                  <input type="tel" placeholder="Enter phone no" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Date of Birth :</label>
                  <input type="text" placeholder="DD/MM/YYYY" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Gender :</label>
                  <input type="text" placeholder="Gender" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Residential Address :</label>
                  <input type="text" placeholder="Enter residential address" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm" />
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-8 pb-2 border-b-2 border-primary/20 inline-block">Emergency Contact</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Next of Kin Full Name :</label>
                  <input type="text" placeholder="Enter full name" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email :</label>
                  <input type="email" placeholder="Enter email" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone No :</label>
                  <input type="tel" placeholder="Enter phone no" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Relationship :</label>
                  <input type="text" placeholder="e.g. Parent, Sibling" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm" />
                </div>
              </div>
            </div>

            {/* Educational Background */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-8 pb-2 border-b-2 border-primary/20 inline-block">Educational Background</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Highest Academic Qualification :</label>
                  <input type="text" placeholder="Qualification" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Current Occupation / Status :</label>
                  <input type="text" placeholder="Occupation" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm" />
                </div>
              </div>
            </div>

            {/* Course and Training Details */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-8 pb-2 border-b-2 border-primary/20 inline-block">Course and Training Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Course of Interest :</label>
                  <input type="text" placeholder="Select Course" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Training Branch Choice :</label>
                  <input type="text" placeholder="Branch" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Preferred Training Mode :</label>
                  <input type="text" placeholder="Online / Physical" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2">How did you hear about FEMTECH Training Centre ?</label>
                  <input type="text" placeholder="Referral, Social Media, etc." className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm" />
                </div>
              </div>
            </div>

            {/* Document Upload */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-8 pb-2 border-b-2 border-primary/20 inline-block">Document Upload</h2>
              <div className="space-y-4">
                <p className="text-gray-700 font-medium">Passport Photograph (Upload clear headshot – JPEG/PNG, max 2MB)</p>
                <input type="file" className="w-full p-4 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 hover:border-primary transition-colors" />
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100">
              <div className="bg-primary/5 p-6 rounded-2xl space-y-4 mb-8">
                <p className="font-bold text-gray-800 text-lg">Agreement and Submission</p>
                <div className="flex gap-4 items-start">
                  <input type="checkbox" className="mt-1.5 h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary" />
                  <p className="text-gray-700">I confirm that the information provided is accurate to the best of my knowledge. I agree to abide by the rules and ethics of FEMTECH Training Centre.</p>
                </div>
                <p className="text-sm font-semibold text-gray-600 italic">Students are advised to read FEMTECH Terms and Conditions in order to be fully informed about standards and policies of the institute.</p>
              </div>

              <div className="flex justify-center">
                <button className="bg-secondary hover:bg-opacity-90 py-4 px-20 rounded-2xl text-white font-bold text-xl shadow-xl transition-transform hover:scale-105">
                  Submit Registration
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Registrationform
