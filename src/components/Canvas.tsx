import React, { useState, useRef } from 'react';
import { useDrop } from 'react-dnd';
import styled from 'styled-components';

const CanvasContainer = styled.div`
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  min-height: 600px;
  position: relative;
  flex: 1;
  overflow: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

interface CanvasElement {
  id: string;
  type: string;
  content: string;
  position: { x: number; y: number };
  style: React.CSSProperties;
}

interface CanvasProps {
  zoom: number;
}

const Canvas: React.FC<CanvasProps> = ({ zoom }) => {
  const [elements, setElements] = useState<CanvasElement[]>([]);
  const canvasRef = useRef<HTMLDivElement>(null);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'ELEMENT',
    drop: (item: any, monitor) => {
      const offset = monitor.getClientOffset();
      if (offset) {
        const canvasRect = document.getElementById('canvas')?.getBoundingClientRect();
        if (canvasRect) {
          const x = offset.x - canvasRect.left;
          const y = offset.y - canvasRect.top;
          
          const newElement: CanvasElement = {
            id: `element-${Date.now()}`,
            type: item.type,
            content: item.content || 'New Element',
            position: { x, y },
            style: item.style || {},
          };
          
          setElements([...elements, newElement]);
        }
      }
      return undefined;
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  // Connect the drop ref to our canvas ref
  drop(canvasRef);

  return (
    <CanvasContainer 
      id="canvas"
      ref={canvasRef} 
      className={`${isOver ? 'bg-blue-50' : ''}`}
      style={{ transform: `scale(${zoom})`, transformOrigin: 'top left' }}
    >
      {elements.map((element) => (
        <div
          key={element.id}
          style={{
            position: 'absolute',
            left: `${element.position.x}px`,
            top: `${element.position.y}px`,
            ...element.style,
          }}
        >
          {element.content}
        </div>
      ))}
    </CanvasContainer>
  );
};

export default Canvas;
