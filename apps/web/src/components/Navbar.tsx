import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/Button";
import { AlignJustify, MoveIcon } from "lucide-react";
import { useState } from "react";
import { Drawer, DrawerClose, DrawerContent, DrawerFooter } from "./ui/drawer";
import { cn } from "@/lib/utils";
import { useUser, UserButton } from "@clerk/clerk-react";
import { Route } from "@/enum/route.enum";

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
  const navigate = useNavigate();

  return (
    <div className={cn("items-center gap-4", className)}>
      <Button
        variant="default"
        onClick={() => {
          navigate("/login");
        }}
        size="sm"
        className="rounded-md"
      >
        Login
      </Button>
    </div>
  );
}

function Navbar() {
  const navigate = useNavigate();
  const { user } = useUser();
  const [onOpenExtend, setOnOpenExtend] = useState<boolean>(false);

  return (
    <header className="border-b-2 w-full">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link className="flex items-center gap-2" to="/">
          <span className="text-xl font-black">Tkt-Booking</span>
        </Link>

        <NavLinks />
        {!user ? (
          <LoginButton className="hidden md:flex" />
        ) : (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Bookings"
                labelIcon={<MoveIcon width={15} />}
                onClick={() => {
                  navigate(Route.myBookings);
                }}
              />
            </UserButton.MenuItems>
          </UserButton>
        )}

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
                {!user ? <LoginButton /> : <UserButton />}
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
