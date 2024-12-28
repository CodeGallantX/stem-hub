import { FaLightbulb, FaRocket, FaUsers, FaHandshake, FaTrophy } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="py-40 min-h-screen bg-[#f4e1d2] text-black px-6 md:px-8 lg:px-16 xl:px-24">
      <div className="text-center">
        <h2 className="text-4xl font-semibold mb-8 text-[#8d4e2d]">About Us</h2>
        <p className="text-lg sm:text-xl max-w-6xl mx-auto text-[#6a3d29] mb-10">
          STEM Hub is a pioneering platform designed to foster innovation, curiosity, and a passion for STEM (Science, Technology, Engineering, Mathematics) among learners of all ages. Our mission is to bridge the gap between traditional learning and hands-on exploration, making STEM education accessible, engaging, and impactful.
        </p>

        <div className="text-left max-w-6xl mx-auto space-y-16">
          <div className="flex items-start space-x-4">
            <FaLightbulb className="text-3xl text-[#8d4e2d]" />
            <div>
              <h3 className="text-2xl font-bold text-[#8d4e2d] mb-4">Our Mission</h3>
              <p className="text-lg text-[#6a3d29]">
                To ignite a passion for STEM learning by providing accessible tools, interactive games, and resources that empower learners to explore, innovate, and excel in their fields of interest.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaRocket className="text-3xl text-[#8d4e2d]" />
            <div>
              <h3 className="text-2xl font-bold text-[#8d4e2d] mb-4">Our Vision</h3>
              <p className="text-lg text-[#6a3d29]">
                A world where every individual, regardless of background, has the opportunity to thrive and contribute to the advancement of science and technology through equitable STEM education.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaTrophy className="text-3xl text-[#8d4e2d]" />
            <div>
              <h3 className="text-2xl font-bold text-[#8d4e2d] mb-4">Our Goals</h3>
              <ul className="list-disc pl-8 text-lg text-[#6a3d29] space-y-2">
                <li>Provide cutting-edge resources and tools to support STEM education.</li>
                <li>Collaborate with educators, institutions, and organizations to expand access to STEM opportunities.</li>
                <li>Inspire creativity, critical thinking, and innovation in learners of all ages.</li>
              </ul>
            </div>
          </div>

          {/* <div className="flex items-start space-x-4">
            <FaUsers className="text-3xl text-[#8d4e2d]" />
            <div>
              <h3 className="text-2xl font-bold text-[#8d4e2d] mb-4">Our Team</h3>
              <p className="text-lg text-[#6a3d29]">
                STEM Hub is backed by a dedicated team of educators, scientists, engineers, and technologists who share a passion for empowering learners. Our team works tirelessly to curate high-quality content and innovative tools to support the global STEM community.
              </p>
            </div>
          </div> */}

          <div className="flex items-start space-x-4">
            <FaHandshake className="text-8xl text-[#8d4e2d]" />
            <div>
              <h3 className="text-2xl font-bold text-[#8d4e2d] mb-4">Partners & Sponsors</h3>
              <p className="text-lg text-[#6a3d29]">
                We collaborate with leading educational institutions, tech companies, and non-profits to bring the best resources to our users. Our partners include [Insert Partner Names], and we are grateful for their continued support in advancing STEM education.
              </p>
            </div>
          </div>

          {/* <div className="flex items-start space-x-4">
            <FaTrophy className="text-3xl text-[#8d4e2d]" />
            <div>
              <h3 className="text-2xl font-bold text-[#8d4e2d] mb-4">Key Milestones</h3>
              <ul className="list-disc pl-8 text-lg text-[#6a3d29] space-y-2">
                <li>Launched STEM Hub in [Insert Launch Year] with a mission to revolutionize STEM education.</li>
                <li>Reached [Insert User Milestone] users globally within [Insert Timeframe].</li>
                <li>Partnered with [Insert Major Partner Names] to expand our reach and impact.</li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
