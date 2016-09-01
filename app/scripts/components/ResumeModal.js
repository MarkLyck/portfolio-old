import React from 'react'
import _ from 'underscore'
import PDFObject from 'pdfobject'

import store from '../store'

const ResumeModal = React.createClass({
  componentDidMount() {
    PDFObject.embed("/assets/Mark_Lyck_resume.pdf", "#resume-modal");
  },
  closeModal(e) {
    console.log('close modal');
    if (_.toArray(e.target.classList).indexOf('resume-modal-container') > -1) {
      store.settings.history.push('/')
    }
  },
  render() {
    return (
      <div className="resume-modal-container" onClick={this.closeModal}>
        <div id="resume-modal"></div>
      </div>
    )
  }

})


export default ResumeModal
