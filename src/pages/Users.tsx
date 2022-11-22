import { DatePicker } from "@mantine/dates";
import { useStyles } from "../components/Users";
import { Paper, Button, Title, TextInput, Select } from "@mantine/core";

function Users() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}
        
      >
        <Title
          order={2}
          className={classes.title}
          align="center"
          mt="md"
          mb={50}
        >
          Bienvenu sur notre site de lavage! <br></br>
          Voulez-vous faire une reservation?
        </Title>
        <TextInput label="Nom" placeholder="Nom" mt="md" size="md" />
        <TextInput label="Prenoms" placeholder="Prenoms" mt="sm" size="md" />
        <TextInput
          label="Entrez votre numero de telephone" // placeholder="Entrer votre numero de telephone"
          placeholder="229-9567-8901"
          mt="sm" /*{...register('email')}*/
        />
        <div>
          <Select
            style={{ marginTop: 20, zIndex: 2 }}
            data={[
              "Moto",
              "Voiture",
              "Tricycle",
              "Engins lourd",
              "Moquette",
              "Autres",
            ]}
            placeholder="Selectionnez un type d'engin"
            label="Selectionnez un type d'engin"
            mt="md"
            classNames={classes}
          />
        </div>
        <TextInput
          label="Le numero de la plaque"
          placeholder="Le numero de la plaque"
          mt="sm"
        />
        <DatePicker
          style={{ marginTop: 20 }}
          label="Date de reservation"
          placeholder="Date de reservation"
          classNames={classes}
          clearable={false}
        />
        {/* <Group position="center" mt="md">
             <Button <'a'> href="#" type="submit" mt="sm"> Reserver</Button>
       </Group> */}

        <Button<"a"> href="#" fullWidth mt="xl" size="md">
          {" "}
          Reserver{" "}
        </Button>
      </Paper>
    </div>
  );
}
export default Users;
