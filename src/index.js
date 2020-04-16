console.log('shape clicker js file is connected');

let i = 0;
const shapes = ['circle', 'square', 'triangle-down', 'octagon', 'heart', 'triangle']
const changeShape = () =>{
    if (i < shapes.length){
        $(event.currentTarget).removeClass();
        $(event.currentTarget).addClass(shapes[i]);
        i++;
    } else {
        i = 0;
    };
};

$(() =>{
    $('.triangle').on('click', changeShape);
})


//remember to set up your window onload!

