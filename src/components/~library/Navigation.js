import styled from 'styled-components';

const Navigation = styled.nav`
    background-color: lightgrey;

    > ul {
        margin: 0;
        padding: 4px;

        > li {
            display: inline-block;
            margin-right: 1em;
        }
    }
`;

export default Navigation;