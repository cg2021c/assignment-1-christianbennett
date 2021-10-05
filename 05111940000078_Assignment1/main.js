function main() {
    /**
    * @type {HTMLCanvasElement} canvas
    */
    const canvas = document.getElementById('myCanvas');
 
   /**
    * @type {WebGLRenderingContext} gl
    */
    const context = canvas.getContext('webgl');
 
    var vertices = [
		 //item1
        ...calcWhite,...calcWhiteShad,...calcBlack,...calcBlackShad,...topScreen,...mainScreen,
		...del, ...ac,...seven,...eight,...nine,...bigBox,...stripOneH,...stripTwoH,...stripOneV,
		...stripTwoV,...stripThreeV,...stripFourV,			
	
		//item2
		...whiteBase2,...blackBase2,...blackShade2,...topScreen2,...mainScreen2,...sideShade2,
		...bigBox2, ...blueBox2,...sep1H2,...sep2H2,...sep3H2,...sep4H2,...sep1V2,...sep2V2,...sep3V2,
    ];

	console.log(vertices);
    
     var posBuff = context.createBuffer();
     context.bindBuffer(context.ARRAY_BUFFER, posBuff);
     context.bufferData(context.ARRAY_BUFFER, new Float32Array(vertices),context.STATIC_DRAW);
     context.bindBuffer(context.ARRAY_BUFFER, null);

    var vertexShaderCode = `
	attribute vec2 a_position;
	attribute vec4 a_color;
	varying vec4 v_color;
	uniform mat4 u_transform;
	void main() {
		gl_Position = u_transform * vec4(a_position, 0, 1.00);
		v_color = a_color;
	}`;
 
    var shader = context.createShader(context.VERTEX_SHADER);
    context.shaderSource(shader,vertexShaderCode);
	context.compileShader(shader);
 
    var fragment = `
    precision mediump float;
    varying vec4 v_color;
    void main() {
	     gl_FragColor = v_color;
    }`;
 
    var fragshader = context.createShader(context.FRAGMENT_SHADER);
    context.shaderSource(fragshader,fragment);
    context.compileShader(fragshader);
 
    var prog = context.createProgram();
    context.attachShader(prog, shader);
    context.attachShader(prog, fragshader);
    context.linkProgram(prog);
    var colorLocation = context.getAttribLocation(prog, "a_color");

    let colorBuffer = context.createBuffer();
    context.bindBuffer(context.ARRAY_BUFFER, colorBuffer);
    context.bufferData(context.ARRAY_BUFFER, new Float32Array(color), context.STATIC_DRAW);
    context.vertexAttribPointer(colorLocation, 4, context.FLOAT, false, 0, 0);
    context.enableVertexAttribArray(colorLocation);

    context.bindBuffer(context.ARRAY_BUFFER, posBuff);
    var aPosition = context.getAttribLocation(prog,"a_position");
    context.vertexAttribPointer(aPosition,2,context.FLOAT,false,0,0);
    context.enableVertexAttribArray(aPosition)

    let dy = 0;
    let speed = 0.0078;

    function drawScene(){
        dy >= 0.85 ? speed = -speed : speed = speed;
        dy <= -0.82 ? speed = -speed : speed = speed;
        dy += speed;
        
        context.useProgram(prog);
        const leftObject = [
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            -0.5, 0.0, 0.0, 1.0,
        ]
            
        const rightObject = [
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.5, dy, 0.0, 1.0,
        ]
            
        context.clearColor(0.6, 0.6, 0.9, 1);
        context.clear(context.COLOR_BUFFER_BIT);
		       
		let len = 6;

        const u_matrix = context.getUniformLocation(prog, 'u_transform');

		context.uniformMatrix4fv(u_matrix, false, leftObject);
        context.drawArrays(
            context.TRIANGLES, 
			0, 
            len*18,
        );

        context.uniformMatrix4fv(u_matrix, false, rightObject);
        context.drawArrays(
            context.TRIANGLES, 
            len*18, 
            len*15, 
        );
        requestAnimationFrame(drawScene);
    }
    drawScene();
 }