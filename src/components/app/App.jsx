import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Navigation from "../../components/Navigation/Navigation";
import TabContent from "../../components/tabContent/TabContent";
import { getDataLocStor, setDataLocStor } from "../../services/localStorage";

export const App = () => {
  const [tabs, setTabs] = useState([]);
  const [firstTabIndex, setFirstTabIndex] = useState(null);

  useEffect(() => {
    const localData = getDataLocStor();

    async function fetchData() {
      const dataTabs = await fetch("data/tabs.json");
      const json = await dataTabs.json();
      const sortedData = json.sort((a, b) => a.order - b.order);
      setTabs(sortedData);

      const url = window.location.pathname;
      const urlWords = url.split("/");
      const ourPage = urlWords[urlWords.length - 1];
      const tabExists = sortedData.find((tab) => tab.id === ourPage);

      if (localData !== null) {
        setFirstTabIndex(localData);
      } else {
        if (tabExists) {
          setDataLocStor(tabExists.order);
          setFirstTabIndex(tabExists.order);
        } else {
          const indexPage = sortedData.findIndex((elem) => elem.order === 0);
          setDataLocStor(indexPage);
          setFirstTabIndex(indexPage);
        }
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Navigation tabs={tabs} />
      <Routes>
        {tabs.map((item) => (
          <Route
            key={item.id}
            path={`/test-task-backendless/${item.id}`}
            element={<TabContent path={item.path} />}
          />
        ))}
        {firstTabIndex !== null && (
          <Route
            path="*"
            element={
              <Navigate
                to={`/test-task-backendless/${tabs[firstTabIndex].id}`}
              />
            }
          />
        )}
      </Routes>
    </>
  );
};

export default App;
