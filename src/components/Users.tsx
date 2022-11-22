// import styled from '@emotion/styled';
// import { PasswordInput } from '@mantine/core';
import { createStyles } from "@mantine/core";

// export const UserContainer = styled.div`
// label {
//     display: block;
//     font: 1rem 'Fira Sans', sans-serif;
// }

// input,
// label {
//     margin: .4rem 0;
// }
// `
// export const UserPasswordInput =styled(PasswordInput)`
// .titre-principale{
//     text-align: left;
// }

// .form{
//     display: flex;
//     flex-direction: column;
//     margin: 1rem 0;
// }

// .form-group{
//     display: flex;
//     flex-direction: column;
//     text-align: left;
//     margin: 15px;
// }
// label{
//     font-size: 1rem;
//     color: #646464;
// }

// .form-control{
//     height: 2rem;
//     font-size: large;
//     border-radius: 0.2rem;
//     border: solid 1px #bbb;
//     font-size: 1rem;
//     color: #646464;
// }

// .btn-create{
//     background: #0e6607;
//     color: #fff;
//     padding: 0.7rem;
//     border-radius: 0.3rem;
//     border: none;
//     width: 150px;
//     font-size: 1.2rem;
//     text-align: center;
//     width: 100%;
// }

// .btn-danger{
//     background: #fc1f02;
//     color: #fff;
// }

// .not-found{
//     text-align: left;
//     margin-top: 3rem;
// }

// .not-found a{
//     text-decoration: none;
//     color: #028bfc;
//     font-weight: normal;
//     font-size: 1.2rem;
// }
// `
export const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundSize: "cover",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='%236f6868' fill-opacity='0.04'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E")`,
    textAlign: "left",
  },

  form: {
    minHeight: 900,
    maxWidth: 450,
    paddingTop: 80,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  logo: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    width: 120,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));
