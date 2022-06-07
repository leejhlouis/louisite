import ArrowUpSLineIcon from 'remixicon-react/ArrowUpSLineIcon';
import NavLinks from './NavLinks'

export default function Footer() {
    return (
        <footer className='container pt-8'>
            <a href="#" className='btn justify-center'>
                <ArrowUpSLineIcon color="#fff" />
                <p>Back to top</p>
            </a>
            <div className='py-6'>
                <p className='font-light text-3xl pb-2'>
                    LOUI<span className='font-bold'>SITE</span>
                </p>
                <p>Louis' personal website</p>
            </div>
            <div className='flex justify-between items-center'>
                <p className='font-light'>© LOUISITE 2022.</p>
                <NavLinks />
            </div>
        </footer>
    );
  }