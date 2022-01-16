import {useState} from "react";
import InputEditorContainer from "../inputEditor/InputEditorContainer";
import InputOptionContainer from "../inputOptions/InputOptionContainer";
import InputViewerContainer from "../inputViewer/InputViewerContainer";

const MainContainer = () => {
    const [fieldsData, setFieldsData] = useState([])
    
    return (
        <main>
            <InputOptionContainer setFieldsData={setFieldsData} fieldsData={fieldsData}/>
            <InputViewerContainer fieldsData={fieldsData}/>
            <InputEditorContainer />
        </main>
    )
}

export default MainContainer;