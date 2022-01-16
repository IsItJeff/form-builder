const InputEditorContainer = ({setFieldsData, fieldsData}) => {
    const addRow = () =>{
        setFieldsData([...fieldsData, {}])
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