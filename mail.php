<?php
require("mailconf.php");

$text = "<h1>Получено сообщение с сайта</h1>
	<p>Имя - ".$_POST['name']."</p>
	<p>Номер телефона - ".$_POST['tel']."</p>";
if ($_POST['email']) $text = $text."<p>Адрес электронной почты - ".$_POST['email']."</p>";


require("class.phpmailer.php");

$mail = new PHPMailer();
$mail->CharSet = 'UTF-8';
//$mail->SMTPDebug = true;
$mail->IsSMTP();
$mail->Host     = $smtphost;
$mail->SMTPAuth = true;
$mail->Username = $smtpname;
$mail->Password = $smtppass;
$mail->From     = $smtpemail;
$mail->FromName = $smtpsite;
$mail->AddAddress("d-man-n@mail.ru", "Корлыханов Дмитрий Викторович");
$mail->WordWrap = 50;// set word wrap
$mail->IsHTML(true);
$mail->Subject  =  "Сообщение с ".$smtpsite;
$mail->Body     =  "$text";
if ($mail->Send()) echo "Сообщение отправлено.";
else echo "Сообщение НЕ отправлено!!! Mailer Error: {$mail->ErrorInfo}";
?>
