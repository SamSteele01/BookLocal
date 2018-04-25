import React from 'react';
import PropTypes from 'prop-types'

const SvgIcon = props => {
  const styles = {
    svg: {
      display: 'inline-block',
      // margin: '0 auto',
      verticalAlign: 'middle',
    },
    path: {
      fill: props.color,
    },
  };

  return (
    <svg
      style={styles.svg}
      aria-hidden="true"
      width={`${props.size}px`}
      height={`${props.size}px`}
      viewBox={props.viewBox}
    >
      <path
        fill={styles.path.fill}
        d={props.icon}
      ></path>
    </svg>
  );
};

SvgIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  viewBox: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};

SvgIcon.defaultProps = {
  viewBox: "0 0 1056 1056",
  size: 16,
  color: "currentColor"
};

export default SvgIcon;