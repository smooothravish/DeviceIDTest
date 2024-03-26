<!doctype html>
<html class="no-js" lang="">

  <head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title></title>
<link rel="stylesheet" href="css/style.css">
  <meta name="description" content="">

    <meta property="og:title" content="">
      <meta property="og:type" content="">
        <meta property="og:url" content="">
          <meta property="og:image" content="">

            <link rel="icon" href="/favicon.ico" sizes="any">
              <link rel="icon" href="/icon.svg" type="image/svg+xml">
                <link rel="apple-touch-icon" href="icon.png">

                  <link rel="manifest" href="site.webmanifest">
                    <meta name="theme-color" content="#fafafa">
                      <script>
                        window.addEventListener('DOMContentLoaded', () =>
                        window.IncogniaWebSdk.init('3048e4b7-5938-49d8-abeb-4bee270bdcca')
                        )
                      </script>

                    </head>

                    <body>

                    <!-- Add your site or application content here -->
                    <p>Hello world! This is HTML5 Boilerplate.</p>
                    <script src="js/app.js"></script>
                    <script src="js/klarna_toolkit.js"></script>
                    <script defer src="https://repo.incognia.com/web/latest/incognia-web-sdk.js"></script>
                    <script>
                      // Initialize the agent on page load.
                      const fpPromise = import('https://fpjscdn.net/v3/cLUP4yT1dAUJAO90UKgp')
                      .then(FingerprintJS => FingerprintJS.load({
                      region: "eu"
                    }))

                      // Get the visitorId when you need it.
                      fpPromise
                      .then(fp => fp.get())
                      .then(result => {
                      const visitorId = result.visitorId
                      console.log(visitorId)
                    })

                    </script>
                    <script>
                      window.onload = function() {
                      try {
                      if (typeof klarna.profile === 'function') {
                      //var y = 'sessiontest34'
                      var x = klarna.profile('h.online-metrix.net', '87rxrdob', 'sessiontest63');
                      console.log(x);
                      console.log('sessionid -  ses123');
                    } else {
                      console.log('klarna.profile is not defined');
                    }
                    } catch(err){
                      console.log('error: ' + err);
                    }
                    };
                    </script>
                    <input type="text" id="myTextBox">
                      <button id="myButton" onclick="callAPI()">Submit</button>

                      <p id="displayText">Your text will appear here</p>



                      <script>
                        function callAPI() {
                        // Assuming you're sending the text as a query parameter to a GET endpoint
                        var userInput = document.getElementById('myTextBox').value;
                        var apiURL = 'https://h-api-sb.online-metrix.net/api/session-query?org_id=87rxrdob&api_key=i4lqdshhsbmz0kww&session_id=sessiontest63&service_type=session-policy&account_telephone=' + encodeURIComponent(userInput);

                        fetch(apiURL)
                        .then(response => {
                        if (!response.ok) {
                        throw new Error('Network response was not ok');
                      }
                        return response.json(); // or .text() if the response is plain text
                      })
                        .then(data => {
                        console.log(data); // Process your data here
                        document.getElementById('displayText').innerText = JSON.stringify(data); // Example of displaying the response
                      })
                        .catch(error => {
                        console.error('There has been a problem with your fetch operation:', error);
                      });
                        document.getElementById('displayText').innerText = userInput + apiURL;
                      }


                      </script>

                    </body>

                  </html>
