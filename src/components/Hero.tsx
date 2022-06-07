import ArrowDownSLineIcon from 'remixicon-react/ArrowDownSLineIcon';

export default function Hero() {
    return (
        <div className='h-[85vh]'>
            <div className='h-5/6 container flex justify-center items-center flex-col gap-6'>
                <h1 className='text-6xl md:text-7xl font-bold text-center'>Hi, I'm Louis Gustavo!</h1>
                <h2 className='text-3xl md:text-4xl font-light text-center'>avid coder | computer science student</h2>
            </div>
            <a href="#portfolio" className='h-1/6 btn justify-center'>
                <ArrowDownSLineIcon color="#fff" />
                <p>Select works</p>
            </a>
        </div>
    );
  }