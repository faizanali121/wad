<?php

require "db_connection.php";

function getCategory()
{
    global $cat;
    $getCatQuery="select *from categories";
    $result = mysqli_query($cat,$getCatQuery);
    while ($row =mysqli_fetch_assoc($result))
    {
        $title=$row ['category_title'];
        $id=$row ['category_id'];
        echo "<li> <a class='nav-link'  href='#'>$title</a> </li>";
    }
}

function getBrand()
{
    global $cat;
    $getCatQuery="select *from brands";
    $result = mysqli_query($cat,$getCatQuery);
    while ($row =mysqli_fetch_assoc($result))
    {
        $title=$row ['brand_title'];
        $id=$row ['brand_id'];
        echo "<li> <a class='nav-link'  href='#'>$title</a> </li>";
    }
}
?>