<?php 
	// error_reporting(0);

	require_once "phpmailer/class.phpmailer.php";

	$company = htmlspecialchars($_POST['your_company']);
	$division = htmlspecialchars($_POST['your_division']);
	$name = htmlspecialchars($_POST['your_name']);
	$furigana = htmlspecialchars($_POST['your_furigana']);
	$mail = htmlspecialchars($_POST['your_mail']);
	$mailConfrim = htmlspecialchars($_POST['your_mail_confirm']);
	$phone = htmlspecialchars($_POST['your_phone']);
	$type = htmlspecialchars($_POST['your_type']);
	$message = htmlspecialchars($_POST['your_message']);

	$mailer = new PHPMailer();
	$mailer->SMTPSecure = "ssl";
	$mailer->Host = "smtp.gmail.com";
	$mailer->Port = 465;
	$mailer->CharSet = "utf-8";    
	$mailer->Username = "inquiry.workcapital@gmail.com";       
	$mailer->Password = "contactwc180623@"; 
	$mailer->IsSMTP();
	$mailer->SMTPAuth = true;
	$mailer->SMTPDebug  = 1;
	$mailer->Encoding = "base64";
	$mailer->IsHTML(true); 
	$mailer->From = "info@toyokiki.co.jp";     
	$mailer->FromName = "東陽機器工業株式会社";  
	$mailer->Subject = "お問い合わせが届きました"; 
	$mailer->Body = 
		'【会社名】'.$company."<br>".
		'【部署名】'.$division."<br>".
		'【お名前】'.$name."<br>".
		'【ふりがな】'.$furigana."<br>".
		'【メールアドレス】'.$mail."<br>".
		'【メールアドレス（確認用）】'.$mailConfrim."<br>".
		'【電話番号】'.$phone."<br>".
		'【お問い合わせ種類】'.$type."<br>".
		'【お問い合わせ内容】'."<br>".$message."<br>";       
	$mailer->AddAddress("info@toyokiki.co.jp"); 
	$emailResult;

	if($mailer->Send()){

	    	$emailResult='success';

	    	//ユーザーに送信
		$to_user = $mail;
		$subject_user = 'お問い合わせありがとうございます';
		$content_user = 
			$company."\n".
			$name.'様'."\n\n".

			'お問い合わせありがとうございます。'."\n".
			'東陽機器工業株式会社です。下記の通りお問い合わせを承りました。'."\n\n".

			'——'."\n".
			'【会社名】'.$company."\n".
			'【部署名】'.$division."\n".
			'【お名前】'.$name."\n".
			'【ふりがな】'.$furigana."\n".
			'【メールアドレス】'.$mail."\n".
			'【メールアドレス（確認用）】'.$mailConfrim."\n".
			'【電話番号】'.$phone."\n".
			'【お問い合わせ種類】'.$type."\n".
			'【お問い合わせ内容】'."\n".$message."\n\n\n".



			'————————————'."\n".
			'東陽機器工業株式会社'."\n".
			'TEL. 03-3742-4831'."\n".
			'info@toyokiki.co.jp';

		mail($to_user, $subject_user, $content_user, $headers);
	}else{
	    $emailResult='fail';
	}

	
	echo $emailResult;

	

	
?>
