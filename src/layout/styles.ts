import { makeStyles } from '@mui/styles';

export const styles = makeStyles(()=>({
    wrapToolbar:{
        height: "64px",
        width:"100%",
        "& .css-11b3ww9-MuiPaper-root-MuiAppBar-root":{
            position:"static",
            backgroundColor:"white",
            boxShadow: "none"
        }
    },
    wrapWeb:{
        display:"flex"
    },
    wrapContentDrawer:{
        height:"100vh",
        width:"260px"
    },
    titleDrawer:{
        height:"64px",
        display:"flex",
        justifyContent:"center",
        alignItems:'center',
        fontSize:"30px",
        fontWeight: 600,
        color: "#5e50f9"
    },
    wrapContentRight:{
        width:"calc(100% - 260px)", 
        height:"100vh"
    },
    wrapContentComponent:{
        height: "calc(100% - 64px)",
        backgroundColor:"#d8d8d8",
        overflowY: 'scroll'
    },
    contentComponent:{
        padding:"20px"
    },
    component:{
        padding:"60px",
        backgroundColor:"white"
    }
}))