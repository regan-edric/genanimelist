import Link from "next/link";
import { authUserSession } from "@/libs/auth-libs";

export default async function UserAction() {
  const user = await authUserSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <>
      {user ? (
        <Link
          className="bg-dark text-primary hover:text-accent px-2 py-1"
          href="/users/dashboard"
          props={user}
        >
          Profile
        </Link>
      ) : null}
      <Link
        className="text-dark hover:text-primary underline "
        href={actionURL}
      >
        {actionLabel}
      </Link>
    </>
  );
}
