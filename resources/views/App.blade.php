<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        <link rel="stylesheet" href="{{asset("css/app.css")}}">
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
            body {
                font-family: 'Poppins', sans-serif;
                background: #ffff;
                overflow-x: hidden;
                display:flex;
                flex-direction:column;
            }
        </style> 
    </head>
    <body>
        <div id="App"></div>
        <script src="{{mix("js/app.js")}}"></script>
    </body>
</html>
