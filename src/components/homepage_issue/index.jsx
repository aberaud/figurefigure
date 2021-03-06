import React from 'react';
import { withPrefix } from 'gatsby';

import './homepage_issue.scss';

class HomepageIssue extends React.Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.download = React.createRef();
    this.share = React.createRef();
    this.homepage = true;
    const latestIssue = props.issues && props.issues[0];
    this.currentIssue = latestIssue;
  }

  render() {
    return (
      <article className="vh-site issue--container">
        <a href={withPrefix(this.currentIssue.path)} target="_blank">
          <img className="issue--full-height" src={withPrefix(this.currentIssue.image_href)} alt={this.currentIssue.title} />
        </a>
        <a href={withPrefix(this.currentIssue.path)} target="_blank">
          <img className="issue--cover" src={withPrefix(this.currentIssue.bg_href)} alt={this.currentIssue.title} />
        </a>
      </article>
    );
  }
}

export default HomepageIssue;
