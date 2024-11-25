
import React, { useState } from "react";
import QRCode from "react-qr-code";


const QrcodeGen = ()=>{

    const[qrcode,setQrcode] = useState("")
    const[input,setInput]  = useState("")

    function handleGenerate(){

        setQrcode(input)
        setInput("")
    }

    return(

        <div>
            <h3>QR Code Generator</h3>
            <input onChange={(e)=>setInput(e.target.value)} placeholder="enter value" name="val" value={input}></input>
            <button disabled={input !== "" ? false : true}   onClick={handleGenerate}>generate</button>
            <div>
                <QRCode
                    id="qr-code-gen"
                    value={qrcode}
                    size={400}
                ></QRCode>
            </div>
        </div>
    )
}

export default QrcodeGen