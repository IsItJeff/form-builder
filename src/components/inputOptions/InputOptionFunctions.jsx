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
        label:null,
        group:null,
        name:null,
        value:"Click Me"
    }
    return obj
}

const addCheckboxField = () => {
    const obj = {
        type:"checkbox",
        label:"Checkbox",
        group:null,
        name:null,
        value:""
    }
    return obj
}

const addColorField = () => {
    const obj = {
        type:"color",
        label:"Color",
        group:null,
        name:null,
        value:""
    }
    return obj
}

const addDateField = () => {
    const obj = {
        type:"date",
        label:"Date",
        group:null,
        name:null,
        value:""
    }
    return obj
}

const addDateTimeLocalField = () => {
    const obj = {
        type:"datetime-local",
        label:"Date Time local",
        group:null,
        name:null,
        value:""
    }
    return obj
}

const addEmailField = () => {
    const obj = {
        type:"email",
        label:"Email",
        group:null,
        name:null,
        value:""
    }
    return obj
}

const addFileField = () => {
    const obj = {
        type:"file",
        label:"File",
        group:null,
        name:null,
        value:""
    }
    return obj
}

const addHiddenField = () => {
    const obj = {
        type:"hidden",
        label:"Hidden",
        group:null,
        name:null,
        value:""
    }
    return obj
}

const addImageField = () => {
    const obj = {
        type:"image",
        label:"Image",
        group:null,
        name:null,
        value:""
    }
    return obj
}

const addMonthField = () => {
    const obj = {
        type:"month",
        label:"Month",
        group:null,
        name:null,
        value:""
    }
    return obj
}

const addNumberField = () => {
    const obj = {
        type:"number",
        label:"Number",
        group:null,
        name:null,
        value:""
    }
    return obj
}

const addPasswordField = () => {
    const obj = {
        type:"password",
        label:"Password",
        group:null,
        name:null,
        value:""
    }
    return obj
}

const addRadioField = () => {
    const obj = {
        type:"radio",
        label:"Radio",
        group:null,
        name:"null",
        value:""
    }
    return obj
}

const addRangeField = () => {
    const obj = {
        type:"range",
        label:"Range",
        group:null,
        name:null,
        value:""
    }
    return obj
}

const addResetField = () => {
    const obj = {
        type:"reset",
        label:"Reset",
        group:null,
        name:null,
        value:""
    }
    return obj
}

const addSearchField = () => {
    const obj = {
        type:"search",
        label:"Search",
        group:null,
        name:null,
        value:""
    }
    return obj
}

const addSubmitField = () => {
    const obj = {
        type:"submit",
        label:"Submit",
        group:null,
        name:null,
        value:""
    }
    return obj
}

const addTelField = () => {
    const obj = {
        type:"tel",
        label:"Tel",
        group:null,
        name:null,
        value:""
    }
    return obj
}

const addTextField = () => {
    const obj = {
        type:"text",
        label:"TextField",
        group:null,
        name:null,
        value:""
    }
    return obj
}

const addTimeField = () => {
    const obj = {
        type:"time",
        label:"Time",
        group:null,
        name:null,
        value:""
    }
    return obj
}

const addURLField = () => {
    const obj = {
        type:"url",
        label:"URL",
        group:null,
        name:null,
        value:""
    }
    return 
}

const addWeekField = () => {
    const obj = {
        type:"week",
        label:"Week",
        group:null,
        name:null,
        value:""
    }
    return obj
}