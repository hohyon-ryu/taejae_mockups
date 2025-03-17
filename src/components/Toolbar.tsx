import React, { useRef } from 'react';
import { useDrag } from 'react-dnd';
import styled from 'styled-components';
import { 
  TextFields, 
  Image, 
  CheckBox, 
  RadioButtonChecked, 
  Input,
  ViewCompact,
  SmartButton
} from '@mui/icons-material';
import { Tooltip, IconButton } from '@mui/material';

const ToolbarContainer = styled.div`
  background-color: #f0f0f0;
  border-right: 1px solid #ddd;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 60px;
`;

interface ToolItemProps {
  type: string;
  icon: React.ReactNode;
  tooltip: string;
  defaultContent?: string;
  defaultStyle?: React.CSSProperties;
}

const ToolItem: React.FC<ToolItemProps> = ({ type, icon, tooltip, defaultContent, defaultStyle }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'ELEMENT',
    item: { 
      type, 
      content: defaultContent, 
      style: defaultStyle 
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  // Connect the drag ref to our button ref
  drag(buttonRef);

  return (
    <Tooltip title={tooltip} placement="right">
      <IconButton
        ref={buttonRef}
        style={{ 
          opacity: isDragging ? 0.5 : 1,
          cursor: 'grab'
        }}
        size="large"
      >
        {icon}
      </IconButton>
    </Tooltip>
  );
};

const Toolbar: React.FC = () => {
  return (
    <ToolbarContainer>
      <ToolItem 
        type="text" 
        icon={<TextFields />} 
        tooltip="Text" 
        defaultContent="Text Element"
        defaultStyle={{ padding: '8px', minWidth: '100px', minHeight: '24px' }}
      />
      <ToolItem 
        type="image" 
        icon={<Image />} 
        tooltip="Image" 
        defaultContent="📷"
        defaultStyle={{ width: '150px', height: '150px', backgroundColor: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      />
      <ToolItem 
        type="checkbox" 
        icon={<CheckBox />} 
        tooltip="Checkbox" 
        defaultContent="☐ Checkbox"
        defaultStyle={{ padding: '8px' }}
      />
      <ToolItem 
        type="radio" 
        icon={<RadioButtonChecked />} 
        tooltip="Radio Button" 
        defaultContent="○ Radio Button"
        defaultStyle={{ padding: '8px' }}
      />
      <ToolItem 
        type="input" 
        icon={<Input />} 
        tooltip="Input Field" 
        defaultContent="Input Field"
        defaultStyle={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px', minWidth: '150px' }}
      />
      <ToolItem 
        type="button" 
        icon={<SmartButton />} 
        tooltip="Button" 
        defaultContent="Button"
        defaultStyle={{ padding: '8px 16px', backgroundColor: '#2196f3', color: 'white', borderRadius: '4px', textAlign: 'center' }}
      />
      <ToolItem 
        type="container" 
        icon={<ViewCompact />} 
        tooltip="Container" 
        defaultContent=""
        defaultStyle={{ width: '200px', height: '200px', border: '1px dashed #999', backgroundColor: 'rgba(0,0,0,0.05)' }}
      />
    </ToolbarContainer>
  );
};

export default Toolbar;
