import React, {useState} from "react";
import Skill from "./Skill";

const SkillsList = () => {
    const [skills] = useState([
        {name: "German", level: 5},
        {name: "English", level: 4},
        {name: "French", level: 1},
        {name: "Java", level: 5},
        {name: "Angular", level: 4},
        {name: "React", level: 3},

    ]);
    return (
        <div>
            {skills.map(skill => (
                <Skill name={skill.name} level={skill.level} key={skill.index}/>
            ))}
        </div>
    );
};
export default SkillsList;
