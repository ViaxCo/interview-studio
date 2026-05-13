import { useAuthActions, useConvexAuth } from "@convex-dev/auth/react";
import { useState } from "react";

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
      <section className="account-panel" aria-label="Account">
        <strong>Checking account</strong>
        <p>Preparing account sync.</p>
      </section>
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
      <section className="account-panel" aria-label="Account">
        <div>
          <strong>Account progress</strong>
          <p>{syncCopy}</p>
        </div>
        <button type="button" onClick={() => void signOut()}>
          Sign out
        </button>
      </section>
    );
  }

  return (
    <section className="account-panel" aria-label="Account sign in">
      <div>
        <strong>Account sync</strong>
        <p>Use Google to save progress across devices.</p>
      </div>
      {error && <p className="account-error">{error}</p>}
      <button type="button" onClick={handleGoogleSignIn} disabled={submitting}>
        <span aria-hidden="true">G</span>
        {submitting ? "Opening Google..." : "Continue with Google"}
      </button>
    </section>
  );
}
