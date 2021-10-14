import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from '../components/Header';

const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: '100vw',
      minHeight: '100vh', 
      backgroundImage: 'url(https://images.creativemarket.com/0.1.0/ps/3326031/2560/1600/m1/fpnw/wm0/40-black-wood-background-textures-4-.jpg?1506571971&s=7bcd8c16078c2ad3276778ae5dabd3f7)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }
}));

export default function Contact() {
    const classses = useStyles();

    return (
      <div className={classses.root}>
       <CssBaseline/>
       <Header/>
       
      </div>
    )
}



