const canvas = document.querySelector("canvas");
const gl = canvas.getContext("webgl");

if (!gl) {
  throw new Error("WebGL not supported");
}

function randomColor() {
  return [Math.random(), Math.random(), Math.random()];
}

let coorX = 0.05;
let coorY = 0.05;
let coorZ = 0.05;

let vertexData = [
  
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
let vertexDataMetal = [
  
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

const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(
  vertexShader,
  vertexShaderSource
);
gl.compileShader(vertexShader);
console.log(gl.getShaderInfoLog(vertexShader));

const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(
  fragmentShader,
  fragmentShaderSource
);
gl.compileShader(fragmentShader);
console.log(gl.getShaderInfoLog(fragmentShader));

const fragmentShaderMetal = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(
  fragmentShaderMetal,
  fragmentShaderSourceMetal
);
gl.compileShader(fragmentShaderMetal);
console.log(gl.getShaderInfoLog(fragmentShaderMetal));

const shaderProgram = gl.createProgram();
gl.attachShader(shaderProgram, vertexShader);
gl.attachShader(shaderProgram, fragmentShader);
gl.linkProgram(shaderProgram);

const shaderProgramMetal = gl.createProgram();
gl.attachShader(shaderProgramMetal, vertexShader)
gl.attachShader(shaderProgramMetal, fragmentShaderMetal);
gl.linkProgram(shaderProgramMetal);

let cameraX = 0;
let cameraY = 0.5;
let cameraZ = 2.0;

let lightX = 0.0;
let lightY = 0.0;
let lightZ = 0.0;

gl.useProgram(shaderProgram);
let uView = gl.getUniformLocation(shaderProgram, "uView");
let uLightPosition = gl.getUniformLocation(shaderProgram, "uLightPosition");
let viewMatrix = glMatrix.mat4.create();
glMatrix.mat4.lookAt(
  viewMatrix,
  [cameraX, cameraY, cameraZ],
  [cameraX, 0.0, -10],
  [0.0, 1.0, 0.0]
);
gl.uniformMatrix4fv(uView, false, viewMatrix);

gl.useProgram(shaderProgramMetal);
let uViewMetal = gl.getUniformLocation(shaderProgramMetal, "uView");
let uLightPositionMetal = gl.getUniformLocation(shaderProgramMetal, "uLightPosition");
let viewMatrixMetal = glMatrix.mat4.create();
glMatrix.mat4.lookAt(
  viewMatrixMetal,
  [cameraX, cameraY, cameraZ],
  [cameraX, 0.0, -10],
  [0.0, 1.0, 0.0]
);
gl.uniformMatrix4fv(uViewMetal, false, viewMatrixMetal);

// function onKeydown(event) {
//   //Left
//   if (event.keyCode == 37) cameraX -= 0.065; 
//   //Right
//   if (event.keyCode == 39) cameraX += 0.065;
//   //Up 
//   if (event.keyCode == 38) {
//     lightY += 0.065; 
//     for (let i = 0; i < vertexData.length; i += 9) {
//       if (vertexData[i] <= 0.065 && vertexData[i] >= -0.065 && vertexData[i + 2] <= 0.065 && vertexData[i + 2] >= -0.065) {
//         vertexData[i + 1] += 0.065;
//       }
//     }
//     for (let i = 0; i < vertexDataMetal.length; i += 9) {
//       if (vertexDataMetal[i] <= 0.065 && vertexDataMetal[i] >= -0.065 && vertexDataMetal[i + 2] <= 0.065 && vertexDataMetal[i + 2] >= -0.065) {
//         vertexDataMetal[i + 1] += 0.065;
//       }
//     }
//   }
//   //Down
//   if (event.keyCode == 40) {
//     lightY -= 0.065; 
//     for (let i = 0; i < vertexData.length; i += 9) {
//       if (vertexData[i] <= 0.065 && vertexData[i] >= -0.065 && vertexData[i + 2] <= 0.065 && vertexData[i + 2] >= -0.065) {
//         vertexData[i + 1] -= 0.065;
//       }
//     }
//     for (let i = 0; i < vertexDataMetal.length; i += 9) {
//       if (vertexDataMetal[i] <= 0.065 && vertexDataMetal[i] >= -0.065 && vertexDataMetal[i + 2] <= 0.065 && vertexDataMetal[i + 2] >= -0.065) {
//         vertexDataMetal[i + 1] -= 0.065;
//       }
//     }
//   }

//   glMatrix.mat4.lookAt(
//     viewMatrix,
//     [cameraX, cameraY, cameraZ],
//     [cameraX, 0.0, -10],
//     [0.0, 1.0, 0.0]
//   );
//   glMatrix.mat4.lookAt(
//     viewMatrixMetal,
//     [cameraX, cameraY, cameraZ],
//     [cameraX, 0.0, -10],
//     [0.0, 1.0, 0.0]
//   );
// }

let modelMatrix = glMatrix.mat4.create();
let modelMatrixMetal = glMatrix.mat4.create();

document.addEventListener("keydown", onKeydown);

function renderProgram(currShader, currVertice, isMetal) {

  gl.useProgram(currShader);
  gl.enable(gl.DEPTH_TEST);

  if (isMetal)
    gl.uniformMatrix4fv(uViewMetal, false, viewMatrixMetal);
  else
    gl.uniformMatrix4fv(uView, false, viewMatrix);

  const vertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(currVertice), gl.STATIC_DRAW);

  const aPosition = gl.getAttribLocation(currShader, `aPosition`);
  gl.enableVertexAttribArray(aPosition);
  gl.vertexAttribPointer(
    aPosition,
    3,
    gl.FLOAT,
    false,
    9 * Float32Array.BYTES_PER_ELEMENT,
    0
  );

  const aColor = gl.getAttribLocation(currShader, `aColor`);
  gl.enableVertexAttribArray(aColor);
  gl.vertexAttribPointer(
    aColor,
    3,
    gl.FLOAT,
    false,
    9 * Float32Array.BYTES_PER_ELEMENT,
    3 * Float32Array.BYTES_PER_ELEMENT
  );

  const aNormal = gl.getAttribLocation(currShader, `aNormal`);
  gl.enableVertexAttribArray(aNormal);
  gl.vertexAttribPointer(
    aNormal,
    3,
    gl.FLOAT,
    false,
    9 * Float32Array.BYTES_PER_ELEMENT,
    6 * Float32Array.BYTES_PER_ELEMENT
  );

  // Lighting and Shading
  // AMBIENT
  let uAmbientConstant = gl.getUniformLocation(currShader, "uAmbientConstant");
  let uAmbientIntensity = gl.getUniformLocation(currShader, "uAmbientIntensity");
  // orange light
  // gl.uniform3fv(uAmbientConstant, [1.0, 0.5, 0.0]);
  // white light
  gl.uniform3fv(uAmbientConstant, [1.0, 1.0, 1.0]);       
  gl.uniform1f(uAmbientIntensity, 0.278);

  // DIFFUSE
  let uDiffuseConstant = gl.getUniformLocation(currShader, "uDiffuseConstant");
  let uNormalModel = gl.getUniformLocation(currShader, "uNormalModel");
  gl.uniform3fv(uDiffuseConstant, [1.0, 1.0, 1.0]);
  if (isMetal)
    gl.uniform3fv(uLightPositionMetal, [lightX, lightY, lightZ]);
  else
    gl.uniform3fv(uLightPosition, [lightX, lightY, lightZ])

  let uProjection = gl.getUniformLocation(currShader, "uProjection");
  let perspectiveMatrix = glMatrix.mat4.create();
  glMatrix.mat4.perspective(perspectiveMatrix, Math.PI / 3, 1.0, 0.5, 10.0);
  gl.uniformMatrix4fv(uProjection, false, perspectiveMatrix);

  // SPECULAR
  var uSpecularConstant = gl.getUniformLocation(currShader, "uSpecularConstant");
  var uViewerPosition = gl.getUniformLocation(currShader, "uViewerPosition");
  gl.uniform3fv(uSpecularConstant, [1.0, 1.0, 1.0]);  
  gl.uniform3fv(uViewerPosition, [cameraX, cameraY, cameraZ]);

  let uModel = gl.getUniformLocation(currShader, `uModel`);

  if (isMetal) {
    gl.uniformMatrix4fv(uModel, false, modelMatrixMetal);

    let normalModelMatrix = glMatrix.mat3.create();
    glMatrix.mat3.normalFromMat4(normalModelMatrix, modelMatrixMetal);
    gl.uniformMatrix3fv(uNormalModel, false, normalModelMatrix);
  } 
  else {
    gl.uniformMatrix4fv(uModel, false, modelMatrix);

    let normalModelMatrix = glMatrix.mat3.create();
    glMatrix.mat3.normalFromMat4(normalModelMatrix, modelMatrix);
    gl.uniformMatrix3fv(uNormalModel, false, normalModelMatrix);
  }

  gl.enable(gl.DEPTH_TEST);
  gl.drawArrays(gl.TRIANGLES, 0, vertexData.length / 9);
}

function animate() {
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  renderProgram(shaderProgramMetal, vertexDataMetal, true);
  renderProgram(shaderProgram, vertexData, false);
  requestAnimationFrame(animate);
}

animate();
