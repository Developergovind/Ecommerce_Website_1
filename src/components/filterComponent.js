import React, { useState } from "react";
import { FilterProducts } from "../services/products";

function Filters() {
    const [minValue, setMinValue] = useState("");
    const [maxValue, setmaxValue] = useState("");
    function getminValue(e) {
        const minValue = e.target.value
        console.log(minValue)
        setMinValue(minValue)
    }

    function getMaxValue(e) {
        const maxValue = e.target.value
        setmaxValue(maxValue)
    }
 
    const handleSubmit = async () =>
    {
        const data =  await FilterProducts(minValue,maxValue)  
        console.log(data)
        localStorage.setItem("filteredData",JSON.stringify(data))
    }
    
    return (

        <React.Fragment>

            <button
                type="button"
                className="btn btn-info btn-lg"
                data-toggle="modal"
                data-target="#myModal"
            ><span class="material-symbols-outlined">
                    filter_alt
                </span>
                Filter
            </button>
            <div className="container">
                {/* Trigger the modal with a button */}
                {/* Modal */}
                <form action="" method="post">
                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">
                                    ×
                                </button>
                                <h4 className="modal-title">Filter Products</h4>
                            </div>
                            <div className="modal-body">
                                <h4>Filter by price</h4>
                                <input type="number" name="minvalue" min={0} value={minValue} placeholder="Min Value" onChange={getminValue}/>
                                <input type="number" name="maxvalue" min={0} value={maxValue} placeholder="Max Value" onChange={getMaxValue}/>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="submit"
                                    className="btn btn-success"
                                    data-dismiss="modal"
                                onClick={()=>{
                                    handleSubmit()
                                }}>
                                    Apply
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    data-dismiss="modal"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                </form>
            </div>

        </React.Fragment>
    );
}

export default Filters