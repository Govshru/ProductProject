"use client";
import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Router from 'next/router';
import Link from 'next/link';

const Navbar = () => {
  // State to manage the open/close state of the sidebar
  const [isOpen, setIsOpen] = useState(false);
  
  // Cart item count for the shopping cart indicator (Assume the value here for now)
  const [cartItemCount, setCartItemCount] = useState(3); // example item count

//   const handlenewProduct (){
// const router=Router();
// router.push

//   }

  return (
    <nav className="bg-black">
      <div className="flex items-center justify-between px-8 sm:px-10 lg:px-16 w-full">
        {/* Sidebar toggle button (mobile) */}
        <div className="lg:hidden">
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
          <a href="/" className="text-white text-lg font-bold">NewLOGO</a>
        </div>

        {/* Navbar Links */}
        <div className="hidden lg:flex items-center space-x-4">
         <div onClick={() =>{console.log  ("NewProduct") 
          handlenewProduct()
         }}   className="text-white">
          NewProduct
          </div> <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">Home</a>
          <Link href="/Product" className="text-white hover:bg-white hover:text-black rounded-lg p-2">Product</Link>
          <Link href="/Contact" className="text-white hover:bg-white hover:text-black rounded-lg p-2">Contact</Link>
          <Link href="/Aboutus" className="text-white hover:bg-white hover:text-black rounded-lg p-2">About Us</Link>
        </div>

        {/* Cart Icon */}
        <div className="relative">
          <a href="/AddtoCart" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
            <ShoppingCartIcon className="h-6 w-6" />
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                {cartItemCount}
              </span>
            )}
          </a>
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
