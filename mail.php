<?php 
	error_reporting(0);
	// header("Content-Type:text/html;charset=utf-8");
	// // $testValue=$_POST['your_company'];
	// // echo $_GET['your_company'];
	// if(isset($_POST["kkk"])){
	// 	echo $_POST["kkk"];
	// 	echo '353535';
	// }

	// $logFile = "view.log";
	// $id = $_POST['kkk'];
	// file_put_contents($logFile, $id);
	// echo $id;

	$company = htmlspecialchars($_POST['your_company']);
	$division = htmlspecialchars($_POST['your_division']);
	$name = htmlspecialchars($_POST['your_name']);
	$furigana = htmlspecialchars($_POST['your_furigana']);
	$mail = htmlspecialchars($_POST['your_mail']);
	$mailConfrim = htmlspecialchars($_POST['your_mail_confirm']);
	$phone = htmlspecialchars($_POST['your_phone']);
	$type = htmlspecialchars($_POST['your_type']);
	$message = htmlspecialchars($_POST['your_message']);

	$to = 'inquiry.workcapital@gmail.com'; 
	$subject = 'お問い合わせがございます'; 
	$content = 
	'【貴社名】'.$company."\n".
	'【部署名】'.$division."\n".
	'【お名前】'.$name."\n".
	'【ふりがな】'.$furigana."\n".
	'【メールアドレス】'.$mail."\n".
	'【メールアドレス（確認用）】'.$mailConfrim."\n".
	'【電話番号】'.$phone."\n".
	'【お問い合わせ種類】'.$type."\n".
	'【お問い合わせ内容】'."\n".$message."\n";

	$emailResult='123548';
	if(mail($to, $subject, $content)) {
	    //成功時の記述
		// print_r('お問い合わせありがとうございます。<br>追って担当者よりご連絡いたします。');
		// $_POST = array();
		$emailResult='success';
	} else {
	    //失敗時の記述
		// print_r('送信失敗しました');
		$emailResult='fail';
	}

	echo $emailResult;

	
?>
