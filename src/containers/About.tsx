import Heading2 from "../components/Heading2";
import Heading3 from "../components/Heading3";
import InlineLink from "../components/InlineLink";
import skills from "../__data/skills";

export default function About() {
  return (
    <section className="container md:max-w-screen-sm md:px-0">
      <Heading2>Hey, it's Louis "itslouisgs"—a software engineer based in Indonesia.</Heading2>
      <p className="text-muted-dark dark:text-muted">
        I am fond of building stuffs on the computer and exploring new programming languages,
        libraries, and frameworks. My interest in web development started when I was obssesed with
        customizing my profile page's style with HTML and CSS on{" "}
        <InlineLink href="https://www.fandom.com/">Fandom</InlineLink>.
      </p>
      <p className="text-muted-dark dark:text-muted">
        I'm currently a third-year computer science undergraduate at{" "}
        <InlineLink href="https://binus.ac.id">BINUS University</InlineLink>. I'm also the Manager
        of Web Development Division at HIMTI BINUS University (BINUS University's computer science
        student association), responsible for managing and maintaining the association's official
        website.
      </p>
      <Heading3 id="skills">Skills</Heading3>
      <p className="pb-3 text-muted-dark dark:text-muted">
        Here are some technologies that I know:
      </p>
      <ul className="pb-4 text-muted-dark dark:text-muted md:pb-8">
        {skills.map((li) => (
          <li className="mr-2 mb-2 inline-block cursor-pointer rounded-xl bg-slate-100/75 px-3 text-sm hover:bg-slate-100 hover:shadow-lg dark:bg-slate-800/50 dark:hover:bg-slate-800 md:text-base">
            {li}
          </li>
        ))}
      </ul>
      <Heading3 id="contacts">Contact Me</Heading3>
      <p className="text-muted-dark dark:text-muted">
        Whether you have questions or just wanna say "hi", you can email me at{" "}
        <InlineLink href="mailto:louis.gustavo@binus.ac.id">louis.gustavo@binus.ac.id</InlineLink>.
        I'd love to hear from you.
      </p>
      <p className="text-muted-dark dark:text-muted">
        You can also stalk me on{" "}
        <InlineLink href="https://github.com/itslouisgs">GitHub</InlineLink> and{" "}
        <InlineLink href="https://linkedin.com/in/louis-gustavo">LinkedIn</InlineLink>.
      </p>
    </section>
  );
}
