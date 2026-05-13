import { useAuthActions, useConvexAuth } from "@convex-dev/auth/react";
import { GoogleLogoIcon, SignOutIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type AccountPanelProps = {
  progressReady: boolean;
  syncStatus?: "saved" | "saving" | "recovery";
};

export default function AccountPanel({ progressReady, syncStatus = "saved" }: AccountPanelProps) {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const { signIn, signOut } = useAuthActions();
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleGoogleSignIn() {
    setError("");
    setSubmitting(true);

    try {
      await signIn("google");
    } catch (authError) {
      setError(authError instanceof Error ? authError.message : "Could not complete sign in.");
    } finally {
      setSubmitting(false);
    }
  }

  if (isLoading) {
    return (
      <Card size="sm" aria-label="Account">
        <CardHeader>
          <CardTitle>Checking account</CardTitle>
          <CardDescription>Preparing account sync.</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  if (isAuthenticated) {
    const syncCopy = !progressReady
      ? "Syncing your saved progress."
      : syncStatus === "saving"
        ? "Saving latest progress."
        : syncStatus === "recovery"
          ? "Sync failed. Keep this tab open."
          : "Saved to your account.";

    return (
      <Card size="sm" aria-label="Account">
        <CardHeader>
          <CardTitle>Account progress</CardTitle>
          <CardDescription>{syncCopy}</CardDescription>
          <CardAction>
            <Button type="button" variant="outline" size="sm" onClick={() => void signOut()}>
              <SignOutIcon data-icon="inline-start" />
              Sign out
            </Button>
          </CardAction>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card size="sm" aria-label="Account sign in">
      <CardHeader>
        <CardTitle>Account sync</CardTitle>
        <CardDescription>Use Google to save progress across devices.</CardDescription>
      </CardHeader>
      <div className="flex flex-col gap-3 px-3">
        {error && (
          <Alert variant="destructive">
            <AlertTitle>Sign in failed</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <Button type="button" onClick={handleGoogleSignIn} disabled={submitting}>
          <GoogleLogoIcon data-icon="inline-start" />
          {submitting ? "Opening Google..." : "Continue with Google"}
        </Button>
      </div>
    </Card>
  );
}
