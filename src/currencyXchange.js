import React from "react"
import { Table } from "react-bootstrap"
const XchangeTable = ({ allCurrency, handleEquivalent, equivalent, amount }) => {
    return (
        <Table bordered striped className="currency-table">
            <thead>
                <tr>
                    <th className="text-center">Amount</th>
                    <th className="text-center">Currency</th>
                    <th className="text-center">Currency</th>
                    <th className="text-center">Equivalent</th>
                </tr>
            </thead>
            <tbody>
                {allCurrency.map((curr, index) => (
                    <tr key={index}>
                        <td className="text-center"><input placeholder="amount" onInput={(e) => handleEquivalent(e.target.value, curr.currId)} /></td>
                        <td className="text-center">{curr.currOne}</td>
                        <td className="text-center">{curr.currTwo}</td>
                        <td className="text-center"><span>{curr.equivalent}</span></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}
export default XchangeTable