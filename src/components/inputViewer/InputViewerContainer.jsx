import FormLayoutContainer from "../formLayout/FormLayoutContainer";

const InputViewerContainer = ({fieldsData}) => {
    return(
        <div className="input-viewer-container">
            <h2>
                Input Viewer
            </h2>
            <div className="input-viwer-main">
                <FormLayoutContainer fieldsData={fieldsData} />
            </div>
        </div>
    )
}

export default InputViewerContainer;