import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { Button } from "antd";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { submitEnquiry } from "../api/contactApi";
import type { EnquiryPayload } from "../api/contactApi";
import { toast } from "sonner";
import { FaSpinner } from "react-icons/fa";
import SEO from "../components/SEO";
import { PAGE_SEO, DEFAULT_SEO } from "../utils/seo-config";
import { getLocalBusinessSchema } from "../utils/structured-data";
import { pageTransition } from "../utils/animations";

const Contactus = () => {
  const [formData, setFormData] = useState<EnquiryPayload>({
    fullName: "",
    email: "",
    phone: "",
    message: ""
  });

  const enquiryMutation = useMutation({
    mutationFn: submitEnquiry,
    onSuccess: () => {
      toast.success("Thank you! Your message has been sent successfully.");
      setFormData({ fullName: "", email: "", phone: "", message: "" });
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "Failed to send message. Please try again.");
    }
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      toast.warning("Please fill in all fields.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.warning("Please enter a valid email address.");
      return;
    }

    enquiryMutation.mutate(formData);
  };

  return (
    <motion.section
      className="min-h-screen pt-24 pb-20 bg-gray-50"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
    >
      <SEO
        title={PAGE_SEO.contact.title}
        description={PAGE_SEO.contact.description}
        keywords={PAGE_SEO.contact.keywords}
        ogImage={PAGE_SEO.contact.ogImage}
        canonical={`${DEFAULT_SEO.siteUrl}/contact/us`}
        structuredData={getLocalBusinessSchema()}
      />
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="relative mb-16 md:mb-24">
          <div className="w-full h-[300px] md:h-[450px] overflow-hidden rounded-3xl shadow-xl">
            <img src="../assets/contact-us.png" alt="Contact Us Header" className="w-full h-full object-cover" />
          </div>
          <div className="flex justify-center -mt-6 md:-mt-10">
            <button className="bg-primary py-3 md:py-4 px-10 md:px-20 rounded-tl-2xl rounded-br-2xl text-white font-bold text-xl md:text-3xl lg:text-4xl shadow-2xl">
              CONTACT US
            </button>
          </div>
        </div>

        <div className="text-center mb-16 px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">We're Here to Help!</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about our training programs, enrollment, or partnership opportunities? Our team is ready to assist you. Reach out to us through any of the following channels:
          </p>
          <p className="text-lg md:text-xl text-primary font-medium mt-4">
            Fill out the form below, and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-gray-100 max-w-5xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:col-span-2">
              <label htmlFor="fullName" className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">Phone No *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl h-48 focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-sm"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <Button
              htmlType="submit"
              disabled={enquiryMutation.isPending}
              className="bg-secondary border-none hover:scale-105 transition-transform h-14 px-16 text-xl font-bold rounded-2xl shadow-xl text-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {enquiryMutation.isPending ? (
                <>
                  <FaSpinner className="animate-spin" />
                  Sending...
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </div>
        </form>

        <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12">Where to find Us</h1>

        {/* Maps Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="w-full h-[400px] md:h-[500px] bg-gray-200 rounded-[30px] overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.1895275855363!2d4.634178573500876!3d8.480944397330106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10364c98504505c1%3A0xbc7efb5616914b29!2s28%20University%20Rd%2C%20Akanbi-1v%20240102%2C%20Kwara!5e0!3m2!1sen!2sng!4v1747137397034!5m2!1sen!2sng"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="w-full h-[400px] md:h-[500px] bg-gray-200 rounded-[30px] overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7371.536670746189!2d4.547938709986998!3d8.483617607695157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10365296fffcd2ef%3A0xfb07be14b3f123c!2sopp.%20GTBank!5e0!3m2!1sen!2sng!4v1747136939024!5m2!1sen!2sng"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Address Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 md:p-12 rounded-[30px] shadow-lg border border-gray-100 flex flex-col items-center text-center gap-6 group hover:shadow-2xl transition-all">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center p-5 group-hover:bg-primary/20 transition-colors">
              <img src="../assets/location.png" alt="Location Icon" className="w-full h-auto object-contain" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Tanke Office</h3>
              <p className="text-gray-600 leading-relaxed">
                28, University Road, Tanke. Ilorin <br />
                <span className="font-semibold text-primary">fiti@femtechtraining.com</span><br />
                <span className="font-semibold text-primary">+(234) 705-996-1675</span>
              </p>
            </div>
          </div>
          <div className="bg-white p-8 md:p-12 rounded-[30px] shadow-lg border border-gray-100 flex flex-col items-center text-center gap-6 group hover:shadow-2xl transition-all">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center p-5 group-hover:bg-primary/20 transition-colors">
              <img src="../assets/location.png" alt="" className="w-full h-auto object-contain" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Ibrahim Taiwo Office</h3>
              <p className="text-gray-600 leading-relaxed">
                158, Ibrahim Taiwo Road, Opposite Femtech PC Clinic Ilorin <br />
                <span className="font-semibold text-primary">fiti@femtechtraining.com</span><br />
                <span className="font-semibold text-primary">+(234) 705-996-1675</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contactus
