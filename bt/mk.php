<?php
    if (isset($_POST['txtUp'])) {
        $a = $_FILES['txtfile']['tmp_name'];
        $b = $_FILES['txtfile']['name'];
        $imageFileType = $_FILES['txtfile']["type"];
        echo $imageFileType;
        $up = move_uploaded_file($a, $b);
        if (
            $imageFileType == "image/jpg" || $imageFileType == "image/png" || $imageFileType == "image/jpeg"
            || $imageFileType == "image/gif"
        ) {
            if ($up) {
                echo "Upload thành công";
            } else {
                echo "Thất bại";
            }
            
        }else{
            echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
            $uploadOk = 0;
        }
       
    }

    ?>
