import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Button } from './ui/button';
import { Input } from './ui/input';

export default function Search() {
  return (
    <div className="hidden md:flex w-full max-w-sm items-center space-x-2">
      <Input placeholder="search" />
      <Button>
        <MagnifyingGlassIcon />
      </Button>
    </div>
  );
}
