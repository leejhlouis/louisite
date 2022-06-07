import NavLinks from './NavLinks'

export default function Navbar() {
    return (
      <nav className='mx-auto'>
          <div className="container flex justify-between items-center py-5 flex-wrap">
                <p className='font-light text-2xl'>
                    LOUI<span className='font-bold'>SITE</span>
                </p>
                <NavLinks />
          </div>
      </nav>
    );
}