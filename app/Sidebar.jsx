"use client";
import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';

const Sidebar = () => {
  // State to manage the open/close state of the sidebar
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            backgroundColor: '#2D3748', // bg-gray-800
            color: '#ffffff', // text-white
          },
        }}
      >
        {/* Sidebar content */}
        <List>
          {/* Home Link with Icon */}
          <ListItem button>
            <ListItemIcon>
              <HomeIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>

          {/* About Link with Icon */}
          <ListItem button>
            <ListItemIcon>
              <InfoIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>

          <ListItem button>
            
            <ListItemText primary="Logout" />
          </ListItem>

          {/* Add more sidebar items here */}
        </List>
      </Drawer>

      {/* Main content */}
      <div className={`flex-1 p-4 transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-0'}`}>
        {/* Button to toggle sidebar */}
        <div className="ml-auto">
          <IconButton
            onClick={() => setIsOpen(!isOpen)}
            sx={{
              backgroundColor: '#3b82f6', // bg-blue-500
              '&:hover': { backgroundColor: '#2563eb' }, // hover:bg-blue-700
            }}
          >
            {isOpen ? (
              <CloseIcon style={{ color: 'white' }} />
            ) : (
              <MenuIcon style={{ color: 'white' }} />
            )}
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
