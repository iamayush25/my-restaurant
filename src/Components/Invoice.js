import React from 'react'
import "./style.css"

function Invoice() {

    return (
        <div id='invoice'>
            <div id='inner1'>
                <div className="h1"><h1>Ayush's Restaurant</h1><h1>INVOICE</h1></div>
                <table>
                    <tr><td className="td1"><h4>BILLED TO:</h4></td><td>Ayush Sharma</td></tr>
                    <tr><td className="td1"><h4>PAY TO:</h4></td><td>Ayush Sharma sr . 55  freeganj ujjain</td></tr>
                    <tr><td>Bank</td><td>Bank of India</td></tr>
                    <tr><td>Account Holder Name</td><td>Ayush Sharma</td></tr>
                    <tr><td>Account Number</td><td>0000 0000 0000</td></tr>
                </table>
            </div>

        </div>

  )
}

export default Invoice;
