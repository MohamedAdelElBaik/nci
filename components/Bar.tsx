import {
  BellIcon,
  EnvelopeClosedIcon,
  MagnifyingGlassIcon,
  MoonIcon,
  SunIcon,
} from '@radix-ui/react-icons';
import { NavbarMobile } from './NavbarMobile';
import { Input } from './ui/input';
import { Button } from './ui/button';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useTheme } from 'next-themes';

export default function Bar() {
  const { theme, setTheme, systemTheme } = useTheme();

  function handleTheme() {
    console.log(systemTheme);
    if (theme === 'system')
      setTheme(systemTheme === 'light' ? 'dark' : 'light');
    if (theme === 'dark') setTheme('light');
    if (theme === 'light') setTheme('dark');
  }

  return (
    <div className="flex px-2 md:px-8 py-4 justify-between items-center">
      <NavbarMobile />
      <Search />

      <div className="flex gap-4 items-center">
        <Button variant="secondary">
          <EnvelopeClosedIcon />
        </Button>

        <Button variant="secondary">
          <BellIcon />
        </Button>

        <Button variant="default" onClick={handleTheme}>
          {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>

        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="hidden md:flex w-full max-w-sm items-center space-x-2">
      <Input placeholder="search" />
      <Button>
        <MagnifyingGlassIcon />
      </Button>
    </div>
  );
}
