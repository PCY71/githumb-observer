import React from "react";

function TopTradeItem({ item }) {
    return (
        <li id="boa">
            <div className="top5-list-item-box">
                <div className="top5-list-item">
                    <dl className="jump">
                        <dt className="name">
                            {item.name}({item.ticker})
                        </dt>
                        <dd className="price">
                            {item.price}
                        </dd>
                        <dd className="rate">
                            <span className="btn">
                                <i>
                                    아이콘
                                </i>
                                {item.rate > 0
                                    ? `+ ${item.rate}%`
                                    : `- ${item.rate}%`}
                            </span>
                        </dd>
                        <dd className="chart">
                            미니차트
                        </dd>
                    </dl>
                </div>
            </div>
        </li>
    )
}

export default TopTradeItem;