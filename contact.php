<?php

/* Set e-mail recipient */
$to = "bulletsrm5@gmail.com";

/* Check all form inputs using check_input function */
$name = check_input($_POST['yourname'], "Enter your name");
$subject  = check_input($_POST['subject'], "Write a subject");
$email    = check_input($_POST['email'], "Enter your email");
$comments = check_input($_POST['comments'], "Write your comments");

$headers .= "Reply-To: $name <$email>\r\n";
$headers .= "From: $name <$email>\r\n";

/* If e-mail is not valid show error message */
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{
    show_error("E-mail address not valid");
}

/* Let's prepare the message for the e-mail */
$message = "Hello!

You have been summoned via your website:

Name: $name
E-mail: $email

Comments:
$comments

<eom>
";

/* Send the message using mail() function */
mail($to, $subject, $message, $headers);

/* Redirect visitor to the thank you page */
header('Location: index.html');
exit();

function check_input($data, $problem='')
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    if ($problem && strlen($data) == 0)
    {
        show_error($problem);
    }
    return $data;
}

function show_error($myError)
{
?>
    <html>
    <body>

    <b>Please correct the following error:</b><br />
    <?php echo $myError; ?>

    </body>
    </html>
<?php
exit();
}
?>