import React from 'react'
import clinicImg from "../assets/clinic.jpg"; // حط صورة مناسبة هون

const Hero = () => {
    return (
        <>
            <div className="bg-sky-50">
                <div className="max-w-6xl mx-auto flex mob:flex-col items-center gap-10 px-6 py-12">
                    {/* النص */}
                    <div className="flex-1">
                        <p className="text-sm font-semibold text-sky-700 uppercase tracking-widest">
                            Your Health, Our Priority
                        </p>
                        <h1 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
                            Modern Medical Center for You & Your Family
                        </h1>
                        <p className="mt-3 text-slate-600 text-sm md:text-base leading-relaxed">
                            Professional doctors, advanced equipment, and personalized care —
                            all in one place. Book your appointment and get the care you deserve.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <button className="bg-sky-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-sky-700">
                                Book Appointment
                            </button>
                            <button className="border border-sky-600 text-sky-700 px-6 py-2 rounded-full text-sm font-semibold hover:bg-sky-50">
                                View Services
                            </button>
                        </div>

                        <div className="mt-5 text-xs md:text-sm text-slate-500">
                            Open daily: 9:00 AM – 9:00 PM • Emergency support available
                        </div>
                    </div>

                    {/* الصورة */}
                    <div className="flex-1">
                        <div className="rounded-3xl overflow-hidden shadow-lg border border-sky-100">
                            <img
                                src={clinicImg}
                                alt="Medical Clinic"
                                className="w-full h-[260px] md:h-[340px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>


    )
}

export default Hero