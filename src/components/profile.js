import React from "react";
import * as actions from "../actions/index"
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'


class Profile extends React.Component {
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

  componentDidMount(){
    console.log('users - ',this.props.users)
    console.log('users - ',this.props.current_user)
  }

  displayUser = () => {
    if (this.props.current_user){
      console.log(this.props.current_user)
    }
    if (this.props.current_user.current_user) {
      return ( <div>

        <h3>Hey {this.props.current_user.current_user.firstname} {this.props.current_user.current_user.lastname}! Welcome back to Cottage, where you can buy or sell home baked meals to other locals.</h3>

        <h5>Please use the above navigation to plan your next sale or purchase. </h5>


        </div>
      )
    }
  }



  render() {
    return (
      <div>

      {this.displayUser()}

      </div>
    );
  }

}


const mapStateToProps = state => {
    return {
      current_user: state.users.current_user
    }
  }

export default withRouter(connect(mapStateToProps, actions)(Profile));
