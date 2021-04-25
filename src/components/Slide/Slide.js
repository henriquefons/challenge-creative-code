import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import './Slide.css';
import { IconButton, InputBase } from '@material-ui/core';
import { MenuOpen } from '@material-ui/icons';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SlideItens from './Itens/SlideItens';

const Slide = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <input type="checkbox" id="slideCheck" />
      <div className="slide">
        <div className="slide__change">
          <InputBase className="slide__search" placeholder="Search…" />
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
        <div className="slide__itens">
          <SlideItens
            icon={<AccountCircleIcon fontSize="large" />}
            name="Perfil"
          />
          <SlideItens
            icon={<PersonAddIcon fontSize="large" />}
            name="Adicionar usuário"
          />
          <SlideItens icon={<ExitToAppIcon fontSize="large" />} name="Sair" />
        </div>
      </div>
    </>
  );
};

export default Slide;
