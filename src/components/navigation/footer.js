import React from "react";
// import { Modal, Button } from 'react-bootstrap';


class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };



  render() {
    return (
      <div className="header">
      <img alt="" src="https://www.fillmurray.com/200/300"></img>

      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Launch demo modal
      </button>


      <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>



      </div>
    );
  }

}

export default Footer
