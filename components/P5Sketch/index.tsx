import dynamic from 'next/dynamic'

// Prevents undefined window error caused by p5.js
const DynamicP5Sketch = dynamic(() => import('components/P5Sketch/P5Sketch'), { ssr: false });

export default DynamicP5Sketch
