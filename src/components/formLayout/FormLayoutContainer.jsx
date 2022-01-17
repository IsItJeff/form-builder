const FormLayoutContainer = ({fieldsData}) => {
    return(
        <div className="form-layout-container">      
            <div className="form-layout-main">
                {fieldsData.length > 0 ?
                    fieldsData.map((field, index)=>{
                        console.log(field)
                        if(Object.keys(field).length === 0){
                            return (<br key={index}/>)
                        }
                        return(
                            <div key={index}>
                                <input type={field.type} value={field.value} />
                            </div>
                        )
                    })
                : ""}
            </div>      
        </div>
    )
}

export default FormLayoutContainer;