import workexp from "../json/work-experience.json"
import Navbar from "./navbar";
function Workexperience (){

    return(
        <>
        <Navbar></Navbar>
        <div className="work-experience h-screen bg-gray-900 text-white pt-4 ">
        <h1 className="font-bold font-regular text-4xl text-center underline">Work <span className="text-teal-400">Experience</span></h1>
        <div className="exp-container flex justify-center items-center ">
        <div className="grid-expereience grid grid-cols-2 grid-rows-1 gap-x-10 grid-flow-col mt-16">
           

                {
                    workexp.map(work=>{
                        return(
                            <div className="exp-1 border-2 border-teal-400 transition delay-50 ease-in-out hover:scale-105  h-auto w-64 text-center flex flex-col justify-center items-center p-6 rounded-xl shadow-xl  hover:shadow-cyan-400 bg-black/50 hover:bg-black/100  " key={work.id}>
                            <div className="img border-2 rounded-full m-4  w-48 h-48 flex justify-center items-center shadow-md shadow-white">
                             <img src={work.image} alt="{work.image}" className=" w-48 h-48 rounded-full"  />
                            </div>
                            <div className="content">
                            <h1 className="font-regular text-center text-teal-400 uppercase"> {work.title} <span className="text-white">(INTERN)</span></h1>
                            <p className="mt-5"> {work.des}
                            </p>
                            <h2 className="border-2 border-black mt-5 p-2 rounded-md bg-teal-400 hover:bg-teal-600 cursor-pointer">{work.timeline}</h2>
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
export default Workexperience