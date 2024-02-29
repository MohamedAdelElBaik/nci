import Image from 'next/image';
import { Button } from './ui/button';
import {
  DashboardIcon,
  LayersIcon,
  Pencil2Icon,
  ReaderIcon,
} from '@radix-ui/react-icons';

export default function Navbar() {
  return (
    <header className="h-full space-y-14">
      <div className="flex justify-between items-center gap-2 px-4 py-2 border-b border-b-primary">
        <Image
          className="w-1/4"
          src="/logo.png"
          width="500"
          height="500"
          alt="nci"
        />
        <h1 className="text-xl">No Cost Inventory</h1>
      </div>
      <nav>
        <ul className="flex flex-col gap-4 items-start *:text-base md:*:text-lg">
          <Button variant="link" className="space-x-4">
            <DashboardIcon />
            <li>Dashboard</li>
          </Button>
          <Button variant="link" className="space-x-4">
            <LayersIcon />
            <li>Items</li>
          </Button>
          <Button variant="link" className="space-x-4">
            <ReaderIcon />
            <li>Reports</li>
          </Button>
          <Button variant="link" className="space-x-4">
            <Pencil2Icon />
            <li>Sales Orders</li>
          </Button>
        </ul>
      </nav>
    </header>
  );
}
