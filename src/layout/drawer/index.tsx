import React, { PropsWithChildren, useCallback, useMemo } from "react";
import { AppRouterEnum } from "../../enum/routers";
import { styles } from "./styles";
import { useLocation } from "react-router-dom";
import clsx from "clsx";
import { Drawer, ListItem, ListItemIcon, ListItemText, Tooltip } from "@mui/material";
import routes from "../routes";
import { setActiveRoute } from "../../utils/validation";

export interface Props {
    openDrawer: boolean;
    path: string | string[];
    onNavigate:(route: AppRouterEnum)=>void;
}

export default function ManagerDrawer(props: PropsWithChildren<Props>){
    const {openDrawer,onNavigate} = props;
    const classes = styles();
    const routeLocation = useLocation();

    const drawerClassName = useMemo(
        () =>
          clsx(classes.drawer, {
            [classes.drawerOpen]: openDrawer,
            [classes.drawerClose]: !openDrawer,
          }),
        [openDrawer, classes]
    );

      const drawerClasses = useMemo(
        () => ({
          paper: clsx(classes.drawerPaper, {
            [classes.drawerOpen]: openDrawer,
            [classes.drawerClose]: !openDrawer,
          }),
        }),
        [openDrawer, classes]
    );

    const handleNavigate = useCallback((route: AppRouterEnum)=>{
        onNavigate(route)
    },[onNavigate])

    const renderIcon = useCallback(
        ({ icon, label, isActive }: any) => {
          const Icon = icon({ isActive });
          return openDrawer ? (
            Icon
          ) : (
            <Tooltip title={label}>
              <span>{Icon}</span>
            </Tooltip>
          );
        },
        [openDrawer]
      );

    const appRoutes = useMemo(() => {
        return routes.map(({ path, label, icon }) => {
          const isActive = setActiveRoute(routeLocation.pathname, path, 2);
    
          return (
            <ListItem
              key={label}
              selected={isActive}
              onClick={()=>handleNavigate(path)}
              data-testid="navigate-button"
              className={classes.itemSidebar}
              classes={{ selected: classes.itemSelected }}
            >
              <ListItemIcon className={classes.itemSidebarIcon}>
                {renderIcon({ icon, label, isActive })}
              </ListItemIcon>
              <ListItemText
                primary={label}
                className={classes.itemSidebarText}
                classes={{ primary: classes.label }}
              />
            </ListItem>
          );
        });
      }, [renderIcon, classes, routeLocation, handleNavigate]);

    return(
        <Drawer
        data-testid="drawerMenu"
        data-open={openDrawer}
        variant="permanent"
        className={drawerClassName}
        classes={drawerClasses}
      >
        {appRoutes}
      </Drawer>
    )
}