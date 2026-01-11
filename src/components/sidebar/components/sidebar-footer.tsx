import type { ReactElement } from 'react';
import { SidebarFooter, SidebarMenu, SidebarMenuItem } from '../../ui/sidebar';

export const AppSideBarFooter = (): ReactElement => {
	return (
		<SidebarFooter>
			<SidebarMenu>
				<SidebarMenuItem>
					<span>User</span>
				</SidebarMenuItem>
			</SidebarMenu>
		</SidebarFooter>
	);
};
