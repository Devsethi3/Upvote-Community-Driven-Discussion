import { buttonVariants } from "@/components/ui/button";
import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { format } from "date-fns";
import SubscribeLeaveToggle from "@/components/SubscribeLeaveToggle";

const layout = async ({
  children,
  params: { slug },
}: {
  children: React.ReactNode;
  params: { slug: string };
}) => {
  const session = await getAuthSession();

  const subreddit = await db.subreddit.findFirst({
    where: {
      name: slug,
    },
    include: {
      posts: {
        include: {
          author: true,
          votes: true,
        },
      },
    },
  });

  const subscription = !session?.user
    ? undefined
    : await db.subscription.findFirst({
        where: {
          subreddit: {
            name: slug,
          },
          user: {
            id: session.user.id,
          },
        },
      });

  const isSubscribed = !!subscription;

  if (!subreddit) return notFound();

  const memberCount = await db.subscription.count({
    where: {
      subreddit: {
        name: slug,
      },
    },
  });

  return (
    <div className="container h-full pt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 py-6 gap-y-4">
        <div className="flex flex-col col-span-2 space-y-6">{children}</div>

        {/* Sidebar */}
        <div className="hidden md:block overflow-hidden h-fit rounded-md border order-first md:order-last">
          <div className="px-6 py-4">
            <p className="font-semibold py-3">About r/</p>
          </div>

          <dl className="divide-y px-6 py-4 text-sm leading-6 bg-secondary/30">
            <div className="flex justify-between gap-x-4 py-3">
              <dt className="text-gray-500">Created</dt>
              <dd className="text-gray-700">
                <time dateTime={subreddit.createdAt.toDateString()}>
                  {format(subreddit.createdAt, "MMMM d, yyyy")}
                </time>
              </dd>
            </div>
            <div className="flex justify-between gap-x-4 py-3">
              <dt className="text-gray-500">Members</dt>
              <dd className="flex items-start gap-x-2">
                <div className="text-gray-900">{memberCount}</div>
              </dd>
            </div>
            {subreddit.creatorId === session?.user?.id ? (
              <div className="flex justify-between gap-x-4 py-3">
                <dt className="text-gray-500">You created this community</dt>
              </div>
            ) : null}

            {subreddit.creatorId !== session?.user?.id ? (
              <SubscribeLeaveToggle
                isSubscribed={isSubscribed}
                subredditId={subreddit.id}
                subredditName={subreddit.name}
              />
            ) : null}
            <Link
              className={buttonVariants({
                variant: "secondary",
                className: "w-full border-none my-4",
              })}
              href={`r/${slug}/submit`}
            >
              Create Post
            </Link>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default layout;
