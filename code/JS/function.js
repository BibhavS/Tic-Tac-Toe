let random = Math.floor(Math.random() * 2); //random number between 0 and 1
        let array = ["X", "O"];
        let xo = array[random];
        let buttons = document.querySelectorAll('.item');
        let buttonarray = Array.from(buttons);
        // To add X or O through clicking button
        buttonarray.forEach((btn) => {
            if (btn.innerHTML == "") 
            {    
                btn.addEventListener('click', (e) => {
                    if (e.target.innerHTML == "") {
                            e.target.innerHTML = xo;
                            if (xo == "X") {
                                xo = "O";
                            }
                            else {
                                xo = "X";
                            }
                            {
                                if (win(buttonarray) == 1) {
                                    if(document.getElementById('o').style.display == "block")
                                    {
                                        document.getElementById('x').style.display = "none";
                                    }
                                    else{
                                        document.getElementById('x').style.display = "block";
                                    }
                                }
                                else if (win(buttonarray) == 2) {
                                    if(document.getElementById('x').style.display == "block")
                                    {
                                        document.getElementById('o').style.display = "none";
                                    }
                                    else{
                                        document.getElementById('o').style.display = "block";
                                    }
                                }
                            }
                            checkdraw();
                        }
                    })
                }
               
        })

        //function to check the draw
        function checkdraw() {
            var x = 0;
            for (i in buttonarray) {
                if (buttonarray[i].innerHTML != "") {
                    x++;
                }
            }
            if(x == 9 && win(buttonarray) != 1 && win(buttonarray) != 2){
                document.getElementById('draw').style.display = "block";
            }
        }

        //function to check the win 
        function win(buttonarray) {
            let combos = [
                [0, 1, 2],
                [0, 3, 6],
                [6, 7, 8],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6],
                [1, 4, 7],
                [3, 4, 5]
            ]
            for (let i =0;i<combos.length;i++) {
                if (buttonarray[combos[i][0]].innerHTML == 'X' && buttonarray[combos[i][1]].innerHTML == 'X' && buttonarray[combos[i][2]].innerHTML == 'X') 
                {
                    x = 1;
                    return 1;       
                }
                else if (buttonarray[combos[i][0]].innerHTML == 'O' && buttonarray[combos[i][1]].innerHTML == 'O' && buttonarray[combos[i][2]].innerHTML == 'O') 
                {
                    x = 1;
                    return 2;
                }
            }
            return 0;
        }
        //function to reset the game
        function resetgame() {
            Array.from(buttons).forEach((btn) => {
                btn.innerHTML = "";
                document.getElementById('o').style.display = "none";
                document.getElementById('x').style.display = "none";
                document.getElementById('draw').style.display = "none";
            })
        }