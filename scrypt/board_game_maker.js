console.log ("hola")

var board_game = [];

var board_array = [];

var sum_array = [];
console.log(sum_array);
console.log (sum_array.length + "" + sum_array + " at the top")
/* take array_length () an give a quantity of elements in the array. 
if you want to add more par for the game, just add a value to the value function */
function sum_array_length ( array_one, array_two, array_three, array_four){

    sum_array = [];
    sum_array.push.apply(sum_array, array_one);
    sum_array.push.apply(sum_array, array_two);
    sum_array.push.apply(sum_array, array_three);
         
    console.log( sum_array.length + " " + sum_array + " sum_array longitud" );
       
}
/* sum array level ( the array must sum x number, with this quantity of elements )*/
sum_array_length(sum_array_level( 7, 3),
                 sum_array_level( 7 ,4),
                 sum_array_level( 7 ,2) );

/*console.log(board_array.length + " outside Sum check")*/

/* here i generate a random value to the array */
function array_length (board_game_length){
    board_array = [];
    for(let i = 0; i < board_game_length; i++) {
        
        board_array.push(Math.round((Math.random() * (4 - 1 + 1)) + 1));

    }
      console.log( board_array + " arrays of array length "); 
}

var add_array = null;

function sum_array_level(num_sum_limit, board_game_length){
    
    
   
    while (add_array != num_sum_limit){

        board_array=[];

        for(let i = 0; i < board_game_length; i++) {
        
            board_array.push(Math.round((Math.random() * (4 - 1 + 1)) + 1));
    
        }
  
        /*console.log ("inside sum_array_level inside while" + add_array);*/
        
        add_array =  board_array.reduce(function(a,b){ return a+b});
       
    }
        add_array = 0;

    console.log(board_array.length + " seven" );
    return board_array;
}

function shuffle_array ( array_shuffle ) {


    for(let i = array_shuffle.length - 1; i > 0; i--){

        const j = Math.floor(Math.random() * i);
        const temp = array_shuffle[i];
        array_shuffle[i] = array_shuffle[j];
        array_shuffle[j] = temp;

      }
      return sum_array;
}
shuffle_array (sum_array);

function convert_array_to_board (array){

    board_game = array;
    

}
convert_array_to_board(sum_array);
console.log( board_game + " board game");

console.log (sum_array.length + " "+ sum_array + " at the bottom");









