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

    const num_trans = (num = '0') => {
        if (num.includes('.')) {
            const [int, dec] = num.split('.');
            num = int + '.' + dec.slice(0, 2);
        }

        const num_trans_reg = /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g
        return num.replace(num_trans_reg, ',')
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
                            <strong>{num_trans(item?.closing_price)}원</strong>
                        </RealBox>
                    </td>
                    <td>
                        <Rate color={color}>
                            {item?.chg_Amt > 0 ? '+' : ''} {item?.chg_Amt ? num_trans(item.chg_Amt) : 0} 원( {item?.chg_Rate > 0 ? '+' : ''} {item?.chg_Rate ? item.chg_Rate : 0}%)
                            {item?.chg_Amt
                                ? item?.chg_Amt > 0
                                    ? <i class="fa fa-caret-up"></i>
                                    : <i class="fa fa-caret-down"></i>
                                : <></>}

                        </Rate>
                    </td>
                    <td>
                        <PrevPrice>
                            {num_trans(item?.prev_closing_price)} 원
                        </PrevPrice>
                    </td>
                    <td>
                        <CoinAsset>
                            ≈ {num_trans(item?.acc_trade_value_24H)} 원
                        </CoinAsset>
                    </td>
                </tr>
            </tbody>
        </Table >
    )
}

export default ListItem;

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
float:right;
`