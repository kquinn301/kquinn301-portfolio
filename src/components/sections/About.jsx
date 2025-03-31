import { RevealOnScroll } from '../RevealOnScroll';

export const About = () => {
    
    const testingSkills = [
        "Manual Testing",
        "Test Management",
        "Bug Tracking",
        "Agile Process",
        "API Testing",
      ];
    
    const programmingSkills = ["Java", "Python", "JavaScript"];
    const frameworks = ["React"];
    const databases = ["SQL", "MongoDB"];

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        {" "}
                        About Me
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                        Passionate about software testing, ensuring seamless functionality, 
                        reliability, and quality in every application.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Software Testing </h3>
                                <div className="flex flex-wrap gap-2">
                                    {testingSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Programming </h3>
                                <div className="flex flex-wrap gap-2">
                                    {programmingSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Framework </h3>
                                <div className="flex flex-wrap gap-2">
                                    {frameworks.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Database </h3>
                                <div className="flex flex-wrap gap-2">
                                    {databases.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> 🎓 Education </h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong> Bachelor of Engineering in Information Technology </strong> - International University VNU HCMC
                                    (10/2021-Present)
                                </li>
                                <li>
                                    Relevant Courseworks: Object-Oriented Programming, Algorithms & Data Structures, 
                                    Web Application Development, Software Engineering...
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold">
                                        {" "}
                                        QA Intern (07/2024 - 10/2024){" "}
                                    </h4>
                                    <p>
                                        Gained foundational knowledge of software testing and Agile methodologies, 
                                        with hands-on experience in manual testing.
                                    </p>
                                </div>
                            </div>
                        </div>
                                </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}