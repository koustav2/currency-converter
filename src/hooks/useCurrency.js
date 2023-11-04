/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import axios from 'axios';

const useCurrency = (currency) => {
    const [currencydata, setCurrencydata] = useState({});
    useEffect(() => {
        axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((response) => {
                setCurrencydata(response.data[currency]);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [currency]);

    return currencydata;
}

export default useCurrency;