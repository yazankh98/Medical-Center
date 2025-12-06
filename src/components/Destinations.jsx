import React from "react";
import { FaStethoscope, FaChild, FaTeeth, FaHeartbeat } from "react-icons/fa";

const services = [
    {
        icon: <FaStethoscope />,
        title: "General Check-ups",
        desc: "Routine examinations and primary healthcare for all ages.",
    },
    {
        icon: <FaChild />,
        title: "Pediatrics",
        desc: "Dedicated medical care for babies, children, and teenagers.",
    },
    {
        icon: <FaTeeth />,
        title: "Dental Care",
        desc: "Cleaning, fillings, and cosmetic dental treatments.",
    },
    {
        icon: <FaHeartbeat />,
        title: "Cardiology",
        desc: "Heart health assessments and long-term follow-up.",
    },
];

const MedicalServices = () => {
    return (
        <section className="py-12 px-6 bg-white">
            <div className="max-w-5xl mx-auto">
                <div className="mb-8 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                        Our Medical Services
                    </h2>
                    <p className="mt-2 text-slate-500 text-sm md:text-base">
                        A full range of healthcare services tailored to your needs.
                    </p>
                </div>

                <div className="grid gap-6 mob:grid-cols-1 md:grid-cols-2">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="border border-slate-200 rounded-2xl p-5 flex gap-4 hover:border-sky-500 hover:shadow-md transition-all bg-slate-50"
                        >
                            <div className="text-sky-600 text-3xl mt-1">
                                {service.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-900">
                                    {service.title}
                                </h3>
                                <p className="mt-1 text-sm text-slate-600">
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MedicalServices;
