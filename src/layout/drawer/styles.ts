import { makeStyles } from '@mui/styles';

export const styles = makeStyles(()=>({
    drawer:{
        height:"calc(100vh - 64px)",
        "& .MuiPaper-root" :{
            position:"relative",
            "& .css-1p823my-MuiListItem-root.Mui-selected":{
                backgroundColor:"white",
                color:"#b66dff"
           }
        }, 
    },
    drawerOpen:{
        height:"100%"
    },
    drawerClose:{

    },
    drawerPaper:{

    },
    itemSidebar:{
        '&:hover': {
            cursor: "pointer"
        },
    },
    itemSelected:{
       
    },
    itemSidebarIcon:{

    },
    itemSidebarText:{

    },
    label:{
        
    }
}))