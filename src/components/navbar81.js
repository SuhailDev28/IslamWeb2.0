import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './navbar81.css'

const Navbar81 = (props) => {
  const [link5AccordionOpen, setLink5AccordionOpen] = useState(false)
  const [link5DropdownVisible, setLink5DropdownVisible] = useState(false)
  return (
    <header className={`navbar81-container ${props.rootClassName} `}>
      {link5DropdownVisible && (
        <div
          onClick={() => setLink5DropdownVisible(false)}
          className="navbar81-container1"
        ></div>
      )}
    </header>
  )
}

Navbar81.defaultProps = {
  rootClassName: '',
}

Navbar81.propTypes = {
  rootClassName: PropTypes.string,
}

export default Navbar81
