import { RevealOnScroll } from '../RevealOnScroll';

export const Home = () =>{
    return (
        <section 
            id="home" 
            className="min-h-screen flex items-center justify-center relative"
        >
        <RevealOnScroll>
            <div className="text-center z-10 px-4">
                <h1 
                    className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#e0c3fc] to-[#8ec5fc] bg-clip-text text-transparent leading-right">
                    Hi, I'm Khanh Quynh
                </h1>

                <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    I'm an IT student who passionates about software testing 
                    and quality assurance. I enjoy analyzing systems, 
                    identifying defects, and ensuring software reliability 
                    through meticulous testing.
                </p>

                <div className="flex justify-center space-x-4">
                    <a
                        href="#projects"
                        className="bg-gradient-to-r from-[#e0c3fc] to-[#8ec5fc] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
                                   hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(224, 195, 252, 0.6)]"
                    >
                        View Projects
                    </a>

                    <a
                        href="#contact"
                         className="border border-[#e0c3fc]/50 text-[#e0c3fc] py-3 px-6 rounded font-medium transition-all duration-200 
                                    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(224, 195, 252, 0.4)] hover:bg-[#e0c3fc]/10"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </RevealOnScroll>
        </section>

)
}