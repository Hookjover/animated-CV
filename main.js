let webContent = `> 你好，我是Jared，
> 之前是一名设计师，
> 最近参加了饥人谷的前端培训，
> 刚学习完饥人谷的JS课程，
> 给大家展示一下成果:
> 画一个太极图，
> 首先，用div画一个正方形

#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}

> 然后，把正方形变成圆：

#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}

> 所谓太极，即阴阳
> 由一阴一阳黑白“鱼形”组成，
> 先画出左白右黑：

#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}

> 接下来画出“阳鱼”：

#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}

> 接下来画出“阴鱼”：

#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}

> 万物化生，乾坤有道，以道阴阳，太极图就画好了！
> 谢谢观看！
`
let webCSS = `/*>你好，我是Jared，
>之前是一名设计师，
>最近参加了饥人谷的前端培训，
>刚学习完饥人谷的JS课程，
>给大家展示一下成果:
>画一个太极图，
>首先，用div画一个正方形*/

#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}

/*>然后，把正方形变成圆：*/

#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}

/*>所谓太极，即阴阳
>由一阴一阳黑白“鱼形”组成，
> 先画出左白右黑：*/

#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}

/*接下来画出“阳鱼”*/

#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}

/*>接下来画出“阴鱼”：*/

#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}

`
let typingSpeed = 100;
let i = 1;
let a = 1;
let wrap = document.querySelector('#all-wrap')
let csswrap = document.querySelector('style')
let pre = document.createElement('pre')
wrap.appendChild(pre);
var addContent = function () {
    setTimeout(function () {
        wrap.children[0].innerHTML = webContent.substring(0, i)
        window.scrollTo(0, 99999)
        if (i < webContent.length) {
            i++;
            addContent()
        }
        if (/^[a-za-z]$/.test(webContent[i]) || /^[0-9]$/.test(webContent[i])) {
            typingSpeed = 20
        } else { typingSpeed = 100 }
    }, typingSpeed)
}
addContent();

var addCSS = function () {
    setTimeout(function () {
        csswrap.innerHTML = webCSS.substring(0, a)
        if (a < webCSS.length) {
            a++;
            addCSS()
        }
        if (/^[a-za-z]$/.test(webCSS[a]) || /^[0-9]$/.test(webCSS[a])) {
            typingSpeed = 20
        } else { typingSpeed = 100 }
    }, typingSpeed)
}
addCSS();

