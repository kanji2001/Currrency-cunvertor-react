import {React,  useEffect, useState } from 'react'

const UseCurrencyInfo = (currency) => {

    const [item, setItem] = useState({});

    useEffect (() => {
      fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => setItem(res[currency]))
      console.log(item)
    }, [currency] )
    console.log(item)
  return item;
}

export default UseCurrencyInfo
