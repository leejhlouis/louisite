import MailFillIcon from "remixicon-react/MailFillIcon";
import LinkedinFillIcon from "remixicon-react/LinkedinFillIcon";
import GithubFillIcon from "remixicon-react/GithubFillIcon";

interface socialProps {
  name: string;
  url: string;
  icon: JSX.Element;
}

const social: socialProps[] = [
  {
    name: "Mail",
    url: "mailto:louis.gustavo@binus.ac.id",
    icon: <MailFillIcon size={22} className="text-muted-dark dark:text-muted" />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/louis-gustavo",
    icon: <LinkedinFillIcon size={24} className="text-muted-dark dark:text-muted" />,
  },
  {
    name: "GitHub",
    url: "https://github.com/itslouisgs",
    icon: <GithubFillIcon size={24} className="text-muted-dark dark:text-muted" />,
  },
];

export default social;
