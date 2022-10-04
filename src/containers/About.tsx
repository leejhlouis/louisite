import ReactMarkdown from "react-markdown";
import Heading2 from "../components/Heading2";
import Heading3 from "../components/Heading3";
import InlineLink from "../components/InlineLink";

export default function About(props: { children: string }) {
  return (
    <section className="container md:max-w-screen-sm md:px-0">
      <ReactMarkdown
        children={localStorage.about ? localStorage.about : props.children}
        components={{
          h1: Heading2,
          h2: Heading3,
          a: InlineLink,
          p: ({ node, ...props }: any) => (
            <p className="text-muted-dark dark:text-muted" {...props} />
          ),
          ul: ({ node, ...props }: any) => (
            <ul className="pb-4 text-muted-dark dark:text-muted md:pb-6" {...props} />
          ),
          li: ({ node, ...props }: any) => (
            <li
              className="mr-2 mb-2 inline-block cursor-pointer rounded-xl bg-slate-100/75 px-3 text-sm hover:bg-slate-100 hover:shadow dark:bg-slate-800/75 dark:hover:bg-slate-800 md:text-base"
              {...props}
            />
          ),
        }}
      />
    </section>
  );
}
