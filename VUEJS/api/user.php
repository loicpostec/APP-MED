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
    /// UPDATE USER AND BIND VALUES
    $sql = "UPDATE users SET FIRSTNAME = :FIRSTNAME, LASTNAME = :LASTNAME, EMAIL=:EMAIL, MOBILE_PHONE=:PHONE, ADDRESS=:ADDRESS, POSTAL_CODE=:ZIP, CITY=:CITY WHERE id=:ID";
    $stmt= $pdo->prepare($sql);
    $stmt->bindParam(":ID",$user['ID']);
    $stmt->bindParam(":FIRSTNAME",$user['FIRSTNAME']);
    $stmt->bindParam(":LASTNAME",$user['LASTNAME']);
    $stmt->bindParam(':EMAIL',$user['EMAIL']);
    $stmt->bindParam(':PHONE',$user['MOBILE_PHONE']);
    $stmt->bindParam(':ADDRESS',$user['ADDRESS']);
    $stmt->bindParam(':ZIP',$user['POSTAL_CODE']);
    $stmt->bindParam(':CITY',$user['CITY']);
    
    $stmt->execute();
    file_put_contents('php://stderr', print_r($stmt->execute(), TRUE));
  break;

}
?>  