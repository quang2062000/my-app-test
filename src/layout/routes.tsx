import React from "react";
import { AppRouterEnum } from "../enum/routers";
import IconSDrawerSetting, {Props as IconProps} from "../assets/icon/setting";

const router:{
    path: AppRouterEnum;
    label: string;
    icon: (props: IconProps)=> React.ReactElement;
}[]= [
    {
        path: AppRouterEnum.page1,
        label: 'Dashboard',
        icon : (props: IconProps) => <IconSDrawerSetting {...props}/>
    },
    {
        path: AppRouterEnum.page2,
        label: 'Page 2',
        icon : (props: IconProps) => <IconSDrawerSetting {...props}/>
    },
    {
        path: AppRouterEnum.page3,
        label: 'Page 3',
        icon : (props: IconProps) => <IconSDrawerSetting {...props}/>
    }
]

export default router;