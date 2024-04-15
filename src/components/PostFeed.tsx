"use client";

import { useIntersection } from "@mantine/hooks";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useRef, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Loader2 } from "lucide-react";
import { INFINITE_SCROLLING_PAGINATION_RESULTS } from "@/config/config";
import { ExtendedPost } from "@/types/db";

interface PostFeedProps {
  initialPosts: ExtendedPost[];
  subredditName?: string;
}

const PostFeed: React.FC<PostFeedProps> = ({ initialPosts, subredditName }) => {
  const lastPostRef = useRef<HTMLLIElement>(null);

  // const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
  //   ["posts", subredditName],
  //   async ({ pageParam = 1 }) => {
  //     const query =
  //       `/api/posts?limit=${INFINITE_SCROLLING_PAGINATION_RESULTS}&page=${pageParam}` +
  //       (subredditName ? `&subredditName=${subredditName}` : "");
  //     const { data } = await axios.get(query);
  //     return data;
  //   }
  //   {
  //     getNextPageParam: (_, pages) => {
  //       return pages.length + 1;
  //     },
  //     initialData: { pages: [initialPosts], pageParams: [1] },
  //   }
  // );

  // const { ref, entry } = useIntersection({
  //   root: lastPostRef.current,
  //   threshold: 1,
  //   onIntersect: fetchNextPage,
  // });

  // useEffect(() => {
  //   if (subredditName) {
  //     // Reset the query when subredditName changes
  //     fetchNextPage({ pageParam: 1 });
  //   }
  // }, [subredditName]);

  return <ul className="flex flex-col col-span-2 space-y-2"></ul>;
};

export default PostFeed;
