import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
}));

const childs = [
  {
    name: "Ozi",
    label: "Ozi",
  },
  {
    name: "Brian",
    label: "Brian",
  },
  {
    name: "Allan",
    label: "Allan",
  },
  {
    name: "Russ",
    label: "Russ",
  },
  {
    name: "David",
    label: "David",
  },
];

const AddChoreContainer = (props) => {
  const classes = useStyles();

  const [child, setChild] = React.useState("Ozi");

  const handleChange = (event) => {
    setChild(event.target.value);
  };

  const { addChore } = props;

  return (
    <div className="addChoreContainer">
      <h2 className="scrumfan-heading">ScrumFam!</h2>
      <TextField
        id="addChore"
        label="Chore Description"
        style={{ margin: 8 }}
        placeholder="Please write your chore description"
        //   helperText="can be use to provide extra info under the input field"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
      <div className="subAdd">
        <TextField
          id="reward"
          label="Reward"
          placeholder="Reward for that chore"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="assignTo"
          select
          label="Assign to"
          value={child}
          className={classes.textField}
          onChange={handleChange}
          variant="outlined"
        >
          {childs.map((option) => (
            <MenuItem key={option.name} value={option.name}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <Button
        variant="outlined"
        size="large"
        color="primary"
        onClick={(e) => {
          console.log("add chore button clicked");
          const descriptionInput = document.getElementById("addChore");
          const rewardInput = document.getElementById("reward");
          const assignToInput = document.getElementById("assignTo");
          const chore = {
            id: 666,
            created_by: "Fictional Parent",
            assigned_to: assignToInput.innerText,
            household: "Fictional Household",
            description: descriptionInput.value,
            created_at: "Fictional Timestamp",
            completed_on: null,
            verified_on: null,
            reward: rewardInput.value,
          };
          descriptionInput.value = "";
          rewardInput.value = "";
          return addChore(chore);
        }}
      >
        ADD CHORE
      </Button>
    </div>
  );
};

//will need to connect to the store here
export default AddChoreContainer;
