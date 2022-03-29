// Created by Bjorn Sandvik - thematicmapping.org

let yloader = 0;
function remove_Loader() {
  let g = document.getElementById("loader_a_div");
  g.classList.add("d-none");
}

function add_Loader(count) {
  let g = document.getElementById("progress_bar_k");
  let yu = count + "%";
  g.style.width = yu;
  g.innerHTML = yu;
}

(function () {
  var webglEl = document.getElementById("webgl");

  if (!Detector.webgl) {
    Detector.addGetWebGLMessage(webglEl);
    return;
  }

  var width = window.innerWidth,
    height = window.innerHeight;

  // Earth params
  var radius = 0.5,
    segments = 32,
    rotation = 6;

  var scene = new THREE.Scene();

  var camera = new THREE.PerspectiveCamera(45, width / height, 0.01, 1000);
  camera.position.z = 1.5;

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);

  // scene.add(new THREE.AmbientLight(0x333333));

  scene.add(new THREE.AmbientLight(0xffffff));

  var sphere = createSphere(radius, segments);
  sphere.rotation.y = rotation;
  scene.add(sphere);

  var clouds = createClouds(radius, segments);
  clouds.rotation.y = rotation;
  scene.add(clouds);

  var stars = createStars(90, 64);
  scene.add(stars);

  let sat = [];
  let satScale = 0.005;
  //   var manager = new THREE.LoadingManager();
  //Loader for Obj from Three.js
  var loader = new THREE.OBJLoader();
  loader.load(
    "images/Satellite.obj",
    function (obj) {
      obj.scale.set(satScale, satScale, satScale);
      let th = 0;
      let valuems = [
        {
          obj: null,
          theta: 0,
          position: { x: 0.1000000000000002, y: 0.6, z: -0.3 },
          rotation: { x: 10.500000000000004, y: 0, z: 0 },
          rot_done: false,
        },
        {
          obj: null,
          theta: 0,
          position: {
            x: -0.19999999999999984,
            y: -0.3000000000000001,
            z: 0.39999999999999997,
          },
          rotation: { x: 0.6000000000000001, y: -0.5999999999999999, z: 0.6 },
          rot_done: false,
        },
        {
          obj: null,
          theta: 0,
          position: {
            x: 0.19999999999999984,
            y: -0.3000000000000001,
            z: -0.39999999999999997,
          },
          rotation: { x: 0.6000000000000001, y: -0.5999999999999999, z: 0.6 },
          rot_done: false,
        },
        {
          obj: null,
          theta: 0,
          position: {
            x: -0.09999999999999984,
            y: -0.2000000000000001,
            z: -0.39999999999999997,
          },
          rotation: { x: 0.6000000000000001, y: -0.5999999999999999, z: 0.6 },
          rot_done: false,
        },
        {
          obj: null,
          theta: 0,
          position: { x: 0.1000000000000002, y: 0.6, z: -0.3 },
          rotation: { x: 10.500000000000004, y: 0, z: 0 },
          rot_done: false,
        },
        {
          obj: null,
          theta: 0,
          position: {
            x: -0.19999999999999984,
            y: -0.3000000000000001,
            z: 0.39999999999999997,
          },
          rotation: { x: 0.6000000000000001, y: -0.5999999999999999, z: 0.6 },
          rot_done: false,
        },
        {
          obj: null,
          theta: 0,
          position: {
            x: 0.19999999999999984,
            y: -0.3000000000000001,
            z: -0.39999999999999997,
          },
          rotation: { x: 0.6000000000000001, y: -0.5999999999999999, z: 0.6 },
          rot_done: false,
        },
        {
          obj: null,
          theta: 0,
          position: {
            x: -0.09999999999999984,
            y: -0.2000000000000001,
            z: -0.39999999999999997,
          },
          rotation: { x: 0.6000000000000001, y: -0.5999999999999999, z: 0.6 },
          rot_done: false,
        },
        {
          obj: null,
          theta: 0,
          position: { x: 0.1000000000000002, y: 0.6, z: -0.3 },
          rotation: { x: 10.500000000000004, y: 0, z: 0 },
          rot_done: false,
        },
        {
          obj: null,
          theta: 0,
          position: {
            x: -0.19999999999999984,
            y: -0.3000000000000001,
            z: 0.39999999999999997,
          },
          rotation: { x: 0.6000000000000001, y: -0.5999999999999999, z: 0.6 },
          rot_done: false,
        },
        {
          obj: null,
          theta: 0,
          position: {
            x: 0.19999999999999984,
            y: -0.3000000000000001,
            z: -0.39999999999999997,
          },
          rotation: { x: 0.6000000000000001, y: -0.5999999999999999, z: 0.6 },
          rot_done: false,
        },
        {
          obj: null,
          theta: 0,
          position: {
            x: -0.09999999999999984,
            y: -0.2000000000000001,
            z: -0.39999999999999997,
          },
          rotation: { x: 0.6000000000000001, y: -0.5999999999999999, z: 0.6 },
          rot_done: false,
        },
        {
          obj: null,
          theta: 0,
          position: { x: 0.1000000000000002, y: 0.6, z: -0.3 },
          rotation: { x: 10.500000000000004, y: 0, z: 0 },
          rot_done: false,
        },
        {
          obj: null,
          theta: 0,
          position: {
            x: -0.19999999999999984,
            y: -0.3000000000000001,
            z: 0.39999999999999997,
          },
          rotation: { x: 0.6000000000000001, y: -0.5999999999999999, z: 0.6 },
          rot_done: false,
        },
        {
          obj: null,
          theta: 0,
          position: {
            x: 0.19999999999999984,
            y: -0.3000000000000001,
            z: -0.39999999999999997,
          },
          rotation: { x: 0.6000000000000001, y: -0.5999999999999999, z: 0.6 },
          rot_done: false,
        },
        {
          obj: null,
          theta: 0,
          position: {
            x: -0.09999999999999984,
            y: -0.2000000000000001,
            z: -0.39999999999999997,
          },
          rotation: { x: 0.6000000000000001, y: -0.5999999999999999, z: 0.6 },
          rot_done: false,
        },
      ];
      for (let i = 0; i < valuems.length; i++) {
        let n = obj.clone();
        let vv = valuems[i]["position"];
        n.position.set(vv.y, vv.x, vv.z);
        scene.add(n);
        valuems[i]["obj"] = n;
        valuems[i]["theta"] = th++;
        sat.push(valuems[i]);
      }
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  let satScale1 = 0.00002;
  loader.load(
    "images/satobj.obj",
    function (obj) {
      obj.scale.set(satScale1, satScale1, satScale1);
      let th = 3;
      let valuems = [
        {
          obj: null,
          theta: 0,
          position: { x: 0.1000000000000002, y: 0.6, z: -0.3 },
          rotation: { x: 10.500000000000004, y: 0, z: 0 },
          rot_done: false,
        },
        {
          obj: null,
          theta: 0,
          position: {
            x: -0.19999999999999984,
            y: -0.3000000000000001,
            z: 0.39999999999999997,
          },
          rotation: { x: 0.6000000000000001, y: -0.5999999999999999, z: 0.6 },
          rot_done: false,
        },
        {
          obj: null,
          theta: 0,
          position: {
            x: 0.19999999999999984,
            y: -0.3000000000000001,
            z: -0.39999999999999997,
          },
          rotation: { x: 0.6000000000000001, y: -0.5999999999999999, z: 0.6 },
          rot_done: false,
        },
        {
          obj: null,
          theta: 0,
          position: {
            x: -0.09999999999999984,
            y: -0.2000000000000001,
            z: -0.39999999999999997,
          },
          rotation: { x: 0.6000000000000001, y: -0.5999999999999999, z: 0.6 },
          rot_done: false,
        },
        {
          obj: null,
          theta: 0,
          position: { x: 0.1000000000000002, y: 0.6, z: -0.3 },
          rotation: { x: 10.500000000000004, y: 0, z: 0 },
          rot_done: false,
        },
        {
          obj: null,
          theta: 0,
          position: {
            x: -0.19999999999999984,
            y: -0.3000000000000001,
            z: 0.39999999999999997,
          },
          rotation: { x: 0.6000000000000001, y: -0.5999999999999999, z: 0.6 },
          rot_done: false,
        },
        {
          obj: null,
          theta: 0,
          position: {
            x: 0.19999999999999984,
            y: -0.3000000000000001,
            z: -0.39999999999999997,
          },
          rotation: { x: 0.6000000000000001, y: -0.5999999999999999, z: 0.6 },
          rot_done: false,
        },
        {
          obj: null,
          theta: 0,
          position: {
            x: -0.09999999999999984,
            y: -0.2000000000000001,
            z: -0.39999999999999997,
          },
          rotation: { x: 0.6000000000000001, y: -0.5999999999999999, z: 0.6 },
          rot_done: false,
        },
        {
          obj: null,
          theta: 0,
          position: { x: 0.1000000000000002, y: 0.6, z: -0.3 },
          rotation: { x: 10.500000000000004, y: 0, z: 0 },
          rot_done: false,
        },
        {
          obj: null,
          theta: 0,
          position: {
            x: -0.19999999999999984,
            y: -0.3000000000000001,
            z: 0.39999999999999997,
          },
          rotation: { x: 0.6000000000000001, y: -0.5999999999999999, z: 0.6 },
          rot_done: false,
        },
        {
          obj: null,
          theta: 0,
          position: {
            x: 0.19999999999999984,
            y: -0.3000000000000001,
            z: -0.39999999999999997,
          },
          rotation: { x: 0.6000000000000001, y: -0.5999999999999999, z: 0.6 },
          rot_done: false,
        },
        {
          obj: null,
          theta: 0,
          position: {
            x: -0.09999999999999984,
            y: -0.2000000000000001,
            z: -0.39999999999999997,
          },
          rotation: { x: 0.6000000000000001, y: -0.5999999999999999, z: 0.6 },
          rot_done: false,
        },
        {
          obj: null,
          theta: 0,
          position: { x: 0.1000000000000002, y: 0.6, z: -0.3 },
          rotation: { x: 10.500000000000004, y: 0, z: 0 },
          rot_done: false,
        },
        {
          obj: null,
          theta: 0,
          position: {
            x: -0.19999999999999984,
            y: -0.3000000000000001,
            z: 0.39999999999999997,
          },
          rotation: { x: 0.6000000000000001, y: -0.5999999999999999, z: 0.6 },
          rot_done: false,
        },
        {
          obj: null,
          theta: 0,
          position: {
            x: 0.19999999999999984,
            y: -0.3000000000000001,
            z: -0.39999999999999997,
          },
          rotation: { x: 0.6000000000000001, y: -0.5999999999999999, z: 0.6 },
          rot_done: false,
        },
        {
          obj: null,
          theta: 0,
          position: {
            x: -0.09999999999999984,
            y: -0.2000000000000001,
            z: -0.39999999999999997,
          },
          rotation: { x: 0.6000000000000001, y: -0.5999999999999999, z: 0.6 },
          rot_done: false,
        },
      ];
      for (let i = 0; i < valuems.length; i++) {
        let n = obj.clone();
        let vv = valuems[i]["position"];
        n.position.set(vv.y, vv.x, vv.z);
        scene.add(n);
        valuems[i]["obj"] = n;
        th = th + 0.5;
        valuems[i]["theta"] = th;
        sat.push(valuems[i]);
      }
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );
  //Moon

  // let satScale2 = 0.02;
  // loader.load(
  //   "images/space.obj",
  //   function (obj) {
  //     obj.scale.set(satScale2, satScale2, satScale2);
  //     let th = 6;
  //     let valuems = [
  //       {
  //         obj: null,
  //         theta: 0,
  //         position: { x: 0.1000000000000002, y: 0.6, z: -0.3 },
  //         rotation: { x: 10.500000000000004, y: 0, z: 0 },
  //         rot_done: false,
  //       },
  //     ];
  //     for (let i = 0; i < valuems.length; i++) {
  //       let n = obj.clone();
  //       let vv = valuems[i]["position"];
  //       n.position.set(vv.y, vv.x, vv.z);
  //       scene.add(n);
  //       valuems[i]["obj"] = n;
  // 	th = th + 0.5;
  //       valuems[i]["theta"] = th;
  //       sat.push(valuems[i]);
  //     }
  //   },
  //   undefined,
  //   function (error) {
  //     console.error(error);
  //   }
  // );

  var controls = new THREE.TrackballControls(camera, renderer.domElement);

  webglEl.appendChild(renderer.domElement);

  render();

  var anime = true;
  var fgg = true;
  var r = 0.53;
  var theta = 0;

  var dTheta = -0.0005;
  var mdTheta = -0.0008;

  var fggg = 0;

  let bvalo = 0.3;

  let xc = document.getElementById("dozmi");

  function render() {
    controls.update();
    sphere.rotation.y += 0.0005;
    clouds.rotation.y += 0.0005;

    if (anime) {
      for (let x = 0; x < sat.length; x++) {
        sat[x]["theta"] += dTheta;
        sat[x]["obj"].position.x = r * Math.cos(sat[x]["theta"]);
        sat[x]["obj"].position.z = r * Math.sin(sat[x]["theta"]);
        // sat[x]["obj"].position.y = r * Math.cos(sat[x]["theta"]);
        if (fgg) {
          sat[x]["obj"].rotation.y += -mdTheta;
        }

        if (fggg < sat.length) {
          sat[x]["obj"].rotation.y = sat[x].rotation.y;
          sat[x]["obj"].rotation.x = sat[x].rotation.x;
          sat[x]["obj"].rotation.z = sat[x].rotation.z;
          fggg++;
        } else {
          if (yloader == 100) {
            remove_Loader();
          } else {
            yloader++;
            add_Loader(yloader);
          }
        }
        sat[x]["obj"].rotation.z +=
          (x % 2 === 0 ? -1 : 1) * mdTheta * Math.floor(Math.random() * 10);
      }
    }
    requestAnimationFrame(render);
    renderer.render(scene, camera);
  }

  function createSphere(radius, segments) {
    return new THREE.Mesh(
      new THREE.SphereGeometry(radius, segments, segments),
      new THREE.MeshPhongMaterial({
        map: THREE.ImageUtils.loadTexture("images/elev_bump_4k.jpg"),
        bumpMap: THREE.ImageUtils.loadTexture("images/elev_bump_4k.jpg"),
        bumpScale: 0.005,
        specularMap: THREE.ImageUtils.loadTexture("images/water_4k.png"),
        specular: new THREE.Color("grey"),
      })
    );
  }

  function createClouds(radius, segments) {
    return new THREE.Mesh(
      new THREE.SphereGeometry(radius + 0.003, segments, segments),
      new THREE.MeshPhongMaterial({
        map: THREE.ImageUtils.loadTexture("images/2_no_clouds_4k.jpg"),
        transparent: true,
      })
    );
  }

  function createStars(radius, segments) {
    return new THREE.Mesh(
      new THREE.SphereGeometry(radius, segments, segments),
      new THREE.MeshBasicMaterial({
        map: THREE.ImageUtils.loadTexture("images/galaxy_starfield.png"),
        side: THREE.BackSide,
      })
    );
  }
})();

// document.getElementById("doy").addEventListener("click", function () {
//   for (let x = 0; x < sat.length; x++) {
//     sat[xc.value].obj.position.y += bvalo;
//     console.log(sat[xc.value].obj.position);
//     console.log(sat[xc.value].obj.rotation);
//     break;
//   }
// });
// document.getElementById("dox").addEventListener("click", function () {
//   for (let x = 0; x < sat.length; x++) {
//     sat[xc.value].obj.position.x += bvalo;
//     console.log(sat[xc.value].obj.position);
//     console.log(sat[xc.value].obj.rotation);
//     break;
//   }
// });
// document.getElementById("doz").addEventListener("click", function () {
//   for (let x = 0; x < sat.length; x++) {
//     sat[xc.value].obj.position.z += bvalo;
//     console.log(sat[xc.value].obj.position);
//     console.log(sat[xc.value].obj.rotation);
//     break;
//   }
// });
// document.getElementById("doym").addEventListener("click", function () {
//   for (let x = 0; x < sat.length; x++) {
//     sat[xc.value].obj.position.y -= bvalo;
//     console.log(sat[xc.value].obj.position);
//     console.log(sat[xc.value].obj.rotation);
//     break;
//   }
// });
// document.getElementById("doxm").addEventListener("click", function () {
//   for (let x = 0; x < sat.length; x++) {
//     sat[xc.value].obj.position.x -= bvalo;
//     console.log(sat[xc.value].obj.position);
//     console.log(sat[xc.value].obj.rotation);
//     break;
//   }
// });
// document.getElementById("dozm").addEventListener("click", function () {
//   for (let x = 0; x < sat.length; x++) {
//     sat[xc.value].obj.position.z -= bvalo;
//     console.log(sat[xc.value].obj.position);
//     console.log(sat[xc.value].obj.rotation);
//     break;
//   }
// });
// document.getElementById("roy").addEventListener("click", function () {
//   for (let x = 0; x < sat.length; x++) {
//     sat[xc.value].obj.rotation.y += bvalo;
//     console.log(sat[xc.value].obj.position);
//     console.log(sat[xc.value].obj.rotation);
//     break;
//   }
// });
// document.getElementById("rox").addEventListener("click", function () {
//   for (let x = 0; x < sat.length; x++) {
//     sat[xc.value].obj.rotation.x += bvalo;
//     console.log(sat[xc.value].obj.position);
//     console.log(sat[xc.value].obj.rotation);
//     break;
//   }
// });
// document.getElementById("roz").addEventListener("click", function () {
//   for (let x = 0; x < sat.length; x++) {
//     sat[xc.value].obj.rotation.z += bvalo;
//     console.log(sat[xc.value].obj.position);
//     console.log(sat[xc.value].obj.rotation);
//     break;
//   }
// });
// document.getElementById("roym").addEventListener("click", function () {
//   for (let x = 0; x < sat.length; x++) {
//     sat[xc.value].obj.rotation.y -= bvalo;
//     console.log(sat[xc.value].obj.position);
//     console.log(sat[xc.value].obj.rotation);
//     break;
//   }
// });
// document.getElementById("roxm").addEventListener("click", function () {
//   for (let x = 0; x < sat.length; x++) {
//     sat[xc.value].obj.rotation.x -= bvalo;
//     console.log(sat[xc.value].obj.position);
//     console.log(sat[xc.value].obj.rotation);
//     break;
//   }
// });
// document.getElementById("rozm").addEventListener("click", function () {
//   for (let x = 0; x < sat.length; x++) {
//     sat[xc.value].obj.rotation.z -= bvalo;
//     console.log(sat[xc.value].obj.position);
//     console.log(sat[xc.value].obj.rotation);
//     break;
//   }
// });
