import React, { useState, useEffect, useRef } from 'react';
import TopTrade from './component/top_trade';
import List from './component/list';
import styled from 'styled-components';


function App() {
  /* State 목록
  추가 예정
    market : KRW - 원화마켓, BTC - BTC마켓 (initial: 원화마켓)
    tokens : 토큰들 정보 (initial: BTC, ETH, KLAY, BNB, SOL)
   */
  const [connected, setConnected] = useState(false);
  const [tokens, setTokens] = useState([]);

  const webSocketUrl = 'wss://pubwss.bithumb.com/pub/ws';
  let ws = useRef(null);

  //테스트용
  const test = {
    "type": "ticker",
    "symbols": ["BTC_KRW", "ETH_KRW"],
    "tickTypes": ["30M"]
  };

  //소켓 객체 생성
  useEffect(() => {
    if (!ws.current) {
      ws.current = new WebSocket(webSocketUrl);
      ws.current.onopen = () => {
        console.log("connected to" + webSocketUrl);
        setConnected(true);
      };
      ws.current.onclose = (error) => {
        console.log("disconnect from" + webSocketUrl);
        console.log(error);
      };
      ws.current.onerror = (error) => {
        console.log("connection error" + webSocketUrl);
        console.log(error);
      };
      ws.current.onmessage = (msg) => {
        const data = JSON.parse(msg.data);
        console.log(data);
        setTokens(data);
      }
    }

    return () => {
      //ws.current.close();
    };
  }, [])

  //소켓이 연결되면 send
  useEffect(() => {
    if (connected) {
      ws.current.send(JSON.stringify(test));
    }
  }, [connected]);

  return (
    <Body>
      <Header>
        <Logo src='../Githumb.png' alt='logo' />
        {//console.log(tokens)
        }
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
-webkit-user-drag: none;
`;
const Contents = styled.div`
width: 1024px;
display: flex;
flex-direction: column;
`;