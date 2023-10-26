import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import fetchTabs from "../../services/axios";

import Navigation from "../../components/Navigation/Navigation";
import TabContent from "../../components/tabContent/TabContent";
import { getDataLocStor, setDataLocStor } from "../../services/localStorage";

export const App = () => {
  const [tabs, setTabs] = useState([]);
  const [firstTabIndex, setFirstTabIndex] = useState(null);

  useEffect(() => {
    const localData = getDataLocStor();

    async function fetchData() {
      const dataTabs = await fetchTabs("/data/tabs.json").then((data) =>
        data.sort((a, b) => a.order - b.order)
      );
      setTabs(dataTabs);

      const url = window.location.pathname;
      const urlWords = url.split("/");
      const ourPage = urlWords[urlWords.length - 1];
      const tabExists = dataTabs.find((tab) => tab.id === ourPage);

      if (localData !== null) {
        setFirstTabIndex(localData);
      } else {
        if (tabExists) {
          setDataLocStor(tabExists.order);
          setFirstTabIndex(tabExists.order);
        } else {
          const indexPage = dataTabs.findIndex((elem) => elem.order === 0);
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
            path={`/${item.id}`}
            element={<TabContent path={item.path} />}
          />
        ))}
        {firstTabIndex !== null && (
          <Route
            path="*"
            element={<Navigate to={tabs[firstTabIndex].id} replace />}
          />
        )}
      </Routes>
    </>
  );
};

export default App;
