'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  BarShapeProps,
  LabelList,
  Label,
  LabelProps,
  Tooltip,
} from 'recharts';
import React, { useContext } from 'react';
import { BooksContext } from '@/Context/BooksContext';

const colors = [
  '#23BE0A',
  '#59C6D2',
  '#FFAC33',
  '#00C49F',
  '#FF8042',
  '#8884D8',
  '#328EFF',
  '#FF6B6B',
  '#41B883',
];

const getPath = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};


const TriangleBar = (props: BarShapeProps) => {
  const { x, y, width, height, index } = props;

  const color = colors[index % colors.length];

  return (
    <path
      strokeWidth={props.isActive ? 5 : 0}
      d={getPath(Number(x), Number(y), Number(width), Number(height))}
      stroke={color}
      fill={color}
      style={{
        transition: 'stroke-width 0.3s ease-out',
      }}
    />
  );
};


const CustomColorLabel = (props: LabelProps) => {
  const fill = colors[(props.index ?? 0) % colors.length];
  return <Label {...props} fill={fill} />;
};


const Chart = () => {
    const {readBooks} = useContext(BooksContext)
    const data = readBooks
    return (
        <div className='w-full flex justify-center items-center'>
    <BarChart
        style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
        responsive
        data={data}
        margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 5,
      }}
    >
        <CartesianGrid />
        <Tooltip cursor={{ fillOpacity: 0.5 }} />
        <XAxis dataKey="bookName" />
        <YAxis width="auto" />
        <Bar dataKey="totalPages" shape={TriangleBar} activeBar>
            <LabelList content={CustomColorLabel} position="top" />
        </Bar>
    </BarChart>
    </div>
    );
};

export default Chart;