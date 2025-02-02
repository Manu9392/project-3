[
  { "timestamp": "2023-01-01T00:00:00Z", "value": 10 },
  { "timestamp": "2023-01-02T00:00:00Z", "value": 12 },
  { "timestamp": "2023-01-03T00:00:00Z", "value": 5 },
  { "timestamp": "2023-01-04T00:00:00Z", "value": 8 },
  { "timestamp": "2023-01-05T00:00:00Z", "value": 15 },
  { "timestamp": "2023-01-06T00:00:00Z", "value": 20 },
  { "timestamp": "2023-01-07T00:00:00Z", "value": 18 },
  { "timestamp": "2023-01-08T00:00:00Z", "value": 12 },
  { "timestamp": "2023-01-09T00:00:00Z", "value": 10 },
  { "timestamp": "2023-01-10T00:00:00Z", "value": 15 },
  { "timestamp": "2023-01-11T00:00:00Z", "value": 18 },
  { "timestamp": "2023-01-12T00:00:00Z", "value": 20 },
  { "timestamp": "2023-01-13T00:00:00Z", "value": 22 },
  { "timestamp": "2023-01-14T00:00:00Z", "value": 25 },
  { "timestamp": "2023-01-15T00:00:00Z", "value": 28 },
  { "timestamp": "2023-01-16T00:00:00Z", "value": 30 },
  { "timestamp": "2023-01-17T00:00:00Z", "value": 32 },
  { "timestamp": "2023-01-18T00:00:00Z", "value": 35 },
  { "timestamp": "2023-01-19T00:00:00Z", "value": 38 },
  { "timestamp": "2023-01-20T00:00:00Z", "value": 40 },
  { "timestamp": "2023-01-21T00:00:00Z", "value": 42 },
  { "timestamp": "2023-01-22T00:00:00Z", "value": 45 },
  { "timestamp": "2023-01-23T00:00:00Z", "value": 48 },
  { "timestamp": "2023-01-24T00:00:00Z", "value": 50 },
  { "timestamp": "2023-01-25T00:00:00Z", "value": 52 },
  { "timestamp": "2023-01-26T00:00:00Z", "value": 55 },
  { "timestamp": "2023-01-27T00:00:00Z", "value": 58 },
  { "timestamp": "2023-01-28T00:00:00Z", "value": 60 },
  { "timestamp": "2023-01-29T00:00:00Z", "value": 62 },
  { "timestamp": "2023-01-30T00:00:00Z", "value": 65 }
]

import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { format } from 'date-fns';

interface ChartProps {
  data: any[];
  timeframe: string;
}

const Chart: React.FC<ChartProps> = ({ data, timeframe }) => {
  const [chartData, setChartData] = useState<any[]>([]);
  const [zoom, setZoom] = useState<number>(1);

  useEffect(() => {
    const filteredData = data.filter((item, index) => {
      if (timeframe === 'daily') return true;
      if (timeframe === 'weekly') return index % 7 === 0;
      if (timeframe === 'monthly') return index % 30 === 0;
      return true;
    });
    setChartData(filteredData);
  }, [data, timeframe]);

  const handleZoom = (direction: string) => {
    if (direction === 'in')
