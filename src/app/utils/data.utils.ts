export default class DataUtils {

	// Navbar utils
	static navbarViewsFR: Array<Array<string>> = [['0', 'home', 'Meridolian'], ['1', 'bio', 'Qui suis-je ?'], ['2', 'skills', 'Compétences'],
	['3', 'work-experience', 'Expériences'], ['4', 'education', 'Formations'], ['5', 'achievements', 'Projets Personnels'], ['6', 'hobbies', 'Hobbies'],
	['7', 'contact', 'Contact']];

	static navbarViewsEN: Array<Array<string>> = [['0', 'home', 'Meridolian'], ['1', 'bio', 'Who am I ?'], ['2', 'skills', 'Skills'],
	['3', 'work-experience', 'Work Experience'], ['4', 'education', 'Education'], ['5', 'achievements', 'Achievements'], ['6', 'interests', 'Hobbies'],
	['7', 'contact', 'Contact']];


	// Bio utils
	static bioFR: Array<string> = [
		"Je m'appelle Mathieu Gueribout, j'ai 22 ans, et je suis un grand passionné de High Tech depuis mon enfance. " +
		"Lorsque j'ai eu l'âge d'avoir mon propre ordinateur, j'ai commencer à bidouiller dans Windows XP pour comprendre comment cela marche. "
		+ "Mais j'ai aussi commencer à apprendre comment dépanner seul mon ordinateur en fouillant sur les forums ! " +
		"Au fur et à mesure des années, j'ai entretenu cette passion de l'informatique, du software, du hardware, et du jeu vidéo, " +
		"à tel point que je me suis dit \"Tiens et si j'en faisais mon métier ?\".",

		"C'est donc après mon Baccalauréat STI2D (Sciences et Techniques de l'Industrie et du Développement Durable) option SIN " +
		"(Systèmes Informations et Numériques), que je me suis posé la question \"oui d'accord l'informatique c'est cool mais quoi dans " +
		"l'informatique ?\". Et c'est là que j'ai découvert la Coding ! " +
		"La CODING FACTORY by ITESCIA est une école de Code où l'on apprend le développement web et mobile grâce à la méthode éduscrum " +
		"et en environnement start-up, génial non ? Alors comment ça marche ? C'est très simple. ",

		"Nous apprenons un langage, une techno ou un outil lors d'un sprint d'une semaine. C'est-à-dire que du lundi au mercredi, " +
		"un Product Owner nous donne des exercices, nous passe un peu de cours, puis ensuite nous sommes en autonomie toute la journée du jeudi " +
		"pour réaliser un projet que nous présentons le vendredi matin ! Il ne reste plus que le vendredi aprem qui est dédié à une rétro sur " +
		"semaine pour dire ce qui nous a plu et déplu, puis le reste de l'après-midi est dédié à un projet personnel à réaliser sur l'année. " +
		"Tout cela en alternance m'a permis de découvrir le développement web et mobile, de grimper en compétences à vitesse grand V, et " +
		"d'apprendre dans une méthodologie révolutionnaire, gratifiante, et bien plus représentative du monde du travail. " +
		"Au cours de ces 2 années de BAC+2 j'ai donc monté en compétences de manière exponentielle en web, en mobile, en algorithmie, " +
		"en programmation orienté objet, ou encore en bases de données, j'ai adoré cette formation.",

		"Cependant, je voyais bien que ça ne me convenait pas, j'aimais le web et le mobile, mais je me voyais mal faire uniquement " +
		"cela toute ma vie. Je me suis donc renseigné, et j'ai trouvé LA voie ultime, l'Intelligence Artificielle ! " +
		"Curieux de voir jusqu'où pourrait me mener ce domaine passionant et captivant, j'ai rejoint, en septembre de cette année, " +
		"l'école ITESCIA en L3 afin d'intégrer le Master of Science Intelligence Artificielle et Applications, pour y découvrir toutes " +
		"les subtilités du machine learning du deep learning, des NLP et des chatbots. " +
		"Et ainsi de venir un expert IA !",

		"Mais pourquoi l'Intelligence Artificielle ? On pourrait se dire que c'est parce que c'est le domaine en vogue, mais pas du tout. " +
		"Bien qu'encore total débutant dans le domaine, L'IA m'attire tout simplement pour la diversité de possibibilités que cela apporte. " +
		"Créer des algorithmes capables de détecter bien plus rapidement une maladie chez un impatient ? L'IA peut le faire. " +
		"Créer des algorithmes capables d'analyser et comprendre le language humain ? L'IA peut le faire. " +
		"Créer des algorithmes permettant d'éviter un accident de voiture grâce à des capteurs ? L'IA peut le faire. " +
		"Créer des algorithmes pouvant prédire la propagation d'un virus ? L'IA peut le faire. " +
		"Créer des algorithmes aidant les physiciens/théoriciens à comprendre comment fonctionne notre univers ? L'IA peut le faire. " +
		"Les sujets sont multiples et les possibilités infini, voilà pourquoi ce domaine m'intéresse ! ",

		"Pour résumer je suis un Motivé, Passionné, et grand buveur de café !"
	]

	static bioEN: Array<string> = [
		"My name is Mathieu Gueribout, I'm 22 years old, and I'm passionate of High Tech since my childhood. " +
		"When I was old enough to have my own computer, I started to navigate in Windows XP to understand how it works. " +
		"But I also started to learn how troubleshoot my computer with forums ! " +
		"Over the years, I maintained my passion of computer science, software, hardware, and video games, insomuch that I told myself " +
		"I could do that as as job ? ",

		"After a Baccalaureate STI2D (Sciences et Techniques of Industry and Sustainable Development) with SIN option " +
		"(Information and Digital Systems), I asked myself \"which field of computer science interest me ?\". That's the moment I discovered " +
		"Coding Factory ! " +
		"CODING FACTORY by ITESCIA is a web and mobile development school, with eduscrum as eduction method and in a Startup environnement, " +
		"isn't it cool ? So how does this works ? Well, it's really simple.",

		"We learn to use a programmation language, a technology, or a tool in one week sprint. It means from monday to wednesday, a Product " +
		"Orwner is here to teach us, coach us, and give us exercises, then thursday we are alone in teams to achieve a mini project which we " +
		"present to the Product Owner friday morning. On friday afternoon, we organize a retrospective to talk " +
		"about good and bad things about the week, and rest of the afternoon is dedicated to realize a personal project we will present at the " +
		"end of the year. And of course this formation is in apprenticeship. " +
		"These 2 years allowed me to discover web and mobile development, to boost my skills a lot, and learn with a revolutionnary way, well " +
		"more gratifying, and representative of the life at work. I loved this formation.",

		"However, I saw it wasn't enough, I needed something else, because I love web and mobile development but I didn't want to do only that " +
		"all my life. So I inquired, and I found it ! THE ultimate field, Artificial Intelligence ! " +
		"Curious about where this exciting field could lead me, I started on september of 2020, a Master's degree in Artificial Intelligence " +
		"named \"Master of Science Artificial Intelligence and Applications\" at ITESCIA, to discover all subtleties about machine learning, " +
		"deep learning, NLP and chatbots. " +
		"And become an AI Expert !",

		"So why Artificial Intelligence ? We could suppose it is because it's the field \"in vogue\", but it's not. " +
		"Although still a beginner, AI attract me because of all possibilities it brings. " +
		"Create algorithms which can detect well faster deseases in a patient ? AI can do that. " +
		"Create algorithms which can analyze and understand human language ? AI can do that. " +
		"Create algorithms which can avoid a car accident thanks to sensors ? AI can do that. " +
		"Create algorithms which can predict the propagation of a virus ? AI can do that. " +
		"Create algorithms which can support theoretical physicist to understand how works our universe ? AI can do that. " +
		"Subjects are multiple and possibilities are infinite, that's why this field interest me !",

		"To sum up, I am Motivated, Passionate, and a great drinker of coffee !"
	]


	// Skills utils
	static webSkills: Array<Array<string>> = [['Angular', 'angular.png'], ['AngularJS', 'angularjs.png'], ['Javascript', 'javascript.png'],
	['Typescript', 'typescript.png'], ['Sass', 'sass.png'], ['HTML 5', 'html.png'], ['CSS 3', 'css.png'], ['Java', 'java.png'],
	['Spring', 'spring.png']];

	static mobileSkills: Array<Array<string>> = [['Android', 'android.png'], ['Nativescript', 'nativescript.png']];

	static tools: Array<Array<string>> = [['Windows', 'windows.png'], ['MacOS', 'apple.png'], ['Linux', 'linux.png'], ['Ubuntu', 'ubuntu.png'],
	['Bash', 'bash.png'], ['Visual Studio Code', 'vscode.png'], ['IntelliJ', 'intellij.png'], ['Git', 'git.png'], ['Github', 'github.png'],
	['Gitlab', 'gitlab.png'], ['Jenkins', 'jenkins.png'], ['Docker', 'docker.png'], ['Postman', 'postman.png']];

	static softSkillsFR: Array<Array<string>> = [['Anglais B1', 'english.png'], ['Autonome', 'autonomous.png'], ['Travail d\'équipe', 'teamwork.png'],
	['Curieux', 'curious.png'], ['Passionné', 'passionate.png'], ['Scrum', 'scrum.png'], ['Kanban', 'kanban.png']];

	static softSkillsEN: Array<Array<string>> = [['English B1', 'english.png'], ['Autonomous', 'autonomous.png'], ['Team Work', 'teamwork.png'],
	['Curious', 'curious.png'], ['Passionate', 'passionate.png'], ['Scrum', 'scrum.png'], ['Kanban', 'kanban.png']];

	static futureSkillsFR: Array<Array<string>> = [['Python', 'python.png'], ['TensorFlow', 'tensorflow.png'], ['Keras', 'keras.png'],
	['PyTorch', 'pytorch.png'], ['Caffe2', 'caffe2.png'], ['ChatBot', 'chatbot.png'], ['Traitement automatique des langues', 'nlp.png'],
	['Réseau de neuronnes', 'neuralnetwork.png'], ['Machine Learning', 'machinelearning.png'], ['Deep Learning', 'deeplearning.png']];

	static futureSkillsEN: Array<Array<string>> = [['Python', 'python.png'], ['TensorFlow', 'tensorflow.png'], ['Keras', 'keras.png'],
	['PyTorch', 'pytorch.png'], ['Caffe2', 'caffe2.png'], ['ChatBot', 'chatbot.png'], ['Natural Language Processing', 'nlp.png'],
	['Neural Network', 'neuralnetwork.png'], ['Machine Learning', 'machinelearning.png'], ['Deep Learning', 'deeplearning.png']];
}