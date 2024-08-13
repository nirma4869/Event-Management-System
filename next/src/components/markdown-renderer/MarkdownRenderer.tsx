import ReactMarkdown from "react-markdown";
import rehype from "rehype-raw";

// ----------------------------------------------------------------------

export default function MarkdownRenderer({ value }: { value: string }) {
  // eslint-disable-next-line react/no-children-prop
  return <ReactMarkdown rehypePlugins={[rehype]} children={value} />;
}
