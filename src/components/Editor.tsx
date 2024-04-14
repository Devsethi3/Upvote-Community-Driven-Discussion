"use client";

import TextareaAutosize from "react-textarea-autosize";
import { useForm } from "react-hook-form";
import { PostCreationRequest, PostValidator } from "@/lib/validators/post";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";

interface EditorProps {
  subredditId: string;
}

const Editor: React.FC<EditorProps> = ({ subredditId }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostCreationRequest>({
    resolver: zodResolver(PostValidator),
    defaultValues: {
      subredditId,
      title: "",
      content: null,
    },
  });

  const initializeEditor = useCallback(async () => {
    const EditorJS = (await import("@editorjs/editorjs")).default;
    const Header = (await import("@editorjs/header")).default;
    // @ts-expect-error
    const Embed = (await import("@editorjs/embed")).default;
    // @ts-expect-error
    const Table = (await import("@editorjs/table")).default;
    // @ts-expect-error
    const List = (await import("@editorjs/list")).default;
    // @ts-expect-error
    const Code = (await import("@editorjs/code")).default;
    // @ts-expect-error
    const LinkTool = (await import("@editorjs/link")).default;
    // @ts-expect-error
    const InlineCode = (await import("@editorjs/inline-code")).default;
    // @ts-expect-error
    const ImageTool = (await import("@editorjs/image")).default;
  }, []);

  return (
    <div className="w-full bg-secondary/30 rounded-md border p-4">
      <form id="subreddit-post-form" className="w-fit" onSubmit={() => {}}>
        <div className="prose prose-stone dark:prose-invert">
          <TextareaAutosize
            placeholder="Title"
            className="w-full resize-none appearance-none overflow-hidden bg-transparent text-5xl font-bold focus:outline-none"
          />
        </div>
      </form>
    </div>
  );
};

export default Editor;
