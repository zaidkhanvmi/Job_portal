// 1. Choose the type of chart you need
// Create a simple chart by using plain javascript data: an array of objects.
import { Line, LineChart } from 'recharts';

const margin = {
    top: 20,
    right: 20,
    bottom: 5,
    left: 0,
}

// Sample data
const data = [
    {
        name: 'Page A',
        uv: 400,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 300,
        pv: 4567,
        amt: 2400,
    },
    {
        name: 'Page C',
        uv: 320,
        pv: 1398,
        amt: 2400,
    },
    {
        name: 'Page D',
        uv: 200,
        pv: 9800,
        amt: 2400,
    },
    {
        name: 'Page E',
        uv: 278,
        pv: 3908,
        amt: 2400,
    },
    {
        name: 'Page F',
        uv: 189,
        pv: 4800,
        amt: 2400,
    },
];

const solarSystem = [
    {
        name: 'Sun',
        orbitalDistanceKm: 0,
        radiusKm: 696340,
        massKg: 1.989e30,
        fill: '#ffa700',
    },
    {
        name: 'Mercury',
        orbitalDistanceKm: 5.791e7,
        radiusKm: 2439.7,
        massKg: 3.3e23,
        fill: '#1a1a1a',
    },
    {
        name: 'Venus',
        orbitalDistanceKm: 1.082e8,
        radiusKm: 6051.8,
        massKg: 4.87e24,
        fill: '#e3bb76',
    },
    {
        name: 'Earth',
        orbitalDistanceKm: 1.496e8,
        radiusKm: 6371,
        massKg: 5.97e24,
        fill: '#6b93d6',
    },
    {
        name: 'Mars',
        orbitalDistanceKm: 2.279e8,
        radiusKm: 3389.5,
        massKg: 6.42e23,
        fill: '#993d00',
    },
    {
        name: 'Jupiter',
        orbitalDistanceKm: 7.786e8,
        radiusKm: 69911,
        massKg: 1.9e27,
        fill: '#b07f35',
    },
    {
        name: 'Saturn',
        orbitalDistanceKm: 1.4335e9,
        radiusKm: 58232,
        massKg: 5.68e26,
        fill: '#b08f36',
    },
    {
        name: 'Uranus',
        orbitalDistanceKm: 2.8725e9,
        radiusKm: 25362,
        massKg: 8.68e25,
        fill: '#5580aa',
    },
    {
        name: 'Neptune',
        orbitalDistanceKm: 4.4951e9,
        radiusKm: 24622,
        massKg: 1.02e26,
        fill: '#366896',
    },
    {
        name: 'Pluto',
        orbitalDistanceKm: 5.9064e9,
        radiusKm: 1188.3,
        massKg: 1.3e22,
        fill: '#968570',
    },
];
// #endregion

export function Step1() {
    return (
        <LineChart className="no-focus-border" style={{ width: '100%', aspectRatio: 1.618, maxWidth: 600 }} responsive data={data}>
            <Line dataKey="uv" />
        </LineChart>
    );
}

// 2. Add more components
// LineChart can have XAxis, YAxis, Legend, CartesianGrid and more.
import { CartesianGrid, Legend, XAxis, YAxis } from 'recharts';
// 3. Adjust the props of your components

export function Step2() {
    return (
        <LineChart
            // margin={{
            //     top: 20,
            //     right: 20,
            //     bottom: 5,
            //     left: 0,
            // }}
            style={{ width: '100%', aspectRatio: 1.618, maxWidth: 600 }} responsive data={data}>
            <CartesianGrid stroke="#aaa" strokeDasharray="5" strokeOpacity='0.7' />
            <Line type="monotone" dataKey="uv" />
            <XAxis dataKey="name" />
            <YAxis />
            <Legend align="center" />
        </LineChart>
    );
}

// 4. Add interactions
// Add a Tooltip component to display information when hovering over your chart.
import { Tooltip } from 'recharts';

export function Step3() {
    return (
        <LineChart
            style={{ width: '100%', aspectRatio: 1.618, maxWidth: 600 }}
            responsive
            data={data}
            margin={margin}
        >
            <CartesianGrid stroke="#aaa" strokeDasharray="5 5" strokeOpacity="0.5" />
            <Line type="monotone" dataKey="uv" stroke="#4d179a" strokeWidth={2} name="My data series name" />
            <XAxis dataKey="name" />
            <YAxis width="auto" label={{ value: 'UV', position: 'insideLeft', angle: -90 }} />
            <Legend align="right" />
            <Tooltip />
        </LineChart>
    );
}
// ===================== xxx =====================
// Customize
// 1. Labels of line, area, bar, axis can be customized
import { Bar, BarChart, } from 'recharts';

const formatAxisTick = (value) => {
    return `*${value}*`;
};
const renderCustomBarLabel = ({ x, y, width, value }) => {
    return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>{`value: ${value}`}</text>;
};

export function CustomizeLabels() {
    return (
        <BarChart style={{
            width: '100%',
            maxWidth: '600px',
        }} height={300} data={data} margin={margin}>
            <XAxis
                dataKey="name"
                tickFormatter={formatAxisTick}
                label={{ position: 'insideBottomRight', value: 'XAxis title', offset: -10 }}
            />
            <YAxis label={{ position: 'insideTopLeft', value: 'YAxis title', angle: -90, dy: 60 }} />
            <Bar dataKey="uv" fill="#8884d8" label={renderCustomBarLabel} />
            <Tooltip />
        </BarChart>
    );
}

// 2. The shape of bar can be customized
// The props shape of <Bar /> can be set to be a function or a react element to render customized shape.

const getPath = (x, y, width, height) =>
    `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
   Z`;

export function TriangleBar(props) {
    const { fill, x, y, width, height } = props;

    if (x == null || y == null || width == null || height == null) {
        return null;  // Return null if no rendering is needed
    }

    return <path d={getPath(Number(x), Number(y), Number(width), Number(height))} stroke="none" fill={fill} />;
}

export function CustomizeBarShape() {
    return (
        <BarChart style={{ maxWidth: "600px" }} height={300} data={data} margin={margin}>
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="uv" fill="#8884d8" shape={TriangleBar} />
            <Tooltip />
        </BarChart>
    );
}

// Axis domain and scale show the planet scale in recharts
export function MassBarChart() {
    return (
        <BarChart
            style={{
                width: '100%',
                maxWidth: '600px',
                maxHeight: '80vh',
                aspectRatio: 1.618,
            }}
            responsive
            data={solarSystem}
        >
            <XAxis dataKey="name" />
            <YAxis width="auto" label={{ value: 'Mass [kg]', position: 'insideLeft', dx: 0, dy: 20, angle: -90 }} />
            <Bar dataKey="massKg" unit="kg" />
            <Tooltip />
        </BarChart>
    );
}