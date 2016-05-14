function fbAppPost(data, url, calback) {
    FB.api(url, 'post', data, function (response) {
        if (!response || response.error) {
            console.log("error:");
            console.log(response);
            alert('Error occured in fbAppPost');
        } else {
            calback(response);
        }
    });
}

function createCustomAudience() {
    var data = {
        description: "Test with JS API 6",
        name: "Custom Audience with JS 6",
        subtype: "CUSTOM"
    };
    var response = "";
    fbAppPost(data, '/act_273185034/customaudiences', function(response){
        console.log("new custom audience created:");
        console.log(response);
        document.getElementById('status').innerHTML = "New custom audience created, check the console";
    });
}

function getCustomAudiences() {
    FB.api('/act_273185034/customaudiences', function (response) {
        document.getElementById('status').innerHTML = "Check your console";
        console.log('data en custom audiences:');
        console.log(response);
    });
}

function uploadContacts() {
    var payload = {
       "payload": {
           "schema": [
             "EXTERN_ID",
             "FN",
             "EMAIL",
             "LN"
           ],
           "is_raw": true,
           "data": [
             [
               "ExternId123",
               "4cfdde69bde68452d2921db3186d45b8bc825df51e16b94b9517471589eb4f6f",
               "8cc62c145cd0c6dc444168eaeb1b61b351f9b1809a579cc9b4c9e9d7213a39ee",
               "55b5c51f8670181b0454a698c930ee641890c5c80b1e7da87e39a768aa8231ac"
             ],
             [
               "ExternId456",
               "9b4da888a30b9925bcac4024173a421a823dfe5ffcd2370d21d4b5b66dd8d554",
               "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
               "047569390fc6a34a68dbda84f1c3aa8765422c355ef7e78148dc557e586ff7f4"
             ],
             [
               "ExternId789",
               "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
               "4eaf70b1f7a797962b9d2a533f122c8039012b31e0a52b34a426729319cb792a",
               "047569390fc6a34a68dbda84f1c3aa8765422c355ef7e78148dc557e586ff7f4"
             ]
           ]
        }
    };
    fbAppPost(payload, '/6042654447994/users', function (response) {
        console.log("added new contacts");
        console.log(response);
        document.getElementById('status').innerHTML = "new contacts added, check the console.";
    });
}

/*function returnTokenLongTerm() {
    var tokenShortTerm = "";
    FB.getLoginStatus(function (response) {
        console.log("por aqui pase yo: getLoginStatus")
        tokenShortTerm = response.authResponse.accessToken
    })
    console.log("tokenShortTerm:");
    console.log(tokenShortTerm);
    $.post("http://localhost:5626/api/token", { token : tokenShortTerm})
        .done(function(newToken){
            console.log(newToken)
        });
}*/
