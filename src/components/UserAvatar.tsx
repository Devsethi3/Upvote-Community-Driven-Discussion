import { User } from "@prisma/client";
import Image from "next/image";

interface UserAvatarProps {
  user: Pick<User, "image" | "name">;
}

export function UserAvatar({ user, ...props }: UserAvatarProps) {
  return (
    <div>
      <Image
        src={user.image || ""}
        width={60}
        height={60}
        alt="user"
        className="rounded-full p-3 hover:bg-slate-50 dark:hover:bg-slate-900"
      />
    </div>
  );
}
