import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import Image from 'next/image';

export default function ItemCard() {
  return (
    <Card className="flex flex-col md:flex-row-reverse md:items-center justify-between gap-4 px-2 py-4">
      <CardHeader className="p-0 md:w-3/5">
        <CardTitle>Card Title</CardTitle>
        <CardDescription>120</CardDescription>
      </CardHeader>
      <CardContent className=" flex justify-center items-center p-0 md:w-2/5">
        <Image
          className=" flex justify-center items-center"
          src="/item.png"
          width={150}
          height={150}
          alt="item"
        />
      </CardContent>
    </Card>
  );
}
