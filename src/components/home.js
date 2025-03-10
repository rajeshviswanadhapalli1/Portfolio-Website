import Typewriter from 'typewriter-effect';
import homebg from '../assets/images/homebg2.jpg';

const Home = () => (
    <section
      id="home"
      className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage: `url(${homebg})`,
      }}
    >
      <h1 className="text-5xl font-bold">
        <Typewriter
          options={{
            strings: ['Welcome to My Portfolio','I am Rajesh Viswanadhapalli', 'I am a Web & Mobile App Developer', 'Let’s Build Something Amazing'],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
    </section>
  );
  
  export default Home;