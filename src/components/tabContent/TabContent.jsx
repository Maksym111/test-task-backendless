import { lazy, Suspense } from "react";

function TabContent({ path }) {
  const Tab = lazy(() => import(`/src/pages/${path}x`));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Tab />
    </Suspense>
  );
}

export default TabContent;
