
    var board_game = []; 
    var sum_total_board= null;
    var check_seven = null;

/* board maker works here. import this piece of code in the future*/

var board_array = [];
var sum_array = [];

console.log(sum_array);
console.log (sum_array.length + "" + sum_array + " at the top")
/* take array_length () an give a quantity of elements in the array. 
if you want to add more par for the game, just add a value to the value function */
function sum_array_length ( array_one, array_two, array_three, array_four, array_five){

    sum_array = [];
    sum_array.push.apply(sum_array, array_one);
    sum_array.push.apply(sum_array, array_two);
    sum_array.push.apply(sum_array, array_three);
    sum_array.push.apply(sum_array, array_four);
    sum_array.push.apply(sum_array, array_five);
         
    console.log( sum_array.length + " " + sum_array + " sum_array longitud" );
       
}
/* sum array level ( the array must sum x number, with this quantity of elements )*/
sum_array_length(sum_array_level( 7, 2),
                 sum_array_level( 7 ,4),
                 sum_array_level( 7 ,3),
                 sum_array_level( 7 ,3),
                 sum_array_level( 7 ,4)
                  );

/*console.log(board_array.length + " outside Sum check")*/

/* here i generate a random value to the array */
function array_length (board_game_length){
    board_array = [];
    for(let i = 0; i < board_game_length; i++) {
        
        board_array.push(Math.round((Math.random() * ( 4 - 1 + 1)) + 1));

    }
      console.log( board_array + " arrays of array length "); 
}

var add_array = null;

function sum_array_level(num_sum_limit, board_game_length){
  
    while (add_array != num_sum_limit){

        board_array=[];

        for(let i = 0; i < board_game_length; i++) {
        
            board_array.push(Math.round((Math.random() * (6 - 1 + 1)) + 1));
    
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

/* board maker works*/
    

 
/*Bottons in panel HTML*/
var btn_one = board_game[0];
document.getElementById("btn_one").innerHTML= btn_one;

var btn_two = board_game[1];
document.getElementById("btn_two").innerHTML= btn_two;

var btn_three = board_game[2];
document.getElementById("btn_three").innerHTML= btn_three;

var btn_four = board_game[3];
document.getElementById("btn_four").innerHTML= btn_four;

var btn_five = board_game[4];
document.getElementById("btn_five").innerHTML= btn_five;

var btn_six = board_game[5];
document.getElementById("btn_six").innerHTML= btn_six;

var btn_seven = board_game[6];
document.getElementById("btn_seven").innerHTML= btn_seven;

var btn_eight = board_game[7];
document.getElementById("btn_eight").innerHTML= btn_eight;

var btn_nine = board_game[8];
document.getElementById("btn_nine").innerHTML= btn_nine;

var btn_teen = board_game[9];
document.getElementById("btn_teen").innerHTML= btn_teen;

var btn_eleven = board_game[10];
document.getElementById("btn_eleven").innerHTML= btn_eleven;

var btn_twelve = board_game[11];
document.getElementById("btn_twelve").innerHTML= btn_twelve;

var btn_thirteen = board_game[12];
document.getElementById("btn_thirteen").innerHTML= btn_thirteen;

var btn_fourteen = board_game[13];
document.getElementById("btn_fourteen").innerHTML= btn_fourteen;

var btn_fifteen = board_game[14];
document.getElementById("btn_fifteen").innerHTML= btn_fifteen;

var btn_sixteen = board_game[15];
document.getElementById("btn_sixteen").innerHTML= btn_sixteen;


/* Add seven */
var seven_sum = [];
var seven_sum_total = null;
var seven_tokens = 0;
var num_add_substract = null;
var seven_tokens_win = seven_tokens;

var disable_button = document.querySelectorAll(".btn_class");

for (var i = 0; i < disable_button.length; i++) {
    disable_button[i].addEventListener("click", disable_btn);
}

function disable_btn () {

    console.log("disable");
    this.disabled = true;
    this.style.background = "black";
    this.style.color = "#fb8b24";
    
}

function insert(num){

  /*board_game.reduce(function(a,b){ return a+b}) / 7*/
     
    if (seven_tokens < 0){
          console.log("you ") 
      
    }else{
        
        document.form.textview.value = document.form.textview.value + num;
      
        seven_sum.push(num);
        
        seven_sum_total = seven_sum.reduce(function(a,b){ return a+b});
        seven_sum_lost  = seven_sum_total;

        
        document.getElementById("seven_sum_total").innerHTML = seven_sum_total;
        
        
        
        if ((seven_sum_total % 7) == 0){

            seven_tokens = seven_tokens + 1; 
             
            document.getElementById("seven_sum_total").innerHTML = seven_sum_total;
           
           seven_sum = [];
            
        }else if (seven_sum_lost > 7){
          
          
         /* document.getElementsById("seven_background_img").style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png)";*/
          
          document.getElementById("seven_sum_total").style.fontSize = '5vw';
          document.getElementById("seven_sum_total").style.textAlign = 'center';
          document.getElementById("seven_sum_total").style.paddingLeft = '0'
          document.getElementById("seven_square").innerHTML=  "<img src='image/skull.svg' class='seven_square'>";
          document.getElementById("countdown_id").remove;
          document.getElementById("countdown_square").innerHTML=  "<img src='image/skull.svg'    class='countdown_square'>";
          
        

             var counter = 2;
             var interval = setInterval(function() {
               counter--;
              if (counter == 0) {

                     location.reload();

               } 
     
                    }, 1000);

          console.log("you lost")
        }else if (seven_tokens == 5){
          
         
             var counter = 2;
             var interval = setInterval(function() {
               counter--;
              if (counter == 0) {

                     location.reload();

               } 
     
                    }, 1000);

          console.log("you lost")
        }
      }   
      return seven_tokens;  
}

  /* sum array_board outside the function insert*/
  

  var total_array_func = null;

  function total_array(array){

     total_array_f = array.reduce(function(a,b){ return a+b}); 
     console.log( total_array_f + " TOTAL ARRAY")
     

  }
  total_array(board_game);

  var seven_for_win = document.getElementById("seven_for_win");
  seven_for_win.innerHTML = total_array_f  / 7;
  seven_for_win = total_array_f  / 7;

  /* check if you win*/
  console.log(seven_tokens + " seven_tokens")
  
  var btn_class = document.getElementsByClassName("btn_class");
  var countdown_id = document.getElementById("countdown_id")
  
  function countdown() {
    var counter = 14;
    var interval = setInterval(function() {
      counter--;
      if (counter == 0) {

        location.reload();

        clearInterval(interval);
        
      } else {
        countdown_id.innerHTML = counter;
        /*console.log("Timer --> " + counter);*/
      }
      
      if (seven_tokens == 5){
          
          /*random fonts whe you win*/

          var font_type = [ "Arial", "Verdana", "Helvetica", 
                           'Annie Use Your Telescope','Arizonia','Black Ops One',
                           'Boogaloo','Bungee Outline','Cabin Sketch',
                           'Calligraffitti','Caveat Brush', 'Chonburi',
                           'Combo','Emilys Candy','Freckle Face', 
                           'Fredericka the Great','Gravitas One','Hanalei',
                           'Herr Von Muellerhoff','Knewave','Mali',
                           'Mrs Saint Delafield','Rochester','Sedgwick Ave',
                           'Sedgwick Ave Display', 'Shrikhand','Sofia',
                           'Stardos Stencil','Titan One','Vast Shadow',
                           'Alfa Slab One','Arbutus Slab','Artifika',
                           'Arvo', 'Atomic Age','Autour One','Bitter',
                           'Bonbon','Bowlby One','Bungee','Bungee Hairline',
                           'Bungee Inline', 'Bungee Outline','Bungee Shade',
                           'Butcherman', 'Chelsea Market','Cherry Cream Soda',
                           'Cherry Swash','Cinzel','Cinzel Decorative',
                           'Coda','Codystar','Comfortaa',
                           'Cousine','Coustard','Crafty Girls',
                           'Croissant One', 'Alfa Slab One','Arbutus Slab', 
                           'Artifika','Arvo', 'Atomic Age',
                           'Autour One','Bitter','Bonbon',
                           'Bowlby One','Bungee','Bungee Hairline',
                           'Bungee Inline', 'Bungee Outline','Bungee Shade',
                           'Butcherman', 'Chelsea Market','Cherry Cream Soda',
                           'Cherry Swash','Cinzel','Cinzel Decorative',
                           'Coda','Codystar','Comfortaa',
                           'Cousine','Coustard','Crafty Girls',
                           'Croissant One','Cutive','Cutive Mono',
                           'Delius Unicase','Domine','Donegal One',
                           'Eagle Lake','Eater', 'Elsie',
                           'Elsie Swash Caps','Emblema One','Erica One',
                           'Exo 2', 'Fascinate', 'Fascinate Inline',
                           'Fauna One','Finger Paint','Fontdiner Swanky',
                           'Galindo','Gloria Hallelujah','Gorditas', 
                           'Happy Monkey', 'Headland One','Homemade Apple',
                           'Inknut Antiqua','Jacques Francois Shadow', 'Joti One',
                           'Kameron', 'Kavoon', 'Ledger', 
                           'Libre Baskerville', 'Limelight','Luckiest Guy',
                           'Marko One','Merienda','Merienda One',
                           'Merriweather','Merriweather Sans','Metamorphous',
                           'Miltonian', 'Miltonian Tattoo','Modern Antiqua',
                           'Monoton','MuseoModerno','Nixie One', 
                           'Noticia Text','Noto Sans JP','Noto Serif',
                           'Nova Cut', 'Nova Mono', 'Offside',
                           'Oldenburg','Open Sans','Oswald',
                           'Oxygen Mono','Paprika','Peralta',
                           'Permanent Marker', 'Piedra','Playfair Display SC',
                           'Poller One','Prosto One','PT Mono',
                           'Raleway','Rammetto One','Ribeye',
                           'Ribeye Marrow','Roboto','Roboto Slab',
                           'Rock Salt', 'Ruslan Display','Rye',
                           'Sanchez','Sarina', 'Share Tech Mono',
                           'Sigmar One','Skranji','Slackey',
                           'Sniglet', 'Snowburst One', 'Source Code Pro',
                           'Source Sans Pro','Special Elite','Sriracha',
                           'Tienne', 'Tillana','Titan One',
                           'Trade Winds','Trocchi', 'Trykker',
                           'Uncial Antiqua','Unlock','Vampiro One',
                           'Volkhov','Vollkorn', 'Wallpoet', 
                           'Warnes','Wellfleet',
                          ];
          
          var num;
          var num_dos;
          var num_three;
          num = Math.floor(Math.random()*183);
          num_dos = Math.floor(Math.random()*183);
          num_three = Math.floor(Math.random()*183);
          interval_random()
          function interval_random() {
            setInterval(function(){
              var counter = 10000000;
              counter--;
              if ( counter > 0){
                            
                num=Math.floor(Math.random()*183);
                num_dos=Math.floor(Math.random()*183);
                console.log("i am the for whit random ")
                document.getElementById("countdown_id").style.fontFamily =font_type[num];
                document.getElementById("btn_one").style.fontFamily =font_type[num];
                var btn_class = document.getElementsByClassName("btn_class");
                for (let i = 0; i < btn_class.length; i++) {
                  
                  btn_class[i].style.fontFamily =font_type[num_three];
                  btn_class[i].innerHTML = "7";
                  
                }
                

                document.getElementById("btn_one").innerHTML="7";
                document.getElementById("countdown_id").innerHTML = "7";
                document.getElementById("seven_sum_total").style.fontFamily = font_type[num_dos];
                document.getElementById("seven_sum_total").innerHTML = "7";
              }
            
               
          },10);
          }
          

          
          
          /* document.getElementById("seven_tokens").innerHTML = "YOU WIN";*/
          /*document.getElementById("countdown_id").style.fontSize = '8vw';
          document.getElementById("countdown_id").style.textAlign = 'center';
          document.getElementById("countdown_id").style.paddingTop = '8px';
          document.getElementById("countdown_id").style.paddingLeft = '0'
          document.getElementById("countdown_id").innerHTML = "7";

          document.getElementById("seven_sum_total").style.fontSize = '8vw';
          document.getElementById("seven_sum_total").style.textAlign = 'center';
          document.getElementById("seven_sum_total").style.paddingTop = '12px';
          document.getElementById("seven_sum_total").style.paddingLeft = '0'
          document.getElementById("seven_sum_total").innerHTML = "7";*/
          
          
          
        
      }
    }, 1000);
  }
  countdown();

  
   /*
   console.log(seven_sum +  " fuera board");
   console.log (board_game + " fuera board");
   console.log(check_seven + " fuera board");
   */   
   
    
    
  
   









