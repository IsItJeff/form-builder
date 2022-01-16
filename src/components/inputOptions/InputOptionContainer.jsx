
const InputOptionContainer = () => {
    const inputTypes = [
        {type:"button"},
        {type:"checkbox"},
        {type:"color"},
        {type:"date"},
        {type:"datetime-local"},
        {type:"email"},
        {type:"file"},
        {type:"hidden"},
        {type:"image"},
        {type:"month"},
        {type:"number"},
        {type:"password"},
        {type:"radio"},
        {type:"range"},
        {type:"reset"},
        {type:"search"},
        {type:"submit"},
        {type:"tel"},
        {type:"text"},
        {type:"time"},
        {type:"url"},
        {type:"week"}
    ]

    return(
        <div>
            <div>
                Select an input type:
            </div>
            {inputTypes.map((input,index) => {
                return(
                    <button key={input.type}>
                        {input.type}
                    </button>
            )})}
        </div>
    )
}

export default InputOptionContainer;