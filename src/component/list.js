import React from "react";
import styled from 'styled-components';
import ListItem from './list_item';

function List() {
    const test1 = {
        name: '리플',
        ticker: 'XRP',
        cur_price: 648.3,
        change_price: 18.1,
        change_rate: 2.9,
        trade_amount: 88006025412,
        total_amount: '32조 1162억'
    };
    const test2 = {
        name: '비트코인',
        ticker: 'BTC',
        cur_price: 27931000,
        change_price: 27000,
        change_rate: 0.04,
        trade_amount: 92628732023,
        total_amount: '533조 7562억'
    };
    const test3 = {
        name: '이더리움',
        ticker: 'ETH',
        cur_price: 1926000,
        change_price: 18000,
        change_rate: 0.94,
        trade_amount: 52188550174,
        total_amount: '234조 8300억'
    };
    const test4 = {
        name: '이더리움 클래식',
        ticker: 'ETC',
        cur_price: 39680,
        change_price: 40,
        change_rate: 0.10,
        trade_amount: 16347059643,
        total_amount: '5조 4260억'
    };
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
                            <span>거래금액(24H)</span>
                        </th>
                        <th>
                            <span>시가총액</span>
                        </th>
                    </tr>
                </thead>
            </TableHead>
            <div class="chart_wrap"></div>
            <ListItem item={test1} />
            <ListItem item={test2} />
            <ListItem item={test3} />
            <ListItem item={test4} />
        </>
    )
}

export default List;

const TableHead = styled.table`
th{
    background-color: #f9f9f9
}
`
