import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import UserAuthForm from "./UserAuthForm";

const SignUp = () => {
  return (
    <div className="container">
      <div className="flex flex-col items-center gap-y-6">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold">UPVOT</h2>
        </div>
        <p className="text-sm max-w-[400px] text-center mx-auto">
          By continuing, you are setting up a UPVOT account and agree to our
          user agreement and privacy policy.
        </p>

        <UserAuthForm />

        <p className="px-8 text-center text-sm text-muted-foreground">
          Already Have an account?
          <Link href="/sign-in">
            <Button variant="link">Sign In</Button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
