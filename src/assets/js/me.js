import jQuery from "jquery";
import $ from "jquery";

const setHoverBoxPerspective = function () {
    jQuery.fn.entry = function (options) {

        options = $.extend({
            elem: jQuery(this),
            e: undefined,
            invert: false,
            namespace: 'entry',
            sides: ['up', 'right', 'down', 'left']
        }, options);

        const mouseCrossedElementsBorder = function (e, elem) {
            let w = elem.width(),
                h = elem.height(),
                pointX, pointY, offsetX, offsetY, modeLR, modeTB, direction,
                eoffsetX = (e.offsetX || e.clientX - $(e.target).offset().left + window.pageXOffset),
                eoffsetY = (e.offsetY || e.clientY - $(e.target).offset().top + window.pageYOffset);

            // Determine border point horizontaly
            if (eoffsetX < w / 2) {
                pointX = !options.invert ? options.sides[3] : options.sides[1];
                offsetX = eoffsetX;
                modeLR = 0;
            } else if (eoffsetX > w / 2 && (eoffsetX - w <= w / 2)) {
                pointX = !options.invert ? options.sides[1] : options.sides[3];
                offsetX = (eoffsetY < h / 2) ? w - eoffsetX : eoffsetX - w;
                modeLR = 1;
            }
            // Determine border point vertically
            if (eoffsetY < h / 2) {
                pointY = !options.invert ? options.sides[0] : options.sides[2];
                offsetY = eoffsetY;
                modeTB = 0;
            } else if (eoffsetY > h / 2 && (eoffsetY - h <= h / 2)) {
                pointY = !options.invert ? options.sides[2] : options.sides[0];
                offsetY = (eoffsetX < w / 2) ? h - eoffsetY : eoffsetY - h;
                modeTB = 1;
            }
            // Determine what side was closer: horizontaly or vertically
            if (modeLR === 1 && modeTB === 1) {
                direction = (offsetX > offsetY) ? pointX : pointY;
            } else if ((modeLR === 0 && modeTB === 0) || (modeLR === 1 && modeTB === 0) || (modeLR === 0 && modeTB === 1)) {
                direction = (offsetX < offsetY) ? pointX : pointY;
            }
            return direction;
        };

        if (typeof (options.e) == 'undefined')
            console.log('Entry plugin requires Event Object ')
        else
            return mouseCrossedElementsBorder(options.e, options.elem);

    };
    const classNames = ['in-up', 'in-right', 'in-down', 'in-left', 'out-up', 'out-right', 'out-down', 'out-left']; // Animation classes.
    $('.hover-box').css({
        'perspective': function () {
            return Math.max($(this).width(), $(this).height()) * 2 + 50;
        }
    }).hover(
        function (event) {
            let direction = "up";
            if (jQuery.fn.entry) { //Check if entry js file is loaded.
                direction = $(this).entry({e: event}); // Get mouse in direction.
            }
            $(this).removeClass(classNames.join(" ")); // Remove existing animation classes.
            $(this).addClass("in-" + direction); //Add mouse in animation
        },
        function (event) {
            let direction = "up";
            if (jQuery.fn.entry) {
                direction = $(this).entry({e: event}); // Get mouse out direction.
            }
            $(this).removeClass(classNames.join(" "));
            $(this).addClass("out-" + direction); //Add mouse out animation
        }
    );

};

export default setHoverBoxPerspective;
