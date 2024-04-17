"use client";

import { useState } from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useMutation } from "@tanstack/react-query";

interface CreateCommentProps {}
const CreateComment: React.FC<CreateCommentProps> = ({}) => {
  const [input, setInput] = useState<string>("");

  const {} = useMutation({})
  return (
    <>
      <div className="grid w-full gap-2">
        <label htmlFor="comment">Your Comment</label>{" "}
        {/* Use standard HTML label */}
        <div className="mt-2">
          <Textarea
            id="comment"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={1}
            placeholder="What are your thoughts?"
          />

          <div className="mt-2 flex justify-end">
            <Button>Post</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateComment;
