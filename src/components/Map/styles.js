import styled,{css} from 'styled-components'
import {Platform} from 'react-native';
export const LocationBox = styled.View`
    background:#FFF;
    shadow-color:#000;
    shadow-offset:0 0;
    elevation: 1;
    border: 1px solid #ddd;
    border-radius:3px;
    flex-direction:row;
    ${Platform.select({
        ios:css`
            margin-top:20px
        `,
        android:css`
            margin-top:10px;
            margin-left:10px;
        `
    })}
`;

export const LocationText = styled.Text`
    margin:8px 10px;
    color: #333;
    font-size:14px
`;

export const LocationTimeBox = styled.View`
    background:#222;
    padding:3px 8px;

`;

export const LocationTimeText = styled.Text`
    color:#fff;
    font-size:12px;
    text-align:center;
`;

export const LocationTimeTextSmall = styled.Text`
    color:#fff;
    font-size:10;
    text-align:center;
`;