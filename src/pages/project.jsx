import project from "../json/project.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import Navbar from "./navbar";
function Projects(){

    return(
        <>
        <Navbar></Navbar>
        <div className="projects h-full bg-gray-900 text-white  pb-10 " >
            <h1 className="text-4xl text-center font-regular font-bold pt-5 pb-10">PROJECTS</h1>

        <div className="project-grid-box grid grid-cols-2 grid-rows-2 gap-28 p-8 grid-flow-row pt-10 border-2 border-teal-400 ml-10 mr-10 pb-10 shadow-xl rounded-xl shadow-teal-400 " >

            {
                project.map(proj=>{
                    return(
                        <div className=" border-2 transition delay-100 duration-300 ease-in-out hover:scale-105 w-full h-56 flex  justify-center items-center shadow-xl hover:shadow-cyan-400 bg-black/50 hover:bg-black/100 rounded-2xl " key={proj.id} >
                        <div className="p-img w-2/5 h-full relative p-4 ">   
                        
                        <img src={proj.image} alt={proj.image}  className=" h-full  w-full z-0 shadow-sm shadow-white rounded-3xl" />
                        
                        </div>
                        <div className="text w-3/5 h-full p-4 relative ">
                        <h1 className="font-regular font-bold text-teal-400 text-3xl uppercase">{proj.name}</h1>
                        <p className=""> {proj.description}</p>
                        <div className="linkbtn border-2 w-14 h-7 px-2 rounded-lg absolute right-2 bottom-2 hover:-translate-y-2 transition ease-in-out delay-75  ">
                        <a href="" >LINK</a>
                        </div>
                        </div>
                
                    </div>
                   

                    )
                })

            }
            {/* <div className="p-1 border-2 border-teal-400 w-full h-56 flex  justify-center items-center shadow-xl hover:shadow-cyan-400" >
                
                <img src=".\src\assets\logo\zoro dev.webp" alt="zoro" className="w-1/2 h-full border-r-2 p-4" />
                <div className="text w-1/2 p-4">
                <h1 className="font-regular font-bold text-teal-400 text-3xl">Zoro</h1>
                <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti quam dolores debitis illum earum itaque fugit facilis perferendis aliquid libero sed, a, vel natus reprehenderit aut nisi laborum doloremque at!</p>
                </div>
                
            </div> */}
            
        
        </div>
        </div>
        </>
    )

}
export default Projects