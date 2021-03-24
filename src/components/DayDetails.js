import React from 'react'

export default function DayDetails(props) {
    return (
        <div className="card-group border rounded-pill my-3 text-center dayDetails " style={{ minHeight: "50px", backgroundColor: "rgb(17, 102, 199)", color: "white", boxShadow: "10px 8px 10px #888888" }}>
            {   props.periodsTemp.map((peried, index) => <div className="card-body " >
                <h6 className="card-title" >{perieds[index]}</h6>
                <h6 className="card-text " >-------</h6>
                <h6 className="card-text" >{peried} <sup>o</sup></h6>
            </div>)}

        </div>
    )
}
const perieds = ["1 AM", "3 AM", "6 AM", "9 AM", "12PM", "3 PM", "6 PM", "9 PM", "12 PM"]

