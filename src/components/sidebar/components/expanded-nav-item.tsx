import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { cn } from "@/shared/lib";
import { ChevronDown } from "lucide-react";
import type { ElementType, ReactElement } from "react";
import { Link } from "react-router-dom";
import type { NavigationItem } from "./navigation-item";

type ExpandedNavItemProps = {
  item: NavigationItem & { menuIcon: ElementType };
  pathname: string;
  isParentActive: boolean;
};

export const ExpandedNavItem = ({
  item,
  pathname,
  isParentActive,
}: ExpandedNavItemProps): ReactElement => {
  return (
    <Collapsible key={item.menu} defaultOpen={isParentActive} className="group/collapsible">
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton className={isParentActive ? "bg-blue-ncs-100" : ""}>
            <item.menuIcon />
            <span className="font-bold text-sm">{item.menu}</span>
            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {item.subMenu.map(
              (subMenuNav: { title: string; url: string; childs?: { url: string }[] }) => {
                const pathNameSplit = pathname.split("/");
                const subMenuUrlSplit = subMenuNav.url.split("/");

                const exactUrlMatch = subMenuUrlSplit.every(
                  (subMenuPart: string, index: number) => {
                    if (pathNameSplit.length === subMenuUrlSplit.length)
                      return pathNameSplit[index] === subMenuPart;
                    return false;
                  }
                );

                const isChildActive =
                  subMenuNav.childs?.some((child: { url: string }) => {
                    return pathname.startsWith(child.url);
                  }) || false;

                const isSubMenuActive = exactUrlMatch || isChildActive;

                return (
                  <SidebarMenuSubItem key={subMenuNav.title}>
                    <SidebarMenuSubButton asChild>
                      <Link
                        to={subMenuNav.url}
                        className={cn(
                          "w-full text-sm font-normal transition-all",
                          isSubMenuActive && "bg-blue-200 font-semibold"
                        )}
                      >
                        <span>{subMenuNav.title}</span>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                );
              }
            )}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
};
