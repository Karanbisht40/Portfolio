"use client";

import { certifications } from "@/data";

const Certification = () => {
    return (
        <section className="py-20" id="certifications">
            <h1 className="heading">
                My <span className="text-purple">Certifications</span>
            </h1>

            <div className="grid lg:grid-cols-2 gap-8 mt-12">
                {certifications.map((item) => (
                    <div
                        key={item.id}
                        className="border border-white/10 rounded-3xl p-6 bg-[#10132E]"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-56 rounded-xl object-cover mb-6"
                        />

                        <h2 className="text-xl font-bold">{item.title}</h2>

                        <p className="text-gray-400 mt-2">
                            {item.issuer} • {item.year}
                        </p>

                        <a
                            href={item.credential}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple mt-5 inline-block hover:underline"
                        >
                            View Certificate →
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certification;