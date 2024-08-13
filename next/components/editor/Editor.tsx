import "@/utils/highlights";

import { useTheme } from "@mui/material";
import dynamic from "next/dynamic";
import { DeltaStatic, Sources } from "quill";
import { useState } from "react";
import { UnprivilegedEditor } from "react-quill";
import EditorToolbar, { formats } from "./EditorToolbar";
import { htmlToMarkdown, markdownToHtml } from "./parser";
import { StyledEditor } from "./styles";
import { Conversion, EditorProps } from "./types";

// ----------------------------------------------------------------------

const convert = (
  value: string | undefined,
  conversion: Conversion | undefined,
  reverse: boolean
) => {
  if (!value || !conversion) {
    return value ?? "";
  }

  const conversions: Record<Conversion, () => string> = {
    "md-html": () => (!reverse ? markdownToHtml(value) : htmlToMarkdown(value)),
  };

  const newValue = conversions[conversion]();
  return newValue;
};

// ----------------------------------------------------------------------

export default function Editor({
  id = "minimal-quill",
  error,
  value,
  conversion,
  placeholder,
  helperText,
  simple = false,
  sx,
  onChange,
  ...other
}: EditorProps) {
  const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

  const theme = useTheme();

  const [editorValue, setEditorValue] = useState<string | undefined>(
    convert(value, conversion, false)
  );

  const modules = {
    toolbar: { container: `#${id}` },
    history: { delay: 500, maxStack: 100, userOnly: true },
    syntax: true,
    clipboard: { matchVisual: false },
  };

  const handleChange = (
    value: string,
    delta: DeltaStatic,
    source: Sources,
    editor: UnprivilegedEditor
  ) => {
    if (source !== "user") {
      return;
    }

    setEditorValue(value);

    if (onChange) {
      onChange(convert(value, conversion, true));
    }
  };

  return (
    <>
      <StyledEditor
        sx={{
          ...(error && { border: `solid 1px ${theme.palette.error.main}` }),
          ...sx,
        }}
      >
        <EditorToolbar id={id} isSimple={simple} />

        <ReactQuill
          value={editorValue}
          onChange={handleChange}
          modules={modules}
          formats={formats}
          placeholder={placeholder}
          {...other}
        />
      </StyledEditor>
      {helperText && helperText}
    </>
  );
}
