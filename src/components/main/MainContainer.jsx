import {useState} from "react";
import InputEditorContainer from "../inputEditor/InputEditorContainer";
import InputOptionContainer from "../inputOptions/InputOptionContainer";
import InputViewerContainer from "../inputViewer/InputViewerContainer";


const fieldData = {
    
}

const MainContainer = () => {
    const [fieldsData, setFieldsData] = useState([])
    
    return (
        <main>
            <InputOptionContainer  
                setFieldsData={setFieldsData} 
                fieldsData={fieldsData}
                fieldData={fieldData}/>
            <InputViewerContainer fieldsData={fieldsData}/>
            <InputEditorContainer 
                setFieldsData={setFieldsData} 
                fieldsData={fieldsData}
                fieldData={fieldData}/>
        </main>
    )
}

export default MainContainer;