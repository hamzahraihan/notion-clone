"use client";

import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";
import "@blocknote/mantine/style.css";

export default function Editor() {
  const editor = useCreateBlockNote({
    initialContent: [
      {
        type: "heading",
        content: "New page",
      },
    ],
  });

  return <BlockNoteView editor={editor} />;
}
