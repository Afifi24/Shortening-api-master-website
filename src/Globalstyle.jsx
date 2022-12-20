
import { createGlobalStyle } from 'styled-components';

const Globalstyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
:root{
    --primary-color :#2BD0D0;
    --dark-violet-color:hsl(257, 27%, 26%);
    --red-color:hsl(0, 87%, 67%);
    --gray-color:hsl(0, 0%, 75%);
    --Grayish-Violet: hsl(257, 7%, 63%);
    --Very-Dark-Blue: hsl(255, 11%, 22%);
    --Very-Dark-Violet: hsl(260, 8%, 14%);
    --hover-color :#80e8e8;

   --transition:500ms;
}
body{
    font-family: 'Poppins', sans-serif;
}
`
export default Globalstyle