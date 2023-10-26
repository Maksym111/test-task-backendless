import axios from "axios";

const fetchTabs = async (url) => {
  try {
    const dataTabs = await axios.get(url);
    return dataTabs.data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchTabs;
