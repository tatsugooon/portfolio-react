
const Navbar = () => {
    return (
        <div className='navbar fixed z-10 text-left p-6 font-oswald'>
            <a href='/#about' className='p-2 underline underline-offset-2 hover:underline-offset-8 mr-2'>
                About.
            </a>
            <a href='/#works' className='p-2 underline underline-offset-2 hover:underline-offset-8 mr-2'>
                Works.
            </a>
            <a href='/#video' className='p-2 underline underline-offset-2 hover:underline-offset-8 mr-2'>
                Video.
            </a>
            <a href='/#experiences' className='p-2 underline underline-offset-2 hover:underline-offset-8 mr-2'>
                Experiences.
            </a>
            <a href='/#contact' className='p-2 underline underline-offset-2 hover:underline-offset-8'>
                Contact.
            </a>
        </div>
    )
}
export default Navbar
