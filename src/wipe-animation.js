$(function () { // wait for document ready
    // init
    
    var controller = new ScrollMagic.Controller();

    // define movement of panels
    var wipeAnimation = new TimelineMax()
        // animate to second panel
        .to("#slideContainer", 0.5, {z: -150})		// move back in 3D space
        .to("#slideContainer", 1,   {x: "-25%"})	// move in to first panel
        .to("#slideContainer", 0.5, {z: 0})				// move back to origin in 3D space
        // animate to third panel
        .to("#slideContainer", 0.5, {z: -150, delay: 1})
        .to("#slideContainer", 1,   {x: "-50%"})
        .to("#slideContainer", 0.5, {z: 0})
        // animate to forth panel
        .to("#slideContainer", 0.5, {z: -150, delay: 1})
        .to("#slideContainer", 1,   {x: "-75%"})
        .to("#slideContainer", 0.5, {z: 0})
        // animate to fifth
        .to("#slideContainer", 0.5, {z: -150, delay: 1})
        .to("#slideContainer", 1,   {x: "-75%"})
        .to("#slideContainer", 0.5, {z: 0});

    // create scene to pin and link animation
    var wipeScene = new ScrollMagic.Scene({
            triggerElement: "#pinContainer",
            triggerHook: "onLeave",
            duration: "700%"
        })
        .setPin("#pinContainer")
        .setTween(wipeAnimation)
        .addTo(controller);                

        $(window).on("resize", function () {
            var windowWidth = $(window).innerWidth();
            toggleScenes(windowWidth);
        });

        function toggleScenes(windowWidth){
            if(windowWidth < 600 ){
            /* wipeScene.removePin(); */
            wipeScene.removeTween(wipeAnimation)
            wipeScene.removePin("#pinContainer")
            } else if (windowWidth >= 601 ){
            wipeScene.setTween(wipeAnimation)
            wipeScene.setPin("#pinContainer")
            wipeScene.addTo(controller)
            }
        }

});