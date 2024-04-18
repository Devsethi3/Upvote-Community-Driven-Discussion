"use client";

import React, { useState } from "react";
import { Command, CommandInput } from "./ui/command";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Prisma, Subreddit } from "@prisma/client";
import { CommandEmpty, CommandGroup, CommandItem, CommandList } from "cmdk";
import { Users } from "lucide-react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [input, setInput] = useState<string>("");
  const router = useRouter();

  const {
    isFetching,
    data: queryResults,
    refetch,
    isFetched,
  } = useQuery({
    queryFn: async () => {
      if (!input) return [];
      const { data } = await axios.get(`/api/search?q=${input}`);
      return data as (Subreddit & {
        _count: Prisma.SubredditCountOutputType;
      })[];
    },
    queryKey: ["search-query"],
    enabled: false,
  });

  return (
    <div>
      <Command className="relative rounded-md border z-50 overflow-visible">
        <CommandInput
          value={input}
          onValueChange={(text) => {
            setInput(text);
          }}
          className="outline-none border-none focus:border-none focus-within:outline-none ring-0"
          placeholder="Search Communities..."
        />

        {input.length > 0 && (
          <CommandList className="absolute bg-slate-50 top-full inset-x-0 shadow rounded-b-md">
            {isFetched && <CommandEmpty>No Results Found.</CommandEmpty>}
            {(queryResults?.length ?? 0) > 0 ? (
              <CommandGroup heading="Communities">
                {queryResults?.map((subreddit) => (
                  <CommandItem
                    onSelect={(e) => {
                      router.push(`/r/${e}`);
                      router.refresh();
                    }}
                    key={subreddit.id}
                    value={subreddit.name}
                  >
                    <Users className="mr-2 h-4 w-4" />
                    <a href={`/r/${subreddit.name}`}>r/{subreddit.name}</a>
                  </CommandItem>
                ))}
              </CommandGroup>
            ) : null}
          </CommandList>
        )}
      </Command>
    </div>
  );
};

export default SearchBar;
