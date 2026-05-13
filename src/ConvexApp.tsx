import { useConvexAuth } from "@convex-dev/auth/react";
import { useMutation, useQuery } from "convex/react";
import { useCallback, useRef, useState } from "react";
import { api as convexApi } from "../convex/_generated/api";
import AccountPanel from "./AccountPanel";
import App from "./App";
import type { AppProps } from "./App";
import type { ProgressUpdate, Theme } from "./questionTypes";

type SyncStatus = "saved" | "saving" | "recovery";

export default function ConvexApp() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const accountProgress = useQuery(convexApi.progress.get, isAuthenticated ? {} : "skip");
  const setQuestion = useMutation(convexApi.progress.setQuestion);
  const setTheme = useMutation(convexApi.progress.setTheme);
  const importProgress = useMutation(convexApi.progress.importProgress);
  const resetProgress = useMutation(convexApi.progress.reset);
  const [syncStatus, setSyncStatus] = useState<SyncStatus>("saved");
  const failedInBatch = useRef(false);
  const inFlightSaves = useRef(0);
  const accountReady = isAuthenticated && accountProgress !== undefined;
  const runSync = useCallback(<Result,>(operation: () => Promise<Result>) => {
    if (inFlightSaves.current === 0) {
      failedInBatch.current = false;
    }
    inFlightSaves.current += 1;
    setSyncStatus("saving");
    return operation()
      .then((result) => {
        inFlightSaves.current -= 1;
        if (inFlightSaves.current === 0) {
          setSyncStatus(failedInBatch.current ? "recovery" : "saved");
        }
        return result;
      })
      .catch((error) => {
        failedInBatch.current = true;
        inFlightSaves.current -= 1;
        if (inFlightSaves.current === 0) {
          setSyncStatus("recovery");
        }
        throw error;
      });
  }, []);
  const saveQuestionProgress = useCallback<NonNullable<AppProps["saveQuestionProgress"]>>(
    (questionId: string, progress: ProgressUpdate) => runSync(() => setQuestion({ questionId, ...progress })),
    [runSync, setQuestion]
  );
  const saveThemePreference = useCallback<NonNullable<AppProps["saveThemePreference"]>>(
    (theme: Theme) => runSync(() => setTheme({ theme })),
    [runSync, setTheme]
  );
  const importAccountProgress = useCallback<NonNullable<AppProps["importAccountProgress"]>>(
    (progress) => runSync(() => importProgress(progress)),
    [importProgress, runSync]
  );
  const resetAccountProgress = useCallback<NonNullable<AppProps["resetAccountProgress"]>>(
    () => runSync(() => resetProgress({})),
    [resetProgress, runSync]
  );

  return (
    <App
      accountCanSave={accountReady}
      accountPending={isLoading || (isAuthenticated && !accountReady)}
      accountPanel={<AccountPanel progressReady={accountReady} syncStatus={syncStatus} />}
      accountProgress={accountProgress}
      importAccountProgress={accountReady ? importAccountProgress : null}
      resetAccountProgress={accountReady ? resetAccountProgress : null}
      saveQuestionProgress={accountReady ? saveQuestionProgress : null}
      saveThemePreference={accountReady ? saveThemePreference : null}
    />
  );
}
