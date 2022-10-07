import React from "react";
import { num_trans } from './list_item';
import TokenInfo from '../tokenInfo';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, registerables } from 'chart.js'
Chart.register(CategoryScale, ...registerables);

//임시 테스트용
const testData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purpole', 'Orange', 'Red', 'Blue', 'Yellow', 'Green', 'Purpole', 'Orange', 'Red', 'Blue', 'Yellow', 'Green', 'Purpole', 'Orange', 'Red', 'Blue', 'Yellow', 'Green', 'Purpole', 'Orange', 'Red', 'Blue', 'Yellow', 'Green', 'Purpole', 'Orange', 'Red', 'Blue', 'Yellow', 'Green', 'Purpole', 'Orange', 'Red', 'Blue', 'Yellow', 'Green', 'Purpole', 'Orange', 'Red', 'Blue', 'Yellow', 'Green', 'Purpole', 'Orange', 'Red', 'Blue', 'Yellow', 'Green', 'Purpole', 'Orange', 'Red', 'Blue', 'Yellow', 'Green', 'Purpole', 'Orange', 'Red', 'Blue', 'Yellow', 'Green', 'Purpole', 'Orange'],
    datasets: [
        {
            data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
        },
    ],
};

function TopTradeItem({ item, ticker, chartData }) {
    chartData = chartData[ticker]?.data.filter((el, idx) => idx > 2980);
    const data = {
        labels: chartData ? chartData.map((el) => el[0]) : [],
        datasets: [
            {
                data: chartData ? chartData.map((el) => el[2]) : [],
            }
        ]

    }

    return (
        <CoinBox>
            <div className="top5-list-item-box">
                <div className="top5-list-item">
                    <dl className="jump">
                        <dt className="name">
                            {TokenInfo[ticker].name}
                        </dt>
                        <dd className="price">
                            ₩ {num_trans(item?.closing_price, true)}
                        </dd>
                        <dd className="rate">
                            <span className="btn" >
                                {item?.chg_Amt && Number(item?.chg_Amt) !== 0
                                    ? item?.chg_Amt > 0
                                        ? <i className="fa fa-caret-up"></i>
                                        : <i className="fa fa-caret-down"></i>
                                    : <></>}
                                {item?.chg_Rate ? num_trans(item.chg_Rate) : 0}%
                            </span>
                        </dd>
                    </dl>
                    <ChartWrap>
                        <Bar data={data} />
                    </ChartWrap>
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
const ChartWrap = styled.div`
width: 95%;
height: 100px;
`