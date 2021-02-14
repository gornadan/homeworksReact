import React, {ChangeEvent} from "react";
import {makeStyles, Slider} from "@material-ui/core";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]


}

const myStyles = makeStyles({
    root: {
        width: 350,
    },
});
const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value
         // min, max, step = 1
    }
) => {
    // сделать самому, можно подключать библиотеки
    const handleChange = (event: ChangeEvent<{}>, newValue: number | number[]) => {
        onChangeRange && onChangeRange(newValue as [number,number]);
    };
    const classes = myStyles();
    return (
        <>
            <div className={classes.root}>
                <Slider value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"


                />
            </div>
        </>
    );
}

export default SuperDoubleRange;
