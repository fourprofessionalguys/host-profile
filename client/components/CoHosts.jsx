import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  line-height: 1.75;
  height: fit-content;

  @media only screen and (min-width: 1128px) {
    flex-basis: 66.667%;
    margin-left: 0px;
    margin-right: 0px;
  }
`;
const CoHostHeader = styled.div`
  font-size: 16px;
  font-weight: 800;
  margin-top: 32px;
`;
const CoHost = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
`;
const CoHostPic = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 28px;
`;
const CoHostInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  vertical-align: middle;
`;
const CoHostName = styled.div`
  font-size: 16px;
  font-weight: 800;
`;
const CoHostDateJoined = styled.div`
  font - size: 16px;
  font - weight: 400;
  margin - top: 8px;
`;


export default function CoHosts(props) {
  const length = Object.keys(props.coHosts).length;
  let header = '';
  if (length === 1) {
    header = 'Co-host';
  } else if (length > 1) {
    header = 'Co-hosts';
  }

  const coHostsArray = [];
  for (let key in props.coHosts) {
    coHostsArray.push(props.coHosts[key])
  }
  return (
    <Container>
      <CoHostHeader>{header}</CoHostHeader>
      {coHostsArray.map((coHost, i) => {
        return (
          <CoHost key={i}>
            <CoHostPic className='co-host-picture' src={coHost.coHostUrl} />
            <CoHostInfo>
              <CoHostName className='co-host-name'>{coHost.coHostName}</CoHostName>
              <CoHostDateJoined className='co-host-date-joined'>Joined in {coHost.coHostDateJoined}</CoHostDateJoined>
            </CoHostInfo>
          </CoHost>
        );
      })}
    </Container>
  );
}