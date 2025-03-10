const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'Tailwind CSS', level: 80 },
    { name: 'React.js', level: 85 },
    { name: 'React-Native', level: 85 },
    { name: 'Node.js', level: 70 },
  ];
  
  const TechnicalSkills = () => (
    <section
      id="technical-skills"
      className="h-screen bg-gray-200 text-gray-800 flex flex-col justify-center items-center px-8"
    >
      <h2 className="text-4xl font-bold mb-6">Technical Skills</h2>
      <div className="w-full max-w-2xl">
        {skills.map((skill) => (
          <div key={skill.name} className="mb-4">
            <p className="text-lg font-medium mb-1">{skill.name}</p>
            <div className="w-full bg-gray-300 h-4 rounded">
              <div
                className="bg-blue-500 h-4 rounded"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default TechnicalSkills;