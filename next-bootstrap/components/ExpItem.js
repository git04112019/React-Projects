import React, { Component } from 'react';
import { 
  Button,
  Collapse
 } from 'react-bootstrap';



export default class ExpItem extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }

  render(props) {
    const { open } = this.state;

    return (
        <div className="service-box">
          <div className="service-ico">
            <span className="ico-circle"><i className="{props.icon}" /></span>
          </div>
          <div className="service-content">
            <h2 className="s-titles">
              {props.textD}
            </h2>
            <Button
              onClick={() => this.setState({ open: !open })}
              aria-controls="{props.target}"
              aria-expanded={open}
              className="s-description text-center"
            >
              Learn more
            </Button>
            <Collapse in={this.state.open}>
              <p id="{props.target}" className="s-description text-center">
                {/* {props.text} */}
              </p>
            </Collapse>
          </div>
        </div>
    )
  }
}
