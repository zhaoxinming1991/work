window.onload = function () {
    //button
    var btnChgWidth = document.getElementById('chg-width');
    var btnChgHeight = document.getElementById('chg-height');
    var btnChgColor = document.getElementById('chg-color');
    var btnChgVisible = document.getElementById('chg-visible');
    var btnChgReset = document.getElementById('chg-reset');
    //div
    var block = document.getElementById('block');

    iteratee(btnChgWidth, function () {
        block.style.width = '300px';
    });

    iteratee(btnChgHeight, function () {
        block.style.height = '100px';
    });

    iteratee(btnChgColor, function () {
       block.style.backgroundColor = '#834567';
    });

    iteratee(btnChgVisible, function () {
        block.style.display = 'none';
    });

    iteratee(btnChgReset, function () {
        block.style.width = '200px';
        block.style.height = '50px';
        block.style.backgroundColor = '#000';
        block.style.display = 'block';
    })
};

function iteratee(target, func){
    if (target) {
        target.addEventListener('click', func, false);
    } else {
        return false;
    }
}