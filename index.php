<!DOCTYPE html>
<?php
require "config.php"; // Database Connection 

?>

<html lang="en">
    <head>
     <meta charset="UTF-8">
     <link href="style.css" rel="stylesheet">  
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    

</head>
    <body>
        <div class="container-fluid">
   
        <!-- Background image -->
<div class="bg-image" style="
    background-image: url('https://cdn.applysquare.net/a2/institute/fr.polytechnique/cover_app.jpg');
    height: 100vh;
    background-repeat: repeat;
    background-size:100% ;
  ">
  
    <div class="d-flex justify-content-center align-items-center h-100">
    <div class="mask" style="background-color: rgba(22, 57, 49, 0.5)">
      <div class="text-white mb-0">
      
            Bienvenue sur la page de dépôt/retrait de XCoin <br>
            <button id="connectButton" class="btn btn-primary" type="button" onclick="isLocal()" display='none'></button>
            <div id='pagecontent'><p>Votre solde : <p id='solde' class='style2'></p></p>
            <p>Euro vers Xcoin</p>
            <input type='text' id='amountEURXCN' value='0'>
            <button id='pay' class='btn btn-primary' type='submit' onclick='myFunction()'>Payer</button>
            <p id="demo"></p>

            
               
              
               <button id='withdrawXCN'class='btn btn-primary' type='button' onclick='myFunction2()'>Recevoir vos Xcoins</button>
               <p id='demo2'></p>
            </section>
            <p>Xcoin vers Euro</p>
            <input type='text' id='amountXCNEUR' value='0'>
            <button id='payXCN' class='btn btn-primary' type='button'  onclick='myFunction3()'>Recevoir vos Euros</button>
            <p id='demo3'></p>
                
           

            <p>Transfert</p>
            <input type='text' id='amount' value='0'>
           
         
    
            <input list='utilisateurs' type='text' id='destination' value=''>
            <datalist id='utilisateurs' >
            <?php
  $sql='SELECT * from utilisateurs ORDER BY pseudo';
  //$list = $bdd->query($sql);
  foreach ($bdd->query($sql) as $row) 
      {
        echo'<option value="'.$row['adress'].'">'.$row['pseudo'].'</option>';}
  ?>
</datalist>

			<button id='transfer' class="btn btn-primary" type="button">Transférer des Xcoin</button>
        </div>
        <div id="inscription">
        <input id="pseudo" type="text">
        <button id="autorisation" class="btn btn-primary" type="button">Autorisation</button>
        </div>
        </div>
    </div>
  </div>
</div>
<!-- Background image -->
        


<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "<span class='style'>Cliquez sur Recevoir vos Xcoins pour actualiser votre solde.</span>"
}
function myFunction2() {
  document.getElementById("demo2").innerHTML = " <span class='style2'>Le paiemenent s'est bien déroulé,</br> Actualiser la page pour voir votre nouveau solde !</span>";
}
function myFunction3() {
  document.getElementById("demo3").innerHTML = " <span class='style2'>Vous avez bien converti vos Xcoins en Euros.</br> Actualiser la page pour voir votre nouveau solde !</span>";
}
</script>
        <script src="https://cdn.jsdelivr.net/gh/ethereum/web3.js@1.0.0-beta.36/dist/web3.min.js"></script>
        <script src="https://code.jquery.com/jquery-3.3.1.min.js" crossorigin="anonymous"></script>
		<script src="node_modules/@metamask/onboarding/dist/metamask-onboarding.bundle.js" defer></script>
		
		<script type="module" src="index.js"></script>
    
    </body>
</html>
