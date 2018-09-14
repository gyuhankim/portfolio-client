import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import { Document, Page } from 'react-pdf';

import resume from '../images/resume.pdf';

export default class Dashboard extends React.Component {

    render() {
        return (
          <div>
            <Document file={resume}>
              <Page pageNumber={1} />
            </Document>
          </div>
        );
    }
}
