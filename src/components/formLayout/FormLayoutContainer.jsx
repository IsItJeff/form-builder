const FormLayoutContainer = ({fieldsData}) => {
    return(
        <div className="form-layout-container">
            
            <div className="form-layout-main">
                {fieldsData.length > 0 ?
                    fieldsData.map((field, index)=>{
                        return(
                            <div key={index}>
                                1
                            </div>
                        )
                    })
                : ""}
            </div>      
        </div>
    )
}

export default FormLayoutContainer;