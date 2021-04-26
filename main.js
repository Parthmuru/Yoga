var i = 0
var images = [
"bhujangasana.jfif","vrikshasana.jfif","Shirshasana.jfif","tadasana.jfif","Ushtrasana.jfif"
];
var text = [
    "Bhujangasana or Cobra Pose is a reclining back-bending asana in hatha yoga and modern yoga as exercise.It is commonly performed in a cycle of asanas in Surya Namaskar (Salute to the Sun) as an alternative to Urdhva Mukha Svanasana (Upwards Dog Pose).","Vrikshasana or Tree Pose is a balancing asana. It is one of the very few standing poses in medieval hatha yoga, and remains popular in modern yoga as exercise.","The name Salamba Shirshasana comes from the Sanskrit words सालम्ब meaning supported, शीर्ष meaning head,and आसन, meaning posture or seat.In the Supported Headstand (Salamba Shirshasana), the body is completely inverted, and held upright supported by the forearms and the crown of the head.","Tadasana, Mountain Pose or Samasthiti is a standing asana in modern yoga as exerciseit is not described in medieval hatha yoga texts. It is the basis for several other standing asanas.Tadasana is from the Sanskrit words ताड, mountain and आसन āsana meaning posture or seat.Samasthitiḥ is from सम sama meaning equal, level, or balanced स्थिति sthiti, stand.","Ustrasana, Ushtrasana, or Camel Pose is a kneeling back-bending asana in modern yoga as exercise.The name comes from the Sanskrit words उष्ट्र , camel,and आसन, Asana meaning posture or seat.A different (standing) pose is given the name Ushtrasana in the 19th century Sritattvanidhi."
];
function change() {
 document.getElementById("profile").src= images[i];
    document.getElementById("tak").innerHTML= text[i];
    i++;
    if(i == 5) {
        i = 0;
    }
}