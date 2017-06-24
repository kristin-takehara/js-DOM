/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/

var getName = document.getElementById("name1");
console.log(getName);
getName.innerHTML = "Tay-Tay";

/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/

var position2 = document.getElementById("position2");
console.log(position2);
position2.innerHTML = "Project Manager";

/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/

var alias3 = document.getElementById("alias3");
console.log(alias3);
alias3.innerHTML = "Concatenation";

/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/

var getProfile = document.getElementsByClassName("profile");
console.log(getProfile);
getProfile[0].innerHTML = '"Purple Rain"';

/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/

var updateProfile = document.getElementsByClassName("profile");
console.log(updateProfile);
updateProfile[1].innerHTML = '"Ai ya!"';

/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/

var updateAlias = document.getElementsByClassName("alias");
console.log(updateAlias);
updateAlias[2].innerHTML = "Dunno";

/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

Append this div element to the nameParent div*/

var newPeterGriffin = document.createElement("div");
console.log(newPeterGriffin);
newPeterGriffin.id = "name7";
newPeterGriffin.innerHTML = "Peter Griffin";
nameParent.appendChild(newPeterGriffin);
 
/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/

var modifyTim = document.createElement("div");
console.log(modifyTim);
modifyTim.id = "alias8";
modifyTim.innerHTML = "Old Man Riverwalk";
aliasParent.appendChild(modifyTim);

//Final Boss
/*9. Create your own profile.*/

var createProfile = document.getElementsByClassName("block3 col-sm-4");
console.log(createProfile);

var insertImg = document.getElementsByTagName("img");
console.log(insertImg);
insertImg[8].id = "pic9";
document.getElementById("pic9").src = "http://www.trybackyardfarming.com/wp-content/uploads/2017/05/peony-pixabay-e1494959531536-150x150.jpg";

var whatever = document.createElement("div");
whatever.id = "name9";
whatever.innerHTML = "Kristin Takehara";
createProfile[2].appendChild(whatever);

var whatever2 = document.createElement("div");
whatever2.id = "position9";
whatever2.innerHTML = "DevLeague Nuub";
createProfile[2].appendChild(whatever2);

var whatever3 = document.createElement("div");
whatever3.id = "alias9";
whatever3.innerHTML = "Krissy";
createProfile[2].appendChild(whatever3);

var whatever4 = document.createElement("div");
whatever4.id = "bio9";
whatever4.innerHTML = '"Help, please!"';
createProfile[2].appendChild(whatever4);

