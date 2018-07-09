import styled from 'styled-components';

export const CDPHeaderContainer = styled.div`
  display: flex;
`;

export const CDPHeaderGroup = styled.div`
  display: flex;
  margin-right: 20px;
`;

export const CDPHeader = styled.div`
  width: 80px;

  line-height: 21px;

  font-size: 14px;

  color: rgba(0, 0, 0, 0.5);
`;

export const FirstColumn = styled.div`
  width: 80px;
`;

export const Column = styled.div`
  width: 86px;

  margin-right: 10px;
  text-align: right;
`;

export const OtherHeaders = styled.div`
  font-size: 14px;

  line-height: 21px;
  text-align: center;

  color: rgba(0, 0, 0, 0.5);

  margin-right: 10px;
`;

export const Label = styled.div`
  width: 86px;
  background: rgba(0, 0, 0, 0.07);
  border-radius: 4px;
`;

export const Currency = styled.div`
  text-align: right;
  font-size: 12px;
  line-height: initial;
  margin-top: 13px;
  margin-bottom: 5px;
`;

export const CDPId = FirstColumn.extend`
  -moz-font-feature-settings: 'onum';
  -ms-font-feature-settings: 'onum';
  -webkit-font-feature-settings: 'onum';
  font-feature-settings: 'onum';
`;

export const ListItem = CDPHeaderContainer.extend`
  line-height: 24px;
  padding-bottom: 16px;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  &:not(:first-child) {
    padding-top: 16px;
  }
`;
