import styled from "styled-components"

export const LeftWrapper = styled.div`  
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content:space-evenly;
    align-items: center;  
`;

export const NewsTitle = styled.div`
  display:flex;
  height: 75px;  
  justify-content: space-evenly;
  align-items:center;
  flex-direction:column; 
  h2{
    text-transform:uppercase;
  }
`;

export const NewsOptions = styled.div`
  display:flex;
  width: 100%;
  height: 75px;  
  justify-content: center ;
  align-items:center;
  flex-direction: row ;
  button{
    border-radius: 5px;
    height: 30px;
    width: 85px;
    border: none;
    text-transform: uppercase;
    font-size: 10px;
    letter-spacing: 1px;    
    color: #fff;
    font-weight: bold;
    &:first-child{
      background: #54ad5f;
      margin-right: 10px;
      &:hover{
        background: #5ab966;
      }
    }
    &:last-child{
      background: #cc5f5f;
      margin-left: 10px;
      &:hover{
        background: #e47272;
      }
    }
  }
`;
    
export const NewsContent = styled.div`
  padding: 10px;
  height:100%;
  width: 50%;  
  border-left: 1px solid #cdcdcd;
  text-align: left;
  font-size: 13px;
  overflow: hidden;
`;        