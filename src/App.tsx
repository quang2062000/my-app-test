import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { AppRouterEnum } from "./enum/routers";
import AppLayout from "./layout";
import UserContainer from "./container/users";
import Page2 from "./container/page2";

export default function AppRoutes() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRouterEnum.page1}
            element={
              <AppLayout
                RenderComponent={UserContainer}
                path={AppRouterEnum.page1}
              />
            }
          />
           <Route
            path={AppRouterEnum.page2}
            element={
              <AppLayout
                RenderComponent={Page2}
                path={AppRouterEnum.page2}
              />
            }
          />
           <Route
            path={AppRouterEnum.page3}
            element={
              <AppLayout
                RenderComponent={Page2}
                path={AppRouterEnum.page1}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
