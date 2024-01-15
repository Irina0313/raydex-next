<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';



//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);
$mail->CharSet = 'utf-8';
$company = $_POST['company'];
$surname = $_POST['surname']; 
$name = $_POST['name']; 
$middleName = $_POST['middleName']; 
$message = $_POST['message']; 

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'info@raydexkz.com';                     //SMTP username
    $mail->Password   = 'ngyu copl qxzy ajjc';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('info@raydexkz.com', 'site Raydexkz.com');
    $mail->addAddress('info@raydexkz.com');     //Add a recipient
    $mail->addAddress('sales@raydexkz.com');               //Name is optional
    //$mail->addReplyTo('info@example.com', 'Information');
    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');

    //Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Сообщение с сайта Raydexkz.com';
    $mail->Body    = '<b>Компания: </b>'$company'<br/><b>Фамилия: </b>'$surname'<br/>';
    
    $mail->AltBody = 'На сайте компании оставлено обращение 
    Компания: '$company
    'Фамилия: '$surname;

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}