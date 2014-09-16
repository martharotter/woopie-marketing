<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$title = $_POST['publication_title'];
$website = $_POST['url'];
$tel = $_POST['tel'];
$message = $_POST['textarea'];

$email_from = 'info@woop.ie';//<== update the email address
$email_subject = "New Form submission";
$email_body = "You have received a new message from the user $name.\n".
    "Here is the message:\nEmail: $visitor_email \nPublication Title: $title \nURL: $website\nTelephone: $tel \nNotes: $message\n\n".
    
$to = "info@woop.ie";//<== update the email address
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
//Send the email!
mail($to,$email_subject,$email_body,$headers);
//done. redirect to thank-you page.
header('Location: thankyou.html');


// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
   
?> 