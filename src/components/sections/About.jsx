import { RevealOnScroll } from "../RevealOnScroll";
import { FaPython, FaJava, FaJs, FaReact, FaDatabase } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaCheckCircle, FaBug, FaCog, FaMicrochip, FaUsers } from "react-icons/fa";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

export const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-[#e0c3fc] to-[#8ec5fc] bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border border-white/10 bg-gradient-to-r from-[#e0c3fc]/10 to-[#8ec5fc]/10 
          hover:shadow-[0_4px_12px_rgba(224,195,252,0.4)] hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6 text-lg text-center">
              A final-year student passionate about software testing, ensuring seamless functionality, reliability, and quality in every application.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-[#e0c3fc]"> Software Testing </h3>
                <div className="list-disc list-inside space-y-2">
                  <div className="flex items-center">
                    <FaCheckCircle className="mr-2 text-yellow-500" />
                    <span>Manual Testing</span>
                  </div>
                  <div className="flex items-center">
                    <FaCog className="mr-2 text-green-500" />
                    <span>Test Case Design</span>
                  </div>
                  <div className="flex items-center">
                    <FaBug className="mr-2 text-red-500" />
                    <span>Bug Tracking</span>
                  </div>
                  <div className="flex items-center">
                    <FaMicrochip className="mr-2 text-gray-500" />
                    <span>API Testing</span>
                  </div>
                  <div className="flex items-center">
                    <FaUsers className="mr-2 text-purple-500" />
                    <span>Agile Processes</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-[#e0c3fc]"> Programming </h3>
                <div className="flex gap-4 text-4xl">
                  <FaJava className="text-[#f8981d] w-15 h-15" title="Java" />
                  <FaPython className="text-[#306998] w-15 h-15" title="Python" />
                  <FaJs className="text-[#f7df1e] w-15 h-15" title="JavaScript" />
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-[#e0c3fc]"> Framework </h3>
                <div className="flex gap-4 text-4xl">
                  <FaReact className="text-[#61dafb] w-15 h-15" title="React" />
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-[#e0c3fc]"> Database </h3>
                <div className="flex gap-4 text-4xl">
                  <FaDatabase className="text-[#003B57] w-15 h-15" title="SQL" />
                  <SiMongodb className="text-[#47A248] w-15 h-15" title="MongoDB" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border border-white/10 bg-gradient-to-r from-[#e0c3fc]/10 to-[#8ec5fc]/10 
            hover:shadow-[0_4px_12px_rgba(224,195,252,0.4)] hover:-translate-y-1 transition-all">
              <div className="flex items-start space-x-4">
                <FaGraduationCap className="text-gray-200 text-2xl" />
                <h2 className="text-xl font-bold mb-4 text-[#e0c3fc]"> Education </h2>
              </div>
              <div className="mt-2">
                <p className="text-lg font-semibold text-gray-200">
                  Bachelor of Engineering in Information Technology
                </p>
                <p className="text-gray-400">International University VNU HCMC (10/2021 - Present)</p>
              </div>
              <div className="mt-4">
                <p className="text-gray-300">
                  <strong>Relevant Coursework:</strong> Object-Oriented Programming, Algorithms & Data Structures, 
                                                        Web Application Development, Software Engineering...
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 bg-gradient-to-r from-[#e0c3fc]/10 to-[#8ec5fc]/10 
            hover:shadow-[0_4px_12px_rgba(224,195,252,0.4)] hover:-translate-y-1 transition-all">
              <div className="flex items-start space-x-4">
                <FaBriefcase className="text-gray-200 text-2xl" />
                <h3 className="text-xl font-bold mb-4 text-[#e0c3fc]"> Work Experience </h3>
              </div>
              <div className="space-y-4 text-gray-300">
                <div>
                  <p className="text-lg font-semibold text-gray-200"> QA Intern (07/2024 - 10/2024) </p>
                  <p>Gained hands-on experience in software testing and Agile methodologies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
