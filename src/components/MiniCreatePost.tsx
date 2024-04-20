"use client";

import { Image as ImageIcon, Link2 } from "lucide-react";
import { FC } from "react";
import { UserAvatar } from "./UserAvatar";
import type { Session } from "next-auth";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface MiniCreatePostProps {
  session: Session | null;
}

const MiniCreatePost: FC<MiniCreatePostProps> = ({ session }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <li className="overflow-hidden list-none rounded-md bg-white dark:bg-secondary/30 shadow">
      <div className="h-full px-0 py-2 flex items-center justify-between gap-2 lg:gap-6">
        <div className="relative">
          <div className="w-[50px]">
            <UserAvatar
              user={{
                name: session?.user.name || null,
                image: session?.user.image || null,
              }}
            />
          </div>

          <span className="absolute right-2 top-2 rounded-full w-2 h-2 bg-green-500 outline outline-2 outline-white" />
        </div>
        <Input
          onClick={() => router.push(pathname + "/submit")}
          readOnly
          placeholder="Create post"
          className="truncate"
        />
        <Button
          onClick={() => router.push(pathname + "/submit")}
          variant="ghost"
        >
          <ImageIcon className="text-muted-foreground" />
        </Button>
        <Button
          onClick={() => router.push(pathname + "/submit")}
          variant="ghost"
        >
          <Link2 className="text-muted-foreground" />
        </Button>
      </div>
    </li>
  );
};

export default MiniCreatePost;
