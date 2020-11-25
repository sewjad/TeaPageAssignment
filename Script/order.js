var brand1 = document.getElementById("man1");
var brand2 = document.getElementById("man2");
var brand3 = document.getElementById("man3");
var brand4 = document.getElementById("man4");
var brand5 = document.getElementById("man5");
var brand6 = document.getElementById("man6");

var package1 = document.getElementById("pack1");
var package2 = document.getElementById("pack2");
var package3  = document.getElementById("pack3");

var souvenir1 = document.getElementById("souv1");
var souvenir2 = document.getElementById("souv2");
var souvenir3 = document.getElementById("souv3");

var small = document.getElementById("sizeS");
var medium = document.getElementById("sizeM");
var large = document.getElementById("sizeL");

const btnPlaceOrder = document.getElementById("place");
const btnOrderAdd = document.getElementById("OrderAdd");
const btnFavourite = document.getElementById("favOrder");
const btnAddFav = document.getElementById("favAdd");
const btnLoyaltyCheck = document.getElementById("LoyaltyCheck");

var txtBrand = document.getElementById("brand");
var txtPackage = document.getElementById("package");
var size = document.getElementById("size");
var span1 = document.getElementById("mug");
var span2 = document.getElementById("strainer");
var span3 = document.getElementById("wooden");
var txtCurrentCost = document.getElementById("currentCost");

var orderSum = document.getElementById("OverallOrder");
var totalCost = document.getElementById("totCost");
var loyaltyPoints = document.getElementById("loyalP");

var manufacturer = document.getElementsByClassName("manufacturer");

var BrandCost = 0;
var Packagecost = 5000;
var SizeCost = 2500;
var ExtraCost = 0; 
var currentCost = BrandCost + Packagecost +  SizeCost + ExtraCost;
var count = 0;
/*Button Events for brand selection*/
brand1.addEventListener("click", manuf);
brand2.addEventListener("click", manuf);
brand3.addEventListener("click", manuf);
brand4.addEventListener("click", manuf);
brand5.addEventListener("click", manuf);
brand6.addEventListener("click", manuf);

function manuf(){
    switch(this){
        case brand1: txtBrand.innerHTML = `Dilmah`;
                    currentCost = currentCost - BrandCost;
                    BrandCost= 1000;
                    currentCost = currentCost + BrandCost;
                    txtCurrentCost.innerHTML = `${currentCost}`;
                    break;
        case brand2: txtBrand.innerHTML = `Jones`; 
                    currentCost = currentCost - BrandCost; 
                    BrandCost= 1500;
                    currentCost = currentCost + BrandCost;
                    txtCurrentCost.innerHTML = `${currentCost}`;
                    break;
        case brand3: txtBrand.innerHTML = `George Steuart`; 
                    currentCost = currentCost - BrandCost;
                    BrandCost= 1000;
                    currentCost = currentCost + BrandCost;
                    txtCurrentCost.innerHTML = `${currentCost}`;
                    break;
        case brand4: txtBrand.innerHTML = `Malwatte valley plantations`; 
                    currentCost = currentCost - BrandCost;
                    BrandCost= 2000;
                    currentCost = currentCost + BrandCost;
                    txtCurrentCost.innerHTML = `${currentCost}`;
                    break;
        case brand5: txtBrand.innerHTML = `Prestige Ceylon Teas`; 
                    currentCost = currentCost - BrandCost;
                    BrandCost= 1000;
                    currentCost = currentCost + BrandCost;
                    txtCurrentCost.innerHTML = `${currentCost}`;
                    break;
        case brand6: txtBrand.innerHTML = `Empire Teas`; 
                        currentCost = currentCost - BrandCost;
                        BrandCost= 2000;
                        currentCost = currentCost + BrandCost;
                        txtCurrentCost.innerHTML = `${currentCost}`;
                        break;
    }
}

/*Button Events for package selection*/
package1.addEventListener("click", pack);
package2.addEventListener("click", pack);
package3.addEventListener("click", pack);

function pack(){
    switch(this){
        case package1: txtPackage.innerHTML = `Paper pouch`;
                        currentCost = currentCost - Packagecost;
                        Packagecost= 1000;
                        currentCost = currentCost + Packagecost;
                        txtCurrentCost.innerHTML = `${currentCost}`;
                        break;
        case package2: txtPackage.innerHTML = `Tin`; 
                        currentCost = currentCost - Packagecost; 
                        Packagecost= 5000;
                        currentCost = currentCost + Packagecost;
                        txtCurrentCost.innerHTML = `${currentCost}`;
                        break;
        case package3: txtPackage.innerHTML = `Paper bag`; 
                        currentCost = currentCost - Packagecost;
                        Packagecost= 2500;
                        currentCost = currentCost + Packagecost;
                        txtCurrentCost.innerHTML = `${currentCost}`;
                        break;
        
    }
}

/*Button Events for Extra selection*/
souvenir1.addEventListener("click", souv);
souvenir2.addEventListener("click", souv);
souvenir3.addEventListener("click", souv);

function souv(){
    if(this==souvenir1&&souvenir1.checked == true){
        span1.innerHTML = `Mug`;
    }
    if(this==souvenir1&&souvenir1.checked == false){
        span1.innerHTML = ` `;
    }
    if(this==souvenir2&&souvenir2.checked == true){
        span2.innerHTML = `Tea Strainer`;
    }
    if(this==souvenir2&&souvenir2.checked == false){
        span2.innerHTML = ` `;
    }
    if(this==souvenir3&&souvenir3.checked == true){
        span3.innerHTML = `Wooden Souvenir`;
    }
    if(this==souvenir3&&souvenir3.checked == false){
        span3.innerHTML = ` `;
    }
}

/*Button Events for size selection*/
small.addEventListener("click", sizes);
medium.addEventListener("click", sizes);
large.addEventListener("click", sizes);

function sizes(){
    switch(this){
        case small: size.innerHTML = `Small`;
                    currentCost = currentCost - SizeCost;
                    SizeCost= 1000;
                    currentCost = currentCost + SizeCost;
                    txtCurrentCost.innerHTML = `${currentCost}`;
                    break;
        case medium: size.innerHTML = `Medium`; 
                    currentCost = currentCost - SizeCost; 
                    SizeCost= 2500;
                    currentCost = currentCost + SizeCost;
                    txtCurrentCost.innerHTML = `${currentCost}`;
                    break;
        case large: size.innerHTML = `Large`; 
                    currentCost = currentCost - SizeCost;
                    SizeCost= 5000;
                    currentCost = currentCost + SizeCost;
                    txtCurrentCost.innerHTML = `${currentCost}`;
                    break;
}
}

/*Functions for the add to order, place order, add to favorites, order favorites, check loyalty buttons*/
btnOrderAdd.addEventListener("click", CostSum);
function CostSum(){
    orderSum.innerHTML = txtBrand.innerHTML +` ` + txtPackage.innerHTML + ` ` + size.innerHTML;
    totalCost.innerHTML = currentCost;
    count++;
    txtBrand.innerHTML = ``;
    txtPackage.innerHTML = ``;
    span1.innerHTML = ` `;
    span2.innerHTML = ` `;
    span3.innerHTML = ` `;
    size.innerHTML = ``;
    txtCurrentCost.innerHTML = ``;
}

btnLoyaltyCheck.addEventListener("click", Loyalty);
function Loyalty(){
    if(count >= 4){
        loyaltyPoints.innerHTML = `Loyalty Points: 20`;
    }
    else{
        loyaltyPoints.innerHTML = `Loyalty Points: 0`;
    }
}
var FavoriteAdd = orderSum.innerHTML;
var FavCost = 0;
btnAddFav.addEventListener("click", addToFav);
function addToFav(){
    FavoriteAdd = orderSum.innerHTML;
    FavCost = currentCost;
}

btnFavourite.addEventListener("click", FavOrder);
function FavOrder(){
    orderSum.innerHTML = FavoriteAdd;
    totalCost.innerHTML = FavCost;
}

btnPlaceOrder.addEventListener("click", placeOrdr);
function placeOrdr(){
    window.alert("Congratulations! \n Your order has been successfully placed!");
    orderSum.innerHTML = `Overall Order`;
    totalCost.innerHTML = `Total cost`;
    if(orderSum.innerHTML == `` || totalCost.innerHTML == ``){
        window.alert("Add items to order!");
    }
}


