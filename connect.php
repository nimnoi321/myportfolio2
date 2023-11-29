
<?php

$dsn ="mysql:host=localhost;dbname"

?>  
     /*if(!empty($_POST["submit"])){
     $name = $_POST["name"];
     $number = $_POST["number"];
     $email = $_POST["email"];
     $message = $_POST["message"];
     $toEmail = "nimnoinaruk@gmail.com";

     $mailHeaders = "name:" . $name .
     "/r/n Phone:" .$number.
     "/r/n Email:" .$email.
     "/r/n message:" .$message. "/r/n";
     }

     if(mail($toEmail,  $name, $mailHeaders)){
          $message = "Your Information is Received Successfully";

     }


     
     /*$host = "localhost";
     $dbname = "message_db";
     $username = "root";
     $password = "";
     
     mysqli_connect($host, $username, $password, $dbname);
     if (mysqli_connect_errno()) {
          die("Connection error: " .mysqli_connect_error());
     }

     $sql = "Insert INTO message (name, number, email, message) VALUES (?,?,?,?)";

     mysqli_stmt_init($conn);

     if ( ! mysqli_stmt_prepare($stmt,$sql)) {
          die(mysqli_error($conn));
     }

     mysqli_stmt_bind_param($stmt, "siss", $name, $number, $email, $message );

     mysqli_stmt_execute($stmt);

     echo "Your message is already sent";*/

   