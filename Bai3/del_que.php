<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
    $id=$_GET['del'];
    include ('control.php');
    $get_data= new data();
    $delque=$get_data->delete_que($id);
if($delque) echo header('location:dsque.php');
else echo "không thành công";
    ?>
</body>
</html>