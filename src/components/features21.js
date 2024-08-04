import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features21.css'

const Features21 = (props) => {
  return (
    <div className="features21-layout349 thq-section-padding">
      <div className="features21-max-width thq-section-max-width thq-grid-auto-300">
        <div className="features21-container thq-card thq-flex-column">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="features21-image thq-img-round thq-img-ratio-1-1"
          />
          <h2>
            {props.feature1Title ?? (
              <Fragment>
                <h2 className="features21-text14 thq-heading-2">
                  User-Friendly Interface
                </h2>
              </Fragment>
            )}
          </h2>
          <span>
            {props.feature1Description ?? (
              <Fragment>
                <span className="features21-text13 thq-body-small">
                  Intuitive design for easy navigation
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="features21-container1 thq-card thq-flex-column">
          <img
            alt={props.feature2ImageAlt}
            src={props.feature2ImageSrc}
            className="features21-image1 thq-img-round thq-img-ratio-1-1"
          />
          <h2>
            {props.feature2Title ?? (
              <Fragment>
                <h2 className="features21-text11 thq-heading-2">
                  Advanced Security
                </h2>
              </Fragment>
            )}
          </h2>
          <span>
            {props.feature2Description ?? (
              <Fragment>
                <span className="features21-text10 thq-body-small">
                  Top-notch encryption to protect your data
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="features21-container2 thq-card thq-flex-column">
          <img
            alt={props.feature3ImageAlt}
            src={props.feature3ImageSrc}
            className="features21-image2 thq-img-round thq-img-ratio-1-1"
          />
          <h2>
            {props.feature3Title ?? (
              <Fragment>
                <h2 className="features21-text12 thq-heading-2">
                  24/7 Customer Support
                </h2>
              </Fragment>
            )}
          </h2>
          <span>
            {props.feature3Description ?? (
              <Fragment>
                <span className="features21-text09 thq-body-small">
                  Dedicated team available round the clock
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="features21-container3 thq-card thq-flex-column">
          <img
            alt={props.feature4ImageAlt}
            src={props.feature4ImageSrc}
            className="features21-image3 thq-img-round thq-img-ratio-1-1"
          />
          <h2>
            {props.feature4Title ?? (
              <Fragment>
                <h2 className="features21-text08 thq-heading-2">
                  Customizable Options
                </h2>
              </Fragment>
            )}
          </h2>
          <span>
            {props.feature4Description ?? (
              <Fragment>
                <span className="features21-text15 thq-body-small">
                  Tailor the settings to suit your needs
                </span>
              </Fragment>
            )}
          </span>
        </div>
      </div>
    </div>
  )
}

Features21.defaultProps = {
  feature2ImageAlt: 'Advanced Security Image',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjc4OTMwOXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature4Title: undefined,
  feature3Description: undefined,
  feature4ImageAlt: 'Customizable Options Image',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1436262513933-a0b06755c784?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjc4OTMwOXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageAlt: 'User-Friendly Interface Image',
  feature2Description: undefined,
  feature2Title: undefined,
  feature3ImageAlt: '24/7 Customer Support Image',
  feature3Title: undefined,
  feature1Description: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1692930946355-dd03b2e89acf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjc4OTMwOXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Title: undefined,
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1711719725628-01b349628b1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjc4OTMxMHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature4Description: undefined,
}

Features21.propTypes = {
  feature2ImageAlt: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature4Title: PropTypes.element,
  feature3Description: PropTypes.element,
  feature4ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature2Description: PropTypes.element,
  feature2Title: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature3Title: PropTypes.element,
  feature1Description: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature1Title: PropTypes.element,
  feature4ImageSrc: PropTypes.string,
  feature4Description: PropTypes.element,
}

export default Features21
