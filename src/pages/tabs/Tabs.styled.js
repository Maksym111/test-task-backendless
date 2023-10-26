import styled from "@emotion/styled";

// Dummy Table

export const Table = styled.table`
  margin: 20px auto;
  width: 100%;
  max-width: 1200px;
  border-collapse: collapse;
  border-spacing: 0;
  font-family: Arial, sans-serif;

  box-shadow: 0px 3px 12px 1px rgba(0, 0, 0, 0.75);
`;

export const TableHead = styled.thead``;
export const TableBody = styled.tbody``;

export const TableTitle = styled.caption`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  padding-bottom: 20px;
  color: black;
`;

export const TableHeadCell = styled.th`
  width: 33%;

  background-color: #3498db;
  color: white;
  font-size: 18px;
  font-weight: bold;
  padding: 12px;
  text-align: center;
  border-bottom: 2px solid #2980b9;
`;

export const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f2f2f2;
  }

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const TableDataCell = styled.td`
  width: 33%;
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #ccc;
`;

// -------- Dummy List -------

export const CelebritiesWrapp = styled.div`
  max-width: 50vw;
  margin: 30px auto;
  font-family: Arial, sans-serif;
  padding: 40px 50px;
  border: 1px solid #ccc;
  border-radius: 5px;

  background-color: #b9b9b9;
`;

export const CelebritiesTitle = styled.h1`
  font-size: 24px;
  text-transform: uppercase;
  margin-bottom: 40px;
  padding-bottom: 10px;
  border-bottom: 2px solid #a51010;
`;
export const CelebritiesList = styled.ul``;

export const CelebrityItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 10px 0;
  padding: 15px;
  background-color: #ffffff;
  border: 1px solid #892929;
  border-radius: 5px;
`;

export const CelebrityName = styled.p`
  font-weight: bold;
`;

export const CelebrityDesc = styled.p`
  font-style: italic;
`;

// --------- Dummy Chart-----

export const ChartWrapp = styled.div`
  margin: 30px auto;
  font-family: Arial, sans-serif;
  background-color: #f7f7f7;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const ChartTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const ChartItem = styled.div`
  position: relative;
  z-index: 5;
  margin: 10px 0;
  padding: 5px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;

  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    left: 0;
    bottom: 0;
    height: 100%;
    width: ${({ percentage }) => percentage || "0%"};
    background-color: #3f6bcf5e;
    border-radius: 5px 0 0 5px;
  }
`;

export const ChartItemName = styled.h2`
  position: relative;
  margin-bottom: 5px;
  z-index: 3;
`;

export const ChartItemPercent = styled.p`
  position: relative;
  z-index: 3;
`;
