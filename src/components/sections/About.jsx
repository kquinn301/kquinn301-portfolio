import { RevealOnScroll } from "../RevealOnScroll";
import { FaPython, FaJava, FaJs, FaReact, FaDatabase, FaBootstrap } from "react-icons/fa";
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
              A fresh IT graduate with practical experience in manual testing and passionate about building reliable digital products.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-[#e0c3fc]"> Programming Languages </h3>
                <div className="list-disc list-inside space-y-2">
                  <p className="mt-2 text-gray-300">
                    • Python
                  </p>
                  <p className="mt-2 text-gray-300">
                    • SQL
                  </p>
                  <p className="mt-2 text-gray-300">
                    • JavaScript
                  </p>
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-[#e0c3fc]"> Tools </h3>
                <div className="list-disc list-inside space-y-2">
                  <p className="mt-2 text-gray-300">
                    • Postman
                  </p>
                  <p className="mt-2 text-gray-300">
                    • JMeter
                  </p>
                  <p className="mt-2 text-gray-300">
                    • Proxyman
                  </p>
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
                <p className="text-gray-400">International University - VNU HCMC (2021 - 2025)</p>
              </div>
              <div className="mt-4">
                <p className="mt-2 text-gray-300">
                  <strong>GPA:</strong> 3.41/4.00
                </p>
                <p className="mt-2 text-gray-300">
                  <strong>Milestones:</strong>
                </p>
                <p className="mt-2 text-gray-300">
                  • Awarded partial entrance scholarship for the academic years 2021–2025.
                </p>
                <p className="mt-2 text-gray-300">
                  • Graduated with Silver Medal.
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
                  <p className="text-lg font-semibold text-gray-200"> Quality Control Engineer</p>
                  <p className="text-gray-400">Kyanon Digital (Jun 2025 - Jul 2026)</p>
                  <div className="mt-4">
                    <p> • Built a solid foundation of <b>software testing</b>, <b>SDLC</b> and <b>Agile</b> methodologies.</p>
                    <div className="mt-2">
                      <p> • Analyzed requirements, designed test cases, executed manual testing, identified and reported defects.</p>
                    </div>
                    <div className="mt-2">
                      <p> • Performed <b>API testing</b> using Postman.</p>
                    </div>
                    <div className="mt-2">
                      <p> • Designed and executed <b>load testing</b> scenarios using JMeter.</p>
                    </div>
                    <div className="mt-2">
                      <p> • Used Proxyman to inspect and analyze API traffic.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
