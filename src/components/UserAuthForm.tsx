"use client";

import { FcGoogle } from "react-icons/fc";
import { Button } from "./ui/button";
import React, { useState } from "react";
import { Loader } from "lucide-react";
import { signIn } from "next-auth/react";
import { useToast } from "./ui/use-toast";

interface UserAuthFormProps {}

const UserAuthForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signIn("google");
    } catch (error) {
      toast({
        title: "Something went wrong!",
        description: "There is an error logging in with google",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Button
        variant="default"
        onClick={loginWithGoogle}
        className="flex items-center gap-2"
      >
        {isLoading ? (
          <Loader className="w-4 h-4 text-primary animate-spin" /> // Use appropriate class for loader
        ) : (
          <FcGoogle className="w-4 h-4" />
        )}
        <span className="text-sm">Google</span>
      </Button>
    </div>
  );
};

export default UserAuthForm;
