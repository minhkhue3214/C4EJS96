<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="post" enctype="multipart/form-data">
    <input type="file" name="txtfile" id=""><br>
    <input type="submit" value="upload" name="txtup">
    </form>
    <?php
    require "control.php";
    $get_data=new data();
        if(isset($_POST['txtup']))
        {
            $a= $_FILES['txtfile']['tmp_name'];//tên file tạm
            $b = $_FILES['txtfile']['name'];//tên file
            $file_type=$_FILES['txtfile']['type'];
            //ee
            //echo($file_type);
            if($file_type=="image/jpg"||$file_type=="image/png"||$file_type=="image/jpeg"){
                $up = move_uploaded_file($a,'./file/'.$b);// thực thi file
                $file=$get_data ->themanh($b);
            //      if($up)
            //     {
            //     echo('upload thanh cong');
            //     }
               $selectfile= $get_data-> list_user();
               foreach($selectfile as $se_file)
               {
                   $se_file['hinhanh'];
               }
             }
            // else{
            //     echo('upload that bai');
            // }     
       }
       
       
    ?>

    <p>Ảnh vừa upload là</p>
    <img  width ="50%" src="file/<?php echo$se_file['hinhanh'] ?>" alt="">
</body>
</html>