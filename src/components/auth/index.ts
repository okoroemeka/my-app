import styled from 'styled-components';

const border = '1px solid #ddd;'
const Form = styled.form`
    width: 33%;
    margin: auto;
    padding-top: 64px;
    fieldset {
        display: flex;
        padding: 32px;
        box-sizing: border-box;
        flex-direction: column;
        border: ${border}
        border-radius: 8px;
        box-shadow: 8px 8px 8px #ccc;
        input {
            width: 100%;
            box-sizing: border-box;
            border: ${border}
            outline: none;
            padding: 12px;
            margin-bottom: 24px;
            margin-top: 8px;
            border-radius: 4px;
        }
        button {
            background: #2ec7c7;
        }
    }
`;

const AuthComponents = {
    Form
}

export default AuthComponents;