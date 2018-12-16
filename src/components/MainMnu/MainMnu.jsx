import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import './MainMnu.css';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    padding: '0px',
  },
});

const links = [
  {
    to: '/',
    title: 'Главная',
  },
  {
    to: '/breeds',
    title: 'Породы',
  },
];

const MainMnu = ({ classes }) => (
  <nav className="navigation">
    {
      links.map(item => (
        <Button key={item.title} variant="contained" color="primary" className={classes.button}>
          <Link to={item.to}>{item.title}</Link>
        </Button>
      ))
    }
  </nav>
);
MainMnu.propTypes = {
  classes: PropTypes.shape({
    button: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles)(MainMnu);
