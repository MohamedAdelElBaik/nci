'use client';

import BarCharts from '@/components/ui/BarCharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

const data = [
  {
    subscription: 240,
  },
  {
    subscription: 300,
  },
  {
    subscription: 200,
  },
  {
    subscription: 278,
  },
  {
    subscription: 189,
  },
  {
    subscription: 239,
  },
  {
    subscription: 200,
  },
  {
    subscription: 278,
  },
  {
    subscription: 189,
  },
  {
    subscription: 278,
  },
  {
    subscription: 189,
  },
  {
    subscription: 189,
  },
  {
    subscription: 239,
  },
  {
    subscription: 278,
  },
  {
    subscription: 189,
  },
];

export function SalesGraph() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-normal">Subscriptions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">+2350</div>
        <p className="text-xs text-muted-foreground">+180.1% from last month</p>
        <div className="mt-4 h-[80px] md:h-[300px]">
          <BarCharts data={data} />
        </div>
      </CardContent>
    </Card>
  );
}
