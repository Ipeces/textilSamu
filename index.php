<!doctype html>
<html lang="es">
	<head>

		<meta charset="utf-8" />
		<meta name="author" content="tu nombre" />
		<title>Creación de tejidos</title>
		<link href="css/index.css" rel="stylesheet" type="text/css" />
		<script src="js/index.js" type="text/javascript"> </script>
		<link rel="stylesheet" href="http://code.jquery.com/ui/1.11.2/themes/smoothness/jquery-ui.css">
	<script src="http://code.jquery.com/jquery-1.11.2.js"></script>
	<script src="http://code.jquery.com/ui/1.11.2/jquery-ui.js"></script>
		
	</head>
	<body>
		<header>
		<h1>Creación de tejidos</h1>	
		</header>
		<nav>
		</nav>
		<main>
			<section>
				<article>
					<fieldset name="crear">
						<legend>Patrón del tejido</legend>
						<Form name="formulario" >
							<input type="text" name="prim"><label>e</label><input type="text" name="segun">
							<input type="button" name="crear" value="Crear Tejido">
						</form>
						<canvas id="tejido" width="500" height="500" style="border:1px solid #000000; margin:20px;" ></canvas>
					</fieldset>
				</article>
			</section>
			<section>
				<article>
					<fieldset name="tennir">
						<legend>Tinción del tejido<legend>
						<form name="tincion">
							<label>elige un color para cada hilo</label>
							<input type="color" name="color">
						</form>
						<canvas id="tincion" width="500" height="500" style="border:1px solid #000000; margin:20px;"></canvas>
					</fieldset>
				</article>
			</section>
		</main>
		<footer>
		</footer>
		<aside>
		</aside>
	</body>
</html>
	   