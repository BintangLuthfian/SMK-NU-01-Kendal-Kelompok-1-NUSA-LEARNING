import { useState } from "react";


function Coba() {
    const [name, setName] = useState("")
    const [order_id, setOrder_id] = useState("")
    const [total, setTotal] = useState(0)

    const process = async () => {
        const data = {
            name: name,
            order_id: order_id,
            total: total
        }

        console.log(data)
    }
    return (
        <>
            <div className="bg-blue-400 text-red500">
              <input type="text" label="Nama" value={name} onChange={(e) => setName(e.target.value)}/>
              <input type="text" label="Order_id" value={order_id} onChange={(e) => setOrder_id(e.target.value)}/>
              <input type="number" label="Total" value={total} onChange={(e) => setTotal(e.target.value)}/>

              <button onClick={process}>
                Proses
              </button>
            </div>
        </>
    )
}

export default Coba;