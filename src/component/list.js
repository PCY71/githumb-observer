import React from "react";
import styled from 'styled-components';
import ListItem from './list_item';
import TokenInfo from '../tokenInfo';

function List({ tokens }) {

    const list_rendering = () => {
        const result = [];
        for (const token in TokenInfo) {
            result.push(<ListItem item={tokens[token]} ticker={token} />)
        }

        return result;
    }

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
                            <span>변동률(30분)</span>
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
            {list_rendering()}
        </>
    )
}

export default List;

const TableHead = styled.table`
position:sticky;
top: 100px;
th{
    background-color: #f9f9f9
}
`
