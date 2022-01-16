import InputEditorContainer from "../inputEditor/InputEditorContainer";
import InputOptionContainer from "../inputOptions/InputOptionContainer";
import InputViewerContainer from "../inputViewer/InputViewerContainer";

const MainContainer = () => {
    return (
        <main>
            <InputOptionContainer />
            <InputViewerContainer />
            <InputEditorContainer />
        </main>
    )
}

export default MainContainer;