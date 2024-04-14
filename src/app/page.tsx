import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { MdHome } from "react-icons/md";

const HomePage = () => {
  return (
    <>
      <div className="container my-10">
        <h1 className="font-bold text-3xl md:text-4xl">Your Feed</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-x-4 py-6">
          {/* Feed */}

          {/* SubReddit Info */}
          <div className="overflow-hidden h-full rounded-lg border order-first md:order-last">
            <div className="bg-emerald-100 px-6 py-4">
              <p className="font-semibold py-3 flex items-center dark:text-black gap-1.5">
                <MdHome size={20} />
                Home
              </p>
            </div>

            <div className="my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
              <div className="flex justify-between gap-x-4 pb-3">
                <p className="text-muted-foreground">
                  Your Personal Upvot homepage. Come here to check in with your
                  favourite communities.
                </p>
              </div>

              <Link
                href="/r/create"
                className={buttonVariants({
                  className: "w-full mt-4 border-none",
                })}
              >
                Create Community
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
