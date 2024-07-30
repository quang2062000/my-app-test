import { createTheme } from "@mui/material/styles";

const theme = createTheme ({
    palette:{
        primary: {
            main :'#212121'
        },
        secondary : {
            main : '#fafafa'
        },
        error: {
            main: '#f44336',
        },
          background: {
            default: '#fff',
        },
    },
    typography : {
        fontFamily: [
           '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'
          ].join(','),
          fontSize: 14,
        
    }
})

export default theme;

