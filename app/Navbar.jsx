"use client";
import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '@/context/CartContext';

import Link from 'next/link';

const Navbar = () => {
  const{cartCount}=useCart();
  // State to manage the open/close state of the sidebar
  const [isOpen, setIsOpen] = useState(false);
  

  






  return (
    <nav className="bg-black">
      <div className="flex items-center justify-between px-8 sm:px-10 ">
        {/* Sidebar toggle button  */}
        <div >
          <IconButton
            onClick={() => setIsOpen(!isOpen)}
            sx={{
              backgroundColor: '#3b82f6',
              '&:hover': { backgroundColor: '#2563eb' },
            }}
          >
            {isOpen ? (
              <CloseIcon style={{ color: 'white' }} />
            ) : (
              <MenuIcon style={{ color: 'white' }} />
            )}
          </IconButton>
        </div>

        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="text-white text-lg font-bold">LOGO</a>
        </div>

        {/* Navbar Links */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">Home</Link>
          <Link href="/Product" className="text-white hover:bg-white hover:text-black rounded-lg p-2">Product</Link>
          <Link href="/Contact" className="text-white hover:bg-white hover:text-black rounded-lg p-2">Contact</Link>
          <Link href="/Aboutus" className="text-white hover:bg-white hover:text-black rounded-lg p-2">About Us</Link>
        </div>

        {/* Cart Icon */}
        <div className="relative">
          <Link href="/AddtoCart" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
            <ShoppingCartIcon className="h-6 w-6" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Sidebar (Drawer) */}
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

          {/* Add more sidebar items here */}
          <ListItem button>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>

    </nav>
  );
}

export default Navbar;
