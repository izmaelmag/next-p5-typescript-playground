import dynamic from 'next/dynamic'
const DynamicP5Sketch = dynamic(() => import('components/P5Sketch/P5Sketch'), { ssr: false });
export default DynamicP5Sketch
