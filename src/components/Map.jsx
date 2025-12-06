import React from "react";

const Map = () => {
    return (
        <section className="py-10 px-6 bg-slate-50">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    Find Us on the Map
                </h2>

                <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200">
                    <iframe
                        title="Clinic Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.681027174017!2d55.38325371501058!3d25.346257783832364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5bb543fe8937%3A0xbbdd70b1cc8f3cce!2sKing%20Faisal%20St%20-%20Al%20Qasimia%20-%20Sharjah!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                        width="100%"
                        height="350"
                        style={{ border: "0" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                <p className="text-slate-600 mt-3 text-sm md:text-base">
                    Sharjah – King Faisal Street
                </p>
            </div>
        </section>
    );
};

export default Map;
