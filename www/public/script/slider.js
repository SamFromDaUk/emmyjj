$(document).ready(function ($) {
    var transitions = [
            { $Duration: 1200, x: 0.3, $During: { $Left: [0.3, 0.7] }, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2 },
            { $Duration: 1200, x: -0.3, $SlideOut: true, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2 },
            { $Duration: 1200, x: -0.3, $During: { $Left: [0.3, 0.7] }, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2 },
            { $Duration: 1200, x: 0.3, $SlideOut: true, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2 },
            { $Duration: 1200, y: 0.3, $During: { $Top: [0.3, 0.7] }, $Easing: { $Top: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2, $Outside: true },
            { $Duration: 1200, y: -0.3, $SlideOut: true, $Easing: { $Top: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2, $Outside: true },
            { $Duration: 1200, y: -0.3, $During: { $Top: [0.3, 0.7] }, $Easing: { $Top: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2 },
            { $Duration: 1200, y: 0.3, $SlideOut: true, $Easing: { $Top: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2 },
            { $Duration: 1200, x: 0.3, $Cols: 2, $During: { $Left: [0.3, 0.7] }, $ChessMode: { $Column: 3 }, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2, $Outside: true },
            { $Duration: 1200, x: 0.3, $Cols: 2, $SlideOut: true, $ChessMode: { $Column: 3 }, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2, $Outside: true },
            { $Duration: 1200, y: 0.3, $Rows: 2, $During: { $Top: [0.3, 0.7] }, $ChessMode: { $Row: 12 }, $Easing: { $Top: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2 },
            { $Duration: 1200, y: 0.3, $Rows: 2, $SlideOut: true, $ChessMode: { $Row: 12 }, $Easing: { $Top: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2 },
            { $Duration: 1200, y: 0.3, $Cols: 2, $During: { $Top: [0.3, 0.7] }, $ChessMode: { $Column: 12 }, $Easing: { $Top: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2, $Outside: true },
            { $Duration: 1200, y: -0.3, $Cols: 2, $SlideOut: true, $ChessMode: { $Column: 12 }, $Easing: { $Top: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2 },
            { $Duration: 1200, x: 0.3, $Rows: 2, $During: { $Left: [0.3, 0.7] }, $ChessMode: { $Row: 3 }, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2, $Outside: true },
            { $Duration: 1200, x: -0.3, $Rows: 2, $SlideOut: true, $ChessMode: { $Row: 3 }, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2 },
            { $Duration: 1200, x: 0.3, y: 0.3, $Cols: 2, $Rows: 2, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $ChessMode: { $Column: 3, $Row: 12 }, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Top: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2, $Outside: true },
            { $Duration: 1200, x: 0.3, y: 0.3, $Cols: 2, $Rows: 2, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $SlideOut: true, $ChessMode: { $Column: 3, $Row: 12 }, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Top: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2, $Outside: true },
            { $Duration: 1200, $Delay: 20, $Clip: 3, $Assembly: 260, $Easing: { $Clip: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2 },
            { $Duration: 1200, $Delay: 20, $Clip: 3, $SlideOut: true, $Assembly: 260, $Easing: { $Clip: $JssorEasing$.$EaseOutCubic, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2 },
            { $Duration: 1200, $Delay: 20, $Clip: 12, $Assembly: 260, $Easing: { $Clip: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2 },
            { $Duration: 1200, $Delay: 20, $Clip: 12, $SlideOut: true, $Assembly: 260, $Easing: { $Clip: $JssorEasing$.$EaseOutCubic, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2 }
        ],
        slider = new $JssorSlider$("jssor-slider", {
            $AutoPlay: false,
            $AutoPlayInterval: 1500,
            $PauseOnHover: 1,

            $DragOrientation: 3,
            $ArrowKeyNavigation: true,
            $SlideDuration: 800,

            $SlideshowOptions: {
                $Class: $JssorSlideshowRunner$,
                $Transitions: transitions,
                $TransitionsOrder: 1,
                $ShowLink: true
            },

            $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$,
                $ChanceToShow: 1
            },

            $ThumbnailNavigatorOptions: {
                $Class: $JssorThumbnailNavigator$,
                $ChanceToShow: 2,

                $ActionMode: 1,
                $SpacingX: 8,
                $DisplayPieces: 10,
                $ParkingPosition: 360
            }
        });

    //responsive code begin
    //you can remove responsive code if you don't want the slider scales while window resizes
    function ScaleSlider() {
        var parentWidth = slider.$Elmt.parentNode.clientWidth;
        if (parentWidth)
            slider.$ScaleWidth(Math.max(Math.min(parentWidth, 800), 300));
        else
            window.setTimeout(ScaleSlider, 30);
    }

    ScaleSlider();

    if (!navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|IEMobile)/)) {
        $(window).bind('resize', ScaleSlider);
    }

    $('.image-container').each(function() {
        $(this).css('background-image', 'url(' + $(this).children('img').attr('src') + ')');
    });
});