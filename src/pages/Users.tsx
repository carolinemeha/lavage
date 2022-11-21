// import { useForm} from '@mantine/form';
// import { UserContainer } from '../components/Users';
// import { useState } from 'react';
// import { Calendar } from '@mantine/dates';
// import React from 'react';
import { DatePicker } from '@mantine/dates';
import {  useStyles} from "../components/Users";
import {
  Paper,
  // createStyles,
  // PasswordInput,
  // Checkbox,
  // Group,
  Button,
  Title,
  TextInput,
  // Text,
  Select,
  // Anchor,
} from '@mantine/core';



function Users() { 
  
  const { classes } = useStyles();
  // const [value, setValue] = useState(null);
  // const form = useForm({
  //   validateInputOnChange: [
  //     'nom',
  //     'prenom',
  //     'tel',
  //     'typEngin',
  //     'numPlaq',
  //     // use FORM_INDEX to reference fields indices
  //   ],
  //   initialValues: { nom: '', prenom: '', tel: "", typEngin:'', numPlaq:'' },

  //   // functions will be used to validate values at corresponding key
  //   validate: {
  //     nom: (value) => (value.length < 3 ? 'Le champ doit contenir au moins 3 caracteres' : null),
  //     prenom: (value) => (value.length < 3 ? 'Le champ doit contenir au moins 3 caracteres' : null),
  //     tel: (value) => (value.length < 10? 'Le champ doit contenir au moins 10 chiffre' : null),
  //   },
  // });

  return (

    <div className={classes.wrapper}>
     <Paper className={classes.form} radius={0} p={30}>
      <Title order={2} className={classes.title} align="center" mt="md" mb={50}>
      Bienvenu sur notre site de lavage! <br></br>
      Voulez-vous faire une reservation?

      </Title>
        <TextInput  label="Nom" placeholder="Nom" mt="md" size="md" />
         <TextInput label="Prenoms" placeholder="Prenoms" mt="sm" size="md"/>
         <TextInput label="Entrez votre numero de telephone"  // placeholder="Entrer votre numero de telephone" 
            placeholder="229-9567-8901" mt="sm"  /*{...register('email')}*//>
      <div>
        <Select style={{ marginTop: 20, zIndex: 2 }} data={['Moto', 'Voiture', 'Tricycle', 'Engins lourd', 'Moquette', 'Autres' ]} placeholder="Selectionnez un type d'engin" label="Selectionnez un type d'engin" mt="md" classNames={classes}/> 
      </div>
       <TextInput label="Le numero de la plaque" placeholder="Le numero de la plaque" mt="sm"  />
       <DatePicker style={{ marginTop: 20 }} label="Date de reservation" placeholder="Date de reservation" classNames={classes} clearable={false} />
      {/* <Group position="center" mt="md">
             <Button <'a'> href="#" type="submit" mt="sm"> Reserver</Button>
       </Group> */}
        
        <Button <'a'> href="#" fullWidth mt="xl" size="md"> Reserver </Button>
      </Paper>
    </div>

      
    
  );
}
export default Users;