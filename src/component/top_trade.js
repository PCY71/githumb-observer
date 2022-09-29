import React from "react";
import TopTradeItem from './top_trade_Item';
import styled from 'styled-components';

function TopTrade() {
    const test1 = {
        ticker: "BOA",
        name: "보아",
        price: 65.02,
        rate: 16.57
    };
    const test2 = {
        ticker: "VALOR",
        name: "밸러토큰",
        price: 340.3,
        rate: 4.10
    };
    const test3 = {
        ticker: "REQ",
        name: "리퀘스트",
        price: 153.9,
        rate: 7.25
    };
    const test4 = {
        ticker: "ACH",
        name: "알케미페이",
        price: 17.69,
        rate: 5.42
    };
    const test5 = {
        ticker: "MKR",
        name: "메이커",
        price: 1067000,
        rate: 5.12
    };
    return (
        <Top5ListWrap>
            <Title>
                마켓 변동률 TOP5
            </Title>
            <Top5ListBox>
                <Top5List>
                    <TopTradeItem item={test1} />
                    <TopTradeItem item={test2} />
                    <TopTradeItem item={test3} />
                    <TopTradeItem item={test4} />
                    <TopTradeItem item={test5} />
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