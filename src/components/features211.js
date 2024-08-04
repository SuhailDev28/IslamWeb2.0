import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features211.css'

const Features211 = (props) => {
  return (
    <div className="features211-layout349 thq-section-padding">
      <div className="features211-max-width thq-section-max-width thq-grid-auto-300">
        <div className="features211-container thq-card thq-flex-column">
          <h2>
            {props.feature4Title1 ?? (
              <Fragment>
                <h2 className="features211-text08 thq-heading-2">
                  <span>Tickets </span>
                  <span>طلبات الخدمة</span>
                </h2>
              </Fragment>
            )}
          </h2>
          <span>
            {props.feature4Description1 ?? (
              <Fragment>
                <span className="features211-text11 thq-body-small">
                  <br></br>
                  <span>عبد السلام الراجحي - A</span>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <span></span>
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="features211-container1 thq-card thq-flex-column">
          <h2>
            {props.feature4Title14 ?? (
              <Fragment>
                <h2 className="features211-text23 thq-heading-2">
                  <span>Consultation </span>
                  <span>الاستشارات</span>
                </h2>
              </Fragment>
            )}
          </h2>
          <span>
            {props.feature4Description14 ?? (
              <Fragment>
                <span className="features211-text26 thq-body-small">
                  <br></br>
                  <span>عبد السلام الراجحي - A</span>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <span></span>
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="features211-container2 thq-card thq-flex-column">
          <h2>
            {props.feature4Title143 ?? (
              <Fragment>
                <h2 className="features211-text41 thq-heading-2">
                  Articles المقالات
                </h2>
              </Fragment>
            )}
          </h2>
          <span>
            {props.feature4Description143 ?? (
              <Fragment>
                <span className="features211-text42 thq-body-small">
                  <span>عبد السلام الراجحي . E</span>
                  <br></br>
                  <br></br>
                  <span>عبد السلام الراجحي - 1</span>
                  <br></br>
                  <br></br>
                  <span>عبد السلام الراجحي - G</span>
                  <br></br>
                  <br></br>
                  <span>عبد السلام الراجحي - S</span>
                  <br></br>
                  <br></br>
                  <span>
                    عبد السلام الراجحي - F
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="features211-container3 thq-card thq-flex-column">
          <h2>
            {props.feature4Title141 ?? (
              <Fragment>
                <h2 className="features211-text38 thq-heading-2">
                  <span>Fatwa </span>
                  <span>الفتوى</span>
                </h2>
              </Fragment>
            )}
          </h2>
          <span>
            {props.feature4Description1431 ?? (
              <Fragment>
                <span className="features211-text56 thq-body-small">
                  <span>عبد السلام الراجحي . E</span>
                  <br></br>
                  <br></br>
                  <span>عبد السلام الراجحي - 1</span>
                  <br></br>
                  <br></br>
                  <span>عبد السلام الراجحي - G</span>
                  <br></br>
                  <br></br>
                  <span>عبد السلام الراجحي - S</span>
                  <br></br>
                  <br></br>
                  <span>
                    عبد السلام الراجحي - F
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </Fragment>
            )}
          </span>
        </div>
      </div>
    </div>
  )
}

Features211.defaultProps = {
  feature4Title1: undefined,
  feature4Description1: undefined,
  feature4Title14: undefined,
  feature4Description14: undefined,
  feature4Title141: undefined,
  feature4Title143: undefined,
  feature4Description143: undefined,
  feature4Description1431: undefined,
}

Features211.propTypes = {
  feature4Title1: PropTypes.element,
  feature4Description1: PropTypes.element,
  feature4Title14: PropTypes.element,
  feature4Description14: PropTypes.element,
  feature4Title141: PropTypes.element,
  feature4Title143: PropTypes.element,
  feature4Description143: PropTypes.element,
  feature4Description1431: PropTypes.element,
}

export default Features211
