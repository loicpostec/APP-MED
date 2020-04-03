<?php
include "config.php";

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
  case 'GET':
    $stmt = $pdo->query('SELECT * FROM users WHERE id=7');
    $data = $stmt->fetch();
    echo json_encode($data);
  break;
  
  case 'POST':
    //CAPTURE POST AXIOS REQUEST DATA
    $_POST = json_decode(file_get_contents("php://input"),true);
    $user = $_POST['user'];
    $test = $user['firstname'];
    /// UPDATE USER AND BIND VALUES
    $sql = "UPDATE users SET FIRSTNAME = :FIRSTNAME, LASTNAME = :LASTNAME, EMAIL=:EMAIL, MOBILE_PHONE=:PHONE, ADDRESS=:ADDRESS, POSTAL_CODE=:ZIP, CITY=:CITY WHERE id=7";
    // $sql = "UPDATE users SET FIRSTNAME = :FIRSTNAME, LASTNAME = :LASTNAME, EMAIL=:EMAIL, MOBILE_PHONE=:PHONE, ADDRESS=:ADDRESS, POSTAL_CODE=:ZIP, CITY=:CITY WHERE id=7";
    $stmt= $pdo->prepare($sql);
    // $stmt->bindParam(":ID",$user['ID']);
    $stmt->bindParam(":FIRSTNAME",$user['firstname']);
    $stmt->bindParam(":LASTNAME",$user['lastname']);
    $stmt->bindParam(':EMAIL',$user['email']);
    $stmt->bindParam(':PHONE',$user['phone']);
    $stmt->bindParam(':ADDRESS',$user['address']);
    $stmt->bindParam(':ZIP',$user['zip']);
    $stmt->bindParam(':CITY',$user['city']);
    // file_put_contents('php://stderr', print_r($user, TRUE));
    $stmt->execute();


  break;

}
?>  