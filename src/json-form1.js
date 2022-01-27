import React from "react";

const data={
    "form":{
        "sections": [
            {
                "order":1,
                "section_title":"Basic Information",
            "fields": [
            {
                "title":"Enter Name",
              "placeholder":"Enter your name here ",
              "type":"text","name":"name",
              "validation_rules":["required"]
            },
            {"title":"Enter Email",
            "placeholder":"Enter your email here ",
            "type":"email","name":"email",
            "validation_rules":["required"]
            },
            {"title":"Enter Password",
            "placeholder":"Enter your password here ",
            "type":"password","name":"password",
            "validation_rules":["required"] 
            }
        ]
    }
    ]

    }
}

export default function Jsonform1(){
    const onSubmit =()=>{
        
    }
    return(
        <div>
            <form onSubmit={onSubmit}>
              {
                  data.form.sections.map(formData => {
                      console.log("formData",formData)
                      return(
                          <div>
                              <h1>{formData.section_title}</h1>  
                              {
                                  formData.fields.map(inputData =>{
                                      console.log("inpuData",inputData)
                                      return(
                                          <div>
                                          <label>{inputData.label}</label>
                                          <input type={inputData.type} name={inputData.name} placeholder={inputData.placeholder} title={inputData.title} validation_rules={inputData.validation_rules} />
                                          </div>
                                      )
                                  })
                              }
                              
                          </div>
                      )

                      
                  })
              }
              <button type="onSubmit"> submit</button>
              </form>
        </div>
    )
}