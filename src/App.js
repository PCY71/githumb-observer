import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


function App() {
  /* State 목록
    market : KRW - 원화마켓, BTC - BTC마켓 (initial: 원화마켓)
    tokens : 정보를 보여줄 토큰목록 (initial: BTC, ETH, KLAY, BNB, SOL)
   */
  const [market, setMarket] = useState('KRW');
  const [tokens, setTokens] = useState([]);

  //초기 데이터 로드
  useEffect(() => {

  }, [])
  return (
    <Body>
      <Header>
        <Logo src='../Githumb.png' alt='로고' />
      </Header>
      <Contents>
        변동률
        {market}
        리스트
      </Contents>
    </Body>
  );
}

export default App;

//styled-components
const Body = styled.div`
font-family: 'Spoqa Han Sans Neo',Roboto,"Noto Sans KR",Arial,"Malgun Gothic",sans-serif;
`;
const Header = styled.div`
position: relative;
height: 100px;
border-bottom: 1px solid rgba(0,0,0,0.1);
background-color: #333333;
color: white;
text-align: center;
`;
const Contents = styled.div`
`;
const Logo = styled.img`
height: 100%;
`;