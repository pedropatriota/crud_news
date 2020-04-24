import styled from "styled-components"
import { Form as Unform } from '@rocketseat/unform';
import { Input as UnformContent } from '@rocketseat/unform';
import { Input as UnformInput } from '@rocketseat/unform';

export const Form = styled(Unform)`
  width: 100%; 
  height:150px;
  border-radius: 5px;
  border: 1px solid #cdcdcd;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start; 
  margin-bottom: 10px;   
`; 

export const InputContent = styled(UnformContent)`
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 5px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 12px;
  } 
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);  
    border-radius: 10px;
  } 
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
    box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
  }
  &:hover{
    background: #f7f4f4;
  }
`;



export const Input = styled(UnformInput)`
  height: 25px;
  width: 100%;
  border: 1px solid #cdcdcd;
  border-radius: 5px;
  padding: 5px;
  &:hover{
    background: #f7f4f4;
  }
`;

  