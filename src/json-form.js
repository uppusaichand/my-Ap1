import React from "react";

const regexEmail = "/^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/";

const data={
    "form":{
        "sections": [
            {
            "fields": [{"title":"Enter Name",
              "placeholder":"Enter your name here ",
              "type":"text","name":"name",
              "validation_rules":["required"]},
            {"title":"Enter Email",
            "placeholder":"Enter your email here ",
            "type":"email","name":"email",
            "validation_rules":["required"]},
            {"title":"Enter Password",
            "placeholder":"Enter your password here ",
            "type":"password","name":"password",
            "validation_rules":["required"]}
        ]
    }
    ]

    }
}
export default data;