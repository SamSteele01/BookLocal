import React from 'react';
import { connect } from 'react-redux';
import { push as pushAction, replace as replaceAction } from './actions';

const Link = (props) => {
  const { to, replace, children, dispatch, ...other } = props;
  const handleClick = (event) => {
    // Ignore any click other than a left click
    if ((event.button && event.button !== 0)
      || event.metaKey
      || event.altKey
      || event.ctrlKey
      || event.shiftKey
      || event.defaultPrevented === true) {
      return;
    } 
    // Prevent the default behaviour (page reload, etc.)
    event.preventDefault();
    // Dispatch the appropriate navigation action
    if (replace) {
      dispatch(replaceAction(to));
    } else {
      dispatch(pushAction(to));
    }
  };
  return (
    <a href={to} onClick={handleClick} {...other}>
      {children}
    </a>);
};
export default connect()(Link);