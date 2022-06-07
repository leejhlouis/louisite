import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon';
import portfolio from '../data/portfolio.js'
import { Link } from "react-router-dom";

export default function Works() {
    const portfolioDiv = portfolio.map(d =>
        (
            <div className='md:w-[48%] lg:w-[30%]'>
                <div className='w-full overflow-hidden'>
                <img src="https://tukang-travel.web.app/static/media/pic.1433055076ae74ba337b.jpg" alt="Portfolio" className="transition hover:scale-125 cursor-pointer hover:opacity-80" />
                </div>
                <div className='pt-8'>
                    <h5 className='text-3xl font-bold pb-3'>{d.title}</h5>
                    <p className='p pb-0'>{d.categories}</p>
                    <Link to={`/portfolio/${d.id}`} className='btn btn-details'>
                        <p>Check it out</p>
                        <ArrowRightSLineIcon />
                    </Link>
                </div>
            </div>
        )   
    )

    return (
        <div id="portfolio" className='container'>
            <h2 className='text-5xl font-bold text-center'>Portfolio</h2>
            <div className='flex flex-wrap flex-col md:flex-row mx-auto justify-center gap-x-[4%] gap-y-12 pt-24'>
                {portfolioDiv}
                {portfolioDiv}
            </div>
        </div>
    );
  }