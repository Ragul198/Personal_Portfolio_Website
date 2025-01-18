
import skills from "../json/skils.json"
import Navbar from "./navbar";
function Skills(){



    return(
        <>
       <Navbar></Navbar>
        <div className="skills  h-full bg-gray-900 text-white pb-10" >
            <div className="heading  p-2 "><h1 className="text-teal-400 text-4xl font-regular text-center mt-5 underline  decoration-white">SKILLS</h1></div>

            <div className="skills-box flex justify-center items-center p-2  ">
                <div className="skill-grid grid grid-cols-6 grid-rows-3 grid-flow-row auto-rows-auto gap-10 border-2 p-12 rounded-2xl shadow-2xl shadow-teal-400 border-teal-400   ">
                {
                    skills&&skills.map(skill=>{
                        return(
                            <div key={skill.id} className="skill-box border-2 text-center transition delay-50 duration-300 ease-in-out hover:-translate-y-2  p-4 rounded-2xl bg-black/30 hover:bg-black/100 shadow-lg hover:shadow-cyan-500/50   ">
                                <div className="skill-content  ">
                                <img src={skill.icon} alt={skill.icon} className=" relative left-1/4 w-12 h-12 "  />
                                <p>{skill.name}</p>
                                </div>
                            </div>
                        )
                    })
                }


                
                
                
                
                </div>
                
        

            </div>
        </div>
        </>
    )

}
export default Skills;