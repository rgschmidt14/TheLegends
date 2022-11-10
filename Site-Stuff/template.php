<!DOCTYPE html>
<html lang="en">
<?php $currentFilename = ucwords(str_replace("_"," ", pathinfo(basename(__FILE__), PATHINFO_FILENAME)));?>
<head>
    <!-- This should all be in a php snippet require_once call in case of future updates needed, but maybe several smaller snippets so they are still easily editable per page as needed-->
    <?php require_once $_SERVER['DOCUMENT_ROOT'] .'/THELEGENDS/Snippets/head-meta.php' ?>
    <!-- Descriptions -->
    <title>PHP Motors | <?php echo $currentFilename?></title>
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&family=Indie+Flower&family=Permanent+Marker&family=Secular+One&display=swap" rel="stylesheet">
    <!-- CSS -->
    <link rel="stylesheet" href="/phpmotors/css/normalize.css">
    <style>
        <?php require_once $_SERVER['DOCUMENT_ROOT'] .'/phpmotors/css/phpmotors.css' ?>
    </style>
</head>
<body>
    <header>
        <?php require_once $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/snippets/header.php'; ?>
    </header>
    <main>
        <h1><?php echo $currentFilename?></h1>
    </main>
    <footer>
        <?php require_once $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/snippets/footer.php'; ?>
    </footer>
    <?php require_once $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/snippets/scripts.php'; ?>
</body>
</html>