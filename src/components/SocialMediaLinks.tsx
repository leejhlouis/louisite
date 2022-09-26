import socialList from "../__data/social";

export default function SocialMediaLinks(props: { className?: string }) {
  const social = socialList.map((item, index) => (
    <li key={index}>
      <a href={item.url} target="_blank" rel="noreferrer" aria-label={item.name}>
        {item.icon}
      </a>
    </li>
  ));

  return <ul className={`flex list-none items-center gap-4 ${props.className}`}>{social}</ul>;
}
