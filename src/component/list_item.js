import React from "react";
import styled from 'styled-components';


function ListItem({ item }) {
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
                                <strong>{item.name}</strong>
                                <span className="sort_coin">{item.ticker}/KRW</span>
                            </p>
                        </div>
                    </td>
                    <td>
                        <div className="sort_real_box">
                            <strong>{item.cur_price}원</strong>
                        </div>
                    </td>
                    <td className="rate">
                        <div>
                            +{item.change_price} 원(+{item.change_rate}%)
                        </div>
                    </td>
                    <td>
                        <span>≈ {item.trade_amount} 원</span>
                    </td>
                    <td>
                        <span className="assettotal">
                            {item.total_amount}
                        </span>
                    </td>
                </tr>
            </tbody>
        </Table>
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