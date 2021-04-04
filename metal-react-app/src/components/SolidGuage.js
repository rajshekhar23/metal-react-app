import Highcharts from "highcharts";
import {
  HighchartsChart,
  withHighcharts,
  Series,
  XAxis,
  YAxis,
  Tooltip
} from "react-jsx-highcharts";
require("highcharts/highcharts-more")(Highcharts);
require("highcharts/modules/solid-gauge")(Highcharts);

const plotOptions = {
  solidgauge: {
    dataLabels: {
      y: -40,
      borderWidth: 0,
      useHTML: true,    
    }
  }
};

const paneOptions = {
  center: ["50%", "45%"],
  size: "70%",
  startAngle: 0,
  endAngle: 360,
  background: {
    backgroundColor:
      (Highcharts.theme && Highcharts.theme.background2) || "#ABB2B9",
    innerRadius: "92%",
    outerRadius: "88%",
    shape: "arc"
  }
};

const SolidGuage = ( jsonData ) => {
    //console.log(jsonData.data);
  return (
    <>
        <div className="gauge-empty">
        <HighchartsChart
            chart={{ type: "solidgauge" }}
            plotOptions={plotOptions}
            pane={paneOptions}
            title={{
                text: `<div class="titleWrapper"><p class="bullet" style='background-color:${jsonData.data[0].catColor}'></p><p>Critical Priority</p></div>`,
                style: {
                    fontSize: '24px'
                },
                useHTML: true
            }}
        >          
            <XAxis />

            <YAxis
            id="myAxis"
            min={0}
            max={100}
            lineWidth={0}
            minorTickInterval={null}
            tickAmount={0}          
            labels={{ y: 16, enabled : false }}
            >
            <Series
                id="gauge-test"
                name="gauge-test"
                data={jsonData.data}
                type="solidgauge"
            />
            </YAxis>
        </HighchartsChart>
        <div className="contentWrapper">
            <div className="meanTime">
                <p><i className="fa fa-arrow-down"></i>11 Min<span>12 sec</span></p>
                <p>Mean time to acknowledge</p>
            </div>
            <div className="meanTime">
                <h4>32 Tickets</h4>
                <p>+ 15 Compared to previous one</p>
            </div>            
        </div> 
        </div>
    </>   
  );
};

const Gauge = ({ data }) => <SolidGuage data={data} />;

export default withHighcharts(Gauge, Highcharts);
