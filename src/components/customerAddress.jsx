import React, { useState, useEffect } from "react";
import {
  Button,
  Grid,
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import addressService from "../service/addressService";

const CustomerAddress = () => {
  let initialUserState = {
    userName: "",
    phNo: "",
    pincode: "",
    locality: "",
    address: "",
    city: "",
    landmark: "",
    addressType: "",
  };
  const [details, setDetails] = useState(initialUserState);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDetails({ ...details, [name]: value });
  };

  useEffect(() => {
    fetchitem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchitem = () => {
      addressService.getAddress().then(res=>{
        if (res.data !== null) {
            setDetails(res.data);
          }
      }).catch(err=>{
          console.log(err);
      })
  };

  const handleUpdate = () => {
      addressService.createAddress(details)
      .then(res=>{

      }).catch(err=>{
          console.log(err);
      })
  };
  return (
    <Grid
      item
      container
      id="cartContainer"
    >
      <Grid item xs={12}>
        <Accordion elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Customer Details</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid item container xs={10} spacing={1.5}>
              <Grid item xs={6}>
                <TextField
                  id="name"
                  name="userName"
                  placeholder="Name"
                  type="text"
                  variant="outlined"
                  required={true}
                  value={details.userName}
                  onChange={handleInputChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="phone"
                  placeholder="Phone Number"
                  type="text"
                  name="phNo"
                  required={true}
                  value={details.phNo}
                  onChange={handleInputChange}
                  variant="outlined"
                  fullWidth
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="pincode"
                  name="pincode"
                  placeholder="Pincode"
                  type="text"
                  variant="outlined"
                  value={details.pincode}
                  onChange={handleInputChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="locality"
                  name="locality"
                  placeholder="Locality"
                  type="text"
                  variant="outlined"
                  fullWidth
                  value={details.locality}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="address"
                  name="address"
                  placeholder="Address"
                  type="text"
                  variant="outlined"
                  fullWidth
                  value={details.address}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="city"
                  name="city"
                  placeholder="City/town"
                  type="text"
                  required={true}
                  variant="outlined"
                  fullWidth
                  value={details.city}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="landmark"
                  name="landmark"
                  placeholder="Landmark"
                  type="text"
                  variant="outlined"
                  fullWidth
                  value={details.landmark}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} align="left">
                <FormControl component="fieldset">
                  <FormLabel component="legend">Type</FormLabel>
                  <RadioGroup row aria-label="gender" defaultValue="Home">
                    <FormControlLabel
                      name="addressType"
                      value="Home"
                      control={<Radio />}
                      label="Home"
                      onChange={handleInputChange}
                    />
                    <FormControlLabel
                      name="addressType"
                      value="Work"
                      control={<Radio />}
                      label="Work"
                      onChange={handleInputChange}
                    />
                    <FormControlLabel
                      name="addressType"
                      value="Other"
                      control={<Radio />}
                      label="Other"
                      onChange={handleInputChange}
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
            <Grid item xs={12} align="right">
              <Button variant="contained" onClick={handleUpdate}>
                Continue
              </Button>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
};

export default CustomerAddress;