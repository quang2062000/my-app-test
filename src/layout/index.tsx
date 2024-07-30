import React, { ElementType, useCallback, useState } from "react";
import { RouteProps, useLocation, useNavigate } from "react-router-dom";
import { styles } from "./styles";
import { AppRouterEnum } from "../enum/routers";
import AppBar from "./appBar";
import ManagerToolbar from "./toolBar";
import ManagerDrawer from "./drawer";

export interface AppLayoutProps extends RouteProps {
    RenderComponent: ElementType;
    path?: any;
}

interface LayoutProps {
    RenderComponent: ElementType;
    path?: any;
  }

export function Layout(props: LayoutProps) {
    const { RenderComponent } = props;
    const classes = styles();
    const navigation = useNavigate();
    const [open, setOpen] = useState(true);
    const routeLocation = useLocation();
    const handleOpenDrawer = useCallback(() => {
      setOpen((state) => !state);
    }, []);
  
    const handleNavigate = useCallback(
      (route: AppRouterEnum) => {
        navigation(route);
      },
      [navigation]
    );
  
    return (
      <>
        <div className={classes.wrapWeb} >
          <div className={classes.wrapContentDrawer}>
            <div className={classes.titleDrawer}>
              Dashboard
            </div>
            <div>
              <ManagerDrawer
                openDrawer={open}
                onNavigate={handleNavigate}
                path={routeLocation.pathname}
              />
            </div>
          </div>
          <div className={classes.wrapContentRight}>
            <div className={classes.wrapToolbar}>
              <AppBar>
                <ManagerToolbar openDrawer={handleOpenDrawer} />
              </AppBar>
            </div>
            <div className={classes.wrapContentComponent}>
              <div className={classes.contentComponent}>
                <div className={classes.component}>
                  <RenderComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

export default function AppLayout({
    RenderComponent,
    ...rest
  }: AppLayoutProps) {
    return <Layout RenderComponent={RenderComponent} path={rest.path} />;
  }
  