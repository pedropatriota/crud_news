import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    padding: 30px;    
    display: flex;        
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;
    h2{
        text-transform:uppercase;
    }
    form{
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        width: 70%;
        @media only screen and (min-width: 600px){
            width: 60%; 
        }
        @media only screen and (min-width: 900px){
            width: 50%; 
        }
        @media only screen and (min-width: 1200px){
            width: 40%; 
        }        
        input{
            margin: 10px 0;
            height: 30px;
            width: 100%;
            border: 1px solid #cdcdcd;
            border-radius: 5px;
            padding: 5px;      
            
            &:hover{
                background: #f7f4f4;
            }
        }
        textarea{
            height: 120px;
            width: 100%;
            border: 1px solid #cdcdcd;
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
            
            &:hover{
                background: #f7f4f4;
            }
        }
        button{
            border: 1px solid #699AFB;
            height: 35px;
            width: 50%;
            background: #699AFB;
            color: #fff;
            border-radius: 5px;
            margin: 20px 0;
            &:hover{
                background: #5d88de;
            }
        }
    }
    
`;