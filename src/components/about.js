import professionalImage from '../assets/images/aboutus.jpeg'; // Adjust the path to your image

const About = () => (
  <section
    id="about"
    className="h-screen bg-gray-100 text-gray-800 flex flex-col md:flex-row items-center justify-center px-8"
  >
    {/* Left Section: Text */}
    <div className="md:w-1/2 text-center md:text-left">
      <h2 className="text-4xl font-bold mb-4">About Me</h2>
      <p className="text-lg leading-relaxed max-w-lg">
        I’m a passionate and dedicated web developer with experience in building 
        responsive, user-friendly websites and applications. I specialize in 
        React.js, JavaScript, and Tailwind CSS, creating intuitive and 
        aesthetically pleasing user interfaces. My goal is to turn ideas into 
        impactful digital solutions. Let's work together to bring your vision to life!
      </p>
    </div>

    {/* Right Section: Image */}
    <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
      <img 
        src={professionalImage} 
        alt="Professional" 
        className="rounded-lg shadow-lg w-80 h-auto object-cover"
      />
    </div>
  </section>
);

export default About;
