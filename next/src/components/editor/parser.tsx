import rehypeParse from "rehype-parse";
import rehypeRaw from "rehype-raw";
import rehypeRemark from "rehype-remark";
import rehypeStringify from "rehype-stringify";
import { remark } from "remark";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkStringify from "remark-stringify";
import { unified } from "unified";

// ----------------------------------------------------------------------

function isHTML(value: string) {
  return /^<([a-z] +)([^<] + )*(?:>(.*)<\/1>|\s+\/>)$/.test(value);
}

// ----------------------------------------------------------------------

export function markdownToHtml(text: string | undefined) {
  if (!text || text === "" || typeof text !== "string") {
    return text ?? "";
  }
  if (isHTML(text)) {
    return text;
  } else {
    const processor = unified()
      .use(remarkParse)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeRaw)
      .use(rehypeStringify);

    const result = processor.processSync(text);
    return String(result);
  }
}

export function htmlToMarkdown(htmlText: string | undefined) {
  const file = remark()
    .use(rehypeParse, { emitParseErrors: true, duplicateAttribute: false })
    .use(rehypeRemark)
    .use(remarkStringify)
    .processSync(htmlText);

  return String(file);
}
