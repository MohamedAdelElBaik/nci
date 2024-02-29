import ItemCard from '@/components/ItemCard';
import { Card } from '@/components/ui/Card';

export default function ItemsStatus() {
  return (
    <Card className="grid grid-cols-2 md:grid-cols-4 justify-between gap-2 p-4">
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </Card>
  );
}
