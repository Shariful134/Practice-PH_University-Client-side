import { NavLink } from "react-router";
import { TSidebarItem, TUserPaths } from "../types/types";

export const sidebarGenerator = (item: TUserPaths[], role) => {
  const adminSidebarItem = item.reduce((acc: TSidebarItem[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }
    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name,
          label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
        })),
      });
    }
    return acc;
  }, []);
  return adminSidebarItem;
};
