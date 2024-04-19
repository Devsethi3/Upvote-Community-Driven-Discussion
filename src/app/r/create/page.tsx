"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { CreateSubredditPayload } from "@/lib/validators/subreddit";
import { toast } from "@/components/ui/use-toast";
import { useCustomToasts } from "@/hooks/use-custom-toast";

const CreatePage = () => {
  const [input, setInput] = useState<string>("");
  const { loginToast } = useCustomToasts();

  const router = useRouter();

  const { mutate: createCommunity } = useMutation({
    mutationFn: async () => {
      const payload: CreateSubredditPayload = {
        name: input,
      };
      const { data } = await axios.post("/api/subreddit", payload);
      return data as string;
    },

    onError: (err) => {
      if (err instanceof AxiosError) {
        if (err.response?.status === 409) {
          return toast({
            title: "Community already exists",
            description: "Please choose a different Community name",
            variant: "destructive",
          });
        }
        if (err.response?.status === 422) {
          return toast({
            title: "Invalid Community Name",
            description: "Please choose a name between 3 to 21 characters",
            variant: "destructive",
          });
        }
        if (err.response?.status === 401) {
          return loginToast();
        }
      }

      toast({
        title: "Something went wrong",
        description: "Could not create community",
      });
    },
    onSuccess: (data) => {
      toast({
        title: "Success!",
        description: "Community Created Successfully",
      });
      router.push(`/r/${data}`);
    },
  });

  return (
    <>
      <div className="container flex items-center h-[70vh] justify-center">
        <div className="relative border bg-secondary/10 w-full h-fit p-4 rounded-lg space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Create a community</h1>
          </div>

          <hr className="" />

          <div className="text-lg font-medium">Name</div>
          <p className="text-sm pb-2">
            Community names including capitalization cannot be changed
          </p>

          <div className="relative">
            <p className="absolute text-sm left-0 w-8 inset-y-0 grid place-items-center text-muted-foreground">
              r/
            </p>

            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="pl-8"
            />
          </div>

          <div className="flex justify-end gap-4">
            <Button variant="secondary" onClick={() => router.back()}>
              Cancel
            </Button>
            <Button
              disabled={input.length === 0}
              onClick={() => createCommunity()}
            >
              Create Community
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePage;
