import React from 'react';
import { View, Text, Pressable } from 'react-native';

interface ButtonOutlineProps{
    title:any;
    action? () => void;
    children?: React.ReactNode
}

const ButtonOutline: React.FC<ButtonOutlineProps> = ({title, action, children}: ButtonOutlineProps ) => {
  return (
    <Pressable
    className="border-2 border-neutral-400 rounded-lg justify-center items-center py-3 flex-row onPress={action}">

    </Pressable>
  );
}

export default ButtonOutline;
