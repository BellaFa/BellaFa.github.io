addEventListener("keydown", function(e){
    if(e.code == 'ArrowRight'){
        vxr = 5;
        right = true;
        left = false;
    }
    if(e.code == 'ArrowLeft'){
        vxl = -5;
       right = false;
       left = true;
    }
})

addEventListener("keyup", function(e){
    if(e.code == 'ArrowRight') vxr = 0;
    if(e.code == 'ArrowLeft') vxl = 0;
})

