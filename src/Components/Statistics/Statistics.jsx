import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { Area, AreaChart, Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";


const Statistics = () => {

    const gadgets = useLoaderData()
    console.log(gadgets)
    const { price } = gadgets


    return (
        <>
            <Helmet>
                <title>Statistics | Gadget Haven</title>
            </Helmet>
            <div className="bg-base-200 p-10  ">
                <p className="text-3xl font-bold lg:mx-40">Statistics</p>
                <div className="mt-10  bg-white rounded-2xl ">

                    <ResponsiveContainer width="100%" height={450} >

                        <BarChart width={1400} height={450} data={gadgets} className=" p-4 lg:p-10">
                            <Bar type="monotone" dataKey="price" fill="purple" stroke="#8884d8" barSize={50} />
                            <XAxis stroke="" dataKey="product_title"></XAxis>
                            <YAxis stroke=""></YAxis>
                        </BarChart>

                    </ResponsiveContainer>

                </div>
            </div>
        </>
    );
};

export default Statistics;