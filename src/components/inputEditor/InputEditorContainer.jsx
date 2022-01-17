const InputEditorContainer = ({setFieldsData, fieldsData , fieldData}) => {
    
    const addRow = () =>{
        setFieldsData([...fieldsData, fieldData])
    }

    
    return(
        <div className="input-editor-container">
            <h2>
                Editor Box
            </h2>
            <button onClick={()=>{addRow()}}>
                Add Row
            </button>
        </div>
    )
}

export default InputEditorContainer;