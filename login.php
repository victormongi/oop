<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
    body {
      font-family: 'Open Sans';
      background-color: #192227;
    }
    .form {
      padding: 20px;
      margin: auto;
      max-width: 500px;
      height: 100%;
      background-color: #263238;
      color: white;
      border-radius: 10px;
      -webkit-box-shadow: 0px 0px 143px -20px rgba(0,0,0,0.93);
      -moz-box-shadow: 0px 0px 143px -20px rgba(0,0,0,0.93);
      box-shadow: 0px 0px 143px -20px rgba(0,0,0,0.93);
    }
    .form ul {
      margin: 0;
      padding: 0;
    }
    .form li {
      display: grid;
      list-style-type: none;
    }
    .form h1 {
      text-align: center;
      margin: 0;
      padding: 0;
    }
  </style>
</head>
<body>

  <div class="form">
    <h1>Daftar</h1>
    <form action="proseslogin.php" method="POST">
        <ul>
          <li>
            <label for="username">Username</label>
            <input type="text" name="username" id="username">
          </li>
          <li>
            <label for="password">Password</label>
            <input type="password" name="password" id="password">
          </li>
          <li>
            <label for="conf_password">Konfirmasi Password</label>
            <input type="password" name="conf_password" id="conf_password">
          </li>
          <li>
            <input type="submit" style="margin-top: 10px;">
          </li>
        </ul>

      </form>

  </div>

</body>
</html>