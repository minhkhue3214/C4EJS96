<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="Public/bootstrap-3.3.7-dist/css/bootstrap.css">
    <title>Document</title>
</head>
<body>
<?php
 include ('control.php');
$get_data= new data;
$select=$get_data->list_user();
?>
    <h1>Danh sách tài khoản</h1>
    <hr>
    <table class="table primary_table">
    <tr>
    <th>Id</th>
    <th>Username</th>
    <th>Name</th>
    <th>Email</th>
    <th>Gender</th>
    <th>Birthday</th>
    <th>Address</th>
    <th colspan="2">Option</th>
    </tr>
    <?php 
    foreach($select as $se_user)
    {
        ?>
    <tr>
    <td><?php echo $se_user['id'];?></td>
    <td><?php echo $se_user['tendangnhap'];?></td>
    <td><?php echo $se_user['hoten'];?></td>
    <td><?php echo $se_user['email'];?></td>
    <td><?php echo $se_user['gioitinh'];?></td>
    <td><?php echo $se_user['ngaysinh'];?></td>
    <td><?php echo $se_user['noio'];?></td>
    <td><a href="sua_dangki.php?edit=<?php echo  $se_user['id'] ?>">Edit</a></td>
    <td><a href="del_user.php?del=<?php echo  $se_user['id'] ?>">Delete</a></td>
    </tr>
    <?php } ?>
    </table>
</body>
</html>