$(document).ready(function () {

    // Variables
    var yourCharacter = false;
    var yourEnemies = false;
    var yourDefender = false;
    var playersArray = [];
    var enemyDefeatedCount = 0;


    // Characters stats

    var firstPlayer = {
        name: "Wargreymon",
        healthPoints: 120,
        attackPower: 10,
        counterAttackPower: 20,
        numberOfAttacks: 1

    }

    var secondPlayer = {
        name: 'Metalgarurumon',
        healthPoints: 160,
        attackPower: 7,
        counterAttackPower: 15,
        numberOfAttacks: 1
    }

    var thirdPlayer = {
        name: "Omnimon",
        healthPoints: 170,
        attackPower: 14,
        counterAttackPower: 25,
        numberOfAttacks: 1
    }

    var fourthPlayer = {
        name: "Agumon",
        healthPoints: 100,
        attackPower: 4,
        counterAttackPower: 10,
        numberOfAttacks: 1
    }

    playersArray.push(firstPlayer);
    playersArray.push(secondPlayer);
    playersArray.push(thirdPlayer);
    playersArray.push(fourthPlayer);

    // Restart game

    function startGame() {
        yourCharacter = false;
        yourEnemies = false;
        yourDefender = false;
    };

    // Background music

    var audio = new Audio("assets/images/Music.mp3");

    audio.play();

    // Choosing character process.
    if (yourCharacter === false) {
        $(".friend").on("click", function () {
            $(".player").append(this);
            $(yourCharacter = true)
            $(".thumbnail friend").removeClass('friend').addClass('enemy');
        });
    }
    else { 
        $("#enemies").append(".enemy");
    }
});