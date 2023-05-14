import Image from "next/image";
import Link from "next/link";

const navigationBarItems = [
  { name: "Home", href: "/home", icon: "/navigationBarIcons/home.svg" },
  {
    name: "Notifications",
    href: "/notifications",
    icon: "/navigationBarIcons/notification.svg",
  },
  {
    name: "Messages",
    href: "/messages",
    icon: "/navigationBarIcons/message.svg",
  },
  {
    name: "Bookmarks",
    href: "/bookmarks",
    icon: "/navigationBarIcons/bookmark.svg",
  },
];

export function NavigationItems() {
  return navigationBarItems.map(({ name, href, icon }, index) => (
    <Link
      className="w-fit h-fit space-x-3.5 duration-200 hover:bg-slate-200/20 rounded-full flex flex-row px-4"
      key={index}
      href={href}
    >
      <Image
        className="svg-white"
        src={icon}
        alt={name}
        width={20}
        height={20}
      />
      <span className="inline pr-2 py-3">{name}</span>
    </Link>
  ));
}
