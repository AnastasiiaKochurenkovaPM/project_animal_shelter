import React, { useState } from "react";
import data from "./data";
import s from "./Filter.module.css";
import Plus from "./Plus.svg";
import Exit from "./exit.svg";

const FilterBar = (props) => {
    const [nameItem, setItems] = useState(data);
    return (
        <>
            <div className={s.value} onClick={() => setItems(!nameItem)}>
                {props.title}
                {nameItem ? <img src={Exit} /> : <img src={Plus} />}
            </div>
            {nameItem &&
            (props.point1 ? (
                <p className={s.p}>
                    <input type="checkbox" />
                    {props.point1}
                </p>
            ) : null)}
            {nameItem &&
            (props.point2 ? (
                <p className={s.p}>
                    <input type="checkbox" />
                    {props.point2}
                </p>
            ) : null)}
            {nameItem &&
            (props.point3 ? (
                <p className={s.p}>
                    <input type="checkbox" />
                    {props.point3}
                </p>
            ) : null)}
            {nameItem &&
            (props.point4 ? (
                <p className={s.p}>
                    <input type="checkbox" />
                    {props.point4}
                </p>
            ) : null)}
            {nameItem &&
            (props.point5 ? (
                <p className={s.p}>
                    <input type="checkbox" />
                    {props.point5}
                </p>
            ) : null)}
            {nameItem &&
            (props.point6 ? (
                <p className={s.p}>
                    <input type="checkbox" />
                    {props.point6}
                </p>
            ) : null)}
            {nameItem &&
            (props.point7 ? (
                <p className={s.p}>
                    <input type="checkbox" />
                    {props.point7}
                </p>
            ) : null)}
        </>
    );
};

export default FilterBar;
