import React, {useState} from 'react';
import TestBMI from './TestBMI';

const BMIMessage = (props) => {
    if((props.bmi <= 18.5) || (props.bmi <= 22.9)) {
        return <p>정상입니다</p>
    }
    if((props.bmi <= 18.5)){
        return <p>저체중입니다</p>    
    }
    if((props.bmi <= 23.0) || (props.bmi <= 24.9)) {
        return <p>과체중입니다</p>
    } else {
        return <p>비만</p>
    }
}

const conBMI = (w, k) => {
    return (k/(w/10 * w/10));
}

const tryCon = (w, k, convert) => {
    const w1 = parseFloat(w);
    const k1 = parseFloat(k);

    if((Number.isNaN(w1)) || (Number.isNaN(k1))){
        return '';
    }
    const output = convert(w1, k1);
    const rounded = (k1/(w1/10 * w1/10));
    return rounded.toString();
}

const BMI = (props) => {

    const [w, setW] = useState('');
    const [k, setK] = useState('');
    const [BMI, setBMI] = useState('');
    
    const handleWChange = (w) => {
        setW(w)
    }

    const handleBMIChange = (k) => {
        setK(k)
    }


    const bmi = tryCon(w, k);

    return (
        <div>
            <TestBMI k={k} w={w} onTempChange = {handleWChange}/>

            <BMIMessage BMI={bmi}/>
        </div>
    );
};


export default BMI;