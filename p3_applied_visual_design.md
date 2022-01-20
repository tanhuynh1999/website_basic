1. text-align:
    - justify: spaces the text so that each line has equal width.
    - center: centers the text.
    - right: right-aligns the text.
2. box
3. Arranges
    - strong, b (font-weight: bold)
    - u
    - i, em (font-style: italic;)
    - s (text-decoration: line-through;)
    - hr
4. color: 
    - rgba() rgba(45, 45, 45, 0.1)
    - rgb()
    <!--
        rgba stands for:
        r = red
        g = green
        b = blue
        a = alpha/level of opacity
    -->
5. font-size in Headline
6. box-shadow
7. opacity
8. text-transform
    - lowercase	"transform me"
    - uppercase	"TRANSFORM ME"
    - capitalize "Transform Me"
    - initial	default
9. font-weight (0 - 800)
10. hover (:hover)
11. position: 
            => relative
            => fixed
            =>absolute
12. Float: (left, right)
13. z-index
14. margin => auto
15. color hex
    <!--
        red (#FF0000) and cyan (#00FFFF)
        green (#00FF00) and magenta (#FF00FF)
        blue (#0000FF) and yellow (#FFFF00)
    -->

    <!--
    ------------------------------------------hsl()---------------------------------------------
    
    red	hsl(0, 100%, 50%)
    yellow	hsl(60, 100%, 50%)
    green	hsl(120, 100%, 50%)
    cyan	hsl(180, 100%, 50%)
    blue	hsl(240, 100%, 50%)
    magenta	hsl(300, 100%, 50%)

    hsl(180, 90%, 35%) 


    linear-gradient(gradient_direction, color 1, color 2, color 3, ...);
    ex: linear-gradient(90deg, red, yellow, rgb(204, 204, 255));

    background: repeating-linear-gradient(
      90deg,
      yellow 0px,
      blue 40px,
      green 40px,
      red 80px
    );
    -->
16. Background (url)
17. Transform
    => scale /0.0
    => skewX (deg)
    => skewY (deg)
18. 
<!--

    #anim {
        animation-name: colorful;
        animation-duration: 3s;
        animation-fill-mode: forwards;
        animation-iteration-count: 3; (infinite)
    }

    @keyframes colorful {
        0% {
            background-color: blue;
        }
        100% {
            background-color: yellow;
        }
    }

-->
19. :before, :after