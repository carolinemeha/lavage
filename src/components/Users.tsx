// import styled from '@emotion/styled';
// import { PasswordInput } from '@mantine/core';
import { createStyles } from '@mantine/core';

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
        // minHeight: 900,
        backgroundSize: 'cover',
        backgroundImage:
          'url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)',
      },

      form: {
        borderRight: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
        }`,
        minHeight: 900,
        maxWidth: 450,
        paddingTop: 80,
    
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
          maxWidth: '100%',
        },
      },

      title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      },
    
      logo: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        width: 120,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    }));
//   root: {
//     position: 'relative',
//   },

//   input: {
//     height: 'auto',
//     paddingTop: 18,
//   },

//   label: {
//     position: 'absolute',
//     pointerEvents: 'none',
//     fontSize: theme.fontSizes.xs,
//     paddingLeft: theme.spacing.sm,
//     paddingTop: theme.spacing.sm / 2,
//     zIndex: 1,
//   },

