import React from "react"
import { Table } from "react-bootstrap"
const XchangeRates = ({ newCurrOne, allCurrency, newCurrTwo, newXchangRate, setNewCurrOne, setNewCurrTwo, setNewRate, handleChanges }) => {
    return (<Table striped bordered>
        <thead>
            <tr>
                <th className="text-center">Currency</th>
                <th className="text-center">Currency</th>
                <th className="text-center">Rate</th>
                <th className="text-center"></th>
            </tr>
        </thead>
        <tbody>
            {allCurrency.map((curr, index) =>
            (<tr key={index} >
                <td className="text-center">
                    {!curr.editRow ?
                        <span>
                            {curr.currOne}
                        </span>
                        : <input value={newCurrOne} onInput={(e) => setNewCurrOne(e.target.value)} />}
                </td>
                <td className="text-center">
                    {!curr.editRow ?
                        <span>
                            {curr.currTwo}
                        </span>
                        : <input value={newCurrTwo} onInput={(e) => setNewCurrTwo(e.target.value)} />}
                </td>
                <td className="text-center">
                    {!curr.editRow ?
                        <span>
                            {curr.xchangRate}
                        </span>
                        : <input value={newXchangRate} onInput={(e) => setNewRate(e.target.value)} />}
                </td>
                <td className="d-flex justify-content-around">
                    {!curr.editRow ?
                        <>
                            <button onClick={() => handleChanges('edit', curr.currId)}>edit</button>
                            <button onClick={() => handleChanges('delete', curr.currId)}> delete</button>
                        </>
                        :
                        <>
                            <button onClick={() => handleChanges('save', curr.currId)} > save</button>
                            <button onClick={() => handleChanges('cancel', curr.currId)} > cancel</button>
                        </>
                    }
                </td>

            </tr>))}
        </tbody>
    </Table>)
}
export default XchangeRates