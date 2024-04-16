"use client";

import { formatTimeToNow } from "@/lib/utils";
import { Post, User, Vote } from "@prisma/client";
import { MessageSquare } from "lucide-react";
import React, { useRef } from "react";
import EditorOutput from "./EditorOutput";
import PostVoteClient from "./post-vote/PostVoteClient";

type PartialVote = Pick<Vote, "type">;

interface PostProps {
  post: Post & {
    author: User;
    votes: Vote[];
  };
  votesAmt: number;
  subredditName: string;
  currentVote?: PartialVote;
  commentAmt: number;
}

const Post: React.FC<PostProps> = ({
  subredditName,
  post,
  commentAmt,
  votesAmt: _votesAmt,
  currentVote,
}) => {
  const pRef = useRef<HTMLDivElement>(null);
  return (
    <div className="rounded-md bg-secondary/30 shadow-sm">
      <div className="px-6 py-4 flex justify-between">
        <PostVoteClient
          postId={post.id}
          initialVote={currentVote?.type}
          initialVotesAmt={_votesAmt}
        />

        <div className="w-0 flex-1">
          <div className="max-h-40 mt-1 text-sm text-muted-foreground">
            {subredditName ? (
              <>
                <a
                  className="underline text-primary text-sm underline-offset-2"
                  href={`/r/${subredditName}`}
                >
                  r/{subredditName}
                </a>
                <span className="px-1">•</span>
              </>
            ) : null}
            <span>Posted by u/{post.author.name}</span>
            <span className="px-1">•</span>

            {formatTimeToNow(new Date(post.createdAt))}
          </div>
          <a href={`/r/${subredditName}/post/${post.id}`}>
            <h1 className="text-xl font-bold opacity-90 py-4 leading-6">
              {post.title}
            </h1>
          </a>

          <div className="relative text-sm max-h-40 overflow-clip" ref={pRef}>
            <EditorOutput content={post.content} />
            {pRef.current?.clientHeight === 160 ? (
              <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-white to-transparent"></div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="bg-secondary/50 z-20 text-sm p-4 sm:px-6">
        <a
          className="w-fit flex items-center gap-2"
          href={`/r/${subredditName}/post/${post.id}`}
        >
          <MessageSquare className="h-4 w-4" /> {commentAmt} comments
        </a>
      </div>
    </div>
  );
};

export default Post;
