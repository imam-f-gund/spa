import React, { Component } from 'react'

export class Spinner extends Component {
  render() {
    return (
      <div>
        <div className="text-center w-75 mx-auto mt-50">
          <div className="d-flex justify-content-center">
              <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Spinner
