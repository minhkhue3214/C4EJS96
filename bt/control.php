<?php
include('connect.php');
class data
{
	public function add_user($user,$pass)
	{
	global $conn;
	$sql="insert into t_user(username,password) value ('$user','$pass')";
	$run=mysqli_query($conn,$sql);
	return $run;
	}
	public function dangki($tendn,$matkhau,$hoten,$email,$gioitinh,$ngaysinh,$noio)
	{
		global $conn;
		$sql="insert into t_dangky(tendangnhap,matkhau,hoten,email,gioitinh,ngaysinh,noio) value ('$tendn','$matkhau','$hoten','$email','$gioitinh','$ngaysinh','$noio')";
		// echo $sql;
		$run=mysqli_query($conn,$sql);
		return $run;
	}
	public function list_user()
	{
		global $conn;
		$sql="select * from t_dangky";
		$run=mysqli_query($conn,$sql);
		$data=array();
		while($rows=mysqli_fetch_array($run))
		{$data[]=$rows;}
        return $data;
	}

	public function list_que()
	{
		global $conn;
		$sql="select * from quequan";
		$run=mysqli_query($conn,$sql);
		$data=array();
		while($rows=mysqli_fetch_array($run))
		{$data[]=$rows;}
        return $data;
	}

public function select_user($id)
{
global $conn;
$sql="select * from t_dangky where id=$id";
$run=mysqli_query($conn,$sql);
$data=array();
while($rows=mysqli_fetch_array($run))
{$data[]=$rows;}
return $data; 
}	

	public function delete_user($id)
	{
     global $conn;
     $sql="delete from t_dangky where id=$id";
     $run= mysqli_query($conn,$sql);
     return $run;
	}

	public function delete_que($id)
	{
     global $conn;
     $sql="delete from quequan where id_que=$id";
     $run= mysqli_query($conn,$sql);
     return $run;
	}

    public function update_user($tendn,$hoten,$email,$gioitinh,$ngaysinh,$noio,$id){
	 global $conn;
	 $sql="update t_dangky SET tendangnhap='$tendn',hoten='$hoten',email='$email',gioitinh='$gioitinh',ngaysinh='$ngaysinh',noio='$noio' where  id=$id";
	 $run=mysqli_query($conn,$sql);
	 return $run;
	}

	public function update_que($tenque,$id){
		global $conn;
		$sql="update quequan SET tenque='$tenque' where  id_que=$id ";
		$run=mysqli_query($conn,$sql);
		return $run;
	   }

	public function select_que()
	{
		global $conn;
		$sql="select * from quequan ";
		$run=mysqli_query($conn,$sql);
		$data=array();
		while($rows=mysqli_fetch_array($run))
		{$data[]=$rows;}
		return $data; 
	}

	public function insert_que($tenque)
	{
		global $conn;
		$sql="insert into quequan (tenque) values ('$tenque')";
		$run=mysqli_query($conn,$sql);
		return $run;
	}

public function themanh($file)
{
	global $conn;
	$sql="insert into t_dangky(hinhanh) values ('$file')";
	$run=mysqli_query($conn,$sql);
	return $run;
}


}
?>