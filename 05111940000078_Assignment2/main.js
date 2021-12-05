const canvas = document.querySelector("canvas");
const gl = canvas.getContext("webgl");

if (!gl) {
  throw new Error("WebGL not supported");
}

let coorX = 0.05;
let coorY = 0.05;
let coorZ = 0.05;
 
var vertexData = [
    //item1
    //up1
    -0.75,0.035,0.4,87/255,87/255,87/255,0,1,0,
    -0.75,0.035,-0.4,87/255,87/255,87/255,0,1,0,
    -0.25,0.035,0.4,87/255,87/255,87/255,0,1,0,
    
    //up2
    -0.75,0.035,-0.4,87/255,87/255,87/255,0,1,0,
    -0.25,0.035,-0.4,87/255,87/255,87/255,0,1,0,
    -0.25,0.035,0.4,87/255,87/255,87/255,0,1,0,

    //left1
    -0.75,0.035,0.4,87/255,87/255,87/255,-1,0,0,
    -0.75,-0.035,0.4,87/255,87/255,87/255,-1,0,0,
    -0.75,-0.035,-0.4,87/255,87/255,87/255,-1,0,0,
    
    //left2
    -0.75,0.035,0.4,87/255,87/255,87/255,-1,0,0,
    -0.75,0.035,-0.4,87/255,87/255,87/255,-1,0,0,
    -0.75,-0.035,-0.4,87/255,87/255,87/255,-1,0,0,

    //bot1
    -0.75,0.035,-0.4,87/255,87/255,87/255,0,0,1,
    -0.75,-0.035,-0.4,87/255,87/255,87/255,0,0,1,
    -0.25,-0.035,-0.4,87/255,87/255,87/255,0,0,1,

    //bot2
    -0.75,0.035,-0.4,87/255,87/255,87/255,0,0,1,
    -0.25,0.035,-0.4,87/255,87/255,87/255,0,0,1,
    -0.25,-0.035,-0.4,87/255,87/255,87/255,0,0,1,

    //right1
    -0.25,0.035,-0.4,87/255,87/255,87/255,1,0,0,
    -0.25,-0.035,-0.4,87/255,87/255,87/255,1,0,0,
    -0.25,-0.035,0.4,87/255,87/255,87/255,1,0,0,

    //right2
    -0.25,0.035,-0.4,87/255,87/255,87/255,1,0,0,
    -0.25,0.035,0.4,87/255,87/255,87/255,1,0,0,
    -0.25,-0.035,0.4,87/255,87/255,87/255,1,0,0,

    //top1
    -0.25,0.035,0.4,87/255,87/255,87/255,0,0,-1,
    -0.25,-0.035,0.4,87/255,87/255,87/255,0,0,-1,
    -0.75,-0.035,0.4,87/255,87/255,87/255,0,0,-1,

    //top2
    -0.25,0.035,0.4,87/255,87/255,87/255,0,0,-1,
    -0.75,0.035,0.4,87/255,87/255,87/255,0,0,-1,
    -0.75,-0.035,0.4,87/255,87/255,87/255,0,0,-1,

    //down1
    -0.25,-0.035,0.4,87/255,87/255,87/255,0,-1,0,
    -0.75,-0.035,0.4,87/255,87/255,87/255,0,-1,0,
    -0.75,-0.035,-0.4,87/255,87/255,87/255,0,-1,0,

    //down2
    -0.75,-0.035,-0.4,87/255,87/255,87/255,0,-1,0,
    -0.25,-0.035,0.4,87/255,87/255,87/255,0,-1,0,
    -0.25,- 0.035,-0.4,87/255,87/255,87/255,0,-1,0,

    //topface1
    -0.485,0.035,0.37,0,0,0,0,1,0,
    -0.485,0.035,0.33,0,0,0,0,1,0,
    -0.315,0.035,0.33,0,0,0,0,1,0,

    //topface2
    -0.485,0.035,0.37,0,0,0,0,1,0,
    -0.315,0.035,0.37,0,0,0,0,1,0,
    -0.315,0.035,0.33,0,0,0,0,1,0,

    //face1
    -0.7,0.035,0.3,0,0,0,0,1,0,
    -0.7,0.035,0.09,0,0,0,0,1,0,
    -0.3,0.035,0.09,0,0,0,0,1,0,

    //face2
    -0.7,0.035,0.3,0,0,0,0,1,0,
    -0.3,0.035,0.3,0,0,0,0,1,0,
    -0.3,0.035,0.09,0,0,0,0,1,0,

   //item2
   //up1
   0.2,0.035,-0.25,87/255,87/255,87/255,0,1,0,
   1,0.035,-0.25,87/255,87/255,87/255,0,1,0,
   1,0.035,0.25,87/255,87/255,87/255,0,1,0,

   //up2
   0.2,0.035,-0.25,87/255,87/255,87/255,0,1,0,
   0.2,0.035,0.25,87/255,87/255,87/255,0,1,0,
   1,0.035,0.25,87/255,87/255,87/255,0,1,0,

   //left1
   0.2,0.035,-0.25,87/255,87/255,87/255,0,0,1,
   0.2,-0.035,-0.25,87/255,87/255,87/255,0,0,1,
   1,-0.035,-0.25,87/255,87/255,87/255,0,0,1,

   //left2
   0.2,0.035,-0.25,87/255,87/255,87/255,0,0,1,
   1,0.035,-0.25,87/255,87/255,87/255,0,0,1,
   1,-0.035,-0.25,87/255,87/255,87/255,0,0,1,

   //bot1
   1,0.035,-0.25,87/255,87/255,87/255,1,0,0,
   1,-0.035,-0.25,87/255,87/255,87/255,1,0,0,
   1,-0.035,0.25,87/255,87/255,87/255,1,0,0,

   //bot2
   1,0.035,-0.25,87/255,87/255,87/255,1,0,0,
   1,0.035,0.25,87/255,87/255,87/255,1,0,0,
   1,-0.035,0.25,87/255,87/255,87/255,1,0,0,

   //right1
   1,0.035,0.25,87/255,87/255,87/255,0,0,-1,
   1,-0.035,0.25,87/255,87/255,87/255,0,0,-1,
   0.2,-0.035,0.25,87/255,87/255,87/255,0,0,-1,

   //right2
   1,0.035,0.25,87/255,87/255,87/255,0,0,-1,
   0.2,0.035,0.25,87/255,87/255,87/255,0,0,-1,
   0.2,-0.035,0.25,87/255,87/255,87/255,0,0,-1,

   //top1
   0.2,0.035,0.25,87/255,87/255,87/255,-1,0,0,
   0.2,-0.035,0.25,87/255,87/255,87/255,-1,0,0,
   0.2,-0.035,-0.25,87/255,87/255,87/255,-1,0,0,

   //top2
   0.2,0.035,0.25,87/255,87/255,87/255,-1,0,0,
   0.2,0.035,-0.25,87/255,87/255,87/255,-1,0,0,
   0.2,-0.035,-0.25,87/255,87/255,87/255,-1,0,0,

   //down1
   0.2,-0.035,-0.25,87/255,87/255,87/255,0,-1,0,
   1,-0.035,-0.25,87/255,87/255,87/255,0,-1,0,
   1,-0.035,0.25,87/255,87/255,87/255,0,-1,0,

   //down2
   0.2,-0.035,-0.25,87/255,87/255,87/255,0,-1,0,
   0.2,-0.035,0.25,87/255,87/255,87/255,0,-1,0,
   1,-0.035,0.25,87/255,87/255,87/255,0,-1,0,
   
   //topface1
   0.225,0.035,0,0,0,0,0,1,0,
   0.275,0.035,0,0,0,0,0,1,0,
   0.275,0.035,0.2,0,0,0,0,1,0,

   //topface2
   0.225,0.035,0,0,0,0,0,1,0,
   0.225,0.035,0.2,0,0,0,0,1,0,
   0.275,0.035,0.2,0,0,0,0,1,0,

   //face1
   0.295,0.035,-0.2,0,0,0,0,1,0,
   0.505,0.035,-0.2,0,0,0,0,1,0,
   0.505,0.035,0.2,0,0,0,0,1,0,

   //face2
   0.295,0.035,-0.2,0,0,0,0,1,0,
   0.295,0.035,0.2,0,0,0,0,1,0,
   0.505,0.035,0.2,0,0,0,0,1,0,

   //light cube
   //front1
   -coorX,coorY,coorZ,1,1,1,0,0,-1,
   -coorX,-coorY,coorZ,1,1,1,0,0,-1,
   coorX,-coorY,coorZ,1,1,1,0,0,-1,

   //front2
   -coorX,coorY,coorZ,1,1,1,0,0,-1,
   coorX,coorY,coorZ,1,1,1,0,0,-1,
   coorX,-coorY,coorZ,1,1,1,0,0,-1,

   //bot1
   coorX,-coorY,-coorZ,1,1,1,0,1,0,
   coorX,-coorY,coorZ,1,1,1,0,1,0,
   -coorX,-coorY,coorZ,1,1,1,0,1,0,

   //bot2
   coorX,-coorY,-coorZ,1,1,1,0,1,0,
   -coorX,-coorY,-coorZ,1,1,1,0,1,0,
   -coorX,-coorY,coorZ,1,1,1,0,1,0,

   //back1
   -coorX,-coorY,-coorZ,1,1,1,0,0,1,
   -coorX,coorY,-coorZ,1,1,1,0,0,1,
   coorX,coorY,-coorZ,1,1,1,0,0,1,

   //back2
   -coorX,-coorY,-coorZ,1,1,1,0,0,1,
   coorX,-coorY,-coorZ,1,1,1,0,0,1,
   coorX,coorY,-coorZ,1,1,1,0,0,1,

   //top1
   -coorX,coorY,-coorZ,1,1,1,0,-1,0,
   -coorX,coorY,coorZ,1,1,1,0,-1,0,
   coorX,coorY,coorZ,1,1,1,0,-1,0,

   //top2
   -coorX,coorY,-coorZ,1,1,1,0,-1,0,
   coorX,coorY,-coorZ,1,1,1,0,-1,0,
   coorX,coorY,coorZ,1,1,1,0,-1,0,

   //left1
   -coorX,-coorY,-coorZ,1,1,1,1,0,0,
   -coorX,-coorY,coorZ,1,1,1,1,0,0,
   -coorX,coorY,coorZ,1,1,1,1,0,0,

   //left2
   -coorX,-coorY,-coorZ,1,1,1,1,0,0,
   -coorX,coorY,-coorZ,1,1,1,1,0,0,
   -coorX,coorY,coorZ,1,1,1,1,0,0,

   //right1
   coorX,coorY,-coorZ,1,1,1,-1,0,0,
   coorX,coorY,coorZ,1,1,1,-1,0,0,
   coorX,-coorY,coorZ,1,1,1,-1,0,0,

   //right2
   coorX,coorY,-coorZ,1,1,1,-1,0,0,
   coorX,-coorY,-coorZ,1,1,1,-1,0,0,    
   coorX,-coorY,coorZ,1,1,1,-1,0,0,
    
];

const vertexBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER,vertexBuffer);
gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(vertexData),gl.STATIC_DRAW);

const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(
 vertexShader,
 `
   precision mediump float;
   attribute vec3 aPosition;
   attribute vec3 aColor;
   attribute vec3 aNormal;
   varying vec3 vPosition;
   varying vec3 vColor;
   varying vec3 vNormal;  
   uniform mat4 uModel;
   uniform mat4 uView;
   uniform mat4 uProjection;
   void main() {
     vec4 originalPosition = vec4(aPosition,1.0);
     gl_Position = uProjection * uView * uModel * originalPosition;
     vPosition = (uModel * originalPosition).xyz;
     vColor = aColor;
     vNormal = aNormal;
   }
 `
);
gl.compileShader(vertexShader);
console.log(gl.getShaderInfoLog(vertexShader));

const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(
 fragmentShader,
 `
   precision mediump float;
   varying vec3 vPosition;
   varying vec3 vColor;
   varying vec3 vNormal;
   uniform vec3 uAmbientConstant;   // Represents the light color
   uniform float uAmbientIntensity;
   uniform vec3 uDiffuseConstant;  // Represents the light color
   uniform vec3 uLightPosition;
   uniform mat3 uNormalModel;
   uniform vec3 uSpecularConstant; // Represents the light color
   uniform vec3 uViewerPosition;
   void main() {
       // Calculate the ambient effect
       vec3 ambient = uAmbientConstant * uAmbientIntensity;
       // Calculate the diffuse effect
       vec3 normalizedNormal = normalize(uNormalModel * vNormal);
       vec3 vLight = uLightPosition - vPosition;
       vec3 normalizedLight = normalize(vLight);
       vec3 diffuse = vec3(0.,0.,0.);
       float cosTheta = max(dot(normalizedNormal,normalizedLight),0.);
       
       // Prepare the specular components
       vec3 vReflector = 2.0 * cosTheta * vNormal - (vLight);
       // or using the following expression
       // vec3 vReflector = reflect(-vLight,vNormal);
       vec3 vViewer = uViewerPosition - vPosition;
       vec3 normalizedViewer = normalize(vViewer);
       vec3 normalizedReflector = normalize(vReflector);
       float shininessConstant = 100.0;
       vec3 specular = vec3(0.,0.,0.);
       float cosPhi = max(dot(normalizedViewer,normalizedReflector),0.);
       
       // Calculate the phong reflection effect
       if (cosTheta > 0.) {
           diffuse = uDiffuseConstant * cosTheta;
       }
       if (cosPhi > 0.) {
           specular = uSpecularConstant * pow(cosPhi,shininessConstant);
       }
       vec3 phong = ambient + diffuse + specular;
       // Apply the shading
       gl_FragColor = vec4(phong * vColor,1.);
   }
 `
);
gl.compileShader(fragmentShader);
console.log(gl.getShaderInfoLog(fragmentShader));

const program = gl.createProgram();
gl.attachShader(program,vertexShader);
gl.attachShader(program,fragmentShader);

gl.linkProgram(program);

const aPosition = gl.getAttribLocation(program,`aPosition`);
gl.enableVertexAttribArray(aPosition);
gl.vertexAttribPointer(
 aPosition,
 3,
 gl.FLOAT,
 false,
 9 * Float32Array.BYTES_PER_ELEMENT,
 0
);

const aColor = gl.getAttribLocation(program,`aColor`);
gl.enableVertexAttribArray(aColor);
gl.vertexAttribPointer(
 aColor,
 3,
 gl.FLOAT,
 false,
 9 * Float32Array.BYTES_PER_ELEMENT,
 3 * Float32Array.BYTES_PER_ELEMENT
);

const aNormal = gl.getAttribLocation(program,`aNormal`);
gl.enableVertexAttribArray(aNormal);
gl.vertexAttribPointer(
 aNormal,
 3,
 gl.FLOAT,
 false,
 9 * Float32Array.BYTES_PER_ELEMENT,
 6 * Float32Array.BYTES_PER_ELEMENT
);

gl.useProgram(program);
gl.enable(gl.DEPTH_TEST);

// Lighting and Shading
// AMBIENT
let uAmbientConstant = gl.getUniformLocation(program,"uAmbientConstant");
let uAmbientIntensity = gl.getUniformLocation(program,"uAmbientIntensity");
// gl.uniform3fv(uAmbientConstant,[1.0,0.5,0.0]);    // orange light
gl.uniform3fv(uAmbientConstant,[1.0,1.0,1.0]);       // white light
gl.uniform1f(uAmbientIntensity,0.278); 

// DIFFUSE
let uDiffuseConstant = gl.getUniformLocation(program,"uDiffuseConstant");
let uLightPosition = gl.getUniformLocation(program,"uLightPosition");
let uNormalModel = gl.getUniformLocation(program,"uNormalModel");
gl.uniform3fv(uDiffuseConstant,[1.0,1.0,1.0]);   // white light
let lightX = 0.0;
let lightY = 0.0;
let lightZ = 0.0;
gl.uniform3fv(uLightPosition,[lightX,lightY,lightZ]);  // light position

let uProjection = gl.getUniformLocation(program,"uProjection");
let perspectiveMatrix = glMatrix.mat4.create();
glMatrix.mat4.perspective(perspectiveMatrix,Math.PI / 3,1.0,0.5,10.0);
gl.uniformMatrix4fv(uProjection,false,perspectiveMatrix);

let cameraX = 0;
let cameraY = 0.5;
let cameraZ = 2.0;
let uView = gl.getUniformLocation(program,"uView");
let viewMatrix = glMatrix.mat4.create();
glMatrix.mat4.lookAt(
 viewMatrix,
 [cameraX,cameraY,cameraZ],   // the location of the eye or the camera
 [cameraX,0.0,-10],       // the point where the camera is looking at
 [0.0,1.0,0.0]
);
gl.uniformMatrix4fv(uView,false,viewMatrix);
function onKeydown(event) {
 if (event.keyCode == 65) cameraX -= 0.065; // Left
 if (event.keyCode == 68) cameraX += 0.065; // Right
 if (event.keyCode == 38) cameraY += 0.065; // Up
 if (event.keyCode == 40) cameraY -= 0.065; // Down

 if (event.keyCode == 87) {
   lightY += 0.065; // Up 
   for (let i = 0; i < vertexData.length; i += 9) {
     if (vertexData[i] <= 0.065 && vertexData[i] >= -0.065 && vertexData[i + 2] <= 0.065 && vertexData[i + 2] >= -0.065) {
       vertexData[i + 1] += 0.065;
     }
   }
   gl.uniform3fv(uLightPosition,[lightX,lightY,lightZ]);  // light position
 }
 if (event.keyCode == 83) {
   lightY -= 0.065; // Down
   for (let i = 0; i < vertexData.length; i += 9) {
     if (vertexData[i] <= 0.065 && vertexData[i] >= -0.065 && vertexData[i + 2] <= 0.065 && vertexData[i + 2] >= -0.065) {
       vertexData[i + 1] -= 0.065;
       gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(vertexData),gl.STATIC_DRAW);
     }
   }
 }

 glMatrix.mat4.lookAt(
   viewMatrix,
   [cameraX,cameraY,cameraZ],   // the location of the eye or the camera
   [cameraX,0.0,-10],       // the point where the camera look at
   [0.0,1.0,0.0]
 );
 gl.uniformMatrix4fv(uView,false,viewMatrix);
 gl.uniform3fv(uLightPosition,[lightX,lightY,lightZ]);  // light position
 gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(vertexData),gl.STATIC_DRAW);
}

document.addEventListener("keydown",onKeydown);

// SPECULAR
var uSpecularConstant = gl.getUniformLocation(program,"uSpecularConstant");
var uViewerPosition = gl.getUniformLocation(program,"uViewerPosition");
gl.uniform3fv(uSpecularConstant,[1.0,1.0,1.0]);  // white light
gl.uniform3fv(uViewerPosition,[cameraX,cameraY,cameraZ]);

let uModel = gl.getUniformLocation(program,`uModel`);

let modelMatrix = glMatrix.mat4.create();

function animate() {
//  glMatrix.mat4.rotateY(modelMatrix,modelMatrix,Math.PI / 2 / 70);   

 gl.uniformMatrix4fv(uModel,false,modelMatrix);

 let normalModelMatrix = glMatrix.mat3.create();
 glMatrix.mat3.normalFromMat4(normalModelMatrix,modelMatrix);
 gl.uniformMatrix3fv(uNormalModel,false,normalModelMatrix);

 gl.enable(gl.DEPTH_TEST);
 gl.clearColor(0.0,0.0,0.0,0.2);
 gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
 gl.drawArrays(gl.TRIANGLES,0,vertexData.length / 9);
 requestAnimationFrame(animate);
}

animate();
