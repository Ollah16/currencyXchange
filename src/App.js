import logo from './logo.svg';
import './App.css';
import MyXchange from './xchangeHome';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  let [allCurrency, setCurr] = useState('')

  const addNewCurrency = (newCurrency) => {
    setCurr([...allCurrency, newCurrency])
  }

  const handleAllChanges = (type, currId, data) => {
    let spreadCurrency = [...allCurrency]
    switch (type) {
      case 'edit':
        spreadCurrency[currId].editRow = true
        break;
      case 'delete':
        spreadCurrency = spreadCurrency.filter((curr) => curr.currId != currId)
        break;
      case 'save':
        let { newCurrOne, newCurrTwo, newXchangRate } = data
        spreadCurrency[currId].currOne = newCurrOne
        spreadCurrency[currId].currTwo = newCurrTwo
        spreadCurrency[currId].xchangRate = newXchangRate
        spreadCurrency[currId].editRow = false
        break;
      case 'cancel':
        spreadCurrency[currId].editRow = false
        break;
    }
    setCurr(spreadCurrency)
  }

  const handleEquivalent = (e, currId) => {
    let spreadCurr = [...allCurrency]
    spreadCurr[currId].equivalent = spreadCurr[currId].xchangRate * e
    setCurr(spreadCurr)
  }

  return (
    <MyXchange allCurrency={allCurrency} addNewCurrency={addNewCurrency} handleAllChanges={handleAllChanges} handleEquivalent={handleEquivalent} />
  );
}

export default App;
