import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="flex items-center h-[90vh] justify-center">
      <div className="border shadow-sm py-8 px-4">
        {/* <Link href="/">
          <Button variant="ghost">Home</Button>
        </Link> */}
        <SignUp />
      </div>
    </div>
  );
};

export default SignUpPage;
