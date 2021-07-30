let myChart;

$(document).ready(function(){
    // myChart = new Chart(
    //     document.getElementById('intro_g').getContext("2d"),
    //     config
    // );
    opacityWhenScrollingHandler();
});
    
    

const movePage = (page)=>{
    let cp = $(".page").eq(page).offset().top;
    $('html, body').animate({scrollTop : cp}, 400);  
   
}

const opacityWhenScrollingHandler =()=>{
    $(window).on('scroll',(e)=>{
        let exeScroll = $(".page").eq(1).offset().top;
        let clientScroll = $('body').scrollTop();
       
        if(clientScroll <= exeScroll-50){
            $("header").css('opacity',0);
        }else{
            $("header").css('opacity',1);
        }
    })
}

let datas = {
    labels: ['외향형', '내향형', '직관형','현실주의형','이성적사고형','원칙주의형','계획형','탐색형','자기주장형','신중형'],
    datasets: [{     
        label: 'value',
        data: [26, 74, 45,55,42,58,25,75,21,79],    
        borderWidth: 3
    }],
  
};

var delayed;

const config = {
    type: 'radar',
    data : datas,
    options:{      
        animation: {
            onComplete: () => {
              delayed = true;
            },
            delay: (context) => {      
              return 500;
            },
        },
        plugins : {
            legend : {
                display : false
            },
        },     
        responsive: false,     
        scales: {
            r: {     
                angleLines: {
                    display: false
                },
                suggestedMin: 0,
                suggestedMax: 100
            },
           
          },
        elements: {
            line: {
              borderWidth: 3,
              borderColor : "RGB(246, 102, 132)",
              backgroundColor : "RGBa(246, 102, 132,0.2)",
            },
            point : {
                // pointBackgroundColor : "red"
            }
          }
    }
};




