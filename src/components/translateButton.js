import React, { useContext } from 'react';
import { withNamespaces } from 'react-i18next';
import Fab from '@material-ui/core/Fab';
import PropTypes from 'prop-types';

import { RootContext } from '../store';


const TranslateButton = (props) => {
  const { i18n, className } = props;

  const { state, dispatch } = useContext(RootContext);

  console.log(props);

  const changeLanguage = () => {
    dispatch({ type: 'changeLanguage' });
    i18n.changeLanguage(state.currentLanguage);
  };

  return (
    <Fab className={className} color="primary" aria-label="change language" onClick={() => changeLanguage()}>
      {state.currentLanguage}
    </Fab>
  );
};

TranslateButton.propTypes = {
  i18n: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  className: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
};

export default withNamespaces()(TranslateButton);
