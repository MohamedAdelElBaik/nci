import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { renderCustomizedLabel } from '@/lib/pieChartLable';

type PieChartsProps = {
  data: {
    name: string;
    value: number;
  }[];
  COLORS: string[];
};

export default function PieCharts({ data, COLORS }: PieChartsProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((__, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
