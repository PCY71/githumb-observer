import React from "react";

function TopTradeItem({ item }) {
    return (
        <li id="boa">
            <div class="top5-list-item-box">
                <div class="top5-list-item">
                    <dl class="jump">
                        <dt class="name">
                            {item.name}
                        </dt>
                        <dd class="price">
                            {item.price}
                        </dd>
                        <dd class="rate">
                            <span class="btn">
                                <i>
                                    아이콘
                                </i>
                                {item.rate > 0
                                    ? `+ ${item.rate}%`
                                    : `- ${item.rate}%`}
                            </span>
                        </dd>
                        <dd class="chart">
                            차트
                        </dd>
                    </dl>
                </div>
            </div>
        </li>
    )
}

export default TopTradeItem;