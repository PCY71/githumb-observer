import React from "react";
import TopTradeItem from './top_trade_Item';
import styled from 'styled-components';

function TopTrade({ tokens, chartData }) {
    return (
        <Top5ListWrap>
            <Title>
                마켓 거래량 TOP5
            </Title>
            <Top5ListBox>
                <Top5List>
                    <TopTradeItem item={tokens.BTC} ticker={"BTC"} chartData={chartData} />
                    <TopTradeItem item={tokens.ETH} ticker={"ETH"} chartData={chartData} />
                    <TopTradeItem item={tokens.BNB} ticker={"BNB"} chartData={chartData} />
                    <TopTradeItem item={tokens.XRP} ticker={"XRP"} chartData={chartData} />
                    <TopTradeItem item={tokens.ADA} ticker={"ADA"} chartData={chartData} />
                </Top5List>
            </Top5ListBox>
        </Top5ListWrap>
    )

}
export default TopTrade;

const Top5ListWrap = styled.div`
`
const Top5ListBox = styled.div`
`
const Title = styled.h2`
`
const Top5List = styled.ul`
list-style:none;
display:flex;
justify-content: space-around;
`