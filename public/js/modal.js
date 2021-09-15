const modal = $("#modal");

const viewMoreImages = (image_url,sm)=>{
    if(image_url){
        modal.css("display", "flex");
        $("#modalImage").attr("src", image_url);
        if(sm){   
            $("#modalImage").css("width","360px");
            $("#modalImage").css("height","640px");
        }else{
            $("#modalImage").css("width","800px");
            $("#modalImage").css("height","600px");
        }
    }
    
}
const close = ()=>{
    modal.css("display", "none");  
}
$("#modal_close").on("click",()=>{
    modal.css("display", "none"); 
    $("#modalImage").attr("src", "");
})