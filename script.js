var showPrice = false;
function displayPriceFilter(){
    var priceChoice = [];
    priceChoice = document.getElementsByClassName("price-choice");
    if(showPrice == false){
        
        for(i=0; i<3; i++){
            priceChoice[i].style.display = "initial";
        }
        showPrice = true;
    }
    else{
        for(i=0; i<3; i++){
            priceChoice[i].style.display = "none";
        }
        showPrice = false;
    }
}


var showRating = false;
function displayRatingFilter(){
    var priceRating = [];
    priceRating = document.getElementsByClassName("rating-choice");
    if(showRating == false){
        
        for(i=0; i<3; i++){
            priceRating[i].style.display = "initial";
        }
        showRating = true;
    }
    else{
        for(i=0; i<3; i++){
            priceRating[i].style.display = "none";
        }
        showRating = false;
    }
    console.log(showRating);
}

var isSelected = false;
function selectFilter(id){
    filter = document.getElementById(id);
    if(!isSelected){
        filter.style.backgroundColor = "#586a77";
        filter.style.border = "3px solid #000000";
        isSelected = true;
        console.log(filter.style.borderStyle);
    }
    else{
        filter.style.backgroundColor = "#93b1c7";
        filter.style.border = "3px dotted #808080";
        isSelected = false;
    }
}

var isLowestPrice = false;
lowPrice = document.getElementsByClassName("lowestPrice");
midPrice = document.getElementsByClassName("mediumPrice");
highPrice = document.getElementsByClassName("highestPrice");
function lowestPrice(){
    if(!isLowestPrice){
        for(i=0; i<lowPrice.length; i++){
            lowPrice[i].style.display = "initial";
        }
        
        for(i=0; i<midPrice.length; i++){
            midPrice[i].style.display = "none";
        }
        
        for(i=0; i<highPrice.length; i++){
            highPrice[i].style.display = "none";
        }
        isLowestPrice = true;
    }
    else{
        for(i=0; i<lowPrice.length; i++){
            lowPrice[i].style.display = "initial";
        }
        
        for(i=0; i<midPrice.length; i++){
            midPrice[i].style.display = "initial";
        }
        
        for(i=0; i<highPrice.length; i++){
            highPrice[i].style.display = "initial";
        }
        isLowestPrice = false;
        resetFilters("price")
    }
    
}

var isMediumPrice = false;
function mediumPrice(){
    if(!isMediumPrice){
        for(i=0; i<lowPrice.length; i++){
            lowPrice[i].style.display = "none";
        }
        
        for(i=0; i<midPrice.length; i++){
            midPrice[i].style.display = "initial";
        }
        
        for(i=0; i<highPrice.length; i++){
            highPrice[i].style.display = "none";
        }
        isMediumPrice = true;
    }
    else{
        for(i=0; i<lowPrice.length; i++){
            lowPrice[i].style.display = "initial";
        }
        
        for(i=0; i<midPrice.length; i++){
            midPrice[i].style.display = "initial";
        }
        
        for(i=0; i<highPrice.length; i++){
            highPrice[i].style.display = "initial";
        }
        isMediumPrice = false;
    }
}

var ishighPrice = false;
function highestPrice(){
    console.log(ishighPrice);
    if(!ishighPrice){
        for(i=0; i<lowPrice.length; i++){
            lowPrice[i].style.display = "none";
        }
        
        for(i=0; i<midPrice.length; i++){
            midPrice[i].style.display = "none";
        }
        
        for(i=0; i<highPrice.length; i++){
            highPrice[i].style.display = "initial";
        }
        ishighPrice = true;
    }
    else{
        for(i=0; i<lowPrice.length; i++){
            lowPrice[i].style.display = "initial";
        }
        
        for(i=0; i<midPrice.length; i++){
            midPrice[i].style.display = "initial";
        }
        
        for(i=0; i<highPrice.length; i++){
            highPrice[i].style.display = "initial";
        }
        ishighPrice = false;
    }
}

var isFourStars = false;
var isFourAndAHalfStars = false;
var isFiveStars = false;
stars4 = document.getElementsByClassName("stars4");
stars4AndAHalf = document.getElementsByClassName("stars4mid5");
stars5 = document.getElementsByClassName("stars5");
function fourStars(){
    if(!isFourStars){
        for(i=0; i<stars4.length; i++){
            stars4[i].style.display = "initial";
        }

        for(i=0; i<stars4AndAHalf.length; i++){
            stars4AndAHalf[i].style.display = "none";
        }

        for(i=0; i<stars5.length; i++){
            stars5[i].style.display = "none";
        }
        isFourStars = true;
    }
    else{
        for(i=0; i<stars4.length; i++){
            stars4[i].style.display = "initial";
        }

        for(i=0; i<stars4AndAHalf.length; i++){
            stars4AndAHalf[i].style.display = "initial";
        }

        for(i=0; i<stars5.length; i++){
            stars5[i].style.display = "initial";
        }
        isFourStars = false;
    }
}


function fourAndAHalfStars(){
    if(!isFourAndAHalfStars){
        for(i=0; i<stars4.length; i++){
            stars4[i].style.display = "none";
        }

        for(i=0; i<stars4AndAHalf.length; i++){
            stars4AndAHalf[i].style.display = "initial";
        }

        for(i=0; i<stars5.length; i++){
            stars5[i].style.display = "none";
        }
        isFourAndAHalfStars = true;
    }
    else{
        for(i=0; i<stars4.length; i++){
            stars4[i].style.display = "initial";
        }

        for(i=0; i<stars4AndAHalf.length; i++){
            stars4AndAHalf[i].style.display = "initial";
        }

        for(i=0; i<stars5.length; i++){
            stars5[i].style.display = "initial";
        }
        isFourAndAHalfStars = false;
    }
}

function fiveStars(){
    if(!isFiveStars){
        for(i=0; i<stars4.length; i++){
            stars4[i].style.display = "none";
        }

        for(i=0; i<stars4AndAHalf.length; i++){
            stars4AndAHalf[i].style.display = "none";
        }

        for(i=0; i<stars5.length; i++){
            stars5[i].style.display = "initial";
        }
        isFiveStars = true;
    }
    else{
        for(i=0; i<stars4.length; i++){
            stars4[i].style.display = "initial";
        }

        for(i=0; i<stars4AndAHalf.length; i++){
            stars4AndAHalf[i].style.display = "initial";
        }

        for(i=0; i<stars5.length; i++){
            stars5[i].style.display = "initial";
        }
        isFiveStars = false;
    }
}

// priceFilters = [];
// ratingFilters = [];
// priceFilters = document.getElementsByClassName("priceChoice");
// ratingFilters = document.getElementsByClassName("ratingChoice");
// function resetFilters(filter, id){
//     option = document.getElementById(id);
//     if(filter == "price"){
//         showPrice = false;
//         showRating = true;
//         displayPriceFilter();
//         displayRatingFilter();
//     }
//     else{
//         showPrice = true;
//         showRating = false;
//         displayPriceFilter();
//         displayRatingFilter();
//     }
//     console.log();
//     for(i=0; i<priceFilters.length; i++){
//         console.log("changing styles");
//         if(priceFilters[i] != option){
//             deselectOption(priceFilters[i]);
//         }
//     }
//     for(i=0; i<ratingFilters.length; i++){
//         if(ratingFilters[i] != option){
//             deselectOption(ratingFilters[i]);
//         }
//     }
// }

// function deselectOption(id){
//     option = document.getElementById(id).style;
//     option.backgroundColor = "#000000"; //#93b1c7
//     option.border = "3px dotted #808080";
// }