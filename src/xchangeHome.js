import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import XchangeTable from "./currencyXchange";
import XchangeRates from "./xchangeRates";
const MyXchange = ({ addNewCurrency, allCurrency, handleAllChanges, handleEquivalent }) => {
    let [currOne, setCurrOne] = useState('')
    let [currTwo, setCurrTwo] = useState('')
    let [xchangRate, setRate] = useState('')
    let [currId, setId] = useState(0)
    let [amount, setAmount] = useState('')
    let [equivalent, setEquivalent] = useState(0)
    let [newCurrOne, setNewCurrOne] = useState('')
    let [newCurrTwo, setNewCurrTwo] = useState('')
    let [newXchangRate, setNewRate] = useState('')

    const handleAddCurrency = () => {
        let newId = currId
        setId(newId + 1)
        if (currOne && currTwo && xchangRate) {
            let newCurrency = { currOne, currTwo, xchangRate, editRow: false, currId, equivalent }
            addNewCurrency(newCurrency)
            setCurrOne('')
            setCurrTwo('')
            setRate('')
        }
    }

    const handleChanges = (type, currId) => {
        let data = { newCurrOne, newCurrTwo, newXchangRate }
        if (newCurrOne && newCurrTwo && newXchangRate) {
            handleAllChanges(type, currId, data)
            setNewCurrOne('')
            setNewCurrTwo('')
            setNewRate('')
        }
        else { handleAllChanges(type, currId) }
    }

    return (<Container fluid className="currency-exchange">
        <Row className="currency-navbar">
            <Col lg={12}>
                <h1>Currency Exchange App</h1>
            </Col>
        </Row>

        <Row className="currency-introduction">
            <Col lg={12}>
                <p>
                    Welcome to the Currency Exchange App. Stay up-to-date with the latest exchange rates and manage your currencies with ease.
                </p>
            </Col>
        </Row>

        <Row className="justify-content-center align-items-center currency-input">
            <Col lg={2} md={2} sm={10} xs={10} className="text-center m-1">
                <input placeholder="currency" value={currOne} onInput={event => setCurrOne(event.target.value)} />
            </Col>
            <Col lg={2} md={2} sm={10} xs={10} className="text-center m-1">
                <input placeholder="currency" value={currTwo} onInput={event => setCurrTwo(event.target.value)} />
            </Col>
            <Col lg={2} md={2} sm={10} xs={10} className="text-center m-1">
                <input placeholder="rate" value={xchangRate} onInput={event => setRate(event.target.value)} />
            </Col>
            <Col lg={2} md={2} sm={10} xs={10} className="text-center m-1">
                <button onClick={handleAddCurrency}>ADD CURRENCY</button>
            </Col>
        </Row>

        {allCurrency.length > 0 &&
            <>
                <Row className="justify-content-evenly my-3 currency-table">
                    <Col lg={8} md={8} sm={10} xs={10} className="table-responsive">
                        <XchangeRates
                            newCurrOne={newCurrOne} newCurrTwo={newCurrTwo} newXchangRate={newXchangRate} allCurrency={allCurrency}
                            setNewCurrOne={setNewCurrOne} setNewCurrTwo={setNewCurrTwo} setNewRate={setNewRate} handleChanges={handleChanges} />
                    </Col >
                </Row>
                <Row className="justify-content-evenly my-3 currency-table">
                    <Col lg={8} md={8} sm={10} xs={10} className="table-responsive">
                        <XchangeTable allCurrency={allCurrency} amount={amount} handleEquivalent={handleEquivalent} equivalent={equivalent} />
                    </Col>
                </Row >
            </>}

        <footer>
            <Row className="d-flex justify-content-center">
                <Col lg={12} className="currencyfooter-col">
                    <p>&copy; 2023 Currency Exchange App. All Rights Reserved.</p>
                </Col>
            </Row>
        </footer>
    </Container >)
}
export default MyXchange;