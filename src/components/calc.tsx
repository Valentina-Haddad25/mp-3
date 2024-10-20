import { useState } from "react";

export const useCalculator = () => {
    const [num1, setNum1] = useState<string>("");
    const [num2, setNum2] = useState<string>("");
    const [result, setResult] = useState<string>("Result:");
    const [color, setColor] = useState<string>("hotpink");

    const getNum = () => {
        return {
            num1: parseFloat(num1) || 0,
            num2: parseFloat(num2) || 0
        };
    };


    const displayResult = (res: number | string) => {
        setResult(`Result: ${res}`);
        setColor(typeof res === "number" && res < 0 ? "red" : "hotpink");
    };

    const add = () => {
        const { num1, num2 } = getNum();
        const res = num1 + num2;
        displayResult(res);
    };

    const sub = () => {
        const { num1, num2 } = getNum();
        const res = num1 - num2;
        displayResult(res);
    };

    const multiplication = () => {
        const { num1, num2 } = getNum();
        const res = num1 * num2;
        displayResult(res);
    };

    const division = () => {
        const { num1, num2 } = getNum();
        if (num2 !== 0) {
            const res = num1 / num2;
            displayResult(res);
        } else {
            displayResult("ERROR! You cannot divide by 0! BLAH!");
        }
    };

    const power = () => {
        const { num1, num2 } = getNum();
        let res = 1;
        for (let i = 0; i < num2; i++) {
            res *= num1;
        }
        displayResult(res);
    };

    const clearCalc = () => {
        setNum1("");
        setNum2("");
        setResult("Result:");
        setColor("hotpink");
    };

    return {
        num1,
        setNum1,
        num2,
        setNum2,
        result,
        color,
        add,
        sub,
        multiplication,
        division,
        power,
        clearCalc,
    };
};
