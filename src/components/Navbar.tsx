"use client";
import Link from "next/link";
// import ThemeSwitcher from "./ThemeSwitcher";
import { useRouter } from "next/navigation";
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { user } = useUser();

  return (
    <>
      <header className="border-b sticky top-0 z-10">
        <div className="h-[10vh] flex items-center">
          <div className="flex items-center justify-between container">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.svg"
                width={150}
                height={150}
                alt="logo"
              />
            </Link>

            <div
              className={`nav-menu ${
                isOpen ? "show-menu" : "nav-menu"
              } flex items-center gap-52`}
            >
              <nav aria-label="Global">
                <ul className="flex nav-list items-center gap-12">
                  <IoMdClose
                    onClick={() => setIsOpen(!isOpen)}
                    className="nav-close block md:hidden text-white w-10 h-10 cursor-pointer p-2 hover:bg-[#9f68ff] rounded-full"
                  />
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link href="/">Pricing</Link>
                  </li>
                </ul>
              </nav>
              {/* <ThemeSwitcher /> */}
            </div>
            <div className="flex items-center gap-4">
              {user ? (
                <UserButton afterSignOutUrl="/" />
              ) : (
                <>
                  <Button onClick={() => router.push("/sign-in")}>Login</Button>
                  <Button
                    variant="secondary"
                    onClick={() => router.push("/sign-up")}
                  >
                    Register
                  </Button>
                </>
              )}

              <div className="block md:hidden">
                <Button
                  onClick={() => setIsOpen(!isOpen)}
                  variant="secondary"
                  className="px-2"
                >
                  <HiMenu className="text-xl" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
