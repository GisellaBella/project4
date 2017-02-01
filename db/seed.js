var DB = require("../models").models;

var cardCreate = function() {
	return DB.Card.bulkCreate([{
    subject: "Spanish",
    question: "And you?",
    answer: "¿Y Tú?"
}, {
    subject: "Spanish",
    question: "Beans",
    answer: "Frijoles"
}, {
    subject: "Spanish",
    question: "Big/ Small",
    answer: "Grande/ Pequeño"
}, {
    subject: "Spanish",
    question: "Bless you (when sneezing)",
    answer: "¡Salud!"
}, {
    subject: "Spanish",
    question: "Bless you.",
    answer: "Salud."
}, {
    subject: "Spanish",
    question: "Call me.",
    answer: "Llámame."
}, {
    subject: "Spanish",
    question: "Call me. (Talk to me)",
    answer: "Háblame."
}, {
    subject: "Spanish",
    question: "Can I enter/come in?",
    answer: "Puedo entrar/pasar?"
}, {
    subject: "Spanish",
    question: "Can I have a napkin",
    answer: " please?"
}, {
    subject: "Spanish",
    question: "Can I have more",
    answer: " please?"
}, {
    subject: "Spanish",
    question: "Can I have one?",
    answer: "Puedo tener uno?"
}, {
    subject: "Spanish",
    question: "Can I have water",
    answer: " please?"
}, {
    subject: "Spanish",
    question: "Can I help you?",
    answer: "¿Podría Ayudarse?"
}, {
    subject: "Spanish",
    question: "Can we share?",
    answer: "Podemos compartir?"
}, {
    subject: "Spanish",
    question: "Can you help me?",
    answer: "¿Puede Ayudarme?"
}, {
    subject: "Spanish",
    question: "Can you help me?",
    answer: "Me puedes ayudar?"
}, {
    subject: "Spanish",
    question: "Can you hold this",
    answer: " please?"
}, {
    subject: "Spanish",
    question: "Can you loan me $5?",
    answer: "Me puedes prestar $5?"
}, {
    subject: "Spanish",
    question: "Can you pass the salt/pepper?",
    answer: "Me puede pasar la sal/el pimiento?"
}, {
    subject: "Spanish",
    question: "Can You Say It Again?",
    answer: "¡Puede Repetirlo!"
}, {
    subject: "Spanish",
    question: "Can You Speak Slowly?",
    answer: "¡Puedes Hablar Más Despacio!"
}, {
    subject: "Spanish",
    question: "Cheese",
    answer: "Queso"
}, {
    subject: "Spanish",
    question: "Come with me!",
    answer: "¡Venga Conmigo!"
}, {
    subject: "Spanish",
    question: "Common Questions",
    answer: "Preguntas Más Frecuentes"
}, {
    subject: "Spanish",
    question: "Congratulations!",
    answer: "¡felicidades!"
}, {
    subject: "Spanish",
    question: "Did you like it here?",
    answer: "¿Le gusta a usted aquí?"
}, {
    subject: "Spanish",
    question: "Do you have change?",
    answer: "Tienes cambio?"
}, {
    subject: "Spanish",
    question: "Do you have children?",
    answer: "Tienes hijos?"
}, {
    subject: "Spanish",
    question: "Do you like it?",
    answer: "¿Te Gusta? ¿Te Encanta?"
}, {
    subject: "Spanish",
    question: "Do you sell _______ here?",
    answer: "Se vende ______ aquí?"
}, {
    subject: "Spanish",
    question: "Do you speak (English/ Spanish)?",
    answer: "¿Hablas (Inglés/ Español)?"
}, {
    subject: "Spanish",
    question: "Do you want one?",
    answer: "Quieres uno?"
}, {
    subject: "Spanish",
    question: "Do you want to buy this?",
    answer: "¿Quiere comprarlo usted?"
}, {
    subject: "Spanish",
    question: "Don't worry!",
    answer: "¡No Te Preocupes!"
}, {
    subject: "Spanish",
    question: "Enjoy! (for meals...)",
    answer: "¡Que Aproveche!"
}, {
    subject: "Spanish",
    question: "Excuse me ...! (to ask for something)",
    answer: "¡Perdone! / ¡Oiga!"
}, {
    subject: "Spanish",
    question: "Excuse me! ( to pass by)",
    answer: "¡Perdone! / Disculpe!"
}, {
    subject: "Spanish",
    question: "Excuse me.",
    answer: "Con permiso. OR Perdóname"
}, {
    subject: "Spanish",
    question: "Fork",
    answer: "Tenedor"
}, {
    subject: "Spanish",
    question: "Four",
    answer: " Five"
}, {
    subject: "Spanish",
    question: "Give me this!",
    answer: "¡Dame Eso!"
}, {
    subject: "Spanish",
    question: "Go straight! then turn left/ right!",
    answer: "¡Vaya Ud Derecho! Pues Tuerza Ud por la Izquierda/ Derecha!"
}, {
    subject: "Spanish",
    question: "Good afternoon.",
    answer: "Buenas tardes."
}, {
    subject: "Spanish",
    question: "Good bye!",
    answer: "¡Adiós!"
}, {
    subject: "Spanish",
    question: "Good evening!",
    answer: "¡Buenas Tardes!"
}, {
    subject: "Spanish",
    question: "Good evening. (greeting)",
    answer: "Buenas noches."
}, {
    subject: "Spanish",
    question: "Good luck!",
    answer: "¡Que Tenga Suerte!"
}, {
    subject: "Spanish",
    question: "Good morning!",
    answer: "¡Buenos Días!"
}, {
    subject: "Spanish",
    question: "Good morning.",
    answer: "Buenos días."
}, {
    subject: "Spanish",
    question: "Good night and sweet dreams!",
    answer: "¡Buenas Noches Y Dulces Sueños!"
}, {
    subject: "Spanish",
    question: "Good night!",
    answer: "¡Buenas noches!"
}, {
    subject: "Spanish",
    question: "Good/ Bad/ So-So.",
    answer: "Bueno/ Malo/ Así Así"
}, {
    subject: "Spanish",
    question: "Good/ So-So.",
    answer: "Bíen/ Así Así"
}, {
    subject: "Spanish",
    question: "Goodbye.",
    answer: "Adiós."
}, {
    subject: "Spanish",
    question: "Goodbyes",
    answer: "Despedidas"
}, {
    subject: "Spanish",
    question: "Greetings",
    answer: "Saludos"
}, {
    subject: "Spanish",
    question: "Hamburger",
    answer: "Hamburguesa"
}, {
    subject: "Spanish",
    question: "Happy birthday!",
    answer: "¡Feliz Cumpleaños!"
}, {
    subject: "Spanish",
    question: "Happy new year!",
    answer: "¡Feliz Año Nuevo!"
}, {
    subject: "Spanish",
    question: "Have a good day!",
    answer: "Ten un buen día!"
}, {
    subject: "Spanish",
    question: "Hello",
    answer: " my name is John."
}, {
    subject: "Spanish",
    question: "Hello! How are you?",
    answer: "Hola! Cómo estás?"
}, {
    subject: "Spanish",
    question: "Here you go! (when giving something)",
    answer: "¡Aquí Tiene!"
}, {
    subject: "Spanish",
    question: "Hey! Friend!",
    answer: "¡Eh! ¡Amigo!"
}, {
    subject: "Spanish",
    question: "Hi!",
    answer: "¡Hola!"
}, {
    subject: "Spanish",
    question: "Hold on please! (phone)",
    answer: "¡No Cuelgue, Por Favor!"
}, {
    subject: "Spanish",
    question: "How are you?",
    answer: "¿Cómo está usted?"
}, {
    subject: "Spanish",
    question: "How are you?",
    answer: "¿Cómo Estás?"
}, {
    subject: "Spanish",
    question: "How Do You Say ",
    answer: "¿Cómo Se Dice "
}, {
    subject: "Spanish",
    question: "How do you say maybe in Spanish?",
    answer: "¿Cómo se dice maybe en Español?"
}, {
    subject: "Spanish",
    question: "How long have you lived here?",
    answer: "Cuánto tiempo tienes aquí?"
}, {
    subject: "Spanish",
    question: "How many are there?",
    answer: "¿Cuántos hay?"
}, {
    subject: "Spanish",
    question: "How much does it cost?",
    answer: "¿Cuánto cuesta?"
}, {
    subject: "Spanish",
    question: "How much does it cost?",
    answer: "Cuánto cuesta?"
}, {
    subject: "Spanish",
    question: "How much is this?",
    answer: "¿Cuánto Vale/ Cuesta Eso?"
}, {
    subject: "Spanish",
    question: "How old are you?",
    answer: "¿Cuántos Años Tienes?"
}, {
    subject: "Spanish",
    question: "Hurry up!",
    answer: "¡Date Prisa!"
}, {
    subject: "Spanish",
    question: "I am fine.",
    answer: "Estoy bien."
}, {
    subject: "Spanish",
    question: "I am lost. Where is the restroom?",
    answer: "Estoy perdido. ¿Dónde está el baño?"
}, {
    subject: "Spanish",
    question: "I do not understand.",
    answer: "Yo no comprendo."
}, {
    subject: "Spanish",
    question: "I Don't Know!",
    answer: "¡No (Lo) Sé!"
}, {
    subject: "Spanish",
    question: "I Don't Understand!",
    answer: "¡No Entiendo!"
}, {
    subject: "Spanish",
    question: "I don’t have children.",
    answer: "No tengo hijos."
}, {
    subject: "Spanish",
    question: "I feel sick.",
    answer: "Estoy Mareado"
}, {
    subject: "Spanish",
    question: "I have allergies.",
    answer: "Tengo alergiás."
}, {
    subject: "Spanish",
    question: "I Have No Idea.",
    answer: "¡No Tengo Ni Idea!"
}, {
    subject: "Spanish",
    question: "I have to go",
    answer: "Me Tengo Que Ir."
}, {
    subject: "Spanish",
    question: "I have two sons/daughters.",
    answer: "Tengo dos hijos/hijas."
}, {
    subject: "Spanish",
    question: "I hope you have a good day!",
    answer: "Que tenga un buen día!"
}, {
    subject: "Spanish",
    question: "I like Spanish",
    answer: "Me Gusta El Español"
}, {
    subject: "Spanish",
    question: "I live in (the U.S/ Spain)",
    answer: "Vivo En (los Estados Unidos/ España)"
}, {
    subject: "Spanish",
    question: "I love you!",
    answer: "¡Te Quiero!"
}, {
    subject: "Spanish",
    question: "I missed you so much!",
    answer: "Te extrañé mucho!"
}, {
    subject: "Spanish",
    question: "I need a doctor",
    answer: "!Necesito un medico!"
}, {
    subject: "Spanish",
    question: "I need to practice my Spanish",
    answer: "me falta práctica en Español"
}, {
    subject: "Spanish",
    question: "I really like it!",
    answer: "¡Me Gusta/ Encanta Mucho!"
}, {
    subject: "Spanish",
    question: "I want a…",
    answer: "Quiero un…"
}, {
    subject: "Spanish",
    question: "I will be right back!",
    answer: "Regreso En Un Momentito."
}, {
    subject: "Spanish",
    question: "I work as a (translator/ businessman)",
    answer: "Trabajo Como (Traductor/ Hombre de Negocios)"
}, {
    subject: "Spanish",
    question: "I would like…",
    answer: "Me gustaría…"
}, {
    subject: "Spanish",
    question: "I'd like to visit Spain one day",
    answer: "Me Gustaría Visitar Algún Día Tu País"
}, {
    subject: "Spanish",
    question: "I'm (American)",
    answer: "Soy (americano/ americana)"
}, {
    subject: "Spanish",
    question: "I'm (twenty",
    answer: " thirty...) years old."
}, {
    subject: "Spanish",
    question: "I'm fine",
    answer: " thanks!"
}, {
    subject: "Spanish",
    question: "I'm from (the U.S/ Spain)",
    answer: "Soy De (los Estados Unidos/ España..) / Soy (americano)"
}, {
    subject: "Spanish",
    question: "I'm hungry/ thirsty.",
    answer: "Tengo Hambre/ Sed."
}, {
    subject: "Spanish",
    question: "I'm looking for john.",
    answer: "Estoy Buscando A Juan."
}, {
    subject: "Spanish",
    question: "I'm lost",
    answer: "Estoy perdido"
}, {
    subject: "Spanish",
    question: "I'm Sorry! (if you don't hear something)",
    answer: "¡Discuple!"
}, {
    subject: "Spanish",
    question: "I'm sorry.",
    answer: "Lo siento."
}, {
    subject: "Spanish",
    question: "I've been learning Spanish for 1 month",
    answer: "Tengo Un Mes Estudiando Español"
}, {
    subject: "Spanish",
    question: "I’m a doctor",
    answer: " professor"
}, {
    subject: "Spanish",
    question: "I’m a vegetarian/vegan.",
    answer: "Soy vegetariano/vegan."
}, {
    subject: "Spanish",
    question: "I’m from ____________.",
    answer: "Soy de _____________."
}, {
    subject: "Spanish",
    question: "In The Morning/ Evening/ At Night.",
    answer: "Por La Mañana/ Tarde/ Noche."
}, {
    subject: "Spanish",
    question: "It was a pleasure to meet you.",
    answer: "Fue un placer conocerte."
}, {
    subject: "Spanish",
    question: "It's 10 o'clock. 07:30pm.",
    answer: "Son las diez en punto. Las siete y media."
}, {
    subject: "Spanish",
    question: "Just a little.",
    answer: "Solo Un Poquito."
}, {
    subject: "Spanish",
    question: "Knife",
    answer: "Cuchillo"
}, {
    subject: "Spanish",
    question: "Lettuce",
    answer: "Lechuga"
}, {
    subject: "Spanish",
    question: "Lime/lemon",
    answer: "Limón"
}, {
    subject: "Spanish",
    question: "Look!",
    answer: "¡Mira!"
}, {
    subject: "Spanish",
    question: "Me/ You. Him/ Her.",
    answer: "Yo/ Tú. Él/ Ella"
}, {
    subject: "Spanish",
    question: "Merry Christmas!",
    answer: "¡Feliz Navidad!"
}, {
    subject: "Spanish",
    question: "Mr.../ Mrs.…/ Miss…",
    answer: "Señor.../ Señora.../ Señorita..."
}, {
    subject: "Spanish",
    question: "My name is __________.",
    answer: "Me llamo __________."
}, {
    subject: "Spanish",
    question: "My name is ...",
    answer: "Me llamo ..."
}, {
    subject: "Spanish",
    question: "My Spanish is bad.",
    answer: "Mi Español Es Malo"
}, {
    subject: "Spanish",
    question: "Nice to meet you!",
    answer: "¡Tanto Gusto! / Medio Gusto Conocerte!"
}, {
    subject: "Spanish",
    question: "Nice to meet you.",
    answer: "Mucho gusto."
}, {
    subject: "Spanish",
    question: "No meat",
    answer: " please."
}, {
    subject: "Spanish",
    question: "No Problem!",
    answer: "¡No Problema!"
}, {
    subject: "Spanish",
    question: "No.",
    answer: "No."
}, {
    subject: "Spanish",
    question: "Nothing much",
    answer: "Nada"
}, {
    subject: "Spanish",
    question: "Oh! That's good!",
    answer: "!Oh, qué bueno!"
}, {
    subject: "Spanish",
    question: "One beer",
    answer: " please."
}, {
    subject: "Spanish",
    question: "One glass of red/white wine",
    answer: " please."
}, {
    subject: "Spanish",
    question: "One moment please!",
    answer: "¡Un Momento, Por Favor!"
}, {
    subject: "Spanish",
    question: "One",
    answer: " Two"
}, {
    subject: "Spanish",
    question: "Pasta",
    answer: "Pasta"
}, {
    subject: "Spanish",
    question: "Please.",
    answer: "Por favor."
}, {
    subject: "Spanish",
    question: "Really!",
    answer: "¡Verdad!"
}, {
    subject: "Spanish",
    question: "Rice",
    answer: "Arróz"
}, {
    subject: "Spanish",
    question: "Sandwich",
    answer: "Sándwich, Bocadillo"
}, {
    subject: "Spanish",
    question: "Say hi to John for me",
    answer: "Dale Saludos A ( Juan ...) De Mi Parte"
}, {
    subject: "Spanish",
    question: "See you in a little bit!",
    answer: "Nos vemos al rato! (en México)"
}, {
    subject: "Spanish",
    question: "See you later!",
    answer: "¡Hasta luego!"
}, {
    subject: "Spanish",
    question: "See you later!",
    answer: "Hasta luego!"
}, {
    subject: "Spanish",
    question: "See you later.",
    answer: "Hasta luego."
}, {
    subject: "Spanish",
    question: "Seven",
    answer: " Eight"
}, {
    subject: "Spanish",
    question: "Sorry (for a mistake)",
    answer: "¡Lo Siento!"
}, {
    subject: "Spanish",
    question: "Spain is a wonderful country",
    answer: "España Es Un País Maravelloso"
}, {
    subject: "Spanish",
    question: "Spoon",
    answer: "Cuchara"
}, {
    subject: "Spanish",
    question: "Straw",
    answer: "Popote"
}, {
    subject: "Spanish",
    question: "Thank you (very much)!",
    answer: "¡(Muchas) Gracias!"
}, {
    subject: "Spanish",
    question: "Thank you.",
    answer: "Gracías."
}, {
    subject: "Spanish",
    question: "There are many.",
    answer: "Hay muchos."
}, {
    subject: "Spanish",
    question: "This/ That. Here/There",
    answer: "Eso/Ese. Aquí/ Allí"
}, {
    subject: "Spanish",
    question: "Today/ Now",
    answer: "Hoy/ Ahora"
}, {
    subject: "Spanish",
    question: "Tomato",
    answer: "Tomate"
}, {
    subject: "Spanish",
    question: "Tomorrow/ Yesterday",
    answer: "Mañana/ Ayer"
}, {
    subject: "Spanish",
    question: "We’ll meet on _________ (day).",
    answer: "Nos reunimos el ________ (día)."
}, {
    subject: "Spanish",
    question: "We’ll see each other later!",
    answer: "Nos vemos!"
}, {
    subject: "Spanish",
    question: "We’ll talk later.",
    answer: "Nos hablamos luego."
}, {
    subject: "Spanish",
    question: "Welcome! (to greet someone)",
    answer: "¡Bienvenido!"
}, {
    subject: "Spanish",
    question: "What do you do for a living?",
    answer: "¿A Qué Te Dedicas?"
}, {
    subject: "Spanish",
    question: "What Does ",
    answer: "¿Qué Quiere Decir "
}, {
    subject: "Spanish",
    question: "What Is This?",
    answer: "¿Qué Es Esto?"
}, {
    subject: "Spanish",
    question: "What is your last name?",
    answer: "Cuál es tu apellido?"
}, {
    subject: "Spanish",
    question: "What is your name?",
    answer: "¿Cómo se llama usted?"
}, {
    subject: "Spanish",
    question: "What time is it?",
    answer: "¿Qué hora es?"
}, {
    subject: "Spanish",
    question: "What would you like to drink?",
    answer: "Qué le gustaría tomar/beber?"
}, {
    subject: "Spanish",
    question: "What would you like to eat?",
    answer: "Qué le gustaría comer?"
}, {
    subject: "Spanish",
    question: "What? Where?",
    answer: "¿Qué? ¿Dónde?"
}, {
    subject: "Spanish",
    question: "What's new?",
    answer: "¿Qué Hay De Nuevo?"
}, {
    subject: "Spanish",
    question: "What's That Called In Spanish?",
    answer: "¿Cómo Se llama a Esto En Español?"
}, {
    subject: "Spanish",
    question: "What's your name?",
    answer: "¿Cómo te llamas?"
}, {
    subject: "Spanish",
    question: "What’s your name?",
    answer: "Cómo te llamas?"
}, {
    subject: "Spanish",
    question: "Where are we right now?",
    answer: "Dónde estamos ahora?"
}, {
    subject: "Spanish",
    question: "Where are you from?",
    answer: "¿De Dónde Eres?"
}, {
    subject: "Spanish",
    question: "Where are you from?",
    answer: "De dónde eres?"
}, {
    subject: "Spanish",
    question: "Where do you live?",
    answer: "¿Dónde Vives?"
}, {
    subject: "Spanish",
    question: "Where do you live?",
    answer: "Dónde vives?"
}, {
    subject: "Spanish",
    question: "Where do you work?",
    answer: "Dónde trabajas?"
}, {
    subject: "Spanish",
    question: "Where is my room?",
    answer: "Dónde está mi cuarto?"
}, {
    subject: "Spanish",
    question: "Where is the __________ street?",
    answer: "Dónde está la calle ________?"
}, {
    subject: "Spanish",
    question: "Where is the (bathroom/ pharmacy)?",
    answer: "¿Dónde Está (el Baño/ la Farmacia)?"
}, {
    subject: "Spanish",
    question: "Where is the bathroom?",
    answer: "Dónde está el baño?"
}, {
    subject: "Spanish",
    question: "Where is the bus?",
    answer: "Dónde está el autobús?"
}, {
    subject: "Spanish",
    question: "Who?",
    answer: "¿Quièn?"
}, {
    subject: "Spanish",
    question: "Why?",
    answer: "¿Por què?"
}, {
    subject: "Spanish",
    question: "With…",
    answer: "Con…"
}, {
    subject: "Spanish",
    question: "Without…",
    answer: "Sin…"
}, {
    subject: "Spanish",
    question: "Would you speak slower",
    answer: " please."
}, {
    subject: "Spanish",
    question: "Write It Down Please!",
    answer: "¡Escríbalo, Por Favor!"
}, {
    subject: "Spanish",
    question: "Yes.",
    answer: "Sí."
}, {
    subject: "Spanish",
    question: "Yes/ No",
    answer: "Sí/ No"
}, {
    subject: "Spanish",
    question: "You are welcome (it was nothing).",
    answer: "De nada."
}, {
    subject: "Spanish",
    question: "You're very kind!",
    answer: "¡Eres Muy Amable!"
}, {
    subject: "Spanish",
    question: "You're welcome! (for ",
    answer: "¡De Nada!"
}, {
    subject: "Italian",
    question: "See you later!",
    answer: "A dopo"
}, {
    subject: "Italian",
    question: "...fizzy water",
    answer: "acqua gassata"
}, {
    subject: "Italian",
    question: "...still water",
    answer: "acqua non gassata"
}, {
    subject: "Italian",
    question: "Goodbye",
    answer: "Arrivederci"
}, {
    subject: "Italian",
    question: "Good bye!",
    answer: "Arrivederci!"
}, {
    subject: "Italian",
    question: "Hold on please! (phone)",
    answer: "Attenda prego!"
}, {
    subject: "Italian",
    question: "Good, thank you",
    answer: "Bene, grazie"
}, {
    subject: "Italian",
    question: "I'm fine, thanks!",
    answer: "Bene, grazie!"
}, {
    subject: "Italian",
    question: "Good/ So-So.",
    answer: "Bene/ così e così."
}, {
    subject: "Italian",
    question: "Welcome! (to greet someone)",
    answer: "Benvenuto!/ Benvenuta! (female)"
}, {
    subject: "Italian",
    question: "...beer",
    answer: "birra"
}, {
    subject: "Italian",
    question: "steak",
    answer: "bistecca"
}, {
    subject: "Italian",
    question: "Enjoy! (for meals...)",
    answer: "Buon appetito!"
}, {
    subject: "Italian",
    question: "Happy birthday!",
    answer: "Buon compleanno!"
}, {
    subject: "Italian",
    question: "Good day",
    answer: "Buon giorno"
}, {
    subject: "Italian",
    question: "Merry Christmas!",
    answer: "Buon natale!"
}, {
    subject: "Italian",
    question: "Good luck!",
    answer: "Buona fortuna!"
}, {
    subject: "Italian",
    question: "Good night",
    answer: "Buona notte"
}, {
    subject: "Italian",
    question: "Good night and sweet dreams!",
    answer: "Buona notte e sogni d'oro!"
}, {
    subject: "Italian",
    question: "Good night!",
    answer: "Buona notte!"
}, {
    subject: "Italian",
    question: "Good evening",
    answer: "Buona sera"
}, {
    subject: "Italian",
    question: "Good evening!",
    answer: "Buona sera!"
}, {
    subject: "Italian",
    question: "Good morning!",
    answer: "Buongiorno!"
}, {
    subject: "Italian",
    question: "Good/ Bad/ So-So.",
    answer: "Buono/ Cattivo/ Così e così"
}, {
    subject: "Italian",
    question: "Is there a cheaper one?",
    answer: "C'é una più economica?"
}, {
    subject: "Italian",
    question: "Is there WiFi?",
    answer: "C'é WiFi?"
}, {
    subject: "Italian",
    question: "I understand.",
    answer: "Capisco"
}, {
    subject: "Italian",
    question: "meat",
    answer: "carne"
}, {
    subject: "Italian",
    question: "What time is it?",
    answer: "Che ore sono?"
}, {
    subject: "Italian",
    question: "Hi!",
    answer: "Ciao!"
}, {
    subject: "Italian",
    question: "Hey! Friend!",
    answer: "Ciao! Amico!"
}, {
    subject: "Italian",
    question: "How Do You Say ",
    answer: "Come dite “please” in italiano?"
}, {
    subject: "Italian",
    question: "What's That Called In Italian?",
    answer: "Come si chiama quella cosa in italiano?"
}, {
    subject: "Italian",
    question: "How are you?",
    answer: "Come stai?"
}, {
    subject: "Italian",
    question: "How are you?",
    answer: "Come stai?/ Come state (polite)?"
}, {
    subject: "Italian",
    question: "What’s your name?",
    answer: "Come ti chiami?"
}, {
    subject: "Italian",
    question: "with private bathroom",
    answer: "con bagno"
}, {
    subject: "Italian",
    question: "Congratulations!",
    answer: "Congratulazioni!"
}, {
    subject: "Italian",
    question: "What Is This?",
    answer: "Cos'è questa cosa?"
}, {
    subject: "Italian",
    question: "What's new?",
    answer: "Cosa c'è di nuovo?"
}, {
    subject: "Italian",
    question: "What do you do for a living?",
    answer: "cosa fai per vivere?"
}, {
    subject: "Italian",
    question: "What Does ",
    answer: "Cosa significa "
}, {
    subject: "Italian",
    question: "What does that mean?",
    answer: "Cosa significa?"
}, {
    subject: "Italian",
    question: "What are you doing (at the moment)?",
    answer: "Cosa stai facendo adesso?"
}, {
    subject: "Italian",
    question: "What do you like doing?",
    answer: "Cosa ti piace fare?"
}, {
    subject: "Italian",
    question: "What? Where?",
    answer: "Cosa? Dove?"
}, {
    subject: "Italian",
    question: "side dish [veggies always come seperately]",
    answer: "cotorno"
}, {
    subject: "Italian",
    question: "Give me this!",
    answer: "Dammi questo!"
}, {
    subject: "Italian",
    question: "Really!",
    answer: "Davvero!"
}, {
    subject: "Italian",
    question: "I have to go",
    answer: "Devo andare"
}, {
    subject: "Italian",
    question: "Where are you from?",
    answer: "Di dove sei?/ Di dove è? (polite)"
}, {
    subject: "Italian",
    question: "In The Morning/ Evening/ At Night.",
    answer: "Di mattina/ Di sera/ Di notte. "
}, {
    subject: "Italian",
    question: "dessert",
    answer: "dolce"
}, {
    subject: "Italian",
    question: "Tomorrow/ Yesterday",
    answer: "Domani/ ieri"
}, {
    subject: "Italian",
    question: "double room for single use [will often be offered if singles are unavailable]",
    answer: "doppia uso singola"
}, {
    subject: "Italian",
    question: "Where is?",
    answer: "Dov'é"
}, {
    subject: "Italian",
    question: "Where do you live?",
    answer: "Dove abiti?"
}, {
    subject: "Italian",
    question: "Where is the (bathroom/ pharmacy)?",
    answer: "Dove posso trovare (il bagno/ la farmacia?)"
}, {
    subject: "Italian",
    question: "Where do you live?",
    answer: "Dove vivi?/ Dove vive? (polite)"
}, {
    subject: "Italian",
    question: "and",
    answer: "e"
}, {
    subject: "Italian",
    question: "Is service included?",
    answer: "É incluso il servizio?"
}, {
    subject: "Italian",
    question: "Is breakfast included?",
    answer: "É incluso la prima colazione?"
}, {
    subject: "Italian",
    question: "That's too much",
    answer: "É troppo"
}, {
    subject: "Italian",
    question: "And you?",
    answer: "e tu? e lei? (polite)"
}, {
    subject: "Italian",
    question: "Nice to meet you!",
    answer: "è un piacere conoscerti!/ è un piacere conoscerla (polite)"
}, {
    subject: "Italian",
    question: "Here you go! (when giving something)",
    answer: "Eccolo!"
}, {
    subject: "Italian",
    question: "Happy new year!",
    answer: "Felice anno nuovo!"
}, {
    subject: "Italian",
    question: "Oh! That's good!",
    answer: "Grande!"
}, {
    subject: "Italian",
    question: "Big/ Small",
    answer: "Grande/ Piccolo"
}, {
    subject: "Italian",
    question: "thanks",
    answer: "grazie"
}, {
    subject: "Italian",
    question: "thank you",
    answer: "grazie"
}, {
    subject: "Italian",
    question: "thank you very much",
    answer: "grazie mille"
}, {
    subject: "Italian",
    question: "Thank you (very much)!",
    answer: "Grazie! / (Molte grazie)!"
}, {
    subject: "Italian",
    question: "Look!",
    answer: "Guarda!"
}, {
    subject: "Italian",
    question: "I’m [...] years old.",
    answer: "Ho … anni"
}, {
    subject: "Italian",
    question: "I'm (twenty, thirty...) years old.",
    answer: "Ho (venti, trenta …) anni."
}, {
    subject: "Italian",
    question: "I need to practice my Italian",
    answer: "ho bisogno di fare pratica con il mio italiano"
}, {
    subject: "Italian",
    question: "I need a doctor",
    answer: "Ho bisogno di un dottore!"
}, {
    subject: "Italian",
    question: "Check, please",
    answer: "Il conto, per favore"
}, {
    subject: "Italian",
    question: "My Italian is bad.",
    answer: "il mio italiano è orribile."
}, {
    subject: "Italian",
    question: "My first name is [...]",
    answer: "Il mio nome è"
}, {
    subject: "Italian",
    question: "Me/ You. Him/ Her.",
    answer: "io/ tu, voi (you polite). Lui/ Lei"
}, {
    subject: "Italian",
    question: "English Greetings",
    answer: "Italian Greetings:"
}, {
    subject: "Italian",
    question: "Italy is a wonderful country",
    answer: "L'italia è un paese meraviglioso."
}, {
    subject: "Italian",
    question: "I work as a (translator/ businessman)",
    answer: "Lavoro come (traduttore/ uomo d'affari)"
}, {
    subject: "Italian",
    question: "Do you speak english? (formal)",
    answer: "Lei parla Inglese?"
}, {
    subject: "Italian",
    question: "...a half-liter of",
    answer: "mezzo litro di"
}, {
    subject: "Italian",
    question: "My name is [...].",
    answer: "mi chiamo"
}, {
    subject: "Italian",
    question: "My name is ...",
    answer: "Mi chiamo ..."
}, {
    subject: "Italian",
    question: "I'm sorry",
    answer: "Mi dispiace"
}, {
    subject: "Italian",
    question: "I really like it!",
    answer: "Mi piace davvero."
}, {
    subject: "Italian",
    question: "I like Italian",
    answer: "Mi piace l'italiano."
}, {
    subject: "Italian",
    question: "I'd like to visit Italy one day",
    answer: "Mi piacerebbe visitare l'Italia un giorno di questi!"
}, {
    subject: "Italian",
    question: "Excuse me!",
    answer: "Mi scusi!"
}, {
    subject: "Italian",
    question: "I'm Sorry! (if you don't hear something)",
    answer: "Mi scusi? / Prego ?"
}, {
    subject: "Italian",
    question: "I missed you so much!",
    answer: "Mi sei mancato molto!"
}, {
    subject: "Italian",
    question: "I feel sick.",
    answer: "Mi sento male!"
}, {
    subject: "Italian",
    question: "I'm lost",
    answer: "Mi sono perso/ persa (feminine)"
}, {
    subject: "Italian",
    question: "very bad",
    answer: "molto male"
}, {
    subject: "Italian",
    question: "no",
    answer: "no"
}, {
    subject: "Italian",
    question: "No, I don’t speak english.",
    answer: "No, non parlo inglese"
}, {
    subject: "Italian",
    question: "No Problem!",
    answer: "Non c'è problema!"
}, {
    subject: "Italian",
    question: "I don’t understand",
    answer: "Non capisco"
}, {
    subject: "Italian",
    question: "I don't understand",
    answer: "Non capisco"
}, {
    subject: "Italian",
    question: "I Don't Understand!",
    answer: "Non capisco!"
}, {
    subject: "Italian",
    question: "I don’t know.",
    answer: "non lo so"
}, {
    subject: "Italian",
    question: "I Don't Know!",
    answer: "Non lo so!"
}, {
    subject: "Italian",
    question: "Not bad, thanks!",
    answer: "Non male, grazie!"
}, {
    subject: "Italian",
    question: "Nothing much",
    answer: "Non molto"
}, {
    subject: "Italian",
    question: "I Have No Idea.",
    answer: "Non ne ho idea!"
}, {
    subject: "Italian",
    question: "I don’t speak Polish.",
    answer: "Non parlo Polacco"
}, {
    subject: "Italian",
    question: "Don't worry!",
    answer: "non ti preoccupare !"
}, {
    subject: "Italian",
    question: "Today/ Now",
    answer: "Oggi/ Adesso"
}, {
    subject: "Italian",
    question: "Do you speak English?",
    answer: "Parla Inglese?"
}, {
    subject: "Italian",
    question: "Please talk more slowly!",
    answer: "Parla più piano perfavore!"
}, {
    subject: "Italian",
    question: "Do you speak (English/ Italian)?",
    answer: "Parli (inglese/italiano)?/ Parla (inglese/italiano)? (polite)"
}, {
    subject: "Italian",
    question: "Do you speak english? (informal)",
    answer: "Parli Inglese?"
}, {
    subject: "Italian",
    question: "I speak a little Polish.",
    answer: "Parlo poco Polacco"
}, {
    subject: "Italian",
    question: "for two nights",
    answer: "per due notti"
}, {
    subject: "Italian",
    question: "please",
    answer: "per favore"
}, {
    subject: "Italian",
    question: "...for 8pm",
    answer: "per le otto"
}, {
    subject: "Italian",
    question: "...for 7pm",
    answer: "per le sette"
}, {
    subject: "Italian",
    question: "...for 7:30pm",
    answer: "per le sette e mezzo"
}, {
    subject: "Italian",
    question: "please / you’re welcome",
    answer: "Per piacere / prego or figurati"
}, {
    subject: "Italian",
    question: "for three nights",
    answer: "per tre notti"
}, {
    subject: "Italian",
    question: "for one night",
    answer: "per una notte"
}, {
    subject: "Italian",
    question: "Excuse me! ( to pass by)",
    answer: "Permesso"
}, {
    subject: "Italian",
    question: "fish",
    answer: "pesce"
}, {
    subject: "Italian",
    question: "Nice to meet you!",
    answer: "Piacere di conoscerti!"
}, {
    subject: "Italian",
    question: "chicken",
    answer: "pollo"
}, {
    subject: "Italian",
    question: "Can I help you?",
    answer: "Posso aiutarti?/ posso aiutarla (polite)?"
}, {
    subject: "Italian",
    question: "May I see the room?",
    answer: "Posso vedere la camera?"
}, {
    subject: "Italian",
    question: "Can you help me?",
    answer: "Potresti aiutarmi?/ potrebbe aiutarmi? (polite)"
}, {
    subject: "Italian",
    question: "Can You Say It Again?",
    answer: "Potresti ripetere per favore?/ Potrebbe ripetere per favore? (polite)"
}, {
    subject: "Italian",
    question: "You're welcome! (for ",
    answer: "Prego!"
}, {
    subject: "Italian",
    question: "Hello (on the phone) / I beg your pardon?",
    answer: "Pronto"
}, {
    subject: "Italian",
    question: "Can You Speak Slowly?",
    answer: "Puoi parlare lentamente? Potrebbe parlare lentamente? (polite)"
}, {
    subject: "Italian",
    question: "What’s your first name?",
    answer: "Qual'e il tuo nome?"
}, {
    subject: "Italian",
    question: "What's your name?",
    answer: "Quale è il suo nome?"
}, {
    subject: "Italian",
    question: "What are your hobbies?",
    answer: "Quali sono i tuoi hobby?"
}, {
    subject: "Italian",
    question: "How old are you?",
    answer: "Quanti anni hai?"
}, {
    subject: "Italian",
    question: "How much is this?",
    answer: "Quanto costa questo?"
}, {
    subject: "Italian",
    question: "How much is...?",
    answer: "Quanto costa?"
}, {
    subject: "Italian",
    question: "Four, Five, Six",
    answer: "Quattro, Cinque, Sei."
}, {
    subject: "Italian",
    question: "...that",
    answer: "quello"
}, {
    subject: "Italian",
    question: "...this",
    answer: "questo"
}, {
    subject: "Italian",
    question: "This/ That. Here/There",
    answer: "Questo/ Quello. Qui/ Li."
}, {
    subject: "Italian",
    question: "Say hi to John for me",
    answer: "Saluta John da parte mia!"
}, {
    subject: "Italian",
    question: "Bless you (when sneezing)",
    answer: "Salute!"
}, {
    subject: "Italian",
    question: "Hurry up!",
    answer: "Sbrigati!"
}, {
    subject: "Italian",
    question: "Write It Down Please!",
    answer: "Scrivilo per favore!/ Lo scriva per favore (polite)"
}, {
    subject: "Italian",
    question: "Sorry (for a mistake)",
    answer: "Scusami!/ Mi scusi! (polite)"
}, {
    subject: "Italian",
    question: "Excuse me ...! (to ask for something)",
    answer: "Scusami!/ Mi scusi! (polite)"
}, {
    subject: "Italian",
    question: "Excuse me (to get attention)",
    answer: "Scusi"
}, {
    subject: "Italian",
    question: "You're very kind!",
    answer: "Sei molto gentile!/ lei è molto gentile (polite)"
}, {
    subject: "Italian",
    question: "you’re very welcome",
    answer: "Sei veramente il benvenuto"
}, {
    subject: "Italian",
    question: "without private bathroom",
    answer: "senza bagno [they might say con bagno in comune—"
}, {
    subject: "Italian",
    question: "Seven, Eight, Nine, Ten",
    answer: "Sette, Otto, Nove, Dieci."
}, {
    subject: "Italian",
    question: "yes",
    answer: "si"
}, {
    subject: "Italian",
    question: "Yes, I do speak english.",
    answer: "Si, parlo inglese."
}, {
    subject: "Italian",
    question: "Yes/ No",
    answer: "Si/ No"
}, {
    subject: "Italian",
    question: "Mr.../ Mrs.…/ Miss…",
    answer: "Signor …/ Signora …/ Signorina"
}, {
    subject: "Italian",
    question: "Just a little.",
    answer: "Solo un po'."
}, {
    subject: "Italian",
    question: "I'm from (the U.S/ Italy)",
    answer: "Sono (statunitense, italiano)."
}, {
    subject: "Italian",
    question: "I'm hungry/ thirsty.",
    answer: "Sono Affamato/ Assetato."
}, {
    subject: "Italian",
    question: "I'm (American)",
    answer: "Sono americano."
}, {
    subject: "Italian",
    question: "It's 10 o'clock. 07:30pm.",
    answer: "Sono le dieci in punto. Le sette e trenta"
}, {
    subject: "Italian",
    question: "I am vegetarian",
    answer: "sono vegetariano"
}, {
    subject: "Italian",
    question: "I’m well, thanks!",
    answer: "Sto bene, grazie!"
}, {
    subject: "Italian",
    question: "I'm looking for john.",
    answer: "Sto cercando John."
}, {
    subject: "Italian",
    question: "I've been learning Italian for 1 month",
    answer: "Sto imparando l'italiano da un mese."
}, {
    subject: "Italian",
    question: "I love you!",
    answer: "Ti amo!/ Ti voglio bene!"
}, {
    subject: "Italian",
    question: "Did you like it here?",
    answer: "ti piace qui?"
}, {
    subject: "Italian",
    question: "Do you like it?",
    answer: "Ti piace?"
}, {
    subject: "Italian",
    question: "I will be right back!",
    answer: "Torno subito!"
}, {
    subject: "Italian",
    question: "...a farm stay",
    answer: "un agriturismo"
}, {
    subject: "Italian",
    question: "...a hotel",
    answer: "un albergo"
}, {
    subject: "Italian",
    question: "...an apartment for rent",
    answer: "un appartamento"
}, {
    subject: "Italian",
    question: "...a B&B",
    answer: "un bed-and-breakfast"
}, {
    subject: "Italian",
    question: "...a glass of",
    answer: "un bicchiere di"
}, {
    subject: "Italian",
    question: "One moment please!",
    answer: "Un momento prego!"
}, {
    subject: "Italian",
    question: "...a hostel",
    answer: "un ostello"
}, {
    subject: "Italian",
    question: "...some (of)",
    answer: "un pó (di)"
}, {
    subject: "Italian",
    question: "...a restaurant",
    answer: "un ristorante"
}, {
    subject: "Italian",
    question: "...a rental room",
    answer: "un'affittacamera"
}, {
    subject: "Italian",
    question: "...a bottle of",
    answer: "una bottiglia di"
}, {
    subject: "Italian",
    question: "a double room with two beds",
    answer: "una doppia con due letti"
}, {
    subject: "Italian",
    question: "a double room with one big bed",
    answer: "una matrimoniale"
}, {
    subject: "Italian",
    question: "a single room",
    answer: "una singola"
}, {
    subject: "Italian",
    question: "a table for two",
    answer: "una tavola per due"
}, {
    subject: "Italian",
    question: "...a casual restaurant",
    answer: "una trattoria"
}, {
    subject: "Italian",
    question: "triple room",
    answer: "una tripla"
}, {
    subject: "Italian",
    question: "One, Two, Three",
    answer: "Uno, Due, Tre."
}, {
    subject: "Italian",
    question: "Go straight! then turn left/ right!",
    answer: "Vada dritto! e poi giri a destra/ sinistra!"
}, {
    subject: "Italian",
    question: "Come with me!",
    answer: "Vieni con me!/ Venga con me! (polite)"
}, {
    subject: "Italian",
    question: "...white wine",
    answer: "vino bianco"
}, {
    subject: "Italian",
    question: "...red wine",
    answer: "vino rosso"
}, {
    subject: "Italian",
    question: "veal",
    answer: "vitello"
}, {
    subject: "Italian",
    question: "I live in (the U.S/ Italy)",
    answer: "Vivo (negli stati uniti / in Italia)"
}, {
    subject: "Italian",
    question: "I would like to reserve...",
    answer: "Vorrei prenotare..."
}, {
    subject: "Italian",
    question: "I would like",
    answer: "Vorrei..."
}]);
};

cardCreate()
.then(function() {
	process.exit();
});

