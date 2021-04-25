import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import './Slide.css';
import { IconButton } from '@material-ui/core';
import { MenuOpen } from '@material-ui/icons';

const Slide = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <input type="checkbox" id="slideCheck" />
      <div className="slide">
        <IconButton onClick={() => setOpen(!open)}>
          <label htmlFor="slideCheck">
            {open ? (
              <MenuOpen fontSize="large" />
            ) : (
              <MenuIcon fontSize="large" />
            )}
          </label>
        </IconButton>
      </div>
    </>
  );
};

export default Slide;
