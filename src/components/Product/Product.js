import React from 'react';
export default class Link extends React.Component {

  render() {
    return (
      <div>{
        //eslint-disable-next-line react/jsx-no-target-blank
        }<a href='https://flexport.com' target='_blank'>foo</a>
      </div>
    );
  }
}
