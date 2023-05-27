let data = [
    {
        imgSrc: "./avenger.jpg",
        name: "av1",
        count: 0,
    },
    {
        imgSrc: "./avengers2.jpg",
        name: "av2",
        count: 0,
    },
    {
        imgSrc: "./avengers3.jpg",
        name: "av3",
        count: 0,
    },
]


console.log(data[0].imgSrc)

const img1 = document.querySelector(".img1")
const img2 = document.querySelector(".img2")
const img3 = document.querySelector(".img3")

document.querySelector(".show-img").src = data[0].imgSrc;

function showSelectedImg() {
    console.log("HIII")
    img2.addEventListener("click", function () {
        document.querySelector(".show-img").src = data[1].imgSrc
    })
    img3.addEventListener("click", function () {
        document.querySelector(".show-img").src = data[2].imgSrc
    })

}


let count = 0;

function addCount(test) {

    const counterElem = test.parentNode.querySelector('.clicked');
    count = +counterElem.innerHTML;
    counterElem.innerHTML = count + 1;
}


function showData(){
    for (let i = 0; i < data.length; i++) {
        $(".name-holder").innerText(data[i].name);
        $(".url-holder").innerText(data[i].imgSrc);
        $(".count-holder").innerText(data[i].count);   
        }
}


$(function () {
    $(".hidden").hide();
    $(".show-admin").on("click", function () {
        $(".hidden").toggle();
        // for (let i = 0; i < data.length; i++) {
        // $(".name-holder").innerText(data[i].name);
        // $(".url-holder").innerText(data[i].imgSrc);
        // $(".count-holder").innerText(data[i].count);   
        // }
    });
    $(".cansel").on("click", function () {
        $(".hidden").hide();
    });

});
