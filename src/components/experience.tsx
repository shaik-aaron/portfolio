import { EXP } from "./exp";

function Experience() {
  return (
    <div className="grid grid-cols-2 gap-4 mt-8">
      {EXP.map((exp, index) => (
        <div
          key={index}
          className="h-48 border-2 border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <img src={exp.logo} height={exp.height} width={exp.width} />
          <p className="text-xl mt-3 font-geistsemibold text-gray-400">
            {exp.position} | {exp.timePeriod}
          </p>
          <p className="text-md mt-3 font-geistmedium">{exp.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Experience;
