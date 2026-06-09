import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    LabelList,
} from "recharts";

import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import UserNames from "./UserNames";


export default function Dashboard() {
    const [chartData, setChartData] = useState([]);
    const [data, setData] = useState([]);
    const [totalEmails, setTotalEmails] = useState(0);
    const [totalOpened, setTotalOpened] = useState(0);
    const [clickRate, setClickRate] = useState(0);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/analytics")
            .then((res) => res.json())
            .then((data) => setChartData(data));
    }, []);

    useEffect(() => {
        fetch("http://localhost:8000/analytics")
            .then((res) => res.json())
            .then((data) => {
                setData(data);

                const totalEmails = data.reduce(
                    (sum, item) => sum + item.emails,
                    0
                );

                const totalOpened = data.reduce(
                    (sum, item) => sum + item.opened,
                    0
                );

                const clickRate = data.reduce(
                    (sum, item) => sum + item.click_rate,
                    0
                ) / data.length;

                setTotalEmails(totalEmails);
                setTotalOpened(totalOpened);
                setClickRate(clickRate);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <>
            <h1 className="text-3xl font-bold mb-6 text-center">
                Email Analytics Dashboard
            </h1>

            {/* Summary Cards */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">

                <div className="bg-white rounded-xl shadow p-4">
                    <UserNames/>
                </div>

                <div className="bg-white rounded-xl shadow p-6">
                    <h3 className="text-gray-500">Total Emails</h3>
                    <p className="text-4xl font-bold">
                        {totalEmails}
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow p-4">
                    <h3 className="text-gray-500">Opened</h3>
                    <p className="text-3xl font-bold">{totalOpened}</p>
                </div>

                <div className="bg-white rounded-xl shadow p-4">
                    <h3 className="text-gray-500">Avg Click Rate</h3>
                    <p className="text-3xl font-bold">{clickRate.toFixed(1)}%</p>
                </div>

                

            </div>

            {/* Charts */}
            <div className="grid lg:grid-cols-2 gap-6">
                {/* Bar Chart */}
                <div className="bg-white p-4 rounded-xl shadow">
                    <h2 className="text-xl font-semibold mb-4">
                        Emails vs Opened
                    </h2>

                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={chartData}>
                            <XAxis dataKey="month" fontSize={16} />
                            <YAxis fontSize={16} />
                            <Tooltip contentStyle={{ fontSize: '16px' }}
                                labelStyle={{ fontSize: '16px', fontWeight: 'bold' }}
                                itemStyle={{ fontSize: '16px' }} />
                            <Bar dataKey="emails" fill="#8884d8" />
                            <Bar dataKey="opened" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Line Chart */}
                <div className="bg-white p-4 rounded-xl shadow">
                    <h2 className="text-xl font-semibold mb-4">
                        Click Rate Trend
                    </h2>

                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" fontSize={16} />
                            <YAxis fontSize={16} />
                            <Tooltip contentStyle={{ fontSize: '16px' }}
                                labelStyle={{ fontSize: '16px', fontWeight: 'bold' }}
                                itemStyle={{ fontSize: '16px' }} />
                            <Line
                                type="monotone"
                                dataKey="click_rate"
                                stroke="#8884d8"
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>




        </>
    );
}