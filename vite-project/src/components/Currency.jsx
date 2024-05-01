import react from "react"
import { useState } from "react";
import "../css/currency.css"
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from "axios";


  function deneme(props){

    const [amount,setamount] = useState(0);
    const [fromselect,setfromselect] =useState("USD");
    const [toselect,settoselect] =useState("TRY");
    const [result,setresult] = useState(0);

    const exchange=async function(apikey){
        const response = await axios.get("https://api.freecurrencyapi.com/v1/latest?apikey="+apikey+"&base_currency="+fromselect);

        setresult((response.data.data[toselect]*amount).toFixed(2));

    }

    return(
        <div className="currency-div">

        <div className="title">
            <h3>Currency Converter</h3>
        </div>
        <div className="mainarea">
        <input value={amount}onChange={function(e){setamount(e.target.value)}} type="number" className="amount"></input>
        <select value={fromselect} onChange={(e)=>{setfromselect(e.target.value)}} className="from-currency-option">

                <option>TRY</option>
                <option>USD</option>
                <option>EUR</option>
        </select>
        <FaRegArrowAltCircleRight style={{fontSize:"30px",color:"black",marginRight:"10px"}} />

        <select value={toselect} onChange={(e)=>{settoselect(e.target.value)}} className="to-currency-option">
            <option>TRY</option>
            <option>USD</option>
            <option>EUR</option>
        </select>

        <input type="number" value={result} className="result"></input>

        </div>
        <div>
            <button onClick={(e)=>{exchange(props.apikey)}}>
                Convert
            </button>
        </div>

        </div>

    )

}
 
export default deneme
