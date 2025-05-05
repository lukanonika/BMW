import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

function Model(props) {
  const { scene } = useGLTF("./bmw.glb");
  return <primitive object={scene} {...props} />
}

function Carpage() {
  return (
    <Canvas className=" z-5  " dpr={[1,2]} shadows camera={{ fov: 45 }} style={{position: "absolute",  background: "rgb(1, 2, 31)" }}>
      
      
        <Stage environment={"sunset"} 
         shadows={true} preset="rembrandt" intensity={1} contactShadow={true}
        >
          <PresentationControls speed={2} global zoom={0.9} polar={[-0.1, Math.PI / 4]}>

          <Model scale={0.9}  rotation={[0, Math.PI / 2, 0]} />

          </PresentationControls>
        </Stage>
      

      
    </Canvas>

  
  );
}

export default Carpage;