import { lazy, Suspense } from "react";

function TabContent({ path }) {
  const newPath = path.split(".")[0].split("/")[1];
  const Tab = lazy(() => import(`../../pages/tabs/${newPath}.jsx`));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Tab />
    </Suspense>
  );
}

export default TabContent;
