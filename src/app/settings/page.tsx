import { redirect } from "next/navigation";

import { authOptions, getAuthSession } from "@/lib/auth";
import { UserNameForm } from "@/components/UserNameForm";

export const metadata = {
  title: "Settings",
  description: "Manage account and website settings.",
};

export default async function SettingsPage() {
  const session = await getAuthSession();

  if (!session?.user) {
    redirect(authOptions?.pages?.signIn || "/login");
  }

  return (
    <div className="container flex items-center h-[70vh] justify-center">
      <div className="relative border bg-secondary/10 w-full h-fit p-10 rounded-lg space-y-6">
        <h1 className="font-bold text-3xl md:text-4xl">Settings</h1>

        <div className="grid gap-10">
          <UserNameForm
            user={{
              id: session.user.id,
              username: session.user.username || "",
            }}
          />
        </div>
      </div>
    </div>
  );
}
