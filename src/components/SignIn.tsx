import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import UserAuthForm from "./UserAuthForm";
import Image from "next/image";

const SignIn = () => {
  return (
    <div className="bg-primary/10 w-full">
      <div className="container h-[90vh] flex items-center justify-center">
        <div className="flex dark:bg-[#0B111E] bg-white max-w-xl p-12 rounded-md shadow-md flex-col items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/nav-logo.png"
              width={40}
              height={40}
              alt="logo"
            />
            <h2 className="text-2xl lg:text-3xl uppercase font-bold">UPVOTE</h2>
          </Link>
          <p className="text-sm lg:text-base text-center mx-auto">
            By continuing, you are setting up a UPVOT account and agree to our
            user agreement and privacy policy.
          </p>
          <UserAuthForm />
          <div className="flex items-center gap-3">
            <p>New to Upvote?</p>
            <Link href="/sign-up">
              <Button variant="secondary">Sign Up</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
