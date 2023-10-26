import {
  CelebritiesList,
  CelebritiesTitle,
  CelebritiesWrapp,
  CelebrityDesc,
  CelebrityItem,
  CelebrityName,
} from "./Tabs.styled";

const DummyList = () => {
  return (
    <>
      <CelebritiesWrapp>
        <CelebritiesTitle>Guest List</CelebritiesTitle>
        <CelebritiesList>
          <CelebrityItem>
            <CelebrityName>John Doe</CelebrityName>
            <CelebrityDesc>Famous actor</CelebrityDesc>
          </CelebrityItem>
          <CelebrityItem>
            <CelebrityName>Alice Smith</CelebrityName>
            <CelebrityDesc>Popular singer</CelebrityDesc>
          </CelebrityItem>
          <CelebrityItem>
            <CelebrityName>Robert Johnson</CelebrityName>
            <CelebrityDesc>Professional athlete</CelebrityDesc>
          </CelebrityItem>
          <CelebrityItem>
            <CelebrityName>Sarah Brown</CelebrityName>
            <CelebrityDesc>Renowned model</CelebrityDesc>
          </CelebrityItem>
          <CelebrityItem>
            <CelebrityName>Michael White</CelebrityName>
            <CelebrityDesc>Talented director</CelebrityDesc>
          </CelebrityItem>
        </CelebritiesList>
      </CelebritiesWrapp>
    </>
  );
};

export default DummyList;
