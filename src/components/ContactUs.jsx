import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="bg-white py-12 px-6 border-t border-slate-200">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-900">
          Contact Us
        </h2>
        <p className="text-slate-600 mt-2 text-sm md:text-base">
          We are here to support your health — get in touch with our clinic 🩺
        </p>
      </div>

      <div className="grid mob:grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        
        <div className="flex items-start gap-4">
          <FaPhoneAlt className="text-3xl text-sky-600" />
          <div>
            <h3 className="font-semibold text-lg text-slate-900">Phone</h3>
            <p className="text-slate-600 text-sm">+971 99 999 999</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <FaWhatsapp className="text-3xl text-green-500" />
          <div>
            <h3 className="font-semibold text-lg text-slate-900">WhatsApp</h3>
            <p className="text-slate-600 text-sm">+971 99 999 999</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <FaEnvelope className="text-3xl text-sky-600" />
          <div>
            <h3 className="font-semibold text-lg text-slate-900">Email</h3>
            <p className="text-slate-600 text-sm">info@clinic.com</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <FaMapMarkerAlt className="text-3xl text-sky-600" />
          <div>
            <h3 className="font-semibold text-lg text-slate-900">Location</h3>
            <p className="text-slate-600 text-sm">Sharjah, UAE</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
