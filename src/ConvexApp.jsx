import { useConvexAuth } from "@convex-dev/auth/react";
import { useMutation, useQuery } from "convex/react";
import { useCallback, useRef, useState } from "react";
import AccountPanel from "./AccountPanel.jsx";
import App from "./App.jsx";
import { convexApi } from "./convexReferences.js";

export default function ConvexApp() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const accountProgress = useQuery(convexApi.progress.get, isAuthenticated ? {} : "skip");
  const setQuestion = useMutation(convexApi.progress.setQuestion);
  const setTheme = useMutation(convexApi.progress.setTheme);
  const importProgress = useMutation(convexApi.progress.importProgress);
  const resetProgress = useMutation(convexApi.progress.reset);
  const [syncStatus, setSyncStatus] = useState("saved");
  const failedInBatch = useRef(false);
  const inFlightSaves = useRef(0);
  const accountReady = isAuthenticated && accountProgress !== undefined;
  const runSync = useCallback((operation) => {
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
  const saveQuestionProgress = useCallback(
    (questionId, progress) => runSync(() => setQuestion({ questionId, ...progress })),
    [runSync, setQuestion]
  );
  const saveThemePreference = useCallback(
    (theme) => runSync(() => setTheme({ theme })),
    [runSync, setTheme]
  );
  const importAccountProgress = useCallback(
    (progress) => runSync(() => importProgress(progress)),
    [importProgress, runSync]
  );
  const resetAccountProgress = useCallback(
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
