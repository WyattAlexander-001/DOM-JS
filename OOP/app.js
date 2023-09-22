//Converts rgb colors to hexadecimal colors
function hex(r,g,b){
    return '#' + ((1<<24) + (r<<16) + (g<<8) +b).toString(16).slice(1);
}
function rgb(r,g,b){
    return `rgb(${r},${g},${b})`;
}

//This is ugly pattern
function makeColor(r,g,b){
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;

    color.rgb = function(){
        const {r,g,b} = this;
        return `rgb(${r},${g},${b})`;
    };
    color.hex = function(){
        const {r,g,b} = this;
        return '#' + ((1<<24) + (r<<16) + (g<<8) +b).toString(16).slice(1);
    }
    return color;
}
    






//Testing
//hex(200,666,25); //'#ca9a19'
console.log(hex(0,22,3)); //#001603
hex(0,22,3); //Won't print to console since it's only returned

const testColor = makeColor(35,255,150);