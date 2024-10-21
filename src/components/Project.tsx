import React from "react";
import { useCalculator } from "./calc";

const Project: React.FC = () => {
    const {
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
    } = useCalculator();

    return (
        <div className="cal-div">
            <h1 id="pageWrapperHeading">Projects</h1>

            <div className="calculator-container">

                <h2 className="CalculatorProjHeading">Cotton Candy Calculator</h2>
                <div className="PageWrapperCalc">
                    <label htmlFor="first-number">First Number:</label>
                    <input
                        id="first-number"
                        type="number"
                        value={num1}
                        onChange={(e) => setNum1(e.target.value)}
                    />

                    <label htmlFor="second-number">Second Number:</label>
                    <input
                        id="second-number"
                        type="number"
                        value={num2}
                        onChange={(e) => setNum2(e.target.value)}
                    />

                    <div className="buttons">
                        <button onClick={add}>+</button>
                        <button onClick={sub}>-</button>
                        <button onClick={multiplication}>×</button>
                        <button onClick={division}>÷</button>
                        <button onClick={power}>**</button>
                        <button onClick={clearCalc}>Clear</button>
                    </div>

                    <div id="output-box">
                        <h3 id="output" style={{color}}>{result}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
            };

            export default Project;
