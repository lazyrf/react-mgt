import React, {useRef, useEffect} from  'react';
import * as echarts from 'echarts';

const axisOption = {
    // 圖例文字顏色
    textStyle: {
        color: '#333',
    },
    // 提示框
    tooltip: {
        trigger: 'axis',
    },
    xAxis: {
        type: 'category', // 類別軸
        data: [],
        axisLine: {
            lineStyle: {
                color: '#17b3a3',
            },
        },
        axisLabel: {
            interval: 0,
            color: '#333',
        },
    },
    yAxis: [
        {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: "#17b3a3",
                },
            },
        },
    ],
    color: ['#2ec7c9', '#b6a2de', '#5ab1ef', '#ffb980', '#d87a80', '#8d98b3'],
    series: [],
};

const normalOption = {
    tooltip: {
        trigger: 'item',
    },
    color: [
        '#0f78f4',
        '#dd536b',
        '#9462e5',
        '#a6a6a6',
        '#e1bb22',
        '#39c362',
        '#3ed1cf',
    ],
    series: [],
};

const ECharts = ({style, chartData, isAxisChart = true}) => {
    const chartRef = useRef();
    const echartInstance = useRef(null);
    const initRef = useRef(false);

    useEffect(() => {
        let options;
        if (!initRef.current) {
            echartInstance.current = echarts.init(chartRef.current);
            initRef.current = true;
        }
        if(isAxisChart) {
            axisOption.xAxis.data = chartData.xData;
            axisOption.series = chartData.series;
            options = axisOption;
        } else{
            normalOption.series = chartData.series;
            options = normalOption;
        }
        echartInstance.current.setOption(options);
    }, [chartData.xData, chartData.series, isAxisChart]);

    return (
        <div style={style} ref={chartRef}>
        </div>
    );
};

export default ECharts;
