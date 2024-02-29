import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/Sheet';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

export function NavbarMobile() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="link">
            <HamburgerMenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Navbar />
        </SheetContent>
      </Sheet>
    </div>
  );
}
