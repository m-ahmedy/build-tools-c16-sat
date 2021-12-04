import { checkForName } from "./nameChecker";

const baseUrl =
    process.env.NODE_ENV === "development" ? "http://localhost:8085" : "";

export function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById("name").value;
    checkForName(formText);

    console.log("::: Form Submitted :::");
    fetch(baseUrl + "/test", {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ url: formText })
    })
        .then((res) => res.json())
        .then(function (res) {
            console.log({ res });
            document.getElementById("results").innerHTML = JSON.stringify(res);
        });
}
