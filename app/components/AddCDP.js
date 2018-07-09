// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

type Props = {
  addCdpIdToUser: (cpdId: string) => void
};

const StyledContainer = styled.div`
  float: right;
`;

const StyledButton = styled.button`
  background-color: #3c84ad;
  border-radius: 4px;
  color: #fff;
  border: none;
  height: 29px;
  line-height: 29px;
  padding: 0 20px;
`;

const StyledConnectedButton = StyledButton.extend`
  border-radius: 0 4px 4px 0;
`;

const StyledInput = styled.input`
  border: 1px solid #000;
  border-right: none;
  border-radius: 4px 0 0 4px;
  padding: 0px 10px;
  height: 27px;
  line-height: 2px;

  &:focus {
    outline: none;
  }
`;

export default class AddCDP extends Component<Props> {
  props: Props;

  state = {
    cpdId: ''
  };

  addCdpIdToUser() {
    this.props.addCdpIdToUser(this.state.cpdId);
    this.setState({ cpdId: '', open: false });
    const myNotification = new Notification('Yo', {
      body: 'New CDP Added'
    });
    myNotification.onclick = () => {
      console.log('Notification clicked');
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    return (
      <StyledContainer>
        {this.state.open ? (
          <div>
            <StyledInput
              type="text"
              placeholder="enter ID"
              value={this.state.cpdId}
              onChange={e => this.setState({ cpdId: e.target.value })}
            />
            <StyledConnectedButton onClick={() => this.addCdpIdToUser()}>
              Import
            </StyledConnectedButton>
          </div>
        ) : (
          <StyledButton onClick={this.handleOpen}>Import CDP</StyledButton>
        )}
      </StyledContainer>
    );
  }
}
