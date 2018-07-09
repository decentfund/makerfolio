// @flow
import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import CDPHistory from "./CDPHistoryPage";
import { removeCdpIdFromUser } from "../actions/user";
import CDPStatistics from "./CDPStatistics";

type Props = {
  removeCdpIdFromUser: (cpdId: string) => void,
  feedCDP: {
    loading: boolean,
    error: ?Object,
    getCup?: {
      art: string,
      ink: string,
      ratio: string,
      pip: string,
      tab: string,
      id: number
    }
  },
  match: {
    params: {
      id: string
    }
  }
};

const StyledDeleteButton = styled.button`
  background: rgba(0, 0, 0, 0.07);
  padding: 6px 10px;
  color: #d03434;
  border: 0px;
  border-radius: 4px;
  position: absolute;
  right: 0px;
  bottom: 0px;
`;

class CDPDetailPage extends Component<Props> {
  props: Props;

  static contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.shape({
        push: PropTypes.func.isRequired,
        replace: PropTypes.func.isRequired
      }).isRequired,
      staticContext: PropTypes.object
    }).isRequired
  };

  handleDeleteCdpClick = () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    this.props.removeCdpIdFromUser(id);
    this.context.router.history.push("/");
  };

  render() {
    if (this.props.feedCDP && this.props.feedCDP.loading) {
      return <div>Loading</div>;
    }

    if (this.props.feedCDP && this.props.feedCDP.error) {
      return <div>Error</div>;
    }

    if (
      this.props.feedCDP.getCup === null ||
      this.props.feedCDP.getCup === undefined
    )
      return <div>Error</div>;

    const { id } = this.props.feedCDP.getCup;
    return (
      <div style={{ position: "relative" }}>
        <CDPHistory id={id} />
        <CDPStatistics id={id} />
        <StyledDeleteButton onClick={this.handleDeleteCdpClick}>
          Remove CDP {id}
        </StyledDeleteButton>
      </div>
    );
  }
}

export const FEED_CDP = gql`
  query feedCDP($id: Int!) {
    getCup(id: $id) {
      art
      block
      deleted
      id
      idx
      guy
      ink
      ire
      lad
      pip
      per
      ratio
      tab
      time
      actions {
        totalCount
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
      }
    }
  }
`;

export default connect(null, { removeCdpIdFromUser })(
  graphql(FEED_CDP, {
    name: "feedCDP",
    options: ({
      match: {
        params: { id }
      }
    }) => ({ variables: { id: parseInt(id, 10) } })
  })(CDPDetailPage)
);
