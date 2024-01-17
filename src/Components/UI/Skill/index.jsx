export default function Skill({ skill, level }) {
    return (
      <div className="w-full flex px-6 justify-between items-center">
        <h3 className="text-white w-24 flex-shrink-0">{skill}</h3>
        <div className="bg-black border-2 border-white flex-grow rounded-lg h-4">
          <div className="bg-textc h-3 rounded-lg" style={{ width: `${level}%` }}></div>
        </div>
      </div>
    );
  }