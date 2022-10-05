import React from "react";
import styled from 'styled-components';
import TokenInfo from '../tokenInfo';

function ListItem({ item, ticker }) {
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
                        <div className="sort_coin_box">
                            <p>
                                <strong>{TokenInfo[ticker].name}</strong>
                                <span className="sort_coin">{ticker}/KRW</span>
                            </p>
                        </div>
                    </td>
                    <td>
                        <div className="sort_real_box">
                            <strong>{item?.closing_price}원</strong>
                        </div>
                    </td>
                    <td className="rate">
                        <div>
                            {item?.chg_Amt ? item.chg_Amt : 0} 원({item?.chg_Rate ? item.chg_Rate : 0}%)
                        </div>
                    </td>
                    <td>
                        <span className="assettotal">
                            {item?.prev_closing_price}
                        </span>
                    </td>
                    <td>
                        <span>≈ {item?.acc_trade_value_24H} 원</span>
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
`