document.addEventListener('DOMContentLoaded', function() {


    document.addEventListener('DOMContentLoaded', function() {
        const aboxElements = document.querySelectorAll('.abox');
    
        aboxElements.forEach(function(abox) {
            abox.addEventListener('click', function() {
                // Get the class name being added
                const classNameToAdd = this.classList[1]; // Assuming the class is always the second class added
                
                // Add the class to the clicked element
                abox.classList.add(classNameToAdd);
    
                // Copy the added class name to the clipboard
                navigator.clipboard.writeText(classNameToAdd)
                    .then(() => {
                        console.log('Class name added and copied to clipboard:', classNameToAdd);
                    })
                    .catch((error) => {
                        console.error('Failed to copy class name to clipboard:', error);
                    });
            });
        });
    });
    


    const bounceButton = document.getElementById('bounceButton');
    const flashButton = document.getElementById('flashButton');
    const pulseButton = document.getElementById('pulseButton');
    const rubberBandButton = document.getElementById('rubberBandButton');
    const shakeXButton = document.getElementById('shakeXButton');
    const shakeYButton = document.getElementById('shakeYButton');
    const headShakeButton = document.getElementById('headShakeButton');
    const swingButton = document.getElementById('swingButton');
    const tadaButton = document.getElementById('tadaButton');
    const wobbleButton = document.getElementById('wobbleButton');
    const jelloButton = document.getElementById('jelloButton');
    const heartBeatButton = document.getElementById('heartBeatButton');
    const backInDownButton = document.getElementById('backInDownButton');
    const backInLeftButton = document.getElementById('backInLeftButton');
    const backInRightButton = document.getElementById('backInRightButton');
    const backInUpButton = document.getElementById('backInUpButton');
    const backOutDownButton = document.getElementById('backOutDownButton');
    const backOutLeftButton = document.getElementById('backOutLeftButton');
    const backOutRightButton = document.getElementById('backOutRightButton');
    const backOutUpButton = document.getElementById('backOutUpButton');
    const bounceInButton = document.getElementById('bounceInButton');
    const bounceInDownButton = document.getElementById('bounceInDownButton');
    const bounceInLeftButton = document.getElementById('bounceInLeftButton');
    const bounceInRightButton = document.getElementById('bounceInRightButton');
    const bounceInUpButton = document.getElementById('bounceInUpButton');
    const bounceOutButton = document.getElementById('bounceOutButton');
    const bounceOutDownButton = document.getElementById('bounceOutDownButton');
    const bounceOutLeftButton = document.getElementById('bounceOutLeftButton');
    const bounceOutRightButton = document.getElementById('bounceOutRightButton');
    const bounceOutUpButton = document.getElementById('bounceOutUpButton');
    const fadeInButton = document.getElementById('fadeInButton');
    const fadeInDownButton = document.getElementById('fadeInDownButton');
    const fadeInDownBigButton = document.getElementById('fadeInDownBigButton');
    const fadeInLeftButton = document.getElementById('fadeInLeftButton');
    const fadeInLeftBigButton = document.getElementById('fadeInLeftBigButton');
    const fadeInRightButton = document.getElementById('fadeInRightButton');
    const fadeInRightBigButton = document.getElementById('fadeInRightBigButton');
    const fadeInUpButton = document.getElementById('fadeInUpButton');
    const fadeInUpBigButton = document.getElementById('fadeInUpBigButton');
    const fadeInTopLeftButton = document.getElementById('fadeInTopLeftButton');
    const fadeInTopRightButton = document.getElementById('fadeInTopRightButton');
    const fadeInBottomLeftButton = document.getElementById('fadeInBottomLeftButton');
    const fadeInBottomRightButton = document.getElementById('fadeInBottomRightButton');
    const fadeOutButton = document.getElementById('fadeOutButton');
    const fadeOutDownButton = document.getElementById('fadeOutDownButton');
    const fadeOutDownBigButton = document.getElementById('fadeOutDownBigButton');
    const fadeOutLeftButton = document.getElementById('fadeOutLeftButton');
    const fadeOutLeftBigButton = document.getElementById('fadeOutLeftBigButton');
    const fadeOutRightButton = document.getElementById('fadeOutRightButton');
    const fadeOutRightBigButton = document.getElementById('fadeOutRightBigButton');
    const fadeOutUpButton = document.getElementById('fadeOutUpButton');
    const fadeOutUpBigButton = document.getElementById('fadeOutUpBigButton');
    const fadeOutTopLeftButton = document.getElementById('fadeOutTopLeftButton');
    const fadeOutTopRightButton = document.getElementById('fadeOutTopRightButton');
    const fadeOutBottomLeftButton = document.getElementById('fadeOutBottomLeftButton');
    const fadeOutBottomRightButton = document.getElementById('fadeOutBottomRightButton');
    const flipButton = document.getElementById('flipButton');
    const flipInXButton = document.getElementById('flipInXButton');
    const flipInYButton = document.getElementById('flipInYButton');
    const flipOutXButton = document.getElementById('flipOutXButton');
    const flipOutYButton = document.getElementById('flipOutYButton');
    const lightSpeedInRightButton = document.getElementById('lightSpeedInRightButton');
    const lightSpeedInLeftButton = document.getElementById('lightSpeedInLeftButton');
    const lightSpeedOutRightButton = document.getElementById('lightSpeedOutRightButton');
    const lightSpeedOutLeftButton = document.getElementById('lightSpeedOutLeftButton');
    const rotateInButton = document.getElementById('rotateInButton');
    const rotateInDownLeftButton = document.getElementById('rotateInDownLeftButton');
    const rotateInDownRightButton = document.getElementById('rotateInDownRightButton');
    const rotateInUpLeftButton = document.getElementById('rotateInUpLeftButton');
    const rotateInUpRightButton = document.getElementById('rotateInUpRightButton')
    const rotateBox = document.getElementById('rotateBox');
    const rotateOutButton = document.getElementById('rotateOutButton');
    const rotateOutDownLeftButton = document.getElementById('rotateOutDownLeftButton');
    const rotateOutDownRightButton = document.getElementById('rotateOutDownRightButton');
    const rotateOutUpLeftButton = document.getElementById('rotateOutUpLeftButton');
    const rotateOutUpRightButton = document.getElementById('rotateOutUpRightButton');
    const hingeButton = document.getElementById('hingeButton');
    const jackInTheBoxButton = document.getElementById('jackInTheBoxButton');
    const rollInButton = document.getElementById('rollInButton');
    const rollOutButton = document.getElementById('rollOutButton');
    const zoomInButton = document.getElementById('zoomInButton');
    const zoomInDownButton = document.getElementById('zoomInDownButton');
    const zoomInLeftButton = document.getElementById('zoomInLeftButton');
    const zoomInRightButton = document.getElementById('zoomInRightButton');
    const zoomInUpButton = document.getElementById('zoomInUpButton');
    const zoomOutButton = document.getElementById('zoomOutButton');
    const zoomOutDownButton = document.getElementById('zoomOutDownButton');
    const zoomOutLeftButton = document.getElementById('zoomOutLeftButton');
    const zoomOutRightButton = document.getElementById('zoomOutRightButton');
    const zoomOutUpButton = document.getElementById('zoomOutUpButton');
    const slideInDownButton = document.getElementById('slideInDownButton');
    const slideInLeftButton = document.getElementById('slideInLeftButton');
    const slideInRightButton = document.getElementById('slideInRightButton');
    const slideInUpButton = document.getElementById('slideInUpButton');
    const slideOutDownButton = document.getElementById('slideOutDownButton');
    const slideOutLeftButton = document.getElementById('slideOutLeftButton');
    const slideOutRightButton = document.getElementById('slideOutRightButton');
    const slideOutUpButton = document.getElementById('slideOutUpButton');
    const peekButton = document.getElementById('peekButton');
    
            
    const mainBox = document.getElementById('mainBox');

    bounceButton.addEventListener('click', function() {
        mainBox.classList.add('animate-bounce');
        navigator.clipboard.writeText('animate-bounce');
        setTimeout(function() {
            mainBox.classList.remove('animate-bounce');
        }, 1000);
    });

    flashButton.addEventListener('click', function() {
        mainBox.classList.add('animate-flash');
        navigator.clipboard.writeText('animate-flash');
        setTimeout(function() {
            mainBox.classList.remove('animate-flash');
        }, 1000);
    });

    pulseButton.addEventListener('click', function() {
        mainBox.classList.add('animate-pulse');
        navigator.clipboard.writeText('animate-pulse');
        setTimeout(function() {
            mainBox.classList.remove('animate-pulse');
        }, 1000);
    });

    rubberBandButton.addEventListener('click', function() {
        mainBox.classList.add('animate-rubberBand');
        navigator.clipboard.writeText('animate-rubberBand');
        setTimeout(function() {
            mainBox.classList.remove('animate-rubberBand');
        }, 1000);
    });

    shakeXButton.addEventListener('click', function() {
        mainBox.classList.add('animate-shakeX');
        navigator.clipboard.writeText('animate-shakeX');
        setTimeout(function() {
            mainBox.classList.remove('animate-shakeX');
        }, 1000);
    });

    shakeYButton.addEventListener('click', function() {
        mainBox.classList.add('animate-shakeY');
        navigator.clipboard.writeText('animate-shakeY');
        setTimeout(function() {
            mainBox.classList.remove('animate-shakeY');
        }, 1000);
    });

    headShakeButton.addEventListener('click', function() {
        mainBox.classList.add('animate-headShake');
        navigator.clipboard.writeText('animate-headShake');
        setTimeout(function() {
            mainBox.classList.remove('animate-headShake');
        }, 1000);
    });

    swingButton.addEventListener('click', function() {
        mainBox.classList.add('animate-swing');
        navigator.clipboard.writeText('animate-swing');
        setTimeout(function() {
            mainBox.classList.remove('animate-swing');
        }, 1000);
    });

    tadaButton.addEventListener('click', function() {
        mainBox.classList.add('animate-tada');
        navigator.clipboard.writeText('animate-tada');
        setTimeout(function() {
            mainBox.classList.remove('animate-tada');
        }, 1000);
    });

    wobbleButton.addEventListener('click', function() {
        mainBox.classList.add('animate-wobble');
        navigator.clipboard.writeText('animate-wobble');
        setTimeout(function() {
            mainBox.classList.remove('animate-wobble');
        }, 1000);
    });

    jelloButton.addEventListener('click', function() {
        mainBox.classList.add('animate-jello');
        navigator.clipboard.writeText('animate-jello');
        setTimeout(function() {
            mainBox.classList.remove('animate-jello');
        }, 1000);
    });

    heartBeatButton.addEventListener('click', function() {
        mainBox.classList.add('animate-heartBeat');
        navigator.clipboard.writeText('animate-heartBeat');
        setTimeout(function() {
            mainBox.classList.remove('animate-heartBeat');
        }, 1000);
    });

    backInDownButton.addEventListener('click', function() {
        mainBox.classList.add('animate-backInDown');
        navigator.clipboard.writeText('animate-backInDown');
        setTimeout(function() {
            mainBox.classList.remove('animate-backInDown');
        }, 1000);
    });

    backInLeftButton.addEventListener('click', function() {
        mainBox.classList.add('animate-backInLeft');
        navigator.clipboard.writeText('animate-backInLeft');
        setTimeout(function() {
            mainBox.classList.remove('animate-backInLeft');
        }, 1000);
    });

    backInRightButton.addEventListener('click', function() {
        mainBox.classList.add('animate-backInRight');
        navigator.clipboard.writeText('animate-backInRight');
        setTimeout(function() {
            mainBox.classList.remove('animate-backInRight');
        }, 1000);
    });

    backInUpButton.addEventListener('click', function() {
        mainBox.classList.add('animate-backInUp');
        navigator.clipboard.writeText('animate-backInUp');
        setTimeout(function() {
            mainBox.classList.remove('animate-backInUp');
        }, 1000);
    });

    backOutDownButton.addEventListener('click', function() {
        mainBox.classList.add('animate-backOutDown');
        navigator.clipboard.writeText('animate-backOutDown');
        setTimeout(function() {
            mainBox.classList.remove('animate-backOutDown');
        }, 1000);
    });
// ----------------------------------------------------------
    backOutLeftButton.addEventListener('click', function() {
        mainBox.classList.add('animate-backOutLeft');
        navigator.clipboard.writeText('animate-shakeX');
        navigator.clipboard.writeText('animate-shakeX');
        setTimeout(function() {
            mainBox.classList.remove('animate-backOutLeft');
        }, 1000);
    });

    backOutRightButton.addEventListener('click', function() {
        mainBox.classList.add('animate-backOutRight');
        navigator.clipboard.writeText('animate-backOutRight');
        setTimeout(function() {
            mainBox.classList.remove('animate-backOutRight');
        }, 1000);
    });

    backOutUpButton.addEventListener('click', function() {
        mainBox.classList.add('animate-backOutUp');
        navigator.clipboard.writeText('animate-backOutUp');
        setTimeout(function() {
            mainBox.classList.remove('animate-backOutUp');
        }, 1000);
    });
    bounceInButton.addEventListener('click', function() {
        mainBox.classList.add('animate-bounceIn');
        navigator.clipboard.writeText('animate-bounceIn');
        setTimeout(function() {
            mainBox.classList.remove('animate-bounceIn');
        }, 1000);
    });

    bounceInDownButton.addEventListener('click', function() {
        mainBox.classList.add('animate-bounceInDown');
        navigator.clipboard.writeText('animate-bounceInDown');
        setTimeout(function() {
            mainBox.classList.remove('animate-bounceInDown');
        }, 1000);
    });

    bounceInLeftButton.addEventListener('click', function() {
        mainBox.classList.add('animate-bounceInLeft');
        navigator.clipboard.writeText('animate-bounceInLeft');
        setTimeout(function() {
            mainBox.classList.remove('animate-bounceInLeft');
        }, 1000);
    });

    bounceInRightButton.addEventListener('click', function() {
        mainBox.classList.add('animate-bounceInRight');
        navigator.clipboard.writeText('animate-bounceInRight');
        setTimeout(function() {
            mainBox.classList.remove('animate-bounceInRight');
        }, 1000);
    });

    bounceInUpButton.addEventListener('click', function() {
        mainBox.classList.add('animate-bounceInUp');
        navigator.clipboard.writeText('animate-bounceInUp');
        setTimeout(function() {
            mainBox.classList.remove('animate-bounceInUp');
        }, 1000);
    });

    bounceOutButton.addEventListener('click', function() {
        mainBox.classList.add('animate-bounceOut');
        navigator.clipboard.writeText('animate-bounceOut');
        setTimeout(function() {
            mainBox.classList.remove('animate-bounceOut');
        }, 1000);
    });

    bounceOutDownButton.addEventListener('click', function() {
        mainBox.classList.add('animate-bounceOutDown');
        navigator.clipboard.writeText('animate-bounceOutDown');
        setTimeout(function() {
            mainBox.classList.remove('animate-bounceOutDown');
        }, 1000);
    });

    bounceOutLeftButton.addEventListener('click', function() {
        mainBox.classList.add('animate-bounceOutLeft');
        navigator.clipboard.writeText('animate-bounceOutLeft');
        setTimeout(function() {
            mainBox.classList.remove('animate-bounceOutLeft');
        }, 1000);
    });

    bounceOutRightButton.addEventListener('click', function() {
        mainBox.classList.add('animate-bounceOutRight');
        navigator.clipboard.writeText('animate-bounceOutRight');
        setTimeout(function() {
            mainBox.classList.remove('animate-bounceOutRight');
        }, 1000);
    });

    bounceOutUpButton.addEventListener('click', function() {
        mainBox.classList.add('animate-bounceOutUp');
        navigator.clipboard.writeText('animate-bounceOutUp');
        setTimeout(function() {
            mainBox.classList.remove('animate-bounceOutUp');
        }, 1000);
    });

    fadeInButton.addEventListener('click', function() {
        mainBox.classList.add('animate-fadeIn');
        navigator.clipboard.writeText('animate-fadeIn');
        setTimeout(function() {
            mainBox.classList.remove('animate-fadeIn');
        }, 1000);
    });

    fadeInDownButton.addEventListener('click', function() {
        mainBox.classList.add('animate-fadeInDown');
        navigator.clipboard.writeText('animate-fadeInDown');
        setTimeout(function() {
            mainBox.classList.remove('animate-fadeInDown');
        }, 1000);
    });

    fadeInDownBigButton.addEventListener('click', function() {
        mainBox.classList.add('animate-fadeInDownBig');
        navigator.clipboard.writeText('animate-fadeInDownBig');
        setTimeout(function() {
            mainBox.classList.remove('animate-fadeInDownBig');
        }, 1000);
    });

    fadeInLeftButton.addEventListener('click', function() {
        mainBox.classList.add('animate-fadeInLeft');
        navigator.clipboard.writeText('animate-fadeInLeft');
        setTimeout(function() {
            mainBox.classList.remove('animate-fadeInLeft');
        }, 1000);
    });

    fadeInLeftBigButton.addEventListener('click', function() {
        mainBox.classList.add('animate-fadeInLeftBig');
        navigator.clipboard.writeText('animate-fadeInLeftBig');
        setTimeout(function() {
            mainBox.classList.remove('animate-fadeInLeftBig');
        }, 1000);
    });

    fadeInRightButton.addEventListener('click', function() {
        mainBox.classList.add('animate-fadeInRight');
        navigator.clipboard.writeText('animate-fadeInRight');
        setTimeout(function() {
            mainBox.classList.remove('animate-fadeInRight');
        }, 1000);
    });

    fadeInRightBigButton.addEventListener('click', function() {
        mainBox.classList.add('animate-fadeInRightBig');
        navigator.clipboard.writeText('animate-fadeInRightBig');
        setTimeout(function() {
            mainBox.classList.remove('animate-fadeInRightBig');
        }, 1000);
    });

    fadeInUpButton.addEventListener('click', function() {
        mainBox.classList.add('animate-fadeInUp');
        navigator.clipboard.writeText('animate-fadeInUp');
        setTimeout(function() {
            mainBox.classList.remove('animate-fadeInUp');
        }, 1000);
    });

    fadeInUpBigButton.addEventListener('click', function() {
        mainBox.classList.add('animate-fadeInUpBig');
        navigator.clipboard.writeText('animate-fadeInUpBig');
        setTimeout(function() {
            mainBox.classList.remove('animate-fadeInUpBig');
        }, 1000);
    });

    fadeInTopLeftButton.addEventListener('click', function() {
        mainBox.classList.add('animate-fadeInTopLeft');
        navigator.clipboard.writeText('animate-fadeInTopLeft');
        setTimeout(function() {
            mainBox.classList.remove('animate-fadeInTopLeft');
        }, 1000);
    });

    fadeInTopRightButton.addEventListener('click', function() {
        mainBox.classList.add('animate-fadeInTopRight');
        navigator.clipboard.writeText('animate-fadeInTopRight');
        setTimeout(function() {
            mainBox.classList.remove('animate-fadeInTopRight');
        }, 1000);
    });

    fadeInBottomLeftButton.addEventListener('click', function() {
        mainBox.classList.add('animate-fadeInBottomLeft');
        navigator.clipboard.writeText('animate-fadeInBottomLeft');
        setTimeout(function() {
            mainBox.classList.remove('animate-fadeInBottomLeft');
        }, 1000);
    });

    fadeInBottomRightButton.addEventListener('click', function() {
        mainBox.classList.add('animate-fadeInBottomRight');
        navigator.clipboard.writeText('animate-fadeInBottomRight');
        setTimeout(function() {
            mainBox.classList.remove('animate-fadeInBottomRight');
        }, 1000);
    });

    fadeOutButton.addEventListener('click', function() {
        mainBox.classList.add('animate-fadeOut');
        navigator.clipboard.writeText('animate-fadeOut');
        setTimeout(function() {
            mainBox.classList.remove('animate-fadeOut');
        }, 1000);
    });

    fadeOutDownButton.addEventListener('click', function() {
        mainBox.classList.add('animate-fadeOutDown');
        navigator.clipboard.writeText('animate-fadeOutDown');
        setTimeout(function() {
            mainBox.classList.remove('animate-fadeOutDown');
        }, 1000);
    });

    fadeOutDownBigButton.addEventListener('click', function() {
        mainBox.classList.add('animate-fadeOutDownBig');
        navigator.clipboard.writeText('animate-fadeOutDownBig');
        setTimeout(function() {
            mainBox.classList.remove('animate-fadeOutDownBig');
        }, 1000);
    });

    fadeOutLeftButton.addEventListener('click', function() {
        mainBox.classList.add('animate-fadeOutLeft');
        navigator.clipboard.writeText('animate-shakeX');
        setTimeout(function() {
            mainBox.classList.remove('animate-fadeOutLeft');
        }, 1000);
    });

    fadeOutLeftBigButton.addEventListener('click', function() {
        mainBox.classList.add('animate-fadeOutLeftBig');
        navigator.clipboard.writeText('animate-fadeOutLeftBig');
        setTimeout(function() {
            mainBox.classList.remove('animate-fadeOutLeftBig');
        }, 1000);
    });

    fadeOutRightButton.addEventListener('click', function() {
        mainBox.classList.add('animate-fadeOutRight');
        navigator.clipboard.writeText('animate-fadeOutRight');
        setTimeout(function() {
            mainBox.classList.remove('animate-fadeOutRight');
        }, 1000);
    });

    fadeOutRightBigButton.addEventListener('click', function() {
        mainBox.classList.add('animate-fadeOutRightBig');
        navigator.clipboard.writeText('animate-fadeOutRightBig');
        setTimeout(function() {
            mainBox.classList.remove('animate-fadeOutRightBig');
        }, 1000);
    });

    fadeOutUpButton.addEventListener('click', function() {
        mainBox.classList.add('animate-fadeOutUp');
        navigator.clipboard.writeText('animate-fadeOutUp');
        setTimeout(function() {
            mainBox.classList.remove('animate-fadeOutUp');
        }, 1000);
    });

    fadeOutUpBigButton.addEventListener('click', function() {
        mainBox.classList.add('animate-fadeOutUpBig');
        navigator.clipboard.writeText('animate-fadeOutUpBig');
        setTimeout(function() {
            mainBox.classList.remove('animate-fadeOutUpBig');
        }, 1000);
    });

    fadeOutTopLeftButton.addEventListener('click', function() {
        mainBox.classList.add('animate-fadeOutTopLeft');
        navigator.clipboard.writeText('animate-fadeOutTopLeft');
        setTimeout(function() {
            mainBox.classList.remove('animate-fadeOutTopLeft');
        }, 1000);
    });

    fadeOutTopRightButton.addEventListener('click', function() {
        mainBox.classList.add('animate-fadeOutTopRight');
        navigator.clipboard.writeText('animate-fadeOutTopRight');
        setTimeout(function() {
            mainBox.classList.remove('animate-fadeOutTopRight');
        }, 1000);
    });

    fadeOutBottomLeftButton.addEventListener('click', function() {
        mainBox.classList.add('animate-fadeOutBottomLeft');
        navigator.clipboard.writeText('animate-fadeOutBottomLeft');
        setTimeout(function() {
            mainBox.classList.remove('animate-fadeOutBottomLeft');
        }, 1000);
    });

    fadeOutBottomRightButton.addEventListener('click', function() {
        mainBox.classList.add('animate-fadeOutBottomRight');
        navigator.clipboard.writeText('animate-fadeOutBottomRight');
        setTimeout(function() {
            mainBox.classList.remove('animate-fadeOutBottomRight');
        }, 1000);
    });

    flipButton.addEventListener('click', function() {
        mainBox.classList.add('animate-flip');
        navigator.clipboard.writeText('animate-flip');
        setTimeout(function() {
            mainBox.classList.remove('animate-flip');
        }, 1000);
    });

    flipInXButton.addEventListener('click', function() {
        mainBox.classList.add('animate-flipInX');
        navigator.clipboard.writeText('animate-flipInX');
        setTimeout(function() {
            mainBox.classList.remove('animate-flipInX');
        }, 1000);
    });

    flipInYButton.addEventListener('click', function() {
        mainBox.classList.add('animate-flipInY');
        navigator.clipboard.writeText('animate-flipInY');
        setTimeout(function() {
            mainBox.classList.remove('animate-flipInY');
        }, 1000);
    });

    flipOutXButton.addEventListener('click', function() {
        mainBox.classList.add('animate-flipOutX');
        navigator.clipboard.writeText('animate-flipOutX');
        setTimeout(function() {
            mainBox.classList.remove('animate-flipOutX');
        }, 1000);
    });

    flipOutYButton.addEventListener('click', function() {
        mainBox.classList.add('animate-flipOutY');
        navigator.clipboard.writeText('animate-flipOutY');
        setTimeout(function() {
            mainBox.classList.remove('animate-flipOutY');
        }, 1000);
    });

    lightSpeedInRightButton.addEventListener('click', function() {
        mainBox.classList.add('animate-lightSpeedInRight');
        navigator.clipboard.writeText('animate-lightSpeedInRight');
        setTimeout(function() {
            mainBox.classList.remove('animate-lightSpeedInRight');
        }, 1000);
    });

    lightSpeedInLeftButton.addEventListener('click', function() {
        mainBox.classList.add('animate-cc');
        navigator.clipboard.writeText('animate-lightSpeedOutRight');
        setTimeout(function() {
            mainBox.classList.remove('animate-lightSpeedInLeft');
        }, 1000);
    });

    lightSpeedOutRightButton.addEventListener('click', function() {
        mainBox.classList.add('animate-lightSpeedOutRight');
        navigator.clipboard.writeText('animate-lightSpeedOutRight');
        setTimeout(function() {
            mainBox.classList.remove('animate-lightSpeedOutRight');
        }, 1000);
    });

    lightSpeedOutLeftButton.addEventListener('click', function() {
        mainBox.classList.add('animate-lightSpeedOutLeft');
        navigator.clipboard.writeText('animate-lightSpeedOutLeft');
        setTimeout(function() {
            mainBox.classList.remove('animate-lightSpeedOutLeft');
        }, 1000);
    });

    rotateInButton.addEventListener('click', function() {
        mainBox.classList.add('animate-rotateIn');
        navigator.clipboard.writeText('animate-rotateIn');
        setTimeout(function() {
            mainBox.classList.remove('animate-rotateIn');
        }, 1000);
    });

    rotateInDownLeftButton.addEventListener('click', function() {
        mainBox.classList.add('animate-rotateInDownLeft');
        navigator.clipboard.writeText('animate-rotateInDownLeft');
        setTimeout(function() {
            mainBox.classList.remove('animate-rotateInDownLeft');
        }, 1000);
    });

    rotateInDownRightButton.addEventListener('click', function() {
        mainBox.classList.add('animate-rotateInDownRight');
        navigator.clipboard.writeText('animate-rotateInDownRight');
        setTimeout(function() {
            mainBox.classList.remove('animate-rotateInDownRight');
        }, 1000);
    });

    rotateInUpLeftButton.addEventListener('click', function() {
        mainBox.classList.add('animate-rotateInUpLeft');
        navigator.clipboard.writeText('animate-rotateInUpLeft');
        setTimeout(function() {
            mainBox.classList.remove('animate-rotateInUpLeft');
        }, 1000);
    });

    rotateInUpRightButton.addEventListener('click', function() {
        mainBox.classList.add('animate-rotateInUpRight');
        navigator.clipboard.writeText('animate-rotateInUpRight');
        setTimeout(function() {
            mainBox.classList.remove('animate-rotateInUpRight');
        }, 1000);
    });

    rotateOutButton.addEventListener('click', function() {
        mainBox.classList.add('animate-rotateOut');
        navigator.clipboard.writeText('animate-rotateOut');
        setTimeout(function() {
            mainBox.classList.remove('animate-rotateOut');
        }, 1000);
    });

    rotateOutDownLeftButton.addEventListener('click', function() {
        mainBox.classList.add('animate-rotateOutDownLeft');
        navigator.clipboard.writeText('animate-rotateOutDownLeft');
        setTimeout(function() {
            mainBox.classList.remove('animate-rotateOutDownLeft');
        }, 1000);
    });

    rotateOutDownRightButton.addEventListener('click', function() {
        mainBox.classList.add('animate-rotateOutDownRight');
        navigator.clipboard.writeText('animate-rotateOutDownRight');
        setTimeout(function() {
            mainBox.classList.remove('animate-rotateOutDownRight');
        }, 1000);
    });

    rotateOutUpLeftButton.addEventListener('click', function() {
        mainBox.classList.add('animate-rotateOutUpLeft');
        navigator.clipboard.writeText('animate-rotateOutUpLeft');
        setTimeout(function() {
            mainBox.classList.remove('animate-rotateOutUpLeft');
        }, 1000);
    });

    rotateOutUpRightButton.addEventListener('click', function() {
        mainBox.classList.add('animate-rotateOutUpRight');
        navigator.clipboard.writeText('animate-rotateOutUpRight');
        setTimeout(function() {
            mainBox.classList.remove('animate-rotateOutUpRight');
        }, 1000);
    });

    hingeButton.addEventListener('click', function() {
        mainBox.classList.add('animate-hinge');
        navigator.clipboard.writeText('animate-hinge');
        setTimeout(function() {
            mainBox.classList.remove('animate-hinge');
        }, 2000);
    });

    jackInTheBoxButton.addEventListener('click', function() {
        mainBox.classList.add('animate-jackInTheBox');
        navigator.clipboard.writeText('animate-jackInTheBox');
        setTimeout(function() {
            mainBox.classList.remove('animate-jackInTheBox');
        }, 1000);
    });

    rollInButton.addEventListener('click', function() {
        mainBox.classList.add('animate-rollIn');
        navigator.clipboard.writeText('animate-rollIn');
        setTimeout(function() {
            mainBox.classList.remove('animate-rollIn');
        }, 1000);
    });

    rollOutButton.addEventListener('click', function() {
        mainBox.classList.add('animate-rollOut');
        navigator.clipboard.writeText('animate-rollOut');
        setTimeout(function() {
            mainBox.classList.remove('animate-rollOut');
        }, 1000);
    });

    zoomInButton.addEventListener('click', function() {
        mainBox.classList.add('animate-zoomIn');
        navigator.clipboard.writeText('animate-zoomIn');
        setTimeout(function() {
            mainBox.classList.remove('animate-zoomIn');
        }, 1000);
    });

    zoomInDownButton.addEventListener('click', function() {
        mainBox.classList.add('animate-zoomInDown');
        navigator.clipboard.writeText('animate-zoomInDown');
        setTimeout(function() {
            mainBox.classList.remove('animate-zoomInDown');
        }, 1000);
    });

    zoomInLeftButton.addEventListener('click', function() {
        mainBox.classList.add('animate-zoomInLeft');
        navigator.clipboard.writeText('animate-zoomInLeft');
        setTimeout(function() {
            mainBox.classList.remove('animate-zoomInLeft');
        }, 1000);
    });

    zoomInRightButton.addEventListener('click', function() {
        mainBox.classList.add('animate-zoomInRight');
        navigator.clipboard.writeText('animate-zoomInRight');
        setTimeout(function() {
            mainBox.classList.remove('animate-zoomInRight');
        }, 1000);
    });

    zoomInUpButton.addEventListener('click', function() {
        mainBox.classList.add('animate-zoomInUp');
        navigator.clipboard.writeText('animate-zoomInUp');
        setTimeout(function() {
            mainBox.classList.remove('animate-zoomInUp');
        }, 1000);
    });

    zoomOutButton.addEventListener('click', function() {
        mainBox.classList.add('animate-zoomOut');
        navigator.clipboard.writeText('animate-zoomOut');
        setTimeout(function() {
            mainBox.classList.remove('animate-zoomOut');
        }, 1000);
    });

    zoomOutDownButton.addEventListener('click', function() {
        mainBox.classList.add('animate-zoomOutDown');
        navigator.clipboard.writeText('animate-zoomOutDown');
        setTimeout(function() {
            mainBox.classList.remove('animate-zoomOutDown');
        }, 1000);
    });

    zoomOutLeftButton.addEventListener('click', function() {
        mainBox.classList.add('animate-zoomOutLeft');
        navigator.clipboard.writeText('animate-zoomOutLeft');
        setTimeout(function() {
            mainBox.classList.remove('animate-zoomOutLeft');
        }, 1000);
    });

    zoomOutRightButton.addEventListener('click', function() {
        mainBox.classList.add('animate-zoomOutRight');
        navigator.clipboard.writeText('animate-zoomOutRight');
        setTimeout(function() {
            mainBox.classList.remove('animate-zoomOutRight');
        }, 1000);
    });

    zoomOutUpButton.addEventListener('click', function() {
        mainBox.classList.add('animate-zoomOutUp');
        navigator.clipboard.writeText('animate-zoomOutUp');
        setTimeout(function() {
            mainBox.classList.remove('animate-zoomOutUp');
        }, 1000);
    });

    slideInDownButton.addEventListener('click', function() {
        mainBox.classList.add('animate-slideInDown');
        navigator.clipboard.writeText('animate-slideInDown');
        setTimeout(function() {
            mainBox.classList.remove('animate-slideInDown');
        }, 1000);
    });

    slideInLeftButton.addEventListener('click', function() {
        mainBox.classList.add('animate-slideInLeft');
        navigator.clipboard.writeText('animate-slideInLeft');
        setTimeout(function() {
            mainBox.classList.remove('animate-slideInLeft');
        }, 1000);
    });

    slideInRightButton.addEventListener('click', function() {
        mainBox.classList.add('animate-slideInRight');
        navigator.clipboard.writeText('animate-slideInRight');
        setTimeout(function() {
            mainBox.classList.remove('animate-slideInRight');
        }, 1000);
    });

    slideInUpButton.addEventListener('click', function() {
        mainBox.classList.add('animate-slideInUp');
        navigator.clipboard.writeText('animate-slideInUp');
        setTimeout(function() {
            mainBox.classList.remove('animate-slideInUp');
        }, 1000);
    });

    slideOutDownButton.addEventListener('click', function() {
        mainBox.classList.add('animate-slideOutDown');
        navigator.clipboard.writeText('animate-slideOutDown');
        setTimeout(function() {
            mainBox.classList.remove('animate-slideOutDown');
        }, 1000);
    });

    slideOutLeftButton.addEventListener('click', function() {
        mainBox.classList.add('animate-slideOutLeft');
        navigator.clipboard.writeText('animate-slideOutLeft');
        setTimeout(function() {
            mainBox.classList.remove('animate-slideOutLeft');
        }, 1000);
    });

    slideOutRightButton.addEventListener('click', function() {
        mainBox.classList.add('animate-slideOutRight');
        navigator.clipboard.writeText('animate-slideOutRight');
        setTimeout(function() {
            mainBox.classList.remove('animate-slideOutRight');
        }, 1000);
    });

    slideOutUpButton.addEventListener('click', function() {
        mainBox.classList.add('animate-slideOutUp');
        navigator.clipboard.writeText('animate-slideOutUp');
        setTimeout(function() {
            mainBox.classList.remove('animate-slideOutUp');
        }, 1000);
    });

    peekButton.addEventListener('click', function() {
        mainBox.classList.add('animate-peek');
        navigator.clipboard.writeText('animate-peek');
        setTimeout(function() {
            mainBox.classList.remove('animate-peek');
        }, 1000);
    });

});