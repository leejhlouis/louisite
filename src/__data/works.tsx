import GithubFillIcon from "remixicon-react/GithubFillIcon";
import ExternalLinkFillIcon from "remixicon-react/ExternalLinkFillIcon";

interface linkProps {
  label: string;
  url: string;
  icon: JSX.Element;
}

export interface worksProps {
  dateRange: string;
  title: string;
  description: string | JSX.Element;
  techStacks: string[];
  links: linkProps[];
}

const github = {
  label: "Source code",
  icon: <GithubFillIcon size={24} />,
};

const live = {
  label: "Live",
  icon: <ExternalLinkFillIcon size={24} />,
};

export const works = [
  {
    dateRange: "Sep – Oct 2022",
    title: "HIMTI Election 2022",
    description:
      "An e-voting website that allows students and lecturers of the School of Computer Science to vote for the next Chairman of HIMTI BINUS University.",
    techStacks: ["Bootstrap", "Laravel", "Project management"],
    links: [
      {
        ...github,
        url: "https://github.com/itslouisgs/himti-election-2022",
      },
      {
        ...live,
        url: "https://election.himtibinus.or.id/",
      },
    ],
  },
  {
    dateRange: "Jun – Sep 2022",
    title: "LOUISITE",
    description: "My all-new personal website—this is the second and latest iteration.",
    techStacks: ["React", "TypeScript", "Tailwind CSS", "Figma"],
    links: [
      {
        ...github,
        url: "https://github.com/itslouisgs/louisite",
      },
      {
        ...live,
        url: "https://louisite.netfliy.app",
      },
    ],
  },
  {
    dateRange: "Mar – May 2022",
    title: "BalaiTani",
    description:
      "An e-commerce web app designed as a platform for connecting small farmers to buyers directly to avoid middlemen from inflating the retail costs.",
    techStacks: ["Laravel", "Bootstrap"],
    links: [
      {
        ...github,
        url: "https://github.com/itslouisgs/balaitani",
      },
      {
        ...live,
        url: "http://balaitani.herokuapp.com",
      },
    ],
  },
  {
    dateRange: "May – Jun 2022",
    title: "BalaiTani, built with ASP.NET",
    description:
      "Another rendition of BalaiTani built with ASP.NET and domain-driven design implementation.",
    techStacks: ["ASP.NET", "Bootstrap", "Domain-driven design"],
    links: [
      {
        ...github,
        url: "https://github.com/itslouisgs/balaitani-asp",
      },
    ],
  },
  {
    dateRange: "Feb – Mar 2022",
    title: "TukangTravel",
    description:
      "The landing page of TukangTravel—a lifestyle traveling app designed for travelers who love adventure and hidden gems.",
    techStacks: ["React", "Tailwind CSS", "Figma"],
    links: [
      {
        ...github,
        url: "https://github.com/itslouisgs/tukang-travel",
      },
      {
        ...live,
        url: "https://tukang-travel.web.app/",
      },
    ],
  },
  {
    dateRange: "Aug – Sep 2021",
    title: "LOUISITE v1",
    description: "First iteration of my personal website.",
    techStacks: ["HTML/CSS", "JavaScript", "Tailwind CSS"],
    links: [
      {
        ...github,
        url: "https://github.com/itslouisgs/louisite-v1",
      },
    ],
  },
  {
    dateRange: "Jul 2021 – Ongoing",
    title: "himti.or.id",
    description:
      "The official website of HIMTI BINUS University.",
    techStacks: ["Bootstrap", "PHP", "Project management"],
    links: [
      {
        ...github,
        url: "https://github.com/itslouisgs/himti.or.id",
      },
      {
        ...live,
        url: "https://himti.or.id/",
      },
    ],
  },
  {
    dateRange: "Mar – Jun 2021",
    title: "DanBam",
    description: (
      <span>
        The landing page of DanBam—a fictitious Korean restaurant featured in the K-drama hit{" "}
        <i>Itaewon Class</i>.
      </span>
    ),
    techStacks: ["HTML/CSS", "JavaScript", "jQuery"],
    links: [
      {
        ...github,
        url: "https://github.com/itslouisgs/hci-danbam",
      },
      {
        ...live,
        url: "https://hci-danbam.itslouisgs.repl.co/",
      },
    ],
  },
  {
    dateRange: "Nov – Dec 2020",
    title: "FAME",
    description:
      "The landing page of FAME Workshop—a game development workshop held by HIMTI BINUS University’s programming class division.",
    techStacks: ["HTML/CSS", "JavaScript"],
    links: [
      {
        ...github,
        url: "https://github.com/itslouisgs/fame",
      },
      {
        ...live,
        url: "https://itslouisgs.github.io/fame",
      },
    ],
  },
];
