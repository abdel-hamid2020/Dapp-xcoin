<?php 

try 
{
    $bdd = new PDO("mysql:host=localhost;dbname=xcoin;charset=utf8", "root", "");
}
catch(Exception $e)
{
    die('Erreur : '.$e->getMessage());
}

$addresse = $_POST['adresse']; 
$pseudo = $_POST['pseudo'];
$req=$bdd->prepare('INSERT INTO utilisateurs(pseudo,adress) VALUES (:pseudo,:adress) ');
$req->execute(array(
    'pseudo'=>$pseudo,
    'adress'=>$addresse
));
?>