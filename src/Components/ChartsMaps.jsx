import axios from "axios";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import WorldMap from "./WorldMap";

const ChartsMaps = () => {
  // information for countries and line chart
  const [countriesData, setCountriesData] = React.useState([]);
  const [chartData, setChartData] = React.useState({});

  React.useEffect(() => {
    // setting countries data with the result of this api when the page renders
    axios("https://disease.sh/v3/covid-19/countries").then((res) => {
      const data = res.data;
      setCountriesData(data);
      // console.log(countriesData);
    });
  }, [countriesData]);

  React.useEffect(() => {
    // api integration for all covid cases and setting that data to chartData
    axios
      .get("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
      .then((res) => {
        const data = res.data;

        const newChartData = {
          labels: Object.keys(data.cases),
          datasets: [
            {
              label: "Cases",
              data: Object.values(data.cases),
              fill: false,
              borderColor: "#f50057",
              tension: 0.2,
            },
          ],
        };

        setChartData(newChartData);
      });
  }, []);

  // dummy data for line charts
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="w-full pt-20 px-4 pb-8">
      <h1 className="text-3xl font-bold mb-4 text-pink-600">Cases Chart</h1>
      <div className="chartsContainer">
        {chartData.datasets ? (
          // using line charts from recharts
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <h1 className="text-pink-600 mb-4 font-bold text-2xl">Loading...</h1>
        )}
      </div>

      <div className="maps-container">
        <h1 className="text-3xl font-bold mb-4 mt-4 text-blue-500">
          Cases World Map
        </h1>
        {/* using maps with leaflet */}
        <MapContainer
          className="m-auto w-full  border-blue-700"
          bounds={[
            [-60, -180],
            [85, 180],
          ]}
          zoom={2}
          center={[20, 40]}
          scrollWheelZoom={true}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          />
          <WorldMap countriesData={countriesData} />
        </MapContainer>
      </div>
    </div>
  );
};

export default ChartsMaps;
