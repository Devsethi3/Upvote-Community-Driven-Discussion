import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { getAuthSession } from "@/lib/auth";
import Image from "next/image";
import { UserAccountNav } from "./UserAccountNav";

const Navbar = async () => {
  const session = await getAuthSession();

  return (
    <div className="sticky top-0 inset-x-0 h-[10vh] flex items-center border-b-2">
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <h2 className="text-2xl uppercase font-bold">UPVOT</h2>
        </Link>

        {session?.user ? (
          <UserAccountNav user={session.user} />
        ) : (
          <Link href="/sign-in">
            <Button>Sign In</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
