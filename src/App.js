import React, { useState, useEffect } from 'react';
import TopTrade from './component/top_trade';
import List from './component/list';
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
        <Logo src='../Githumb.png' alt='logo' />
      </Header>
      <Contents>
        <TopTrade />
        <List />
      </Contents>
    </Body>
  );
}

export default App;

//styled-components
const Body = styled.div`
font-family: 'Spoqa Han Sans Neo',Roboto,"Noto Sans KR",Arial,"Malgun Gothic",sans-serif;
display:flex;
flex-direction:column;
align-items: center;
`;
const Header = styled.div`
position: relative;
height: 100px;
width: 100%;
border-bottom: 1px solid rgba(0,0,0,0.1);
background-color: #333333;
color: white;
text-align: center;
`;
const Logo = styled.img`
height: 100%;
`;
const Contents = styled.div`
width: 1024px;
display: flex;
flex-direction: column;
`;