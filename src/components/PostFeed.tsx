"use client";

import { INFINITE_SCROLLING_PAGINATION_RESULTS } from "@/config/config";
import { ExtendedPost } from "@/types/db";
import { useIntersection } from "@mantine/hooks";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useEffect, useRef } from "react";
import { useSession } from "next-auth/react";

interface PostFeedProps {
  initialPosts: ExtendedPost[];
  subredditName?: string;
}

const PostFeed: React.FC<PostFeedProps> = ({ initialPosts, subredditName }) => {
  const lastPostRef = useRef<HTMLElement>(null);

  const { ref, entry } = useIntersection({
    root: lastPostRef.current,
    threshold: 1,
  });

  // const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
  //   ["infinite-query"],
  //   async ({ pageParam = 1 }) => {
  //     const query =
  //       `/api/posts?limit=${INFINITE_SCROLLING_PAGINATION_RESULTS}&page=${pageParam}` +
  //       (!!subredditName ? `&subredditName=${subredditName}` : "");

  //     const { data } = await axios.get(query);
  //     return data as ExtendedPost[];
  //   },

  //   {
  //     getNextPageParam: (_, pages) => {
  //       return pages.length + 1;
  //     },
  //     initialData: { pages: [initialPosts], pageParams: [1] },
  //   }
  // );

  return (
    <>
      <ul className="flex flex-col col-span-2 space-y-2"></ul>
    </>
  );
};

export default PostFeed;
