import { Bar, BarChart, ResponsiveContainer } from 'recharts';

type BarChartsProps = {
  data: {
    subscription: number;
  }[];
};

export default function BarCharts({ data }: BarChartsProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <Bar
          dataKey="subscription"
          style={
            {
              fill: 'var(--theme-primary)',
              opacity: 1,
              '--theme-primary': `hsl(var(--primary))`,
            } as React.CSSProperties
          }
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
