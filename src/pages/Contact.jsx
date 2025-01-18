import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope , faHippo } from '@fortawesome/free-solid-svg-icons'
import Navbar from './navbar'
function Contact(){
    return(
        <>
        <Navbar></Navbar>
        <div className="container w-screen h-screen bg-gray-900 p-5 ">
            <h1 className='text-3xl text-teal-400 font-regular text-center  '>CONTACT</h1>
            <div className="social-links">
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
        </>
    )

}
export default Contact