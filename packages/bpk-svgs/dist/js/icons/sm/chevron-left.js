import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...this.props}><path d="M3.8 9l6.5-7.5c.5-.6 1.5-.7 2.1-.1.6.5.7 1.5.1 2.1L8.1 8.7c-.1.1-.1.5 0 .6l4.5 5.2c.5.6.5 1.6-.1 2.1-.3.3-.6.4-1 .4s-.8-.2-1.1-.5L3.8 9z" /></svg>;
  }

}