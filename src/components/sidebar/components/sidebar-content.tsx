import type { ReactElement } from "react";
import { useLocation } from "react-router-dom";
import { SidebarContent, SidebarGroup, SidebarMenu, useSidebar } from "../../ui/sidebar";
import { CollapsedNavItem } from "./collapsed-nav-item";
import { ExpandedNavItem } from "./expanded-nav-item";
import { navigationItems } from "./navigation-item";

export const AppSideBarContent = (): ReactElement => {
  const { pathname } = useLocation();
  const { state: sidebarState, isMobile } = useSidebar();

  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarMenu>
          {navigationItems.map((item) => {
            const isParentActive = item.subMenu.some(
              (subMenu) =>
                pathname.startsWith(subMenu.url) ||
                subMenu.childs?.some((c) => pathname.startsWith(c.url))
            );

            const hasSubMenu = item.subMenu?.length > 0;

            if (sidebarState === "collapsed" && !isMobile && hasSubMenu) {
              return (
                <CollapsedNavItem
                  key={item.menu}
                  item={item}
                  pathname={pathname}
                  isParentActive={isParentActive}
                />
              );
            }

            return (
              <ExpandedNavItem
                key={item.menu}
                item={item}
                pathname={pathname}
                isParentActive={isParentActive}
              />
            );
          })}
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
  );
};
