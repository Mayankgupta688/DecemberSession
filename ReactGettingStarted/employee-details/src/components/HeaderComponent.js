import React from "react";

export default function HeaderComponent() {
    return React.createElement("div", null, [
            React.createElement("div", null,
                React.createElement("h1", null,
                    "This is my header")
            ),
            React.createElement("div", null,
                [
                    React.createElement("h1", null,
                        "This is my header"),
                    React.createElement("p", null,
                        React.createElement("h2", null,
                        "This is Non Critical Header")
                        )
                ]
            )
        ]
    )
}


<div>
    <div>
        <h1>This is My Header</h1>
    </div>

    <div>
        <h1>This is My Header</h1>
        <p>
            <h2>This is Non Critical Header</h2>
        </p>
    </div>
</div> 
