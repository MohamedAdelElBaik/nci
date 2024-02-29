'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import PieCharts from '@/components/ui/PieCharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 200 },
  { name: 'Group F', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function TopSelling() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-normal">Top Selling</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[250px]">
          <PieCharts data={data} COLORS={COLORS} />
        </div>
      </CardContent>
    </Card>
  );
}
