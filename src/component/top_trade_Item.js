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

    let color = '#000000'

    if (item?.chg_Amt > 0) {
        color = '#f75467'
    } else if (item?.chg_Amt < 0) {
        color = '#4386f9'
    }

    return (
        <CoinBox color={color}>
            <div className="top5-list-item-box">
                <div className="top5-list-item">
                    <dl className="jump">
                        <dt className="name">
                            {TokenInfo[ticker].name}
                        </dt>
                        <Price>
                            {num_trans(item?.closing_price, true)}
                        </Price>
                        <Rate>
                            <span className="btn" >
                                {item?.chg_Amt && Number(item?.chg_Amt) !== 0
                                    ? item?.chg_Amt > 0
                                        ? <i className="fa fa-caret-up"></i>
                                        : <i className="fa fa-caret-down"></i>
                                    : <></>}
                                {item?.chg_Rate ? num_trans(item.chg_Rate) : 0}%
                            </span>
                        </Rate>
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
dd{
    color : ${(props) => props.color};
    margin-inline-start: 0;
}
`
const Price = styled.dd`
font-size: x-large;
font-weight: bold;
`
const Rate = styled.dd`
`
const ChartWrap = styled.div`
width: 95%;
height: 100px;
`