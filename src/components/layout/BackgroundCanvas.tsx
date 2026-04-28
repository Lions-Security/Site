import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 80;

    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Particles
    const PARTICLE_COUNT = 180;
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const particles: { x: number; y: number; z: number; vx: number; vy: number; vz: number }[] = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = (Math.random() - 0.5) * 160;
      const y = (Math.random() - 0.5) * 100;
      const z = (Math.random() - 0.5) * 60;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      particles.push({
        x,
        y,
        z,
        vx: (Math.random() - 0.5) * 0.04,
        vy: (Math.random() - 0.5) * 0.04,
        vz: (Math.random() - 0.5) * 0.02,
      });
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.PointsMaterial({
      color: 0x2d35ff,
      size: 0.8,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const pointCloud = new THREE.Points(geo, mat);
    scene.add(pointCloud);

    // Lines
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x1a1f6e,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });

    let linesMesh: THREE.LineSegments | null = null;

    const buildLines = () => {
      const linePositions: number[] = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dz = particles[i].z - particles[j].z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist < 22) {
            linePositions.push(particles[i].x, particles[i].y, particles[i].z);
            linePositions.push(particles[j].x, particles[j].y, particles[j].z);
          }
        }
      }
      if (linesMesh) scene.remove(linesMesh);
      const lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(linePositions), 3));
      linesMesh = new THREE.LineSegments(lineGeo, lineMat);
      scene.add(linesMesh);
    };

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.6;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.4;
    };

    document.addEventListener('mousemove', handleMouseMove);

    let frame = 0;
    let requestRef: number;

    const animate = () => {
      frame++;

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles[i].x += particles[i].vx;
        particles[i].y += particles[i].vy;
        particles[i].z += particles[i].vz;
        if (Math.abs(particles[i].x) > 80) particles[i].vx *= -1;
        if (Math.abs(particles[i].y) > 50) particles[i].vy *= -1;
        if (Math.abs(particles[i].z) > 30) particles[i].vz *= -1;
        positions[i * 3] = particles[i].x;
        positions[i * 3 + 1] = particles[i].y;
        positions[i * 3 + 2] = particles[i].z;
      }
      geo.attributes.position.needsUpdate = true;

      if (frame % 3 === 0) buildLines();

      camera.position.x += (mouseX * 8 - camera.position.x) * 0.04;
      camera.position.y += (-mouseY * 5 - camera.position.y) * 0.04;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
      requestRef = requestAnimationFrame(animate);
    };

    buildLines();
    requestRef = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(requestRef);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="three-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.55,
      }}
    />
  );
};

export default BackgroundCanvas;
