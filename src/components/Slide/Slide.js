import React, { useContext, useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import './Slide.css';
import { IconButton, InputBase } from '@material-ui/core';
import { MenuOpen } from '@material-ui/icons';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import SlideItens from './Itens/SlideItens';
import StoreContext from '../Store/context';

const Slide = () => {
  const [open, setOpen] = useState(false);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  const logout = () => {
    setToken(null);
  };

  const changePage = (route) => {
    if (history.location.pathname !== route) {
      if (open) {
        const checkbox = document.getElementById('slideCheck');
        checkbox.checked = false;
        setOpen(false);
      }
      history.push(route);
    }
  };

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
            action={() => changePage('/usuario')}
          />
          <SlideItens
            icon={<PersonAddIcon fontSize="large" />}
            name="Adicionar usuário"
            action={() => changePage('/usuario/cadastrar')}
          />
          <SlideItens
            icon={<SearchIcon fontSize="large" />}
            name="Listar usuários"
            action={() => changePage('/usuario/listar')}
          />
          <SlideItens
            icon={<ExitToAppIcon fontSize="large" />}
            name="Sair"
            action={() => logout()}
          />
        </div>
      </div>
    </>
  );
};

export default Slide;
