"use client";
import { useRef } from "react";
import { UserAvatar } from "./UserAvatar";
import { CommentVote, User, Comment } from "@prisma/client"; // Import Comment type
import { formatTimeToNow } from "@/lib/utils";

type ExtendedComment = Comment & {
  votes: CommentVote[];
  author: User;
};

interface PostCommentProps {
  comment: ExtendedComment;
}

const PostComment: React.FC<PostCommentProps> = ({ comment }) => {
  const commentRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={commentRef} className="flex flex-col">
      <div className="flex items-center">
        <UserAvatar
          user={{
            name: comment.author.name || null,
            image: comment.author.image || null,
          }}
        />

        <div className="ml-2 flex items-center gap-x-2">
          <p className="text-sm font-medium text-gray-900">
            u/{comment.author.username}
          </p>
          {/* Make sure to access createdAt property */}
          <p className="max-h-40 truncate text-xs text-zinc-500">
            {formatTimeToNow(new Date(comment.createdAt))}
          </p>
        </div>
      </div>

      <p className="text-sm text-zinc-900 mt-2">{comment.text}</p>
    </div>
  );
};

export default PostComment;
