
export function certificate(idName) {
    let canvas = document.getElementById(idName);
    let ctx = canvas.getContext('2d');
    let can_wid = 1500 - 10;
    let can_hei = 1500 - 10;


    //logo
    let img = document.getElementById('imgs');
    img.onload = function () {
        ctx.drawImage(img, 150, 10, 40, 40);
    };
    img.src="";
    
    //邊
    ctx.strokeStyle = '#FFF8BA';
    ctx.lineWidth = "5";
    ctx.beginPath();
    roundRect(ctx, 20, 20, 310, 460, 0);
    ctx.stroke();
};

const roundRect = (ctx, x, y, width, height, radius) => {
    ctx.arc(x + radius, y + radius, radius, Math.PI, Math.PI * 3 / 2);
    ctx.lineTo(width - radius + x, y);

    ctx.arc(width - radius + x, radius + y, radius, Math.PI * 3 / 2, Math.PI * 2);
    ctx.lineTo(width + x, height + y - radius);

    ctx.arc(width - radius + x, height - radius + y, radius, 0, Math.PI * 1 / 2);
    ctx.lineTo(radius + x, height + y);

    ctx.arc(radius + x, height - radius + y, radius, Math.PI * 1 / 2, Math.PI);
    ctx.lineTo(x, y + radius);
};