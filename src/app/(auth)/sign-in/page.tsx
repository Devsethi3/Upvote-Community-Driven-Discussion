import SignIn from "@/components/SignIn";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const SignInPage = () => {
  return (
    <div className="flex items-center h-[90vh] justify-center">
      <div className="border shadow-sm py-8 px-4">
        {/* <Link href="/">
          <Button variant="ghost">Home</Button>
        </Link> */}
        <SignIn />
      </div>
    </div>
  );
};

export default SignInPage;
