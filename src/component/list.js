import React from "react";
import styled from 'styled-components';
import ListItem from './list_item';

function List({ tokens }) {
    return (
        <>
            <TableHead>
                <colgroup>
                    <col width={200} />
                    <col width={200} />
                    <col width={200} />
                    <col width={200} />
                    <col width={200} />
                </colgroup>
                <thead>
                    <tr>
                        <th>
                            <span>자산</span>
                        </th>
                        <th>
                            <span>실시간 시세</span>
                        </th>
                        <th>
                            <span>변동률</span>
                        </th>
                        <th>
                            <span>전일종가</span>
                        </th>
                        <th>
                            <span>거래금액(24H)</span>
                        </th>
                    </tr>
                </thead>
            </TableHead>
            <div className="chart_wrap"></div>
            <ListItem item={tokens.BTC} ticker={"BTC"} />
            <ListItem item={tokens.ETH} ticker={"ETH"} />
            <ListItem item={tokens.ETC} ticker={"ETC"} />
            <ListItem item={tokens.XRP} ticker={"XRP"} />
        </>
    )
}

export default List;

const TableHead = styled.table`
th{
    background-color: #f9f9f9
}
`
