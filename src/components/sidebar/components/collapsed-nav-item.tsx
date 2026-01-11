import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { cn } from "@/shared/lib";
import type { ElementType, ReactElement } from "react";
import { Link } from "react-router-dom";
import type { NavigationItem } from "./navigation-item";

type CollapsedNavItemProps = {
  item: NavigationItem & { menuIcon: ElementType };
  pathname: string;
  isParentActive: boolean;
};

export const CollapsedNavItem = ({
  item,
  pathname,
  isParentActive,
}: CollapsedNavItemProps): ReactElement => {
  return (
    <HoverCard key={item.menu} openDelay={50} closeDelay={100}>
      <SidebarMenuItem>
        <HoverCardTrigger asChild>
          <Link to={item.subMenu[0].url}>
            <SidebarMenuButton isActive={isParentActive}>
              <item.menuIcon />
            </SidebarMenuButton>
          </Link>
        </HoverCardTrigger>
        <HoverCardContent side="right" align="start" className="w-56 rounded-lg p-1">
          <div className="mx-2 py-1.5 text-sm font-semibold border-b pb-3 mb-1">{item.menu}</div>
          {item.subMenu.map(
            (subMenuNav: { title: string; url: string; childs?: { url: string }[] }) => {
              const pathNameSplit = pathname.split("/");
              const subMenuUrlSplit = subMenuNav.url.split("/");
              const exactUrlMatch = subMenuUrlSplit.every((subMenuPart: string, index: number) => {
                if (pathNameSplit.length === subMenuUrlSplit.length)
                  return pathNameSplit[index] === subMenuPart;
                return false;
              });
              const isChildActive =
                subMenuNav.childs?.some((child: { url: string }) =>
                  pathname.startsWith(child.url)
                ) || false;
              const isSubMenuActive = exactUrlMatch || isChildActive;

              return (
                <Link
                  key={subMenuNav.title}
                  to={subMenuNav.url}
                  className={cn(
                    "block w-full rounded-sm px-2 py-1.5 text-sm outline-hidden hover:bg-blue-100 focus:text-accent-foreground",
                    isSubMenuActive && "bg-blue-200 font-semibold"
                  )}
                >
                  {subMenuNav.title}
                </Link>
              );
            }
          )}
        </HoverCardContent>
      </SidebarMenuItem>
    </HoverCard>
  );
};
