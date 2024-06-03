
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

const LineCharts = ({data}) => {
  return (
    <ResponsiveContainer width='100%' height={300}>
    <LineChart data={data} margin={{ top: 50 }}>
      <CartesianGrid strokeDasharray="3 3 " />
    
      <XAxis dataKey="date" padding={{ left: 30, right: 30 }} />
      <YAxis allowDecimals={false}/>
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="count"
        stroke="#8884d8"
        // activeDot={{ r:1}}
      />
    </LineChart>
    </ResponsiveContainer>
  );
};

export default LineCharts;
