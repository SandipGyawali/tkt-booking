import { Link } from "react-router-dom";
import { Button } from "./ui/Button";
import { AlignJustify } from "lucide-react";
import { useState } from "react";
import { Drawer, DrawerClose, DrawerContent, DrawerFooter } from "./ui/drawer";
import { cn } from "@/lib/utils";

function NavLinks({ className }: { className?: string }) {
  return (
    <nav className={cn("hidden md:flex gap-6", className)}>
      {[
        {
          name: "Home",
        },
        {
          name: "Movies",
        },
        {
          name: "Contacts",
        },
        {
          name: "Releases",
        },
      ].map((val) => (
        <Link
          to="/#features"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          {val.name}
        </Link>
      ))}
    </nav>
  );
}

function LoginButton({ className }: { className?: string }) {
  return (
    <div className={cn("items-center gap-4", className)}>
      <Button variant="default" size="sm" className="rounded-md">
        Login
      </Button>
    </div>
  );
}

function Navbar() {
  const [onOpenExtend, setOnOpenExtend] = useState<boolean>(false);

  return (
    <header className="border-b-2 w-full">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link className="flex items-center gap-2" to="/">
          <span className="text-xl font-black">Tkt-Booking</span>
        </Link>

        <NavLinks />
        <LoginButton className="hidden md:flex" />

        <Button
          className="md:hidden p-1.5 rounded-md"
          size="sm"
          variant="outline"
          onClick={() => setOnOpenExtend(true)}
        >
          <AlignJustify size={20} />
        </Button>

        {onOpenExtend && (
          <Drawer
            open={onOpenExtend}
            onClose={() => setOnOpenExtend((prev) => !prev)}
          >
            <DrawerContent>
              <NavLinks className="flex mt-6 flex-col mx-auto items-center justify-center" />
              <div className="w-full mt-3 h-[1px] border" />

              <DrawerFooter className="flex flex-col mx-auto">
                <LoginButton />
                <DrawerClose asChild>
                  <Button variant="outline" className="rounded-md" size="sm">
                    Close
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        )}
      </div>
    </header>
  );
}

export default Navbar;
