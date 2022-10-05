import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import TokenInfo from './tokenInfo';
import TopTrade from './component/top_trade';
import List from './component/list';
import styled from 'styled-components';


function App() {
  /* State 목록
  connected : 웹소켓 연결
  ticker별 웹소켓에서 받아오는 data : 토큰들 실시간 정보
  tokens : 토큰들 정적인 정보 
  status	결과 상태 코드 각 필드 참조(https://apidocs.bithumb.com/reference/%ED%98%84%EC%9E%AC%EA%B0%80-%EC%A0%95%EB%B3%B4-%EC%A1%B0%ED%9A%8C-all)
  */
  const [connected, setConnected] = useState(false);
  const [wsData, setWsData] = useState([]);
  const [tokens, setTokens] = useState([]);

  const webSocketUrl = 'wss://pubwss.bithumb.com/pub/ws';
  const apiGetUrl = 'https://api.bithumb.com/public/ticker/ALL_KRW';
  let ws = useRef(null);

  const symbols = Object.keys(TokenInfo).map((el) => `${el}_KRW`);

  //테스트용
  const test = {
    "type": "ticker",
    "symbols": symbols,
    "tickTypes": ["30M"]
  };

  //소켓 객체 및 토큰 정보 초기화
  useEffect(() => {
    const getInfo = async () => {
      try {
        const res = await axios.get(apiGetUrl);
        setTokens(res.data.data);
      } catch (e) {
        console.log('something went wrong :( ', e);
      }
    };

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
        setWsData(data);
      }
    }

    getInfo();
  }, []);

  //소켓이 연결되면 send
  useEffect(() => {
    if (connected) {
      ws.current.send(JSON.stringify(test));
    }
  }, [connected]);

  //새로 데이터가 들어오면 token 정보 갱신
  useEffect(() => {
    const data = wsData.content;
    console.log(data);
    if (data) {
      const symbol = data.symbol.split('_')[0];
      let tempObj = tokens;
      tempObj[symbol].closing_price = data.closePrice;
      tempObj[symbol].chg_Amt = data.chgAmt;
      tempObj[symbol].chg_Rate = data.chgRate;
      setTokens(tempObj);
    }
  }, [wsData]);

  return (
    <Body>
      <Header>
        <Logo src='../Githumb.png' alt='logo' />
      </Header>
      <Contents>
        <TopTrade />
        <List tokens={tokens} />
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
position: fixed;
top: 0;
left: 0;
right: 0;
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
padding-top: 100px;
width: 1024px;
display: flex;
flex-direction: column;
`;