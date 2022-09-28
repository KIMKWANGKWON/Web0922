var body = {
    setColor : function(color) {
        $('body').css('color',color);
    },
    backgroundColor: function(color) {
        $('body').css('backgroundColor', color);
    }
}
var links = {
    setColor: function linksSetColor(color) {
        var alist = document.querySelectorAll('a');
        var i = 0;
        while (i < alist.length) {
            alist[i].style.color = color;
            console.log(alist[i]);
            i = i + 1;
        }
    }
}
function nightDayHandler(self) {
    if (self.value === 'night') {
        body.backgroundColor('black');
        body.setColor('white');
        self.value = 'day'
        links.setColor('powderblue');
    } else {
        body.backgroundColor('white');
        body.setColor('black');
        self.value = 'night'
        links.setColor('blue');

    }
}