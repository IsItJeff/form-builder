export const InputTypes = [
        {
            type:"button",
            functionCall: function(){
                return addButtonField()
            }
        },
        {
            
            type:"checkbox",
            functionCall: function(){
                return addCheckboxField()
            }
        },
        {
            type:"color",
            functionCall: function(){
                return addColorField()
            }
        },
        {
            type:"date",
            functionCall: function(){
                return addDateField()
            }
        },
        {   
            type:"datetime-local",
            functionCall: function(){
                return addDateTimeLocalField()
            }
        },
        {
            type:"email",
            functionCall: function(){
                return addEmailField()
            }
        },
        {
            type:"file",
            functionCall: function(){
                return addFileField()
            }
        },
        {
            type:"hidden",
            functionCall: function(){
                return addHiddenField()
            }
        },
        {   
            type:"image",
            functionCall: function(){
                return addImageField()
            }
        },
        {
            type:"month",
            functionCall: function(){
                return addMonthField()
            }
        },
        {
            type:"number",
            functionCall: function(){
                return addNumberField()
            }
        },
        {   
            type:"password",
            functionCall: function(){
                return addPasswordField()
            }
        },
        {   
            type:"radio",
            functionCall: function(){
                return addRadioField()
            }
        },
        {
            type:"range",
            functionCall: function(){
                return addRangeField()
            }
        },
        {
            type:"reset",
            functionCall: function(){
                return addResetField()
            }
        },
        {
            type:"search",
            functionCall: function(){
                return addSearchField()
            }
        },
        {
            type:"submit",
            functionCall: function(){
                return addSubmitField()
            }
        },
        {   
            type:"tel",
            functionCall: function(){
                return addTelField()
            }
        },
        {
            type:"text",
            functionCall: function(){
                return addTextField()
            }
        },
        {
            type:"time",
            functionCall: function(){
                return addTimeField()
            }
        },
        {
            type:"url",
            functionCall: function(){
                return addURLField()
            }
        },
        {
            type:"week",
            functionCall: function(){
                return addWeekField()
            }
        }
    ]

const addButtonField = () => {
    const obj = {
        type:"button",
        value:"Click Me"
    }
    return obj
}

const addCheckboxField = () => {
    
}

const addColorField = () => {

}

const addDateField = () => {

}

const addDateTimeLocalField = () => {

}

const addEmailField = () => {

}

const addFileField = () => {

}

const addHiddenField = () => {

}

const addImageField = () => {

}

const addMonthField = () => {

}

const addNumberField = () => {

}

const addPasswordField = () => {

}

const addRadioField = () => {

}

const addRangeField = () => {

}

const addResetField = () => {
    
}

const addSearchField = () => {

}

const addSubmitField = () => {

}

const addTelField = () => {

}

const addTextField = () => {

}

const addTimeField = () => {

}

const addURLField = () => {

}

const addWeekField = () => {

}