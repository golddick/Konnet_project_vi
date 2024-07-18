import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '30 min',
    view: 4000,
    $: 2400,
  },
  {
    name: '1Hr',
    view: 100,
    $: 6600,
  },
  {
    name: '1Hr, 30min',
    view: 8000,
    $: 1000,
  },
  {
    name: '2hr',
    view: 4000,
    $: 200,
  },

];

export default class AnalyticsChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/bar-chart-with-double-yaxis-39dhps';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="view" fill="#8884d8" />
          <Bar yAxisId="right" dataKey="$" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
