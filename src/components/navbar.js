// import React, { useState } from 'react';
// import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';
// import HomeIcon from '@material-ui/icons/Home';
// import InfoIcon from '@material-ui/icons/Info';
// import { makeStyles } from '@material-ui/core/styles';

// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//     [theme.breakpoints.up('sm')]: {
//       display: 'none',
//     },
//   },
//   title: {
//     flexGrow: 1,
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
// }));

// const Navbar = () => {
//   const classes = useStyles();
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <div>
//       <List>
//         <ListItem button>
//           <ListItemIcon>
//             <HomeIcon />
//           </ListItemIcon>
//           <ListItemText primary="Home" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon>
//             <InfoIcon />
//           </ListItemIcon>
//           <ListItemText primary="About" />
//         </ListItem>
//       </List>
//     </div>
//   );

//   return (
//     <div>
//       <AppBar position="fixed" className={classes.appBar}>
//         <Toolbar>
//           <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle} className={classes.menuButton}>
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" className={classes.title}>
//             My Navbar
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <nav className={classes.drawer} aria-label="navigation">
//         <Drawer
//           variant="temporary"
//           anchor="left"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           classes={{
//             paper: classes.drawerPaper,
//           }}
//           ModalProps={{
//             keepMounted: true,
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

