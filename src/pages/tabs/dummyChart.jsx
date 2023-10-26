import { Container } from "../../components/Navigation/Navigation.styled";
import {
  ChartItem,
  ChartItemName,
  ChartItemPercent,
  ChartTitle,
  ChartWrapp,
} from "./Tabs.styled";

const DummyChart = () => {
  return (
    <>
      <Container>
        <ChartWrapp>
          <ChartTitle className="chart-title">
            Dummy Chart - Celebrity Statistics
          </ChartTitle>
          <ChartItem percentage="75%">
            <ChartItemName>John Doe</ChartItemName>
            <ChartItemPercent>75%</ChartItemPercent>
          </ChartItem>
          <ChartItem percentage="90%">
            <ChartItemName>Alice Smith</ChartItemName>
            <ChartItemPercent>90%</ChartItemPercent>
          </ChartItem>
          <ChartItem percentage="60%">
            <ChartItemName>Robert Johnson</ChartItemName>
            <ChartItemPercent>60%</ChartItemPercent>
          </ChartItem>
          <ChartItem percentage="85%">
            <ChartItemName>Sarah Brown</ChartItemName>
            <ChartItemPercent>85%</ChartItemPercent>
          </ChartItem>
          <ChartItem percentage="70%">
            <ChartItemName>Michael White</ChartItemName>
            <ChartItemPercent>70%</ChartItemPercent>
          </ChartItem>
        </ChartWrapp>
      </Container>
    </>
  );
};

export default DummyChart;
