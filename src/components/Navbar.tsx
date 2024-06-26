import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { getAuthSession } from "@/lib/auth";
import { UserAccountNav } from "./UserAccountNav";
import ThemeSwitcher from "./ThemeSwitcher";
import SearchBar from "./SearchBar";
import Image from "next/image";

const Navbar = async () => {
  const session = await getAuthSession();

  return (
    <div className="sticky z-50 shadow-sm top-0 inset-x-0 h-[10vh] bg-[#FBFBFC] dark:bg-[#0B111E] flex items-center border-b-2">
      <div className="container flex gap-2 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/nav-logo.png" width={40} height={40} alt="logo" />
          {session ? null : (
            <h2 className="text-2xl hidden md:block uppercase font-bold">UPVOTE</h2>
          )}
        </Link>

        <div className="w-[50%]">
          <SearchBar />
        </div>
        <ThemeSwitcher />

        <div className="flex items-center gap-10">
          {session?.user ? (
            <UserAccountNav user={session.user} />
          ) : (
            <Link href="/sign-in">
              <Button>Sign In</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
