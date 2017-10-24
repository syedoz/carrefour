<?php

$user = (array_key_exists("user",$_GET))?$_GET["user"]:""; //Checks if the user parameter has been passed through the get method, if not, sets the $user variable to an empty string
$pass = (array_key_exists("pass",$_GET))?$_GET["pass"]:""; //Checks if the pass parameter has been passed through the get method, if not, sets the $pass variable to an empty string

	if($user == "user" and $pass == "pass")
	{
		echo "authenticated";
	}
	else {
		echo "!user";
	}
?>