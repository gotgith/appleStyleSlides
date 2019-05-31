let $images = $(" .images-wrapper>.images")
let $btns = $(" .btns >ul")
$btns.on("click","li",function(e){
    $(e.currentTarget).parent().children().removeClass("active")
    let index = $(e.currentTarget).addClass("active").index()
    let p = index *(-920)
    $images.css({
        transform:`translateX(${p}px)`
    })
})