const boot = [
"Microsoft Windows [Version 11.0.0000]",
"",
"C:\\Users\\FavoritePerson> friendship.exe",
"",
"Initializing Friendship...",
"",
"Loading Memories... ██████████ 100%",
"Loading Laughter... ██████████ 100%",
"Loading Trust... ██████████ 100%",
"Loading Love... ██████████ 100%",
"",
"Checking Best Friend Status...",
"",
"✔ Verified",
"",
"Congratulations!",
"",
"You have successfully become",
"",
"❤️ MY FAVORITE PERSON ❤️",
"",
"Press ENTER to continue..."
];

const output = document.getElementById("output");

let line = 0;

function terminal(){

    if(line < boot.length){

        output.innerHTML += boot[line] + "\n";

        line++;

        setTimeout(terminal,450);

    }else{

        document.getElementById("enterBtn").style.display="inline-block";

    }

}

terminal();

const message = `Dear Love,

Happy Friendship Day ❤️

You're more than my boyfriend.

You're my best friend.

My biggest comfort.

And my favorite part of every day.

Distance may keep us apart,

but it could never change

how much you mean to me.

Thank you

for every laugh,

every late-night conversation,

and every moment we've shared.

If I had to choose again...

I'd still choose you.

Every.

Single.

Time.

Happy Friendship Day,

My Favorite Human ❤️`;

function showLetter(){

    document.getElementById("terminal").style.display="none";
    document.getElementById("letter").style.display="block";

    type();

}

let i = 0;

function type(){

    const msg = document.getElementById("message");

    if(i <= message.length){

        msg.innerHTML = message.substring(0,i).replace(/\n/g,"<br>");

        i++;

        window.scrollTo(0,document.body.scrollHeight);

        setTimeout(type,35);

    }

}

function showSecret(){

    document.getElementById("secret").style.display="block";

    window.scrollTo({
        top:document.body.scrollHeight,
        behavior:"smooth"
    });

    console.log("❤️ Hidden Message ❤️");
    console.log("Distance = Temporary");
    console.log("Friendship = Forever");
    console.log("Love = Infinite");

}
