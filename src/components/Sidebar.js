import React from "react"
import { Drawer, List, ListItem, ListItemText, Divider } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PublicIcon from '@mui/icons-material/Public';
import StarsIcon from '@mui/icons-material/Stars';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import GroupIcon from '@mui/icons-material/Group'

const Sidebar = () => {
  const menuItems = [
    { icon: <HomeIcon sx={{ color: 'orange' }} />, category: 'HOME' },
    {
      text: 'Questions',
      icon: <PublicIcon sx={{ color: 'orange' }} />,
      category: 'PUBLIC',
    },
    { text: 'Tags', icon: <PublicIcon />, category: 'PUBLIC' },
    { text: 'Users', icon: <PublicIcon />, category: 'PUBLIC' },
    {
      text: 'Explore Jobs',
      icon: <StarsIcon sx={{ color: 'orange' }} />,
      category: 'COLLECTIVES',
    },
    {
      text: 'Jobs',
      icon: <BusinessCenterIcon sx={{ color: 'orange' }} />,
      category: 'FIND JOBS',
    },
    {
      text: 'Companies',
      icon: <BusinessCenterIcon />,
      category: 'FIND JOBS',
    },
    {
      text: '+ Create a team',
      icon: <GroupIcon sx={{ color: 'orange' }} />,
      category: 'TEAMS',
    },
  ]

  return (
    <Drawer variant="permanent" anchor="left">
      <div style={{ padding: 14 }}>
        <img
          src="https://th.bing.com/th/id/OIP.zeiB6xZQ_UNB7ssgLA7yCQHaD3?rs=1&pid=ImgDetMain"
          alt="Stack Overflow Logo"
          style={{ width: '250px'}}
        />
      </div>
      <Divider />
      <List>
        {menuItems.map((item, index) => (
          <>
            {index === 0 ||
            index === 1 ||
            index === 4 ||
            index === 5 ||
            index === 7 ? (
              <ListItem button>
                {item.icon}
                <ListItemText
                  primary={item.category}
                  sx={{
                    padding: '8px 18px',
                    fontWeight: 'bold',
                    color: 'gray',
                  }}
                />
              </ListItem>
            ) : null}
            <ListItem button>
              <ListItemText
                primary={item.text}
                style={{ marginLeft: '50px' }}
              />
            </ListItem>
          </>
        ))}
      </List>
    </Drawer>
  )
};

export default Sidebar;
