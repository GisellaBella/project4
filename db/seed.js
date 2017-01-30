var DB = require("../models").models;

var spanishCreate = function() {
	return DB.Spanish.bulkCreate([{
    english_phrase: "And you?",
    spanish_phrase: "¿Y Tú?"
}, {
    english_phrase: "Beans",
    spanish_phrase: "Frijoles"
}, {
    english_phrase: "Big/ Small",
    spanish_phrase: "Grande/ Pequeño"
}, {
    english_phrase: "Bless you (when sneezing)",
    spanish_phrase: "¡Salud!"
}, {
    english_phrase: "Bless you.",
    spanish_phrase: "Salud."
}, {
    english_phrase: "Call me.",
    spanish_phrase: "Llámame."
}, {
    english_phrase: "Call me. (Talk to me)",
    spanish_phrase: "Háblame."
}, {
    english_phrase: "Can I enter/come in?",
    spanish_phrase: "Puedo entrar/pasar?"
}, {
    english_phrase: "Can I have a napkin, please?",
    spanish_phrase: "Puedo tener una servilleta?"
}, {
    english_phrase: "Can I have more, please?",
    spanish_phrase: "Puedo tener más, por favor?"
}, {
    english_phrase: "Can I have one?",
    spanish_phrase: "Puedo tener uno?"
}, {
    english_phrase: "Can I have water, please?",
    spanish_phrase: "Puedo tener agua, por favor?"
}, {
    english_phrase: "Can I help you?",
    spanish_phrase: "¿Podría Ayudarse?"
}, {
    english_phrase: "Can we share?",
    spanish_phrase: "Podemos compartir?"
}, {
    english_phrase: "Can you help me?",
    spanish_phrase: "¿Puede Ayudarme?"
}, {
    english_phrase: "Can you help me?",
    spanish_phrase: "Me puedes ayudar?"
}, {
    english_phrase: "Can you hold this, please?",
    spanish_phrase: "Puedes guardarlo, por favor?"
}, {
    english_phrase: "Can you loan me $5?",
    spanish_phrase: "Me puedes prestar $5?"
}, {
    english_phrase: "Can you pass the salt/pepper?",
    spanish_phrase: "Me puede pasar la sal/el pimiento?"
}, {
    english_phrase: "Can You Say It Again?",
    spanish_phrase: "¡Puede Repetirlo!"
}, {
    english_phrase: "Can You Speak Slowly?",
    spanish_phrase: "¡Puedes Hablar Más Despacio!"
}, {
    english_phrase: "Cheese",
    spanish_phrase: "Queso"
}, {
    english_phrase: "Come with me!",
    spanish_phrase: "¡Venga Conmigo!"
}, {
    english_phrase: "Common Questions",
    spanish_phrase: "Preguntas Más Frecuentes"
}, {
    english_phrase: "Congratulations!",
    spanish_phrase: "¡felicidades!"
}, {
    english_phrase: "Did you like it here?",
    spanish_phrase: "¿Le gusta a usted aquí?"
}, {
    english_phrase: "Do you have change?",
    spanish_phrase: "Tienes cambio?"
}, {
    english_phrase: "Do you have children?",
    spanish_phrase: "Tienes hijos?"
}, {
    english_phrase: "Do you like it?",
    spanish_phrase: "¿Te Gusta? ¿Te Encanta?"
}, {
    english_phrase: "Do you sell _______ here?",
    spanish_phrase: "Se vende ______ aquí?"
}, {
    english_phrase: "Do you speak (English/ Spanish)?",
    spanish_phrase: "¿Hablas (Inglés/ Español)?"
}, {
    english_phrase: "Do you want one?",
    spanish_phrase: "Quieres uno?"
}, {
    english_phrase: "Do you want to buy this?",
    spanish_phrase: "¿Quiere comprarlo usted?"
}, {
    english_phrase: "Don't worry!",
    spanish_phrase: "¡No Te Preocupes!"
}, {
    english_phrase: "Enjoy! (for meals...)",
    spanish_phrase: "¡Que Aproveche!"
}, {
    english_phrase: "Excuse me ...! (to ask for something)",
    spanish_phrase: "¡Perdone! / ¡Oiga!"
}, {
    english_phrase: "Excuse me! ( to pass by)",
    spanish_phrase: "¡Perdone! / Disculpe!"
}, {
    english_phrase: "Excuse me.",
    spanish_phrase: "Con permiso. OR Perdóname"
}, {
    english_phrase: "Fork",
    spanish_phrase: "Tenedor"
}, {
    english_phrase: "Four, Five, Six",
    spanish_phrase: "Cuatro, Cinco, Seis"
}, {
    english_phrase: "Give me this!",
    spanish_phrase: "¡Dame Eso!"
}, {
    english_phrase: "Go straight! then turn left/ right!",
    spanish_phrase: "¡Vaya Ud Derecho! Pues Tuerza Ud por la Izquierda/ Derecha!"
}, {
    english_phrase: "Good afternoon.",
    spanish_phrase: "Buenas tardes."
}, {
    english_phrase: "Good bye!",
    spanish_phrase: "¡Adiós!"
}, {
    english_phrase: "Good evening!",
    spanish_phrase: "¡Buenas Tardes!"
}, {
    english_phrase: "Good evening. (greeting)",
    spanish_phrase: "Buenas noches."
}, {
    english_phrase: "Good luck!",
    spanish_phrase: "¡Que Tenga Suerte!"
}, {
    english_phrase: "Good morning!",
    spanish_phrase: "¡Buenos Días!"
}, {
    english_phrase: "Good morning.",
    spanish_phrase: "Buenos días."
}, {
    english_phrase: "Good night and sweet dreams!",
    spanish_phrase: "¡Buenas Noches Y Dulces Sueños!"
}, {
    english_phrase: "Good night!",
    spanish_phrase: "¡Buenas noches!"
}, {
    english_phrase: "Good/ Bad/ So-So.",
    spanish_phrase: "Bueno/ Malo/ Así Así"
}, {
    english_phrase: "Good/ So-So.",
    spanish_phrase: "Bíen/ Así Así"
}, {
    english_phrase: "Goodbye.",
    spanish_phrase: "Adiós."
}, {
    english_phrase: "Goodbyes",
    spanish_phrase: "Despedidas"
}, {
    english_phrase: "Greetings",
    spanish_phrase: "Saludos"
}, {
    english_phrase: "Hamburger",
    spanish_phrase: "Hamburguesa"
}, {
    english_phrase: "Happy birthday!",
    spanish_phrase: "¡Feliz Cumpleaños!"
}, {
    english_phrase: "Happy new year!",
    spanish_phrase: "¡Feliz Año Nuevo!"
}, {
    english_phrase: "Have a good day!",
    spanish_phrase: "Ten un buen día!"
}, {
    english_phrase: "Hello, my name is John.",
    spanish_phrase: "Hola, me llamo Juan."
}, {
    english_phrase: "Hello! How are you?",
    spanish_phrase: "Hola! Cómo estás?"
}, {
    english_phrase: "Here you go! (when giving something)",
    spanish_phrase: "¡Aquí Tiene!"
}, {
    english_phrase: "Hey! Friend!",
    spanish_phrase: "¡Eh! ¡Amigo!"
}, {
    english_phrase: "Hi!",
    spanish_phrase: "¡Hola!"
}, {
    english_phrase: "Hold on please! (phone)",
    spanish_phrase: "¡No Cuelgue, Por Favor!"
}, {
    english_phrase: "How are you?",
    spanish_phrase: "¿Cómo está usted?"
}, {
    english_phrase: "How are you?",
    spanish_phrase: "¿Cómo Estás?"
}, {
    english_phrase: "How Do You Say ",
    spanish_phrase: "¿Cómo Se Dice "
}, {
    english_phrase: "How do you say maybe in Spanish?",
    spanish_phrase: "¿Cómo se dice maybe en Español?"
}, {
    english_phrase: "How long have you lived here?",
    spanish_phrase: "Cuánto tiempo tienes aquí?"
}, {
    english_phrase: "How many are there?",
    spanish_phrase: "¿Cuántos hay?"
}, {
    english_phrase: "How much does it cost?",
    spanish_phrase: "¿Cuánto cuesta?"
}, {
    english_phrase: "How much does it cost?",
    spanish_phrase: "Cuánto cuesta?"
}, {
    english_phrase: "How much is this?",
    spanish_phrase: "¿Cuánto Vale/ Cuesta Eso?"
}, {
    english_phrase: "How old are you?",
    spanish_phrase: "¿Cuántos Años Tienes?"
}, {
    english_phrase: "Hurry up!",
    spanish_phrase: "¡Date Prisa!"
}, {
    english_phrase: "I am fine.",
    spanish_phrase: "Estoy bien."
}, {
    english_phrase: "I am lost. Where is the restroom?",
    spanish_phrase: "Estoy perdido. ¿Dónde está el baño?"
}, {
    english_phrase: "I do not understand.",
    spanish_phrase: "Yo no comprendo."
}, {
    english_phrase: "I Don't Know!",
    spanish_phrase: "¡No (Lo) Sé!"
}, {
    english_phrase: "I Don't Understand!",
    spanish_phrase: "¡No Entiendo!"
}, {
    english_phrase: "I don’t have children.",
    spanish_phrase: "No tengo hijos."
}, {
    english_phrase: "I feel sick.",
    spanish_phrase: "Estoy Mareado"
}, {
    english_phrase: "I have allergies.",
    spanish_phrase: "Tengo alergiás."
}, {
    english_phrase: "I Have No Idea.",
    spanish_phrase: "¡No Tengo Ni Idea!"
}, {
    english_phrase: "I have to go",
    spanish_phrase: "Me Tengo Que Ir."
}, {
    english_phrase: "I have two sons/daughters.",
    spanish_phrase: "Tengo dos hijos/hijas."
}, {
    english_phrase: "I hope you have a good day!",
    spanish_phrase: "Que tenga un buen día!"
}, {
    english_phrase: "I like Spanish",
    spanish_phrase: "Me Gusta El Español"
}, {
    english_phrase: "I live in (the U.S/ Spain)",
    spanish_phrase: "Vivo En (los Estados Unidos/ España)"
}, {
    english_phrase: "I love you!",
    spanish_phrase: "¡Te Quiero!"
}, {
    english_phrase: "I missed you so much!",
    spanish_phrase: "Te extrañé mucho!"
}, {
    english_phrase: "I need a doctor",
    spanish_phrase: "!Necesito un medico!"
}, {
    english_phrase: "I need to practice my Spanish",
    spanish_phrase: "me falta práctica en Español"
}, {
    english_phrase: "I really like it!",
    spanish_phrase: "¡Me Gusta/ Encanta Mucho!"
}, {
    english_phrase: "I want a…",
    spanish_phrase: "Quiero un…"
}, {
    english_phrase: "I will be right back!",
    spanish_phrase: "Regreso En Un Momentito."
}, {
    english_phrase: "I work as a (translator/ businessman)",
    spanish_phrase: "Trabajo Como (Traductor/ Hombre de Negocios)"
}, {
    english_phrase: "I would like…",
    spanish_phrase: "Me gustaría…"
}, {
    english_phrase: "I'd like to visit Spain one day",
    spanish_phrase: "Me Gustaría Visitar Algún Día Tu País"
}, {
    english_phrase: "I'm (American)",
    spanish_phrase: "Soy (americano/ americana)"
}, {
    english_phrase: "I'm (twenty, thirty...) years old.",
    spanish_phrase: "Tengo (veinte ...treinta) Años."
}, {
    english_phrase: "I'm fine, thanks!",
    spanish_phrase: "Estoy Bíen ¡Gracias!"
}, {
    english_phrase: "I'm from (the U.S/ Spain)",
    spanish_phrase: "Soy De (los Estados Unidos/ España..) / Soy (americano)"
}, {
    english_phrase: "I'm hungry/ thirsty.",
    spanish_phrase: "Tengo Hambre/ Sed."
}, {
    english_phrase: "I'm looking for john.",
    spanish_phrase: "Estoy Buscando A Juan."
}, {
    english_phrase: "I'm lost",
    spanish_phrase: "Estoy perdido"
}, {
    english_phrase: "I'm Sorry! (if you don't hear something)",
    spanish_phrase: "¡Discuple!"
}, {
    english_phrase: "I'm sorry.",
    spanish_phrase: "Lo siento."
}, {
    english_phrase: "I've been learning Spanish for 1 month",
    spanish_phrase: "Tengo Un Mes Estudiando Español"
}, {
    english_phrase: "I’m a doctor, professor, lawyer.",
    spanish_phrase: "Soy doctor, profesor, abogado."
}, {
    english_phrase: "I’m a vegetarian/vegan.",
    spanish_phrase: "Soy vegetariano/vegan."
}, {
    english_phrase: "I’m from ____________.",
    spanish_phrase: "Soy de _____________."
}, {
    english_phrase: "In The Morning/ Evening/ At Night.",
    spanish_phrase: "Por La Mañana/ Tarde/ Noche."
}, {
    english_phrase: "It was a pleasure to meet you.",
    spanish_phrase: "Fue un placer conocerte."
}, {
    english_phrase: "It's 10 o'clock. 07:30pm.",
    spanish_phrase: "Son las diez en punto. Las siete y media."
}, {
    english_phrase: "Just a little.",
    spanish_phrase: "Solo Un Poquito."
}, {
    english_phrase: "Knife",
    spanish_phrase: "Cuchillo"
}, {
    english_phrase: "Lettuce",
    spanish_phrase: "Lechuga"
}, {
    english_phrase: "Lime/lemon",
    spanish_phrase: "Limón"
}, {
    english_phrase: "Look!",
    spanish_phrase: "¡Mira!"
}, {
    english_phrase: "Me/ You. Him/ Her.",
    spanish_phrase: "Yo/ Tú. Él/ Ella"
}, {
    english_phrase: "Merry Christmas!",
    spanish_phrase: "¡Feliz Navidad!"
}, {
    english_phrase: "Mr.../ Mrs.…/ Miss…",
    spanish_phrase: "Señor.../ Señora.../ Señorita..."
}, {
    english_phrase: "My name is __________.",
    spanish_phrase: "Me llamo __________."
}, {
    english_phrase: "My name is ...",
    spanish_phrase: "Me llamo ..."
}, {
    english_phrase: "My Spanish is bad.",
    spanish_phrase: "Mi Español Es Malo"
}, {
    english_phrase: "Nice to meet you!",
    spanish_phrase: "¡Tanto Gusto! / Medio Gusto Conocerte!"
}, {
    english_phrase: "Nice to meet you.",
    spanish_phrase: "Mucho gusto."
}, {
    english_phrase: "No meat, please.",
    spanish_phrase: "Sin carne, por favor."
}, {
    english_phrase: "No Problem!",
    spanish_phrase: "¡No Problema!"
}, {
    english_phrase: "No.",
    spanish_phrase: "No."
}, {
    english_phrase: "Nothing much",
    spanish_phrase: "Nada"
}, {
    english_phrase: "Oh! That's good!",
    spanish_phrase: "!Oh, qué bueno!"
}, {
    english_phrase: "One beer, please.",
    spanish_phrase: "Una cerveza, por favor."
}, {
    english_phrase: "One glass of red/white wine, please.",
    spanish_phrase: "Una copa de vino rojo/blanco, por favor."
}, {
    english_phrase: "One moment please!",
    spanish_phrase: "¡Un Momento, Por Favor!"
}, {
    english_phrase: "One, Two, Three",
    spanish_phrase: "Uno, Dos, Tres"
}, {
    english_phrase: "Pasta",
    spanish_phrase: "Pasta"
}, {
    english_phrase: "Please.",
    spanish_phrase: "Por favor."
}, {
    english_phrase: "Really!",
    spanish_phrase: "¡Verdad!"
}, {
    english_phrase: "Rice",
    spanish_phrase: "Arróz"
}, {
    english_phrase: "Sandwich",
    spanish_phrase: "Sándwich, Bocadillo"
}, {
    english_phrase: "Say hi to John for me",
    spanish_phrase: "Dale Saludos A ( Juan ...) De Mi Parte"
}, {
    english_phrase: "See you in a little bit!",
    spanish_phrase: "Nos vemos al rato! (en México)"
}, {
    english_phrase: "See you later!",
    spanish_phrase: "¡Hasta luego!"
}, {
    english_phrase: "See you later!",
    spanish_phrase: "Hasta luego!"
}, {
    english_phrase: "See you later.",
    spanish_phrase: "Hasta luego."
}, {
    english_phrase: "Seven, Eight, Nine, Ten",
    spanish_phrase: "Siete, Ocho, Nueve, Diez"
}, {
    english_phrase: "Sorry (for a mistake)",
    spanish_phrase: "¡Lo Siento!"
}, {
    english_phrase: "Spain is a wonderful country",
    spanish_phrase: "España Es Un País Maravelloso"
}, {
    english_phrase: "Spoon",
    spanish_phrase: "Cuchara"
}, {
    english_phrase: "Straw",
    spanish_phrase: "Popote"
}, {
    english_phrase: "Thank you (very much)!",
    spanish_phrase: "¡(Muchas) Gracias!"
}, {
    english_phrase: "Thank you.",
    spanish_phrase: "Gracías."
}, {
    english_phrase: "There are many.",
    spanish_phrase: "Hay muchos."
}, {
    english_phrase: "This/ That. Here/There",
    spanish_phrase: "Eso/Ese. Aquí/ Allí"
}, {
    english_phrase: "Today/ Now",
    spanish_phrase: "Hoy/ Ahora"
}, {
    english_phrase: "Tomato",
    spanish_phrase: "Tomate"
}, {
    english_phrase: "Tomorrow/ Yesterday",
    spanish_phrase: "Mañana/ Ayer"
}, {
    english_phrase: "We’ll meet on _________ (day).",
    spanish_phrase: "Nos reunimos el ________ (día)."
}, {
    english_phrase: "We’ll see each other later!",
    spanish_phrase: "Nos vemos!"
}, {
    english_phrase: "We’ll talk later.",
    spanish_phrase: "Nos hablamos luego."
}, {
    english_phrase: "Welcome! (to greet someone)",
    spanish_phrase: "¡Bienvenido!"
}, {
    english_phrase: "What do you do for a living?",
    spanish_phrase: "¿A Qué Te Dedicas?"
}, {
    english_phrase: "What Does ",
    spanish_phrase: "¿Qué Quiere Decir "
}, {
    english_phrase: "What Is This?",
    spanish_phrase: "¿Qué Es Esto?"
}, {
    english_phrase: "What is your last name?",
    spanish_phrase: "Cuál es tu apellido?"
}, {
    english_phrase: "What is your name?",
    spanish_phrase: "¿Cómo se llama usted?"
}, {
    english_phrase: "What time is it?",
    spanish_phrase: "¿Qué hora es?"
}, {
    english_phrase: "What would you like to drink?",
    spanish_phrase: "Qué le gustaría tomar/beber?"
}, {
    english_phrase: "What would you like to eat?",
    spanish_phrase: "Qué le gustaría comer?"
}, {
    english_phrase: "What? Where?",
    spanish_phrase: "¿Qué? ¿Dónde?"
}, {
    english_phrase: "What's new?",
    spanish_phrase: "¿Qué Hay De Nuevo?"
}, {
    english_phrase: "What's That Called In Spanish?",
    spanish_phrase: "¿Cómo Se llama a Esto En Español?"
}, {
    english_phrase: "What's your name?",
    spanish_phrase: "¿Cómo te llamas?"
}, {
    english_phrase: "What’s your name?",
    spanish_phrase: "Cómo te llamas?"
}, {
    english_phrase: "Where are we right now?",
    spanish_phrase: "Dónde estamos ahora?"
}, {
    english_phrase: "Where are you from?",
    spanish_phrase: "¿De Dónde Eres?"
}, {
    english_phrase: "Where are you from?",
    spanish_phrase: "De dónde eres?"
}, {
    english_phrase: "Where do you live?",
    spanish_phrase: "¿Dónde Vives?"
}, {
    english_phrase: "Where do you live?",
    spanish_phrase: "Dónde vives?"
}, {
    english_phrase: "Where do you work?",
    spanish_phrase: "Dónde trabajas?"
}, {
    english_phrase: "Where is my room?",
    spanish_phrase: "Dónde está mi cuarto?"
}, {
    english_phrase: "Where is the __________ street?",
    spanish_phrase: "Dónde está la calle ________?"
}, {
    english_phrase: "Where is the (bathroom/ pharmacy)?",
    spanish_phrase: "¿Dónde Está (el Baño/ la Farmacia)?"
}, {
    english_phrase: "Where is the bathroom?",
    spanish_phrase: "Dónde está el baño?"
}, {
    english_phrase: "Where is the bus?",
    spanish_phrase: "Dónde está el autobús?"
}, {
    english_phrase: "Who?",
    spanish_phrase: "¿Quièn?"
}, {
    english_phrase: "Why?",
    spanish_phrase: "¿Por què?"
}, {
    english_phrase: "With…",
    spanish_phrase: "Con…"
}, {
    english_phrase: "Without…",
    spanish_phrase: "Sin…"
}, {
    english_phrase: "Would you speak slower, please.",
    spanish_phrase: "Por favor, habla mas despacio."
}, {
    english_phrase: "Write It Down Please!",
    spanish_phrase: "¡Escríbalo, Por Favor!"
}, {
    english_phrase: "Yes.",
    spanish_phrase: "Sí."
}, {
    english_phrase: "Yes/ No",
    spanish_phrase: "Sí/ No"
}, {
    english_phrase: "You are welcome (it was nothing).",
    spanish_phrase: "De nada."
}, {
    english_phrase: "You're very kind!",
    spanish_phrase: "¡Eres Muy Amable!"
}, {
    english_phrase: "You're welcome! (for ",
    spanish_phrase: "¡De Nada!"
}]);
};

var italianCreate = function() {
	return DB.Italian.bulkCreate([{ english_phrase: "See you later!",
   italian_phrase: "A dopo"
}, {
    english_phrase: "...fizzy water",
   italian_phrase: "acqua gassata"
}, {
    english_phrase: "...still water",
   italian_phrase: "acqua non gassata"
}, {
    english_phrase: "Goodbye",
   italian_phrase: "Arrivederci"
}, {
    english_phrase: "Good bye!",
   italian_phrase: "Arrivederci!"
}, {
    english_phrase: "Hold on please! (phone)",
   italian_phrase: "Attenda prego!"
}, {
    english_phrase: "Good, thank you",
   italian_phrase: "Bene, grazie"
}, {
    english_phrase: "I'm fine, thanks!",
   italian_phrase: "Bene, grazie!"
}, {
    english_phrase: "Good/ So-So.",
   italian_phrase: "Bene/ così e così."
}, {
    english_phrase: "Welcome! (to greet someone)",
   italian_phrase: "Benvenuto!/ Benvenuta! (female)"
}, {
    english_phrase: "...beer",
   italian_phrase: "birra"
}, {
    english_phrase: "steak",
   italian_phrase: "bistecca"
}, {
    english_phrase: "Enjoy! (for meals...)",
   italian_phrase: "Buon appetito!"
}, {
    english_phrase: "Happy birthday!",
   italian_phrase: "Buon compleanno!"
}, {
    english_phrase: "Good day",
   italian_phrase: "Buon giorno"
}, {
    english_phrase: "Merry Christmas!",
   italian_phrase: "Buon natale!"
}, {
    english_phrase: "Good luck!",
   italian_phrase: "Buona fortuna!"
}, {
    english_phrase: "Good night",
   italian_phrase: "Buona notte"
}, {
    english_phrase: "Good night and sweet dreams!",
   italian_phrase: "Buona notte e sogni d'oro!"
}, {
    english_phrase: "Good night!",
   italian_phrase: "Buona notte!"
}, {
    english_phrase: "Good evening",
   italian_phrase: "Buona sera"
}, {
    english_phrase: "Good evening!",
   italian_phrase: "Buona sera!"
}, {
    english_phrase: "Good morning!",
   italian_phrase: "Buongiorno!"
}, {
    english_phrase: "Good/ Bad/ So-So.",
   italian_phrase: "Buono/ Cattivo/ Così e così"
}, {
    english_phrase: "Is there a cheaper one?",
   italian_phrase: "C'é una più economica?"
}, {
    english_phrase: "Is there WiFi?",
   italian_phrase: "C'é WiFi?"
}, {
    english_phrase: "I understand.",
   italian_phrase: "Capisco"
}, {
    english_phrase: "meat",
   italian_phrase: "carne"
}, {
    english_phrase: "What time is it?",
   italian_phrase: "Che ore sono?"
}, {
    english_phrase: "Hi!",
   italian_phrase: "Ciao!"
}, {
    english_phrase: "Hey! Friend!",
   italian_phrase: "Ciao! Amico!"
}, {
    english_phrase: "How Do You Say ",
   italian_phrase: "Come dite “please” in italiano?"
}, {
    english_phrase: "What's That Called In Italian?",
   italian_phrase: "Come si chiama quella cosa in italiano?"
}, {
    english_phrase: "How are you?",
   italian_phrase: "Come stai?"
}, {
    english_phrase: "How are you?",
   italian_phrase: "Come stai?/ Come state (polite)?"
}, {
    english_phrase: "What’s your name?",
   italian_phrase: "Come ti chiami?"
}, {
    english_phrase: "with private bathroom",
   italian_phrase: "con bagno"
}, {
    english_phrase: "Congratulations!",
   italian_phrase: "Congratulazioni!"
}, {
    english_phrase: "What Is This?",
   italian_phrase: "Cos'è questa cosa?"
}, {
    english_phrase: "What's new?",
   italian_phrase: "Cosa c'è di nuovo?"
}, {
    english_phrase: "What do you do for a living?",
   italian_phrase: "cosa fai per vivere?"
}, {
    english_phrase: "What Does ",
   italian_phrase: "Cosa significa "
}, {
    english_phrase: "What does that mean?",
   italian_phrase: "Cosa significa?"
}, {
    english_phrase: "What are you doing (at the moment)?",
   italian_phrase: "Cosa stai facendo adesso?"
}, {
    english_phrase: "What do you like doing?",
   italian_phrase: "Cosa ti piace fare?"
}, {
    english_phrase: "What? Where?",
   italian_phrase: "Cosa? Dove?"
}, {
    english_phrase: "side dish [veggies always come seperately]",
   italian_phrase: "cotorno"
}, {
    english_phrase: "Give me this!",
   italian_phrase: "Dammi questo!"
}, {
    english_phrase: "Really!",
   italian_phrase: "Davvero!"
}, {
    english_phrase: "I have to go",
   italian_phrase: "Devo andare"
}, {
    english_phrase: "Where are you from?",
   italian_phrase: "Di dove sei?/ Di dove è? (polite)"
}, {
    english_phrase: "In The Morning/ Evening/ At Night.",
   italian_phrase: "Di mattina/ Di sera/ Di notte. "
}, {
    english_phrase: "dessert",
   italian_phrase: "dolce"
}, {
    english_phrase: "Tomorrow/ Yesterday",
   italian_phrase: "Domani/ ieri"
}, {
    english_phrase: "double room for single use [will often be offered if singles are unavailable]",
   italian_phrase: "doppia uso singola"
}, {
    english_phrase: "Where is?",
   italian_phrase: "Dov'é"
}, {
    english_phrase: "Where do you live?",
   italian_phrase: "Dove abiti?"
}, {
    english_phrase: "Where is the (bathroom/ pharmacy)?",
   italian_phrase: "Dove posso trovare (il bagno/ la farmacia?)"
}, {
    english_phrase: "Where do you live?",
   italian_phrase: "Dove vivi?/ Dove vive? (polite)"
}, {
    english_phrase: "and",
   italian_phrase: "e"
}, {
    english_phrase: "Is service included?",
   italian_phrase: "É incluso il servizio?"
}, {
    english_phrase: "Is breakfast included?",
   italian_phrase: "É incluso la prima colazione?"
}, {
    english_phrase: "That's too much",
   italian_phrase: "É troppo"
}, {
    english_phrase: "And you?",
   italian_phrase: "e tu? e lei? (polite)"
}, {
    english_phrase: "Nice to meet you!",
   italian_phrase: "è un piacere conoscerti!/ è un piacere conoscerla (polite)"
}, {
    english_phrase: "Here you go! (when giving something)",
   italian_phrase: "Eccolo!"
}, {
    english_phrase: "Happy new year!",
   italian_phrase: "Felice anno nuovo!"
}, {
    english_phrase: "Oh! That's good!",
   italian_phrase: "Grande!"
}, {
    english_phrase: "Big/ Small",
   italian_phrase: "Grande/ Piccolo"
}, {
    english_phrase: "thanks",
   italian_phrase: "grazie"
}, {
    english_phrase: "thank you",
   italian_phrase: "grazie"
}, {
    english_phrase: "thank you very much",
   italian_phrase: "grazie mille"
}, {
    english_phrase: "Thank you (very much)!",
   italian_phrase: "Grazie! / (Molte grazie)!"
}, {
    english_phrase: "Look!",
   italian_phrase: "Guarda!"
}, {
    english_phrase: "I’m [...] years old.",
   italian_phrase: "Ho … anni"
}, {
    english_phrase: "I'm (twenty, thirty...) years old.",
   italian_phrase: "Ho (venti, trenta …) anni."
}, {
    english_phrase: "I need to practice my Italian",
   italian_phrase: "ho bisogno di fare pratica con il mio italiano"
}, {
    english_phrase: "I need a doctor",
   italian_phrase: "Ho bisogno di un dottore!"
}, {
    english_phrase: "Check, please",
   italian_phrase: "Il conto, per favore"
}, {
    english_phrase: "My Italian is bad.",
   italian_phrase: "il mio italiano è orribile."
}, {
    english_phrase: "My first name is [...]",
   italian_phrase: "Il mio nome è"
}, {
    english_phrase: "Me/ You. Him/ Her.",
   italian_phrase: "io/ tu, voi (you polite). Lui/ Lei"
}, {
    english_phrase: "English Greetings",
   italian_phrase: "Italian Greetings:"
}, {
    english_phrase: "Italy is a wonderful country",
   italian_phrase: "L'italia è un paese meraviglioso."
}, {
    english_phrase: "I work as a (translator/ businessman)",
   italian_phrase: "Lavoro come (traduttore/ uomo d'affari)"
}, {
    english_phrase: "Do you speak english? (formal)",
   italian_phrase: "Lei parla Inglese?"
}, {
    english_phrase: "...a half-liter of",
   italian_phrase: "mezzo litro di"
}, {
    english_phrase: "My name is [...].",
   italian_phrase: "mi chiamo"
}, {
    english_phrase: "My name is ...",
   italian_phrase: "Mi chiamo ..."
}, {
    english_phrase: "I'm sorry",
   italian_phrase: "Mi dispiace"
}, {
    english_phrase: "I really like it!",
   italian_phrase: "Mi piace davvero."
}, {
    english_phrase: "I like Italian",
   italian_phrase: "Mi piace l'italiano."
}, {
    english_phrase: "I'd like to visit Italy one day",
   italian_phrase: "Mi piacerebbe visitare l'Italia un giorno di questi!"
}, {
    english_phrase: "Excuse me!",
   italian_phrase: "Mi scusi!"
}, {
    english_phrase: "I'm Sorry! (if you don't hear something)",
   italian_phrase: "Mi scusi? / Prego ?"
}, {
    english_phrase: "I missed you so much!",
   italian_phrase: "Mi sei mancato molto!"
}, {
    english_phrase: "I feel sick.",
   italian_phrase: "Mi sento male!"
}, {
    english_phrase: "I'm lost",
   italian_phrase: "Mi sono perso/ persa (feminine)"
}, {
    english_phrase: "very bad",
   italian_phrase: "molto male"
}, {
    english_phrase: "no",
   italian_phrase: "no"
}, {
    english_phrase: "No, I don’t speak english.",
   italian_phrase: "No, non parlo inglese"
}, {
    english_phrase: "No Problem!",
   italian_phrase: "Non c'è problema!"
}, {
    english_phrase: "I don’t understand",
   italian_phrase: "Non capisco"
}, {
    english_phrase: "I don't understand",
   italian_phrase: "Non capisco"
}, {
    english_phrase: "I Don't Understand!",
   italian_phrase: "Non capisco!"
}, {
    english_phrase: "I don’t know.",
   italian_phrase: "non lo so"
}, {
    english_phrase: "I Don't Know!",
   italian_phrase: "Non lo so!"
}, {
    english_phrase: "Not bad, thanks!",
   italian_phrase: "Non male, grazie!"
}, {
    english_phrase: "Nothing much",
   italian_phrase: "Non molto"
}, {
    english_phrase: "I Have No Idea.",
   italian_phrase: "Non ne ho idea!"
}, {
    english_phrase: "I don’t speak Polish.",
   italian_phrase: "Non parlo Polacco"
}, {
    english_phrase: "Don't worry!",
   italian_phrase: "non ti preoccupare !"
}, {
    english_phrase: "Today/ Now",
   italian_phrase: "Oggi/ Adesso"
}, {
    english_phrase: "Do you speak English?",
   italian_phrase: "Parla Inglese?"
}, {
    english_phrase: "Please talk more slowly!",
   italian_phrase: "Parla più piano perfavore!"
}, {
    english_phrase: "Do you speak (English/ Italian)?",
   italian_phrase: "Parli (inglese/italiano)?/ Parla (inglese/italiano)? (polite)"
}, {
    english_phrase: "Do you speak english? (informal)",
   italian_phrase: "Parli Inglese?"
}, {
    english_phrase: "I speak a little Polish.",
   italian_phrase: "Parlo poco Polacco"
}, {
    english_phrase: "for two nights",
   italian_phrase: "per due notti"
}, {
    english_phrase: "please",
   italian_phrase: "per favore"
}, {
    english_phrase: "...for 8pm",
   italian_phrase: "per le otto"
}, {
    english_phrase: "...for 7pm",
   italian_phrase: "per le sette"
}, {
    english_phrase: "...for 7:30pm",
   italian_phrase: "per le sette e mezzo"
}, {
    english_phrase: "please / you’re welcome",
   italian_phrase: "Per piacere / prego or figurati"
}, {
    english_phrase: "for three nights",
   italian_phrase: "per tre notti"
}, {
    english_phrase: "for one night",
   italian_phrase: "per una notte"
}, {
    english_phrase: "Excuse me! ( to pass by)",
   italian_phrase: "Permesso"
}, {
    english_phrase: "fish",
   italian_phrase: "pesce"
}, {
    english_phrase: "Nice to meet you!",
   italian_phrase: "Piacere di conoscerti!"
}, {
    english_phrase: "chicken",
   italian_phrase: "pollo"
}, {
    english_phrase: "Can I help you?",
   italian_phrase: "Posso aiutarti?/ posso aiutarla (polite)?"
}, {
    english_phrase: "May I see the room?",
   italian_phrase: "Posso vedere la camera?"
}, {
    english_phrase: "Can you help me?",
   italian_phrase: "Potresti aiutarmi?/ potrebbe aiutarmi? (polite)"
}, {
    english_phrase: "Can You Say It Again?",
   italian_phrase: "Potresti ripetere per favore?/ Potrebbe ripetere per favore? (polite)"
}, {
    english_phrase: "You're welcome! (for ",
   italian_phrase: "Prego!"
}, {
    english_phrase: "Hello (on the phone) / I beg your pardon?",
   italian_phrase: "Pronto"
}, {
    english_phrase: "Can You Speak Slowly?",
   italian_phrase: "Puoi parlare lentamente? Potrebbe parlare lentamente? (polite)"
}, {
    english_phrase: "What’s your first name?",
   italian_phrase: "Qual'e il tuo nome?"
}, {
    english_phrase: "What's your name?",
   italian_phrase: "Quale è il suo nome?"
}, {
    english_phrase: "What are your hobbies?",
   italian_phrase: "Quali sono i tuoi hobby?"
}, {
    english_phrase: "How old are you?",
   italian_phrase: "Quanti anni hai?"
}, {
    english_phrase: "How much is this?",
   italian_phrase: "Quanto costa questo?"
}, {
    english_phrase: "How much is...?",
   italian_phrase: "Quanto costa?"
}, {
    english_phrase: "Four, Five, Six",
   italian_phrase: "Quattro, Cinque, Sei."
}, {
    english_phrase: "...that",
   italian_phrase: "quello"
}, {
    english_phrase: "...this",
   italian_phrase: "questo"
}, {
    english_phrase: "This/ That. Here/There",
   italian_phrase: "Questo/ Quello. Qui/ Li."
}, {
    english_phrase: "Say hi to John for me",
   italian_phrase: "Saluta John da parte mia!"
}, {
    english_phrase: "Bless you (when sneezing)",
   italian_phrase: "Salute!"
}, {
    english_phrase: "Hurry up!",
   italian_phrase: "Sbrigati!"
}, {
    english_phrase: "Write It Down Please!",
   italian_phrase: "Scrivilo per favore!/ Lo scriva per favore (polite)"
}, {
    english_phrase: "Sorry (for a mistake)",
   italian_phrase: "Scusami!/ Mi scusi! (polite)"
}, {
    english_phrase: "Excuse me ...! (to ask for something)",
   italian_phrase: "Scusami!/ Mi scusi! (polite)"
}, {
    english_phrase: "Excuse me (to get attention)",
   italian_phrase: "Scusi"
}, {
    english_phrase: "You're very kind!",
   italian_phrase: "Sei molto gentile!/ lei è molto gentile (polite)"
}, {
    english_phrase: "you’re very welcome",
   italian_phrase: "Sei veramente il benvenuto"
}, {
    english_phrase: "without private bathroom",
   italian_phrase: "senza bagno [they might say con bagno in comune—"
}, {
    english_phrase: "Seven, Eight, Nine, Ten",
   italian_phrase: "Sette, Otto, Nove, Dieci."
}, {
    english_phrase: "yes",
   italian_phrase: "si"
}, {
    english_phrase: "Yes, I do speak english.",
   italian_phrase: "Si, parlo inglese."
}, {
    english_phrase: "Yes/ No",
   italian_phrase: "Si/ No"
}, {
    english_phrase: "Mr.../ Mrs.…/ Miss…",
   italian_phrase: "Signor …/ Signora …/ Signorina"
}, {
    english_phrase: "Just a little.",
   italian_phrase: "Solo un po'."
}, {
    english_phrase: "I'm from (the U.S/ Italy)",
   italian_phrase: "Sono (statunitense, italiano)."
}, {
    english_phrase: "I'm hungry/ thirsty.",
   italian_phrase: "Sono Affamato/ Assetato."
}, {
    english_phrase: "I'm (American)",
   italian_phrase: "Sono americano."
}, {
    english_phrase: "It's 10 o'clock. 07:30pm.",
   italian_phrase: "Sono le dieci in punto. Le sette e trenta"
}, {
    english_phrase: "I am vegetarian",
   italian_phrase: "sono vegetariano"
}, {
    english_phrase: "I’m well, thanks!",
   italian_phrase: "Sto bene, grazie!"
}, {
    english_phrase: "I'm looking for john.",
   italian_phrase: "Sto cercando John."
}, {
    english_phrase: "I've been learning Italian for 1 month",
   italian_phrase: "Sto imparando l'italiano da un mese."
}, {
    english_phrase: "I love you!",
   italian_phrase: "Ti amo!/ Ti voglio bene!"
}, {
    english_phrase: "Did you like it here?",
   italian_phrase: "ti piace qui?"
}, {
    english_phrase: "Do you like it?",
   italian_phrase: "Ti piace?"
}, {
    english_phrase: "I will be right back!",
   italian_phrase: "Torno subito!"
}, {
    english_phrase: "...a farm stay",
   italian_phrase: "un agriturismo"
}, {
    english_phrase: "...a hotel",
   italian_phrase: "un albergo"
}, {
    english_phrase: "...an apartment for rent",
   italian_phrase: "un appartamento"
}, {
    english_phrase: "...a B&B",
   italian_phrase: "un bed-and-breakfast"
}, {
    english_phrase: "...a glass of",
   italian_phrase: "un bicchiere di"
}, {
    english_phrase: "One moment please!",
   italian_phrase: "Un momento prego!"
}, {
    english_phrase: "...a hostel",
   italian_phrase: "un ostello"
}, {
    english_phrase: "...some (of)",
   italian_phrase: "un pó (di)"
}, {
    english_phrase: "...a restaurant",
   italian_phrase: "un ristorante"
}, {
    english_phrase: "...a rental room",
   italian_phrase: "un'affittacamera"
}, {
    english_phrase: "...a bottle of",
   italian_phrase: "una bottiglia di"
}, {
    english_phrase: "a double room with two beds",
   italian_phrase: "una doppia con due letti"
}, {
    english_phrase: "a double room with one big bed",
   italian_phrase: "una matrimoniale"
}, {
    english_phrase: "a single room",
   italian_phrase: "una singola"
}, {
    english_phrase: "a table for two",
   italian_phrase: "una tavola per due"
}, {
    english_phrase: "...a casual restaurant",
   italian_phrase: "una trattoria"
}, {
    english_phrase: "triple room",
   italian_phrase: "una tripla"
}, {
    english_phrase: "One, Two, Three",
   italian_phrase: "Uno, Due, Tre."
}, {
    english_phrase: "Go straight! then turn left/ right!",
   italian_phrase: "Vada dritto! e poi giri a destra/ sinistra!"
}, {
    english_phrase: "Come with me!",
   italian_phrase: "Vieni con me!/ Venga con me! (polite)"
}, {
    english_phrase: "...white wine",
   italian_phrase: "vino bianco"
}, {
    english_phrase: "...red wine",
   italian_phrase: "vino rosso"
}, {
    english_phrase: "veal",
   italian_phrase: "vitello"
}, {
    english_phrase: "I live in (the U.S/ Italy)",
   italian_phrase: "Vivo (negli stati uniti / in Italia)"
}, {
    english_phrase: "I would like to reserve...",
   italian_phrase: "Vorrei prenotare..."
}, {
    english_phrase: "I would like",
   italian_phrase: "Vorrei..."
}]);
};



italianCreate()
.then(spanishCreate)
.then(function() {
	process.exit();
});

