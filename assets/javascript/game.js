$(document).ready(function () {

    // Variables
    var yourCharacter = false;
    var yourEnemies = false;
    var yourDefender = false;

    var enemyDefeatedCount = 0;


    // Characters stats
    var playersArray = [{
            name: "Wargreymon",
            healthPoints: 120,
            attackPower: 10,
            counterAttackPower: 20,
            numberOfAttacks: 1
        },
        {
            name: "Metalgarurumon",
            healthPoints: 160,
            attackPower: 7,
            counterAttackPower: 15,
            numberOfAttacks: 1
        },
        {
            name: "Omnimon",
            healthPoints: 170,
            attackPower: 14,
            counterAttackPower: 25,
            numberOfAttacks: 1
        }, {
            name: "Agumon",
            healthPoints: 100,
            attackPower: 4,
            counterAttackPower: 10,
            numberOfAttacks: 1
        }
    ];

    console.log("playersArray:", playersArray);
    // console.log("first character:", playersArray[0].name);
    for(var i=0; i < playersArray.length; i++) {
        console.log("character name:", playersArray[i].name);
    }

    // Restart game

    function startGame() {
        yourCharacter = false;
        yourEnemies = false;
        yourDefender = false;
    };
    startGame();

    // Background music

    var audio = new Audio("assets/images/Music.mp3");

    audio.play();

    $(".unpickedHolder").on("click", ".unpicked", function () {
        $(".enemies").append($(".unpicked"));
        $(".unpicked").removeClass("unpicked").addClass("enemy");
        $(this).addClass("picked").removeClass("enemy");
        console.log("player name: ", $(this).attr("data-name"));
        $(".player").append($(this));
    });

    $(".enemies").on("click", ".enemy", function () {
        $(".unpickedHolder").append($(".enemies"));
        console.log("defender name: ", $(this).attr("data-name"));
        $(".defender").append($(this));
        $(".border").hide();
    });

    $(".attack").on("click", function () {
        console.log("Attack");
        console.log("player: ", $(".player"));
        console.log("defender: ", $(".defender"));
    });
});