import styled from 'styled-components'

export const TableWrapper = styled.div`
    width: 100%;
    height: 100vh;
    padding: 20px;
    display: flex;
    justify-content: center;    
    table{
        width:90%;        
        border-collapse: collapse;
        border-radius: 1em 1em 0 0;
        overflow: hidden;
        margin-bottom: 80px;

    }
    tr:nth-child(even){
        background-color: #f2f2f2;        
    }
    tr:hover{
        background-color: #ddd;
    }
    th{
        text-transform: uppercase;
        height: 50px;
        background: #55595d;
        color: #f2f2f2;         
    }
    td, th {
    padding: 8px;
    text-align: center;
    border: 1px solid #ddd;
    &:nth-child(2){
        max-width:300px;
        overflow: hidden;
        }
    }
    button[name='editar']{
        border: 1px solid #54ad5f;
        background: #54ad5f;
        border-radius: 5px;
        width: 50%;
        height: 100%;
        color: #fff;
    }
    button[name='deletar']{
        border: 1px solid #cc5f5f;
        background: #cc5f5f;
        border-radius: 5px;
        width: 50%;
        height: 100%;
        color: #fff;
    }
`;