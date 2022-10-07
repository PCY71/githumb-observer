import React from "react";
import styled from 'styled-components';
import TokenInfo from '../tokenInfo';

function ListItem({ item, ticker }) {
    let color = '#000000'

    if (item?.chg_Amt > 0) {
        color = '#f75467'
    } else if (item?.chg_Amt < 0) {
        color = '#4386f9'
    }

    return (
        <Table>
            <colgroup>
                <col width={200} />
                <col width={200} />
                <col width={200} />
                <col width={200} />
                <col width={200} />
            </colgroup>
            <tbody className="coin_list">
                <tr className="coin">
                    <td>
                        <CoinBox>
                            <p>
                                <strong>{TokenInfo[ticker].name}</strong>
                                <span className="sort_coin">{ticker}/KRW</span>
                            </p>
                        </CoinBox>
                    </td>
                    <td>
                        <RealBox>
                            <strong>{num_trans(item?.closing_price, true)}원</strong>
                        </RealBox>
                    </td>
                    <td>
                        <Rate color={color}>
                            {item?.chg_Amt ? num_trans(item.chg_Amt) : 0}원 ({item?.chg_Rate ? num_trans(item.chg_Rate) : 0}%)
                            {item?.chg_Amt && Number(item?.chg_Amt) !== 0
                                ? item?.chg_Amt > 0
                                    ? <i className="fa fa-caret-up"></i>
                                    : <i className="fa fa-caret-down"></i>
                                : <></>}

                        </Rate>
                    </td>
                    <td>
                        <PrevPrice>
                            {num_trans(item?.prev_closing_price, true)}원
                        </PrevPrice>
                    </td>
                    <td>
                        <CoinAsset>
                            ≈ {num_trans(item?.acc_trade_value_24H, true)}원
                        </CoinAsset>
                    </td>
                </tr>
            </tbody>
        </Table >
    )
}
const num_trans = (num = '0', deleteSign = false) => {
    const num_trans_reg = /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g

    if (num.includes('.')) {
        const [int, dec] = num.split('.');
        num = int + '.' + dec.slice(0, 2);
    }

    if (num.includes('-')) {
        num = '-' + num.slice(1);
    } else if (Number(num) > 0) {
        num = '+' + num;
    }
    num = deleteSign ? num.slice(1) : num;
    return num.replace(num_trans_reg, ',')
}

export { ListItem, num_trans };

const Table = styled.table`
width: 100%;
    border-collapse: collapse;
td{
    border-bottom: 1px solid #d3d3d3;
    padding: 10px;
}
i{
    margin-left:5px;
}
`
const CoinBox = styled.div`
p{
    display: flex;
    flex-direction: column;
    span{
        color: grey;
        font-size: small;
    }
}
`
const RealBox = styled.div`
float: right;

`
const Rate = styled.div`
float:right;
color : ${(props) => props.color}
`
const PrevPrice = styled.span`
float:right;
`
const CoinAsset = styled.span`
font-size: small;
float:right;
`