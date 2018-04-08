import React from 'react'
import PropTypes from 'prop-types'

const DownloadButton = ( props ) => {
  return (
    <div className="label-style flex-end">{props.label} 
      <a className="download-button" href={props.href} download={props.fileName}>{props.buttonText}</a>
    </div>
  )
}

DownloadButton.propTypes = {
    label: PropTypes.string,
    buttonText: PropTypes.string,
    href: PropTypes.string,
    fileName: PropTypes.string
}

export default DownloadButton