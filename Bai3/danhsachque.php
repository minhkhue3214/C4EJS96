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
$select_que = $get_data->list_que();
?>
    <h1>Danh sách quê</h1>
    
    <button type="button" class="btn btn-link"><a href="addque.php">Add</a></button>
    <hr>
    <table class="table primary_table">
    <tr>
    <th>Id</th>
    <th>Tên quê</th>
    <th colspan="2">Option</th>
    </tr>
    <?php 
    foreach($select_que as $se_que)
    {
        ?>
    <tr>
    <td><?php echo $se_que['id'];?></td>
    <td><?php echo $se_que['tenque'];?></td>
    <td><a href="edit_que.php?edit=<?php echo  $se_que['id'] ?>">Edit</a></td>
    <td><a href="del_que.php?del=<?php echo  $se_que['id'] ?>">Delete</a></td>
    </tr>
    <?php } ?>
    </table>
</body>
</html>