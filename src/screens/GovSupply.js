import { useState, useEffect } from "react";
import Card from "../components/card";
import './GovSupply.css';
import BalanceChart from "../components/GovSupplyChart";

const GovSupply = () => {
    const [data, setData] = useState(null);
    const [total, setTotal] = useState(null);
    const [bal, setBal] = useState(null);
    const [chartData, setChartData] = useState(null);
    useEffect(() => {
        setData(true);

        const totalObj = {
        'Pants (Unisex) - Dark Blue' : 100,
        'Round Neck T-Shirt (Unisex) Short Sleeves - Red': 100,
        'Cap - Light Silver': 50,
        'T-Shirt (Unisex) Short Sleeves - Red': 200,
        'Round Neck T-Shirt (Unisex) Short Sleeves - Gradient Purple': 400
        };

        const balObj = {
            'Pants (Unisex) - Dark Blue' : 50,
            'Round Neck T-Shirt (Unisex) Short Sleeves - Red': 30,
            'Cap - Light Silver': 10,
            'T-Shirt (Unisex) Short Sleeves - Red': 70,
            'Round Neck T-Shirt (Unisex) Short Sleeves - Gradient Purple': 250
        };

        setTotal(totalObj);
        setBal(balObj);
        setChartData(Object.keys(totalObj).map(item => ({
            name: item,
            balance: balObj[item],
            distributed: totalObj[item] - balObj[item]
        })));
    }, [])
    if (!data) return <div>Loading...</div>;
    return (
        <div className="govSupply-container">
            <div className="breakdown-card">
                <Card>
                    <div className="breakdown-header">Items</div>
                    <div className="breakdown">
                        {Object.keys(total).map(key => (
                            <div>
                                <div>{key}</div>
                                <div>{bal[key]}/{total[key]}</div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
            <div className="chart-card">
                <Card>
                    <BalanceChart data={chartData} />
                </Card>
            </div>
        </div>
    )
}

export default GovSupply;