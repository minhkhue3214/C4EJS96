<?php
require ('control.php');
ob_start();
$get_data = new data();
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="Public/bootstrap-3.3.7-dist/css/bootstrap.css">
    <title>Thêm quê</title>
</head>
<body>

<div id="myModal-register">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <h3 class="modal-title" align="center">Thêm Quê</h3>
            </div>
            <div class="modal-body">
                <form class="form-horizontal" role="form" method="post">
                    <div class="form-group">
                        <label for="user" class="col-sm-3 control-label">Tên quê:</label>
                        <div class="col-sm-8">
                            <input type="text" class="form-control" name="que" placeholder="Nhập tên que">
                            
                        </div>
                    </div>
                    
                    
                    <div class="form-group">
                        <div align="center">
                            <button id="btn-register" type="submit" class="btn btn-success" name="submit">Thêm quê</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
<?php
  if(isset($_POST['submit']))
  {
      
      if(empty($_POST['que']))
       echo "<script>alert('Không được để rỗng dữ liệu');</script>";
      else
  {
      $get_data= new data();
      $dk=$get_data->add_que($_POST['que']);
      if($dk) 
      header ('location:danhsachque.php');
      else echo "<script>alert('Kết nối không thành công');</script>";
  } 
}  

?>
</body>
</html>