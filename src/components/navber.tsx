import { Link as Scroll } from 'react-scroll'

const Navbar = () => {
    return (
        <div className='navbar fixed z-10 text-left p-6 font-oswald'>
            <Scroll to="about" smooth={true} offset={-50} className='p-2 underline underline-offset-2 hover:underline-offset-8 mr-2'>
                About.
            </Scroll>
            <Scroll to="works" smooth={true} offset={-50} className='p-2 underline underline-offset-2 hover:underline-offset-8 mr-2'>
                Works.
            </Scroll>
            <Scroll to="video" smooth={true} offset={-50} className='p-2 underline underline-offset-2 hover:underline-offset-8 mr-2'>
                Video.
            </Scroll>
            <Scroll to="experiences" smooth={true} offset={-50} className='p-2 underline underline-offset-2 hover:underline-offset-8 mr-2'>
                Experiences.
            </Scroll>
            <Scroll to="contact" smooth={true} offset={-50} className='p-2 underline underline-offset-2 hover:underline-offset-8 mr-2'>
                Contact.
            </Scroll>
        </div>
    )
}
export default Navbar
