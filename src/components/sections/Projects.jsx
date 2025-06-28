import { RevealOnScroll } from "../RevealOnScroll";
import concertBooking from "../../assets/concert-booking.png";
import CatchMeIfYouCan from "../../assets/catch-me-if-you-can.png";
import pizzaCRM from "../../assets/pizzacrm.png";

export const Projects = () => {
    return (
        <section 
            id="projects" 
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-[#e0c3fc] to-[#8ec5fc] bg-clip-text text-transparent text-center">
                        Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "PizzaCRM",
                                description:
                                    "A CRM web application for Pizza brand that manages customer information and orders, features user roles, and visualizes data using graphs for analytics.",
                                image: pizzaCRM, 
                                tech: ["Python", "Django", "Bootstrap"],
                                link: "https://github.com/npkyphuong04/CRM-Project",
                            },
                            {
                                title: "ConcertLand",
                                description:
                                    "An online concert booking platform to streamline ticket reservations, enhance user experience, and ensure seamless booking management.",
                                image: concertBooking,
                                tech: ["React", "Node.js", "MongoDB"],
                                link: "https://github.com/kquinn301/concert-booking-system",
                            },
                            {
                                title: "Catch Me If You Can",
                                description:
                                    "An entertaining game that applies the concepts we learned in the Algorithms and Data Structures course.",
                                image: CatchMeIfYouCan,
                                tech: ["Java"],
                                link: "https://github.com/tnphucccc/Catch-Me-If-You-Can",
                            },
                        ].map((project, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-xl border border-white/10 bg-gradient-to-r from-[#e0c3fc]/10 to-[#8ec5fc]/10 
                                hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(224,195,252,0.4)] transition"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-40 object-cover rounded-lg mb-4"
                                />
                                <h3 className="text-xl font-bold mb-2 text-[#e0c3fc]">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-[#e0c3fc]/10 text-[#e0c3fc] py-1 px-3 rounded-full text-sm 
                                            hover:bg-[#e0c3fc]/20 hover:shadow-[0_2px_8px_rgba(224,195,252,0.4)] transition-all"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center">
                                    <a
                                        href={project.link}
                                        className="text-[#8ec5fc] hover:text-[#e0c3fc] transition-colors my-4"
                                    >
                                        View Project →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
