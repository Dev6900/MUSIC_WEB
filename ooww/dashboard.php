<?php
session_start();

// Check if the user is logged in
if (!isset($_SESSION['username'])) {
    // Redirect to signup page if not logged in
    header("Location: signup.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Dashboard</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <header>
        <h1>User Dashboard</h1>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="logout.php">Logout</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <h2>Welcome, <span id="username-display">
                <?php echo htmlspecialchars($_SESSION['username']); ?>
            </span></h2>
        <p>This is your dashboard. You are logged in.</p>
        <p>Feel free to explore and enjoy your music taste.</p>
        
    </main>

    <footer>
        <p>&copy; 2023 Music Website</p>
    </footer>
</body>

</html>