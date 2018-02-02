/* PRHONE Calculador Matemático
 * Instituto Técnico Industrial Laureano Gómez Castro
 * Romel Francisco Pérez Estrada - 2011 (c)
 * Application JavaScript   
 ====================================================== */

var contenidos = [
      /* Textos de Submenu */
      [
            /* Matemáticas */
            [
                    "Las funciones se ven en los grados: noveno, d&eacute;cimo y und&eacute;cimo.<br /><hr />Puedes encontrar m&aacute;s informaci&oacute;n acerca del tema en wikipedia desde: <a href='http://es.wikipedia.org/wiki/Funci%C3%B3n_matem%C3%A1tica' target='blank'>este link</a>.",
                    "Los vectores se ven en el grado: d&eacute;cimo.<br /><hr />Puedes encontrar m&aacute;s informaci&oacute;n acerca del tema en wikipedia desde: <a href='http://es.wikipedia.org/wiki/Vectores' target='blank'>este link</a>.",
                    "Los tri&aacute;ngulos se ven en d&eacute;cimo principalmente.<br /><hr />Puedes encontrar m&aacute;s informaci&oacute;n acerca del tema en wikipedia desde: <a href='http://es.wikipedia.org/wiki/Funciones_trigonom%C3%A9tricas' target='blank'>este link</a>.",
                    "Las leyes de Ohm y de Watt, se ve el primer a&nacute;o de la especialidad de Electr&oacute;nica.<br /><hr />Puedes encontrar m&aacute;s informaci&oacute;n acerca del tema en wikipedia desde: <a href='http://es.wikipedia.org/wiki/Ley_de_Ohm' target='blank'>Ley de Ohm</a> y <a href='http://es.wikipedia.org/wiki/Potencia_el%C3%A9ctrica' target='blank'>Ley de Watt</a>."
            ]
      ],
      /* Descripción de Ejemplos */
      [ 
            /* Funciones */
            [
                    /* Lineales */        "Las funciones lineales resultan cuando en la f&oacute;rmula, todas las variables <em>x</em> se encuentran elevadas a 1, y dan como resultado una gr&aacute;fica de una sola linea.",
                    /* Cuadráticas */     "Las funciones cuadr&aacute;ticas resultan cuando en la f&oacute;rmula, una de las variables <em>x</em> se encuentran elevada a la 2, y dan como resultado en la gr&aacute;fica una par&aacute;bola.",
                    /* Cúbicas */         "Las funciones c&uacute;bicas son las que en la f&oacute;rmula, una de las variables <em>x</em>, est&aacute; elevada a la 3, este tipo de casos resultan una gr&aacute;fica como una <a href='http://es.wikipedia.org/wiki/Curva_de_B%C3%A9zier' target='_blank'>curva de b&eacute;zier</a>.",
                    /* Racionales */      "Las funciones racionales se dan en el caso en que en la f&oacute;rmula, se encuentran las variables <em>x</em> como numeradores y denominadores en una fracci&oacute;n o divisi&oacute;n. El resultado ser&aacute; una gr&aacute;fica parecida a una par&aacute;bola.",
                    /* Exponenciales */   "Las funciones exponenciales son el caso en que en la f&oacute;rmula, un n&uacute;mero real cualquiera, se encuentra elevado a la variable <em>x</em>. Eso resultar&aacute; una gr&aacute;fica creciente o decreciente horizontalmente.",
                    /* Logarítmicas */    "Las funciones logar&iacute;tmicas se dan a que en la f&oacute;rmula se usan logar&iacute;tmos de cualquier base, y la variable <em>x</em> como el valor logar&iacute;tmizado. Este tipo de f&oacute;rmulas resultan una gr&aacute;fica creciente o decreciente verticalmente.",
                    /* Trigonométricas */ "Las funciones trigonom&eacute;tricas se dan cuando en la f&oacute;rmula se usan r&aacute;zones trigonom&eacute;tricas con variables <em>x</em>. Estos resultan gr&aacute;ficas estilo ondas y l&aacute;tigos."
            ],
            /* Vectores */
            [
                    /* Rectangulaes */    "Los vectores se pueden sumar o restar por componentes rectangulares con coordenadas rectangulaes, es decir, operando los componentes (x,y) de cada una de las cabezas de los vectores a sumar.",
                    /* Polares */         "Los vectores se pueden sumar o restar por componentes rectangulares con coordenadas polares, es decir, dadas las propiedades de los vectores a operar (magnitud, direcci&oacute;n y sentido), se halla el &aacute;ngulo y la magnitud del vector resultante de acuerdo con las sumatorias de los componentes rectangulares de los operandos."
            ],
            /* Triángulos */
            [
                    /* Equilatero-Acutangulo */    "Al siguiente tri&aacute;ngulo se le llama equilatero porque todos sus lados miden 10 unidades, y acut&aacute;ngulo porque todos sus &aacute;ngulos miden menos de 90 grados.",
                    /* Isóceles-Rectángulo */      "El tri&aacute;ngulo de este ejemplo se le llama rect&aacute;ngulo porque uno de sus &aacute;ngulos tiene PI/2 radi&aacute;n que es equivalente a 90 grados, adem&aacute;s tiene 1 de sus lados desigual a los otros dos, por eso se le llama is&oacute;sceles.",
                    /* Escaleno-Obtusangulo */     "El siguiente tri&aacute;ngulo se le atribuye ser escaleno porque todos sus lados sus desiguales entre s&iacute;, y obtus&aacute;ngulo porque uno de sus angulos mide m&aacute; de 90 grados."
            ]
      ]
];

/* ========================================================================== */
/* Plugins ================================================================== */
/* ========================================================================== */

(function($){

        /* Propiedad de Titulos ============================================= */
        /* ------------------------------------------------------------------ */

        $.fn.propTitle = function()
        {
                var c = $("#prop-title"), t = null;
                for(var i=0; i<this.length; i++)
                {
                        if( $(this[i]).attr("title") )
                        {
                                t = $(this[i]).attr("title");
                                $(this[i]).attr("title","");
                                $(this[i]).mouseenter(function(){
                                        c.addClass("prop-title-act");
                                }).mousemove(function(e){
                                        c.css({ "left": (e.pageX-(parseFloat(c.css("width"))/2))+"px", "top": (e.pageY+20)+"px" }).html(t);
                                }).mouseleave(function(){
                                        c.removeClass("prop-title-act").html("");
                                });
                        }
                }
        };

})(jQuery);

/* ========================================================================== */
/* Funciónes ================================================================ */
/* ========================================================================== */

var fn = {
        
        /* Logaritmo base 10 */
        log10: function( a ){
                return Math.log( a ) / Math.LN10;
        },
        /* Potencia */
        pt: function( a, b ){
                return Math.pow(a, b);
        },
        /* Logaritmo */
        lgrtm: function( b, l ){
                return fn.log10( l ) / fn.log10( b );
        },
        /* Raiz */
        rz: function( i, r ){
                return ( Math.exp( Math.log( r ) / i ) );
        },
        /* Raiz Cuadrada */
        rz2: function( r ){
                return ( Math.exp( Math.log( r ) / 2 ) );
        },
        /* Seno */
        sn: function( a, t ){
                if(t) return Math.sin( (a*(Math.PI/180)) );
                return Math.sin(a);
        },
        /* Coseno */
        cs: function( a, t ){
                if(t) return Math.cos( (a*(Math.PI/180)) );
                return Math.cos(a);
        },
        /* Tangente */
        tn: function( a, t ){
                if(t) return Math.tan( (a*(Math.PI/180)) );
                return Math.tan(a);
        },
        /* Cosecante */
        csc: function( a ){
                return Math.asin(a);
        },
        /* Secante */
        sec: function( a ){
                return Math.acos(a);
        },
        /* Cotangente Polar */
        atn: function( a, b, t ){
                if(t) return Math.atan2(a,b)*(180/Math.PI);
                return Math.atan2(a,b);
        },
        /* Absoluto */
        as: function( a ){
                return Math.abs(a);
        },
        /* Número PI */
        np: Math.PI,
        /* Costante de Euler */
        ce: Math.E,
        /* Convertir a Radianes */
        rad: function( v ){
                return ( v * ( Math.PI / 180 ) );
        },
        /* Convertir a Grados */
        grad: function( v ){
                return ( v * ( 180 / Math.PI ) );
        }

};

var editor = {

        insert: function( input, tx, a, b, C, D ){
                if( D == 2 ) var delim = " )/( ";
                else var delim = ", ";
                if(typeof document.selection != 'undefined' && document.selection) {
                        var str = window.document.selection.createRange().text;
                        input.focus();
                		var sel = window.document.selection.createRange();
                        
                        if( D && D == 1 ){
                                str = "";
                                sel.text = tx;
                                sel.select();
                                return;
                        }
                        sel.text = tx +"( ";
                        if( C ){ 
                                if( str.length > 0 ) sel.text += str;
                                else sel.text += a;
                                if( b ) sel.text += delim + b +" )";
                                else sel.text += " )";
                        }else{
                                if( a ) sel.text += a + delim;
                                else sel.text += "1" + delim;
                                if( str.length > 0 ) sel.text += str;
                                else sel.text += b +" )";
                        }
                         
                		sel.select();
                		return;
                }else if(typeof input.selectionStart != 'undefined'){
		                var inicio = input.selectionStart,
		                    end = input.selectionEnd,
		                    insText = input.value.substring(inicio, end),
                            cont = tx+"( ";
                        
                        if( D && D == 1 ){
                                input.value = input.value.substr(0, inicio)+ tx +input.value.substr(end); 
                                input.focus();
                                return;
                        }
                        if( C ){
                                if( insText.length > 0 ) cont += insText;
                                else cont += a;
                                if( b ) cont += delim + b +" )";
                                else cont += " )"; 
                        }else{
                                if( a ) cont += a + delim;
                                else cont += "1"+ delim;
                                if( insText.length > 0 ) cont += insText +" )";
                                else cont += b +" )";
                        }
                        input.value = input.value.substr(0, inicio)+ cont +input.value.substr(end); 

                        input.focus();
	                	return;
                }else{
	                	input.value += tx+"( "+a;
                        if( b ) input.value += delim + b+" )";
                        else input.value += " )";
	                	return;
	           }
        },
        formula: function( t ){
                while(t.indexOf("pot")>=0)t=t.replace("pot","fn.pt");
                while(t.indexOf("raiz")>=0)t=t.replace("raiz","fn.rz");
                while(t.indexOf("raiz2")>=0)t=t.replace("raiz2","fn.rz2");
                while(t.indexOf("log")>=0)t=t.replace("log","fn.lgrtm");
                while(t.indexOf("sen")>=0)t=t.replace("sen","fn.sn");
                while(t.indexOf("cos")>=0)t=t.replace("cos","fn.cs");
                while(t.indexOf("tan")>=0)t=t.replace("tan","fn.tn");
                while(t.indexOf("abs")>=0)t=t.replace("abs","fn.as");
                while(t.indexOf("PI")>=0)t=t.replace("PI","fn.np");
                while(t.indexOf("E")>=0)t=t.replace("E","fn.ce");
                return t;
        }

};

var graficar = {

        _work: null,
        _zoom: 10,
        _zoom_val: [10, 11, 12.5, 15, 20, 25, 30, 40, 50, 65, 80, 100, 0],
        
        _inter: function(){
                graficar._zoom = 10;
                graficar._zoom_val[13] = 0;
                $("#work").replaceWith("<div id='work' class='ui-widget-content ui-corner-all'></div>");
                graficar._work = Raphael(document.getElementById("work"), 660, 500);
        },
        
        _control_zoom: function( fn, data ){
                var gw = graficar._work,
                    /* Fondo */
                    con_zoomF = gw.rect( 610, 20, 30, 64, 5 ).attr({ fill: "#eef", "stroke-width": 0.7, opacity: 0 }),
                    /* Máximo Zoom */
                    con_zoomM = gw.path( "M 614,53 L 636,53" ).attr({ stroke: "#779", "stroke-width": 7, opacity: 0 }).click(function(){
                            if( graficar._zoom != 100 ){
                                    graficar._zoom = 100;
                                    graficar._zoom_val[12] = 11;
                                    if(data)fn(data);else fn();
                            }
                    }).hover(function(){
                            this.attr({ stroke: "#aac" });
                    },function(){
                            this.attr({ stroke: "#779" });
                    }),
                    /* Minimo Zoom */
                    con_zoomL = gw.path( "M 614,62 L 636,62" ).attr({ stroke: "#779", "stroke-width": 7, opacity: 0 }).click(function(){
                            if( graficar._zoom != 10 ){
                                    graficar._zoom = 10;
                                    graficar._zoom_val[12] = 0;
                                    if(data)fn(data);else fn();
                            }
                    }).hover(function(){
                            this.attr({ stroke: "#aac" });
                    },function(){
                            this.attr({ stroke: "#779" });
                    }),
                    /* Sumar a Zoom */
                    con_zoomA = gw.path( "M 621,24 L 629,24 L 629,32 L 635,32 L 635,38 L 629,38 L 629,45 L 622,45 L 622,38 L 615,38 L 615,32 L 622,32 L 622,24" ).attr({ stroke: "#779", "stroke-width": 2, fill: "#aac", opacity: 0 }).click(function(){
                            if( graficar._zoom < 100 ){
                                    graficar._zoom = graficar._zoom_val[ graficar._zoom_val[12] + 1 ];
                                    graficar._zoom_val[12]++;
                                    if(data)fn(data);else fn();
                            }
                    }).hover(function(){
                            this.attr({ fill: "#ddf" });
                    },function(){
                            this.attr({ fill: "#aac" });
                    }),
                    /* Restar a Zoom */
                    con_zoomB = gw.rect( 615, 71, 20, 7, 1 ).attr({ fill: "#aac", "stroke-width": 2, stroke: "#779", opacity: 0 }).click(function(){
                            if( graficar._zoom > 10 ){
                                    graficar._zoom = graficar._zoom_val[ graficar._zoom_val[12] - 1 ];
                                    graficar._zoom_val[12]--;
                                    if(data)fn(data);else fn();
                            }
                    }).hover(function(){
                            this.attr( { fill: "#ddf" } );
                    },function(){
                            this.attr( { fill: "#aac" } );
                    });
                $("#work").hover(function(){
                        con_zoomF.animate( { opacity: 0.9 }, 250 );
                        con_zoomL.animate( { opacity: 0.9 }, 250 );
                        con_zoomM.animate( { opacity: 0.9 }, 250 );
                        con_zoomA.animate( { opacity: 0.9 }, 250 );
                        con_zoomB.animate( { opacity: 0.9 }, 250 );
                },
                function(){
                        con_zoomF.animate( { opacity: 0 }, 250 );
                        con_zoomL.animate( { opacity: 0 }, 250 );
                        con_zoomM.animate( { opacity: 0 }, 250 );
                        con_zoomA.animate( { opacity: 0 }, 250 );
                        con_zoomB.animate( { opacity: 0 }, 250 );
                });

        },
        
        _cuadricula: function(){
                graficar._work.clear();
                var lineas = 0.2 + (graficar._zoom/120),
                    cen =  graficar._work.circle(330, 250, 2).attr({ "fill": "#567" }),
                    lh = graficar._work.path("M 0,250 L 660,250").attr({stroke: "#567", "stroke-width": 1.4+(graficar._zoom/100)}),
                    lv = graficar._work.path("M 330,0 L 330,520").attr({stroke: "#567", "stroke-width": 1.4+(graficar._zoom/100)});
                for( i=330; i>=0; i-=graficar._zoom ){ lh_e = graficar._work.path( "M"+ i +" 0L"+ i +" 500" ).attr({stroke: "#ccd", "stroke-width": lineas}); }
                for( i=330; i<=660; i+=graficar._zoom ){ lh_e = graficar._work.path( "M"+ i +" 0L"+ i +" 500" ).attr({stroke: "#ccd", "stroke-width": lineas}); }
                for( i=250; i>=0; i-=graficar._zoom ){ lv_e = graficar._work.path( "M0 "+ i +"L660 "+ i ).attr({stroke: "#ccd", "stroke-width": lineas}); }
                for( i=250; i<=500; i+=graficar._zoom ){ lv_e = graficar._work.path( "M0 "+ i +"L660 "+ i ).attr({stroke: "#ccd", "stroke-width": lineas}); }
        },
        
        _coordenadas: function(){
                var obj = $("#work"),
                    vis = $("#point"),
                    pXw = obj.offset().left,
                    pYw = obj.offset().top;
                vis.css("position","absolute")
                    .css("left",(pXw+10)+"px")
                    .css("top",(pYw+470)+"px")
                    .css("clip","0,0,100px,10px");
                obj.mousemove(function(e){
                        vis.show( 250 ).css({"left":(e.pageX+20)+"px","top":/*(obj.offset().top+470)*/(e.pageY+20)+"px"}).html("<em>X</em> = "+ util.r1( (((e.pageX-pXw)-330)/graficar._zoom) ) +" &nbsp;&nbsp; <em>Y</em> = "+ util.r1( ((((e.pageY-pYw)*-1)+250)/graficar._zoom) ) );
                });
                obj.mouseleave(function(){
                        vis.hide( 250 );
                });
        },
        
        funcion_default: function(){
                graficar.funcion( $("#mat-fun-for")[0].value, $("#mat-fun-des")[0].value, $("#mat-fun-has")[0].value, $("#mat-fun-int")[0].value );
        },

        funcion: function( o, des, has, inter ){
                
                /* Valores Constantes */
                var f = editor.formula( o ),
                    des = parseFloat(des),
                    has = parseFloat(has),
                    inter = parseFloat(inter),
                    lineas = 0.2 + ( graficar._zoom / 120 );
                if( typeof f != "string" || isNaN( des ) || des < -100 || isNaN( has ) || has > 100 || isNaN( inter ) || inter < 0.01 || graficar._zoom < 1 || graficar._zoom > 100 ){
                        util.dialog("Los datos introducidos como par&aacute;metros en la funci&oacute;n son inv&aacute;lidos, por favor, rev&iacute;selos!");
                        return 0;
                }

                /* Graficación */
                var alerta = "Ha ocurrido un error!<br />Revise los datos de la ecuaci&oacute;n y asegurese de que s&oacute;lo sean tomados los valores del dominio y rango de la funci&oacute;n.",
                    lim = [ des, has, inter ],
                    F = f;
                while(F.indexOf("x")>=0){F = F.replace("x", "("+lim[0]+")");}
                try{
                        var P = [ lim[0]+330, (eval(F)*-1)+250 ];
                        if( isNaN( P[1] ) ){
                                util.dialog( alerta );
                                return 0;
                        }
                }catch( e ){
                        util.dialog( alerta );
                        return 0;
                }
                var formula = "M "+ P[0] +","+ P[1];
                for( i=(lim[0]+lim[2]); i<=lim[1]; i+=lim[2] ){
                        
                        F = f;
                        while(F.indexOf("x")>=0){F = F.replace("x", "("+i+")");}
                        P[0] = (i+330);
                        P[1] = (( eval( F ) * -1 ) + 250);
                        if( isNaN( P[0] ) || isNaN( P[1] ) ){
                                util.dialog( alerta );
                                return 0;
                        }
                        formula += " "+ P[0] +","+ P[1];
                        
                }

                /* Funciones */
                graficar._cuadricula();    
                graficar._control_zoom( graficar.funcion_default );
                graficar._coordenadas();
                var G = graficar._work.path( formula ).attr({stroke: "#306", "stroke-width": 2.3}).scale(graficar._zoom, graficar._zoom, 330, 250).attr({ opacity: 0 }).animate( { opacity: 1 }, 500 );

        },
        
        vector_default: function(vars){
                try{
                        if( vars.type ){
                                graficar.vector({
                                    type: vars.type,
                                    operador: vars.operador,
                                    anim: vars.anim,
                                    ax: $("#mat-vec-1-x").val(),
                                            ay: $("#mat-vec-1-y").val(),
                                    bx: $("#mat-vec-2-x").val(),
                                    by: $("#mat-vec-2-y").val(),
                                    cx: $("#mat-vec-3-x").val(),
                                    cy: $("#mat-vec-3-y").val()
                                });
                        }else{
                                graficar.vector({
                                    type: vars.type,
                                    operador: vars.operador,
                                    anim: vars.anim,
                                    ang: $("#mat-vec-ta-gra")[0].checked,
                                    am: $("#mat-vec-1-mag").val(),
                                    ad: eval( $("#mat-vec-1-dir").val().toUpperCase().replace("PI","Math.PI") ),
                                    bm: $("#mat-vec-2-mag").val(),
                                    bd: eval( $("#mat-vec-2-dir").val().toUpperCase().replace("PI","Math.PI") ),
                                    cm: $("#mat-vec-3-mag").val(),
                                    cd: eval( $("#mat-vec-3-dir").val().toUpperCase().replace("PI","Math.PI") )
                                });
                        }
                }catch(e){
                        util.dialog("Ha ocurrido un error!<br />Los datos son inv&aacute;lidos.");
                        return 0;
                }
        },

        vector: function( data ){
                /* Coordenadas Rectangulares */
                if(data.type==true)
                {
                        /* Validación */
                        if( data.ax == "" || data.ax == " " || data.ay == "" || data.ay == " " || ( data.ax == "0" && data.ay == "0" ) ){
                                util.dialog("Ha ocurrido un error!<br />Alguno de los datos del vector 1 estan vacios o nulos!"); return 0;
                        }if( data.bx == "" || data.bx == " " || data.by == "" || data.by == " " || ( data.bx == "0" && data.by == "0" ) ){
                                util.dialog("Ha ocurrido un error!<br />Alguno de los datos del vector 2 estan vacios o nulos!"); return 0;
                        }
                        data.ax = parseFloat(data.ax);
                        data.ay = parseFloat(data.ay);
                        data.bx = parseFloat(data.bx);
                        data.by = parseFloat(data.by);

                        /* Cálculo */
                        if( data.operador == "s" ){
                                var resultX = data.ax+data.bx,
                                    resultY = data.ay+data.by;
                        }else{
                                var resultX = data.ax-data.bx,
                                    resultY = data.ay-data.by;
                        }
                        var v3 = null;
                        if( data.cx != "" && data.cx != " " && data.cy != "" && data.cy != " " && ( data.cx != "0" || data.cy != "0" ) ){
                                data.cx = parseFloat(data.cx);
                                data.cy = parseFloat(data.cy);
                                if( data.operador == "s" ){
                                        resultX += data.cx;
                                        resultY += data.cy;
                                }else{
                                        resultX -= data.cx;
                                        resultY -= data.cy;
                                }
                                v3 = true;
                        }
                        
                        /* Funciones */
                        graficar._cuadricula();
                        graficar._control_zoom( graficar.vector_default, { type: data.type, operador: data.operador, anim: false } );
                        graficar._coordenadas();

                        /* Graficación */
                        var vrA = fn.atn(resultY,resultX),
                            vrD = 0.2+(Math.sqrt( Math.pow(resultX, 2) + Math.pow(resultY, 2) )*0.04),
                            vrciX = (vrD*(fn.cs((vrA+2.6)%(2*Math.PI))))+resultX,
                            vrciY = (vrD*(fn.sn((vrA+2.6)%(2*Math.PI))))+resultY,
                            vrcdX = (vrD*(fn.cs((vrA+3.66)%(2*Math.PI))))+resultX,
                            vrcdY = (vrD*(fn.sn((vrA+3.66)%(2*Math.PI))))+resultY,
                            
                            vector1 = graficar._work.path("M 330,250 L "+ (data.ax+330) +","+ ((data.ay*-1)+250) ).attr({ "stroke": "red", "stroke-width": 2, opacity: 0 }).scale(graficar._zoom, graficar._zoom, 330, 250).animate({ opacity: 1, stroke: "#FF9696" }, 1000),
                            vector1LX = graficar._work.path("M "+ (data.ax+330) +",250 L "+ (data.ax+330) +","+ ((data.ay*-1)+250) ).attr({ "stroke": "#ddd", "stroke-width": 2, "stroke-dasharray": "--", opacity: 0 }).scale(graficar._zoom, graficar._zoom, 330, 250).animate({ opacity: 1 }, 1000),
                            vector1LY = graficar._work.path("M 330,"+ ((data.ay*-1)+250) +" L "+ (data.ax+330) +","+ ((data.ay*-1)+250) ).attr({ "stroke": "#ddd", "stroke-width": 2, "stroke-dasharray": "--", opacity: 0 }).scale(graficar._zoom, graficar._zoom, 330, 250).animate({ opacity: 1 }, 1000),

                            vector2 = graficar._work.path("M 330,250 L "+ (data.bx+330) +","+ ((data.by*-1)+250)).attr({ "stroke": "green", "stroke-width": 2, opacity: 0 }).scale(graficar._zoom, graficar._zoom, 330, 250).animate({ opacity: 1, stroke: "#84FF84" }, 1000),
                            vector2LX = graficar._work.path("M "+ (data.bx+330) +",250 "+ (data.bx+330) +","+ ((data.by*-1)+250) ).attr({ "stroke": "#ddd", "stroke-width": 2, "stroke-dasharray": "--", opacity: 0 }).scale(graficar._zoom, graficar._zoom, 330, 250).animate({ opacity: 1 }, 1000),
                            vector2LY = graficar._work.path("M 330,"+ ((data.by*-1)+250) +" L "+ (data.bx+330) +","+ ((data.by*-1)+250) ).attr({ "stroke": "#ddd", "stroke-width": 2, "stroke-dasharray": "--", opacity: 0 }).scale(graficar._zoom, graficar._zoom, 330, 250).animate({ opacity: 1 }, 1000);
                            
                        if(v3){
                                var vector3 = graficar._work.path("M 330,250 L "+ (data.cx+330) +","+ ((data.cy*-1)+250)).attr({ "stroke": "#FFA32B", "stroke-width": 2, opacity: 0 }).scale(graficar._zoom, graficar._zoom, 330, 250).animate({ opacity: 1, stroke: "#FFC987" }, 1000),
                                    vector3LX = graficar._work.path("M "+ (data.cx+330) +",250 "+ (data.cx+330) +","+ ((data.cy*-1)+250) ).attr({ "stroke": "#ddd", "stroke-width": 2, "stroke-dasharray": "--", opacity: 0 }).scale(graficar._zoom, graficar._zoom, 330, 250).animate({ opacity: 1 }, 1000),
                                    vector3LY = graficar._work.path("M 330,"+ ((data.cy*-1)+250) +" L "+ (data.cx+330) +","+ ((data.cy*-1)+250) ).attr({ "stroke": "#ddd", "stroke-width": 2, "stroke-dasharray": "--", opacity: 0 }).scale(graficar._zoom, graficar._zoom, 330, 250).animate({ opacity: 1 }, 1000);
                        }
                            
                        var vectorLX = graficar._work.path("M "+ (resultX+330) +",250 "+ (resultX+330) +","+ ((resultY*-1)+250) ).attr({ "stroke": "#ccc", "stroke-width": 2, "stroke-dasharray": "--", opacity: 0 }).scale(graficar._zoom, graficar._zoom, 330, 250).animate({ opacity: 1 }, 1000),
                            vectorLY = graficar._work.path("M 330,"+ ((resultY*-1)+250) +" L "+ (resultX+330) +","+ ((resultY*-1)+250) ).attr({ "stroke": "#ccc", "stroke-width": 2, "stroke-dasharray": "--", opacity: 0 }).scale(graficar._zoom, graficar._zoom, 330, 250).animate({ opacity: 1 }, 1000),
                            vector = graficar._work.path("M 330,250 L "+ (resultX+330) +","+ ((resultY*-1)+250)).attr({ "stroke": "#306", "stroke-width": 2.6, opacity: 0 }).scale(graficar._zoom, graficar._zoom, 330, 250).animate({ opacity: 1 }, 2000),
                            vectorCI = graficar._work.path("M "+(resultX+330) +","+ ((resultY*-1)+250) + " L "+ (vrciX+330) +","+ ((vrciY*-1)+250) ).attr({ "stroke": "#306", "stroke-width": 2.6, opacity: 0 }).scale(graficar._zoom, graficar._zoom, 330, 250).animate({ opacity: 1 }, 2000),
                            vectorCD = graficar._work.path("M "+(resultX+330) +","+ ((resultY*-1)+250) + " L "+ (vrcdX+330) +","+ ((vrcdY*-1)+250) ).attr({ "stroke": "#306", "stroke-width": 2.6, opacity: 0 }).scale(graficar._zoom, graficar._zoom, 330, 250).animate({ opacity: 1 }, 2000);

                        /* Animaciones */
                        if( data.anim ){
                                var vector1R = graficar._work.path("M 330,250 L "+ (data.ax+330) +","+ ((data.ay*-1)+250)).attr({ "stroke": "red", "stroke-width": 2 }).scale(graficar._zoom, graficar._zoom, 330, 250).animate({ path: "M 330,250 L "+ vector.attr("path")[1][1] +","+ vector.attr("path")[1][2], opacity: 0 }, 2500),
                                    vector2R = graficar._work.path("M 330,250 L "+ (data.bx+330) +","+ ((data.by*-1)+250)).attr({ "stroke": "green", "stroke-width": 2 }).scale(graficar._zoom, graficar._zoom, 330, 250).animate({ path: "M 330,250 L "+ vector.attr("path")[1][1] +","+ vector.attr("path")[1][2], opacity: 0 }, 2500);
                                if(v3) var vector3R = graficar._work.path("M 330,250 L "+ (data.cx+330) +","+ ((data.cy*-1)+250)).attr({ "stroke": "#FFA32B", "stroke-width": 2 }).scale(graficar._zoom, graficar._zoom, 330, 250).animate({ path: "M 330,250 L "+ vector.attr("path")[1][1] +","+ vector.attr("path")[1][2], opacity: 0 }, 2500);
                        }
                        
                        /* Resultados */
                        var oData = $("#data"),
                            rc = "<h3>";
                        rc += (data.operador == "s") ? "Suma" : "Resta";
                        rc += " de vectores por Componentes Rectangulares, coordenadas rectangulares</h3>";
                        rc += "<p class='formulas'>";
                        
                        rc += "<strong>F&oacute;rmulas utilizadas:</strong><br /><br />Para operar dos vectores por componentes rectangulares se suman o se restan los componentes de los operandos, tanto para <em>x</em> como para <em>y</em>:<br />";
                        rc += "<span style='text-decoration:overline;'>c</span><sub>x</sub> = <span style='text-decoration:overline;'>a</span><sub>x</sub>";
                        rc += (data.operador == "s") ? " + " : " - "; 
                        rc += "<span style='text-decoration:overline;'>b</span><sub>x</sub>";
                        
                        rc += "<br /><span style='text-decoration:overline;'>c</span><sub>y</sub> = <span style='text-decoration:overline;'>a</span><sub>y</sub>";
                        rc += (data.operador == "s") ? " + " : " - "; 
                        rc += "<span style='text-decoration:overline;'>b</span><sub>y</sub><br /><br />";
                        
                        rc += "<strong>Vector resultante:</strong><br /><br />Componente X = "+ data.ax +" + "+ data.bx;
                        rc += (data.cx)?(" + "+data.cx):("");
                        rc += " = "+ resultX +"<br />";
                        rc += "Componente Y = "+ data.ay +" + "+ data.by;
                        rc += (data.cy)?(" + "+data.cy):("");
                        rc += " = "+ resultY;
                        
                        rc += "</p>";
                        oData.html( rc );

                }
                /* Coordenadas Polares */
                else
                {
                        /* Validación */
                        if( data.am == "" || data.am == " " || data.ad == "" || data.ad == " " || ( data.am == "0" && data.ad == "0" ) ){
                                util.dialog("Ha ocurrido un error!<br />Alguno de los datos polares del vector 1 estan vacios o nulos!"); return 0;
                        }if( data.bm == "" || data.bm == " " || data.bd == "" || data.bd == " " || ( data.bm == "0" && data.bd == "0" ) ){
                                util.dialog("Ha ocurrido un error!<br />Alguno de los datos polares del vector 2 estan vacios o nulos!"); return 0;
                        }
                        data.am = parseFloat(data.am);
                        data.ad = parseFloat(data.ad); if(data.ang) data.ad = data.ad*(Math.PI/180);
                        data.ax = data.am*fn.cs(data.ad);
                        data.ay = data.am*fn.sn(data.ad);
                        
                        data.bm = parseFloat(data.bm);
                        data.bd = parseFloat(data.bd); if(data.ang) data.bd = data.bd*(Math.PI/180);
                        data.bx = data.bm*fn.cs(data.bd);
                        data.by = data.bm*fn.sn(data.bd);

                        /* Cálculo */
                        if( data.operador == "s" ){
                                var resultX = data.ax + data.bx,
                                    resultY = data.ay + data.by;
                        }else{
                                var resultX = data.ax - data.bx,
                                    resultY = data.ay - data.by;
                        }
                        var v3 = null;
                        if( data.cm != "" && data.cm != " " && data.cd != "" && data.cd != " " && ( data.cm != "0" || data.cd != "0" ) ){
                                data.cm = parseFloat(data.cm);
                                data.cd = parseFloat(data.cd); if(data.ang) data.cd = data.cd*(Math.PI/180);
                                data.cx = data.cm*fn.cs(data.cd);
                                data.cy = data.cm*fn.sn(data.cd);
                                if( data.operador == "s" ){
                                        resultX += data.cx;
                                        resultY += data.cy;
                                }else{
                                        resultX -= data.cx;
                                        resultY -= data.cy;
                                }
                                v3 = true;
                        }
                        
                        /* Funciones */
                        graficar._cuadricula();
                        graficar._control_zoom( graficar.vector_default, { type: data.type, operador: data.operador, anim: false } );
                        graficar._coordenadas();

                        /* Graficación */
                        var vrA = fn.atn(resultY,resultX),
                            vrD = 0.2+(Math.sqrt( Math.pow(resultX, 2) + Math.pow(resultY, 2) )*0.04),
                            vrciX = (vrD*(fn.cs(vrA+2.6)%(2*Math.PI)))+resultX,
                            vrciY = (vrD*(fn.sn(vrA+2.6)%(2*Math.PI)))+resultY,
                            vrcdX = (vrD*(fn.cs(vrA+3.66)%(2*Math.PI)))+resultX,
                            vrcdY = (vrD*(fn.sn(vrA+3.66)%(2*Math.PI)))+resultY,
                            
                            vector1 = graficar._work.path("M 330,250 L "+ (data.ax+330) +","+ ((data.ay*-1)+250) ).attr({ "stroke": "red", "stroke-width": 2, opacity: 0 }).scale(graficar._zoom, graficar._zoom, 330, 250).animate({ opacity: 1, stroke: "#FF9696" }, 1000),
                            vector1LX = graficar._work.path("M "+ (data.ax+330) +",250 L "+ (data.ax+330) +","+ ((data.ay*-1)+250) ).attr({ "stroke": "#ddd", "stroke-width": 2, "stroke-dasharray": "--", opacity: 0 }).scale(graficar._zoom, graficar._zoom, 330, 250).animate({ opacity: 1 }, 1000),
                            vector1LY = graficar._work.path("M 330,"+ ((data.ay*-1)+250) +" L "+ (data.ax+330) +","+ ((data.ay*-1)+250) ).attr({ "stroke": "#ddd", "stroke-width": 2, "stroke-dasharray": "--", opacity: 0 }).scale(graficar._zoom, graficar._zoom, 330, 250).animate({ opacity: 1 }, 1000),

                            vector2 = graficar._work.path("M 330,250 L "+ (data.bx+330) +","+ ((data.by*-1)+250)).attr({ "stroke": "green", "stroke-width": 2, opacity: 0 }).scale(graficar._zoom, graficar._zoom, 330, 250).animate({ opacity: 1, stroke: "#84FF84" }, 1000),
                            vector2LX = graficar._work.path("M "+ (data.bx+330) +",250 "+ (data.bx+330) +","+ ((data.by*-1)+250) ).attr({ "stroke": "#ddd", "stroke-width": 2, "stroke-dasharray": "--", opacity: 0 }).scale(graficar._zoom, graficar._zoom, 330, 250).animate({ opacity: 1 }, 1000),
                            vector2LY = graficar._work.path("M 330,"+ ((data.by*-1)+250) +" L "+ (data.bx+330) +","+ ((data.by*-1)+250) ).attr({ "stroke": "#ddd", "stroke-width": 2, "stroke-dasharray": "--", opacity: 0 }).scale(graficar._zoom, graficar._zoom, 330, 250).animate({ opacity: 1 }, 1000);
                            
                        if(v3){
                                var vector3 = graficar._work.path("M 330,250 L "+ (data.cx+330) +","+ ((data.cy*-1)+250)).attr({ "stroke": "#FFA32B", "stroke-width": 2, opacity: 0 }).scale(graficar._zoom, graficar._zoom, 330, 250).animate({ opacity: 1, stroke: "#FFC987" }, 1000),
                                    vector3LX = graficar._work.path("M "+ (data.cx+330) +",250 "+ (data.cx+330) +","+ ((data.cy*-1)+250) ).attr({ "stroke": "#ddd", "stroke-width": 2, "stroke-dasharray": "--", opacity: 0 }).scale(graficar._zoom, graficar._zoom, 330, 250).animate({ opacity: 1 }, 1000),
                                    vector3LY = graficar._work.path("M 330,"+ ((data.cy*-1)+250) +" L "+ (data.cx+330) +","+ ((data.cy*-1)+250) ).attr({ "stroke": "#ddd", "stroke-width": 2, "stroke-dasharray": "--", opacity: 0 }).scale(graficar._zoom, graficar._zoom, 330, 250).animate({ opacity: 1 }, 1000);
                        }

                        var vectorLX = graficar._work.path("M "+ (resultX+330) +",250 "+ (resultX+330) +","+ ((resultY*-1)+250) ).attr({ "stroke": "#ccc", "stroke-width": 2, "stroke-dasharray": "--", opacity: 0 }).scale(graficar._zoom, graficar._zoom, 330, 250).animate({ opacity: 1 }, 1000),
                            vectorLY = graficar._work.path("M 330,"+ ((resultY*-1)+250) +" L "+ (resultX+330) +","+ ((resultY*-1)+250) ).attr({ "stroke": "#ccc", "stroke-width": 2, "stroke-dasharray": "--", opacity: 0 }).scale(graficar._zoom, graficar._zoom, 330, 250).animate({ opacity: 1 }, 1000),
                            vector = graficar._work.path("M 330,250 L "+ (resultX+330) +","+ ((resultY*-1)+250)).attr({ "stroke": "#306", "stroke-width": 2.6, opacity: 0 }).scale(graficar._zoom, graficar._zoom, 330, 250).animate({ opacity: 1 }, 2000),
                            vectorCI = graficar._work.path("M "+(resultX+330) +","+ ((resultY*-1)+250) + " L "+ (vrciX+330) +","+ ((vrciY*-1)+250) ).attr({ "stroke": "#306", "stroke-width": 2.6, opacity: 0 }).scale(graficar._zoom, graficar._zoom, 330, 250).animate({ opacity: 1 }, 2000),
                            vectorCD = graficar._work.path("M "+(resultX+330) +","+ ((resultY*-1)+250) + " L "+ (vrcdX+330) +","+ ((vrcdY*-1)+250) ).attr({ "stroke": "#306", "stroke-width": 2.6, opacity: 0 }).scale(graficar._zoom, graficar._zoom, 330, 250).animate({ opacity: 1 }, 2000);

                        /* Animaciones */
                        if( data.anim ){
                                var vector1R = graficar._work.path("M 330,250 L "+ (data.ax+330) +","+ ((data.ay*-1)+250)).attr({ "stroke": "red", "stroke-width": 2 }).scale(graficar._zoom, graficar._zoom, 330, 250).animate({ path: "M 330,250 L "+ vector.attr("path")[1][1] +","+ vector.attr("path")[1][2], opacity: 0 }, 2500),
                                    vector2R = graficar._work.path("M 330,250 L "+ (data.bx+330) +","+ ((data.by*-1)+250)).attr({ "stroke": "green", "stroke-width": 2 }).scale(graficar._zoom, graficar._zoom, 330, 250).animate({ path: "M 330,250 L "+ vector.attr("path")[1][1] +","+ vector.attr("path")[1][2], opacity: 0 }, 2500);
                                if(v3) var vector3R = graficar._work.path("M 330,250 L "+ (data.cx+330) +","+ ((data.cy*-1)+250)).attr({ "stroke": "#FFA32B", "stroke-width": 2 }).scale(graficar._zoom, graficar._zoom, 330, 250).animate({ path: "M 330,250 L "+ vector.attr("path")[1][1] +","+ vector.attr("path")[1][2], opacity: 0 }, 2500);
                        }
                        
                        /* Resultados */
                        var oData = $("#data"),
                            rc = "<h3>";
                        rc += (data.operador == "s") ? "Suma" : "Resta";
                        rc += " de vectores por Componentes Rectangulares, coordenadas polares</h3>";
                        rc += "<p class='formulas'>";
                        
                        rc += "<strong>F&oacute;rmulas utilizadas:</strong><br /><br />Para operar dos vectores por componentes rectangulares, con coordenadas polares, se convierten en coordenadas rectangulares y luego se suman o se restan los componentes de los operandos, tanto para <em>x</em> como para <em>y</em>:<br />";
                        rc += "<span style='text-decoration:overline;'>a</span><sub>x</sub> = a<sub>magnitud</sub> &middot; cos( a<sub>direcci&oacute;n</sub> )<br />";
                        rc += "<span style='text-decoration:overline;'>a</span><sub>y</sub> = a<sub>magnitud</sub> &middot; sen( a<sub>direcci&oacute;n</sub> )<br />";
                        rc += "<span style='text-decoration:overline;'>b</span><sub>x</sub> = b<sub>magnitud</sub> &middot; cos( b<sub>direcci&oacute;n</sub> )<br />";
                        rc += "<span style='text-decoration:overline;'>b</span><sub>y</sub> = b<sub>magnitud</sub> &middot; sen( b<sub>direcci&oacute;n</sub> )<br />";
                        
                        rc += "<span style='text-decoration:overline;'>c</span><sub>x</sub> = <span style='text-decoration:overline;'>a</span><sub>x</sub>";
                        rc += (data.operador == "s") ? " + " : " - "; 
                        rc += "<span style='text-decoration:overline;'>b</span><sub>x</sub>";
                        
                        rc += "<br /><span style='text-decoration:overline;'>c</span><sub>y</sub> = <span style='text-decoration:overline;'>a</span><sub>y</sub>";
                        rc += (data.operador == "s") ? " + " : " - "; 
                        rc += "<span style='text-decoration:overline;'>b</span><sub>y</sub><br /><br />";
                        
                        data.ax = (data.ax+"").substring(0,5);
                        data.ay = (data.ay+"").substring(0,5);
                        data.bx = (data.bx+"").substring(0,5);
                        data.by = (data.by+"").substring(0,5);
                        if(data.cx) data.cx = (data.cx+"").substring(0,5);
                        if(data.cy) data.cy = (data.cy+"").substring(0,5);
                        data.am = (data.am+"").substring(0,5);
                        data.ad = (data.ad*180/Math.PI); data.ad = (data.ad+"").substring(0,5);
                        data.bm = (data.bm+"").substring(0,5);
                        data.bd = (data.bd*180/Math.PI); data.bd = (data.bd+"").substring(0,5);
                        if(data.cm) data.cm = (data.cm+"").substring(0,5);
                        if(data.cd) data.cd = (data.cd*180/Math.PI); data.cd = (data.cd+"").substring(0,5);
                        resultX = (resultX+"").substring(0,5);
                        resultY = (resultY+"").substring(0,5);
                        
                        rc += "<strong>Vector resultante:</strong><p class='formulas'><span style='text-decoration:overline;'>a</span><sub>x</sub> = "+ data.am +" &middot; cos( "+ data.ad +" ) = "+ data.ax;
                        rc += "<br /><span style='text-decoration:overline;'>a</span><sub>y</sub> = "+ data.am +" &middot; sen( "+ data.ad +" ) = "+ data.ay;
                        rc += "<br /><span style='text-decoration:overline;'>b</span><sub>x</sub> = "+ data.bm +" &middot; cos( "+ data.bd +" ) = "+ data.bx;
                        rc += "<br /><span style='text-decoration:overline;'>b</span><sub>y</sub> = "+ data.bm +" &middot; sen( "+ data.bd +" ) = "+ data.by;
                        rc += (data.cm)?("<br /><span style='text-decoration:overline;'>c</span><sub>x</sub> = "+ data.cm +" &middot; cos( "+ data.cd +" ) = "+ data.cx):"";
                        rc += (data.cm)?("<br /><span style='text-decoration:overline;'>c</span><sub>y</sub> = "+ data.cm +" &middot; sen( "+ data.cd +" ) = "+ data.cy):"";
                        
                        rc += "<br />Componente X = "+ data.ax +" + "+ data.bx;
                        rc += (data.cx)?(" + "+data.cx):("");
                        rc += " = "+ resultX +"<br />";
                        rc += "Componente Y = "+ data.ay +" + "+ data.by;
                        rc += (data.cy)?(" + "+data.cy):("");
                        rc += " = "+ resultY;
                        
                        rc += "</p>";
                        oData.html( rc );

                }
        },
        
        triangulo_default: function(){
                try{
                        graficar.triangulo( $("#mat-tri-ta-gra")[0].checked,
                                            [parseFloat($("#mat-tri-a").val()),
                                            parseFloat($("#mat-tri-b").val()),
                                            parseFloat($("#mat-tri-c").val()),
                                            eval($("#mat-tri-A").val().toUpperCase().replace("PI","Math.PI")),
                                            eval($("#mat-tri-B").val().toUpperCase().replace("PI","Math.PI")),
                                            eval($("#mat-tri-C").val().toUpperCase().replace("PI","Math.PI"))] );
                }catch(e){
                        util.dialog("0 - Faltan o son inv&aacute;lidos los datos introducidos como valores de los lados y los &aacute;ngulos del tri&aacute;ngulo.");
                        return 0;
                }
        },
        
        triangulo: function( ang, trg ){
                /* Validación y valores constantes */
                var alertas = [
                        "Faltan alg&uacute;nos datos como valores de los lados y los &aacute;ngulos del tri&aacute;ngulo.",
                        "Son inv&aacute;lidos los datos introducidos como valores de los lados o los &aacute;ngulos del tri&aacute;ngulo.",
                        "Un lado de un tri&aacute;ngulo debe ser menor que la suma de sus otros dos lados.<br />Por favor revise los datos introducidos!",
                        "Ningun &aacute;ngulo del tri&aacute;gulo puede ser mayor o igual a 180 grados o 2PI radianes."
                    ],
                    cvl = 0,
                    cva = 0;
                trg[0] = (isNaN(trg[0]) || trg[0]<0) ? false : trg[0];
                trg[1] = (isNaN(trg[1]) || trg[1]<0) ? false : trg[1];
                trg[2] = (isNaN(trg[2]) || trg[2]<0) ? false : trg[2];
                trg[3] = (trg[3]==undefined || trg[3]<0) ? false : trg[3];
                trg[4] = (trg[4]==undefined || trg[4]<0) ? false : trg[4];
                trg[5] = (trg[5]==undefined || trg[5]<0) ? false : trg[5];
                cvl = (trg[0]) ? cvl+=1 : cvl;
                cvl = (trg[1]) ? cvl+=1 : cvl;
                cvl = (trg[2]) ? cvl+=1 : cvl;
                cva = (trg[3]) ? cva+=1 : cva;
                cva = (trg[4]) ? cva+=1 : cva;
                cva = (trg[5]) ? cva+=1 : cva;
                if( !cvl || (cvl + cva) < 3 ){
                        util.dialog( "1 - "+alertas[0] );
                        return 0;
                }
                var id = ["a","b","c","A","B","C"],
                    res = null,
                    ecu = ["", "", ""];

                for( i=0; i<6; i++ ){
                        $( "#mat-tri-"+ id[i] ).css("background-color", "#F8F8FF");
                }
                
                /* Cálculo */
                if( cvl == 3 ){

                        if( trg[0] >= (trg[1]+trg[2]) || trg[1] >= (trg[0]+trg[2]) || trg[2] >= (trg[0]+trg[1]) ){
                                util.dialog( "2 - "+alertas[2] );
                                return 0;
                        }
                        
                        trg[3] = Math.acos((Math.pow(trg[2],2)+Math.pow(trg[1],2)-Math.pow(trg[0],2))/(2*trg[1]*trg[2]));
                        trg[4] = Math.acos((Math.pow(trg[0],2)-Math.pow(trg[1],2)+Math.pow(trg[2],2))/(2*trg[0]*trg[2]));
                        trg[5] = Math.PI-(trg[3]+trg[4]);

                        if(ang){
                                trg[3] *= 180/Math.PI;
                                trg[4] *= 180/Math.PI;
                                trg[5] *= 180/Math.PI;
                        }

                        util.ponerValor( "#mat-tri-A", trg[3] );
                        util.ponerValor( "#mat-tri-B", trg[4] );
                        util.ponerValor( "#mat-tri-C", trg[5] );

                        ecu[1] = "A = sec( ( c<sup>2</sup> + b<sup>2</sup> - a<sup>2</sup> ) / ( 2 * b * c ) )<br />";
                        ecu[1] += "B = sec( ( a<sup>2</sup> + b<sup>2</sup> - c<sup>2</sup> ) / ( 2 * a * c ) )<br />";
                        ecu[1] += "C = ";
                        ecu[1] += ang ? "180" : "PI";
                        ecu[1] += " - ( A + B )<br />";
                        
                        ecu[2] = "A = sec( ( "+ util.r2( trg[2] ) +"<sup>2</sup> "+ util.r2( trg[1] ) +"<sup>2</sup> - "+ util.r2( trg[0] ) +"<sup>2</sup> ) / ( 2 * "+ util.r2( trg[1] ) +" * "+ util.r2( trg[2] ) +" ) ) = "+ util.r2( trg[3] ) +"<br />";
                        ecu[2] += "B = sec( ( "+ util.r2( trg[0] ) +"<sup>2</sup> + "+ util.r2( trg[1] ) +"<sup>2</sup> - "+ util.r2( trg[2] ) +"<sup>2</sup> ) / ( 2 * "+ util.r2( trg[0] ) +" * "+ util.r2( trg[2] ) +" ) ) = "+ util.r2( trg[4] ) +"<br />";
                        ecu[2] += "C = ";
                        ecu[2] += ang ? "180" : "PI";
                        ecu[2] += " - ( "+ util.r2( trg[3] ) +" + "+ util.r2( trg[4] ) +" ) = "+ util.r2( trg[5] );
                        
                }else if( cvl == 2 && cva >= 1 ){
                
                        if( ( ang && ( trg[3]>=180 || trg[4]>=180 || trg[5]>=180 ) ) || ( !ang && ( trg[3]>=Math.PI || trg[4]>=Math.PI || trg[5]>=Math.PI ) ) ){
                                util.dialog( "3 - "+alertas[3] );
                                return 0;
                        }
                        
                        /* Resolver angulos y lados impares */
                        for( i=3; i<6; i++ ){
                        
                                if( !trg[i] ){
                                
                                        /* Términos pares */
                                        if( trg[i-3] && trg[i-2] && trg[i+1] )
                                        {
                                                trg[i] = fn.csc( ( fn.sn( trg[i+1], ang ) * trg[i-3] ) / trg[i-2] ); res=0; if( ang ) trg[i] = fn.grad( trg[i] );
                                                ecu[1] += id[i] +" = csc( sen( "+ id[i+1] +" ) * "+ id[i-3] +" ) / "+ id[i-2] +" )<br />";
                                                ecu[2] += id[i] +" = csc( sen( "+ util.r2( trg[i+1] ) +" * "+ util.r2( trg[i-3] ) +" ) / "+ util.r2( trg[i-2] ) +" ) = "+ util.r2( trg[i] ) +"<br />";
                                        }
                                        else if( trg[i-3] && trg[i-4] && trg[i-1] )
                                        {
                                                trg[i] = fn.csc( ( fn.sn( trg[i-1], ang ) * trg[i-3] ) / trg[i-4] ); res=0; if( ang ) trg[i] = fn.grad( trg[i] );
                                                ecu[1] += id[i] +" = csc( sen( "+ id[i-1] +" ) * "+ id[i-3] +" ) / "+ id[i-4] +" )<br />";
                                                ecu[2] += id[i] +" = csc( sen( "+ util.r2( trg[i-1] ) +" * "+ util.r2( trg[i-3] ) +" ) / "+ util.r2( trg[i-4] ) +" ) = "+ util.r2( trg[i] ) +"<br />";
                                        }
                                        else if( trg[i-1] && trg[i-3] && trg[i+2] )
                                        {
                                                trg[i] = fn.csc( ( fn.sn( trg[i+2], ang ) * trg[i-3] ) / trg[i-1] ); res=0; if( ang ) trg[i] = fn.grad( trg[i] );
                                                ecu[1] += id[i] +" = csc( sen( "+ id[i+2] +" ) * "+ id[i-3] +" ) / "+ id[i-1] +" )<br />";
                                                ecu[2] += id[i] +" = csc( sen( "+ util.r2( trg[i+2] ) +" * "+ util.r2( trg[i-3] ) +" ) / "+ util.r2( trg[i-1] ) +" ) = "+ util.r2( trg[i] ) +"<br />";
                                        }
                                        else if( trg[i-2] && trg[i-3] && trg[i-5] )
                                        {
                                                trg[i] = fn.csc( ( fn.sn( trg[i-2], ang ) * trg[i-3] ) / trg[i-5] ); res=0; if( ang ) trg[i] = fn.grad( trg[i] );
                                                ecu[1] += id[i] +" = csc( sen( "+ id[i-2] +" ) * "+ id[i-3] +" ) / "+ id[i-5] +" )<br />";
                                                ecu[2] += id[i] +" = csc( sen( "+ util.r2( trg[i-2] ) +" * "+ util.r2( trg[i-3] ) +" ) / "+ util.r2( trg[i-5] ) +" ) = "+ util.r2( trg[i] ) +"<br />";
                                        }
                                        /* Términos impares */
                                        else if( trg[i-2] && trg[i-3] && trg[i+2] )
                                        {
                                                trg[i-1] = Math.sqrt( -2*trg[i-2]*trg[i-3]*fn.cs( trg[i+2], ang ) + Math.pow(trg[i-2],2) + Math.pow(trg[i-3],2) ); res=-1; 
                                                ecu[1] += id[i-1] +" = raiz2( -2 * "+ id[i-2] +" * "+ id[i-3] +" * cos( "+ id[i+2] +" ) + "+ id[i-2] +"<sup>2</sup> + "+ id[i-3] +"<sup>2</sup> )<br />";    
                                                ecu[2] += id[i-1] +" = raiz2( -2 * "+ util.r2( trg[i-2] ) +" * "+ util.r2( trg[i-3] ) +" * cos( "+ util.r2( trg[i+2] ) +" ) + "+ util.r2( trg[i-2] ) +"<sup>2</sup> + "+ util.r2( trg[i-3] ) +"<sup>2</sup> ) = "+ util.r2( trg[i-1] ) +"<br />";
                                        }
                                        else if( trg[i-1] && trg[i-3] && trg[i+1] )
                                        {
                                                trg[i-2] = Math.sqrt( -2*trg[i-1]*trg[i-3]*fn.cs( trg[i+1], ang ) + Math.pow(trg[i-1],2) + Math.pow(trg[i-3],2) ); res=-2;
                                                ecu[1] += id[i-2] +" = raiz2( -2 * "+ id[i-1] +" * "+ id[i-3] +" * cos( "+ id[i+1] +" ) + "+ id[i-1] +"<sup>2</sup> + "+ id[i-3] +"<sup>2</sup> )<br />";    
                                                ecu[2] += id[i-2] +" = raiz2( -2 * "+ util.r2( trg[i-1] ) +" * "+ util.r2( trg[i-3] ) +" * cos( "+ util.r2( trg[i+1] ) +" ) + "+ util.r2( trg[i-1] ) +"<sup>2</sup> + "+ util.r2( trg[i-3] ) +"<sup>2</sup> ) = "+ util.r2( trg[i-2] ) +"<br />";
                                        }
                                        else if( trg[i-2] && trg[i-3] && trg[i-1] )
                                        {
                                                trg[i-4] = Math.sqrt( -2*trg[i-2]*trg[i-3]*fn.cs( trg[i-1], ang ) + Math.pow(trg[i-2],2) + Math.pow(trg[i-3],2) ); res=-4;
                                                ecu[1] += id[i-4] +" = raiz2( -2 * "+ id[i-2] +" * "+ id[i-3] +" * cos( "+ id[i-1] +" ) + "+ id[i-2] +"<sup>2</sup> + "+ id[i-3] +"<sup>2</sup> )<br />";    
                                                ecu[2] += id[i-4] +" = raiz2( -2 * "+ util.r2( trg[i-2] ) +" * "+ util.r2( trg[i-3] ) +" * cos( "+ util.r2( trg[i-1] ) +" ) + "+ util.r2( trg[i-2] ) +"<sup>2</sup> + "+ util.r2( trg[i-3] ) +"<sup>2</sup> ) = "+ util.r2( trg[i-4] ) +"<br />";
                                        }

                                        if( !res ){
                                                if( util.validar( trg[i] ) ){
                                                        util.dialog( "4 - "+alertas[1] );
                                                        return 0;
                                                }
                                                util.ponerValor( "#mat-tri-"+id[i], trg[i] );
                                        }else{
                                                util.ponerValor( "#mat-tri-"+id[i+res], trg[i+res] );
                                                i--;
                                        }
                                        
                                }
                                
                        }

                        /* Completar angulos */
                        if( !trg[3] ){
                                trg[3] = (ang) ? 180-(trg[4]+trg[5]) : Math.PI-(trg[4]+trg[5]);
                                if( trg[3]<=0 ){
                                        util.dialog( "5 - "+alertas[1] );
                                        return 0;
                                }
                                ecu[1] += ang ? ( "A = 180 - ( "+ id[4] +" + "+ id[5] +" )<br />" ) : ( "PI - ( "+ id[4] +" + "+ id[5] +" )<br />" );
                                ecu[2] += ang ? ( "A = 180 - ( "+ util.r2( trg[4] ) +" + "+ util.r2( trg[5] ) +" ) = "+ util.r2( trg[3] ) +"<br />" ) : ( "PI - ( "+ util.r2( trg[4] ) +" + "+ util.r2( trg[5] ) +" ) = "+ util.r2( trg[3] ) +"<br />" );
                                util.ponerValor( "#mat-tri-"+id[3], trg[3] );
                        }
                        else if( !trg[4] ){
                                trg[4] = (ang) ? 180-(trg[3]+trg[5]) : Math.PI-(trg[3]+trg[5]);
                                if( trg[4]<=0 ){
                                        util.dialog( "6 - "+alertas[1] );
                                        return 0;
                                }
                                ecu[1] += ang ? ( "B = 180 - ( "+ id[3] +" + "+ id[5] +" )<br />" ) : ( "PI - ( "+ id[3] +" + "+ id[5] +" )<br />" );
                                ecu[2] += ang ? ( "B = 180 - ( "+ util.r2( trg[3] ) +" + "+ util.r2( trg[5] ) +" ) = "+ util.r2( trg[4] ) +"<br />" ) : ( "PI - ( "+ util.r2( trg[3] ) +" + "+ util.r2( trg[5] ) +" ) = "+ util.r2( trg[4] ) +"<br />" );
                                util.ponerValor( "#mat-tri-"+id[4], trg[4] );
                        }
                        else if( !trg[5] ){
                                trg[5] = (ang) ? 180-(trg[3]+trg[4]) : Math.PI-(trg[3]+trg[4]);
                                if( trg[5]<=0 ){
                                        util.dialog( "7 - "+alertas[1] );
                                        return 0;
                                }
                                ecu[1] += ang ? ( "C = 180 - ( "+ id[3] +" + "+ id[4] +" )<br />" ) : ( "PI - ( "+ id[3] +" + "+ id[4] +" )<br />" );
                                ecu[2] += ang ? ( "C = 180 - ( "+ util.r2( trg[3] ) +" + "+ util.r2( trg[4] ) +" ) = "+ util.r2( trg[5] ) +"<br />" ) : ( "PI - ( "+ util.r2( trg[3] ) +" + "+ util.r2( trg[4] ) +" ) = "+ util.r2( trg[5] ) +"<br />" );
                                util.ponerValor( "#mat-tri-"+id[5], trg[5] );
                        }
                        if( ( ang && ( trg[3]+trg[4]+trg[5]>180.5 ) ) || ( !ang && ( trg[3]+trg[4]+trg[5]>Math.PI*1.005 ) ) ){
                                util.dialog( "8 - "+alertas[1] );
                                return 0;
                        }
                        
                        /* Resolver lados */
                        for( i=0; i<3; i++ ){
                                
                                if( !trg[i] ){
                                
                                        if( trg[i+4] ){
                                                trg[i] = ( trg[i+1] * fn.sn( trg[i+3], ang ) ) / fn.sn( trg[i+4],ang );
                                                ecu[1] += id[i] +" = ( "+ id[i+1] +" * sen( "+ id[i+3] +" ) / sen( "+ id[i+4] +" )<br />"; 
                                                ecu[2] += id[i] +" = ( "+ util.r2( trg[i+1] ) +" * sen( "+ util.r2( trg[i+3] ) +" ) / sen( "+ util.r2( trg[i+4] ) +" ) = "+ util.r2( trg[i] ) +"<br />";
                                        }else{
                                                trg[i] = ( trg[i-1] * fn.sn( trg[i+3], ang ) ) / fn.sn( trg[i+2],ang );
                                                ecu[1] += id[i] +" = ( "+ id[i-1] +" * sen( "+ id[i+3] +" ) / sen( "+ id[i+2] +" )<br />"; 
                                                ecu[2] += id[i] +" = ( "+ util.r2( trg[i-1] ) +" * sen( "+ util.r2( trg[i+3] ) +" ) / sen( "+ util.r2( trg[i+2] ) +" ) = "+ util.r2( trg[i] ) +"<br />";
                                        }
                                        
                                        if( util.validar( trg[i] ) ){
                                                util.dialog( "9 - "+alertas[1] );
                                                return 0;
                                        }
                                        util.ponerValor( "#mat-tri-"+id[i], trg[i] );
                                
                                }
                        
                        }

                }else if( cvl == 1 && cva >= 2 ){

                        /* Completar angulos */
                        if( !trg[3] ){
                                trg[3] = (ang) ? 180-(trg[4]+trg[5]) : Math.PI-(trg[4]+trg[5]);
                                if( trg[3]<=0 ){
                                        util.dialog( "10 - "+alertas[1] );
                                        return 0;
                                }
                                ecu[1] += ang ? ( "A = 180 - ( B + C ) <br />" ) : ( "A = PI - ( B + C ) <br />" );
                                ecu[2] += ang ? ( "A = 180 - ( "+ util.r2( trg[4] ) +" + "+ util.r2( trg[5] ) +" ) = "+ util.r2( trg[3] ) +"<br />" ) : ( "A = PI - ( "+ util.r2( trg[4] ) +" + "+ util.r2( trg[5] ) +" ) = "+ util.r2( trg[3] ) +"<br />" );
                                util.ponerValor( "#mat-tri-"+id[3], trg[3] );
                        }
                        else if( !trg[4] ){
                                trg[4] = (ang) ? 180-(trg[3]+trg[5]) : Math.PI-(trg[3]+trg[5]);
                                if( trg[4]<=0 ){
                                        util.dialog( "11 - "+alertas[1] );
                                        return 0;
                                }
                                ecu[1] += ang ? ( "B = 180 - ( A + C ) <br />" ) : ( "B = PI - ( A + C ) <br />" );
                                ecu[2] += ang ? ( "B = 180 - ( "+ util.r2( trg[3] ) +" + "+ util.r2( trg[5] ) +" ) = "+ util.r2( trg[4] ) +"<br />" ) : ( "B = PI - ( "+ util.r2( trg[3] ) +" + "+ util.r2( trg[5] ) +" ) = "+ util.r2( trg[4] ) +"<br />" );
                                util.ponerValor( "#mat-tri-"+id[4], trg[4] );
                        }
                        else if( !trg[5] ){
                                trg[5] = (ang) ? 180-(trg[3]+trg[4]) : Math.PI-(trg[3]+trg[4]);
                                if( trg[5]<=0 ){
                                        util.dialog( "12 - "+alertas[1] );
                                        return 0;
                                }
                                ecu[1] += ang ? ( "C = 180 - ( A + B ) <br />" ) : ( "C = PI - ( A + B ) <br />" );
                                ecu[2] += ang ? ( "C = 180 - ( "+ util.r2( trg[3] ) +" + "+ util.r2( trg[4] ) +" ) = "+ util.r2( trg[5] ) +"<br />" ) : ( "C = PI - ( "+ util.r2( trg[3] ) +" + "+ util.r2( trg[4] ) +" ) = "+ util.r2( trg[5] ) +"<br />" );
                                util.ponerValor( "#mat-tri-"+id[5], trg[5] );
                        }
                        if( ( ang && ( trg[3]+trg[4]+trg[5]>180.5 ) ) || ( !ang && ( trg[3]+trg[4]+trg[5]>Math.PI*1.005 ) ) ){
                                util.dialog( "13 - "+alertas[1] );
                                return 0;
                        }
                        
                        /* Completar lados */
                        for( i=0; i<3; i++ ){
                        
                                if( !trg[i] ){
                                
                                        if( trg[i+1] && trg[i+3] && trg[i+4] ){
                                                
                                                trg[i] = ( trg[i+1] * fn.sn( trg[i+3], ang ) ) / fn.sn( trg[i+4], ang );
                                                ecu[1] += id[i] +" = ( "+ id[i+1] +" * sen( "+ id[i+3] +" ) ) / sen( "+ id[i+4] +" )<br />";
                                                ecu[2] += id[i] +" = ( "+ util.r2( trg[i+1] ) +" * sen( "+ util.r2( trg[i+3] ) +" ) ) / sen( "+ util.r2( trg[i+4] ) +" ) = "+ util.r2( trg[i] ) +"<br />";
                                        
                                        }else if( trg[i+2] && trg[i+3] && trg[i+5] ){
                                                
                                                trg[i] = ( trg[i+2] * fn.sn( trg[i+3], ang ) ) / fn.sn( trg[i+5], ang );
                                                ecu[1] += id[i] +" = ( "+ id[i+2] +" * sen( "+ id[i+3] +" ) ) / sen( "+ id[i+5] +" )<br />";
                                                ecu[2] += id[i] +" = ( "+ util.r2( trg[i+2] ) +" * sen( "+ util.r2( trg[i+3] ) +" ) ) / sen( "+ util.r2( trg[i+5] ) +" ) = "+ util.r2( trg[i] ) +"<br />";
                                        
                                        }else if( trg[i-1] && trg[i+2] && trg[i+3] ){
                                                
                                                trg[i] = ( trg[i-1] * fn.sn( trg[i+3], ang ) ) / fn.sn( trg[i+2], ang );
                                                ecu[1] += id[i] +" = ( "+ id[i-1] +" * sen( "+ id[i+3] +" ) ) / sen( "+ id[i+2] +" )<br />";
                                                ecu[2] += id[i] +" = ( "+ util.r2( trg[i-1] ) +" * sen( "+ util.r2( trg[i+3] ) +" ) ) / sen( "+ util.r2( trg[i+2] ) +" ) = "+ util.r2( trg[i] ) +"<br />";
                                        
                                        }
                                        if( util.validar( trg[i] ) ){
                                                util.dialog( "14 - "+alertas[1] );
                                                return 0;
                                        }
                                        util.ponerValor( "#mat-tri-"+id[i], trg[i] );
                                
                                }
                        
                        }

                }

                /* Graficación */
                graficar._work.clear();
                if( !ang ){
                        trg[3] *= (180/Math.PI);
                        trg[4] *= (180/Math.PI);
                        trg[5] *= (180/Math.PI);
                }
                res = [ [ 330, 250 ],
                        [ trg[0]+330, 250 ],
                        [ ( ( trg[1]*fn.cs( trg[5], true ) ) * -1 ) + 330 + trg[0],
                          ( trg[1]*fn.sn( trg[5], true ) * -1 ) + 250
                        ],
                        ((trg[0]+trg[1]+trg[2])/20),
                        ((trg[0]+trg[1]+trg[2])/50),
                        ((trg[0]+trg[1]+trg[2])/100)
                      ];
                var extras = [
                                graficar._work.path( "M "+ res[2][0] +","+ res[2][1] +" L "+ res[2][0] +","+ res[0][1] ).attr({ stroke: "#BBB", "stroke-width": 2, "stroke-dasharray": "--" }),
                                graficar._work.path( "M "+ res[2][0] +","+ res[0][1] +" L "+ res[0][0] +","+ res[0][1] ).attr({ stroke: "#999", "stroke-width": 2, "stroke-dasharray": "--" }),
                                null,
                                graficar._work.text( res[2][0]+res[3], res[2][1]-res[4], "A" ).attr({ font: "30px bold Arial,Helvetica" }),
                                graficar._work.text( 330+res[5], 250+res[4], "B" ).attr({ font: "30px bold Arial,Helvetica" }),
                                graficar._work.text( res[1][0]+res[4], 250+res[4], "C" ).attr({ font: "30px bold Arial,Helvetica" })
                             ];
                             
                if( ( trg[4]<=90.1 || trg[4]>100 ) && ( trg[5]<78 || trg[5]>90.1 ) ){
                        extras[2] = graficar._work.rect( res[2][0], 250-res[4], ((trg[0]+trg[1]+trg[2])/50), ((trg[0]+trg[1]+trg[2])/50) ).attr({ stroke: "#BBB", "stroke-width": 2, "stroke-dasharray": "-" });
                }else{
                        extras[2] = graficar._work.rect( res[2][0]-res[4], 250-res[4], res[4], res[4] ).attr({ stroke: "#BBB", "stroke-width": 2, "stroke-dasharray": "-" });
                }

                var gta = graficar._work.path( "M "+ res[0][0] +","+ res[0][1] +" L "+ res[1][0] +","+ res[1][1] ).attr({ stroke: "#306", "stroke-width": 3 }),
                    gtb = graficar._work.path( "M "+ res[1][0] +","+ res[1][1] +" L "+ res[2][0] +","+ res[2][1] ).attr({ stroke: "#306", "stroke-width": 3 }),
                    gtc = graficar._work.path( "M "+ res[2][0] +","+ res[2][1] +" L "+ res[0][0] +","+ res[0][1] ).attr({ stroke: "#306", "stroke-width": 3 }),

                    gtA = graficar._work.path( "M"+ ((res[3]*fn.cs(0.5*((360-(trg[3]*2)))+(180-trg[5]),true))+res[2][0]) +","+ (((res[3]*fn.sn(0.5*((360-(trg[3]*2)))+(180-trg[5]),true))*-1)+res[2][1])
                                              +" C"+ (((res[3]*1.1)*fn.cs(0.5*((360-(trg[3]*2)))+(180-trg[5])+(trg[3]/3),true))+res[2][0]) +","+ ((((res[3]*1.1)*fn.sn(0.5*((360-(trg[3]*2)))+(180-trg[5])+(trg[3]/3),true))*-1)+res[2][1])
                                              +" "+ (((res[3]*1.1)*fn.cs(0.5*((360-(trg[3]*2)))+(180-trg[5])+((trg[3]/3)*2),true))+res[2][0]) +","+ ((((res[3]*1.1)*fn.sn(0.5*((360-(trg[3]*2)))+(180-trg[5])+((trg[3]/3)*2),true))*-1)+res[2][1])
                                              +" "+ ((res[3]*fn.cs(0.5*((360-(trg[3]*2)))+(180-trg[5])+trg[3],true))+res[2][0]) +","+ (((res[3]*fn.sn(0.5*((360-(trg[3]*2)))+(180-trg[5])+trg[3],true))*-1)+res[2][1])
                                              ).attr({ stroke: "#768", "stroke-width": 2 }),

                    gtB = graficar._work.path( "M"+ (( res[3] *fn.cs(trg[4],true))+330) +","+ ((( res[3] *fn.sn(trg[4],true))*-1)+250)
                                              +" C"+ (((1.1* res[3] )*fn.cs((trg[4]/3)*2,true))+330) +","+ ((((1.1* res[3] )*fn.sn((trg[4]/3)*2,true))*-1)+250)
                                              +" "+ (((1.1* res[3] )*fn.cs(trg[4]/3,true))+330) +","+ ((((1.1* res[3] )*fn.sn(trg[4]/3,true))*-1)+250)
                                              +" "+ (res[3]+330) +",250" )
                                              .attr({ stroke: "#768", "stroke-width": 2 }),
                    
                    
                    
                    gtC = graficar._work.path( "M"+ ((res[3]*fn.cs(Math.PI))+res[1][0]) +","+ (((res[3]*fn.sn(Math.PI))*-1)+res[1][1])
                                              +" C"+ ((res[3]*1.1)*fn.cs( (180-trg[5])+((trg[5]/3)*2) ,true)+res[1][0]) +","+ (((res[3]*1.1)*fn.sn( (180-trg[5])+((trg[5]/3)*2) ,true)*-1)+res[1][1])
                                              +" "+ ((res[3]*1.1)*fn.cs( (180-trg[5])+(trg[5]/3) ,true)+res[1][0]) +","+ (((res[3]*1.1)*fn.sn( (180-trg[5])+(trg[5]/3) ,true)*-1)+res[1][1])
                                              +" "+ (res[3]*fn.cs( (180-trg[5]) ,true)+res[1][0]) +","+ ((res[3]*fn.sn( (180-trg[5]) ,true)*-1)+res[1][1])
                                              ).attr({ stroke: "#768", "stroke-width": 2 }),

                    props = [
                                ( trg[4]<92 && trg[5]<92 ) ? -(trg[0])/2 : false,
                                ( trg[1] * fn.sn( trg[5], true ) )/2
                            ];

                if( !props[0] )
                        props[0] = (trg[4]>=92) ? 330-((res[1][0]+res[2][0])/2) : (((res[0][0]+res[2][0])/2)-330)*-1;

                if( trg[4]<92 && trg[5]<92 ){
                        props[2] = 1/( trg[0] / 400 );
                }else{
                        props[2] = (trg[4]>=92) ? 1/( Math.sqrt( Math.pow( res[2][0]-res[1][0], 2 ) + Math.pow( res[2][1]-res[1][1], 2 ) ) / 500 ) : 1/( Math.sqrt( Math.pow( res[2][0]-res[0][0], 2 ) + Math.pow( res[2][1]-res[0][1], 2 ) ) / 500 );
                }
                if( trg[3] < 60 && trg[0] < trg[1] && trg[0] < trg[2] ){
                        props[2] = 1/( ( res[1][1] - res[2][1] ) / 380 );
                }
                
                gta.translate( props[0], props[1] ).scale( props[2], props[2], 330, 250 );
                gtb.translate( props[0], props[1] ).scale( props[2], props[2], 330, 250 );
                gtc.translate( props[0], props[1] ).scale( props[2], props[2], 330, 250 );
                gtA.translate( props[0], props[1] ).scale( props[2], props[2], 330, 250 );
                gtB.translate( props[0], props[1] ).scale( props[2], props[2], 330, 250 );
                gtC.translate( props[0], props[1] ).scale( props[2], props[2], 330, 250 );
                for(i=0; i<6; i++) extras[i].translate( props[0], props[1] ).scale( props[2], props[2], 330, 250 );

                $("#mat-tri-a").focus(function(){ gta.attr("stroke","#F7B138"); }).blur(function(){ gta.attr("stroke","#306"); }).change(function(){ gta.attr("stroke", "#306"); $(this).unbind("focus").unbind("blur").focus(function(){$(this).select();}); });
                $("#mat-tri-b").focus(function(){ gtb.attr("stroke","#F7B138"); }).blur(function(){ gtb.attr("stroke","#306"); }).change(function(){ gtb.attr("stroke", "#306"); $(this).unbind("focus").unbind("blur").focus(function(){$(this).select();}); });
                $("#mat-tri-c").focus(function(){ gtc.attr("stroke","#F7B138"); }).blur(function(){ gtc.attr("stroke","#306"); }).change(function(){ gtc.attr("stroke", "#306"); $(this).unbind("focus").unbind("blur").focus(function(){$(this).select();}); });
                $("#mat-tri-A").focus(function(){ gtA.attr({"stroke":"#F7B138","stroke-width":3}); }).blur(function(){ gtA.attr({"stroke":"#768","stroke-width":2}); }).change(function(){ gtA.attr({"stroke":"#768","stroke-width":2}); $(this).unbind("focus").unbind("blur").focus(function(){$(this).select();}); });
                $("#mat-tri-B").focus(function(){ gtB.attr({"stroke":"#F7B138","stroke-width":3}); }).blur(function(){ gtB.attr({"stroke":"#768","stroke-width":2}); }).change(function(){ gtB.attr({"stroke":"#768","stroke-width":2}); $(this).unbind("focus").unbind("blur").focus(function(){$(this).select();}); });
                $("#mat-tri-C").focus(function(){ gtC.attr({"stroke":"#F7B138","stroke-width":3}); }).blur(function(){ gtC.attr({"stroke":"#768","stroke-width":2}); }).change(function(){ gtC.attr({"stroke":"#768","stroke-width":2}); $(this).unbind("focus").unbind("blur").focus(function(){$(this).select();}); });

                /* Datos del triángulo */
                trg[6] = util.r2( trg[0] + trg[1] + trg[2] );       /* Parámetro */
                trg[7] = util.r2( 250 - res[2][1] );                /* Altura */
                trg[8] = util.r2( ( trg[7] * trg[0] ) / 2 );        /* Área */
                
                ecu[0] = "Par&aacute;metro: "+ util.r2(trg[0]) +" + "+ util.r2(trg[1]) +" + "+ util.r2(trg[2]) +" = "+ trg[6] +"<br />";
                ecu[0] += "Altura: "+ trg[7] +"<br />";
                ecu[0] += "&Aacute;rea: ( "+ trg[7] +" * "+ util.r2(trg[0]) +" ) / 2 = "+ trg[8];
                
                $("#data").html( "<h3>Soluci&oacute;n del Tri&aacute;ngulo</h3><p class='formulas'><strong>Caracter&iacute;sticas</strong><br /><br />"+ ecu[0] +"<br /><br /><strong>F&oacute;rmulas utilizadas</strong><br /><br />"+ ecu[1] +"<br /><strong>Ecuaciones</strong><br /><br />"+ ecu[2] +"</p>" );

        },
        
        leyohmwatt_default: function(){
                try{
                        
                        graficar.leyohmwatt(
                                [
                                    parseFloat($("#mat-low-res").val()),
                                    parseFloat($("#mat-low-ten").val()),
                                    parseFloat($("#mat-low-cor").val()),
                                    parseFloat($("#mat-low-pot").val())
                                ],
                                [
                                    parseFloat($("#mat-low-res-fac").val()),
                                    parseFloat($("#mat-low-ten-fac").val()),
                                    parseFloat($("#mat-low-cor-fac").val()),
                                    parseFloat($("#mat-low-pot-fac").val())
                                ]
                        );        
                
                }catch( e ){
                
                        util.dialog("Ha ocurrido un error!<br />Algunos de los datos introducitos pueden ser erroneos, por favor, introduscalos de nuevo.");
                
                }
        },
        
        leyohmwatt: function( vals, facts ){
        
                /* Validación */
                var count = 0,
                    ecu1 = "",
                    ecu2 = "";
                if( !util.validar( vals[0] ) && vals[0] > 0 ) count++;
                if( !util.validar( vals[1] ) && vals[1] > 0 ) count++;
                if( !util.validar( vals[2] ) && vals[2] > 0 ) count++;
                if( !util.validar( vals[3] ) && vals[3] > 0 ) count++;
                if( count != 2 ){
                        util.dialog("Debe introducir s&oacute;lo dos valores y deben ser n&uacute;meros positivos.");
                        return 0;
                }
                
                /* Calculo */
                $("#mat-low-control input[type=text]").css("background-color", "#F8F8FF");
                for(i=0; i<3; i++){
                        vals[i] *= facts[i];
                }
                if( vals[0] && vals[1] ){ /* R - T */
                        
                        vals[2] = (vals[1]/vals[0]);
                        vals[3] = (vals[1]*vals[2]);
                        util.ponerValor( $("#mat-low-cor"), vals[2] ); $("#mat-low-cor-fac").val("1");
                        util.ponerValor( $("#mat-low-pot"), vals[3] ); $("#mat-low-pot-fac").val("1");
                        ecu1 += "I = V / R<br />W = V * I<br />";
                        ecu2 += "I = "+ vals[1] +" / "+ vals[0] +" = "+ vals[2] +"<br />W = "+ vals[1] +" * "+ vals[2] +" = "+ vals[3];
                        
                }else if( vals[0] && vals[2] ){ /* R - I */
                        
                        vals[1] = (vals[0]*vals[2]);
                        vals[3] = (vals[1]*vals[2]);
                        util.ponerValor( $("#mat-low-ten"), vals[1] ); $("#mat-low-ten-fac").val("1");
                        util.ponerValor( $("#mat-low-pot"), vals[3] ); $("#mat-low-pot-fac").val("1");
                        ecu1 += "V = R * I<br />W = V * I<br />";
                        ecu2 += "V = "+ vals[0] +" * "+ vals[2] +" = "+ vals[1] +"<br />W = "+ vals[1] +" * "+ vals[2] +" = "+ vals[3];
                        
                }else if( vals[0] && vals[3] ){ /* R - W */
                
                        vals[1] = Math.sqrt(vals[0]*vals[3]);
                        vals[2] = (vals[1]/vals[0]);
                        util.ponerValor( $("#mat-low-ten"), vals[1] ); $("#mat-low-ten-fac").val("1");
                        util.ponerValor( $("#mat-low-cor"), vals[2] ); $("#mat-low-cor-fac").val("1");
                        ecu1 += "V = raiz2( R * W )<br />I = V / R<br />";
                        ecu2 += "V = raiz2( "+ vals[0] +" * "+ vals[3] +") = "+ vals[1] +"<br />I = "+ vals[1] +" / "+ vals[0] +" = "+ vals[2];
                        
                }else if( vals[1] && vals[2] ){ /* T - I */
                
                        vals[0] = (vals[1]/vals[2]);
                        vals[3] = (vals[1]*vals[2]);
                        util.ponerValor( $("#mat-low-res"), vals[0] ); $("#mat-low-res-fac").val("1");
                        util.ponerValor( $("#mat-low-pot"), vals[3] ); $("#mat-low-pot-fac").val("1");
                        ecu1 += "R = V / I<br />W = V * I<br />";
                        ecu2 += "R = "+ vals[1] +" / "+ vals[2] +" = "+ vals[0] +"<br />W = "+ vals[1] +" * "+ vals[2] +" = "+ vals[3];
                        
                }else if( vals[1] && vals[3] ){ /* T - W */
                
                        vals[0] = Math.pow(vals[1],2)/vals[3];
                        vals[2] = (vals[1]/vals[0]);
                        util.ponerValor( $("#mat-low-res"), vals[0] ); $("#mat-low-res-fac").val("1");
                        util.ponerValor( $("#mat-low-cor"), vals[2] ); $("#mat-low-cor-fac").val("1");
                        ecu1 += "R = V<sup>2</sup> / W<br />I = V / R<br />";
                        ecu2 += "R = "+ vals[1] +"<sup>2</sup> / "+ vals[3] +" = "+ vals[0] +"<br />I = "+ vals[1] +" / "+ vals[0] +" = "+ vals[2];
                        
                }else if( vals[2] && vals[3] ){ /* I - W */
                
                        vals[0] = vals[3]/Math.pow(vals[2],2);
                        vals[1] = (vals[2]*vals[0]);
                        util.ponerValor( $("#mat-low-res"), vals[0] ); $("#mat-low-res-fac").val("1");
                        util.ponerValor( $("#mat-low-ten"), vals[1] ); $("#mat-low-ten-fac").val("1");
                        ecu1 += "R = W / I<sup>2</sup><br />V = R * I<br />";
                        ecu2 += "R = "+ util.r2(vals[3]) +" / "+ util.r2(vals[2]) +"<sup>2</sup> = "+ util.r2(vals[0]) +"<br />V = "+ util.r2(vals[0]) +" * "+ util.r2(vals[2]) +" = "+ util.r2(vals[1]);
                        
                }

                /* Solución del Problema */
                $("#data").html( "<h3>Soluci&oacute;n</h3><p class='formulas'><strong>F&oacute;rmulas utilizadas</strong><br /><br />"+ ecu1 +"<br /><strong>Ecuaciones</strong><br /><br />"+ ecu2 +"</p>" )

                /* Intercambio de valores */
                $("#mat-low-control select").each(function( i, e ){
                        $(e).change(function(){
                                var tmp = vals[i];
                                if( tmp > 1 ) $(this).prev().val( tmp/$(this).val() );
                                else $(this).prev().val( tmp*$(this).val() );
                        });
                });

        }

};

var util = {
        
        dialog: function( c ){
                if( typeof c != "string" ) return 0;
                $("#avisos").html( c );
                $("#avisos").dialog("open");
        },
        
        ponerValor: function( input, val ){
                $( input ).val( val ).css("background-color","#DFF4EB").change(function(){ $(this).css("background-color","#F8F8FF"); });
        },
        
        r1: function( t ){
                t = t.toString();
                if( t.indexOf(".")>=1 ) t = t.substring( 0, t.indexOf(".")+2 );
                return parseFloat(t);
        },

        r2: function( t ){
                t = t.toString();
                if( t.indexOf(".")>=1 ) t = t.substring( 0, t.indexOf(".")+3 );
                return parseFloat(t);
        },

        validar: function( v ){
                return ( isNaN(v) || v==undefined || v==null ); 
        }

};

/* ========================================================================== */
/* Maquetación Funcional ==================================================== */
/* ========================================================================== */

$(function(){

        /* Creación y menu de Página ======================================== */
        /* ------------------------------------------------------------------ */

        $("#inicio").css("display", "block");
        graficar._work = Raphael(document.getElementById("work"), 660, 500);
        window.scrollTo(0, 0);
        
        /* Alertas - Compatiblidad con Navegadores */
        setTimeout(function(){
                if( !$.browser.mozilla ) util.dialog( "<img src='images/firefox.png' alt='Mozilla Firefox' width='88' align='right' /><span>Para obtener una mayor compatibilidad, utiliza el navegador web Mozilla Firefox versi&oacute;n 4.0 o superior.<br />Sino lo tienes, podr&aacute;s descargarlo <a href='http://www.mozilla.org/es-ES/download/?product=firefox-8.0.1&os=win&lang=es-ES'>desde este link</a>.</span>" );
        },1500);
        
        /* Scrolls de Página al intercambiar */
        $("#menu a, #lateral-derecho a").click(function(){ for(i=0; i<1500; i++){ setTimeout(function(){ window.scrollBy(0, -1); }, i); } });

        $("#menu-inicio").click(function(){

                $("#lateral-izquierdo div, #lateral-derecho div").slideUp(750);
                setTimeout('$("#inicio").slideDown(1000); $("#inicio").css("width","868px");', 750);

        });
        $("#menu-mat").click(function(){
        
                $("#lateral-izquierdo div, #lateral-derecho div").slideUp(750);
                setTimeout('$("#mat-funciones, #work, #data, #mat-submenu").slideDown(1000);', 750);
                $("#mat-submenu a").css("font-weight","normal");
                $("#mat-sub-fun").css("font-weight", "bold");
                $("#mat-submenu .submenu-content").html( contenidos[0][0][0] ); $("#data").html("");
                graficar._inter();

        });
        $("#menu-ayuda").click(function(){
        
                $("#lateral-izquierdo div, #lateral-derecho div").slideUp(750);
                setTimeout('$("#ayuda").slideDown(1000);', 750);
        
        });
        $("#menu-autor").click(function(){
        
                $("#lateral-izquierdo div, #lateral-derecho div").slideUp(750);
                setTimeout('$("#autor").slideDown(1000);', 750);
        
        });
        
        /* Intercambio de páginas =========================================== */
        /* ------------------------------------------------------------------ */

        $("#mat-sub-fun").click(function(){
                $("#lateral-izquierdo div").slideUp(750);
                setTimeout('$("#mat-funciones, #work, #data").slideDown(1000);', 750);
                $("#mat-submenu a").css("font-weight","normal");
                $(this).css("font-weight","bold");
                $("#mat-submenu .submenu-content").hide(0).html( contenidos[0][0][0] ).show( 250 ); $("#data").html("");
                graficar._inter();
        });
        $("#mat-sub-vec").click(function(){
                $("#lateral-izquierdo div").slideUp(750);
                setTimeout('$("#mat-vectores, #work, #data").slideDown(1000);', 750);
                $("#mat-submenu a").css("font-weight","normal");
                $(this).css("font-weight","bold");
                $("#mat-submenu .submenu-content").hide(0).html( contenidos[0][0][1] ).show( 250 ); $("#data").html("");
                graficar._inter();
        });
        $("#mat-sub-tri").click(function(){
                $("#lateral-izquierdo div").slideUp(750);
                setTimeout('$("#mat-triangulos, #work, #data").slideDown(1000);', 750);
                $("#mat-submenu a").css("font-weight","normal");
                $(this).css("font-weight","bold");
                $("#mat-submenu .submenu-content").hide(0).html( contenidos[0][0][2] ).show( 250 ); $("#data").html("");
                graficar._inter();
        });
        $("#mat-sub-low").click(function(){
                $("#lateral-izquierdo div").slideUp(750);
                setTimeout('$("#mat-leyohmwatt, #data").slideDown(1000);', 750);
                $("#mat-submenu a").css("font-weight","normal");
                $(this).css("font-weight","bold");
                $("#mat-submenu .submenu-content").hide(0).html( contenidos[0][0][3] ).show( 250 ); $("#data").html("");
        });

        /* Asignación de Funciones ========================================== */
        /* ------------------------------------------------------------------ */

        /* Matemáticas - Funciones */
    
                /* Matemáticas - Funciones - Constantes */
                
                var mFF = $("#mat-fun-for")[0],
                    mFED = $("#mat-fun-eje-des");
                
                /* Matemáticas - Funciones - Ejemplos */
                
                $("#mat-fun-eje-lin").click(function(){ mFED.hide( 0 ).html( contenidos[1][0][0] ).show( 250 ); $("#mat-fun-des").val("-10"); $("#mat-fun-has").val("10"); mFF.value = "(3*x) + 5"; setTimeout( 'graficar.funcion_default();', 500 ); });
                $("#mat-fun-eje-cua").click(function(){ mFED.hide( 0 ).html( contenidos[1][0][1] ).show( 250 ); $("#mat-fun-des").val("-10"); $("#mat-fun-has").val("10"); mFF.value = "( 3*pot( x, 2 ) ) - ( 6*x ) - 5"; setTimeout( 'graficar.funcion_default();', 500 ); });
                $("#mat-fun-eje-cub").click(function(){ mFED.hide( 0 ).html( contenidos[1][0][2] ).show( 250 ); $("#mat-fun-des").val("-10"); $("#mat-fun-has").val("10"); mFF.value = "( -4*pot( x, 3 ) ) + ( 7*x ) + 3"; setTimeout( 'graficar.funcion_default();', 500 ); });
                $("#mat-fun-eje-rac").click(function(){ mFED.hide( 0 ).html( contenidos[1][0][3] ).show( 250 ); $("#mat-fun-des").val("-10"); $("#mat-fun-has").val("10"); mFF.value = "( -3*x + 3 )/( 2*x - 7 )"; setTimeout( 'graficar.funcion_default();', 500 ); });
                $("#mat-fun-eje-exp").click(function(){ mFED.hide( 0 ).html( contenidos[1][0][4] ).show( 250 ); $("#mat-fun-des").val("-10"); $("#mat-fun-has").val("10"); mFF.value = "pot( 3, x )"; setTimeout( 'graficar.funcion_default();', 500 ); });
                $("#mat-fun-eje-log").click(function(){ mFED.hide( 0 ).html( contenidos[1][0][5] ).show( 250 ); $("#mat-fun-des").val("1"); $("#mat-fun-has").val("10"); mFF.value = "log( 10, 2*x ) + 4"; setTimeout( 'graficar.funcion_default();', 500 ); });
                $("#mat-fun-eje-tri").click(function(){ mFED.hide( 0 ).html( contenidos[1][0][6] ).show( 250 ); $("#mat-fun-des").val("-10"); $("#mat-fun-has").val("10"); mFF.value = "sen( x )"; setTimeout( 'graficar.funcion_default();', 500 ); });
                
                /* Matemáticas - Funciones - Editor */
                
                $("#mat-fun-control-div").click(function(){ editor.insert( mFF, "", "x", "1", 1, 2 ); });
                $("#mat-fun-control-pot").click(function(){ editor.insert( mFF, "pot", "x", "2", 1 ); });
                $("#mat-fun-control-rai").click(function(){ editor.insert( mFF, "raiz", "2", "x", 0 ); });
                $("#mat-fun-control-log").click(function(){ editor.insert( mFF, "log", "10", "x", 0 ); });
                $("#mat-fun-control-sen").click(function(){ editor.insert( mFF, "sen", "x", false, 1 ); });
                $("#mat-fun-control-cos").click(function(){ editor.insert( mFF, "cos", "x", false, 1 ); });
                $("#mat-fun-control-tan").click(function(){ editor.insert( mFF, "tan", "x", false, 1 ); });
                $("#mat-fun-control-abs").click(function(){ editor.insert( mFF, "abs", "x", false, 1 ); });
                $("#mat-fun-control-pi").click(function(){ editor.insert( mFF, "PI", "", "", 0, 1 ); });
                $("#mat-fun-control-e").click(function(){ editor.insert( mFF, "E", "", "", 0, 1 ); });

                /* Matemáticas - Funciones - Graficar */
                
                $("#mat-fun-gra").click(function(){
                        mFED.hide( 250 ).html( "" );
                        graficar.funcion_default();
                });
                
        /* Matemáticas - Vectores */
        
                /* Matemáticas - Vectores - Constantes */
                
                var mVED = $("#mat-vec-eje-des");
                
                /* Matemáticas - Vectores - Ejemplos */
                
                $("#mat-vec-eje-scr").click(function(){
                        mVED.hide(0).html(contenidos[1][1][0]).show(250);
                        $("#mat-vec-1-x").val("12"); $("#mat-vec-1-y").val("15"); $("#mat-vec-2-x").val("11"); $("#mat-vec-2-y").val("-8");
                        $("#mat-vec-coo-rec").click();
                        setTimeout(function(){ graficar.vector_default({type:1, operador:"s", anim:true}); }, 500);
                });
                $("#mat-vec-eje-scp").click(function(){
                        mVED.hide(0).html(contenidos[1][1][1]).show(250);
                        $("#mat-vec-1-mag").val("12"); $("#mat-vec-1-dir").val("45"); $("#mat-vec-2-mag").val("15"); $("#mat-vec-2-dir").val("120");
                        $("#mat-vec-coo-pol").click();
                        setTimeout(function(){ graficar.vector_default({type:0, operador:"r", anim:true}); }, 500);
                });
                
                /* Matemáticas - Vectores - Calcular */
                
                $("#mat-vec-sum").click(function(){ graficar.vector_default({type:$("#mat-vec-coo-rec")[0].checked, operador:"s", anim: true}); });
                $("#mat-vec-res").click(function(){ graficar.vector_default({type:$("#mat-vec-coo-rec")[0].checked, operador:"r", anim: true}); });

        /* Matemáticas - Triángulos */
        
                /* Matemáticas - Triángulos - Constantes */
                
                var mT = [ $("#mat-tri-a"), $("#mat-tri-b"), $("#mat-tri-c"), $("#mat-tri-A"), $("#mat-tri-B"),$("#mat-tri-C") ];
                
                /* Matemáticas - Triángulos - Ejemplos */               
                
                $("#mat-tri-eje-1").click(function(){ $("#mat-tri-ta-gra").click(); for(i=0;i<6;i++){mT[i].val("");} mT[0].val("10"); mT[1].val("10"); mT[3].val("60"); $("#mat-tri-calgra").click(); $("#mat-tri-eje-des").hide(250).html( contenidos[1][2][0] ).show(250); });
                $("#mat-tri-eje-2").click(function(){ $("#mat-tri-ta-rad").click(); for(i=0;i<6;i++){mT[i].val("");} mT[0].val("120"); mT[2].val("120"); mT[4].val("PI/2"); $("#mat-tri-calgra").click(); $("#mat-tri-eje-des").hide(250).html( contenidos[1][2][1] ).show(250); });
                $("#mat-tri-eje-3").click(function(){ $("#mat-tri-ta-gra").click(); for(i=0;i<6;i++){mT[i].val("");} mT[0].val("80"); mT[1].val("70"); mT[5].val("110"); $("#mat-tri-calgra").click(); $("#mat-tri-eje-des").hide(250).html( contenidos[1][2][2] ).show(250); });

                /* Matemáticas - Triángulos - Calcular */                
                
                $("#mat-tri-calgra").click(function(){
                        $("#mat-tri-eje-des").hide(250);
                        graficar.triangulo_default();
                });
                
        /* Matemáticas - Ley de Ohm y Watt */

                /* Matemáticas - Ley de Ohm y Watt - Calcular */                
                
                $("#mat-low-cal").click(function(){
                        graficar.leyohmwatt_default();
                });

        /* Interfaz ========================================================= */
        /* ------------------------------------------------------------------ */

        /* Verificar y Validar Formularios */
        var inpVal = $(".formula-valor-1, .formula-valor-2");
        for( i=0; i<inpVal.length; i++ ){
                $(inpVal[i]).change(function(){
                        this.value = this.value.replace(",",".");
                });
        }

        /* Matemáticas - Vectores */
        
                /* Matemáticas - Vectores - Tipos */
                
                $("#mat-vec-coo-rec").click(function(){
                        $("#mat-vec-polar").hide(250);
                        setTimeout(function(){
                                $("#mat-vec-rectangular").show(250);
                        }, 250);
                });
                $("#mat-vec-coo-pol").click(function(){
                        $("#mat-vec-rectangular").hide(250);
                        setTimeout(function(){
                                $("#mat-vec-polar").show(250);
                        }, 250);
                });
        
        /* Estilos e Interfaz =============================================== */
        /* ------------------------------------------------------------------ */

        $(".ejemplos span, .controls span[class=boton], #mat-fun-coor").button();
        if( !$.browser.msie && !$.browser.opera )
                $(".mfboton").button().css("padding","4px 5px");

        $("input[type=text][id!=mat-fun-for]").focus(function(){
                $(this).select();
        });

        $("#mat-vec-ta-gra")[0].checked = true;
        $("#mat-vec-coo-rec")[0].checked = true;
        $("#mat-tri-ta-gra")[0].checked = true;
        
        $("#mat-vec-ta, #mat-tri-ta").buttonset();
        
        $("#mat-vec-coo").buttonset().change(function(){
                $("#mat-vec-ta").toggleClass("ui-state-disabled").prev().toggleClass("ui-state-disabled");
        });
        
        $("#avisos").dialog({
            title: "Aviso",
            autoOpen: false,
            modal: true,
            show: "drop",
            hide: "drop",
            width: 310,
            buttons: {
                    Ok: function(){
                            $(this).dialog( "close" );
                    }
            }
        });
        
        $("#img-autor").propTitle();

        /* Botones Spin de la Página */
        $("#mat-fun-int").SpinButton({ min: 0.1, max: 99, step: 0.1, spinClass: "spinButton", upClass: "spinButtonUp", downClass: "spinButtonDown" });

        /* Fin ============================================================== */

        /*setTimeout(function(){
                $("#lateral-izquierdo div, #lateral-derecho div").slideUp(0);
                setTimeout('$("#mat-leyohmwatt, #data, #mat-submenu").slideDown(250);', 100);
                $("#mat-submenu a").css("font-weight","normal");
                $("#mat-sub-low").css("font-weight", "bold");
                $("#mat-submenu .submenu-content").html( contenidos[0][0][3] );
        }, 500);*/

});






