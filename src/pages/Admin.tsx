// import { useForm } from '@mantine/form';
import { useStyles } from "../components/Admin";
import {
  Paper,
  TextInput,
  PasswordInput,
  // Checkbox,
  Button,
  Title,
  // Text,
  // Anchor,
} from '@mantine/core';


function Admin() {
  const { classes } = useStyles();
  // const form = useForm({
    
  //   initialValues: { email:'', password: '' },
    
  //   validate: {
  //     password: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
  //     email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      
  //   },
  // });


  return (
    <div className={classes.wrapper}>
     <Paper className={classes.form} radius={0} p={30}>
      <Title order={2} className={classes.title} align="center" mt="md" mb={50}>
      Connectez-vous
      </Title>
      <TextInput label="Adresse Email" placeholder="exemple@gmail.com" size="md" />
        <PasswordInput label="Mot de passe" placeholder="Votre mot de passe" mt="md" size="md" />
        <Button <'a'> href="#" fullWidth mt="xl" size="md">
        Connectez
        </Button>

        {/* <Text align="center" mt="md">
          
          <Anchor<'a'> href="#" weight={700} onClick={(event) => event.preventDefault()}>
          Connectez
          </Anchor>
        </Text> */}
      </Paper>
    </div>

    // <Box sx={{ maxWidth: 340 }} mx="auto">
    //   <p>
    //   Voulez-vous faire une reservation?
    //   </p>
    // <form onSubmit={form.onSubmit((values) => console.log(values))}>
      
    //   <TextInput mt="sm" label="Email" placeholder="Email" {...form.getInputProps('email')} /> 
    //     <PasswordInput
    //       label="Mot de passe"
    //       placeholder="Mot de passe"
    //       {...form.getInputProps('password')}
    //     />
    // <Group position="center" mt="md">
    //     <Button type="submit" mt="sm"> Connectez</Button>
    // </Group>
    // </form>
    // </Box>
  );
}
export default Admin