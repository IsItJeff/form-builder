import { InputTypes }  from "./InputOptionFunctions";

const InputOptionContainer = ({setFieldsData,fieldsData,fieldData}) => {
    
    const addInputField = (val) => {
        setFieldsData([...fieldsData, val])
        console.log(fieldsData)
    }

    return(
        <div className="input-option-container">
            <div>
                Select an input type:
            </div>
            {InputTypes.map((input, index) => {
                return(
                    <button key={input.type} className="input-option-btn" onClick={() => {addInputField(input.functionCall())}}>
                        {input.type}
                    </button>
            )})}
        </div>
    )
}

export default InputOptionContainer;