import { graphql, withPrefix } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { showDayDate } from '../components/utils';
import './event.scss';

const PAGE_TITLE = 'Archives | Figure Figure';

class EventsPage extends React.Component {
  constructor(props) {
    super(props);
    const data = props.data.allDataJson.edges[0].node;
    data.events.forEach((event) => {
      event.date = new Date(event.date);
      event.ref = React.createRef();
    });
    this.events = data.events.sort((a, b) => b.date - a.date);
    this.currentEvent = this.events.length ? this.events[this.events.length - 1] : undefined;
  }

  getImage(event) {
    const img = <img className="event-img" src={withPrefix(event.img)} alt={event.title} />;
    return event.pdf ? <a href={withPrefix(event.pdf)} target="_blank">{img}</a> : img;
  }

  getItem(event, i) {
    return (
      <li key={`event item ${i}`} onMouseEnter={this.showEvent.bind(this, event)}>
        <span className="event-descr">
          <span className="event-date">{showDayDate(event.date)}</span>
          <span className="event-title">
            {event.title.toUpperCase()}
            <br />
            {event.subtitle}
            <br />
            {event.pdf ? <a href={withPrefix(event.pdf)}>— Télécharger le communiqué de presse</a> : ''}
          </span>
        </span>
      </li>
    );
  }

  scroll(ref) {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  showEvent(event) {
    this.scroll(event.ref);
  }

  render() {
    return (
      <main className="row no-gutters">
        <Helmet title={PAGE_TITLE} />
        <div ref={this.imgList} className="col-md-6 vh-site event-img-grid">
          {this.events.map((event, i) => (
            <div ref={event.ref} key={`event img ${i}`}>
              {this.getImage(event)}
            </div>
          ))}
        </div>
        <div className="col-md-6 vh-site event-grid">
          <ul>
            {this.events.map((event, i) => this.getItem(event, i))}
          </ul>
        </div>
      </main>
    );
  }
}

export default EventsPage;

export const pageQuery = graphql`
  query {
    allDataJson {
      edges {
        node {
          events {
            title
            subtitle
            date
            img
            pdf
          }
        }
      }
    }
  }
`;
