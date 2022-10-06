import React from "react";
import { num_trans } from './list_item';
import TokenInfo from '../tokenInfo';
import styled from 'styled-components';

function TopTradeItem({ item, ticker }) {
    return (
        <CoinBox>
            <div className="top5-list-item-box">
                <div className="top5-list-item">
                    <dl className="jump">
                        <dt className="name">
                            {TokenInfo[ticker].name}
                        </dt>
                        <dd className="price">
                            {num_trans(item?.closing_price, true)}
                        </dd>
                        <dd className="rate">
                            <span className="btn">
                                {item?.chg_Amt
                                    ? item?.chg_Amt > 0
                                        ? <i className="fa fa-caret-up"></i>
                                        : <i className="fa fa-caret-down"></i>
                                    : <></>}
                                {item?.chg_Amt ? num_trans(item.chg_Amt) : 0}원 ({item?.chg_Rate ? num_trans(item.chg_Rate) : 0}%)
                            </span>
                        </dd>
                        <dd className="chart">
                            미니차트
                        </dd>
                    </dl>
                </div>
            </div>
        </CoinBox>
    )
}

export default TopTradeItem;

const CoinBox = styled.li`
width: 200px;
i{
    margin-right: 5px;
}
`