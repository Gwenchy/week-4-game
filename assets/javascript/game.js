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
    
        // console.log("playersArray:", playersArray);
        // // console.log("first character:", playersArray[0].name);
        // for(var i=0; i < playersArray.length; i++) {
        //     console.log("character name:", playersArray[i].name);
        // }
    
    
        function findCharacter(name) {
            for (var i = 0, len = playersArray.length; i < len; i++) {
                if (playersArray[i].name === name) {
                    return i;
                }
            }
            return -1;
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
            
            
            // console.log("player name: ", $(this).attr("data-name"));
            // var charIndex = findCharacter($(this).attr("data-name"));
            // console.log("index:", charIndex);
            // console.log("stats:", playersArray[charIndex]);
            // console.log("player health:", playersArray[charIndex].healthPoints);
    
            $(".player").append($(this));
        });
    
        $(".enemies").on("click", ".enemy", function () {
            $(".unpickedHolder").append($(".enemies"));
            // console.log("defender name: ", $(this).attr("data-name"));
    
            // console.log("name index:", findCharacter($(this).attr("data-name")));
    
            $(".defender").append($(this));
            $(".border").hide();
        });
    
        $(".attack").on("click", function () {
            console.log("Attack");
            console.log("player: ", $(".player"));
            console.log("defender: ", $(".defender"));
    
    
            var playerIndex = findCharacter($(".picked").attr("data-name"));
            var defenderIndex = findCharacter($(".defender").find(".enemy").attr("data-name"));
    
            console.log("player stats:", playersArray[playerIndex]);
            console.log("defender stats:", playersArray[defenderIndex]);
            
        });
    });