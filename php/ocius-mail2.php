<?php

  session_start();

  $_GET  = filter_input_array(INPUT_GET, FILTER_SANITIZE_STRING);
  $_POST = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);

  if (isset($_POST['email_add']) === true && $_POST['email_add'] !== ""){
    return;
  }

  // check if $_SESSION['qaptcha_key'] created with AJAX exists
  if(isset($_SESSION['qaptcha_key']) && !empty($_SESSION['qaptcha_key']))
  {
    $myVar = $_SESSION['qaptcha_key'];
   
    // check if the random input created exists and is empty
    if(isset($_POST[''.$myVar.'']) && empty($_POST[''.$myVar.'']))
    {
      $messages = array(
        'fr' => array(
          'reCaptcha' => "Nous éprouvons des difficultés avec le reCaptcha de Google. Veuillez réessayer plus tard.",
          "notSent"   => "Nous éprouvons des difficultés avec le système de courriel. Veuillez réessayer plus tard.",
          'success'   => "Merci. Un représentant du groupe Ocius communiquera avec vous.",
        ),
        'en' => array(
          'reCaptcha' => "We experience some problems with Google's reCaptcha widget. Please try again later.",
          'notSent'   => "We experience some problems with email system. Please try again later.",
          'success'   => "Thank you. A Groupe Ocius representative will contact you.",
        )
      );

      if (isset($_COOKIE['ocius_language']) === true) {
        $language = $_COOKIE['ocius_language'];
      } else {
        $language = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
      }

      if ($language !== 'fr' && $language !== 'en') {
        $language = 'en';

        setcookie('ocius_language', $language, time() + 3600 * 24 * 365 * 20);
      }

      $from;$email;$comment;$captcha;

      if (isset($_POST['from']) === true){
        $from = $_POST['from'];
      }

      if (isset($_POST['email']) === true){
        $email = $_POST['email'];
      }

      if (isset($_POST['comment']) === true){
        $email = $_POST['comment'];
      }

      $mail = new PHPMailer;

      $mail->SMTPDebug = 0;                               // Enable verbose debug output

      $mail->isSMTP();                                      // Set mailer to use SMTP
      //$mail->Host = '24.201.245.36';  // Specify main and backup SMTP servers
      $mail->Host = 'xchange.ocimail.net';
      $mail->SMTPAuth = true;                               // Enable SMTP authentication
      $mail->Username = 'ociusweb@ocimail.net';                 // SMTP username
      $mail->Password = 'i6EsvS72UBGHt%JRck%d';                           // SMTP password
      $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
      $mail->Port = 587;                                    // TCP port to connect to

      $mail->From = 'ociusweb@ocimail.net';
      $mail->FromName = 'Ocius Web Site';
      $mail->addAddress('info@ocius.ca', 'Info');     // Add a recipient
      $mail->addReplyTo($_POST['email'], $_POST['from']);
      $mail->isHTML(true);                                  // Set email format to HTML

      $mail->Subject = 'Formulaire de contact';
      $mail->Body    = $_POST['comment'] . "<br/><br/>De : " . $_POST['from'];
      $mail->AltBody = $_POST['comment'] . "\r\n" . "\r\n" . "De : " . $_POST['from'];

      if(!$mail->send()) {
        $message = $messages[$language]['notSent'];
          //echo 'Message couldf not be sent.';
          //echo 'Mailer Error: ' . $mail->ErrorInfo;
      } else {
$message = <<<EOT
<script>
var emailSent = true;
</script>
EOT;
      }
    }
    else
    {
      
    }
  }
  unset($_SESSION['qaptcha_key']);