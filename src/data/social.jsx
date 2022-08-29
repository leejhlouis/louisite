import MailFillIcon from "remixicon-react/MailFillIcon";
import LinkedinFillIcon from "remixicon-react/LinkedinFillIcon";
import GithubFillIcon from "remixicon-react/GithubFillIcon";

const social = [
    { 
        name: "Mail", 
        href: "mailto:louis.gustavo@binus.ac.id",
        icon: (<MailFillIcon color="#e5e7eb" size={22} />)
    },
    { 
        name: "LinkedIn", 
        href: "https://www.linkedin.com/in/louis-gustavo",
        icon: (<LinkedinFillIcon color="#e5e7eb" size={24} />)
    },
    { 
        name: "GitHub", 
        href: "https://github.com/itslouisgs",
        icon: (<GithubFillIcon color="#e5e7eb" size={24} />)
    },
];

export default social;