"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import SettingsIcon from "@mui/icons-material/Settings";
import ChatIcon from "@mui/icons-material/Chat";
import ContactsIcon from "@mui/icons-material/Contacts";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/", icon: ChatIcon },
  {
    name: "Contacts",
    icon: ContactsIcon,
    href: "/contacts",
  },
  { name: "Settings", href: "/settings", icon: SettingsIcon },
];

export default function SideBarLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 dark:bg-slate-900 dark:text-white p-3 font-medium hover:bg-sky-100 hover:text-blue-600 dark:hover:bg-sky-950 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 dark:bg-sky-900 text-blue-600 dark:text-blue-500": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
          </Link>
        );
      })}
    </>
  );
}
