// objective : get base, height of triangle. calculate the area by using the provided formula. display the output
// step 1 : get base value
// step 2 : added an id in the base input field
// step 3 : use getElementByID to access the input field
// step 4 : get the value from input field and use parseFloat the value


// rectangle calculation --->
function calculateRectangleArea(){
    // rectangle base
    const rectangleWidth = document.getElementById('rectangle-width')
    const width = parseFloat(rectangleWidth.value)

    // rectangle height
    const rectangleLength = document.getElementById('rectangle-length')
    const length = parseFloat(rectangleLength.value)

    // area calculation 
    const area = width * length;
    const rectangleArea = document.getElementById('rectangle-area')
    rectangleArea.innerText = area
}

// triangle calculation --->
function calculateTriangleArea(){
    // triangle base 
    const triangleBase = document.getElementById('triangle-base')
    const base = parseFloat(triangleBase.value)

    // triangle height
    const triangleHeight = document.getElementById('triangle-height')
    const height = parseFloat(triangleHeight.value)

    // area calculation
    const area = 0.5 * base * height;
    const triangleArea = document.getElementById('triangle-area')
    triangleArea.innerText = area;
}