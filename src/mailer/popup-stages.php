<?php 

$phone = $_POST['user_phone'];
$name = $_POST['user_name'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'autosalon152nn@mail.ru';                 // Наш логин от ящика
$mail->Password = 'aaprPt)SLO13';                           // Наш пароль от ящика от которого будут приходить письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('autosalon152nn@mail.ru', 'Автосалон152');   // От кого будут приходить письма
$mail->addAddress('avex.52@mail.ru');     // Куда будут приходить письма
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Запись на оценку авто';
$mail->Body    = '
	Я хочу записаться на оценку своего автомобиля <br>
	Моё имя: ' . $name . ' <br>
	Мой номер телефона: ' . $phone . '';
$mail->AltBody = 'Это альтернативный текст';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>