import Heading2 from "../components/Heading2";
import Heading3 from "../components/Heading3";
import InlineLink from "../components/InlineLink";
import skills from "../__data/skills";

export default function About() {
  return (
    <section className="container md:max-w-screen-sm md:px-0">
      <Heading2>Hey, it's Louis "itslouisgs"—a software engineer based in Indonesia.</Heading2>
      <p className="text-muted-dark dark:text-muted">
        I enjoy coding for things on the Internet and exploring new programming languages,
        libraries, and frameworks. My obsession with modifying my{" "}
        <InlineLink href="https://www.fandom.com/">Fandom</InlineLink> profile page's theme with
        HTML and CSS sparked my interest in web development.
      </p>
      <p className="text-muted-dark dark:text-muted">
        I'm currently a third-year <b>computer science undergraduate</b> at{" "}
        <InlineLink href="https://binus.ac.id">BINUS University</InlineLink> and{" "}
        <b>Manager of Web Development Division</b> at{" "}
        <InlineLink href="https://himti.or.id">HIMTI BINUS University</InlineLink>. On top of that,
        I was granted the Mentoring Scholarship Program at BINUS University for having a GPA of over
        3.5, provided that I conduct peer-to-peer learning sessions for other students.
      </p>
      <Heading3 id="skills">Skills</Heading3>
      <p className="pb-3 text-muted-dark dark:text-muted">
        Here are some technologies that I am familiar with:
      </p>
      <ul className="pb-4 text-muted-dark dark:text-muted md:pb-8">
        {skills.map((li, index) => (
          <li
            key={index}
            className="mr-2 mb-2 inline-block cursor-pointer rounded-xl bg-slate-100/75 px-3 text-sm hover:bg-slate-100 hover:shadow dark:bg-slate-800/75 dark:hover:bg-slate-800 md:text-base"
          >
            {li}
          </li>
        ))}
      </ul>
      <Heading3 id="contacts">Contact Me</Heading3>
      <p className="text-muted-dark dark:text-muted">
        Wanna ask me a question or simply say hi? You can reach me via email at{" "}
        <InlineLink href="mailto:louis.gustavo@binus.ac.id">louis.gustavo@binus.ac.id</InlineLink>.
        I'd be delighted to hear from you.
      </p>
      <p className="text-muted-dark dark:text-muted">
        Additionally, you may find me on{" "}
        <InlineLink href="https://github.com/itslouisgs">GitHub</InlineLink> and{" "}
        <InlineLink href="https://linkedin.com/in/louis-gustavo">LinkedIn</InlineLink>.
      </p>
    </section>
  );
}
