import Heading2 from "../components/Heading2";

export default function About() {
  return (
    <section className="container min-h-[80vh] md:max-w-screen-md">
      <Heading2 className="mb-6">About</Heading2>
      <p className="text-muted-dark dark:text-muted">
        Hey, it's <b>Louis "itslouisgs"</b>—a software engineer based in Indonesia. I enjoy building
        stuffs that exist on the Internet and learning programming languages, libraries, and
        frameworks, as well as bringing appealing UI to life.
      </p>
      <p className="text-muted-dark dark:text-muted">
        I'm currently a third-year computer science undergraduate at{" "}
        <a
          href="https://binus.ac.id/"
          target="_blank"
          className="font-bold text-blue-700 decoration-blue-700 dark:text-blue-200 dark:decoration-blue-200 hover:underline"
        >
          BINUS University
        </a>
        {". "}
        I'm also the Manager of Web Development Division at HIMTI BINUS University (BINUS
        University's computer science student association), responsible for managing and maintaining
        the association's official website.
      </p>
      <p className="text-muted-dark dark:text-muted">
        You can reach me on{" "}
        <a
          href="mailto:louis.gustavo@binus.ac.id"
          target="_blank"
          className="font-bold text-blue-700 decoration-blue-700 dark:text-blue-200 dark:decoration-blue-200 hover:underline"
        >
          Mail
        </a>
        {", "}
        <a
          href="https://github.com/itslouisgs"
          target="_blank"
          className="font-bold text-blue-700 decoration-blue-700 dark:text-blue-200 dark:decoration-blue-200 hover:underline"
        >
          GitHub
        </a>
        {", and "}
        <a
          href="https://linkedin.com/in/louis-gustavo"
          target="_blank"
          className="font-bold text-blue-700 decoration-blue-700 dark:text-blue-200 dark:decoration-blue-200 hover:underline"
        >
          LinkedIn
        </a>
        {". "}
      </p>
    </section>
  );
}
